'use client';

import React, { useState } from 'react';
import { TapeStrip } from '@/components/TapeStrip';
import { TapeRollVisual } from '@/components/TapeRollVisual';
import { AluminiumTagVisual } from '@/components/AluminiumTagVisual';
import { QuoteModal } from '@/components/QuoteModal';
import { MessageCircle, ArrowRight, Filter, ExternalLink } from 'lucide-react';

export default function OurWorkPage() {
  const [filter, setFilter] = useState<'all' | 'tapes' | 'tags' | 'suites'>('all');
  const [quoteOpen, setQuoteOpen] = useState(false);

  const projects = [
    {
      client: 'Savannah Coffee Roasters',
      category: 'suites',
      location: 'Nairobi Westlands & Kiambu',
      type: 'BOPP Tape + Aluminium Product Tags',
      desc: 'Supplying 48mm black logo tape sealing export cartons worldwide, paired with durable anodized aluminium product tags on 1kg and 250g coffee bags.',
      tapeText: 'SAVANNAH ROASTERS • SINGLE ORIGIN AA • NAIROBI •',
      tapeVariant: 'black' as const,
      rollColor: 'black' as const,
      coreText: 'SAVANNAH • 48MM',
      tagTitle: 'SAVANNAH AA',
      tagSub: 'Specialty Coffee Lot 48',
      tagMaterial: 'kraft' as const,
    },
    {
      client: 'Kilima Apparel Studio',
      category: 'tapes',
      location: 'Kilimani, Nairobi',
      type: '48mm Express Mailer Tape',
      desc: 'Bold signal red tape sealing e-commerce courier parcels for daily door delivery across Nairobi, Mombasa, and Kisumu. Serves as both branding and tamper security seal.',
      tapeText: 'KILIMA APPAREL • EXPRESS DISPATCH • AUTHENTIC SEAL •',
      tapeVariant: 'red' as const,
      rollColor: 'red' as const,
      coreText: 'KILIMA • 48MM',
      tagTitle: 'KILIMA STUDIO',
      tagSub: 'Kenyan Made Apparel',
      tagMaterial: 'white' as const,
    },
    {
      client: 'QuickDrop Logistics East Africa',
      category: 'tapes',
      location: 'Enterprise Road Industrial Area',
      type: '72mm Tamper-Evident Security Tape',
      desc: 'High-visibility 72mm safety tape in warning amber and black. Applied on multi-county freight crates to instantly expose any attempt at unauthorized box opening in transit.',
      tapeText: 'SECURITY SEAL • INSPECTED • DO NOT ACCEPT IF BROKEN •',
      tapeVariant: 'warning' as const,
      rollColor: 'warning' as const,
      coreText: 'QUICKDROP • 72MM',
      tagTitle: 'QUICKDROP CARGO',
      tagSub: 'Transit Inspected Seal',
      tagMaterial: 'white' as const,
    },
    {
      client: 'Mara Botanicals Skincare',
      category: 'tags',
      location: 'Karen, Nairobi',
      type: 'Serialized Aluminium Product Tags',
      desc: 'Durable anodized aluminium tags with high-contrast branding and barcode-ready serial fields for artisanal glass jars and botanical serum boxes.',
      tapeText: 'MARA BOTANICALS • PURE AFRICAN EXTRACTS • NAIROBI •',
      tapeVariant: 'green' as const,
      rollColor: 'green' as const,
      coreText: 'MARA • 48MM',
      tagTitle: 'MARA BOTANICALS',
      tagSub: 'Pure Marula Serum',
      tagMaterial: 'black' as const,
    },
    {
      client: 'Rift Valley Honey Co.',
      category: 'suites',
      location: 'Baringo & Nairobi',
      type: 'Eco Kraft Tape + Aluminium Jar Tags',
      desc: 'Reinforced water-activated paper tape sealing bulk wooden crate consignments, paired with durable aluminium tags highlighting rural beekeeper traceability.',
      tapeText: 'RIFT VALLEY HONEY • 100% RAW PURE KENYAN HONEY •',
      tapeVariant: 'kraft' as const,
      rollColor: 'kraft' as const,
      coreText: 'RIFT VALLEY',
      tagTitle: 'RAW HONEY 500G',
      tagSub: 'Direct from Baringo',
      tagMaterial: 'kraft' as const,
    },
    {
      client: 'Swahili Coast Spices',
      category: 'tags',
      location: 'Old Town Mombasa',
      type: 'Anodized Aluminium Spice Tags',
      desc: 'High-contrast branded aluminium tags with serial fields attached to spice hampers sold in airport souvenir boutiques and luxury lodges.',
      tapeText: 'SWAHILI SPICE CO • AUTHENTIC COASTAL FLAVOURS •',
      tapeVariant: 'black' as const,
      rollColor: 'black' as const,
      coreText: 'SWAHILI • 48MM',
      tagTitle: 'SWAHILI MASALA',
      tagSub: 'Artisanal Spice Blend',
      tagMaterial: 'kraft' as const,
    },
  ];

  const filtered = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'tapes') return p.category === 'tapes' || p.category === 'suites';
    if (filter === 'tags') return p.category === 'tags' || p.category === 'suites';
    if (filter === 'suites') return p.category === 'suites';
    return true;
  });

  return (
    <div className="bg-[#fbfaf7] text-neutral-900">
      <TapeStrip
        variant="black"
        text="OUR WORK • CLIENT PACKAGING SHOWCASE • NAIROBI KENYA • BRANDED TAPES & ALUMINIUM TAGS IN THE WILD •"
        sheen={true}
        compact={true}
      />

      <section className="pt-12 pb-16 border-b-2 border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight uppercase text-neutral-950 leading-tight">
              SEE YOUR BRAND LIKE THIS.
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed">
              Real packaging produced in our Nairobi factory for Kenyan retailers, food & beverage producers, boutique fashion brands, and national courier operations.
            </p>

            {/* Filter Buttons (No pill badges; architectural rectangular buttons) */}
            <div className="pt-4 flex flex-wrap gap-2 font-mono text-xs uppercase font-bold">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'tapes', label: 'Branded Tapes' },
                { id: 'tags', label: 'Aluminium Tags' },
                { id: 'suites', label: 'Full Unboxing Sets' },
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setFilter(b.id as any)}
                  className={`py-2.5 px-5 border-2 transition-all ${
                    filter === b.id
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-[2px_2px_0px_#b91c1c]'
                      : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-950'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-neutral-900 p-6 shadow-[6px_6px_0px_#111111] flex flex-col justify-between group hover:-translate-y-1 transition-transform"
            >
              <div>
                {/* Physical Object Presentation Mockup: Branded Tape + Rounded Tape Roll + Tag */}
                <div className="bg-[#eee8dd] border border-neutral-300 p-4 relative flex flex-col justify-between min-h-[250px] mb-5 overflow-hidden">
                  {/* Faint kraft corrugated cardboard dots/grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#8d6e47_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

                  {/* Header mini info */}
                  <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-neutral-600 uppercase font-bold tracking-wider mb-1">
                    <span>SEALED TAPE SEAM</span>
                    <span>ROLL: {item.coreText}</span>
                  </div>

                  {/* The Branded Tape Strip applied across the seam */}
                  <div className="relative z-10 my-1 shadow-sm">
                    <TapeStrip
                      variant={item.tapeVariant}
                      text={item.tapeText}
                      sheen={true}
                      compact={true}
                    />
                  </div>

                  {/* The Rounded Tape Roll together with the Custom Tag */}
                  <div className="relative z-20 flex items-end justify-between pt-2">
                    {/* The Rounded Tape Roll */}
                    <div className="flex flex-col items-center">
                      <div className="transform transition-transform group-hover:scale-105 group-hover:-rotate-3 duration-300 drop-shadow-md">
                        <TapeRollVisual
                          color={item.rollColor}
                          coreText={item.coreText}
                          size="xs"
                          angle={-6}
                          unrolledTail={false}
                        />
                      </div>
                      <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-neutral-700 bg-white/90 px-1.5 py-0.5 border border-neutral-300 mt-1 shadow-xs">
                        ROUNDED TAPE ROLL
                      </span>
                    </div>

                    {/* The Aluminium Product Tag */}
                    <div className="flex flex-col items-end">
                      <AluminiumTagVisual
                        companyName={item.tagTitle}
                        subtitle={item.tagSub}
                        propertyOfText="IMPACT DESIGNS PRODUCT ID"
                        serialNumber={`ID-${idx + 1}TAG`}
                        barcodeType="code128"
                        logoType={item.category === 'tags' ? 'crest' : 'cargo'}
                        logoColor={item.category === 'tags' ? '#b91c1c' : '#1d4ed8'}
                        logoAccent="#d4af37"
                        thickness={idx % 2 === 0 ? '0.8mm' : '0.5mm'}
                        mountingHoles={item.category !== 'tags'}
                        size="sm"
                      />
                      <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-neutral-700 bg-white/90 px-1.5 py-0.5 border border-neutral-300 mt-1 shadow-xs">
                        ALUMINIUM PRODUCT TAG
                      </span>
                    </div>
                  </div>
                </div>

                <div className="font-mono text-xs text-red-700 font-bold uppercase mb-1">
                  {item.type}
                </div>
                <h3 className="text-xl font-black font-mono uppercase text-neutral-950">
                  {item.client}
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>{item.location}</span>
                <button
                  type="button"
                  onClick={() => setQuoteOpen(true)}
                  className="font-bold text-neutral-900 hover:text-red-700 transition-colors uppercase"
                >
                  Quote Similar →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-12 bg-neutral-950 text-white border-2 border-neutral-900 shadow-[8px_8px_0px_#b91c1c] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase text-white">
              WANT TO SEE YOUR BRAND ON OUR PRESSES?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-xl">
              Send us your logo files. We will prepare an accurate 1:1 scale proof showing your tape repeat pitch and tag mockups at no cost.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="bg-red-700 hover:bg-red-600 text-white font-mono text-xs sm:text-sm font-bold uppercase py-4 px-8 border border-red-500 transition-colors shrink-0"
          >
            REQUEST FREE DIGITAL PROOF
          </button>
        </div>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} defaultProduct="tape" />
    </div>
  );
}
