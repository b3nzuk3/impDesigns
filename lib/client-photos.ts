import { MEDIA_BASE, tagPhoto, tapePhoto } from '@/lib/media';
import manifest from '@/lib/client-photo-manifest.json';

export type ClientPhotoCategory = 'tape' | 'tag';
export type ClientPhotoFormat = 'photograph' | 'promotional artwork';

export interface ClientPhoto {
  id: string;
  category: ClientPhotoCategory;
  src: string;
  width: number;
  height: number;
  label: string;
  alt: string;
  format: ClientPhotoFormat;
  legacy?: boolean;
}

type ManifestPhoto = (typeof manifest)[number];

const manifestPhotos: ClientPhoto[] = (manifest as ManifestPhoto[]).map((photo) => ({
  id: photo.key,
  category: photo.category as ClientPhotoCategory,
  src: `${MEDIA_BASE}/${photo.key}`,
  width: photo.width,
  height: photo.height,
  label: photo.label,
  alt: photo.alt,
  format: photo.format as ClientPhotoFormat,
}));

/** The 25 supplied examples, kept in manifest order for stable gallery rendering. */
export const CLIENT_PHOTOS = manifestPhotos;

export const tapeClientPhotos = CLIENT_PHOTOS.filter((photo) => photo.category === 'tape');
export const tagClientPhotos = CLIENT_PHOTOS.filter((photo) => photo.category === 'tag');

export const legacyTapePhotos: ClientPhoto[] = [
  { id: 'legacy-tape-16', category: 'tape', src: tapePhoto(16), width: 1600, height: 1200, alt: 'Wide display of multiple branded packing tape rolls produced for Kenyan companies', label: 'PRODUCTION FLOOR', format: 'photograph', legacy: true },
  { id: 'legacy-tape-17', category: 'tape', src: tapePhoto(17), width: 1394, height: 1600, alt: 'Carton sealed with custom branded tape printed for Adhi Pharmacy Limited', label: 'ADHI PHARMACY', format: 'photograph', legacy: true },
  { id: 'legacy-tape-01', category: 'tape', src: tapePhoto(1), width: 596, height: 536, alt: 'Branded tape rolls printed for Cameron, Eyesupply, Sharp Prints, Safe Fuel Systems and other clients', label: 'MULTI-CLIENT RUN', format: 'photograph', legacy: true },
  { id: 'legacy-tape-10', category: 'tape', src: tapePhoto(10), width: 433, height: 576, alt: 'Branded tape rolls for Aberdair Aviation, NICCO Movers, MTAPAI and S/R Coach Sacco', label: 'LOGISTICS & AVIATION', format: 'photograph', legacy: true },
  { id: 'legacy-tape-11', category: 'tape', src: tapePhoto(11), width: 433, height: 576, alt: 'Event branded tape printed for Kitui Green Run — Run for Rain campaign', label: 'KITUI GREEN RUN', format: 'photograph', legacy: true },
  { id: 'legacy-tape-21', category: 'tape', src: tapePhoto(21), width: 666, height: 375, alt: 'Assorted printed tape rolls stacked on a shipping carton at the production facility', label: 'ROLL LIBRARY', format: 'photograph', legacy: true },
];

export const legacyTagPhotos: ClientPhoto[] = [
  { id: 'legacy-tag-16', category: 'tag', src: tagPhoto(16), width: 900, height: 1600, alt: 'Grid of barcode asset tags produced for Kenya Pipeline, Cape Media and other organisations', label: 'MULTI-CLIENT RUN', format: 'photograph', legacy: true },
  { id: 'legacy-tag-15', category: 'tag', src: tagPhoto(15), width: 900, height: 1600, alt: 'Serialised QR asset tags produced for Pumwani Maternity and Referral Hospital', label: 'PUMWANI HOSPITAL', format: 'photograph', legacy: true },
  { id: 'legacy-tag-01', category: 'tag', src: tagPhoto(1), width: 1600, height: 620, alt: 'Brushed aluminium property tag with barcode produced for MUA', label: 'MUA', format: 'photograph', legacy: true },
  { id: 'legacy-tag-28', category: 'tag', src: tagPhoto(28), width: 1600, height: 1158, alt: 'Anodized aluminium membership tags produced for The Mombasa Club, established 1897', label: 'MOMBASA CLUB', format: 'photograph', legacy: true },
  { id: 'legacy-tag-30', category: 'tag', src: tagPhoto(30), width: 1600, height: 790, alt: 'Brushed metal asset tag with barcode produced for KCB Foundation', label: 'KCB FOUNDATION', format: 'photograph', legacy: true },
  { id: 'legacy-tag-06', category: 'tag', src: tagPhoto(6), width: 1600, height: 855, alt: 'Metal asset tag with barcode produced for Equity Bank', label: 'EQUITY', format: 'photograph', legacy: true },
  { id: 'legacy-tag-32', category: 'tag', src: tagPhoto(32), width: 1600, height: 462, alt: "Official asset tag with Kenyan coat of arms for the State Department for Science, Research and Innovation", label: "GOV'T OF KENYA", format: 'photograph', legacy: true },
];
