export function DocumentRow({ document }) {
  return (
    <li className="px-3 py-2">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-6 text-xs md:text-sm">
        <a href={document.href} className="min-w-0 text-blue-500 hover:text-[#FF13F0] underline decoration-transparent hover:decoration-inherit">
          <span aria-hidden="true">📄 </span>{document.title}
        </a>
        <span className="shrink-0 whitespace-nowrap text-[11px] md:text-[13px] text-gray-600">PDF · {document.size}</span>
      </div>
    </li>
  );
}

export default function DocumentList({ documents }) {
  return (
    <ul className="divide-y divide-gray-300 border-y border-x border-gray-300 bg-white/40 backdrop-blur-sm">
      {documents.map((document) => (
        <DocumentRow key={document.href} document={document} />
      ))}
    </ul>
  );
}
