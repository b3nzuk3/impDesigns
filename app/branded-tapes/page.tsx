'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TapeStrip } from '@/components/TapeStrip';
import { RealTapeShowcase } from '@/components/RealTapeShowcase';
import { RealTapeProductPhoto } from '@/components/RealTapeProductPhoto';
import { QuoteModal } from '@/components/QuoteModal';
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Box, Layers, HelpCircle } from 'lucide-react';

export default function BrandedTapesPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const tapeSpecs = [
    {
      title: '48mm Standard Logo Tape (2-Inch)',
      badge: 'MOST POPULAR',
      desc: 'The workhorse of commercial parcel dispatch and carton sealing across Kenya. Covers standard cardboard seams with unmatched tensile strength and high shear adhesive tack.',
      widths: '48mm (Width) × 50m / 100m (Length)',
      film: 'BOPP (Biaxially Oriented Polypropylene) 28µm to 32µm film',
      adhesive: 'Water-based pressure-sensitive acrylic / Hot melt rubber resin',
      minOrder: '36 Rolls (1 carton)',
      applications: 'E-commerce dispatch, courier boxes, retail packing, warehouse carton sealing',
      coreText: 'WHITE • 48MM',
    },
    {
      title: '72mm Heavy-Duty Security Tape (3-Inch)',
      badge: 'SECURITY & EXPORT',
      desc: 'Wide-format high-tack tape designed for heavy corrugated shipping boxes, export freight, and high-value cargo prone to tampering during transit between Nairobi, Mombasa, and upcountry hubs.',
      widths: '72mm (Width) × 100m / 150m (Length)',
      film: 'Heavy-gauge 35µm BOPP film with reinforced cross-tensile rigidity',
      adhesive: 'High-tack aggressive solvent adhesive that bites deep into rough kraft fibers',
      minOrder: '24 Rolls',
      applications: 'Heavy cargo, export pallets, agricultural produce crates, pharmaceutical consignments',
      coreText: 'SECURITY • 72MM',
    },
    {
      title: 'Eco Water-Activated Reinforced Kraft Tape',
      badge: '100% RECYCLABLE',
      desc: 'Sustainable packaging tape made from natural kraft paper and plant-based potato starch adhesive. When moistened, it bonds molecularly with corrugated board, creating a permanent tamper-evident seal that cannot be removed without ripping the carton open.',
      widths: '48mm & 70mm × 50m / 100m',
      film: 'Natural unbleached kraft paper (optionally reinforced with fiberglass filaments)',
      adhesive: 'Water-activated natural starch adhesive',
      minOrder: '36 Rolls',
      applications: 'Eco-conscious brands, specialty coffee roasters, cosmetics, sustainable boutiques',
      coreText: 'ECO KRAFT',
    },
    {
      title: '24mm Slim Boutique Logo Tape (1-Inch)',
      badge: 'SPECIALTY & RETAIL',
      desc: 'Narrow profile branded tape specifically engineered for apparel poly mailers, retail gift wrapping, small electronics parcels, and branded cosmetic bags.',
      widths: '24mm (Width) × 50m / 66m',
      film: 'Ultra-clear or pure white BOPP 28µm film',
      adhesive: 'Clear non-yellowing acrylic adhesive with smooth unwinding resistance',
      minOrder: '72 Rolls',
      applications: 'Garment bags, gift boxes, jewelry packages, jar tamper seals',
      coreText: 'SLIM • 24MM',
    },
  ];

  const faqs = [
    {
      q: 'What is the minimum order quantity for custom printed tape in Kenya?',
      a: 'Our factory-direct minimum order starts from just 36 rolls (1 standard carton) for 48mm tape. This makes professional branded packaging accessible for emerging Kenyan e-commerce businesses and boutiques, not just giant corporations.',
    },
    {
      q: 'What tape film colors can I choose as the base?',
      a: 'We offer six primary base film options: Pure White BOPP (most popular for vibrant multi-color printing), Crystal Transparent/Clear (allows the box beneath to show through), Natural Kraft Brown, Signal Red, Forest Green, and Midnight Black.',
    },
    {
      q: 'How many colors can be printed on custom tape?',
      a: 'We print up to 4 Pantone spot colors using high-precision flexographic printing presses in Nairobi. We can also print continuous flood coats (where the tape base is completely colored and your logo is reversed out in white).',
    },
    {
      q: 'Does Impact Designs deliver outside Nairobi?',
      a: 'Yes, we provide door-to-door courier delivery across all 47 counties in Kenya including Mombasa, Kisumu, Nakuru, Eldoret, Thika, Nanyuki, and Machakos via our logistics partners (Wells Fargo, G4S, Speedaf, and local bus couriers).',
    },
    {
      q: 'What is the production turnaround time?',
      a: 'Standard production takes 3 to 5 business days from final digital artwork proof approval. We also have express expedite slots available for urgent launches.',
    },
  ];

  return (
    <div className="bg-[#fbfaf7] text-neutral-900">
      {/* Top Tape Marquee */}
      <TapeStrip
        variant="black"
        text="CUSTOM BRANDED TAPES KENYA • FACTORY DIRECT NAIROBI • LOW 36 ROLL MINIMUMS • 48MM & 72MM SPECIALISTS •"
        sheen={true}
        compact={true}
      />

      {/* Main SEO Header */}
      <section className="pt-12 pb-16 border-b-2 border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight uppercase text-neutral-950 leading-tight">
              Custom Branded Tapes in Kenya
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed">
              Transform standard cartons into tamper-evident brand ambassadors. Impact Designs manufactures custom printed packaging tape direct from our Nairobi facility for courier fleets, retail brands, and e-commerce companies nationwide.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setQuoteOpen(true)}
                className="bg-red-700 hover:bg-red-800 text-white font-mono text-xs sm:text-sm font-bold uppercase py-3.5 px-7 border-2 border-red-800 shadow-[3px_3px_0px_#111111] transition-all"
              >
                REQUEST A BRANDED TAPE QUOTE
              </button>
              <a
                href="https://wa.me/254722404647?text=Hello%20Impact%20Designs!%20I%20want%20a%20quote%20for%20custom%20branded%20packaging%20tape."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-black font-mono text-xs sm:text-sm font-bold uppercase py-3.5 px-7 border border-green-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>WhatsApp Specs</span>
              </a>
            </div>
          </div>

          {/* Real product photography / composition directly underneath */}
          <div className="mt-12 bg-[#eedbc2] border-2 border-neutral-900 p-8 shadow-[8px_8px_0px_#111111] relative overflow-hidden">
            <div className="absolute inset-0 bg-kraft-cardboard opacity-30 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="font-mono text-xs font-bold text-neutral-600 uppercase">
                  NAIROBI FLEXOGRAPHIC PRODUCTION
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase text-neutral-950 leading-tight">
                  PRECISION ROLL ANATOMY
                </h2>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                  Every roll of Impact tape is produced using premium cast BOPP film, corona-treated for maximum ink adhesion, and coated with non-crystallizing pressure-sensitive acrylic. No brittle peeling in hot East African weather.
                </p>

                {/* Technical tape references */}
                <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                  <RealTapeProductPhoto
                    image="rolls"
                    alt="Real printed branded tape rolls in multiple colors"
                    label="ROLL FINISHES"
                    caption="Ink and roll references"
                    aspect="aspect-[4/3]"
                  />
                  <RealTapeProductPhoto
                    image="application"
                    alt="Real branded packaging tape shown in a handheld dispenser"
                    label="CARTON APPLICATION"
                    caption="Tape in use"
                    aspect="aspect-[4/3]"
                  />
                </div>
              </div>

              <div className="lg:col-span-5">
                <RealTapeShowcase
                  id="branded-tapes-real-tape-showcase"
                  compact
                  className="shadow-[4px_4px_0px_#111111]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Tape Products Breakdown */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-black font-mono uppercase tracking-tight text-neutral-950">
            CHOOSE YOUR TAPE SPECIFICATION
          </h2>
          <p className="mt-2 text-sm text-neutral-600 font-sans">
            Engineered for specific carton weights, packaging environments, and unboxing aesthetics.
          </p>
        </div>

        <div className="space-y-8">
          {tapeSpecs.map((tape, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-neutral-900 p-6 sm:p-8 shadow-[6px_6px_0px_#111111] grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="bg-neutral-900 text-white font-mono text-[10px] font-bold py-1 px-2 uppercase">
                    {tape.badge}
                  </span>
                  <span className="font-mono text-xs text-neutral-500 uppercase">
                    OPTION 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-mono uppercase text-neutral-950">
                  {tape.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
                  {tape.desc}
                </p>

                {/* Physical Object Presentation: real branded tape reference */}
                <div className="bg-[#f0ebe3] border border-neutral-300 p-3.5 my-3 relative flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between text-[9px] font-mono text-neutral-600 uppercase font-bold tracking-wider mb-1">
                    <span>REAL TAPE REFERENCE</span>
                    <span>ROLL: {tape.coreText}</span>
                  </div>

                  <div className="my-1 shadow-sm">
                    <RealTapeProductPhoto
                      image={idx === 2 ? 'rolls' : 'application'}
                      alt={`Real branded tape example for ${tape.title}`}
                      label={tape.badge}
                      caption="Reference photography · replace with approved client sample"
                      aspect="aspect-[2.2/1]"
                    />
                  </div>
                </div>

                <div className="pt-2 text-xs font-mono text-neutral-600">
                  <span className="font-bold text-neutral-900">IDEAL APPLICATIONS:</span> {tape.applications}
                </div>
              </div>

              <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200 p-4 space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                  <span className="text-neutral-500">STANDARD SIZES:</span>
                  <span className="font-bold text-neutral-900 text-right">{tape.widths}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                  <span className="text-neutral-500">FILM SUBSTRATE:</span>
                  <span className="font-bold text-neutral-900 text-right">{tape.film}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                  <span className="text-neutral-500">ADHESIVE TYPE:</span>
                  <span className="font-bold text-neutral-900 text-right">{tape.adhesive}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-neutral-500">MIN ORDER:</span>
                  <span className="font-bold text-red-700 text-right">{tape.minOrder}</span>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setQuoteOpen(true)}
                    className="w-full bg-neutral-900 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase py-2.5 px-4 transition-colors text-center"
                  >
                    Quote This Tape Spec →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Available Tape Film Colors */}
      <section className="py-16 bg-[#181818] text-white border-y-2 border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase tracking-tight text-white">
              BASE FILM & PRINT COLOUR OPTIONS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-sans">
              Choose your base carrier film, then print your logo in up to 4 Pantone spot colors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Pure White', desc: 'Maximum contrast for colorful logos', bg: 'bg-white text-black' },
              { name: 'Crystal Clear', desc: 'Transparent background', bg: 'bg-neutral-200 text-black' },
              { name: 'Tan Kraft', desc: 'Blends seamlessly with kraft cartons', bg: 'bg-[#c49f6d] text-[#2c1a0a]' },
              { name: 'Signal Red', desc: 'High visibility & security', bg: 'bg-red-700 text-white' },
              { name: 'Forest Green', desc: 'Eco & organic brands', bg: 'bg-green-800 text-white' },
              { name: 'Midnight Black', desc: 'Premium luxury unboxing', bg: 'bg-black text-white border border-neutral-700' },
            ].map((col, i) => (
              <div key={i} className="p-4 border border-neutral-800 bg-neutral-900 flex flex-col justify-between">
                <div className={`w-full h-12 ${col.bg} flex items-center justify-center font-mono text-xs font-bold uppercase mb-3 shadow-inner`}>
                  SAMPLE
                </div>
                <div>
                  <div className="font-mono text-xs font-bold uppercase text-white">{col.name}</div>
                  <div className="text-[11px] text-neutral-400 mt-1 font-sans">{col.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase tracking-tight text-neutral-950 mb-8 text-center">
          FREQUENTLY ASKED QUESTIONS — BRANDED TAPES
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border-2 border-neutral-900 p-6 shadow-[3px_3px_0px_#111111]">
              <h3 className="font-mono text-sm sm:text-base font-bold uppercase text-neutral-950 mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Bottom Box */}
        <div className="mt-12 p-8 bg-white border-2 border-neutral-900 shadow-[6px_6px_0px_#b91c1c] text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black font-mono uppercase text-neutral-950">
            HAVE A CUSTOM PACKAGING TAPE INQUIRY?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto font-sans">
            Whether you need 36 rolls for a trial run or 1,000 rolls for an automated fulfillment center, we provide competitive factory pricing in Nairobi.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setQuoteOpen(true)}
              className="bg-neutral-950 hover:bg-neutral-800 text-white font-mono text-xs sm:text-sm font-bold uppercase py-3.5 px-7 transition-colors"
            >
              REQUEST A BRANDED TAPE QUOTE
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} defaultProduct="tape" />
    </div>
  );
}
