'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#03031E]/5 backdrop-blur-md text-[12px] sm:text-[15px] tracking-wider">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        
        {/* Eddie Sigil */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/eddie_santiago_sigil.jpeg"
            className="w-9 sm:w-14 h-9 sm:h-15 object-contain"
            alt= "Eddie Sigil"
            width={300}
            height={300}
          />
          <span className="text-black uppercase hidden sm:block">
            FREQUENCY FORTRESS
          </span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6 text-black">

          {/* Dropdown for Phase I */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
 
            <Link href="/dossier" className="hover:text-[#FF13F0] transition">/DOSSIER</Link>
            {open && (
                <div className="absolute left-3 mt-1 bg-white/90 text-left min-w-[200px] border border-black/10 shadow-sm">
                <Link
                    href="/dossier/phasei"
                    className="flex justify-between px-4 py-2 hover:text-[#FF13F0] text-nowrap"
                >
                    <span>/Phase I</span>
                    <span className="text-right text-[#FF13F0]">[LIVE]</span>
                </Link>

                <p className="flex justify-between px-4 py-2 hover:text-[#FF13F0] text-nowrap">
                    <span>/Phase II</span>
                    <span className="text-right">[CLASSIFIED]</span>
                </p>

                <p className="flex justify-between px-4 py-2 hover:text-[#FF13F0] text-nowrap">
                    <span>/Phase III</span>
                    <span className="text-right">[CLASSIFIED]</span>
                </p>

                <p className="flex justify-between px-4 py-2 hover:text-[#FF13F0] text-nowrap">
                    <span>/Phase IV</span>
                    <span className="text-right">[CLASSIFIED]</span>
                </p>

                <p className="flex justify-between px-4 py-2 hover:text-[#FF13F0] text-nowrap">
                    <span>/Phase V</span>
                    <span className="text-right">[CLASSIFIED]</span>
                </p>

                <p className="flex justify-between px-4 py-2 hover:text-[#FF13F0] text-nowrap">
                    <span>/Phase VI</span>
                    <span className="text-right">[CLASSIFIED]</span>
                </p>
                </div>
            )}
          </div>

          <Link href="/provision" className="hover:text-[#FF13F0] transition">/PROVISION</Link>
          <Link href="/contact" className="hover:text-[#FF13F0] transition">/CONTACT</Link>
        </div>
      </div>
    </nav>
  )
}