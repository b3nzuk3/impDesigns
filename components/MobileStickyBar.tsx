'use client';

import React, { useState } from 'react';
import { MessageCircle, FileText } from 'lucide-react';
import { QuoteModal } from './QuoteModal';
import { SITE_NAME, siteWhatsAppLink } from '@/lib/site-contact';

const MOBILE_WHATSAPP_URL = siteWhatsAppLink(
  `Hello ${SITE_NAME}, I would like a quote for custom branded tapes or tags.`,
);

export const MobileStickyBar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-neutral-950 border-t-2 border-neutral-800 p-3 shadow-2xl flex items-center gap-2">
        <a
          href={MOBILE_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-black font-mono font-bold text-xs uppercase py-3 px-6 shadow-sm select-none"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-600 text-white font-mono font-bold text-xs uppercase py-3 px-6 shadow-sm select-none"
        >
          <FileText className="w-4 h-4" />
          <span>Get Quote</span>
        </button>
      </div>

      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
