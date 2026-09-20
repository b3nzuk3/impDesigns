'use client';

import React, { useState } from 'react';
import { TapeStrip } from './TapeStrip';

export const BeforeAfterBox: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(65); // percentage showing after
  const [isBranded, setIsBranded] = useState<boolean>(true);

  return (
    <div className="w-full max-w-5xl mx-auto my-12" id="before-after-demonstrator">
      {/* Visual transformation container */}
      <div className="bg-[#181818] border border-[#2a2a2a] p-6 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle background industrial grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#242424_1px,transparent_1px),linear-gradient(to_bottom,#242424_1px,transparent_1px)] bg-[size:32px_32px] opacity-25 pointer-events-none" />

        {/* Section Headline */}
        <div className="relative z-10 mb-8 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white uppercase font-mono">
            MAKE YOUR PACKAGE UNMISTAKABLY YOURS
          </h2>
          <p className="mt-2 text-sm md:text-base text-neutral-400">
            Slide horizontally to see how generic cartons transform into high-value brand touchpoints with custom printed tape and tags.
          </p>
        </div>

        {/* Quick Mode Toggle for accessibility & fast viewing */}
        <div className="relative z-10 flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSliderPos(0);
                setIsBranded(false);
              }}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-colors ${
                sliderPos < 20
                  ? 'bg-neutral-800 text-white border border-neutral-600'
                  : 'text-neutral-400 hover:text-white bg-black/40 border border-neutral-800'
              }`}
            >
              Plain Carton (Before)
            </button>
            <button
              onClick={() => {
                setSliderPos(100);
                setIsBranded(true);
              }}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-colors ${
                sliderPos > 80
                  ? 'bg-red-700 text-white border border-red-600'
                  : 'text-neutral-400 hover:text-white bg-black/40 border border-neutral-800'
              }`}
            >
              Impact Branded (After)
            </button>
          </div>

          <div className="hidden sm:block text-xs font-mono text-neutral-400">
            {sliderPos > 50 ? 'Impact Custom Branding Active' : 'Generic Unbranded Packaging'}
          </div>
        </div>

        {/* Interactive Comparison Canvas */}
        <div className="relative w-full h-[380px] md:h-[480px] bg-[#222222] border border-neutral-800 overflow-hidden select-none">
          {/* UNDERNEATH LAYER: BEFORE (Plain Generic Box) */}
          <div className="absolute inset-0 flex items-center justify-center p-6 bg-[#252320]">
            <div className="w-full max-w-md aspect-square max-h-[360px] bg-[#bca17e] border-2 border-[#9b7e5a] shadow-xl relative flex flex-col items-center justify-center p-8">
              {/* Box Top Flap Crease */}
              <div className="absolute top-0 inset-x-0 h-1/2 border-b-2 border-dashed border-[#886d4c]/60" />

              {/* Flimsy generic clear-yellowing packing tape */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 bg-amber-100/35 border-y border-amber-300/30 backdrop-blur-[1px] shadow-sm flex items-center justify-center">
                <span className="font-mono text-[10px] text-amber-900/30 tracking-widest uppercase">
                  UNBRANDED • NO SECURITY SEAL
                </span>
              </div>

              {/* Plain carton text */}
              <div className="relative z-10 text-center opacity-40 font-mono text-xs text-[#422e17] mt-24">
                [ GENERIC CORRUGATED SHIPPER ]<br />
                Vulnerable to tampering • Zero repeat impressions
              </div>
            </div>
          </div>

          {/* OVERLAY LAYER: AFTER (Impact Branded Custom Tape & Hang Tag) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden bg-[#1e1c1a]"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6 min-w-[320px] md:min-w-[640px] max-w-5xl">
              <div className="w-full max-w-md aspect-square max-h-[360px] bg-[#c5a682] border-2 border-[#8e6e4a] shadow-2xl relative flex flex-col items-center justify-center p-8">
                {/* Box Top Flap Crease */}
                <div className="absolute top-0 inset-x-0 h-1/2 border-b-2 border-dashed border-[#886d4c]/40" />

                {/* HEAVY DUTY IMPACT BRANDED TAPE SEALING THE BOX */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20">
                  <div className="relative bg-[#111111] text-white py-3.5 px-4 font-mono text-xs font-bold tracking-[0.25em] uppercase border-y-2 border-red-600 shadow-2xl flex items-center justify-between">
                    <div className="tape-sheen absolute inset-0 pointer-events-none" />
                    <span className="truncate">KILIMA APPAREL • NAIROBI • VERIFIED SEAL</span>
                    <span className="bg-red-600 text-white px-2 py-0.5 text-[9px] font-bold tracking-widest shrink-0 ml-2">
                      DO NOT ACCEPT IF BROKEN
                    </span>
                  </div>
                </div>

                {/* Physical Custom Hang Tag Attached */}
                <div className="absolute top-6 right-6 z-30 rotate-6 drop-shadow-2xl">
                  <div className="w-28 p-3 bg-[#fdfdfd] border border-neutral-300 shadow-lg text-black font-mono">
                    <div className="w-3 h-3 rounded-full bg-amber-900 border border-amber-600 mx-auto mb-2" />
                    <div className="text-[9px] font-bold uppercase tracking-wider text-center border-b pb-1">
                      KILIMA
                    </div>
                    <div className="text-[8px] text-neutral-600 text-center mt-1">
                      Batch #084<br />
                      Handmade in Kenya
                    </div>
                    <div className="mt-2 text-center text-[7px] bg-black text-white py-0.5 font-bold">
                      AUTHENTIC
                    </div>
                  </div>
                </div>

                {/* Bottom branding stamp on box */}
                <div className="relative z-10 text-center font-mono text-xs text-[#3b2713] mt-24">
                  <div className="font-bold tracking-wider uppercase text-black/80">
                    IMPACT DESIGNS SPECIFICATION
                  </div>
                  <div className="text-[11px] opacity-80 mt-0.5">
                    48mm Heavy-Tack BOPP Tape + Custom Aluminium Product Tag
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Draggable Slider Divider Bar */}
          <div
            className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-40 shadow-[0_0_12px_rgba(255,255,255,0.7)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-none bg-black border-2 border-white text-white flex items-center justify-center font-mono text-xs font-bold select-none shadow-xl">
              ⇔
            </div>
          </div>

          {/* Invisible HTML range input for touch & mouse drag accessibility */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-50"
            aria-label="Drag slider to compare plain box to Impact branded box"
          />
        </div>

        {/* Bottom Comparative Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-800 text-xs font-mono text-neutral-400">
          <div>
            <span className="text-white font-bold block mb-1">WITHOUT CUSTOM TAPE:</span>
            Packages look vulnerable in transit across Nairobi and county couriers. No brand recall upon unboxing.
          </div>
          <div>
            <span className="text-red-400 font-bold block mb-1">WITH IMPACT BRANDED TAPE & TAGS:</span>
            Instant brand authority, tamper-evident security sealing, and unboxing customer retention at zero advertising cost.
          </div>
        </div>
      </div>
    </div>
  );
};
