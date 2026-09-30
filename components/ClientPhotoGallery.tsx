'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import type { ClientPhoto } from '@/lib/client-photos';

interface ClientPhotoGalleryProps {
  photos: ClientPhoto[];
  className?: string;
  imageClassName?: string;
  aspectClassName?: string;
}

const formatCaption = (format: ClientPhoto['format']) =>
  format === 'photograph' ? 'Photograph' : 'Promotional artwork';

/** Shared grid and native-dialog viewer for client production examples. */
export const ClientPhotoGallery: React.FC<ClientPhotoGalleryProps> = ({
  photos,
  className = '',
  imageClassName = 'object-contain',
  aspectClassName = 'aspect-[4/3]',
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const previousOverflowRef = useRef('');

  const closeViewer = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    setSelectedIndex(null);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedIndex === null || !dialog) return;

    if (!dialog.open) dialog.showModal();
    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflowRef.current;
    };
  }, [selectedIndex]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      document.body.style.overflow = previousOverflowRef.current;
      setSelectedIndex(null);
      triggerRef.current?.focus();
    };
    const handleCancel = (event: Event) => {
      event.preventDefault();
      closeViewer();
    };

    dialog.addEventListener('close', handleClose);
    dialog.addEventListener('cancel', handleCancel);
    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('cancel', handleCancel);
    };
  });

  const selectedPhoto = selectedIndex === null ? null : photos[selectedIndex];

  return (
    <>
      <div className={`grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4 ${className}`}>
        {photos.map((photo, index) => {
          return (
            <figure key={photo.id} className="group relative overflow-hidden border border-neutral-300 bg-neutral-100">
              <button
                type="button"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setSelectedIndex(index);
                }}
                className={`relative block w-full cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500 ${aspectClassName}`}
                aria-label={`View full-size: ${photo.label}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className={`${photo.format === 'promotional artwork' ? 'object-contain' : imageClassName} p-2`}
                />
              </button>
              <figcaption className="border-t border-neutral-200 bg-white p-3 text-left">
                <span className="block font-mono text-sm font-bold uppercase leading-snug text-neutral-950">{photo.label}</span>
                <span className="mt-1 block text-xs leading-relaxed text-neutral-600">{formatCaption(photo.format)} · Tap to enlarge</span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={selectedPhoto ? `Full-size view: ${selectedPhoto.label}` : 'Full-size photo viewer'}
        className="m-auto max-h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] bg-transparent p-0 backdrop:bg-neutral-950/85"
      >
        {selectedPhoto && (
          <div className="relative flex max-h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] flex-col items-center bg-white p-3 shadow-2xl sm:p-5">
            <button
              type="button"
              onClick={closeViewer}
              className="absolute right-2 top-2 z-10 min-h-11 min-w-11 border-2 border-neutral-950 bg-white px-3 font-mono text-xs font-bold uppercase text-neutral-950 shadow-[3px_3px_0px_#111] hover:bg-orange-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500"
              aria-label="Close full-size photo viewer"
            >
              Close
            </button>
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width}
              height={selectedPhoto.height}
              className="max-h-[calc(100vh-8rem)] w-auto max-w-full object-contain"
              priority
            />
            <p className="mt-3 max-w-3xl text-center font-mono text-xs text-neutral-700">
              <span className="font-bold uppercase">{selectedPhoto.label}</span> · {formatCaption(selectedPhoto.format)} · {selectedPhoto.alt}
            </p>
            <p className="sr-only">Press Escape to close the full-size photo viewer.</p>
          </div>
        )}
      </dialog>
    </>
  );
};
