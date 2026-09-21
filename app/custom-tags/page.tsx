'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TapeStrip } from '@/components/TapeStrip';
import { AluminiumTagVisual } from '@/components/AluminiumTagVisual';
import { ClientTagGallery } from '@/components/ClientTagGallery';
import { QuoteModal } from '@/components/QuoteModal';
import { tagPhoto } from '@/lib/media';
import { MessageCircle, ChevronDown, Check, PenLine, DraftingCompass, BadgeCheck, Package } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/254722404647?text=Hello%20Impact%20Creative%20Designs!%20I%20want%20a%20quote%20for%20custom%20aluminium%20tags.';

interface TagCategory {
  title: string;
  badge: string;
  oneLiner: string;
  keyInfo: string;
  photo: number;
  /** collapsed-by-default technical spec block */
  specs: { label: string; value: string }[];
}

const TAG_CATEGORIES: TagCategory[] = [
  {
    title: 'Barcode & Asset Tags',
    badge: 'MOST ORDERED',
    oneLiner: 'Serialized tags with barcodes and QR codes for tracking equipment, IT and fleet assets.',
    keyInfo: 'Code 128 · QR · DataMatrix',
    photo: 16,
    specs: [
      { label: 'Material', value: '0.5mm / 0.8mm anodized matte aluminium' },
      { label: 'Marking', value: 'Code 128, Code 39, QR or DataMatrix, sealed under the anodic layer' },
      { label: 'Durability', value: 'Resists 450°C heat, UV, solvents and abrasion' },
      { label: 'Mounting', value: '3M 468MP adhesive or 3.2mm rivet holes' },
    ],
  },
  {
    title: 'Branded Product Tags',
    badge: 'PREMIUM RETAIL',
    oneLiner: 'Premium brushed-metal markers for food, crafts and gift packaging.',
    keyInfo: '0.5mm / 0.8mm brushed aluminium',
    photo: 10,
    specs: [
      { label: 'Material', value: '0.5mm / 0.8mm brushed aluminium alloy' },
      { label: 'Marking', value: 'High-contrast anodic logo, text and serial code' },
      { label: 'Mounting', value: 'Adhesive backing or 3.2mm mechanical holes' },
    ],
  },
  {
    title: 'Industrial Identification Tags',
    badge: 'HARSH ENVIRONMENTS',
    oneLiner: 'Nameplates that survive heat, solvents and outdoor weather.',
    keyInfo: 'Solvent & UV proof · 450°C rated',
    photo: 31,
    specs: [
      { label: 'Material', value: '0.5mm / 0.8mm anodized aluminium' },
      { label: 'Durability', value: 'Immune to acetone, diesel, abrasion and equatorial UV' },
      { label: 'Mounting', value: 'Rivet holes for vibrating machinery, trailers, transformers' },
    ],
  },
  {
    title: 'Apparel & Fashion Tags',
    badge: 'FASHION & APPAREL',
    oneLiner: 'Slim metal tags for clothing labels and boutique branding.',
    keyInfo: 'Slim profile · will not curl or fade',
    photo: 14,
    specs: [
      { label: 'Material', value: '0.5mm satin or brushed anodized aluminium' },
      { label: 'Marking', value: 'Photo-anodized logo, text and serial code' },
      { label: 'Mounting', value: '3M 468MP adhesive or precision rivet holes' },
    ],
  },
  {
    title: 'Custom Die-Cut Shapes',
    badge: 'BESPOKE',
    oneLiner: 'Any geometry — logo silhouettes, rounded corners, custom holes.',
    keyInfo: 'Custom shapes & hole layouts',
    photo: 17,
    specs: [
      { label: 'Material', value: '0.5mm to 0.8mm anodized aluminium' },
      { label: 'Finishes', value: 'Satin, brushed, matte, black or custom anodic' },
      { label: 'Mounting', value: 'Adhesive, rivets, screws or cable-tie slots' },
    ],
  },
];

const FINISHES = [
  { title: 'Satin Anodized', desc: 'Low-glare, clean surface', photo: 8 },
  { title: 'Brushed Aluminium', desc: 'Directional premium texture', photo: 26 },
  { title: 'Serialised QR Tags', desc: 'Scan-to-verify asset registers', photo: 15 },
  { title: 'Gold & Coloured', desc: 'Premium retail finishes', photo: 19 },
];

const TECH_SPECS = [
  {
    title: 'Sub-Surface Anodic Seal',
    body: 'Graphics and barcodes are sealed inside the anodic pores before hydration — immune to acetone, thinner, diesel and extreme weather.',
  },
  {
    title: 'Barcode Standards',
    body: 'Code 128, Code 39, 2D QR and DataMatrix, printed with Grade A scan verification (ISO/IEC 15416).',
  },
  {
    title: 'Aluminium & Finishes',
    body: '0.5mm and 0.8mm anodized aluminium in satin, brushed, matte or black anodic finishes. 100% corrosion-free alloy.',
  },
  {
    title: 'Mounting Options',
    body: '3M 468MP high-bond acrylic adhesive for smooth surfaces, or precision-punched 3.2mm / 4.0mm rivet holes for mechanical fixing.',
  },
];

const FAQS = [
  {
    q: 'What is the minimum order quantity for custom aluminium tags in Kenya?',
    a: 'Share your required quantity, dimensions, artwork, and mounting method. We will confirm the most efficient production run for your project and deliver a direct Nairobi factory quotation.',
  },
  {
    q: 'What are Anodized Aluminium Barcode Tags used for?',
    a: 'Our aluminium asset tags are used by Kenyan enterprises, telecom operators, logistics fleets, hospitals, and manufacturing plants to permanently identify and track fixed assets, computers, machinery, and vehicles. Barcodes and graphics are sealed beneath the anodic layer, making them completely immune to paint thinners, grease, sunlight, and high-pressure washing.',
  },
  {
    q: 'How are the aluminium tags mounted?',
    a: 'Choose 3M 468MP high-bond adhesive for smooth surfaces, precision rivet holes for permanent mechanical fixing, or a custom hole and slot layout for screws, bolts, and cable ties.',
  },
  {
    q: 'Can you add logos, serial numbers, and barcodes?',
    a: 'Yes. We can mark logos, asset identifiers, serial numbers, Code 128 or Code 39 barcodes, QR codes, and DataMatrix codes with durable high-contrast anodic printing.',
  },
  {
    q: 'What aluminium finishes are available?',
    a: 'We provide satin, brushed, matte, black anodized, and custom anodic finishes. Artwork can include high-contrast markings, serial codes, and scannable barcodes sealed into the aluminium surface.',
  },
];

/** Category card: photo-led with expandable specs. */
const TagCard: React.FC<{ c: TagCategory; onQuote: () => void }> = ({ c, onQuote }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="bg-white border-2 border-neutral-900 shadow-[6px_6px_0px_#111111] flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] bg-neutral-100 border-b-2 border-neutral-900">
        <Image
          src={tagPhoto(c.photo)}
          alt={`${c.title} — real anodized aluminium tags produced by Impact Creative Designs Kenya`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute left-0 top-0 bg-neutral-950/90 text-white font-mono text-[10px] font-bold uppercase tracking-[0.1em] py-1 px-2.5">
          {c.badge}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-mono text-base sm:text-lg font-black uppercase tracking-tight text-neutral-950 leading-snug">
          {c.title}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">{c.oneLiner}</p>

        <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider border-l-2 border-orange-500 pl-2.5">
          {c.keyInfo}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="mt-1 flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors self-start"
        >
          View specifications
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <dl className="pt-2 space-y-1.5 border-l-2 border-orange-500 pl-3 font-mono text-[11px] leading-relaxed">
            {c.specs.map((s) => (
              <div key={s.label}>
                <dt className="inline font-bold text-neutral-900">{s.label}: </dt>
                <dd className="inline text-neutral-600 font-sans">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-auto pt-3 flex gap-2">
          <button
            type="button"
            onClick={onQuote}
            className="flex-1 bg-neutral-900 hover:bg-orange-600 text-white font-mono text-[11px] font-bold uppercase py-2.5 px-3 transition-colors text-center"
          >
            Get a Quote →
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ask about this tag on WhatsApp"
            className="flex items-center justify-center w-11 bg-[#25D366] hover:bg-[#20bd5a] text-black transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default function CustomTagsPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<'aluminium'>('aluminium');

  // Interactive Aluminium Tag Configurator State
  const [cfgCompany, setCfgCompany] = useState('NAIROBI POWER CORP');
  const [cfgSubtitle, setCfgSubtitle] = useState('TRANSMISSION ASSET');
  const [cfgPropertyOf, setCfgPropertyOf] = useState('PROPERTY OF NAIROBI POWER CORP');
  const [cfgSerial, setCfgSerial] = useState('NPC-2026/0488');
  const [cfgLogoType, setCfgLogoType] = useState<'energy' | 'shield' | 'bank' | 'tech' | 'cargo' | 'rail' | 'health'>('energy');
  const [cfgLogoColor, setCfgLogoColor] = useState('#059669');
  const [cfgMountingHoles, setCfgMountingHoles] = useState(false);

  return (
    <div className="bg-[#fbfaf7] text-neutral-900">
      <TapeStrip
        variant="red"
        text="ALUMINIUM TAGS • 0.5MM / 0.8MM"
        sheen={true}
        compact={true}
      />

      {/* Hero: headline + CTA + real photo */}
      <section className="pt-12 pb-16 border-b-2 border-neutral-900">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h1 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-neutral-950 leading-tight">
                Custom Aluminium Tags in Kenya
              </h1>
              <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed">
                Permanent metal identification for products, assets and equipment — anodized,
                serialized and built to outlast whatever it's stuck to. Manufactured in Nairobi.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setQuoteOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs sm:text-sm font-bold uppercase py-3.5 px-7 border-2 border-orange-700 shadow-[3px_3px_0px_#111111] transition-all"
                >
                  Request a Tag Quote
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-black font-mono text-xs sm:text-sm font-bold uppercase py-3.5 px-7 border border-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>WhatsApp Specs</span>
                </a>
              </div>
              <ul className="pt-2 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-neutral-600">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-orange-600" /> Sealed-in barcodes & QR</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-orange-600" /> Satin, brushed & black anodized</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-orange-600" /> Adhesive or rivet mounting</li>
              </ul>
            </div>

            {/* Hero photo — real client tags */}
            <figure className="relative aspect-[4/3] border-2 border-neutral-900 shadow-[8px_8px_0px_#111111] overflow-hidden bg-neutral-100">
              <Image
                src={tagPhoto(16)}
                alt="Real anodized aluminium barcode asset tags produced for Kenyan organisations by Impact Creative Designs"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                  Actual production · Nairobi facility
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Process: Logo → Tag Design → Finished Tag → Applied */}
      <section className="py-14 bg-[#ebe5db] border-b-2 border-neutral-900">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-black font-mono uppercase tracking-tight text-neutral-950 mb-8 text-center">
            From artwork to asset
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: PenLine, step: '01', title: 'Your logo', desc: 'Send artwork or an idea.', photo: 23, alt: 'Client logo designs prepared for anodic printing' },
              { icon: DraftingCompass, step: '02', title: 'Tag design', desc: 'We lay out the tag proof for approval.', photo: 9, alt: 'Aluminium tag design proof with dimensions' },
              { icon: BadgeCheck, step: '03', title: 'Anodic print', desc: 'Markings sealed into the metal surface.', photo: 16, alt: 'Finished anodized aluminium tags in production runs' },
              { icon: Package, step: '04', title: 'Applied & tracked', desc: 'Every asset gets a permanent ID.', photo: 18, alt: 'Serialised asset tags applied across client organisations' },
            ].map((s) => (
              <div key={s.step} className="bg-white border-2 border-neutral-900 shadow-[4px_4px_0px_#111111] overflow-hidden">
                <div className="relative aspect-[4/3] border-b-2 border-neutral-900 bg-neutral-100">
                  <Image src={tagPhoto(s.photo)} alt={s.alt} fill loading="lazy" sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
                  <span className="absolute left-2 top-2 bg-neutral-950/90 text-white font-mono text-[10px] font-bold px-2 py-1 tracking-[0.1em]">{s.step}</span>
                </div>
                <div className="p-3.5 sm:p-4 flex items-start gap-2.5">
                  <s.icon className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <h3 className="font-mono text-xs sm:text-sm font-black uppercase text-neutral-950">{s.title}</h3>
                    <p className="text-[11px] text-neutral-600 font-sans mt-0.5">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tag categories — visual cards */}
      <section className="py-16 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-4xl font-black font-mono uppercase tracking-tight text-neutral-950">
            What we make
          </h2>
          <p className="mt-2 text-sm text-neutral-600 font-sans">
            Five tag families, one Nairobi factory. Engineering details on request.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TAG_CATEGORIES.map((c) => (
            <TagCard key={c.title} c={c} onQuote={() => setQuoteOpen(true)} />
          ))}
        </div>
      </section>

      {/* Real client work gallery — photos served from Cloudflare R2 */}
      <section className="pb-16 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <ClientTagGallery />
      </section>

      {/* Interactive configurator (kept — visual, not verbose) */}
      <section className="py-16 bg-neutral-950 text-white border-y-2 border-neutral-900">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 border-2 border-neutral-700 p-6 sm:p-8 lg:p-10 shadow-xl">
            <div className="max-w-2xl mb-8">
              <div className="font-mono text-xs uppercase tracking-wider text-amber-400 mb-1">
                INTERACTIVE PREVIEW
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-mono uppercase text-white">
                Design your tag live
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
                Test your branding, serial scheme and mounting in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label htmlFor="cfg-company" className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                    Organization / Brand Name
                  </label>
                  <input
                    id="cfg-company"
                    type="text"
                    value={cfgCompany}
                    onChange={(e) => setCfgCompany(e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-white text-xs font-mono focus:border-white focus:outline-none"
                    placeholder="e.g. NAIROBI POWER CORP"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="cfg-subtitle" className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                      Department / Subtitle
                    </label>
                    <input
                      id="cfg-subtitle"
                      type="text"
                      value={cfgSubtitle}
                      onChange={(e) => setCfgSubtitle(e.target.value)}
                      className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-white text-xs font-mono focus:border-white focus:outline-none"
                      placeholder="e.g. TRANSMISSION ASSET"
                    />
                  </div>
                  <div>
                    <label htmlFor="cfg-serial" className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                      Asset Serial / Code
                    </label>
                    <input
                      id="cfg-serial"
                      type="text"
                      value={cfgSerial}
                      onChange={(e) => setCfgSerial(e.target.value)}
                      className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-white text-xs font-mono focus:border-white focus:outline-none"
                      placeholder="e.g. NPC-2026/0488"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                      Emblem Style
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                      {[
                        { id: 'energy', label: 'Energy' },
                        { id: 'shield', label: 'Shield' },
                        { id: 'bank', label: 'Finance' },
                        { id: 'tech', label: 'Tech' },
                        { id: 'cargo', label: 'Cargo' },
                        { id: 'rail', label: 'Transit' },
                        { id: 'health', label: 'Health' },
                      ].map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setCfgLogoType(m.id as any)}
                          className={`py-1.5 text-center text-[10px] font-mono font-bold uppercase border ${
                            cfgLogoType === m.id
                              ? 'bg-white text-neutral-950 border-white'
                              : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-600'
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                      Emblem Colour
                    </label>
                    <div className="flex gap-2">
                      {[
                        { color: '#ea580c', name: 'Red' },
                        { color: '#1e40af', name: 'Blue' },
                        { color: '#047857', name: 'Green' },
                        { color: '#b45309', name: 'Amber' },
                        { color: '#111827', name: 'Black' },
                      ].map((c) => (
                        <button
                          key={c.color}
                          type="button"
                          onClick={() => setCfgLogoColor(c.color)}
                          className={`w-7 h-7 rounded border-2 transition-transform ${
                            cfgLogoColor === c.color ? 'scale-110 border-white' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: c.color }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                    Mounting
                  </label>
                  <button
                    type="button"
                    onClick={() => setCfgMountingHoles(!cfgMountingHoles)}
                    className={`w-full py-2 px-3 text-xs font-mono font-bold uppercase border transition-colors ${
                      cfgMountingHoles
                        ? 'bg-neutral-100 text-neutral-950 border-white'
                        : 'bg-neutral-950 text-neutral-300 border-neutral-700 hover:border-neutral-500'
                    }`}
                  >
                    {cfgMountingHoles ? '✓ Rivet Holes (3.2mm)' : '3M 468MP Adhesive'}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-neutral-950 border border-neutral-800 rounded">
                <div className="text-[11px] font-mono uppercase text-neutral-500 mb-4 text-center">
                  Live render
                </div>
                <div className="w-full flex justify-center py-4">
                  <AluminiumTagVisual
                    companyName={cfgCompany || 'ENTERPRISE NAME'}
                    subtitle={cfgSubtitle || 'ASSET CLASSIFICATION'}
                    propertyOfText={cfgPropertyOf || 'PROPERTY OF ASSET HOLDER'}
                    serialNumber={cfgSerial || 'AST-0001'}
                    barcodeType="code128"
                    logoType={cfgLogoType}
                    logoColor={cfgLogoColor}
                    thickness="0.8mm"
                    mountingHoles={cfgMountingHoles}
                    size="lg"
                  />
                </div>
                <div className="mt-6 w-full pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-400">
                  <div>
                    Substrate: <span className="text-white font-bold">0.8mm Anodized Al</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setQuoteProduct('aluminium');
                      setQuoteOpen(true);
                    }}
                    className="w-full sm:w-auto bg-neutral-100 hover:bg-white text-neutral-950 font-bold uppercase py-2 px-4 transition-colors text-xs"
                  >
                    Quote This Spec →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finishes & styles — visually browsable */}
      <section className="py-16 bg-[#181818] text-white border-y-2 border-neutral-900">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-xl sm:text-2xl font-black font-mono uppercase tracking-tight text-white">
              Finishes & styles
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-sans">
              Every finish photographed from real production runs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FINISHES.map((f) => (
              <figure key={f.title} className="border border-neutral-800 bg-neutral-900 overflow-hidden">
                <div className="relative aspect-[4/3] border-b border-neutral-800">
                  <Image src={tagPhoto(f.photo)} alt={`${f.title} example produced by Impact Creative Designs`} fill loading="lazy" sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
                </div>
                <figcaption className="p-3">
                  <div className="font-mono text-xs font-bold uppercase text-white">{f.title}</div>
                  <div className="text-[11px] text-neutral-400 mt-1 font-sans">{f.desc}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering specifications — kept, moved down, compact */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-black font-mono uppercase tracking-tight text-neutral-950 mb-6">
          Engineering specifications
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TECH_SPECS.map((t) => (
            <div key={t.title} className="bg-white border-2 border-neutral-900 p-5 shadow-[3px_3px_0px_#111111]">
              <dt className="font-mono text-xs font-bold uppercase text-neutral-950">{t.title}</dt>
              <dd className="mt-1.5 text-xs text-neutral-600 leading-relaxed font-sans">{t.body}</dd>
            </div>
          ))}
        </dl>

        {/* SEO paragraph with keywords + internal link */}
        <div className="mt-10 space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
          <p>
            Impact Creative Designs manufactures anodized aluminium tags, barcode asset tags, and metal
            nameplates in Nairobi for Kenyan enterprises, hospitals, schools, SACCOs, insurers and
            government departments. Tags are photo-anodized so logos, serial numbers and barcodes
            are sealed beneath the anodic layer — impervious to acetone, paint solvents, abrasion
            and intense equatorial UV. Standard sizes from 50×20mm to 75×25mm; custom die-cut
            shapes on request. Need branded tape to match? See our{' '}
            <Link href="/branded-tapes" className="font-bold text-neutral-900 underline decoration-orange-500 hover:text-orange-600">custom branded packaging tape</Link>.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase tracking-tight text-neutral-950 mb-8 text-center">
          FREQUENTLY ASKED QUESTIONS — ALUMINIUM TAGS
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
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
        <div className="mt-12 p-8 bg-white border-2 border-neutral-900 shadow-[6px_6px_0px_#ea580c] text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black font-mono uppercase text-neutral-950">
            REQUEST AN ALUMINIUM TAG PRODUCTION QUOTE
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto font-sans">
            Send your artwork or logo. We provide free physical sample proofs in Nairobi prior to production runs.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setQuoteOpen(true)}
              className="bg-neutral-950 hover:bg-neutral-800 text-white font-mono text-xs sm:text-sm font-bold uppercase py-3.5 px-7 transition-colors"
            >
              REQUEST AN ALUMINIUM TAG QUOTE
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} defaultProduct={quoteProduct} />
    </div>
  );
}