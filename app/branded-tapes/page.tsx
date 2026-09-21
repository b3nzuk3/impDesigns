'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TapeStrip } from '@/components/TapeStrip';
import { RealTapeShowcase } from '@/components/RealTapeShowcase';
import { ClientTapeGallery } from '@/components/ClientTapeGallery';
import { QuoteModal } from '@/components/QuoteModal';
import { tapePhoto } from '@/lib/media';
import { MessageCircle, ChevronDown, ArrowRight, Check, Printer, Package } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/254722404647?text=Hello%20Impact%20Designs!%20I%20want%20a%20quote%20for%20custom%20branded%20packaging%20tape.';

interface TapeProduct {
  title: string;
  badge: string;
  oneLiner: string;
  size: string;
  moq: string;
  photo: number;
  aspect: string;
  /** collapsed-by-default technical spec block */
  specs: { label: string; value: string }[];
}

const PRODUCTS: TapeProduct[] = [
  {
    title: '48mm Standard Logo Tape',
    badge: 'MOST POPULAR',
    oneLiner: 'The everyday workhorse for carton sealing and parcel dispatch.',
    size: '48mm × 50m / 100m',
    moq: '360 rolls',
    photo: 2,
    aspect: 'aspect-[4/3]',
    specs: [
      { label: 'Film', value: 'BOPP 28–32µm' },
      { label: 'Adhesive', value: 'Water-based acrylic / hot melt rubber' },
      { label: 'Best for', value: 'E-commerce dispatch, courier boxes, retail packing' },
    ],
  },
  {
    title: '72mm Heavy-Duty Security Tape',
    badge: 'SECURITY & EXPORT',
    oneLiner: 'Wide, high-tack tape for heavy cargo and export freight.',
    size: '72mm × 100m / 150m',
    moq: '360 rolls',
    photo: 20,
    aspect: 'aspect-[4/3]',
    specs: [
      { label: 'Film', value: 'Heavy-gauge 35µm BOPP' },
      { label: 'Adhesive', value: 'High-tack solvent' },
      { label: 'Best for', value: 'Export pallets, heavy cargo, pharmaceutical consignments' },
    ],
  },
  {
    title: '24mm Slim Boutique Tape',
    badge: 'SPECIALTY & RETAIL',
    oneLiner: 'Narrow tape for poly mailers, gift boxes and retail packaging.',
    size: '24mm × 50m / 66m',
    moq: '360 rolls',
    photo: 13,
    aspect: 'aspect-[4/3]',
    specs: [
      { label: 'Film', value: 'White or transparent BOPP 28µm' },
      { label: 'Adhesive', value: 'Clear non-yellowing acrylic' },
      { label: 'Best for', value: 'Garment bags, gift boxes, jewelry, jar seals' },
    ],
  },
];

const FILM_COLORS = [
  { name: 'White BOPP', desc: 'Best contrast for colour logos', swatch: 'bg-white text-black' },
  { name: 'Transparent BOPP', desc: 'Box shows through', swatch: 'bg-neutral-200 text-black' },
];

const PRINT_OPTIONS = [
  { title: '1–2 Colour Logo', desc: 'Your logo repeated along the roll', photo: 8 },
  { title: 'Full Flood Coat', desc: 'Coloured base, logo reversed in white', desc2: 'Up to 4 Pantone colours', photo: 13 },
  { title: 'Tamper-Evident Print', desc: '"Seal broken?" message with your contacts', desc2: 'Like our Flash Parcel run', photo: 2 },
];

const FAQS = [
  {
    q: 'What is the minimum order quantity for custom printed tape in Kenya?',
    a: 'Our factory-direct minimum order is 360 rolls per design. This keeps factory pricing sharp while making professionally printed branded packaging tape accessible for growing Kenyan e-commerce businesses and retailers, not just giant corporations.',
  },
  {
    q: 'What base tape materials can I choose from?',
    a: 'We offer two premium base tape options: White BOPP (most popular for vibrant multi-color printing with maximum logo contrast) and Transparent BOPP (allows the box beneath to show through for a subtle, clean look).',
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

/** Product card: photo-led, spec details behind an expandable. */
const ProductCard: React.FC<{ p: TapeProduct; onQuote: () => void }> = ({ p, onQuote }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="bg-white border-2 border-neutral-900 shadow-[6px_6px_0px_#111111] flex flex-col overflow-hidden">
      {/* Product photo */}
      <div className={`relative ${p.aspect} bg-neutral-100 border-b-2 border-neutral-900`}>
        <Image
          src={tapePhoto(p.photo)}
          alt={`${p.title} — real printed tape produced by Impact Designs Kenya`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
        <span className="absolute left-0 top-0 bg-neutral-950/90 text-white font-mono text-[10px] font-bold uppercase tracking-[0.1em] py-1 px-2.5">
          {p.badge}
        </span>
      </div>

      {/* Card body — name, one-liner, size, MOQ, CTAs */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-mono text-base sm:text-lg font-black uppercase tracking-tight text-neutral-950 leading-snug">
          {p.title}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">{p.oneLiner}</p>

        <div className="mt-auto pt-3 space-y-1.5 font-mono text-xs">
          <div className="flex justify-between border-b border-neutral-200 pb-1.5">
            <span className="text-neutral-500">SIZE</span>
            <span className="font-bold text-neutral-900 text-right">{p.size}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-200 pb-1.5">
            <span className="text-neutral-500">MIN ORDER</span>
            <span className="font-bold text-orange-600 text-right">{p.moq}</span>
          </div>
        </div>

        {/* Expandable specifications */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="mt-3 flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors self-start"
        >
          View specifications
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <dl className="pt-2 space-y-1.5 border-l-2 border-orange-500 pl-3 font-mono text-[11px] leading-relaxed">
            {p.specs.map((s) => (
              <div key={s.label}>
                <dt className="inline font-bold text-neutral-900">{s.label}: </dt>
                <dd className="inline text-neutral-600 font-sans">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {/* CTAs */}
        <div className="pt-3 flex gap-2">
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
            aria-label="Ask about this tape on WhatsApp"
            className="flex items-center justify-center w-11 bg-[#25D366] hover:bg-[#20bd5a] text-black transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default function BrandedTapesPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="bg-[#fbfaf7] text-neutral-900">
      <TapeStrip
        variant="black"
        text="CUSTOM BRANDED TAPES KENYA • FACTORY DIRECT NAIROBI • 360 ROLL MINIMUM • 48MM & 72MM SPECIALISTS •"
        sheen={true}
        compact={true}
      />

      {/* Hero: headline + CTA + big real photo */}
      <section className="pt-12 pb-16 border-b-2 border-neutral-900">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h1 className="text-3xl sm:text-5xl font-black font-mono tracking-tight uppercase text-neutral-950 leading-tight">
                Custom Branded Tapes in Kenya
              </h1>
              <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed">
                Your logo, printed on every parcel you ship. Factory-direct from our Nairobi
                facility — 360 roll minimum per design.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setQuoteOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-mono text-xs sm:text-sm font-bold uppercase py-3.5 px-7 border-2 border-orange-700 shadow-[3px_3px_0px_#111111] transition-all"
                >
                  Request a Tape Quote
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
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-orange-600" /> 3–5 day production</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-orange-600" /> Up to 4 Pantone colours</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-orange-600" /> Nationwide delivery</li>
              </ul>
            </div>

            {/* Hero photo — real production shot */}
            <figure className="relative aspect-[4/3] border-2 border-neutral-900 shadow-[8px_8px_0px_#111111] overflow-hidden bg-neutral-100">
              <Image
                src={tapePhoto(16)}
                alt="Real printed branded packing tape rolls produced for Kenyan companies by Impact Designs"
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

      {/* Process: Your Logo → Printed Tape → Branded Package */}
      <section className="py-14 bg-[#eedbc2] border-b-2 border-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-kraft-cardboard opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-black font-mono uppercase tracking-tight text-neutral-950 mb-8 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Printer, step: '01', title: 'Send your logo', desc: 'Artwork or just an idea — we prepare the print proof.', photo: 8, alt: 'Printed logo tape rolls awaiting dispatch' },
              { icon: Package, step: '02', title: 'We print & roll', desc: 'Flexographic printing on premium BOPP film in Nairobi.', photo: 13, alt: 'Printed tape rolls in different client colours' },
              { icon: Check, step: '03', title: 'Seal every parcel', desc: 'Every box you ship becomes a brand impression.', photo: 20, alt: 'Carton sealed with custom branded tape' },
            ].map((s) => (
              <div key={s.step} className="bg-white border-2 border-neutral-900 shadow-[4px_4px_0px_#111111] overflow-hidden">
                <div className="relative aspect-[16/10] border-b-2 border-neutral-900">
                  <Image src={tapePhoto(s.photo)} alt={s.alt} fill loading="lazy" sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                  <span className="absolute left-2 top-2 bg-neutral-950/90 text-white font-mono text-[10px] font-bold px-2 py-1 tracking-[0.1em]">{s.step}</span>
                </div>
                <div className="p-4 flex items-start gap-3">
                  <s.icon className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <h3 className="font-mono text-sm font-black uppercase text-neutral-950">{s.title}</h3>
                    <p className="text-xs text-neutral-600 font-sans mt-1">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products — visual cards first */}
      <section className="py-16 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-4xl font-black font-mono uppercase tracking-tight text-neutral-950">
            Choose your tape
          </h2>
          <p className="mt-2 text-sm text-neutral-600 font-sans">
            Three formats, one factory price list. Details on request.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.title} p={p} onQuote={() => setQuoteOpen(true)} />
          ))}
        </div>
      </section>

      {/* Real client work gallery — photos served from Cloudflare R2 */}
      <section className="pb-16 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <ClientTapeGallery />
      </section>

      {/* Film colours + print styles */}
      <section className="py-16 bg-[#181818] text-white border-y-2 border-neutral-900">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Base film colours */}
            <div className="lg:col-span-5">
              <h2 className="text-xl sm:text-2xl font-black font-mono uppercase tracking-tight text-white">
                Base film colours
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-sans">
                Pick White or Transparent BOPP, print in up to 4 Pantone spot colours.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {FILM_COLORS.map((c) => (
                  <div key={c.name} className="flex items-center gap-3 border border-neutral-800 bg-neutral-900 p-3">
                    <span className={`w-10 h-10 shrink-0 ${c.swatch} shadow-inner`} aria-hidden="true" />
                    <span>
                      <span className="block font-mono text-xs font-bold uppercase text-white">{c.name}</span>
                      <span className="block text-[11px] text-neutral-400 font-sans">{c.desc}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Print styles with photos */}
            <div className="lg:col-span-7">
              <h2 className="text-xl sm:text-2xl font-black font-mono uppercase tracking-tight text-white mb-6">
                Print styles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PRINT_OPTIONS.map((o) => (
                  <figure key={o.title} className="border border-neutral-800 bg-neutral-900 overflow-hidden">
                    <div className="relative aspect-[4/3] border-b border-neutral-800">
                      <Image src={tapePhoto(o.photo)} alt={`${o.title} example printed by Impact Designs`} fill loading="lazy" sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" />
                    </div>
                    <figcaption className="p-3">
                      <div className="font-mono text-xs font-bold uppercase text-white">{o.title}</div>
                      <div className="text-[11px] text-neutral-400 mt-1 font-sans">{o.desc}</div>
                      {o.desc2 && <div className="text-[11px] text-neutral-400 font-sans">{o.desc2}</div>}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO content: keywords + internal links */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-black font-mono uppercase tracking-tight text-neutral-950 mb-4">
          Branded packaging tape, manufactured in Nairobi
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
          <p>
            Impact Designs is a Kenyan manufacturer of custom printed packaging tape — also known
            as logo tape, sellotape printing, or branded packing tape. We print your company name,
            logo, phone number or tamper-evident message onto premium White or Transparent BOPP
            film, for courier fleets, retail brands, and e-commerce companies in Nairobi and
            nationwide.
          </p>
          <p>
            Every roll is produced on premium cast BOPP film, corona-treated for maximum ink
            adhesion, and coated with non-crystallizing pressure-sensitive acrylic — no brittle
            peeling in hot East African weather. Need{' '}
            <Link href="/custom-tags" className="font-bold text-neutral-900 underline decoration-orange-500 hover:text-orange-600">custom aluminium asset tags</Link>{' '}
            to match? We make those too.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase tracking-tight text-neutral-950 mb-8 text-center">
          FREQUENTLY ASKED QUESTIONS — BRANDED TAPES
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
            HAVE A CUSTOM PACKAGING TAPE INQUIRY?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto font-sans">
            Whether you need 360 rolls for your first branded run or 1,000+ rolls for an automated fulfillment center, we provide competitive factory pricing in Nairobi.
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