const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.APP_URL ||
  'https://www.impactcreativedesigns.co.ke';

export const SITE_URL = configuredSiteUrl.replace(/\/+$/, '');

export {
  SITE_ADDRESS_DISPLAY,
  SITE_EMAIL,
  SITE_GEO,
  SITE_HOURS_DISPLAY,
  SITE_NAME,
  SITE_OPENING_HOURS,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_E164,
  SITE_POSTAL_ADDRESS,
  SITE_WHATSAPP_URL,
  siteWhatsAppLink,
} from './site-contact';

export function absoluteUrl(path = '/') {
  return new URL(path, `${SITE_URL}/`).toString();
}
