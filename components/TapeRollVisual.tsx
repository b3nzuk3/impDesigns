'use client';

import React from 'react';

interface TapeRollVisualProps {
  color?: 'white' | 'red' | 'green' | 'black' | 'kraft' | 'warning';
  brandText?: string;
  coreText?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero';
  angle?: number;
  unrolledTail?: boolean;
  unrollLength?: 'short' | 'medium' | 'long';
  className?: string;
}

export const TapeRollVisual: React.FC<TapeRollVisualProps> = ({
  color = 'white',
  brandText = 'IMPACT CREATIVE DESIGNS • NAIROBI • CUSTOM BRANDED TAPE •',
  coreText,
  size = 'md',
  angle = 12,
  unrolledTail = true,
  unrollLength = 'medium',
  className = '',
}) => {
  // Color specifications for the tape material
  const colors = {
    white: {
      outer: '#f3f4f6',
      rim: '#e5e7eb',
      highlight: '#ffffff',
      shadow: '#9ca3af',
      ink: '#111827',
      tailBg: '#ffffff',
      tailText: '#111827',
      tailBorder: '#e5e7eb',
    },
    red: {
      outer: '#ea580c',
      rim: '#c2410c',
      highlight: '#f97316',
      shadow: '#7c2d12',
      ink: '#ffffff',
      tailBg: '#ea580c',
      tailText: '#ffffff',
      tailBorder: '#c2410c',
    },
    green: {
      outer: '#15803d',
      rim: '#166534',
      highlight: '#22c55e',
      shadow: '#14532d',
      ink: '#ffffff',
      tailBg: '#15803d',
      tailText: '#ffffff',
      tailBorder: '#166534',
    },
    black: {
      outer: '#1a1a1a',
      rim: '#0a0a0a',
      highlight: '#333333',
      shadow: '#000000',
      ink: '#f5f5f5',
      tailBg: '#18181b',
      tailText: '#f5f5f5',
      tailBorder: '#27272a',
    },
    kraft: {
      outer: '#c59e6c',
      rim: '#ab8350',
      highlight: '#d8b586',
      shadow: '#886234',
      ink: '#2b1b0e',
      tailBg: '#c59e6c',
      tailText: '#2b1b0e',
      tailBorder: '#ab8350',
    },
    warning: {
      outer: '#f59e0b',
      rim: '#d97706',
      highlight: '#fef08a',
      shadow: '#92400e',
      ink: '#000000',
      tailBg: '#eab308',
      tailText: '#000000',
      tailBorder: '#ca8a04',
    },
  }[color];

  const dimensions = {
    xs: { w: 96, h: 80, coreRadius: 22 },
    sm: { w: 120, h: 100, coreRadius: 28 },
    md: { w: 180, h: 150, coreRadius: 42 },
    lg: { w: 240, h: 200, coreRadius: 56 },
    hero: { w: 290, h: 240, coreRadius: 68 },
  }[size];

  const tailWidths = {
    short: 'w-48',
    medium: 'w-72 md:w-96',
    long: 'w-96 md:w-[500px]',
  }[unrollLength];

  return (
    <div
      className={`relative inline-block select-none ${className}`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      {/* 3D Isometric SVG Tape Roll */}
      <div className="relative z-20 drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)]">
        <svg
          width={dimensions.w}
          height={dimensions.h}
          viewBox="0 0 240 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* Ambient Ground Shadow */}
          <ellipse cx="120" cy="180" rx="90" ry="18" fill="rgba(0,0,0,0.22)" filter="blur(6px)" />

          {/* Outer Cylinder Body */}
          <path
            d="M 20 70 L 20 120 C 20 155, 220 155, 220 120 L 220 70 C 220 105, 20 105, 20 70 Z"
            fill={colors.rim}
          />
          {/* Subtle horizontal wound lines indicating multiple layers of tape */}
          <path
            d="M 20 85 C 20 120, 220 120, 220 85"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 20 102 C 20 137, 220 137, 220 102"
            stroke="rgba(0,0,0,0.18)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Top Ellipse - Main Face of the Tape Roll */}
          <ellipse cx="120" cy="70" rx="100" ry="40" fill={colors.outer} stroke={colors.highlight} strokeWidth="2" />

          {/* Concentric Wound Tape Bands */}
          <ellipse
            cx="120"
            cy="70"
            rx="86"
            ry="34"
            fill="none"
            stroke="rgba(0,0,0,0.12)"
            strokeWidth="2"
            strokeDasharray="4 2"
          />
          <ellipse
            cx="120"
            cy="70"
            rx="72"
            ry="28"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />

          {/* Inner Cardboard Core (Brown Fluted Recycled Tube) */}
          <ellipse cx="120" cy="70" rx="52" ry="20" fill="#a47844" stroke="#6d4b24" strokeWidth="3" />
          {/* Inside core hollow depth */}
          <ellipse cx="120" cy="74" rx="46" ry="17" fill="#422c16" />
          <ellipse cx="120" cy="76" rx="42" ry="15" fill="#24170a" />

          {/* Inner Core Stamp Mark */}
          <text
            x="120"
            y="73"
            fill="#d2b48c"
            fontSize="7"
            fontFamily="monospace"
            textAnchor="middle"
            fontWeight="bold"
            letterSpacing="1"
            opacity="0.85"
          >
            {coreText || 'IMPACT • 48MM × 100M'}
          </text>

          {/* Outer Surface Highlights & Sheen */}
          <path
            d="M 30 65 C 50 85, 190 85, 210 65"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Unrolled Printed Tape Tail physically extending out from the roll */}
      {unrolledTail && (
        <div
          className={`absolute top-1/2 -right-16 md:-right-36 ${tailWidths} -translate-y-2 z-10`}
          style={{
            transform: 'rotate(-4deg)',
          }}
        >
          <div
            className="relative py-2.5 px-4 font-mono text-xs font-bold tracking-[0.2em] uppercase shadow-[0_12px_24px_rgba(0,0,0,0.18)] tape-serrated-edge-right"
            style={{
              backgroundColor: colors.tailBg,
              color: colors.tailText,
              borderTop: `1px solid ${colors.tailBorder}`,
              borderBottom: `1px solid ${colors.tailBorder}`,
            }}
          >
            <div className="tape-sheen absolute inset-0 pointer-events-none" />
            <div className="overflow-hidden whitespace-nowrap">
              <span>{brandText}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
