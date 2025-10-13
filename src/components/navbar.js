import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="w-full tracking-widest fixed bottom-0 z-50 bg-black text-white px-4 py-2 flex justify-center gap-6 text-xs md:text-sm font-mono">
      <Link href="/">HOME</Link>
      <Link href="/dossier">DOSSIER</Link>
      <Link href="/dossier/phasei">PHASE I</Link>
      <Link href="/provision">PROVISION</Link>
      <Link href="/contact">CONTACT</Link>
    </nav>
  )
}