'use client';

import React, { useState } from 'react';
import { TapeStrip } from '@/components/TapeStrip';
import { MessageCircle, MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import {
  SITE_ADDRESS_DISPLAY,
  SITE_EMAIL,
  SITE_HOURS_DISPLAY,
  SITE_NAME,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_E164,
  siteWhatsAppLink,
} from '@/lib/site-contact';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const selectedSamples = formData.getAll('samples').map(String);
    const requestMessage = [
      `Hello ${SITE_NAME}, I would like to ask about product samples.`,
      `Name: ${name}`,
      `Company: ${company}`,
      `Phone / WhatsApp: ${phone}`,
      `Delivery location: ${String(formData.get('location') || 'Not provided')}`,
      `Samples requested: ${selectedSamples.length ? selectedSamples.join(', ') : 'To discuss'}`,
      `Project details: ${message || 'Not provided'}`,
    ].join('\n');
    setWhatsappUrl(siteWhatsAppLink(requestMessage));
    setSubmitted(true);
  };

  return (
    <div className="bg-[#fbfaf7] text-neutral-900">
      <TapeStrip
        variant="black"
        text="IMPACT CREATIVE DESIGNS • NAIROBI KENYA • KAI PLAZA, TOM MBOYA STREET • DIRECT FACTORY CONTACT •"
        sheen={true}
        compact={true}
      />

      <section className="pt-12 pb-16 border-b-2 border-neutral-900">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight uppercase text-neutral-950 leading-tight">
              CONNECT WITH US
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 font-sans leading-relaxed">
              Ask about product sample options or reach our sales desk via WhatsApp. Contact the team before arranging a visit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Factory Info (Col 5) */}
          <div className="lg:col-span-5 space-y-8 bg-white border-2 border-neutral-900 p-8 shadow-[6px_6px_0px_#111111]">
            <div>
              <div className="font-mono text-xs font-bold text-orange-600 uppercase mb-1">
                MANUFACTURING FACILITY
              </div>
              <h2 className="text-2xl font-black font-mono uppercase text-neutral-950">
                {SITE_NAME}
              </h2>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-start gap-3 p-3 bg-neutral-50 border border-neutral-200">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-neutral-900 uppercase">FACTORY LOCATION</div>
                  <div className="text-neutral-600 mt-0.5">
                    {SITE_ADDRESS_DISPLAY}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-neutral-50 border border-neutral-200">
                <Phone className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-neutral-900 uppercase">TELEPHONE & WHATSAPP</div>
                  <div className="text-neutral-600 mt-0.5">
                    <a href={`tel:${SITE_PHONE_E164}`} className="underline decoration-neutral-400 hover:text-neutral-950">
                      {SITE_PHONE_DISPLAY} (WhatsApp &amp; Factory Sales Desk)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-neutral-50 border border-neutral-200">
                <Mail className="w-5 h-5 text-neutral-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-neutral-900 uppercase">EMAIL INQUIRIES</div>
                  <div className="text-neutral-600 mt-0.5">
                    <a className="underline decoration-neutral-400 hover:text-neutral-950" href={`mailto:${SITE_EMAIL}`}>
                      {SITE_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-neutral-50 border border-neutral-200">
                <Clock className="w-5 h-5 text-neutral-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-neutral-900 uppercase">OPERATING HOURS</div>
                  <div className="text-neutral-600 mt-0.5">
                    {SITE_HOURS_DISPLAY}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 bg-[#25D366]/10 border border-[#25D366] text-neutral-900 space-y-2">
              <div className="font-mono text-xs font-bold uppercase flex items-center gap-1.5 text-green-900">
                <MessageCircle className="w-4 h-4 fill-green-700 text-green-700" />
                <span>Fastest Response via WhatsApp</span>
              </div>
              <p className="text-xs font-sans text-neutral-700">
                Our prepress team can immediately check your vector logo resolution and send back visual previews on WhatsApp.
              </p>
              <a
                href={siteWhatsAppLink(`Hello ${SITE_NAME}, I would like to ask about sample availability or visit the Nairobi facility.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-black font-mono font-bold text-xs uppercase py-2.5 px-5 mt-2"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* Inquiry / Sample Pack Request Form (Col 7) */}
          <div className="lg:col-span-7 bg-white border-2 border-neutral-900 p-8 shadow-[6px_6px_0px_#111111]">
            <h2 className="text-2xl font-black font-mono uppercase text-neutral-950 mb-2">
              ASK ABOUT PRODUCT SAMPLES
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans mb-6">
              Sample availability is conditional. Ask about options and terms for your project; these are confirmed before any sample is prepared or dispatched.
            </p>

            {submitted ? (
              <div className="p-6 bg-green-50 border-2 border-green-800 text-green-900 space-y-3 font-mono">
                <div className="flex items-center gap-2 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  <span>YOUR SAMPLE INQUIRY IS READY</span>
                </div>
                <p className="text-xs font-sans text-green-800">
                  Thank you, {name || 'Client'}. Open WhatsApp to send this inquiry. Sample availability is conditional, and the team will confirm options and terms before any sample is prepared or dispatched.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] px-5 py-3 font-mono text-xs font-bold uppercase text-black"
                >
                  Review and send in WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold uppercase mb-1">Your Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Grace Wanjiku"
                      className="w-full px-3 py-2.5 border border-neutral-300 placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold uppercase mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Rift Valley Roasters"
                      className="w-full px-3 py-2.5 border border-neutral-300 placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold uppercase mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0722404647"
                      className="w-full px-3 py-2.5 border border-neutral-300 placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold uppercase mb-1">Delivery County / Town</label>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="e.g. Nairobi, Mombasa, Nakuru"
                      className="w-full px-3 py-2.5 border border-neutral-300 placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold uppercase mb-1">Sample Materials Desired</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 font-mono text-xs pt-1">
                    {[
                      '48mm BOPP Tape',
                      'Eco Kraft Tape',
                      '72mm Heavy Tape',
                      '0.5mm Aluminium Tags',
                      '0.8mm Heavy Aluminium Tags',
                      'Barcode Asset Tags',
                    ].map((item, idx) => (
                      <label key={idx} className="flex items-start gap-2 p-2 bg-neutral-50 border border-neutral-200 cursor-pointer leading-snug">
                        <input type="checkbox" name="samples" value={item} defaultChecked={idx < 4} className="accent-neutral-950" />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-bold uppercase mb-1">Additional Project Details</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your estimated roll counts or tag quantities..."
                    className="w-full px-3 py-2.5 border border-neutral-300 placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-neutral-950 hover:bg-neutral-800 text-white font-mono font-bold text-sm uppercase py-4 px-8 border-2 border-neutral-950 transition-colors shadow-[3px_3px_0px_#ea580c]"
                >
                  Request Sample Pack Dispatch
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
