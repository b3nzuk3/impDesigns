export const SITE_NAME = 'Impact Creative Designs';
export const SITE_PHONE_DISPLAY = '0722404647';
export const SITE_PHONE_E164 = '+254722404647';
export const SITE_EMAIL = 'impactcreativedesigns@gmail.com';
export const SITE_WHATSAPP_URL = `https://wa.me/${SITE_PHONE_E164.replace('+', '')}`;

export const SITE_ADDRESS_DISPLAY = 'Kai Plaza, 6 Tom Mboya St, Nairobi, Kenya';
export const SITE_POSTAL_ADDRESS = {
  streetAddress: 'Kai Plaza, 6 Tom Mboya St',
  addressLocality: 'Nairobi',
  addressRegion: 'Nairobi County',
  addressCountry: 'KE',
} as const;

export const SITE_GEO = {
  latitude: -1.2847,
  longitude: 36.8248,
} as const;

export const SITE_OPENING_HOURS = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:30',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday'],
    opens: '09:00',
    closes: '13:00',
  },
] as const;

export const SITE_HOURS_DISPLAY =
  'Mon – Fri: 8:00 AM – 5:30 PM; Sat: 9:00 AM – 1:00 PM EAT';

export function siteWhatsAppLink(message?: string) {
  return message
    ? `${SITE_WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : SITE_WHATSAPP_URL;
}
