import { SITE_NAME, siteWhatsAppLink } from './site-contact';
export interface EnquiryDetails {
  product: string; quantity: string; requirements: string; businessName: string;
  contactName: string; phone: string; email: string; town: string;
}
export function buildEnquiryMessage(details: EnquiryDetails) {
  return [`Hello ${SITE_NAME}, I would like a quotation.`, '',
    `Product / service: ${details.product}`, `Quantity: ${details.quantity || 'To discuss'}`,
    `Requirements: ${details.requirements || 'To discuss'}`, '',
    `Business: ${details.businessName || 'Not provided'}`, `Contact: ${details.contactName || 'Not provided'}`,
    `Phone / WhatsApp: ${details.phone || 'Not provided'}`, `Email: ${details.email || 'Not provided'}`,
    `Delivery town: ${details.town || 'To discuss'}`, '',
    'Please confirm availability, artwork requirements, minimum quantity, lead time and the final quotation.',
  ].join('\n');
}
export function enquiryWhatsAppUrl(details: EnquiryDetails) { return siteWhatsAppLink(buildEnquiryMessage(details)); }
