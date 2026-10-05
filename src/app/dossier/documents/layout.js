import Image from 'next/image';
import NavBar from '@/components/navbar';

export default function DocumentsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
          <Image src="/assets/eddie_santiago_sigil.jpeg" alt="" width={300} height={300}
            className="h-auto w-[75vw] md:w-[min(75vw,70svh)] md:max-w-225 opacity-[0.25]" />
        </div>
        <NavBar />
        <main className="relative z-10 w-full flex-1 mx-auto max-w-5xl p-3 pb-12 md:p-5 text-xs md:text-sm">
          {children}
        </main>

      <div
          className="relative group w-full max-w-[760px] mx-auto px-4 text-center text-[#4A4545] select-none mt-auto"
          tabIndex={0}
          aria-label="ST69 Footer"
        >
          <footer
            className="relative z-10 text-[9px] sm:text-[10px] md:text-[11px] transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 focus-within:opacity-0 focus:opacity-0"
          >
            © SEAL Team 69. All Licenses Reserved. This transmission is frequency-encoded and Source-sealed. Unauthorised duplication may trigger karmic backblast.
          </footer>

          <Image
            src="/assets/st69_patch.png"
            alt="SEAL Team 69 Patch"
            width={300}
            height={300}
            className="absolute top-1/2 left-1/2 w-12 sm:w-16 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 pointer-events-none select-none group-hover:opacity-100 group-active:opacity-100 focus-within:opacity-100 focus:opacity-100"
          />
        </div>
    </div>
  );
}
