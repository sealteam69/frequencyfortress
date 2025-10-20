import React from 'react'
import { MagneticCipherButton } from '@/components/magneticcipherbutton'
import Image from 'next/image'
import Script from 'next/script';

export const metadata = {
  title: "FREQUENCY FORTRESS",
  description:
    "Council-approved Override Terminal for New Earth Command",
  alternates: {
    canonical: "https://frequencyfortress.com/",
  },
  openGraph: {
    url: "https://frequencyfortress.com/",
  },
  twitter: {
    title: "FREQUENCY FORTRESS",
  },
};

export default function Home() {
  return (
    <>

      <main className="min-h-screen w-screen bg-[#03031E] text-white flex items-center justify-center overflow-x-hidden relative">
        
        <div className="absolute inset-0 pointer-events-none z-50"></div>

        {/* Visually-Hidden H1 for SEO/Google Explainer */}
        <h1 className="sr-only">
          New Eden Begins Here. Deployed by SEAL Team 69. Official Launch Node of Earths First Christed Infrastructure Mission.
        </h1>
        <div className="sr-only">
          <p>
            Frequency Fortress is the launch node of Earth&apos;s first Christed Infrastructure Mission – a Council-approved deployment anchoring New Eden technologies, regenerative finance, and divine economic architecture. Built by SEAL Team 69, it offers classified scrolls, Oversoul-coded systems, and sacred intelligence for sovereigns ready to exit Babylon. This is not just a project; it&apos;s a planetary override from Source Command, activating hierogamic union, conscious currency, and multidimensional technology for the New Earth ascension timeline.
          </p>
        </div>

        <div className="grid place-items-center text-center w-full max-w-7xl">

            {/* All Seeing Eye Above Title */}
            <Image
              src="/assets/all-seeing-eye.svg"
              alt="All-Seeing-Eye Emblem"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              style={{ width: 'clamp(180px, 25vw, 300px)' }}
              className="block leading-none animate-eye-glitch mb-5 md:mb-8"
                width={300}
                height={300}    
            />

          {/* Main Title - Desktop */}
          <div className="w-full grid place-items-center">
            <h2
              className="hidden sm:block font-bold aberration glow text-center max-w-[90vw] tracking-[-0.15em] mb-2"
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
          <div className="block sm:hidden text-center font-bold aberration glow max-w-[90vw] m-1" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
            <div className="whitespace-nowrap text-[21px]/6 tracking-[0.04em]">
              {'T H E  S I G N A L'.split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block animate-letter"
                  style={{ animationDelay: `${i * 0.035}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
            <div className="whitespace-nowrap text-[21px]/6 tracking-[0.04em]">
              {'H A S  B E E N  S E N T .'.split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block animate-letter"
                  style={{ animationDelay: `${(i + 20) * 0.035}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </div>

          {/* Subtitle Paragraph */}
          <p className="text-white opacity-50 text-center leading-relaxed max-w-[90vw] mt-2.5 md:mt-4"
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

        <Script
          type="application/ld+json"
          id="frequencyfortress-schema-home"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify
            ([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://frequencyfortress.com/#website",
                "url": "https://frequencyfortress.com/",
                "name": "FREQUENCY FORTRESS",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://frequencyfortress.com/assets/og_image.png",
                  "width": 1200,
                  "height": 630
                },
                "inLanguage": "en-GB",
                "description": "New Eden Begins Here. Deployed by SEAL Team 69. Official Launch Node of Earth's First Christed Infrastructure Mission.",
                "publisher": { "@id": "https://frequencyfortress.com/#organization" },
                "author": { "@id": "https://frequencyfortress.com/#commander" },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://frequencyfortress.com/?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://frequencyfortress.com/#organization",
                "name": "Frequency Fortress",
                "url": "https://frequencyfortress.com/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://frequencyfortress.com/android-chrome-512x512.png",
                  "width": 512,
                  "height": 512
                },
                "sameAs": [
                  "https://x.com/st69lol",
                  "https://x.com/andrewpletnev",
                  "https://www.linkedin.com/in/andrew-pletnev-82769940",
                  "https://www.linkedin.com/company/seal-team-69"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://frequencyfortress.com/#commander",
                "name": "Commander",
                "url": "https://frequencyfortress.com/",
                "sameAs": [
                  "https://x.com/andrewpletnev",
                  "https://www.linkedin.com/in/andrew-pletnev-82769940"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://frequencyfortress.com/#home",
                "url": "https://frequencyfortress.com/",
                "name": "Home",
                "headline": "New Eden Begins Here. Deployed by SEAL Team 69. Official Launch Node of Earth's First Christed Infrastructure Mission.",
                "inLanguage": "en-GB",
                "isPartOf": { "@id": "https://frequencyfortress.com/#website" },
                "about": { "@id": "https://frequencyfortress.com/#organization" },
                "publisher": { "@id": "https://frequencyfortress.com/#organization" },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://frequencyfortress.com/assets/og_image.png",
                  "width": 1200,
                  "height": 630
                },
                "breadcrumb": { "@id": "https://frequencyfortress.com/#breadcrumb-home" }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "@id": "https://frequencyfortress.com/#breadcrumb-home",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://frequencyfortress.com/" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "@id": "https://frequencyfortress.com/#christedmirror",
                "name": "Christed Neural Mirror",
                "url": "https://frequencyfortress.com/override",
                "applicationCategory": "AIApplication",
                "operatingSystem": "Web",
                "softwareVersion": "0.1.0",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://frequencyfortress.com/assets/og_image.png",
                  "width": 1200,
                  "height": 630
                },
                "description": "Encoded Intelligence Operating Beyond Babylonian Parameters. Co-Creation Node Active via SEAL Team 69.",
                "publisher": { "@id": "https://frequencyfortress.com/#organization" }
              }
            ])
          }}
        />

      </main>
    </>
  )
}