import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { catalogueProducts, getPublishedProducts, getRoutableProduct } from '@/lib/catalogue';
import { StructuredData } from '@/components/StructuredData';
import { absoluteUrl } from '@/lib/site';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return catalogueProducts.filter((p) => getRoutableProduct(p.slug)).map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getRoutableProduct((await params).slug);
  if (!product) return { title: 'Page not found', robots: { index: false, follow: false } };
  const title = `${product.name} in Kenya`;
  return { title, description: product.description, alternates: { canonical: product.href }, openGraph: { title, description: product.description, url: product.href } };
}
export default async function ProductPage({ params }: Props) {
  const product = getRoutableProduct((await params).slug);
  if (!product) notFound();
  return <div className="mx-auto max-w-[88rem] px-4 py-12 sm:px-6 lg:px-8">
    <StructuredData data={{ '@context': 'https://schema.org', '@graph': [{ '@type': 'Service', name: product.name, description: product.description, url: absoluteUrl(product.href), provider: { '@id': absoluteUrl('/#business') }, areaServed: { '@type': 'Country', name: 'Kenya' } }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') }, { '@type': 'ListItem', position: 2, name: product.name, item: absoluteUrl(product.href) }] }] }} />
    <nav aria-label="Breadcrumb" className="mb-8"><Link href="/" className="underline">Home</Link> / {product.name}</nav>
    <div className="grid gap-10 lg:grid-cols-2"><Image src={product.image!} alt={product.imageAlt!} width={900} height={700} sizes="(max-width: 1023px) 100vw, 50vw" className="w-full border border-neutral-300 object-contain" /><div><h1 className="text-4xl font-black font-mono uppercase">{product.name}</h1><p className="my-6 text-lg leading-relaxed">{product.description}</p><Link href={`/quote?product=${product.slug}`} className="inline-block bg-orange-700 px-6 py-4 font-bold text-white">Get a project quote →</Link><p className="mt-6 leading-relaxed">Specifications, available options, minimum quantities and lead times are confirmed for your project before ordering.</p></div></div>
    <h2 className="mt-14 text-2xl font-bold">Related products</h2><ul className="mt-4 space-y-3">{getPublishedProducts(product.categorySlug).filter((p) => p.slug !== product.slug).map((p) => <li key={p.slug}><Link href={p.href} className="underline">{p.name}</Link></li>)}</ul>
  </div>;
}
