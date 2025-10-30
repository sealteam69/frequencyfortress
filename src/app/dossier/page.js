'use client';

import React, { useRef, useState } from 'react';
import OrgasmButton from "@/components/orgasmbutton";
import EddieSigil from '../../components/eddiesigil';
import TipOfTheMemeFooter from "@/components/tipofthememe";
import SexualSovereignOverride from "@/components/sexualsovereignoverride";
import SocialLinksNeon from "@/components/socials";
import MegavoltBlock from '@/components/megavolt'
import Script from "next/script";
import NavBar from '@/components/navbar';
import FundingButton from '@/components/fundingbutton'
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="flex flex-col min-h-screen">
    <main className='relative'>

      {/* Eddie background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/assets/eddie_santiago_sigil.jpeg"
            alt="Eddie Santiago Sigil"
            className="h-auto w-[75vw] md:w-[50vw] md:max-w-225 opacity-[0.25]"
              width={300}
              height={300}
          />
      </div>

    <div className="
        min-h-screen
        overflow-x-hidden
        bg-white 
        text-[#4A4545]  
        px-4 py-6 
        sm:px-6 
        md:px-12
 
      "
    >

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
          relative z-10
        "
      >
        <h1
          className="
            text-[20px] sm:text-[30px] md:text-[36px] 
            tracking-widest
            text-[#4A4545]
          "
        >
          TRANSMISSION CONFIRMED.
        </h1>

        <h2
          className="
            text-[14px] sm:text-[18px] md:text-[20px] 
            tracking-wider 
            text-[#4A4545]
          "
        >
          The Frequency Fortress Mission Dossier is now unlocked below.
        </h2>
      </div>

      <div className="flex justify-center items-center px-2 sm:px-6 md:px-8 relative z-10">
        <ul className="
          text-left 
          space-y-1 sm:space-y-2 
          mb-5 
          text-[14px] sm:text-[18px] md:text-[20px] 
          max-w-full sm:max-w-[600px] md:max-w-[720px]
          tracking-wider
          relative z-10
        ">
          <li className="text-[#4A4545] text-[14px] sm:text-[18px] md:text-[20px]">
            💼 Mission Dossier:
          </li>

          <li>
            <Link
              className="underline decoration-transparent hover:decoration-inherit text-blue-500 hover:text-[#FF13F0] transition-all duration-200"
              href="/dossier/phasei"
            >
              📁 View Phase I Packet
            </Link>
          </li>

          <li>
            <a
              className="underline decoration-transparent hover:decoration-inherit text-blue-500 hover:text-[#FF13F0] transition-all duration-200"
              href="https://drive.google.com/drive/folders/19ZzAELRFVmiR48h4UDKWhB8d7PB53Chu?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              📁 View Phase I Packet on Google Drive
            </a>
          </li>

          <li className="text-[#4A4545] text-[14px] sm:text-[18px] md:text-[20px] pt-4">
            📎 Additional Files:
          </li>

          <li>
            <Link
              className="underline decoration-transparent hover:decoration-inherit text-blue-500 hover:text-[#FF13F0] transition-all duration-200"
              href="/pdfs/christed_override_one_pager.pdf"
            >
              ⚠️ Christed Override – One-Pager
            </Link>
          </li>

          <li>
            <Link
              className="underline decoration-transparent hover:decoration-inherit text-blue-500 hover:text-[#FF13F0] transition-all duration-200"
              href="/pdfs/public_mission_brief.pdf"
            >
              🌎 Frequency Fortress: Public Mission Brief
            </Link>
          </li>

          <li>
            <Link
              className="underline decoration-transparent hover:decoration-inherit text-blue-500 hover:text-[#FF13F0] transition-all duration-200"
              href="/pdfs/10_temple_key_the_beloved_acknowledgement.pdf"
            >
              👑 Temple Key: The Beloved Acknowledgement
            </Link>
          </li>

          <li>
            <Link
              className="underline decoration-transparent hover:decoration-inherit text-blue-500 hover:text-[#FF13F0] transition-all duration-200"
              href="/pdfs/07_christed_glossary.pdf"
            >
              🧬 Christed Glossary
            </Link>
          </li>

        </ul>
      </div>

        <div className='p-5 sm:p-10'> 
          <FundingButton />
        </div>
       

        <div className="relative z-10 flex flex-col justify-center items-center gap-6 px-4 sm:px-6 md:px-8 py-8">
          <Image
            src="/assets/freetour_touring_ski_boots_green.png"
            alt="Green Ski Boot"
            width={300}
            height={300}
            className="
              object-contain hover:stomp 
              w-50 sm:w-64 md:w-72 lg:w-80 
              transition-transform duration-300

            "
          />
          <Image
            src="/assets/red_latex_thong.png"
            alt="Red Latex Thong"
            width={300}
            height={300}
            className="
              object-contain hover:twerk 
              w-60 sm:w-72 md:w-80 lg:w-[420px] 
              transition-transform duration-300
            "
          />
        </div>

        <div className="flex justify-center m-2 relative z-10">

          <OrgasmButton eddieAudioRef={audioRef} />

        </div>

        <div className=" flex flex-col items-center justify-center relative z-10">

          {/* Social Links */}
          <SocialLinksNeon />
          
          {/* Override Box */}
          <SexualSovereignOverride />

          {/* Megavolt Component */}
          <MegavoltBlock />

          {/* Tip of the Meme */}
          <TipOfTheMemeFooter />

        </div>

      </div>

      <NavBar />

      <Script
        type="application/ld+json"
        id="frequencyfortress-schema-dossier"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://frequencyfortress.com/#dossier",
            url: "https://frequencyfortress.com/dossier",
            name: "Dossier",
            description:
              "Unlocked Mission Documents for the Frequency Fortress Operation.",
            isPartOf: { "@id": "https://frequencyfortress.com/#website" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://frequencyfortress.com/" },
                { "@type": "ListItem", position: 2, name: "Dossier", item: "https://frequencyfortress.com/dossier" },
              ],
            },
          }),
        }}
      />

    </main>
      <div
        className="relative group w-full max-w-[720px] mx-auto px-4 py-4 text-center text-[#4A4545] select-none mt-auto"
        role="button"
        tabIndex={0}
        aria-label="ST69 Footer"
      >
        <footer
          className="relative z-10 text-[8px] sm:text-[12px] transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 focus-within:opacity-0 focus:opacity-0"
        >
          © SEAL Team 69. All Licenses Reserved. This transmission is frequency-encoded and Source-sealed. Unauthorised duplication may trigger karmic backblast.
        </footer>

        <Image
          src="/assets/st69_patch.png"
          alt="SEAL Team 69 Patch"
          width={300}
          height={300}
          className="absolute top-1/2 left-1/2 w-14 sm:w-17 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 pointer-events-none select-none group-hover:opacity-100 group-active:opacity-100 focus-within:opacity-100 focus:opacity-100"
        />
      </div>
    </div>
  );
}