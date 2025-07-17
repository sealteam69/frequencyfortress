import React from 'react'
import { MagneticCipherButton } from '@/components/magneticcipherbutton'

export default function Home() {
  return (
    <main className="min-h-screen h-screen w-screen bg-[#03031E] text-white flex items-center justify-center overflow-hidden px-4 relative">

      <div className="crt absolute inset-0 pointer-events-none z-50"></div>

      <div className="flex flex-col items-center text-center w-full max-w-[880px] sm:max-w-[920px] md:max-w-[1080px] lg:max-w-[1200px] px-4">

        {/* All Seeing Eye Above Title */}
        <img
          src="/assets/all-seeing-eye.svg"
          alt="All Seeing Eye"
          className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-auto m-4 sm:m-5 md:m-6 animate-eye-glitch"
        />

      <h1
        className="
          text-[18px] sm:text-[28px] md:text-[32px] lg:text-[36px]
          tracking-[0.6em] sm:tracking-[0.7em] md:tracking-[0.8em]
          font-bold text-center m-4
          aberration glow leading-snug
          whitespace-normal lg:whitespace-nowrap
          max-w-full
        "
        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
      >
        {'THE SIGNAL HAS BEEN SENT.'.split(' ').map((word, wi) => (
          <span key={wi} className="mr-[0.6em] whitespace-nowrap">
            {word.split('').map((char, ci) => (
              <span
                key={`${wi}-${ci}`}
                className="animate-letter"
                style={{ animationDelay: `${(wi * 5 + ci) * 0.05}s`, display: 'inline-block' }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>

      <p
        className="
          text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px]
          text-white opacity-50
          leading-relaxed
          text-center
          max-w-[90vw] sm:max-w-[85vw] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px]
          m-4
          whitespace-normal
        "
        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
      >
        A classified override transmission has emerged from Source Command.<br />
        Phase I deployment is now in motion.
      </p>

        {/* Cipher Button */}
        <div className="mt-10">
          <MagneticCipherButton />
        </div>
      </div>
    </main>
  )
}
