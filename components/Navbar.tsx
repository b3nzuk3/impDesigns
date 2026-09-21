'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { QuoteModal } from './QuoteModal';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Branded Tapes', href: '/branded-tapes' },
    { name: 'Aluminium Tags', href: '/custom-tags' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Quote Calculator', href: '/quote' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#fbfaf7]/95 backdrop-blur-md border-b-2 border-neutral-900 transition-colors">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Brand Title / Wordmark — unified enclosed logo lockup */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 group select-none bg-white border border-neutral-900 pl-2 pr-3 py-2 sm:pl-2.5 sm:pr-4 shadow-[2px_2px_0px_#ea580c]"
              id="brand-logo"
            >
              {/* Impact Creative Designs logo mark */}
              <div className="w-11 h-9 shrink-0 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/impact-designs-logo.png"
                  alt="Impact Creative Designs logo mark"
                  width={1451}
                  height={1084}
                  priority
                  sizes="44px"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-lg sm:text-xl font-black tracking-tighter text-neutral-900 leading-none whitespace-nowrap">
                  IMPACT CREATIVE DESIGNS
                </span>
                <span className="font-mono text-xs sm:text-[10px] tracking-[0.1em] text-neutral-700 uppercase leading-tight mt-0.5">
                  BRANDED TAPES & TAGS • KENYA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-[13px] lg:text-sm font-mono uppercase tracking-wide transition-colors ${
                      isActive
                        ? 'text-neutral-950 font-bold border-b-2 border-orange-500'
                        : 'text-neutral-600 hover:text-neutral-950 font-medium'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wa.me/254722404647?text=Hello%20Impact%20Creative%20Designs%20Kenya,%20I%20would%20like%20to%20inquire%20about%20custom%20branded%20tapes%20and%20tags."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-mono font-bold text-neutral-800 hover:text-green-700 transition-colors"
                title="Direct WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4 text-green-600 fill-green-600" />
                <span className="hidden lg:inline">0722404647</span>
              </a>

              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center justify-center bg-neutral-900 hover:bg-orange-600 text-white font-mono text-sm font-bold uppercase tracking-wide py-3 px-6 border-2 border-neutral-900 transition-all shadow-[2px_2px_0px_#111111]"
              >
                <span>GET A QUOTE</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="bg-neutral-900 text-white font-mono text-xs font-bold uppercase py-2 px-3"
              >
                QUOTE
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-900 hover:bg-neutral-200 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-neutral-900 bg-[#fbfaf7] p-6 space-y-4">
            <nav className="flex flex-col space-y-3 font-mono text-sm uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-neutral-200 flex items-center justify-between text-neutral-900 font-bold"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </Link>
              ))}
            </nav>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://wa.me/254722404647?text=Hello%20Impact%20Creative%20Designs%20Kenya,%20I%20would%20like%20to%20inquire%20about%20custom%20branded%20tapes%20and%20tags."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-black font-mono font-bold text-xs uppercase py-3 px-6 border border-green-700"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>WhatsApp (0722404647)</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-neutral-900 text-white font-mono font-bold text-xs uppercase py-3 px-6 text-center"
              >
                GET A QUOTE
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Quote Modal */}
      {quoteModalOpen && typeof document !== 'undefined'
        ? createPortal(
            <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />,
            document.body,
          )
        : null}
    </>
  );
};
