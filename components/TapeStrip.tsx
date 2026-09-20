'use client';

import React from 'react';

interface TapeStripProps {
  text?: string;
  variant?: 'black' | 'red' | 'green' | 'kraft' | 'white' | 'warning';
  className?: string;
  angle?: number;
  width?: string;
  serrated?: 'none' | 'left' | 'right' | 'both';
  sheen?: boolean;
  shadow?: boolean;
  compact?: boolean;
}

export const TapeStrip: React.FC<TapeStripProps> = ({
  text = 'IMPACT DESIGNS • CUSTOM BRANDED TAPES • NAIROBI, KENYA • SEAL EVERY PACKAGE •',
  variant = 'black',
  className = '',
  angle = 0,
  width = 'w-full',
  serrated = 'none',
  sheen = true,
  shadow = true,
  compact = false,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'red':
        return 'bg-[#b91c1c] text-white border-y border-[#991b1b]';
      case 'green':
        return 'bg-[#15803d] text-white border-y border-[#166534]';
      case 'kraft':
        return 'bg-[#c29b68] text-[#2c1d0b] border-y border-[#a87f4c] font-semibold';
      case 'white':
        return 'bg-[#f4f4f4] text-[#111111] border-y border-[#dddddd] shadow-sm';
      case 'warning':
        return 'bg-[#d97706] text-white border-y border-[#b45309]';
      case 'black':
      default:
        return 'bg-[#171717] text-[#f5f5f5] border-y border-[#2a2a2a]';
    }
  };

  const getSerratedClass = () => {
    switch (serrated) {
      case 'left':
        return 'tape-serrated-edge-left';
      case 'right':
        return 'tape-serrated-edge-right';
      case 'both':
        return 'tape-serrated-edge-both';
      default:
        return '';
    }
  };

  const py = compact ? 'py-1.5' : 'py-2.5';
  const fontSize = compact ? 'text-xs' : 'text-xs sm:text-sm';

  return (
    <div
      style={{
        transform: angle !== 0 ? `rotate(${angle}deg)` : undefined,
      }}
      className={`relative select-none overflow-hidden ${width} ${getVariantStyles()} ${getSerratedClass()} ${
        shadow ? 'shadow-[0_4px_12px_rgba(0,0,0,0.12)]' : ''
      } ${className}`}
    >
      {/* High-gloss packaging tape sheen reflection */}
      {sheen && <div className="tape-sheen absolute inset-0 pointer-events-none" />}

      {/* Repeating printed brand copy */}
      <div className={`flex items-center tracking-[0.14em] font-mono uppercase whitespace-nowrap font-bold ${py} ${fontSize}`}>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
      </div>
    </div>
  );
};
