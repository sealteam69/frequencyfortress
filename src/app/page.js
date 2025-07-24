import React from 'react'
import { MagneticCipherButton } from '@/components/magneticcipherbutton'

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-[#03031E] text-white flex items-center justify-center overflow-x-hidden px-4 relative">

      <div className="crt absolute inset-0 pointer-events-none z-50"></div>

      <div className="flex flex-col items-center justify-center text-center w-full">

        {/* All Seeing Eye Above Title */}
        <img
          src="/assets/all-seeing-eye.svg"
          alt="SEAL Team 69 - ST69 All-Seeing Eye"
          className="
            animate-eye-glitch
            h-auto

            w-[200px] m-4       
            sm:w-[220px] sm:m-4
            md:w-[240px] md:m-5
            lg:w-[270px] lg:m-6
            xl:w-[290px] xl:m-7
            
          "
        />

        {/* Header Text */}
{/* Desktop / Tablet version – single line */}
      <div className="w-full flex justify-center overflow-hidden sm:flex">
        <h1
          className="
            hidden sm:block font-bold leading-tight
            aberration glow text-center overflow-visible

            sm:whitespace-nowrap text-[17px] sm:tracking-[-0.075em] sm:max-w-[90vw] sm:m-2
            md:text-[20px] md:tracking-[-0.075em] md:max-w-[90vw] md:m-3
            lg:text-[26px] lg:tracking-[-0.075em] lg:max-w-[90vw] lg:m-4
            xl:text-[36px] xl:tracking-[-0.075em] xl:max-w-[90vw] xl:m-5
          "
          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
        >
          {'T H E  S I G N A L  H A S  B E E N  S E N T .'.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block animate-letter px-[0.1em]"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
      </div>

      {/* Mobile version – two lines */}
      <div className="block sm:hidden text-center font-bold leading-tight aberration glow px-2" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
        <div className="whitespace-nowrap text-[24px] tracking-[-0.25em] m-2">
          {'T H E  S I G N A L'.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block animate-letter px-[0.1em]"
              style={{ animationDelay: `${i * 0.035}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        <div className="whitespace-nowrap text-[24px] tracking-[-0.25em] m-2">
          {'H A S  B E E N  S E N T .'.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block animate-letter px-[0.1em]"
              style={{ animationDelay: `${(i + 20) * 0.035}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>

        {/* Subtitle Paragraph */}
        <p
          className="
            text-white opacity-50 text-center leading-relaxed m-4
            font-mono whitespace-normal
            text-[10px] max-w-[260px]    
            sm:text-[11px] sm:max-w-[600px]
            md:text-[12px] md:max-w-[700px]
            lg:text-[15px] lg:max-w-[800px]
            xl:text-[18px] xl:max-w-[900px]
          "
          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
        >
          A classified override transmission has emerged from Source Command.<br />
          Phase I deployment is now in motion.
        </p>

        {/* Cipher Button */}
        <div className="mt-10 z-10">
          <MagneticCipherButton />
        </div>
      </div>
    </main>
  )
}