'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TapeStrip } from '@/components/TapeStrip';
import { AluminiumTagVisual } from '@/components/AluminiumTagVisual';
import { RealAluminiumTagPhoto } from '@/components/RealAluminiumTagPhoto';
import { QuoteModal } from '@/components/QuoteModal';
import { MessageCircle, ArrowRight, Tag, Sparkles, CheckCircle2, ShieldCheck, Wrench, Barcode, Layers } from 'lucide-react';

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

  const tagTypes = [
    {
      title: 'Anodized Aluminium Apparel Tags',
      badge: 'FASHION & APPAREL',
      desc: 'Slim, durable aluminium tags for Kenyan fashion houses, streetwear brands, and boutique designers. Premium branding that will not curl, tear, or fade on retail display racks.',
      photo: 'range' as const,
      photoAlt: 'Real coloured anodized aluminium tags in several shapes and finishes',
      photoCaption: 'Material reference • coloured anodized aluminium tag samples',
      specs: [
        { label: 'MATERIAL:', val: '0.5mm Satin or Brushed Anodized Aluminium' },
        { label: 'MARKING:', val: 'Photo-Anodized Logo, Text & Serial Code' },
        { label: 'MOUNTING:', val: '3M 468MP Adhesive or Precision Rivet Holes' },
      ],
    },
    {
      title: 'Brushed Aluminium Product Tags',
      badge: 'SPECIALTY FOOD & CRAFTS',
      desc: 'Weather-resistant brushed aluminium tags for specialty coffee, artisanal soaps, candles, and gift hampers where packaging needs a permanent premium marker.',
      photo: 'range' as const,
      photoAlt: 'Real brushed and coloured aluminium tag samples photographed on a white background',
      photoCaption: 'Material reference • brushed and coloured tag finishes',
      specs: [
        { label: 'MATERIAL:', val: '0.5mm / 0.8mm Brushed Aluminium Alloy' },
        { label: 'MARKING:', val: 'High-Contrast Black Anodic Print & Barcode' },
        { label: 'MOUNTING:', val: 'Adhesive Backing or 3.2mm Mechanical Holes' },
      ],
    },
    {
      title: 'Barcode Inventory & Price Tags',
      badge: 'HIGH VOLUME RETAIL',
      desc: 'Serialized aluminium identifiers with crisp barcode areas and asset fields for retail equipment, stockroom fixtures, IT hardware, and fleet inventory.',
      photo: 'closeup' as const,
      photoAlt: 'Real brushed aluminium asset plate with industrial printed markings and mounting holes',
      photoCaption: 'Material reference • brushed asset plate with mounting holes',
      specs: [
        { label: 'MATERIAL:', val: '0.5mm Matte Anodized Aluminium' },
        { label: 'MARKING:', val: 'Code 128, Code 39, QR or DataMatrix' },
        { label: 'MOUNTING:', val: '3M 468MP Adhesive or Rivet Holes' },
      ],
    },
    {
      title: 'Custom Die-Cut Aluminium Tags',
      badge: 'BESPOKE SHAPES',
      desc: 'Move beyond standard rectangles with custom aluminium geometries, logo silhouettes, rounded corners, mounting holes, and branded asset plates.',
      photo: 'range' as const,
      photoAlt: 'Real aluminium tag samples showing different colours, rounded corners, and hole patterns',
      photoCaption: 'Material reference • custom shapes and mounting layouts',
      specs: [
        { label: 'MATERIAL:', val: '0.5mm to 0.8mm Anodized Aluminium' },
        { label: 'FINISHES:', val: 'Satin, Brushed, Black or Custom Anodic Marking' },
        { label: 'MOUNTING:', val: 'Adhesive, Rivets, Screws or Cable Tie Slots' },
      ],
    },
    {
      title: 'Anodized Aluminium Barcode Asset Tags',
      badge: 'INDUSTRIAL ASSET TRACKING',
      desc: 'Heavy-duty 0.5mm & 0.8mm metallic aluminium nameplates with laser-etched/photo-anodized scannable barcodes. Designed for Kenyan enterprise asset tracking, fleet vehicles, IT servers, and harsh factory equipment.',
      photo: 'closeup' as const,
      photoAlt: 'Real close-up photograph of a brushed aluminium identification plate',
      photoCaption: 'Material reference • close-up brushed aluminium nameplate',
      specs: [
        { label: 'MATERIAL:', val: '0.5mm / 0.8mm Anodized Matte Aluminium' },
        { label: 'DURABILITY:', val: 'Resistant to Heat (450°C), UV, Solvents & Abrasion' },
        { label: 'ATTACHMENT:', val: '3M 468MP High-Bond Adhesive or 3.2mm Rivet Holes' },
      ],
    },
  ];

  const tagFaqs = [
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

  return (
    <div className="bg-[#fbfaf7] text-neutral-900">
      {/* Top Tape Strip */}
      <TapeStrip
        variant="red"
        text="ALUMINIUM TAGS • 0.5MM / 0.8MM"
        sheen={true}
        compact={true}
      />

      {/* Main SEO Header */}
      <section className="pt-12 pb-16 border-b-2 border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight uppercase text-neutral-950 leading-tight">
              Custom Aluminium Tags in Kenya
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed">
              Durable aluminium tags and barcode asset plates engineered for permanent brand identification. Custom manufactured in Nairobi with anodized finishes, serialized markings, and reliable adhesive or rivet mounting.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setQuoteOpen(true)}
                className="bg-red-700 hover:bg-red-800 text-white font-mono text-xs sm:text-sm font-bold uppercase py-3.5 px-7 border-2 border-red-800 shadow-[3px_3px_0px_#111111] transition-all"
              >
                REQUEST AN ALUMINIUM TAG QUOTE
              </button>
              <a
                href="https://wa.me/254722404647?text=Hello%20Impact%20Designs!%20I%20want%20a%20quote%20for%20custom%20aluminium%20tags."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-black font-mono text-xs sm:text-sm font-bold uppercase py-3.5 px-7 border border-green-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>WhatsApp Aluminium Tag Specs</span>
              </a>
            </div>
          </div>

          {/* Physical Tag Object Gallery Display */}
          <div className="mt-12 bg-[#ebe5db] border-2 border-neutral-900 p-8 sm:p-12 shadow-[8px_8px_0px_#111111] relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="font-mono text-[13px] sm:text-xs font-bold text-neutral-700 uppercase mb-1">
                PHYSICAL TACTILE OBJECTS
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase text-neutral-950">
                ALUMINIUM TAGS THAT LAST
              </h2>
            </div>

            {/* Aluminium tags displayed as durable branded asset plates */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-6">
              <AluminiumTagVisual
                companyName="SAVANNAH ROASTERS"
                subtitle="SPECIALTY SINGLE ESTATE AA"
                propertyOfText="LOT #2026 • ORGANIC"
                serialNumber="SAV-2026"
                barcodeType="code128"
                logoType="crest"
                logoColor="#b91c1c"
                logoAccent="#1e3a8a"
                thickness="0.5mm"
                mountingHoles={false}
                size="md"
              />
              <AluminiumTagVisual
                companyName="KILIMA LUXE"
                subtitle="KENYAN COTTON COLLECTION"
                propertyOfText="KLM-092 • RETAIL SERIES"
                serialNumber="KLM-092"
                barcodeType="code128"
                logoType="tech"
                logoColor="#1d4ed8"
                logoAccent="#eab308"
                thickness="0.8mm"
                mountingHoles={true}
                size="md"
              />
              <AluminiumTagVisual
                companyName="NOIR NAIROBI"
                subtitle="BESPOKE LEATHER GOODS"
                propertyOfText="NRB-LIMITED • PREMIUM"
                serialNumber="NRB-LTD"
                barcodeType="datamatrix"
                logoType="shield"
                logoColor="#111827"
                logoAccent="#d4af37"
                thickness="0.8mm"
                mountingHoles={false}
                size="md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tag Categories & Materials */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-black font-mono uppercase tracking-tight text-neutral-950">
            ENGINEERED ALUMINIUM TAGS & FINISHES
          </h2>
          <p className="mt-2 text-sm text-neutral-600 font-sans">
            Choose your aluminium gauge, anodized surface finish, marking method, and mounting hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tagTypes.map((tag, i) => (
            <div
              key={i}
              className="bg-white border-2 border-neutral-900 p-6 sm:p-8 shadow-[6px_6px_0px_#111111] flex flex-col justify-between"
            >
              <div>
                <RealAluminiumTagPhoto
                  image={tag.photo}
                  alt={tag.photoAlt}
                  caption={tag.photoCaption}
                  className="mb-6"
                />
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-neutral-900 text-white font-mono text-[10px] font-bold py-1 px-2 uppercase">
                    {tag.badge}
                  </span>
                  <Tag className="w-5 h-5 text-red-700" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-mono uppercase text-neutral-950">
                  {tag.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  {tag.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-neutral-200 space-y-2 text-xs font-mono">
                  {tag.specs.map((s, idx) => (
                    <div key={idx} className="flex justify-between border-b border-neutral-100 pb-1">
                      <span className="text-neutral-500">{s.label}</span>
                      <span className="font-bold text-neutral-900 text-right">{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={() => setQuoteOpen(true)}
                  className="w-full bg-neutral-950 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase py-3 px-4 transition-colors text-center"
                >
                  Configure This Tag Type →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Anodized Aluminium Barcode Asset Tags Showcase & Interactive Studio */}
      <section className="py-16 bg-neutral-950 text-white border-y-2 border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                INDUSTRIAL PRODUCT LINE • NAIROBI PLANT
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-mono uppercase tracking-tight text-white leading-tight">
                ANODIZED ALUMINIUM BARCODE ASSET TAGS
              </h2>
              <p className="mt-3 text-xs sm:text-base text-neutral-300 font-sans leading-relaxed">
                Impervious metallic asset nameplates engineered for heavy machinery, server racks, fleet vehicles, and enterprise asset tracking in Kenya. Barcodes and corporate markings are sealed beneath an inorganic anodic layer that resists acetone, paint solvents, abrasion, and intense equatorial UV.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setQuoteProduct('aluminium');
                  setQuoteOpen(true);
                }}
                className="bg-neutral-100 hover:bg-white text-neutral-950 font-mono text-xs sm:text-sm font-bold uppercase py-3.5 px-6 transition-colors border-2 border-white shadow-[3px_3px_0px_#ffffff]"
              >
                Quote Aluminium Tags →
              </button>
            </div>
          </div>

          {/* Green Workbench Quality Inspection Mat (Visual Reference Style) */}
          <div className="mb-14 border-4 border-neutral-800 shadow-2xl overflow-hidden">
            {/* Mat Top Header */}
            <div className="bg-[#0f281a] px-4 sm:px-6 py-3 border-b-2 border-[#204a33] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#7ed8a4] gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                <span className="font-bold tracking-wider uppercase">
                  QUALITY INSPECTION BENCH • CALIBRATED LASER & ANODIC PRINTING
                </span>
              </div>
              <div className="text-[11px] text-[#5ca87c]">
                STANDARDS: ISO/IEC 15416 • GRADE A 100% SCAN VERIFICATION
              </div>
            </div>

            {/* Mat Surface (Green cutting workbench with grid markings) */}
            <div
              className="p-6 sm:p-10 lg:p-12 relative"
              style={{
                backgroundColor: '#163d27',
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
                  linear-gradient(to right, rgba(0, 0, 0, 0.25) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px, 20px 20px, 100px 100px, 100px 100px',
              }}
            >
              {/* Corner dimension stamp */}
              <div className="absolute top-3 left-4 font-mono text-[10px] text-[#4d8666] select-none pointer-events-none">
                SCALE: 1:1 METRIC [50×20mm - 75×25mm]
              </div>
              <div className="absolute top-3 right-4 font-mono text-[10px] text-[#4d8666] select-none pointer-events-none">
                SURFACE: SELF-HEALING ANTI-STATIC MAT
              </div>

              {/* 2-Column × 4-Row Industrial Asset Tag Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-4">
                {/* Row 1, Tag 1 */}
                <div className="flex flex-col items-center">
                  <AluminiumTagVisual
                    companyName="SAVANNAH FREIGHT"
                    subtitle="EXPRESS LOGISTICS NAIROBI"
                    propertyOfText="PROPERTY OF SAVANNAH POSTAL"
                    serialNumber="PST-1823-NB"
                    barcodeType="code128"
                    logoType="shield"
                    logoColor="#b91c1c"
                    logoAccent="#1e3a8a"
                    thickness="0.8mm"
                    mountingHoles={false}
                    size="md"
                  />
                  <span className="font-mono text-[11px] text-[#95d1af] mt-2">
                    01 • Logistics Fleet Plate (3M 468MP High-Bond Adhesive)
                  </span>
                </div>

                {/* Row 1, Tag 2 */}
                <div className="flex flex-col items-center">
                  <AluminiumTagVisual
                    companyName="BETAPAY SYSTEMS"
                    subtitle="DIGITAL INFRASTRUCTURE"
                    propertyOfText="ASSET IDENTIFIER"
                    serialNumber="00552"
                    barcodeType="code128"
                    logoType="tech"
                    logoColor="#1d4ed8"
                    logoAccent="#eab308"
                    thickness="0.5mm"
                    mountingHoles={false}
                    size="md"
                  />
                  <span className="font-mono text-[11px] text-[#95d1af] mt-2">
                    02 • Server Rack & IT Hardware Tag (High Contrast Barcode)
                  </span>
                </div>

                {/* Row 2, Tag 3 */}
                <div className="flex flex-col items-center">
                  <AluminiumTagVisual
                    companyName="KILIMA NETWORKS"
                    subtitle="DATA CENTER ASSET"
                    propertyOfText="PROPERTY OF KILIMA NETWORKS"
                    serialNumber="C/0038/87"
                    barcodeType="code128"
                    logoType="tech"
                    logoColor="#dc2626"
                    logoAccent="#991b1b"
                    thickness="0.5mm"
                    mountingHoles={false}
                    size="md"
                  />
                  <span className="font-mono text-[11px] text-[#95d1af] mt-2">
                    03 • Telecom Node Plate (Chemical & Solvent Resistant)
                  </span>
                </div>

                {/* Row 2, Tag 4 */}
                <div className="flex flex-col items-center">
                  <AluminiumTagVisual
                    companyName="APEX COMMERCIAL"
                    subtitle="EQUIPMENT LEASING"
                    propertyOfText="EQUIPMENT TRACKING"
                    serialNumber="EQ-0223472"
                    barcodeType="code128"
                    logoType="bank"
                    logoColor="#7f1d1d"
                    logoAccent="#450a0a"
                    thickness="0.8mm"
                    mountingHoles={true}
                    size="md"
                  />
                  <span className="font-mono text-[11px] text-[#95d1af] mt-2">
                    04 • Asset Finance Plate (Dual 3.2mm Mechanical Rivet Holes)
                  </span>
                </div>

                {/* Row 3, Tag 5 */}
                <div className="flex flex-col items-center">
                  <AluminiumTagVisual
                    companyName="RIFT GEOTHERMAL"
                    subtitle="KENYA RENEWABLE POWER"
                    propertyOfText="PROPERTY OF RIFT ENERGY"
                    serialNumber="GDC-04902"
                    barcodeType="code128"
                    logoType="energy"
                    logoColor="#047857"
                    logoAccent="#065f46"
                    thickness="0.8mm"
                    mountingHoles={true}
                    size="md"
                  />
                  <span className="font-mono text-[11px] text-[#95d1af] mt-2">
                    05 • Heavy Power Plant Plate (Resistant to 450°C & Steam)
                  </span>
                </div>

                {/* Row 3, Tag 6 */}
                <div className="flex flex-col items-center">
                  <AluminiumTagVisual
                    companyName="AMANI ASSURANCE"
                    subtitle="UNDERWRITING & FLEET"
                    propertyOfText="VERIFIED ASSET REGISTER"
                    serialNumber="APA/7200"
                    barcodeType="code128"
                    logoType="shield"
                    logoColor="#1e40af"
                    logoAccent="#b91c1c"
                    thickness="0.5mm"
                    mountingHoles={false}
                    size="md"
                  />
                  <span className="font-mono text-[11px] text-[#95d1af] mt-2">
                    06 • Enterprise Fixed Asset Tag (High-Bond 3M Acrylic)
                  </span>
                </div>

                {/* Row 4, Tag 7 */}
                <div className="flex flex-col items-center">
                  <AluminiumTagVisual
                    companyName="EA FREIGHT RAIL"
                    subtitle="ROLLING STOCK DIVISION"
                    propertyOfText="KENYA RAIL FREIGHT"
                    serialNumber="KR/00701"
                    barcodeType="code128"
                    logoType="rail"
                    logoColor="#b45309"
                    logoAccent="#b91c1c"
                    thickness="0.8mm"
                    mountingHoles={true}
                    size="md"
                  />
                  <span className="font-mono text-[11px] text-[#95d1af] mt-2">
                    07 • Rolling Stock & Rail Cargo Plate (Impact Resistant)
                  </span>
                </div>

                {/* Row 4, Tag 8 */}
                <div className="flex flex-col items-center">
                  <AluminiumTagVisual
                    companyName="UAPEX HEALTHCARE"
                    subtitle="BIOMEDICAL EQUIPMENT"
                    propertyOfText="PROPERTY OF UAPEX HEALTH GROUP"
                    serialNumber="UAP/00205"
                    barcodeType="code128"
                    logoType="health"
                    logoColor="#991b1b"
                    logoAccent="#dc2626"
                    thickness="0.5mm"
                    mountingHoles={false}
                    size="md"
                  />
                  <span className="font-mono text-[11px] text-[#95d1af] mt-2">
                    08 • Clinical & Laboratory Asset Tag (Autoclave Proof)
                  </span>
                </div>
              </div>
            </div>

            {/* Mat Footer */}
            <div className="bg-[#0f281a] px-4 sm:px-6 py-3 border-t-2 border-[#204a33] text-[11px] font-mono text-[#7ed8a4] flex flex-col sm:flex-row justify-between items-center gap-2">
              <span>ATTACHMENT: 3M 468MP HIGH-BOND ADHESIVE OR 3.2MM MECHANICAL RIVET HOLES</span>
              <span>100% CORROSION-FREE ANODIZED ALUMINIUM ALLOY</span>
            </div>
          </div>

          {/* Interactive Live Aluminium Tag Generator & Configurator */}
          <div className="bg-neutral-900 border-2 border-neutral-700 p-6 sm:p-8 lg:p-10 shadow-xl mb-14">
            <div className="max-w-2xl mb-8">
              <div className="font-mono text-xs uppercase tracking-wider text-amber-400 mb-1">
                INTERACTIVE CLIENT TEST BENCH
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-mono uppercase text-white">
                CUSTOMIZE YOUR ALUMINIUM ASSET TAG
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
                Test your brand typography, asset code scheme, and mounting requirements in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Inputs Column */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                    Organization / Brand Name
                  </label>
                  <input
                    type="text"
                    value={cfgCompany}
                    onChange={(e) => setCfgCompany(e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-white text-xs font-mono focus:border-white focus:outline-none"
                    placeholder="e.g. NAIROBI POWER CORP"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                      Department / Subtitle
                    </label>
                    <input
                      type="text"
                      value={cfgSubtitle}
                      onChange={(e) => setCfgSubtitle(e.target.value)}
                      className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-white text-xs font-mono focus:border-white focus:outline-none"
                      placeholder="e.g. TRANSMISSION ASSET"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                      Asset Serial / Code
                    </label>
                    <input
                      type="text"
                      value={cfgSerial}
                      onChange={(e) => setCfgSerial(e.target.value)}
                      className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-white text-xs font-mono focus:border-white focus:outline-none"
                      placeholder="e.g. NPC-2026/0488"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                    Property-Of Header Line
                  </label>
                  <input
                    type="text"
                    value={cfgPropertyOf}
                    onChange={(e) => setCfgPropertyOf(e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 text-white text-xs font-mono focus:border-white focus:outline-none"
                    placeholder="e.g. PROPERTY OF NAIROBI POWER CORP"
                  />
                </div>

                {/* Logo Motif Selector */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                    Corporate Emblem Style
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

                {/* Color & Mounting Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                      Emblem Accent Color
                    </label>
                    <div className="flex gap-2">
                      {[
                        { color: '#b91c1c', name: 'Red' },
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

                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-neutral-300 mb-1">
                      Mounting Holes
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
              </div>

              {/* Live Preview Column */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-neutral-950 border border-neutral-800 rounded">
                <div className="text-[11px] font-mono uppercase text-neutral-500 mb-4 text-center">
                  REAL-TIME PHOTOREALISTIC RENDER
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
                  <div>
                    Grade: <span className="text-[#34d399] font-bold">ISO/IEC Grade A</span>
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

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-8 h-8 rounded-none border border-neutral-700 bg-neutral-800 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-neutral-200" />
              </div>
              <h3 className="font-mono text-sm font-bold uppercase text-white">
                Sub-Surface Anodic Seal
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Graphics and barcodes are sealed inside the anodic pores before electrochemical hydration, making them immune to acetone, thinner, diesel, and extreme outdoor weather.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-8 h-8 rounded-none border border-neutral-700 bg-neutral-800 flex items-center justify-center">
                <Barcode className="w-4 h-4 text-neutral-200" />
              </div>
              <h3 className="font-mono text-sm font-bold uppercase text-white">
                High-Density 1D & 2D Barcodes
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Supports Code 128, Code 39, 2D QR Code, and DataMatrix. High edge contrast ensures rapid scanning with standard handheld warehouse scanners or mobile cameras.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-8 h-8 rounded-none border border-neutral-700 bg-neutral-800 flex items-center justify-center">
                <Layers className="w-4 h-4 text-neutral-200" />
              </div>
              <h3 className="font-mono text-sm font-bold uppercase text-white">
                3M 468MP High-Bond Adhesive
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Factory backed with 3M 200MP pressure-sensitive acrylic adhesive. Adheres permanently to painted steel, aluminum casings, molded plastics, and powder-coated surfaces.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-8 h-8 rounded-none border border-neutral-700 bg-neutral-800 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-neutral-200" />
              </div>
              <h3 className="font-mono text-sm font-bold uppercase text-white">
                Mechanical Rivet Mounting
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Optional precision punched 3.2mm or 4.0mm mounting holes at tag edges for pop rivets or screws on vibrating motors, trailers, transformers, and industrial pumps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aluminium Surface & Mounting Specifications Grid */}
      <section className="py-16 bg-[#181818] text-white border-y-2 border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase tracking-tight text-white">
              ALUMINIUM FINISHES & MOUNTING OPTIONS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-sans">
              Select the surface treatment and fixing method that best suits your product, equipment, or packaging environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-8 h-8 rounded-full border-2 border-[#b48232] bg-[#3d270f] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-black" />
              </div>
              <h3 className="font-mono text-sm font-bold uppercase text-white">
                Satin Anodized Finish
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                A clean, low-glare aluminium surface for branded product tags, retail hardware, and premium packaging applications.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-8 h-8 rounded-full border-2 border-neutral-300 bg-neutral-800 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-black" />
              </div>
              <h3 className="font-mono text-sm font-bold uppercase text-white">
                Brushed Aluminium Finish
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Directional brushed texture that adds a tactile premium appearance while keeping logos and serial fields legible.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-8 h-8 border-b-2 border-amber-600 flex items-center justify-center">
                <div className="w-full h-1 bg-amber-700" />
              </div>
              <h3 className="font-mono text-sm font-bold uppercase text-white">
                3M 468MP Adhesive Backing
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                High-bond acrylic adhesive for smooth painted metal, plastic, glass, and carton surfaces without visible fasteners.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-8 h-8 border-b-2 border-neutral-400 flex items-center justify-center">
                <div className="w-full h-1 bg-neutral-200" />
              </div>
              <h3 className="font-mono text-sm font-bold uppercase text-white">
                Precision Rivet Holes
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Factory-punched holes for rivets, screws, bolts, or cable ties on vibrating equipment, fleet assets, and outdoor installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase tracking-tight text-neutral-950 mb-8 text-center">
          FREQUENTLY ASKED QUESTIONS — ALUMINIUM TAGS
        </h2>

        <div className="space-y-4">
          {tagFaqs.map((faq, i) => (
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
