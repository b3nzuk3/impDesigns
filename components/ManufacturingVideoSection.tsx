'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import {
  tapeManufacturingPosterAvif,
  tapeManufacturingPosterWebp,
  tapeManufacturingVideo,
} from '@/lib/media';

/**
 * Real manufacturing footage section.
 *
 * Performance contract:
 * - The video source is NOT attached during initial page load. Only the
 *   lightweight poster (~16KB) is fetched up front.
 * - An IntersectionObserver attaches the R2/CDN source only when the section
 *   approaches the viewport (`rootMargin`), then starts muted inline playback.
 * - Playback pauses whenever the section leaves the viewport, so scrolled-past
 *   visits and background tabs never stream the file.
 * - `prefers-reduced-motion`: poster only; playback is strictly manual.
 *
 * Layout:
 * - Desktop (lg+): two-column grid — heading/copy left, video right — so the
 *   section stays compact instead of stacking into a very tall block.
 * - Mobile: single column, natural DOM order (heading → video → notes),
 *   identical to the original stacked layout.
 *
 * Delivery: Cloudflare R2 -> custom domain CDN (`images.impactcreativedesigns.co.ke`),
 * immutable versioned key, HTTP range (`206`) streaming — no r2.dev, no bundling.
 */

const VIDEO_ALT =
  'Footage of custom branded packaging tape being printed on the production line at the Impact Creative Designs factory in Nairobi, Kenya';

export const ManufacturingVideoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [sourceAttached, setSourceAttached] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  // Attach the video source lazily, only when the section nears the viewport.
  // (Except on reduced-motion devices, where the poster stays until the
  // visitor explicitly presses play.)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || sourceAttached) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          if (!prefersReducedMotion) {
            setSourceAttached(true);
          }
          observer.disconnect();
        }
      },
      // Start loading one viewport-height before the section becomes visible.
      { rootMargin: '100% 0px', threshold: 0 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [sourceAttached, prefersReducedMotion]);

  // Autoplay muted when the section is substantially in view; pause whenever
  // it leaves the viewport.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          if (prefersReducedMotion) return; // manual playback only
          // Stay muted unless the user explicitly unmuted earlier.
          if (!video.hasAttribute('data-user-unmuted')) {
            video.muted = true;
            setIsMuted(true);
          }
          video.play().then(
            () => setIsPlaying(true),
            () => setIsPlaying(false),
          );
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      // ~35% of the section visible before autoplay kicks in.
      { threshold: 0.35 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(
        () => setIsPlaying(true),
        () => setIsPlaying(false),
      );
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    if (nextMuted) {
      video.removeAttribute('data-user-unmuted');
    } else {
      video.setAttribute('data-user-unmuted', '');
    }
    setIsMuted(nextMuted);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manufacturing"
      aria-label="Real manufacturing footage: custom branded tape being printed in Nairobi"
      className="border-b-2 border-neutral-900 bg-neutral-950 text-white"
    >
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-14">
        {/* Desktop (lg+): heading left, video right (row 1), supporting notes
            bottom-left (row 2), video spans both rows. Mobile: stacked in
            DOM order — heading, video, notes. */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:grid-rows-[auto,1fr] lg:items-start lg:gap-x-14 lg:gap-y-9">
          {/* Section heading — real HTML text for SEO/accessibility */}
          <div className="lg:col-start-1 lg:row-start-1">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              <span aria-hidden="true" className="h-2 w-2 bg-green-500" />
              <span>REAL PRODUCTION • NAIROBI, KENYA</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase leading-none">
              SEE YOUR BRAND
              <br />
              <span className="text-orange-500">COME TO LIFE</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
              From print to finished roll — see how we produce custom branded packaging tape.
            </p>
          </div>

          {/* Video: vertical phone footage — keep its natural aspect ratio.
              Capped width everywhere (portrait column), centered in its
              desktop grid cell. Poster-only until the source is attached. */}
          <figure className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[360px] border-2 border-neutral-800 bg-neutral-900 shadow-[6px_6px_0px_#ea580c] lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <div className="relative aspect-[478/850]">
              {/* Poster: real frame from the footage, AVIF with WebP fallback.
                  next/image keeps the initial fetch tiny and lazy. */}
              <Image
                src={tapeManufacturingPosterAvif()}
                alt={VIDEO_ALT}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 85vw, 360px"
                className={`object-cover ${sourceAttached ? 'opacity-0 transition-opacity duration-700' : 'opacity-100'}`}
                /* WebP fallback for browsers without AVIF */
                onError={(event) => {
                  const img = event.currentTarget;
                  if (!img.src.includes('.webp')) {
                    img.src = tapeManufacturingPosterWebp();
                  }
                }}
              />

              {/* The element is always in the DOM (poster stays visible
                  underneath) but has no src until the observer fires —
                  so nothing video-shaped downloads during initial load. */}
              <video
                ref={videoRef}
                className={`absolute inset-0 h-full w-full object-cover ${sourceAttached ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                playsInline
                muted
                loop
                preload="none"
                poster={tapeManufacturingPosterWebp()}
                aria-label={VIDEO_ALT}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                {sourceAttached ? (
                  <source src={tapeManufacturingVideo()} type="video/mp4" />
                ) : null}
              </video>

              {/* Playback + mute controls, overlaid bottom-left, keyboard
                  accessible and touch-friendly (44px+ targets). */}
              <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause manufacturing video' : 'Play manufacturing video'}
                  aria-pressed={isPlaying}
                  className="inline-flex h-11 w-11 items-center justify-center border border-white/30 bg-neutral-950/70 text-white backdrop-blur-sm transition-colors hover:bg-neutral-950/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute manufacturing video' : 'Mute manufacturing video'}
                  aria-pressed={!isMuted}
                  className="inline-flex h-11 w-11 items-center justify-center border border-white/30 bg-neutral-950/70 text-white backdrop-blur-sm transition-colors hover:bg-neutral-950/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
              </div>

              <figcaption className="sr-only">
                Real production footage showing printed branded tape running through the printing press at our Nairobi factory.
              </figcaption>
            </div>
          </figure>

          {/* Supporting notes — below the video on mobile; in the left
              column under the heading on desktop. */}
          <div className="font-mono text-xs text-neutral-400 space-y-5 max-w-md lg:col-start-1 lg:row-start-2 lg:self-center lg:max-w-sm">
            <div className="border-t-2 border-neutral-800 pt-4">
              <span className="block font-black uppercase text-white text-base mb-1">PRINTED IN-HOUSE</span>
              Flexographic print rollers apply your logo directly onto the tape film — no outsourcing, no generic stock.
            </div>
            <div className="border-t-2 border-neutral-800 pt-4">
              <span className="block font-black uppercase text-white text-base mb-1">SAME LINE, YOUR DESIGN</span>
              Every roll in the footage is a real client order, printed and wound at our Nairobi workshop.
            </div>
            <div className="border-t-2 border-neutral-800 pt-4 text-neutral-500">
              Footage is muted by default. Use the controls to play with sound.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
