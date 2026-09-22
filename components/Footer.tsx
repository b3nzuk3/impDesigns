'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TapeStrip } from './TapeStrip';
import { BrandLogo } from './BrandLogo';
import { MessageCircle, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-[#f5f5f5] pt-0 border-t-4 border-neutral-900 overflow-hidden">
      {/* Top Tape Divider running across full width */}
      <TapeStrip
        variant="red"
        text="IMPACT CREATIVE DESIGNS • KAI PLAZA NAIROBI • CUSTOM BRANDED TAPES • ALUMINIUM TAGS • DOOR TO DOOR DELIVERY KENYA •"
        sheen={true}
        shadow={false}
      />

      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Factory Summary */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Shared BrandLogo lockup — identical design on mobile and PC */}
              <div className="h-12 w-[144px] shrink-0 flex items-center justify-center overflow-hidden">
                <BrandLogo />
              </div>
              <span className="font-mono text-xl font-black uppercase tracking-tight text-white">
                IMPACT CREATIVE DESIGNS
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans">
              Kenya’s dedicated manufacturer specializing exclusively in custom branded packaging tapes and custom printed retail tags. Built for growing e-commerce brands, industrial manufacturers, and retail shops.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/254722404647"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-black font-mono font-bold text-xs uppercase py-2.5 px-5"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Core Products */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4 border-b border-neutral-800 pb-2">
              SPECIALIZED PRODUCTS
            </h4>
            <ul className="space-y-2.5 font-mono text-xs text-neutral-400">
              <li>
                <Link href="/branded-tapes" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Printed Packaging Tape (48mm)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/branded-tapes" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Transparent Logo Tape</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/branded-tapes" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Eco Kraft Brown Printed Tape</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/branded-tapes" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Heavy-Duty 72mm Carton Seal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/custom-tags" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Custom Aluminium Product Tags</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/custom-tags" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Heavy 0.8mm Anodized Aluminium Tags</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Service & Delivery Across Kenya */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4 border-b border-neutral-800 pb-2">
              KENYA NATIONWIDE DISPATCH
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              We dispatch daily from our Nairobi factory floor to businesses across Kenya:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
              <div>• Nairobi Central</div>
              <div>• Mombasa & Coast</div>
              <div>• Kisumu & Western</div>
              <div>• Nakuru & Rift Valley</div>
              <div>• Eldoret & Uasin Gishu</div>
              <div>• Mount Kenya & Thika</div>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] font-mono text-neutral-400">
              Courier partners: Wells Fargo, G4S, Speedaf, Sendy & Rider Pickup.
            </div>
          </div>

          {/* Nairobi Factory & Contact */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4 border-b border-neutral-800 pb-2">
              NAIROBI FACILITY
            </h4>
            <ul className="space-y-3 font-mono text-xs text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Kai Plaza, 6 Tom Mboya St, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-green-500 shrink-0" />
                <span>0722404647</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>impactcreativedesigns@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>Mon – Fri: 8:00 AM – 5:30 PM EAT</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Tape Motif */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Impact Creative Designs Ltd. All rights reserved. Nairobi, Kenya.
          </div>
          <div className="flex items-center gap-6">
            <span>Specialists in Branded Tapes & Tags</span>
            <span className="text-neutral-700">|</span>
            <Link href="/branded-tapes" className="hover:text-white">Tape Specs</Link>
            <Link href="/custom-tags" className="hover:text-white">Tag Specs</Link>
            <Link href="/quote" className="text-orange-400 hover:underline">Instant Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
