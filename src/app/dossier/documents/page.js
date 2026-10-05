import Link from 'next/link';
import { folders, getDocuments } from './catalog';
import { DocumentRow } from './document-list';

export const metadata = {
  title: 'FREQUENCY FORTRESS / DOCUMENT LIBRARY',
  description: 'Browse Frequency Fortress public dossier and open PDFs directly.',
  alternates: { canonical: '/dossier/documents' },
};

export default function DocumentsPage() {
  return (
    <>
      <h1 className="mt-13 sm:mt-19 text-center text-[22px] md:text-[30px] font-bold tracking-wide mb-1 md:mb-2">DOCUMENT LIBRARY</h1>
      <p className="max-w-3xl mx-auto text-center text-[13px] md:text-base">Access the full Edenic infrastructure blueprint for Frequency Fortress. Each document is encoded with Council-grade intelligence and divine intent. All files are publicly accessible, no password required.</p>
      <br></br>
      <ul className="divide-y divide-gray-300 border-y border-gray-300 border-x bg-white/40 backdrop-blur-sm">
        {folders.map((folder) => (
          <li key={folder.slug}>
            <Link href={`/dossier/documents/${folder.slug}`} className="flex items-center justify-between gap-4 px-3 py-2 text-blue-500 hover:text-[#FF13F0]">
              <span><span aria-hidden="true">📁 </span>{folder.title}</span>
              <span className="shrink-0 text-[11px] md:text-[13px] text-gray-600">{getDocuments(folder.slug).length} PDFs</span>
            </Link>
          </li>
        ))}
        {getDocuments().map((document) => (
          <DocumentRow key={document.href} document={document} />
        ))}
      </ul>
    </>
  );
}
