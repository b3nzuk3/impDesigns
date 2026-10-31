'use client';
import { useState } from 'react';
import { catalogueCategories, catalogueProducts, resolveEnquiryProduct } from '@/lib/catalogue';
import { enquiryWhatsAppUrl, type EnquiryDetails } from '@/lib/enquiry';

export function GeneralEnquiryForm({ initialProduct = '' }: { initialProduct?: string }) {
  const selected = resolveEnquiryProduct(initialProduct);
  const [details, setDetails] = useState<EnquiryDetails>({ product: selected?.name || 'General printing and branding enquiry', quantity: '', requirements: '', businessName: '', contactName: '', phone: '', email: '', town: '' });
  const update = (key: keyof EnquiryDetails, value: string) => setDetails((current) => ({ ...current, [key]: value }));
  const identifier = [...catalogueProducts, ...catalogueCategories].find((item) => item.name === details.product)?.slug || 'general';
  return <section className="mx-auto max-w-[88rem] px-4 py-12 sm:px-6 lg:px-8" id="general-enquiry">
    <h2 className="text-3xl font-black font-mono uppercase">Tell us about your project</h2>
    <p className="mt-4 max-w-2xl text-neutral-700 leading-relaxed">Prepare an enquiry for any product or service. Availability, options, minimum quantities and lead times need confirmation. No message is sent by this website: review and send it yourself in WhatsApp.</p>
    <form onSubmit={(event) => { event.preventDefault(); window.open(enquiryWhatsAppUrl(details), '_blank', 'noopener,noreferrer'); document.dispatchEvent(new CustomEvent('impact:whatsapp', { detail: { product: identifier } })); }} className="mt-8 grid gap-6 border-2 border-neutral-900 bg-white p-5 sm:grid-cols-2 sm:p-8">
      <label className="space-y-2 font-bold sm:col-span-2"><span>Product or service</span><select className="block w-full border border-neutral-400 bg-white p-3 font-normal" value={details.product} onChange={(event) => update('product', event.target.value)}><option>General printing and branding enquiry</option>{catalogueCategories.map((category) => <optgroup key={category.slug} label={category.name}><option value={category.name}>{category.name} — general enquiry</option>{catalogueProducts.filter((p) => p.categorySlug === category.slug).map((product) => <option key={product.slug} value={product.name}>{product.name}{product.status === 'draft' ? ' — enquire about availability' : ''}</option>)}</optgroup>)}</select></label>
      {([['quantity', 'Quantity', 'text'], ['businessName', 'Business / brand name', 'text'], ['contactName', 'Contact name', 'text'], ['phone', 'Phone / WhatsApp number', 'tel'], ['email', 'Email (optional)', 'email'], ['town', 'Delivery town', 'text']] as const).map(([key, label, type]) => <label key={key} className="space-y-2 font-bold"><span>{label}</span><input type={type} required={key === 'contactName' || key === 'phone' || key === 'town'} value={details[key]} onChange={(event) => update(key, event.target.value)} maxLength={200} className="block w-full border border-neutral-400 p-3 font-normal" /></label>)}
      <label className="space-y-2 font-bold sm:col-span-2"><span>Project requirements</span><textarea required value={details.requirements} onChange={(event) => update('requirements', event.target.value)} rows={4} maxLength={3000} className="block w-full border border-neutral-400 p-3 font-normal" placeholder="Dimensions, branding, finish, artwork and when you need it" /></label>
      <div className="sm:col-span-2"><button type="submit" className="bg-[#25D366] px-6 py-4 font-bold text-black">Continue on WhatsApp</button><p className="mt-3 text-sm text-neutral-700">WhatsApp opens with your prepared message. You still need to press Send there.</p></div>
    </form>
  </section>;
}
