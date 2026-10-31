'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { catalogueCategories, getCategoryHref } from '@/lib/catalogue';
import { BrandLogo } from './BrandLogo';
import { SITE_NAME, SITE_PHONE_DISPLAY, siteWhatsAppLink } from '@/lib/site-contact';

const NAV_WHATSAPP_URL = siteWhatsAppLink(
  `Hello ${SITE_NAME}, I would like to discuss a printing, branding or signage project.`,
);

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Our Work', href: '/our-work' },
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
              className="flex h-[60px] w-[220px] items-center group select-none bg-white border border-neutral-900 pl-1.5 pr-2 py-1.5 sm:pl-2.5 sm:pr-4 sm:py-2 shadow-[2px_2px_0px_#ea580c] min-w-0 max-w-full lg:w-[300px] xl:w-[320px]"
              id="brand-logo"
            >
              {/* Client logo lockup — horizontal layout per client mockup */}
              {/* Fluid width: mockup-proportioned max, shrinks gracefully on md screens where the nav needs the room */}
              <div className="h-full w-full flex items-center justify-center overflow-hidden">
                <BrandLogo />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav aria-label="Main navigation" className="hidden xl:flex items-center space-x-2">
              <details className="relative" onKeyDown={(event) => { if (event.key === 'Escape') { event.currentTarget.open = false; event.currentTarget.querySelector('summary')?.focus(); } }}>
                <summary className="cursor-pointer px-3 py-3 text-sm font-bold uppercase">Products &amp; Services</summary>
                <div className="absolute left-0 top-full w-96 border-2 border-neutral-900 bg-[#fbfaf7] p-2 shadow-lg">
                  {catalogueCategories.map((category) => (
                    <Link key={category.slug} href={getCategoryHref(category)} onClick={(event) => { event.currentTarget.closest('details')?.removeAttribute('open'); }} className="block px-4 py-3 text-sm hover:bg-neutral-200 focus-visible:bg-neutral-200">{category.name}</Link>
                  ))}
                </div>
              </details>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-2 py-2 text-[13px] lg:px-3 lg:text-sm font-mono uppercase tracking-wide transition-colors ${
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
            <div className="hidden xl:flex items-center gap-4">
              <a
                href={NAV_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-mono font-bold text-neutral-800 hover:text-green-700 transition-colors"
                title="Direct WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4 text-green-600 fill-green-600" />
                <span className="hidden xl:inline">{SITE_PHONE_DISPLAY}</span>
              </a>

              <Link href="/quote" className="inline-flex items-center justify-center bg-neutral-900 hover:bg-orange-600 text-white font-mono text-sm font-bold uppercase tracking-wide py-3 px-6 border-2 border-neutral-900 transition-colors">GET A QUOTE</Link>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex xl:hidden items-center gap-2 shrink-0">
              <Link href="/quote" className="bg-neutral-900 text-white font-mono text-xs font-bold uppercase py-2 px-3">QUOTE</Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-900 hover:bg-neutral-200 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="xl:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto border-t-2 border-neutral-900 bg-[#fbfaf7] p-6 space-y-4">
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-3 font-mono text-sm uppercase">
              <details>
                <summary className="cursor-pointer py-3 font-bold">Products &amp; Services</summary>
                {catalogueCategories.map((category) => (
                  <Link key={category.slug} href={getCategoryHref(category)} onClick={() => setMobileMenuOpen(false)} className="block border-b border-neutral-200 py-3 text-sm normal-case">{category.name}</Link>
                ))}
              </details>
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
                href={NAV_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-black font-mono font-bold text-xs uppercase py-3 px-6 border border-green-700"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>WhatsApp ({SITE_PHONE_DISPLAY})</span>
              </a>

              <Link href="/quote" onClick={() => setMobileMenuOpen(false)} className="w-full bg-neutral-900 text-white font-mono font-bold text-xs uppercase py-3 px-6 text-center">GET A QUOTE</Link>
            </div>
          </div>
        )}
      </header>


    </>
  );
};
