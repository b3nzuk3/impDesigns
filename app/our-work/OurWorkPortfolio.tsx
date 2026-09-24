'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { QuoteModal } from '@/components/QuoteModal';
import { portfolioProjects, type PortfolioCategory } from '@/lib/portfolio';

type Filter = 'all' | PortfolioCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All client work' },
  { id: 'tapes', label: 'Branded packaging tape' },
  { id: 'tags', label: 'Aluminium asset tags' },
];

export function OurWorkPortfolio() {
  const [filter, setFilter] = useState<Filter>('all');
  const [quoteOpen, setQuoteOpen] = useState(false);

  const projects = useMemo(
    () =>
      filter === 'all'
        ? portfolioProjects
        : portfolioProjects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <div className="bg-[#fbfaf7] text-neutral-900">
      <section className="border-b-2 border-neutral-900 px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-orange-700">
              Real client production · Nairobi, Kenya
            </p>
            <h1 className="mt-4 font-mono text-3xl font-black uppercase leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Branded packaging tape &amp; aluminium tags made for real organizations
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              See actual custom printed tape and barcode asset tags produced by Impact Creative Designs.
              These production photos showcase work for Kenyan businesses and institutions
              including Kenya Revenue Authority, Kenya Pipeline Company, Equity Bank, KCB Foundation,
              Pumwani Hospital and other organizations.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/branded-tapes"
                className="inline-flex items-center gap-2 border-2 border-neutral-950 bg-neutral-950 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-neutral-800"
              >
                Explore branded tape <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="/custom-tags"
                className="inline-flex items-center gap-2 border-2 border-neutral-950 bg-transparent px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-neutral-950 transition-colors hover:bg-white"
              >
                Explore aluminium tags <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="client-projects-title"
        className="mx-auto max-w-[88rem] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="flex flex-col gap-5 border-b border-neutral-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-orange-700">
              Selected client work
            </p>
            <h2
              id="client-projects-title"
              className="mt-2 font-mono text-2xl font-black uppercase tracking-tight text-neutral-950 sm:text-3xl"
            >
              Real products. Real production photos.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Browse examples of custom branded packaging tape and aluminium asset tags. Client names
              below match the marks shown in the supplied production photographs.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Filter client work">
            {FILTERS.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={filter === option.id}
                onClick={() => setFilter(option.id)}
                className={`border-2 px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wide transition-colors sm:text-xs ${
                  filter === option.id
                    ? 'border-neutral-950 bg-neutral-950 text-white'
                    : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-950'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex min-w-0 flex-col border-2 border-neutral-900 bg-white shadow-[5px_5px_0px_#111111] transition-transform hover:-translate-y-1"
            >
              <figure className="relative aspect-[4/3] overflow-hidden border-b-2 border-neutral-900 bg-[#eeeae2]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-3"
                />
                <figcaption className="absolute bottom-3 left-3 bg-neutral-950 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wide text-white">
                  {project.productLabel}
                </figcaption>
              </figure>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-orange-700">
                  {project.category === 'tapes' ? 'Printed packaging tape' : 'Aluminium tags & asset plates'}
                </p>
                <h3 className="mt-2 font-mono text-lg font-black uppercase leading-snug text-neutral-950 sm:text-xl">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                  {project.description}
                </p>
                <button
                  type="button"
                  onClick={() => setQuoteOpen(true)}
                  className="mt-5 inline-flex w-fit items-center gap-2 border-b-2 border-orange-600 pb-1 font-mono text-xs font-bold uppercase tracking-wide text-neutral-950 transition-colors hover:text-orange-700"
                >
                  Request a similar product <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-neutral-900 bg-neutral-950 px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto flex max-w-[88rem] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-orange-400">
              Made in Nairobi for delivery across Kenya
            </p>
            <h2 className="mt-2 font-mono text-2xl font-black uppercase leading-tight sm:text-3xl">
              Put your brand on every parcel and asset
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-300">
              Ask about custom printed packaging tape or aluminium identification tags for your
              organization.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="inline-flex shrink-0 items-center gap-2 border-2 border-orange-500 bg-orange-600 px-6 py-4 font-mono text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-orange-500"
          >
            Request a quote <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} defaultProduct="tape" />
    </div>
  );
}
