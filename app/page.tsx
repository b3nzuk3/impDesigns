'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TapeStrip } from '@/components/TapeStrip';
import { HeroCarousel } from '@/components/HeroCarousel';
import { ManufacturingVideoSection } from '@/components/ManufacturingVideoSection';
import { RealTapeShowcase } from '@/components/RealTapeShowcase';
import { RealTapeProductPhoto } from '@/components/RealTapeProductPhoto';
import { RealAluminiumTagPhoto } from '@/components/RealAluminiumTagPhoto';
import { BeforeAfterBox } from '@/components/BeforeAfterBox';
import { ProcessTapeFlow } from '@/components/ProcessTapeFlow';
import { QuoteModal } from '@/components/QuoteModal';
import { MessageCircle, ArrowRight, ShieldCheck, Box, Tag, Truck, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_NAME, SITE_PHONE_DISPLAY, siteWhatsAppLink } from '@/lib/site-contact';

export default function HomePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<'tape' | 'aluminium'>('tape');

  const openQuoteFor = (product: 'tape' | 'aluminium') => {
    setQuoteProduct(product);
    setQuoteOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-[#fbfaf7] text-neutral-900">
      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION                                                   */}
      {/* Full-bleed background image carousel of real branded tape      */}
      {/* photography; copy anchored left, product composed right.       */}
      {/* ------------------------------------------------------------- */}
      <section className="relative flex items-center min-h-[620px] sm:min-h-[680px] lg:min-h-[760px] border-b-2 border-neutral-900 overflow-hidden">
        <HeroCarousel />

        <div className="relative z-10 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 pointer-events-none">
          {/* Left Column: Bold Editorial Headline & Conversion (over the darker gradient side) */}
          <div className="max-w-2xl space-y-6 pointer-events-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-mono tracking-tight text-white uppercase leading-[0.95] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
              YOUR BRAND.
              <br />
              <span className="text-orange-500">ON EVERY</span>
              <br />
              PACKAGE.
            </h1>

            <p className="text-base sm:text-lg text-neutral-100 font-sans max-w-xl leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)]">
              Custom branded packaging tapes and durable aluminium tags made for Kenyan businesses. Elevate your unboxing, prevent carton tampering, and give every product a permanent branded identifier.
            </p>

            {/* Conversion Buttons (No pill capsules; architectural 2x padding) */}
            <div className="pt-2 flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => openQuoteFor('tape')}
                className="inline-flex sm:w-auto items-center justify-center whitespace-nowrap bg-orange-600 hover:bg-orange-500 text-white font-mono text-sm font-bold uppercase tracking-wider py-3 px-6 sm:py-4 sm:px-8 border-2 border-orange-600 shadow-[4px_4px_0px_#111111] transition-all"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <Link
                href="/our-work"
                className="inline-flex sm:w-auto items-center justify-center whitespace-nowrap bg-transparent hover:bg-white/15 text-white font-mono text-sm font-bold uppercase tracking-wider py-3 px-6 sm:py-4 sm:px-8 border-2 border-white transition-colors text-center backdrop-blur-[2px]"
              >
                EXPLORE OUR WORK
              </Link>
            </div>

            {/* Instant WhatsApp Quick Link */}
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-neutral-200">
              <a
                href={siteWhatsAppLink(`Hello ${SITE_NAME}! I would like a quote for custom branded tapes or tags.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-green-300 font-bold border-b border-white/50 pb-0.5"
              >
                <MessageCircle className="w-4 h-4 text-green-400 fill-green-400" />
                <span>Chat with Nairobi factory desk on WhatsApp ({SITE_PHONE_DISPLAY})</span>
              </a>
            </div>

            {/* Key Industrial Specs (Pure facts, no badges) */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/30 text-neutral-100 font-mono text-xs">
              <div>
                <div className="font-black text-white text-base">360 ROLLS</div>
                <div className="text-neutral-300 text-[11px]">Factory MOQ</div>
              </div>
              <div>
                <div className="font-black text-white text-base">3-5 DAYS</div>
                <div className="text-neutral-300 text-[11px]">Nairobi Turnaround</div>
              </div>
              <div>
                <div className="font-black text-white text-base">47 COUNTIES</div>
                <div className="text-neutral-300 text-[11px]">Door Dispatch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* REAL PRINTED TAPE REFERENCE STRIP                              */}
      {/* ------------------------------------------------------------- */}
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <RealTapeShowcase id="reference-real-tape-showcase" compact />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* REAL MANUFACTURING FOOTAGE                                     */}
      {/* Behind-the-scenes proof: tape printing line in Nairobi.        */}
      {/* Video source loads lazily via IntersectionObserver.            */}
      {/* ------------------------------------------------------------- */}
      <ManufacturingVideoSection />

      {/* ------------------------------------------------------------- */}
      {/* IMMEDIATE PRODUCT INTRODUCTION                                */}
      {/* Statement: WE PUT YOUR BRAND ON THE THINGS PEOPLE NOTICE.     */}
      {/* The Two Core Product Families: BRANDED TAPES & ALUMINIUM TAGS */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-neutral-950 uppercase leading-none">
            WE PUT YOUR BRAND
            <br />
            <span className="text-orange-600">ON THE THINGS</span> PEOPLE NOTICE.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-sans">
            Generic boxes and blank packaging waste your most valuable customer touchpoint. We specialize strictly in the two physical products that seal and identify your inventory.
          </p>
        </div>

        {/* The Two Primary Product Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* PRODUCT FAMILY 1: BRANDED TAPES (Dominant) */}
          <div className="bg-white border-2 border-neutral-900 shadow-[6px_6px_0px_#111111] p-8 flex flex-col justify-between relative group hover:-translate-y-1 transition-transform">
            {/* Top architectural tape accent */}
            <div className="absolute -top-3 left-6 right-6 bg-[#111111] text-white font-mono text-[10px] font-bold tracking-[0.2em] py-0.5 px-3 uppercase text-center truncate">
              SPECIALTY 01 • PRINTED PACKAGING TAPE
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="font-mono text-2xl font-black text-neutral-950 uppercase">
                  CUSTOM BRANDED TAPES
                </span>
                <Box className="w-6 h-6 text-orange-600" />
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-sans">
                Industrial-grade printed packaging tape made from tear-resistant BOPP film or reinforced water-activated kraft paper. High-tack adhesive bonds instantly to recycled cartons, prevents pilferage in transit, and guarantees your logo is seen on every delivery van in Nairobi.
              </p>

              {/* Physical Product Showcase Visual: real branded tape photography */}
              <div className="bg-[#f2efe9] border border-neutral-300 p-5 mb-6 relative overflow-hidden">
                <div className="flex items-center justify-between text-[9px] font-mono text-neutral-600 uppercase font-bold tracking-wider mb-2">
                  <span>REAL PRODUCTION REFERENCES</span>
                  <span>ROLL + APPLICATION</span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <RealTapeProductPhoto
                    image={1}
                    alt="Real branded tape products photographed together as sample references"
                    label="ROLL SAMPLE"
                    caption="Printed roll finishes"
                    aspect="aspect-[4/3]"
                  />
                  <RealTapeProductPhoto
                    image={3}
                    alt="Branded packing tape on a shipping carton with a tape roll nearby"
                    label="IN USE"
                    caption="Applied carton seal"
                    aspect="aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Specifications List */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono border-t border-neutral-200 pt-4 mb-6">
                <div>
                  <span className="text-neutral-500 block">AVAILABLE WIDTHS:</span>
                  <span className="font-bold text-neutral-900">24mm, 48mm (Standard), 72mm</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">PRINT COLORS:</span>
                  <span className="font-bold text-neutral-900">1 to 4 Pantone Spot Colors</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">MINIMUM ORDER:</span>
                  <span className="font-bold text-neutral-900">360 Rolls per design</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">ROLL LENGTHS:</span>
                  <span className="font-bold text-neutral-900">50m, 100m, 150m Machine</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-200">
              <Link
                href="/branded-tapes"
                className="flex-1 inline-flex items-center justify-center bg-neutral-950 hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase py-3.5 px-6 transition-colors text-center"
              >
                <span>Explore Branded Tapes →</span>
              </Link>
              <button
                type="button"
                onClick={() => openQuoteFor('tape')}
                className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs font-bold uppercase py-3.5 px-6 transition-colors"
              >
                Quote Tape
              </button>
            </div>
          </div>

          {/* PRODUCT FAMILY 2: ALUMINIUM TAGS (Physical Object Composition) */}
          <div className="bg-white border-2 border-neutral-900 shadow-[6px_6px_0px_#111111] p-8 flex flex-col justify-between relative group hover:-translate-y-1 transition-transform">
            {/* Top architectural accent */}
            <div className="absolute -top-3 left-6 right-6 bg-[#ea580c] text-white font-mono text-[10px] font-bold tracking-[0.2em] py-0.5 px-3 uppercase text-center truncate">
              SPECIALTY 02 • CUSTOM ALUMINIUM TAGS
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="font-mono text-2xl font-black text-neutral-950 uppercase">
                  CUSTOM ALUMINIUM TAGS
                </span>
                <Tag className="w-6 h-6 text-orange-600" />
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-sans">
                Durable branded tags and barcode asset plates made from 0.5mm to 0.8mm anodized aluminium. Finished with high-contrast markings, serialized codes, and reliable adhesive or rivet mounting for retail, logistics, and industrial use.
              </p>

              {/* Real aluminium tag references from the R2 production gallery */}
              <div className="grid grid-cols-2 items-stretch gap-3 border border-neutral-300 bg-[#e9e3d8] p-4 mb-6 min-h-[200px]">
                <RealAluminiumTagPhoto
                  image={1}
                  alt="Brushed aluminium property tag with barcode produced for MUA"
                  label="R2 TAG SAMPLE"
                  aspect="aspect-[2/1]"
                  className="w-full"
                />
                <RealAluminiumTagPhoto
                  image={6}
                  alt="Metal asset tag with barcode produced for Equity Bank"
                  label="R2 TAG SAMPLE"
                  aspect="aspect-[2/1]"
                  className="w-full"
                />
              </div>

              {/* Specifications List */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono border-t border-neutral-200 pt-4 mb-6">
                <div>
                  <span className="text-neutral-500 block">TAG MATERIAL:</span>
                  <span className="font-bold text-neutral-900">0.5mm / 0.8mm Anodized Aluminium</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">SPECIAL FINISHES:</span>
                  <span className="font-bold text-neutral-900">Satin, Brushed, Matte Anodic Marking</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">MOUNTING:</span>
                  <span className="font-bold text-neutral-900">3M 468MP Adhesive, Rivets, Screws</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">APPLICATIONS:</span>
                  <span className="font-bold text-neutral-900">Apparel, Coffee, Retail, Hampers</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-200">
              <Link
                href="/custom-tags"
                className="flex-1 inline-flex items-center justify-center bg-neutral-950 hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase py-3.5 px-6 transition-colors text-center"
              >
                <span>Explore Aluminium Tags →</span>
              </Link>
              <button
                type="button"
                onClick={() => openQuoteFor('aluminium')}
                className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs font-bold uppercase py-3.5 px-6 transition-colors"
              >
                Quote Aluminium Tags
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* BEFORE & AFTER INTERACTIVE TRANSFORMATION                      */}
      {/* "MAKE YOUR PACKAGE UNMISTAKABLY YOURS"                        */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
        <BeforeAfterBox />
      </section>

      {/* ------------------------------------------------------------- */}
      {/* EDITORIAL PRODUCT SHOWCASE                                    */}
      {/* Asymmetric layouts, oversized typography, material details     */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-neutral-900">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-neutral-950 uppercase leading-none">
            ENGINEERED PACKAGING MATERIALS
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed font-sans">
            Manufactured in Nairobi to withstand rigorous logistics across East Africa. From heat and dust on upcountry courier transit to cold room humidity.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Card 1: 48mm Standard Printed Packaging Tape (Span 7) */}
          <div className="md:col-span-7 bg-white border-2 border-neutral-900 p-8 shadow-[6px_6px_0px_#111111] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono text-xs text-orange-600 font-bold block mb-1">
                    MOST POPULAR
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-mono uppercase text-neutral-900">
                    48mm Standard Logo Tape
                  </h3>
                </div>
                <div className="font-mono text-xs font-bold bg-neutral-100 border border-neutral-300 py-1 px-2.5">
                  BOPP 50µm
                </div>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-sans">
                The backbone of Kenyan commercial parcel logistics. 48mm (2-inch) width seals standard cartons perfectly in a single pass. High-density flexographic ink ensures barcodes and branding remain razor-sharp.
              </p>

              {/* Real product reference photo */}
              <div className="my-6">
                <RealTapeProductPhoto
                  image={4}
                  alt="A branded tape roll photographed as a real product reference"
                  label="TAPE SAMPLE"
                  caption="Reference photo · branded tape sample"
                  aspect="aspect-[2.4/1]"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs font-mono pt-4 border-t border-neutral-200">
                <div>
                  <span className="text-neutral-500 block">FILM:</span>
                  <span className="font-bold">Biaxially-Oriented PP</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">ADHESIVE:</span>
                  <span className="font-bold">Water Acrylic / Solvent</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">LENGTH:</span>
                  <span className="font-bold">100m Manual / 150m Machine</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 flex justify-between items-center">
              <Link
                href="/branded-tapes"
                className="font-mono text-xs font-bold uppercase text-neutral-900 hover:text-orange-600 flex items-center gap-1"
              >
                <span>View Full Tape Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => openQuoteFor('tape')}
                className="bg-neutral-900 text-white font-mono text-xs font-bold uppercase py-2.5 px-5 hover:bg-orange-600 transition-colors"
              >
                Quote 48mm
              </button>
            </div>
          </div>

          {/* Card 2: Anodized Aluminium Branded Tags (Span 5) */}
          <div className="md:col-span-5 bg-[#171717] text-white border-2 border-neutral-900 p-8 shadow-[6px_6px_0px_#ea580c] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono text-xs text-amber-400 font-bold block mb-1">
                    LUXURY RETAIL
                  </span>
                  <h3 className="text-2xl font-black font-mono uppercase text-white">
                    Anodized Aluminium Tags
                  </h3>
                </div>
                <div className="font-mono text-xs font-bold bg-neutral-800 border border-neutral-700 py-1 px-2.5 text-amber-300">
                  RIGID
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-sans">
                Durable anodized aluminium tags for premium fashion lines, footwear, and specialty artisan goods in Kenya. Resists curling, tearing, moisture, and UV exposure.
              </p>

              {/* Physical Tag Mock Inside */}
              <div className="my-4 p-4 bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs font-bold text-white uppercase">
                    3M 468MP ADHESIVE + RIVET OPTIONS
                  </div>
                  <div className="font-mono text-[11px] text-neutral-400 mt-0.5">
                    Serialized markings and barcode-ready surfaces
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-[10px] font-mono font-bold text-amber-400">
                  Al
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono pt-4 border-t border-neutral-800 text-neutral-300">
                <div>
                  <span className="text-neutral-500 block">WEIGHT:</span>
                  <span className="font-bold text-white">0.8mm Anodized Aluminium</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">FINISH:</span>
                  <span className="font-bold text-white">Satin / Brushed Finish</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-between items-center">
              <Link
                href="/custom-tags"
                className="font-mono text-xs font-bold uppercase text-amber-400 hover:text-white flex items-center gap-1"
              >
                <span>View Aluminium Tags</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => openQuoteFor('aluminium')}
                className="bg-orange-600 hover:bg-orange-500 text-white font-mono text-xs font-bold uppercase py-2.5 px-5 transition-colors"
              >
                Quote Aluminium Tags
              </button>
            </div>
          </div>

          {/* Card 3: Eco Kraft Brown Paper Tape (Span 6) */}
          <div className="md:col-span-6 bg-[#dfcfba] border-2 border-neutral-900 p-8 shadow-[6px_6px_0px_#111111] flex flex-col justify-between text-[#2e1d0c]">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black font-mono uppercase">
                  Water-Activated Kraft Paper Tape
                </h3>
                <span className="font-mono text-xs font-bold bg-[#c4ab89] py-1 px-2.5">
                  100% RECYCLABLE
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6 font-sans">
                Fuses permanently with the corrugated fibers of brown shipping boxes. Tamper-evident bond cannot be peeled off without tearing the carton surface.
              </p>
              <RealTapeProductPhoto
                image={5}
                alt="A real branded tape product photographed as a sample reference"
                label="TAPE REFERENCE"
                caption="Reference photo · branded tape sample"
                aspect="aspect-[2.2/1]"
              />
            </div>
            <div className="mt-6 pt-4 border-t border-[#c0a480] flex justify-between items-center">
              <span className="font-mono text-xs font-bold">Standard 48mm & 72mm</span>
              <button
                type="button"
                onClick={() => openQuoteFor('tape')}
                className="bg-[#2e1d0c] text-white font-mono text-xs font-bold uppercase py-2 px-4 hover:bg-black transition-colors"
              >
                Inquire Kraft
              </button>
            </div>
          </div>

          {/* Card 4: Transparent Crystal Logo Tape (Span 6) */}
          <div className="md:col-span-6 bg-white border-2 border-neutral-900 p-8 shadow-[6px_6px_0px_#111111] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black font-mono uppercase text-neutral-900">
                  Crystal Transparent Logo Tape
                </h3>
                <span className="font-mono text-xs font-bold bg-neutral-100 border border-neutral-300 py-1 px-2.5">
                  SEMI-INVISIBLE
                </span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-sans">
                Allows your underlying box color, white mailer, or pattern to show through clearly while highlighting bold printed brand typography.
              </p>
              <RealTapeProductPhoto
                image={6}
                alt="A real branded tape product photographed as a sample reference"
                label="TAPE REFERENCE"
                caption="Reference photo · branded tape sample"
                aspect="aspect-[2.2/1]"
              />
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200 flex justify-between items-center">
              <span className="font-mono text-xs font-bold text-neutral-700">Crisp Single-Color & Reverse Print</span>
              <button
                type="button"
                onClick={() => openQuoteFor('tape')}
                className="bg-neutral-900 text-white font-mono text-xs font-bold uppercase py-2 px-4 hover:bg-orange-600 transition-colors"
              >
                Inquire Clear
              </button>
            </div>
          </div>

          {/* Card 5: Anodized Aluminium Barcode Asset Tags (Span 12 - Full Width Industrial) */}
          <div className="md:col-span-12 bg-neutral-950 text-white border-2 border-neutral-900 p-8 shadow-[6px_6px_0px_#111111] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="font-mono text-xs text-[#34d399] font-bold block mb-1">
                INDUSTRIAL PRODUCT LINE • FIXED ASSET TRACKING
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-mono uppercase text-white tracking-tight">
                Anodized Aluminium Barcode Asset Tags
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-3 font-sans">
                Heavy-duty 0.5mm & 0.8mm metallic aluminium nameplates with laser-etched/photo-anodized scannable barcodes. Designed for Kenyan enterprise asset registers, IT server racks, vehicle fleets, and industrial plant machinery. Resistant to heat (450°C), solvents, and UV exposure.
              </p>
              <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-400">
                <div>
                  <span className="text-neutral-500 block">SUBSTRATE:</span>
                  <span className="text-white font-bold">0.5mm / 0.8mm Anodized Al</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">BARCODES:</span>
                  <span className="text-white font-bold">Code 128 / DataMatrix</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">MOUNTING:</span>
                  <span className="text-white font-bold">3M 468MP or Rivet Holes</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <RealAluminiumTagPhoto
                image={30}
                alt="Brushed metal asset tag with barcode produced for KCB Foundation"
                label="R2 TAG SAMPLE"
                aspect="aspect-[2/1]"
                className="w-full max-w-[360px]"
              />
              <div className="flex items-center gap-3 w-full justify-center">
                <Link
                  href="/custom-tags"
                  className="font-mono text-xs font-bold uppercase text-[#34d399] hover:text-white flex items-center gap-1"
                >
                  <span>Explore Aluminium Tags</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => openQuoteFor('aluminium')}
                  className="bg-white text-neutral-950 font-mono text-xs font-bold uppercase py-2.5 px-5 hover:bg-neutral-200 transition-colors"
                >
                  Quote Metal Tags
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5-STEP PROCESS SECTION: "HOW CUSTOM TAPE IS MADE"              */}
      {/* ------------------------------------------------------------- */}
      <ProcessTapeFlow />

      {/* ------------------------------------------------------------- */}
      {/* OUR WORK SECTION: "SEE YOUR BRAND LIKE THIS."                  */}
      {/* Real completed client packaging across Kenya                  */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 border-t-2 border-neutral-900" id="our-work">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-neutral-950 uppercase leading-none">
              SEE YOUR BRAND LIKE THIS.
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed font-sans">
              Completed work for leading Kenyan retailers, coffee roasteries, courier delivery fleets, and e-commerce merchants.
            </p>
          </div>

          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-neutral-950 hover:text-orange-600 transition-colors border-b-2 border-neutral-950 pb-1 self-start md:self-auto"
          >
            <span>View Full Portfolio Showcase</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Masonry / Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Work 1: Savannah Coffee Roasters */}
          <div className="bg-white border-2 border-neutral-900 p-6 shadow-[4px_4px_0px_#111111] flex flex-col justify-between">
            <div>
              {/* Physical Object Presentation Mockup: Branded Tape Seam + Rounded Roll + Tag */}
              <div className="bg-[#bfa588] p-4 border border-[#a28666] relative flex flex-col justify-between min-h-[250px] mb-5 overflow-hidden">
                <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-[#422c15] uppercase font-bold tracking-wider mb-1">
                  <span>SEALED TAPE SEAM</span>
                  <span>ROLL: SAVANNAH 48MM</span>
                </div>

                {/* Real branded tape product reference */}
                <div className="relative z-10 my-1 shadow-sm">
                  <RealTapeProductPhoto
                    image={2}
                    alt="A real branded tape product photographed as a packaging reference"
                    label="REAL TAPE"
                    caption="Branded tape photo reference"
                    aspect="aspect-[2.5/1]"
                  />
                </div>

                {/* Rounded Tape Roll together with Kraft Tag */}
                <div className="relative z-20 flex items-end justify-between pt-2">
                  <div className="flex flex-col items-center">
                    <div className="w-24 drop-shadow-md">
                      <RealTapeProductPhoto
                        image={7}
                        alt="A group of real branded tape samples photographed together"
                        label="TAPE SAMPLE"
                        aspect="aspect-square"
                      />
                    </div>
                    <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-black bg-white/90 px-1.5 py-0.5 border border-neutral-400 mt-1 shadow-xs">
                      ROUNDED TAPE ROLL
                    </span>
                  </div>

                  <div className="flex flex-col items-end">
                    <RealAluminiumTagPhoto
                      image={26}
                      alt="R2 aluminium tag design sample shown as a general product reference"
                      label="R2 TAG SAMPLE"
                      aspect="aspect-[2/1]"
                      className="w-24 sm:w-28"
                    />
                    <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-black bg-white/90 px-1.5 py-0.5 border border-neutral-400 mt-1 shadow-xs">
                      ALUMINIUM TAG REFERENCE
                    </span>
                  </div>
                </div>
              </div>

              <div className="font-mono text-xs text-orange-600 font-bold mb-1">
                SPECIALTY COFFEE • ROASTERY PACKAGING
              </div>
              <h3 className="text-xl font-bold font-mono uppercase text-neutral-950">
                Savannah Roasters Nairobi
              </h3>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-sans">
                Full packaging suite: 48mm heavy-tack black tape sealing wholesale shipping crates, paired with durable anodized aluminium product tags for 1kg burlap bags.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-neutral-200 flex justify-between items-center text-xs font-mono text-neutral-500">
              <span>Nairobi Westlands</span>
              <span className="font-bold text-neutral-900">48mm Tape + Tags</span>
            </div>
          </div>

          {/* Work 2: Kilima Apparel */}
          <div className="bg-white border-2 border-neutral-900 p-6 shadow-[4px_4px_0px_#111111] flex flex-col justify-between">
            <div>
              {/* Physical Object Presentation Mockup: Branded Tape Seam + Rounded Roll + Tag */}
              <div className="bg-[#1f1f1f] p-4 border border-neutral-800 relative flex flex-col justify-between min-h-[250px] mb-5 overflow-hidden text-white">
                <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-neutral-400 uppercase font-bold tracking-wider mb-1">
                  <span>EXPRESS DISPATCH SEAM</span>
                  <span>ROLL: KILIMA 48MM</span>
                </div>

                {/* Real branded tape product reference */}
                <div className="relative z-10 my-1 shadow-sm">
                  <RealTapeProductPhoto
                    image={12}
                    alt="A group of real branded tape products photographed as a reference"
                    label="REAL TAPE"
                    caption="Branded tape photo reference"
                    aspect="aspect-[2.5/1]"
                  />
                </div>

                {/* Rounded Tape Roll together with Garment Tag */}
                <div className="relative z-20 flex items-end justify-between pt-2">
                  <div className="flex flex-col items-center">
                    <div className="w-24 drop-shadow-md">
                      <RealTapeProductPhoto
                        image={9}
                        alt="A real branded tape product displayed upright"
                        label="TAPE SAMPLE"
                        aspect="aspect-square"
                      />
                    </div>
                    <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-white bg-neutral-900 px-1.5 py-0.5 border border-neutral-700 mt-1 shadow-xs">
                      ROUNDED TAPE ROLL
                    </span>
                  </div>

                  <div className="flex flex-col items-end">
                    <RealAluminiumTagPhoto
                      image={28}
                      alt="R2 aluminium tag design sample shown as a general product reference"
                      label="R2 TAG SAMPLE"
                      aspect="aspect-[2/1]"
                      className="w-24 sm:w-28"
                    />
                    <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-white bg-neutral-900 px-1.5 py-0.5 border border-neutral-700 mt-1 shadow-xs">
                      ALUMINIUM TAG REFERENCE
                    </span>
                  </div>
                </div>
              </div>

              <div className="font-mono text-xs text-orange-600 font-bold mb-1">
                CONTEMPORARY FASHION • E-COMMERCE
              </div>
              <h3 className="text-xl font-bold font-mono uppercase text-neutral-950">
                Kilima Apparel Studio
              </h3>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-sans">
                Custom red & black mailer tape sealing courier parcels across Kenya, combined with serialized aluminium garment tags featuring durable anodic markings and mounting holes.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-neutral-200 flex justify-between items-center text-xs font-mono text-neutral-500">
              <span>Nairobi & Kilimani</span>
              <span className="font-bold text-neutral-900">Branded Mailer Tape</span>
            </div>
          </div>

          {/* Work 3: QuickDrop Courier Logistics */}
          <div className="bg-white border-2 border-neutral-900 p-6 shadow-[4px_4px_0px_#111111] flex flex-col justify-between">
            <div>
              {/* Physical Object Presentation Mockup: Branded Tape Seam + Rounded Roll + Tag */}
              <div className="bg-[#e8decb] p-4 border border-[#c7b99f] relative flex flex-col justify-between min-h-[250px] mb-5 overflow-hidden">
                <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-[#523d24] uppercase font-bold tracking-wider mb-1">
                  <span>SECURITY FREIGHT SEAM</span>
                  <span>ROLL: 72MM HEAVY</span>
                </div>

                {/* Real branded tape product reference */}
                <div className="relative z-10 my-1 shadow-sm">
                  <RealTapeProductPhoto
                    image={14}
                    alt="A group of real branded tape products photographed as a reference"
                    label="REAL TAPE"
                    caption="Branded tape photo reference"
                    aspect="aspect-[2.5/1]"
                  />
                </div>

                {/* Rounded Tape Roll together with Inspection Seal */}
                <div className="relative z-20 flex items-end justify-between pt-2">
                  <div className="flex flex-col items-center">
                    <div className="w-24 drop-shadow-md">
                      <RealTapeProductPhoto
                        image={10}
                        alt="A real branded tape product displayed upright"
                        label="TAPE SAMPLE"
                        aspect="aspect-square"
                      />
                    </div>
                    <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-black bg-white/90 px-1.5 py-0.5 border border-neutral-400 mt-1 shadow-xs">
                      ROUNDED TAPE ROLL
                    </span>
                  </div>

                  <div className="flex flex-col items-end">
                    <RealAluminiumTagPhoto
                      image={31}
                      alt="R2 aluminium tag design sample shown as a general product reference"
                      label="R2 TAG SAMPLE"
                      aspect="aspect-[2/1]"
                      className="w-24 sm:w-28"
                    />
                    <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-black bg-white/90 px-1.5 py-0.5 border border-neutral-400 mt-1 shadow-xs">
                      ALUMINIUM TAG REFERENCE
                    </span>
                  </div>
                </div>
              </div>

              <div className="font-mono text-xs text-orange-600 font-bold mb-1">
                LAST-MILE LOGISTICS • SECURITY
              </div>
              <h3 className="text-xl font-bold font-mono uppercase text-neutral-950">
                QuickDrop East Africa Logistics
              </h3>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-sans">
                High-visibility 72mm tamper-evident security tape printed in bold warning amber and black. Eliminated carton tampering claims on Mombasa-Nairobi haulage routes.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-neutral-200 flex justify-between items-center text-xs font-mono text-neutral-500">
              <span>Nationwide Fleet</span>
              <span className="font-bold text-neutral-900">72mm Security Tape</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FACTORY DIRECT QUOTE BANNER                                   */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-t-2 border-neutral-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl font-black font-mono uppercase tracking-tight text-white">
              READY TO BRAND EVERY SHIPMENT?
            </h2>
            <p className="text-sm text-neutral-400 font-sans max-w-lg">
              Send your logo or specifications today. We will send back a free digital scale proof and factory quote within 2 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => openQuoteFor('tape')}
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-mono font-bold text-xs uppercase py-4 px-8 border border-orange-400 shadow-md transition-colors"
            >
              REQUEST A FACTORY QUOTE
            </button>

            <a
              href={siteWhatsAppLink(`Hello ${SITE_NAME}, I would like a quote for packaging tape.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-black font-mono font-bold text-xs uppercase py-4 px-8 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Quote Modal */}
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={quoteProduct}
      />
    </div>
  );
}
