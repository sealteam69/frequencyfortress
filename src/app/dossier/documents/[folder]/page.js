import Link from 'next/link';
import { notFound } from 'next/navigation';
import { folders, getDocuments } from '../catalog';
import DocumentList from '../document-list';

export const dynamicParams = false;

export function generateStaticParams() {
  return folders.map(({ slug }) => ({ folder: slug }));
}

export async function generateMetadata({ params }) {
  const { folder: slug } = await params;
  const folder = folders.find((entry) => entry.slug === slug);
  if (!folder) notFound();
  return {
    title: `${folder.title} | Frequency Fortress`,
    alternates: { canonical: `/dossier/documents/${slug}` },
  };
}

export default async function FolderPage({ params }) {
  const { folder: slug } = await params;
  const folder = folders.find((entry) => entry.slug === slug);
  if (!folder) notFound();
  const documents = getDocuments(slug);
  return (
    <>
      <h1 className="mt-13 sm:mt-19 text-center text-[22px] md:text-[30px] font-bold tracking-wide">{folder.title.toUpperCase()}</h1>
      <nav aria-label="Breadcrumb" className="mt-2  text-center text-xs md:text-sm">
        <Link href="/dossier/documents" className="text-blue-500 hover:text-[#FF13F0] underline">DOCUMENT LIBRARY</Link>
        <span aria-hidden="true"> / </span><span aria-current="page">{folder.title}</span>
      </nav><br></br>
      {documents.length > 0 ? <DocumentList documents={documents} /> : (
        <p className="border-y border-gray-300 bg-white/40 px-3 py-2">PDFs for this folder are not yet available.</p>
      )}
    </>
  );
}
