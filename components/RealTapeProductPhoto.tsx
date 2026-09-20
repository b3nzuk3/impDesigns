import Image from 'next/image';
import React from 'react';

interface RealTapeProductPhotoProps {
  image?: 'rolls' | 'application';
  alt: string;
  label: string;
  caption?: string;
  className?: string;
  aspect?: string;
}

/** A compact, static product-photo tile for product and portfolio cards. */
export const RealTapeProductPhoto: React.FC<RealTapeProductPhotoProps> = ({
  image = 'rolls',
  alt,
  label,
  caption,
  className = '',
  aspect = 'aspect-[16/9]',
}) => {
  const src = image === 'application'
    ? '/images/branded-tape-application.jpg'
    : '/images/branded-tape-rolls.jpg';

  return (
    <figure className={`overflow-hidden border border-neutral-300 bg-neutral-100 ${className}`}>
      <div className={`relative ${aspect}`}>
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <span className="absolute left-2 top-2 bg-neutral-950/90 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white">
          {label}
        </span>
      </div>
      {caption && (
        <figcaption className="border-t border-neutral-300 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-neutral-600">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
