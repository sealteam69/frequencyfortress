'use client';

import React, { useRef, useState } from 'react';
import OrgasmButton from "@/components/orgasmbutton";
import EddieSigil from '../../components/eddiesigil';
import TipOfTheMemeFooter from "@/components/tipofthememe";
import SexualSovereignOverride from "@/components/sexualsovereignoverride";
import MegavoltBlock from '@/components/megavolt'
import Script from "next/script";
import NavBar from '@/components/navbar';
import FundingButton from '@/components/fundingbutton'
import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from '@/components/socials';

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
    <main className='relative flex-1'>

      {/* Eddie background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/assets/eddie_santiago_sigil.jpeg"
            alt="Eddie Santiago Sigil"
            className="h-auto w-[75vw] md:w-[min(75vw,70svh)] md:max-w-225 opacity-[0.25]"
              width={300}
              height={300}
          />
      </div>

    <div className="
        min-h-screen
        overflow-x-hidden
        bg-white 
        text-[#000000]  
        px-4 py-6 
        sm:px-6 
        md:px-12
      "
    >

      <audio
        id="eddie-audio"
        ref={audioRef}
        src="/assets/eddie_santiago_de_verdad.m4a"
        preload="none"
      />

      <EddieSigil audioRef={audioRef} />

      <div
        className="
          flex flex-col items-center justify-center text-center
          pt-12 sm:pt-16 md:pt-20
          relative z-10
          
        "
      >
        <h1
          className="
            text-[20px] sm:text-3xl md:text-4xl
            tracking-widest
            text-[#000000]
            font-semibold
          "
        >
          <u>TRANSMISSION INITIATED.</u>
        </h1><br/>

        <h2
          className="
            text-sm md:text-base
            tracking-wider
            text-[#000000]
            max-w-5xl
          "
        >
          <b>This is the override.</b><br/><br/> The Frequency Fortress Mission Dossier is now unlocked below.
          What you’re holding here is a sovereign planetary restoration plan — part myth, part Edenic blueprint, part transmission from the future.<br/><br/>
          If it activates something in you — <b>ACT.</b><br></br><br></br>
          Thank you for your attention to this matter.<br/><br/>
          <b>EDDIE SANTIAGO, EL PRESIDENTE OF THE EDENIC GRID.</b><br/><br/>
          
        </h2>
        <p className="text-center text-sm md:text-base italic">
          P.S. Don’t forget to tap the sigil. 
        </p>
      </div><br></br>

      <section aria-labelledby="mission-dossier-heading" className="relative z-10 -mx-4 sm:-mx-6 md:-mx-12 text-left">
        <div className="mx-auto w-full max-w-5xl px-3 md:px-5">
          <ul className="divide-y divide-gray-300 border-y border-x border-gray-300 bg-white/40 backdrop-blur-sm">
          <li>
            <p id="mission-dossier-heading" className="text-center font-bold px-3 mt-2 text-sm md:text-base tracking-wider">
              <span aria-hidden="true">💼 </span>MISSION DOSSIER
            </p>
            <p className="italic text-center text-xs md:text-sm text-gray-700 px-2 mb-2">
              Choose your format. Both are valid.
            </p>
          </li>


          <li className="px-3 py-2">
            <Link
              className="group block"
              href="/dossier/documents"
            >
              <span className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-6 text-sm md:text-base">
                <span className="min-w-0 text-blue-500 group-hover:text-[#FF13F0] decoration-transparent group-hover:decoration-inherit"><span aria-hidden="true">📁 </span>Browse Document Library</span>
                <span className="shrink-0 whitespace-nowrap text-[11px] md:text-[13px] text-gray-600">PDF</span>
              </span>
              <span className="block mt-1 text-[11px] md:text-[13px] text-gray-600">The original reading experience. Hashed file repository for secure document access and download. Poetic in its raw form – this is where it all began.</span>
            </Link>
          </li>

          <li className="px-3 py-2">
            <Link
              className="group block"
              href="/dossier/phasei"
            >
              <span className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-6 text-sm md:text-base">
                <span className="min-w-0 text-blue-500 group-hover:text-[#FF13F0] decoration-transparent group-hover:decoration-inherit"><span aria-hidden="true">📁 </span>Phase I Packet</span>
                <span className="shrink-0 whitespace-nowrap text-[11px] md:text-[13px] text-gray-600">HTML</span>
              </span>
              <span className="block mt-1 text-[11px] md:text-[13px] text-gray-600">Same exact thing... Designed for machine-readability across timelines. Tempered by hand, and forged within the field of command, using sacred HTML syntax. </span>
            </Link>
          </li>

          </ul>
        </div>
      </section>

        <div className='p-9 sm:p-12'> 
          <FundingButton />
        </div>
       

        <div className="relative z-10 flex flex-col justify-center items-center mb-3 gap-2 sm:px-6 md:px-8">
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

        <div className="flex flex-col items-center justify-center relative z-10">

          {/* Social Links */}
          <SocialIcons/>
          
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
              "Unlock classified documents for the Frequency Fortress mission. Browse Council-approved briefs, Christed infrastructure blueprints and encrypted Edenic scrolls.",
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
        className="relative group w-full max-w-[680px] mx-auto px-4 text-center text-[#4A4545] select-none mt-auto"
        role="button"
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
          className="absolute top-1/2 left-1/2 w-12 sm:w-16 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 pointer-events-none select-none group-hover:opacity-100 group-active:opacity-100 focus-within:opacity-100 focus:opacity-100"
        />
      </div>
    </div>
  );
}
