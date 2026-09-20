'use client';

import React from 'react';
import { TapeStrip } from './TapeStrip';

export const ProcessTapeFlow: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'SEND YOUR LOGO',
      description:
        'Share your vector file, PDF, or artwork via WhatsApp or our quote form. Our prepress team reviews resolution and color separation for flexographic printing.',
      tapeDetail: 'VECTOR • PANTONE MATCH',
    },
    {
      step: '02',
      title: 'CHOOSE YOUR TAPE & SPECS',
      description:
        'Select roll width (24mm, 48mm standard, 72mm heavy-duty), base film (white, clear, kraft brown, red, green, black), and adhesive grade (acrylic or hot melt solvent).',
      tapeDetail: 'BOPP / KRAFT • 48MM × 100M',
    },
    {
      step: '03',
      title: 'WE PREPARE YOUR DIGITAL PROOF',
      description:
        'We position your logo repeat pitch, add barcode or tamper warning strips if needed, and send a full scale digital cylinder proof for your stamp of approval.',
      tapeDetail: 'REPEAT PITCH • 1:1 SCALE PROOF',
    },
    {
      step: '04',
      title: 'PRECISION FLEXO PRINTING',
      description:
        'Manufactured directly in Nairobi. High-density UV-cured ink lays crisp lines on industrial slitter-rewinders with zero bleed and exceptional peel strength.',
      tapeDetail: 'UV CURED • INDUSTRIAL SLITTING',
    },
    {
      step: '05',
      title: 'YOU BRAND EVERY PACKAGE',
      description:
        'Dispatched to your warehouse, store, or office in Nairobi same-week, with door-to-door courier dispatch across all 47 Kenyan counties.',
      tapeDetail: 'SEAL WITH CONFIDENCE',
    },
  ];

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background tape that snakes across the section */}
      <div className="hidden lg:block absolute top-[148px] inset-x-0 z-0">
        <TapeStrip
          variant="black"
          text="PRODUCTION LINE • STEP BY STEP • PRECISION PRINTED IN NAIROBI, KENYA • DISPATCH ACROSS EAST AFRICA •"
          sheen={true}
          shadow={true}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 font-mono">
            HOW CUSTOM TAPE IS MADE
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            From raw artwork to branded cartons sealing your shipments across Kenya. Simple, reliable, factory-direct turnaround in Nairobi.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-neutral-900 shadow-[4px_4px_0px_#111111] p-6 flex flex-col justify-between relative group hover:-translate-y-1 transition-transform"
            >
              {/* Tape swatch on top edge */}
              <div className="absolute -top-3 left-4 right-4 bg-red-700 text-white font-mono text-[9px] tracking-widest font-bold py-0.5 px-2 text-center uppercase shadow-sm truncate">
                {item.tapeDetail}
              </div>

              <div>
                <div className="text-3xl md:text-4xl font-black font-mono text-neutral-300 group-hover:text-red-600 transition-colors mt-2 mb-3">
                  {item.step}
                </div>
                <h3 className="text-base md:text-lg font-bold font-mono text-neutral-900 tracking-tight uppercase leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono font-semibold text-neutral-500">
                <span>STAGE {index + 1} OF 5</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
