import Image from 'next/image';
import React from 'react';

interface RealAluminiumTagPhotoProps {
  image?: 'range' | 'closeup';
  alt: string;
  label?: string;
  caption?: string;
  className?: string;
}

/** A reusable real-photo tile for aluminium tag product cards. */
export const RealAluminiumTagPhoto: React.FC<RealAluminiumTagPhotoProps> = ({
  image = 'range',
  alt,
  label = 'REFERENCE PHOTO',
  caption,
  className = '',
}) => {
  const isCloseup = image === 'closeup';
  const src = isCloseup
    ? '/images/aluminium-tag-brushed-closeup.jpg'
    : '/images/aluminium-tags-range.png';

  return (
    <figure className={`overflow-hidden border border-neutral-300 bg-neutral-100 ${className}`}>
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className={isCloseup ? 'object-cover' : 'object-contain'}
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
