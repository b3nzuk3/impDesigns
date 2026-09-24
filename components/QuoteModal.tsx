'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Check, ArrowRight } from 'lucide-react';
import { SITE_NAME, siteWhatsAppLink } from '@/lib/site-contact';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: 'tape' | 'aluminium';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = 'tape',
}) => {
  const [productType, setProductType] = useState<'tape' | 'aluminium'>(defaultProduct);

  // Tape options
  const [tapeWidth, setTapeWidth] = useState<'48mm' | '72mm' | '24mm'>('48mm');
  const [tapeBase, setTapeBase] = useState<'white' | 'clear'>('white');
  const [tapeColors, setTapeColors] = useState<number>(1);
  const [tapeRolls, setTapeRolls] = useState<number>(360);

  // Aluminium tag options
  const [metalThickness, setMetalThickness] = useState<'0.5mm' | '0.8mm'>('0.5mm');
  const [metalMounting, setMetalMounting] = useState<'3m-adhesive' | 'rivet-holes'>('3m-adhesive');
  const [barcodeType, setBarcodeType] = useState<'code128' | 'datamatrix'>('code128');
  const [metalQuantity, setMetalQuantity] = useState<number>(250);

  // Customer details
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Nairobi');

  if (!isOpen) return null;

  // Estimated pricing calculation for Kenyan market (KES)
  const calculateTapeEstimate = () => {
    const rolls = Math.max(360, tapeRolls); // MOQ guard: estimates never price below 360
    const baseRollCost = tapeWidth === '72mm' ? 480 : tapeWidth === '24mm' ? 220 : 340;
    const colorAddon = (tapeColors - 1) * 35;
    const unitPrice = baseRollCost + colorAddon;
    const total = unitPrice * rolls;
    return { unitPrice, total };
  };


  const calculateMetalEstimate = () => {
    const baseUnitPrice = metalThickness === '0.8mm' ? 68 : 52;
    const mountingAddon = metalMounting === '3m-adhesive' ? 8 : 4;
    const unitPrice = baseUnitPrice + mountingAddon;
    const total = unitPrice * metalQuantity;
    return { unitPrice, total };
  };

  const tapeEst = calculateTapeEstimate();
  const metalEst = calculateMetalEstimate();

  const getEstimatedTotal = () => {
    if (productType === 'tape') return tapeEst.total;
    return metalEst.total;
  };

  const getEstimatedUnitPrice = () => {
    if (productType === 'tape') return tapeEst.unitPrice;
    return metalEst.unitPrice;
  };

  const tapeBaseLabel = tapeBase === 'white' ? 'White BOPP' : 'Transparent BOPP';

  const generateWhatsAppMessage = () => {
    let text = `Hello ${SITE_NAME}! I would like to request a quote:\n\n`;
    text += `*Business:* ${businessName || 'Interested Business'}\n`;
    text += `*Contact:* ${contactName || 'Client'} (${phone || 'Via WhatsApp'})\n`;
    text += `*Location:* ${location}\n\n`;

    if (productType === 'tape') {
      text += `*PRODUCT: CUSTOM BRANDED TAPE*\n`;
      text += `- Roll Width: ${tapeWidth}\n`;
      text += `- Base Tape: ${tapeBaseLabel}\n`;
      text += `- Print Colors: ${tapeColors} Color(s)\n`;
      text += `- Quantity: ${Math.max(360, tapeRolls)} Rolls\n`;
      text += `- Estimated Total: KES ${tapeEst.total.toLocaleString()}\n`;
    } else {
      text += `*PRODUCT: ANODIZED ALUMINIUM BARCODE ASSET TAGS*\n`;
      text += `- Thickness: ${metalThickness} Anodized Aluminium\n`;
      text += `- Mounting: ${metalMounting === '3m-adhesive' ? '3M 468MP High-Bond Adhesive' : 'Dual 3.2mm Rivet Mounting Holes'}\n`;
      text += `- Barcode: ${barcodeType === 'code128' ? 'Code 128 / Code 39' : '2D DataMatrix / QR'}\n`;
      text += `- Quantity: ${metalQuantity} Metal Plates\n`;
      text += `- Estimated Total: KES ${metalEst.total.toLocaleString()}\n`;
    }

    text += `\nPlease share official artwork guidelines and turnaround times.`;
    return siteWhatsAppLink(text);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="relative w-full max-w-3xl my-3 sm:my-8 max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100vh-4rem)] flex flex-col overflow-hidden bg-[#ffffff] border-2 border-neutral-900 shadow-2xl p-4 sm:p-6 md:p-8 text-neutral-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 inline-flex min-h-11 min-w-11 items-center justify-center p-2 text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="shrink-0 border-b border-neutral-200 pb-4 mb-4 sm:mb-6 pr-12">
          <h2 id="quote-modal-title" className="text-2xl md:text-3xl font-black font-mono uppercase tracking-tight">
            REQUEST A DIRECT FACTORY QUOTE
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 mt-1">
            Manufactured in Nairobi, Kenya. Fast turnaround with door-to-door delivery across East Africa.
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 -mr-1">
          {/* Product Type Toggle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-2 border-neutral-900 mb-6">
          <button
            type="button"
            onClick={() => setProductType('tape')}
            className={`py-3 px-3 text-xs font-mono font-bold uppercase transition-colors border-b sm:border-b-0 sm:border-r border-neutral-900 ${
              productType === 'tape'
                ? 'bg-neutral-900 text-white'
                : 'bg-white text-neutral-700 hover:bg-neutral-100'
            }`}
          >
            1. Branded Tape
          </button>
          <button
            type="button"
            onClick={() => setProductType('aluminium')}
            className={`py-3 px-3 text-xs font-mono font-bold uppercase transition-colors border-t sm:border-t-0 ${
              productType === 'aluminium'
                ? 'bg-neutral-900 text-white'
                : 'bg-white text-neutral-700 hover:bg-neutral-100'
            }`}
          >
            2. Aluminium Tags
          </button>
        </div>

        {/* Product Specifications Form */}
        {productType === 'tape' ? (
          <div className="space-y-5">
            {/* Width Selection */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase mb-2">
                Tape Width
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: '48mm', label: '48mm (Standard 2")', desc: 'Most popular carton seal' },
                  { id: '72mm', label: '72mm (Heavy 3")', desc: 'Export & bulky crates' },
                  { id: '24mm', label: '24mm (Slim 1")', desc: 'Boutique & parcel bags' },
                ].map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setTapeWidth(w.id as any)}
                    className={`p-3 text-left border-2 transition-all ${
                      tapeWidth === w.id
                        ? 'border-neutral-900 bg-neutral-100 shadow-[2px_2px_0px_#111111]'
                        : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div className="font-mono text-xs font-bold uppercase">{w.label}</div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">{w.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Base Tape Material */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase mb-2">
                Base Tape Material
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'white', label: 'White BOPP' },
                  { id: 'clear', label: 'Transparent BOPP' },
                ].map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setTapeBase(b.id as any)}
                    className={`p-2 text-center text-xs font-mono font-medium border-2 transition-all ${
                      tapeBase === b.id
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 text-neutral-800 hover:border-neutral-400'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Print Colors & Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase mb-2">
                  Print Colors: {tapeColors} Color{tapeColors > 1 ? 's' : ''}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setTapeColors(c)}
                      className={`py-2 text-center text-xs font-mono font-bold border-2 ${
                        tapeColors === c
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {c} Col
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase mb-2">
                  Order Quantity (Rolls)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[360, 720, 1440, 3600].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setTapeRolls(q)}
                      className={`py-2 text-center text-xs font-mono font-bold border-2 ${
                        tapeRolls === q
                          ? 'border-neutral-900 bg-neutral-900 text-white'
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
                  className="mt-2 w-full px-3 py-2 border border-neutral-300 text-xs font-mono focus:border-neutral-900 focus:outline-none"
                />
                <p className="mt-1.5 text-[11px] font-mono text-neutral-500">
                  Minimum order: 360 rolls per design. Enter any quantity of 360 or more.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Aluminium Barcode Asset Tags */
          <div className="space-y-5">
            {/* Aluminium Gauge / Thickness */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase mb-2">
                Anodized Aluminium Thickness
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    id: '0.5mm',
                    label: '0.5mm Standard Anodized',
                    desc: 'Curved surfaces, IT equipment, warehouse racking',
                  },
                  {
                    id: '0.8mm',
                    label: '0.8mm Heavy Rigid Aluminium',
                    desc: 'Heavy plant machinery, fleet assets & outdoor environments',
                  },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setMetalThickness(t.id as any)}
                    className={`p-3 text-left border-2 transition-all ${
                      metalThickness === t.id
                        ? 'border-neutral-900 bg-neutral-100 shadow-[2px_2px_0px_#111111]'
                        : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div className="font-mono text-xs font-bold uppercase">{t.label}</div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">{t.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mounting Option & Barcode Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase mb-2">
                  Mounting Method
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: '3m-adhesive', label: '3M 468MP High-Bond' },
                    { id: 'rivet-holes', label: 'Dual Rivet Holes' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMetalMounting(m.id as any)}
                      className={`p-2 text-center text-xs font-mono font-medium border-2 ${
                        metalMounting === m.id
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase mb-2">
                  Barcode Symbology
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'code128', label: 'Code 128 / 39 (1D)' },
                    { id: 'datamatrix', label: 'QR / DataMatrix (2D)' },
                  ].map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBarcodeType(b.id as any)}
                      className={`p-2 text-center text-xs font-mono font-medium border-2 ${
                        barcodeType === b.id
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase mb-2">
                Batch Production Quantity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[250, 500, 1000].map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setMetalQuantity(q)}
                    className={`py-2 text-center text-xs font-mono font-bold border-2 ${
                      metalQuantity === q
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {q} Plates
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-neutral-500">
                250 plates is an indicative estimate starting quantity, not a guaranteed minimum. The actual minimum is confirmed with your quote.
              </p>
            </div>
          </div>
        )}

        {/* Contact Input Fields */}
        <div className="mt-6 pt-4 border-t border-neutral-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase mb-1">
                Business / Brand Name
              </label>
              <input
                type="text"
                placeholder="e.g. Savannah Roasters"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 text-xs font-mono focus:border-neutral-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Brian Otieno"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 text-xs font-mono focus:border-neutral-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase mb-1">
                Delivery County / City
              </label>
              <input
                type="text"
                placeholder="e.g. Nairobi, Mombasa, Kisumu"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 text-xs font-mono focus:border-neutral-900 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Summary & Direct WhatsApp Action */}
        <div className="mt-6 p-4 bg-neutral-100 border border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono uppercase text-neutral-500">
              ESTIMATED FACTORY PRODUCTION:
            </div>
            <div className="text-xl md:text-2xl font-black font-mono text-neutral-900">
              KES {getEstimatedTotal().toLocaleString()}
              <span className="text-xs font-normal text-neutral-600 ml-2">
                (~KES {getEstimatedUnitPrice()}/unit)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-mono font-bold uppercase text-xs md:text-sm py-3 px-6 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Send via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                alert(`Thank you! Your quote request for ${businessName || 'your business'} has been received. Our Nairobi sales desk will follow up shortly.`);
                onClose();
              }}
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-mono font-bold uppercase text-xs md:text-sm py-3 px-6 transition-colors"
            >
              <span>Submit Inquiry</span>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
