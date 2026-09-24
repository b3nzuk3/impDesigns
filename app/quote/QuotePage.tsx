'use client';

import React, { useState } from 'react';
import { TapeStrip } from '@/components/TapeStrip';
import { MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Box, Tag, Calculator } from 'lucide-react';
import { SITE_NAME, siteWhatsAppLink } from '@/lib/site-contact';

export default function QuotePage() {
  const [productType, setProductType] = useState<'tape' | 'aluminium'>('tape');

  // Tape parameters
  const [tapeWidth, setTapeWidth] = useState<'48mm' | '72mm' | '24mm'>('48mm');
  const [tapeBase, setTapeBase] = useState<'white' | 'clear'>('white');
  const [tapeColors, setTapeColors] = useState<number>(1);
  const [tapeRolls, setTapeRolls] = useState<number>(360);

  // Aluminium tag parameters
  const [metalThickness, setMetalThickness] = useState<'0.5mm' | '0.8mm'>('0.5mm');
  const [metalMounting, setMetalMounting] = useState<'3m-adhesive' | 'rivet-holes'>('3m-adhesive');
  const [barcodeType, setBarcodeType] = useState<'code128' | 'datamatrix'>('code128');
  const [metalQuantity, setMetalQuantity] = useState<number>(250);

  // Client Details
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [county, setCounty] = useState('Nairobi');
  const [submitted, setSubmitted] = useState(false);

  // Pricing calculations
  const calculateTape = () => {
    const rolls = Math.max(360, tapeRolls); // MOQ guard: estimates never price below 360
    const baseUnitPrice = tapeWidth === '72mm' ? 480 : tapeWidth === '24mm' ? 220 : 340;
    const colorAddon = (tapeColors - 1) * 35;
    // Volume discounts (per 360-roll tiers)
    const volumeMultiplier =
      rolls >= 1440 ? 0.82 : rolls >= 1080 ? 0.86 : rolls >= 720 ? 0.9 : rolls >= 360 ? 0.95 : 1.0;
    const unitPrice = Math.round((baseUnitPrice + colorAddon) * volumeMultiplier);
    const total = unitPrice * rolls;
    return { unitPrice, total };
  };

  const calculateAluminium = () => {
    const baseUnitPrice = metalThickness === '0.8mm' ? 68 : 52;
    const mountingAddon = metalMounting === '3m-adhesive' ? 8 : 4;
    const volumeMultiplier = metalQuantity >= 1000 ? 0.85 : metalQuantity >= 500 ? 0.92 : metalQuantity >= 250 ? 0.96 : 1.0;
    const unitPrice = Math.round((baseUnitPrice + mountingAddon) * volumeMultiplier);
    const total = unitPrice * metalQuantity;
    return { unitPrice, total };
  };

  const tapeEst = calculateTape();
  const aluminiumEst = calculateAluminium();

  const tapeBaseLabel = tapeBase === 'white' ? 'White BOPP' : 'Transparent BOPP';

  const getWhatsAppUrl = () => {
    let msg = `Hello ${SITE_NAME}! I would like to place an order inquiry:\n\n`;
    msg += `*Business:* ${businessName || 'My Business'}\n`;
    msg += `*Contact:* ${contactName || 'Client'} (${phone || 'Via WhatsApp'})\n`;
    msg += `*Delivery County:* ${county}\n\n`;

    if (productType === 'tape') {
      msg += `*ORDER: CUSTOM BRANDED TAPE*\n`;
      msg += `- Width: ${tapeWidth}\n`;
      msg += `- Base Tape: ${tapeBaseLabel}\n`;
      msg += `- Colors: ${tapeColors} Pantone Spot Color(s)\n`;
      msg += `- Volume: ${Math.max(360, tapeRolls)} Rolls\n`;
      msg += `- Est. Rate: KES ${tapeEst.unitPrice}/roll (Total: KES ${tapeEst.total.toLocaleString()})\n`;
    } else {
      msg += `*ORDER: ANODIZED ALUMINIUM TAGS*\n`;
      msg += `- Thickness: ${metalThickness}\n`;
      msg += `- Mounting: ${metalMounting === '3m-adhesive' ? '3M 468MP High-Bond Adhesive' : 'Dual 3.2mm Rivet Holes'}\n`;
      msg += `- Barcode: ${barcodeType === 'code128' ? 'Code 128 / Code 39' : '2D DataMatrix / QR'}\n`;
      msg += `- Volume: ${metalQuantity} Plates\n`;
      msg += `- Est. Rate: KES ${aluminiumEst.unitPrice}/plate (Total: KES ${aluminiumEst.total.toLocaleString()})\n`;
    }

    msg += `\nPlease review artwork and dispatch timeline.`;
    return siteWhatsAppLink(msg);
  };

  return (
    <div className="bg-[#fbfaf7] text-neutral-900">
      <TapeStrip
        variant="black"
        text="INSTANT FACTORY QUOTE CALCULATOR • DIRECT NAIROBI PRODUCTION • REALISTIC KES ESTIMATES • FAST WHATSAPP TRANSMISSION •"
        sheen={true}
        compact={true}
      />

      <section className="pt-12 pb-16 border-b-2 border-neutral-900">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight uppercase text-neutral-950 leading-tight">
              FACTORY QUOTE CALCULATOR
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed">
              Configure your packaging tape or anodized aluminium tag specifications below for immediate estimated pricing in Kenyan Shillings (KES). Export directly to WhatsApp for rapid proofing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Main Configurator (Col 8) */}
          <div className="lg:col-span-8 bg-white border-2 border-neutral-900 p-6 sm:p-8 shadow-[6px_6px_0px_#111111] space-y-8">
            {/* Step 1: Select Specialty Product */}
            <div>
              <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                STEP 1: SELECT SPECIALTY PRODUCT
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setProductType('tape')}
                  className={`p-4 text-left border-2 transition-all ${
                    productType === 'tape'
                      ? 'border-neutral-950 bg-neutral-950 text-white shadow-[3px_3px_0px_#ea580c]'
                      : 'border-neutral-300 hover:border-neutral-950 bg-neutral-50 text-neutral-900'
                  }`}
                >
                  <Box className="w-5 h-5 mb-2" />
                  <div className="font-mono text-sm font-bold uppercase">1. Custom Branded Tape</div>
                  <div className="text-xs opacity-75 mt-0.5 font-sans">White &amp; Transparent BOPP printed sealing tape</div>
                </button>

                <button
                  type="button"
                  onClick={() => setProductType('aluminium')}
                  className={`p-4 text-left border-2 transition-all ${
                    productType === 'aluminium'
                      ? 'border-neutral-950 bg-neutral-950 text-white shadow-[3px_3px_0px_#ea580c]'
                      : 'border-neutral-300 hover:border-neutral-950 bg-neutral-50 text-neutral-900'
                  }`}
                >
                  <Tag className="w-5 h-5 mb-2" />
                  <div className="font-mono text-sm font-bold uppercase">2. Custom Aluminium Tags</div>
                  <div className="text-xs opacity-75 mt-0.5 font-sans">Branded product & barcode asset tags</div>
                </button>
              </div>
            </div>

            {/* Step 2: Product Specifics */}
            {productType === 'tape' ? (
              <div className="space-y-6 pt-4 border-t border-neutral-200">
                <div>
                  <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    TAPE WIDTH
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: '48mm', title: '48mm (2" Standard)', desc: 'Universal carton seam' },
                      { id: '72mm', title: '72mm (3" Heavy-Duty)', desc: 'Export & freight boxes' },
                      { id: '24mm', title: '24mm (1" Slim)', desc: 'Retail & small mailers' },
                    ].map((w) => (
                      <button
                        key={w.id}
                        type="button"
                        onClick={() => setTapeWidth(w.id as any)}
                        className={`p-3 text-left border-2 ${
                          tapeWidth === w.id
                            ? 'border-neutral-950 bg-neutral-100 font-bold'
                            : 'border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        <div className="font-mono text-xs uppercase">{w.title}</div>
                        <div className="text-[11px] text-neutral-500 font-sans mt-0.5">{w.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    BASE TAPE MATERIAL
                  </label>
                  <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                    {[
                      { id: 'white', label: 'White BOPP' },
                      { id: 'clear', label: 'Transparent BOPP' },
                    ].map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setTapeBase(b.id as any)}
                        className={`py-2 px-3 text-center border-2 uppercase font-medium ${
                          tapeBase === b.id
                            ? 'border-neutral-950 bg-neutral-950 text-white font-bold'
                            : 'border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      NUMBER OF PRINT COLOURS: {tapeColors}
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setTapeColors(c)}
                          className={`py-2 text-center font-mono text-xs font-bold border-2 ${
                            tapeColors === c
                              ? 'border-neutral-950 bg-neutral-950 text-white'
                              : 'border-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          {c} Col
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      QUANTITY (ROLLS) — MINIMUM 360
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[360, 720, 1080, 1440].map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => setTapeRolls(q)}
                          className={`py-2 text-center font-mono text-xs font-bold border-2 ${
                            tapeRolls === q
                              ? 'border-neutral-950 bg-neutral-950 text-white'
                              : 'border-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          {q} Rolls
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      min={360}
                      step={1}
                      value={tapeRolls}
                      onChange={(e) => {
                        const v = parseInt(e.target.value, 10);
                        if (!isNaN(v)) setTapeRolls(v);
                      }}
                      onBlur={(e) => {
                        const v = parseInt(e.target.value, 10);
                        if (isNaN(v) || v < 360) setTapeRolls(360);
                      }}
                      aria-label="Order quantity in rolls (minimum 360)"
                      className="mt-2 w-full px-3 py-2.5 border border-neutral-300 font-mono text-xs focus:border-neutral-950 focus:outline-none"
                    />
                    <p className="mt-1.5 text-[11px] font-mono text-neutral-500">
                      Minimum order: 360 rolls per design. Enter any quantity of 360 or more.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 pt-4 border-t border-neutral-200">
                <div>
                  <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    ANODIZED ALUMINIUM THICKNESS
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: '0.5mm', title: '0.5mm Standard Aluminium', desc: 'Curved surfaces, IT equipment & retail fixtures' },
                      { id: '0.8mm', title: '0.8mm Heavy Rigid Aluminium', desc: 'Fleet assets, machinery & outdoor environments' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setMetalThickness(t.id as '0.5mm' | '0.8mm')}
                        className={`p-3 text-left border-2 ${
                          metalThickness === t.id
                            ? 'border-neutral-950 bg-neutral-100 font-bold'
                            : 'border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        <div className="font-mono text-xs uppercase">{t.title}</div>
                        <div className="text-[11px] text-neutral-500 font-sans mt-0.5">{t.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      MOUNTING METHOD
                    </label>
                    <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                      {[
                        { id: '3m-adhesive', label: '3M 468MP Adhesive' },
                        { id: 'rivet-holes', label: 'Dual Rivet Holes' },
                      ].map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setMetalMounting(m.id as '3m-adhesive' | 'rivet-holes')}
                          className={`py-2 px-3 text-center border-2 uppercase font-medium ${
                            metalMounting === m.id
                              ? 'border-neutral-950 bg-neutral-950 text-white font-bold'
                              : 'border-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      BARCODE SYMBOLOGY
                    </label>
                    <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                      {[
                        { id: 'code128', label: 'Code 128 / 39' },
                        { id: 'datamatrix', label: 'QR / DataMatrix' },
                      ].map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setBarcodeType(b.id as 'code128' | 'datamatrix')}
                          className={`py-2 px-3 text-center border-2 uppercase font-medium ${
                            barcodeType === b.id
                              ? 'border-neutral-950 bg-neutral-950 text-white font-bold'
                              : 'border-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    BATCH PRODUCTION QUANTITY (PLATES)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[250, 500, 1000].map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setMetalQuantity(q)}
                        className={`py-2 text-center font-mono text-xs font-bold border-2 ${
                          metalQuantity === q
                            ? 'border-neutral-950 bg-neutral-950 text-white'
                            : 'border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        {q} Plates
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                    250 plates is an indicative estimate starting quantity, not a guaranteed minimum. The actual minimum is confirmed with your quote.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Delivery Location */}
            <div className="pt-6 border-t border-neutral-200 space-y-4">
              <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                STEP 2: BUSINESS & CONTACT INFORMATION
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase mb-1">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Savannah Roasters"
                    className="w-full px-3 py-2.5 border border-neutral-300 font-mono text-xs focus:border-neutral-950 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase mb-1">
                    Contact Person Name
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Eric Mwangi"
                    className="w-full px-3 py-2.5 border border-neutral-300 font-mono text-xs focus:border-neutral-950 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0712 345 678"
                    className="w-full px-3 py-2.5 border border-neutral-300 font-mono text-xs focus:border-neutral-950 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase mb-1">
                    Delivery County / Town
                  </label>
                  <input
                    type="text"
                    value={county}
                    onChange={(e) => setCounty(e.target.value)}
                    placeholder="e.g. Nairobi, Mombasa, Kisumu"
                    className="w-full px-3 py-2.5 border border-neutral-300 font-mono text-xs focus:border-neutral-950 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right / Live Quote Summary (Col 4) */}
          <div className="lg:col-span-4 bg-neutral-950 text-white border-2 border-neutral-900 p-6 sm:p-8 shadow-[6px_6px_0px_#ea580c] space-y-6 sticky top-28">
            <div className="border-b border-neutral-800 pb-4">
              <span className="font-mono text-xs text-orange-400 font-bold uppercase block mb-1">
                LIVE CALCULATION
              </span>
              <h2 className="text-xl font-black font-mono uppercase text-white">
                ESTIMATED ORDER TOTAL
              </h2>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">PRODUCT:</span>
                <span className="font-bold uppercase text-white">
                  {productType === 'tape' ? 'Custom Branded Tape' : 'Custom Aluminium Tags'}
                </span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">SPECIFICATION:</span>
                <span className="font-bold uppercase text-white">
                  {productType === 'tape'
                    ? `${tapeWidth} • ${tapeBaseLabel} • ${tapeColors} Col`
                    : `${metalThickness} • ${metalMounting === '3m-adhesive' ? '3M Adhesive' : 'Rivet Holes'} • ${barcodeType}`}
                </span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">QUANTITY:</span>
                <span className="font-bold uppercase text-white">
                  {productType === 'tape' ? `${Math.max(360, tapeRolls)} Rolls` : `${metalQuantity} Plates`}
                </span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">EST. UNIT RATE:</span>
                <span className="font-bold uppercase text-neutral-200">
                  KES {productType === 'tape' ? tapeEst.unitPrice : aluminiumEst.unitPrice} / unit
                </span>
              </div>
            </div>

            {/* Total Block */}
            <div className="bg-neutral-900 border border-neutral-800 p-4">
              <div className="text-[11px] font-mono uppercase text-neutral-400">
                ESTIMATED TOTAL (EXCL. VAT):
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-white mt-1">
                KES {productType === 'tape' ? tapeEst.total.toLocaleString() : aluminiumEst.total.toLocaleString()}
              </div>
              <div className="text-[10px] font-mono text-neutral-500 mt-1">
                Production in Nairobi • Dispatched via courier
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-mono font-bold text-xs uppercase py-3.5 px-6 shadow-md transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Send via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(true);
                  alert(`Thank you ${contactName || 'Valued Client'}! Your quote inquiry has been submitted. Our Nairobi desk will get back to you immediately.`);
                }}
                className="w-full bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs uppercase py-3.5 px-6 transition-colors text-center"
              >
                Submit Factory Inquiry
              </button>
            </div>

            <div className="text-[11px] font-mono text-neutral-400 text-center">
              Includes digital proofing + free delivery within Nairobi on orders over KES 30,000.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
