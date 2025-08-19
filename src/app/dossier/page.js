'use client';

import React, { useRef, useState } from 'react';
import OrgasmButton from "@/components/orgasmbutton";
import EddieSigil from '../../components/eddiesigil';
import TipOfTheMemeFooter from "@/components/tipofthememe";
import SexualSovereignOverride from "@/components/sexualsovereignoverride";
import SocialLinksNeon from "@/components/socials";
import MegavoltBlock from '@/components/megavolt'
import Script from "next/script";

export default function DossierPage() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false)

  const handleEddiePlay = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn('Playback failed:', err))
    }
  }

  return (
    <main

      className="
        min-h-screen
        overflow-x-hidden
        bg-white 
        text-[#4A4545] 
        tracking-wide 
        font-mono
        px-4 py-6 
        sm:px-6 sm:py-8 
        md:px-12 md:py-16
      "
    >

      <Script id="schema-dossier" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",               // subtype of WebPage fits a list of docs
              "@id": "https://frequencyfortress.com/dossier/#webpage",
              "url": "https://frequencyfortress.com/dossier",
              "name": "Dossier",
              "inLanguage": "en-GB",
              "isPartOf": { "@id": "https://frequencyfortress.com/#website" },
              "about": { "@id": "https://frequencyfortress.com/#organization" },
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://frequencyfortress.com/assets/og_image.png"
              },
              "breadcrumb": { "@id": "https://frequencyfortress.com/dossier/#breadcrumb" }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://frequencyfortress.com/dossier/#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://frequencyfortress.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Dossier",
                  "item": "https://frequencyfortress.com/dossier"
                }
              ]
            }
          ])
        }}
      />

      <audio
        id="eddie-audio"
        ref={audioRef}
        src="/assets/eddie_santiago_de_verdad.m4a"
        preload="auto"
      />

      <EddieSigil audioRef={audioRef} />

      <div
        className="
          flex flex-col items-center justify-center text-center
          pt-12 sm:pt-16 md:pt-20
          pb-6 sm:pb-8 md:pb-10
          space-y-2
          px-4 sm:px-6 md:px-8
          font-mono
        "
      >
        <h1
          className="
            text-[20px] sm:text-[26px] md:text-[30px] lg:text-[36px]
            tracking-wide sm:tracking-wider
            text-[#4A4545]
          "
        >
          TRANSMISSION CONFIRMED.
        </h1>

        <h2
          className="
            text-[14px] sm:text-[18px] md:text-[20px] lg:text-[20px]
            tracking-wide sm:tracking-wider
            text-[#4A4545]
          "
        >
          The Frequency Fortress Phase I Dossier is now unlocked below.
        </h2>
      </div>

      <div className="flex justify-center items-center px-4 sm:px-6 md:px-8">
        <ul className="
          text-left 
          font-mono 
          space-y-2 sm:space-y-2 md:space-y-2
          mb-5 
          text-[13px] sm:text-[18px] md:text-[20px] 
          leading-snug sm:leading-normal
          max-w-full sm:max-w-[600px] md:max-w-[720px]
        ">
          <li className="text-[#4A4545] text-[14px] sm:text-[18px] md:text-[20px] pt-2">
            📎 Mission Dossier:
          </li>

          <li>
            <a
              className="
                underline decoration-transparent hover:decoration-inherit
                text-blue-500 hover:text-[#FF13F0]
                transition-all duration-200
                tracking-normal
              "
              href="https://drive.google.com/drive/folders/19ZzAELRFVmiR48h4UDKWhB8d7PB53Chu?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              📁 View Phase I Packet on Google Drive
            </a>
          </li>

          <li>
            <a
              className="underline decoration-transparent hover:decoration-inherit text-blue-500 hover:text-[#FF13F0] transition-all duration-200"
              href="https://github.com/SEALTeam69/frequencyfortress/tree/main/public/pdfs"
              target="_blank"
              rel="noopener noreferrer"
            >
              📁 View Phase I Packet on GitHub
            </a>
          </li>

          <li className="text-[#4A4545] text-[14px] sm:text-[18px] md:text-[20px] pt-4">
            📑 Additional Files:
          </li>

          <li>
            <a
              className="underline decoration-transparent hover:decoration-inherit text-blue-500 hover:text-[#FF13F0] transition-all duration-200"
              href="/pdfs/christed_override_one_pager.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              🛰️ Christed Override – One-Pager
            </a>
          </li>

          <li>
            <a
              className="underline decoration-transparent hover:decoration-inherit text-blue-500 hover:text-[#FF13F0] transition-all duration-200"
              href="/pdfs/public_mission_brief.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              🪐 Frequency Fortress: Public Mission Brief
            </a>
          </li>

          <li>
            <a
              className="underline decoration-transparent hover:decoration-inherit text-blue-500 hover:text-[#FF13F0] transition-all duration-200"
              href="/pdfs/7_christed_glossary.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              🧬 Christed Glossary
            </a>
          </li>

          <li>
            <a
              className="underline decoration-transparent hover:decoration-inherit text-blue-500 hover:text-[#FF13F0] transition-all duration-200"
              href="/pdfs/9_how_to_reach_the_commander.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              🛡️ How to Reach the Commander
            </a>
          </li>
        </ul>
      </div>

        <div className="flex flex-col justify-center items-center gap-6 px-4 sm:px-6 md:px-8 py-8">
          <img
            src="/assets/freetour_touring_ski_boots_green.jpeg"
            alt="Green Ski Boot"
            className="
              object-contain hover:stomp 
              w-50 sm:w-64 md:w-72 lg:w-80 
              transition-transform duration-300
            "
          />
          <img
            src="/assets/red_latex_thong.jpg"
            alt="Red Latex Thong"
            className="
              object-contain hover:twerk 
              w-60 sm:w-72 md:w-80 lg:w-[420px] 
              transition-transform duration-300
            "
          />
        </div>

        <div className="flex justify-center mt-2 mb-4 sm:mt-1 sm:mb-1">

          <OrgasmButton eddieAudioRef={audioRef} />

        </div>

        <div className=" flex flex-col items-center justify-center space-y-1">

          {/* Social Links */}
          <SocialLinksNeon />
          
          {/* Override Box */}
          <SexualSovereignOverride />

          {/* Megavolt Component */}
          <MegavoltBlock />

          {/* Tip of the Meme */}
          <TipOfTheMemeFooter />

        </div>

      <div className="
        relative group 
        w-full 
        max-w-[720px] 
        mx-auto 
        my-4 sm:my-6 
        px-4 py-4 
        sm:px-6 sm:py-6 
        text-center 
        font-mono 
        text-[#4A4545]
      ">
        {/* Text: fades out on hover */}
        <p className="
          relative z-10 
          text-[10px] 
          sm:text-[14px] 
          md:text-[16px] 
          tracking-wide 
          transition-opacity duration-300 
          group-hover:opacity-0
        ">
          © SEAL Team 69. All Licenses Reserved. This transmission is frequency-encoded and Source-sealed. Unauthorised duplication may trigger karmic backblast.
        </p>

        {/* Sigil: fades in on hover */}
        <img 
          src="/assets/st69_patch.png"
          alt="SEAL Team 69 - ST69 Skull Patch"
          className="
            absolute 
            top-1/2 left-1/2 
            w-20 sm:w-24 md:w-28 
            opacity-0 
            group-hover:opacity-100 
            transform -translate-x-1/2 -translate-y-1/2 
            transition-opacity duration-300 
            pointer-events-none select-none
          "
        />
      </div>

    </main>
  );
}