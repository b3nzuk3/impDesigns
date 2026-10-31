import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { catalogueCategories, getPublishedCategory, getPublishedProducts } from '@/lib/catalogue';
import { portfolioProjects } from '@/lib/portfolio';
import { StructuredData } from '@/components/StructuredData';
import { absoluteUrl } from '@/lib/site';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return catalogueCategories.filter((c) => getPublishedCategory(c.slug)).map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getPublishedCategory((await params).slug);
  if (!category) return { title: 'Page not found', robots: { index: false, follow: false } };
  const title = `${category.name} in Kenya`;
  const description = `${category.description} Explore real aluminium asset-tag work and request a quotation for your business.`;
  return { title, description, alternates: { canonical: `/categories/${category.slug}` }, openGraph: { title, description, url: `/categories/${category.slug}` } };
}
export default async function CategoryPage({ params }: Props) {
  const category = getPublishedCategory((await params).slug);
  if (!category) notFound();
  const products = getPublishedProducts(category.slug);
  const projects = portfolioProjects.filter((p) => p.category === 'tags').slice(0, 3);
  return <div className="mx-auto max-w-[88rem] px-4 py-12 sm:px-6 lg:px-8">
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') }, { '@type': 'ListItem', position: 2, name: category.name, item: absoluteUrl(`/categories/${category.slug}`) }] }} />
    <nav aria-label="Breadcrumb" className="mb-8 text-sm"><Link href="/" className="underline">Home</Link> / {category.name}</nav>
    <h1 className="max-w-4xl text-4xl font-black font-mono uppercase sm:text-6xl">{category.name}</h1>
    <p className="mt-6 max-w-2xl text-lg leading-relaxed">Explore aluminium identification for equipment and business asset registers. Browse real examples, then discuss your artwork, dimensions, quantities and mounting requirements.</p>
    <div className="my-12 grid gap-8 md:grid-cols-2">{products.map((product) => <article key={product.slug} className="border-2 border-neutral-900 bg-white p-6">
      {product.image && <Image src={product.image} alt={product.imageAlt || product.name} width={800} height={500} className="aspect-[8/5] w-full object-contain" />}
      <h2 className="mt-5 text-2xl font-bold">{product.name}</h2><p className="my-4 leading-relaxed">{product.description}</p><Link href={product.href} className="inline-block bg-neutral-900 px-5 py-3 font-bold text-white">Explore tags →</Link>
    </article>)}</div>
    <h2 className="text-3xl font-black font-mono uppercase">Relevant completed work</h2>
    <div className="mt-6 grid gap-8 md:grid-cols-3">{projects.map((project) => <article key={project.slug}><Image src={project.image} alt={project.imageAlt} width={600} height={400} sizes="(max-width: 767px) 100vw, 33vw" className="aspect-[3/2] w-full border border-neutral-300 object-contain" /><h3 className="mt-4 text-xl font-bold">{project.title}</h3><p className="mt-2 text-sm leading-relaxed">{project.description}</p></article>)}</div>
    <div className="mt-12 border-t-2 border-neutral-900 pt-8"><Link href="/quote?product=asset-tags-identification" className="inline-block bg-orange-700 px-6 py-4 font-bold text-white">Discuss your identification project →</Link><Link href="/our-work" className="ml-0 mt-4 block underline sm:ml-6 sm:inline-block">View all our work</Link></div>
  </div>;
}
