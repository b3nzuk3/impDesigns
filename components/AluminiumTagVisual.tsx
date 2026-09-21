'use client';

import React from 'react';

export interface AluminiumTagProps {
  companyName: string;
  companySubtitle?: string;
  subtitle?: string;
  propertyOfText?: string;
  serialNumber: string;
  barcodeType?: 'code128' | 'code39' | 'datamatrix' | string;
  thickness?: '0.5mm' | '0.8mm' | string;
  logoType?: 'crest' | 'shield' | 'tech' | 'bank' | 'cargo' | 'energy' | 'rail' | 'health';
  logoColor?: string;
  logoAccent?: string;
  size?: 'sm' | 'md' | 'lg';
  mountingHoles?: boolean;
  className?: string;
}

export const AluminiumTagVisual: React.FC<AluminiumTagProps> = ({
  companyName,
  companySubtitle,
  subtitle,
  propertyOfText,
  serialNumber,
  barcodeType = 'code128',
  thickness = '0.8mm',
  logoType = 'shield',
  logoColor = '#ea580c',
  logoAccent = '#1e3a8a',
  size = 'md',
  mountingHoles = false,
  className = '',
}) => {
  const displaySubtitle = companySubtitle || subtitle;
  // Sizing scales
  const sizeStyles = {
    sm: {
      wrapper: 'w-52 h-20 text-[10px] p-2.5',
      logoBox: 'w-20',
      barcodeHeight: 'h-8',
      serialText: 'text-[9px] font-bold tracking-wider',
      propText: 'text-[6px]',
      holeSize: 'w-2 h-2',
    },
    md: {
      wrapper: 'w-64 sm:w-72 h-24 text-xs p-3',
      logoBox: 'w-24 sm:w-28',
      barcodeHeight: 'h-10',
      serialText: 'text-[11px] font-bold tracking-wider',
      propText: 'text-[7px]',
      holeSize: 'w-2.5 h-2.5',
    },
    lg: {
      wrapper: 'w-80 sm:w-96 h-32 text-sm p-4',
      logoBox: 'w-32 sm:w-40',
      barcodeHeight: 'h-14',
      serialText: 'text-sm font-bold tracking-widest',
      propText: 'text-[8px]',
      holeSize: 'w-3.5 h-3.5',
    },
  }[size];

  // Procedural barcode bars pattern (deterministic based on serialNumber)
  const getBarcodeBars = () => {
    // Generate realistic Code 128 style varying bar widths
    const charCodes = serialNumber.split('').map((c) => c.charCodeAt(0));
    const bars: { width: number; space: number }[] = [];
    
    // Start guard
    bars.push({ width: 2, space: 1 });
    bars.push({ width: 1, space: 2 });
    
    charCodes.forEach((code, idx) => {
      const w1 = (code % 3) + 1;
      const s1 = ((code >> 1) % 2) + 1;
      const w2 = ((code >> 2) % 3) + 1;
      const s2 = ((code >> 3) % 2) + 1;
      bars.push({ width: w1, space: s1 });
      if (idx % 2 === 0) bars.push({ width: w2, space: s2 });
    });

    // Stop guard
    bars.push({ width: 2, space: 1 });
    bars.push({ width: 3, space: 1 });
    bars.push({ width: 1, space: 0 });

    return bars;
  };

  const barcodeBars = getBarcodeBars();

  // Corporate logo renderings (distinctive, non-infringing Kenyan enterprise identities)
  const renderLogo = () => {
    switch (logoType) {
      case 'crest':
        return (
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 32 32" className="w-7 h-7 shrink-0 drop-shadow-xs" fill="none">
              <rect x="2" y="2" width="28" height="28" rx="4" fill={logoColor} />
              <path d="M16 6 L24 12 L24 22 L16 26 L8 22 L8 12 Z" fill="#ffffff" />
              <circle cx="16" cy="16" r="4" fill={logoAccent} />
            </svg>
            <div className="leading-tight overflow-hidden">
              <div className="font-black font-mono tracking-tight uppercase text-neutral-900 truncate">
                {companyName}
              </div>
              {displaySubtitle && (
                <div className="text-[7px] font-mono text-neutral-600 uppercase tracking-tighter truncate">
                  {displaySubtitle}
                </div>
              )}
            </div>
          </div>
        );

      case 'bank':
        return (
          <div className="space-y-0.5">
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 36 20" className="w-8 h-4 shrink-0" fill="none">
                <path d="M2 12 L18 2 L34 12 Z" fill={logoColor} />
                <rect x="4" y="14" width="28" height="3" fill={logoColor} />
              </svg>
            </div>
            <div className="font-black font-mono tracking-tighter uppercase text-neutral-900 leading-none">
              {companyName}
            </div>
            {displaySubtitle && (
              <div className="text-[6.5px] font-mono text-neutral-600 uppercase tracking-tighter truncate">
                {displaySubtitle}
              </div>
            )}
          </div>
        );

      case 'tech':
        return (
          <div className="flex flex-col items-start leading-none">
            <div className="flex items-center gap-1 mb-0.5">
              <svg viewBox="0 0 28 20" className="w-7 h-5 shrink-0" fill="none">
                <circle cx="14" cy="5" r="3" fill={logoColor} />
                <circle cx="6" cy="10" r="2.5" fill={logoColor} />
                <circle cx="22" cy="10" r="2.5" fill={logoColor} />
                <circle cx="9" cy="17" r="2" fill={logoColor} />
                <circle cx="19" cy="17" r="2" fill={logoColor} />
              </svg>
            </div>
            <div className="font-black font-sans tracking-tight uppercase text-neutral-900">
              {companyName}
            </div>
            {displaySubtitle && (
              <div className="text-[6.5px] font-mono text-neutral-600 uppercase">
                {displaySubtitle}
              </div>
            )}
          </div>
        );

      case 'cargo':
        return (
          <div className="space-y-0.5">
            <div className="flex items-center gap-1">
              <div
                className="w-4 h-4 rounded-xs flex items-center justify-center font-black text-white text-[8px]"
                style={{ backgroundColor: logoColor }}
              >
                ▲
              </div>
              <span className="font-black font-mono tracking-tight uppercase text-neutral-900 leading-tight">
                {companyName}
              </span>
            </div>
            {displaySubtitle && (
              <div className="text-[6.5px] font-mono text-neutral-600 uppercase tracking-tight">
                {displaySubtitle}
              </div>
            )}
          </div>
        );

      case 'rail':
        return (
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 32 24" className="w-7 h-5 shrink-0" fill="none">
                <path d="M4 18 L12 4 L24 4 C28 4 28 12 22 14 L28 20 L20 20 L16 14 L10 14 L8 18 Z" fill={logoColor} />
                <path d="M12 7 L17 7 C19 7 19 11 17 11 L10 11 Z" fill="#ffffff" />
              </svg>
              <div className="font-black font-mono text-[9px] tracking-tight uppercase text-neutral-900 leading-tight">
                {companyName}
              </div>
            </div>
            {displaySubtitle && (
              <div className="text-[6.5px] font-mono text-neutral-600 uppercase">
                {displaySubtitle}
              </div>
            )}
          </div>
        );

      case 'energy':
        return (
          <div className="space-y-0.5">
            <div className="flex items-center gap-1">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center font-black text-white text-[9px]"
                style={{ backgroundColor: logoColor }}
              >
                ⚡
              </div>
              <div className="font-black font-mono tracking-tight uppercase text-neutral-900 leading-tight">
                {companyName}
              </div>
            </div>
            {displaySubtitle && (
              <div className="text-[6.5px] font-mono text-neutral-600 uppercase truncate">
                {displaySubtitle}
              </div>
            )}
          </div>
        );

      case 'health':
        return (
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5">
              <div
                className="w-5 h-5 rounded-sm flex items-center justify-center font-black text-white text-[10px]"
                style={{ backgroundColor: logoColor }}
              >
                +
              </div>
              <div className="font-black font-mono tracking-tight uppercase text-neutral-900 leading-tight">
                {companyName}
              </div>
            </div>
            {displaySubtitle && (
              <div className="text-[6.5px] font-mono text-neutral-600 uppercase truncate">
                {displaySubtitle}
              </div>
            )}
          </div>
        );

      case 'shield':
      default:
        return (
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center font-black text-white text-[8px] shadow-xs"
                style={{ backgroundColor: logoColor }}
              >
                {companyName.slice(0, 3).toUpperCase()}
              </div>
              <div className="font-black font-mono tracking-tight uppercase text-neutral-900 leading-tight">
                {companyName}
              </div>
            </div>
            {displaySubtitle && (
              <div className="text-[6.5px] font-mono text-neutral-600 uppercase truncate">
                {displaySubtitle}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div
      className={`relative inline-flex flex-col justify-between select-none rounded-xs ${sizeStyles.wrapper} ${className}`}
      style={{
        // Realistic Anodized Brushed Aluminium Multi-Stop Gradient
        background:
          'linear-gradient(135deg, #f0f3f6 0%, #d8e0e8 15%, #eef2f6 30%, #c4cdd8 55%, #f4f7fa 75%, #b4c0cd 100%)',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.9), inset 1px 0 0 rgba(255,255,255,0.7), inset -1px -1px 0 rgba(0,0,0,0.25), 0 3px 6px rgba(0,0,0,0.35), 0 1px 2px rgba(0,0,0,0.2)',
        border: '1px solid #94a3b8',
      }}
    >
      {/* Brushed Aluminium Texture Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-xs opacity-25"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.06) 1px, rgba(0,0,0,0.06) 2px)',
        }}
      />

      {/* Surface Metallic Glare / Specular Sheen */}
      <div
        className="absolute inset-0 pointer-events-none rounded-xs opacity-40"
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.7) 48%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.3) 53%, transparent 60%)',
        }}
      />

      {/* Optional Machined Rivet Mounting Holes (Left and Right) */}
      {mountingHoles && (
        <>
          <div
            className={`absolute left-1.5 top-1/2 -translate-y-1/2 rounded-full border border-neutral-600 bg-neutral-800 shadow-inner ${sizeStyles.holeSize}`}
          />
          <div
            className={`absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full border border-neutral-600 bg-neutral-800 shadow-inner ${sizeStyles.holeSize}`}
          />
        </>
      )}

      {/* Top Property Header (If provided) */}
      {propertyOfText && (
        <div
          className={`relative z-10 font-mono font-bold tracking-wider text-neutral-800 uppercase ${sizeStyles.propText} border-b border-neutral-400/50 pb-0.5 mb-1 flex items-center justify-between`}
        >
          <span>{propertyOfText}</span>
          <span className="text-neutral-500 text-[6px]">ANODIZED AL</span>
        </div>
      )}

      {/* Main Tag Body: Left Corporate Logo | Right Barcode + Serial */}
      <div className="relative z-10 flex items-center justify-between gap-2 flex-1">
        {/* Left: Organization Branding */}
        <div className={`${sizeStyles.logoBox} shrink-0 pr-1 flex flex-col justify-center`}>
          {renderLogo()}
        </div>

        {/* Vertical Separator Hairline */}
        <div className="w-[1px] self-stretch bg-neutral-400/70" />

        {/* Right: Crisp Vector Barcode & Alphanumeric Asset Code */}
        <div className="flex-1 flex flex-col items-center justify-center pl-1">
          {/* Barcode Graphic */}
          <div
            className={`w-full flex items-end justify-center gap-[1px] bg-white/40 px-1 py-0.5 border border-neutral-400/40 shadow-xs ${sizeStyles.barcodeHeight}`}
          >
            {barcodeBars.map((bar, idx) => (
              <span
                key={idx}
                className="bg-neutral-950 inline-block h-full shrink-0"
                style={{
                  width: `${bar.width * 1.5}px`,
                  marginRight: `${bar.space * 1.2}px`,
                }}
              />
            ))}
          </div>

          {/* Human Readable Serial Number / Asset ID */}
          <div
            className={`font-mono text-neutral-950 text-center uppercase tracking-wider mt-1 ${sizeStyles.serialText}`}
          >
            {serialNumber}
          </div>
        </div>
      </div>
    </div>
  );
};
