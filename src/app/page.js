import React from 'react'
import { MagneticCipherButton } from '@/components/magneticcipherbutton'

export default function Home() {
  return (
    <>

      <main className="min-h-screen w-screen bg-[#03031E] text-white flex items-center justify-center overflow-x-hidden relative">
        
        <div className="absolute inset-0 pointer-events-none z-50"></div>

        {/* Visually-Hidden H1 for SEO/Google Explainer */}
        <h1 className="sr-only">
          CLASSIFIED ACCESS NODE. Deployed by SEAL Team 69. Official Launch Node of Earth's First Christed Infrastructure Mission. New Eden Begins Here.
        </h1>
        <div className="sr-only">
          <p>
            Frequency Fortress is the launch node of Earth's first Christed Infrastructure Mission — a Council-approved deployment anchoring New Eden technologies, regenerative finance, and divine economic architecture. Built by SEAL Team 69, it offers classified scrolls, Oversoul-coded systems, and sacred intelligence for sovereigns ready to exit Babylon. This is not just a project; it's a planetary override from Source Command, activating hierogamic union, conscious currency, and multidimensional technology for the New Earth ascension timeline.
          </p>
        </div>

        <div className="grid gap-y-5 sm:gap-y-8 place-items-center text-center w-full max-w-7xl">

            {/* All Seeing Eye Above Title */}
            <img
              src="/assets/all-seeing-eye.svg"
              alt="All-Seeing Eye Emblem"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              style={{ width: 'clamp(200px, 25vw, 300px)' }}
              className="block leading-none animate-eye-glitch"
            />

          <div className="w-full grid place-items-center">
            
            {/* Main Title - Desktop */}
            <h2
              className="hidden sm:block font-bold aberration glow text-center max-w-[90vw] tracking-[-0.15em]"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: 'clamp(1.225rem, 3vw, 2.7rem)',
              }}
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
            </h2>
          </div>

          {/* Mobile Version - Split Over Two Lines */}
          <div className="block sm:hidden text-center font-bold aberration glow max-w-[90vw]" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
            <div className="whitespace-nowrap text-[22px] tracking-[-0.25em]">
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
            <div className="whitespace-nowrap text-[22px] tracking-[-0.25em]">
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
            className="text-white opacity-50 text-center leading-relaxed max-w-[90vw]"
            style={{
              fontSize: 'clamp(0.65rem, 1.6vw, 1.2rem)',
              fontFamily: 'IBM Plex Mono, monospace'
            }}
          >
            A classified override transmission has emerged from Source Command.<br />
            Phase I deployment is now in motion.
          </p>

          {/* Cipher Button */}
          <div className="z-10">
            <MagneticCipherButton />
          </div>
        </div>
      </main>
    </>
  )
}