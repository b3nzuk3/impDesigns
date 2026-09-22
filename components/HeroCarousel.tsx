'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { tapePhoto } from '@/lib/media';

interface HeroSlide {
  src: string;
  alt: string;
  /** object-position so the product reads toward the right, away from the copy. */
  position: string;
}

const SLIDES: HeroSlide[] = [
  {
    src: tapePhoto(16),
    alt: 'A collection of real printed branded packaging tape rolls produced by Impact Creative Designs in Nairobi',
    position: '70% 50%',
  },
  {
    src: '/images/branded-tape-application.jpg',
    alt: 'Branded packing tape from Impact Creative Designs sealing a client carton',
    position: '65% 50%',
  },
  {
    src: '/images/branded-tape-rolls.jpg',
    alt: 'Finished printed tape rolls stacked as production samples at the Impact Creative Designs factory',
    position: '60% 50%',
  },
  {
    src: tapePhoto(17),
    alt: 'Printed branded tape on rolls and applied as a seal on a shipping carton',
    position: '60% 40%',
  },
];

const AUTOPLAY_MS = 5500;
/** After a manual interaction, wait this long before automatic advancement resumes. */
const INTERACTION_COOLDOWN_MS = 10000;
/** Swipe must exceed this horizontal distance (px) to change slides. */
const SWIPE_THRESHOLD_PX = 40;

/**
 * Full-bleed background image carousel for the homepage hero.
 * Real branded product photography, gentle crossfade + subtle slow zoom,
 * autoplay every ~5.5s (paused on hover/focus/recent interaction),
 * arrow + dot controls, touch swipe, prefers-reduced-motion aware.
 */
export const HeroCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const hoverRef = useRef(false);
  const lastInteractionRef = useRef(0);
  const touchStartXRef = useRef<number | null>(null);

  const markInteraction = useCallback(() => {
    lastInteractionRef.current = Date.now();
  }, []);

  const goTo = useCallback(
    (next: number) => {
      markInteraction();
      setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
    },
    [markInteraction],
  );

  const step = useCallback(
    (direction: 1 | -1) => {
      setIndex((current) => (current + direction + SLIDES.length) % SLIDES.length);
    },
    [],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const id = window.setInterval(() => {
      if (hoverRef.current) return;
      if (Date.now() - lastInteractionRef.current < INTERACTION_COOLDOWN_MS) return;
      step(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion, step]);

  return (
    <div
      className="absolute inset-0 z-0"
      aria-roledescription="carousel"
      aria-label="Real branded packaging tape produced by Impact Creative Designs"
      onMouseEnter={() => {
        hoverRef.current = true;
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
        markInteraction();
      }}
      onFocus={() => {
        hoverRef.current = true;
      }}
      onBlur={() => {
        hoverRef.current = false;
      }}
      onTouchStart={(event) => {
        touchStartXRef.current = event.touches[0].clientX;
        markInteraction();
      }}
      onTouchEnd={(event) => {
        const startX = touchStartXRef.current;
        touchStartXRef.current = null;
        if (startX === null) return;
        const deltaX = event.changedTouches[0].clientX - startX;
        if (Math.abs(deltaX) >= SWIPE_THRESHOLD_PX) {
          markInteraction();
          setIndex((current) => {
            const next = deltaX < 0 ? current + 1 : current - 1;
            return (next + SLIDES.length) % SLIDES.length;
          });
        }
      }}
    >
      {SLIDES.map((slide, slideIndex) => {
        const isActive = slideIndex === index;
        return (
          <div
            key={slide.src}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity ease-out ${
              prefersReducedMotion ? '' : 'duration-[1400ms]'
            } ${isActive ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={slideIndex === 0}
              loading={slideIndex === 0 ? undefined : 'lazy'}
              sizes="100vw"
              className={`object-cover will-change-transform ${
                isActive && !prefersReducedMotion ? 'hero-slow-zoom' : ''
              }`}
              style={{ objectPosition: slide.position }}
            />
          </div>
        );
      })}

      {/* Readability gradients: dark toward the copy (left), light lift on the right. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/65 to-neutral-950/20 md:from-neutral-950/85 md:via-neutral-950/50 md:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-neutral-950/75 to-transparent"
      />

      {/* Bottom control row: arrows flank the dots on mobile; on desktop
          the arrows return to the mid-height edges. */}
      <div className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => {
            markInteraction();
            step(-1);
          }}
          aria-label="Previous slide"
          className="inline-flex h-10 w-10 items-center justify-center border-2 border-white/70 bg-neutral-950/35 text-white backdrop-blur-sm transition-colors hover:bg-neutral-950/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:absolute md:left-5 md:top-1/2 md:h-11 md:w-11 md:-translate-y-1/2"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Slide indicators */}
        <div className="flex items-center gap-2">
          {SLIDES.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(slideIndex)}
              aria-label={`Go to slide ${slideIndex + 1} of ${SLIDES.length}`}
              aria-current={slideIndex === index}
              className={`h-1.5 transition-all duration-300 ${
                slideIndex === index
                  ? 'w-9 bg-orange-500'
                  : 'w-4 bg-white/55 hover:bg-white/85'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            markInteraction();
            step(1);
          }}
          aria-label="Next slide"
          className="inline-flex h-10 w-10 items-center justify-center border-2 border-white/70 bg-neutral-950/35 text-white backdrop-blur-sm transition-colors hover:bg-neutral-950/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:absolute md:right-5 md:top-1/2 md:h-11 md:w-11 md:-translate-y-1/2"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Screen-reader announcement of the visible slide */}
      <p aria-live="polite" className="sr-only">
        Slide {index + 1} of {SLIDES.length}: {SLIDES[index].alt}
      </p>
    </div>
  );
};
