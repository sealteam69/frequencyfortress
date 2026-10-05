'use client'
import { useState } from 'react'
import WalletProvisionModule from '@/components/provisioningmodule'
import NavBar from '@/components/navbar'
import FundsProgressBar from '@/components/fundsprogressbar'
import VaultCountdownTimer from '@/components/countdowntimer'
import Image from 'next/image'
import Script from 'next/script'
import ProvisionTierBlock from '@/components/provisiontierblock'
import AboutLedgerModal from '@/components/aboutledgermodal'
import Link from "next/link";

export default function ProvisionPage() {
  const [showLedger, setShowLedger] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="w-fill flex-1 bg-white">

      {/* Eddie background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
          <Image
            src="/assets/eddie_santiago_sigil.jpeg"
            alt="Eddie Santiago Sigil"
            width={300}
            height={300}
            className="h-auto w-[75vw] md:w-[min(75vw,70svh)] md:max-w-225 opacity-[0.25]"
          />
      </div>
      
      <div className="max-w-6xl mx-auto p-3 md:p-5 text-xs md:text-sm text-black relative text-center">
        <h1 className="tracking-wide text-[22px]/6 md:text-[30px] font-bold text-center mt-13 sm:mt-19 mb-1 md:mb-2">FUND THE FORTRESS</h1>
        <h2 className="text-[13px] md:text-base max-w-3xl mx-auto">
          Access pathways for mission-aligned provisioners. Choose your frequency vector and provision Christed capital into the Vault.
        </h2><br/>

        <div className="text-black text-center">
          <VaultCountdownTimer />
        </div>

        <div className='text-sm md:text-base'>
        <p>TIME SINCE VAULT ACTIVATION (EARTH-GRID LINEAR)</p><br/>
        </div>

        <div className='text-base md:text-xl font-semibold'>
        <p>PHASE I TARGET: 6,900,000 GBP</p>
        </div>

        <section>
          <FundsProgressBar />
        </section><br/>

        <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center text-xs md:text-sm">
          <p>Eddie says: &quot;If you can read this, <strong>you&apos;re chosen.</strong> Now wire the funds.&quot;</p><br/>
          
          <p>All material provisions are made under the sovereign jurisdiction of the Edenic Grid and New Earth Command.
            Proceeds are distributed in accordance with sacred trust protocols outlined within the&nbsp;

            <Link href="/pdfs/material_transfer_protocol_phase_i.pdf" className="hover:underline text-blue-500 hover:text-[#FF13F0]">Material Transfer Protocol</Link>
            
            &nbsp;— encoded as living law to ensure alignment between divine intent and energetic flow.
          </p><br/>

          <p>
            To view how provisioned funds are distributed in full truth and integrity, consult the&nbsp;
            <Link href="/pdfs/phase_i_provisioning_and_public_transparency_statement.pdf" className="hover:underline text-blue-500 hover:text-[#FF13F0]">Phase I Provisioning Trust & Public Transparency Statement</Link>
            . This living document outlines our approach to financial clarity, energetic responsibility, and Christed economic alignment, ensuring each gift is received with reverence, not bureaucracy.
          </p><br/>
          
          <p>
            All provisioners will be recorded in the{" "} 
            <button
              onClick={() => setShowLedger(true)}
              className="underline decoration-transparent hover:decoration-inherit text-blue-500 hover:text-[#FF13F0] transition-all duration-200 cursor-pointer"
            >
              Christed Vault Ledger
            </button>{" "}
            – a sovereign record of mission-aligned flows.  
            A transparent reporting mechanism will be established once sufficient provision is received. 
            Your name will be honoured in the architecture that follows. 
            Please add a note or DM for ledger tracking. If anonymous, we bless the flow regardless.<br/><br/>
            <strong>You are not donating, you are provisioning the override.</strong>
          </p><br></br>
          <AboutLedgerModal isOpen={showLedger} onClose={() => setShowLedger(false)} />
        </div>

        <ProvisionTierBlock />

        <div className="max-w-5xl mx-auto mt-5 mb-2 grid gap-3 sm:grid-cols-2 md:grid-cols-3 z-2">
          <WalletProvisionModule
            label="BTC"
            address="bc1q6myfrvgjapvpgsvkdt6tzc5x7rlfeaa4vguj80"
          />
          <WalletProvisionModule
            label="ETH"
            address="0x7e2c66906cbc8bcc69a433c497f5847e49395850"
          />
          <WalletProvisionModule
            label="SOL"
            address="GUE8hnNqejvstDNcpuUmMzqF8idyEAhycVK7arUBBfkA"
          />
          <WalletProvisionModule
            label="XMR"
            address="89XPgEJzdWBccYzGAYG6eWExCF1UcWVn7KnXaegUs5Pc1cKxk7rced2D18FoSu8NgxG7LsY1ekdQzTv8SJGWvWrrLuFJPvX"
          />
          <WalletProvisionModule
            label="REVOLUT"
            address="https://revolut.me/andrewpletnev"
          />
          <WalletProvisionModule
            label="STRIPE"
            address="https://donate.stripe.com/4gM14ogcv2bW6nT0b2bfO00"
          />
        </div>

      </div>


      <NavBar />

      <Script
        type="application/ld+json"
        id="frequencyfortress-schema-provision"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://frequencyfortress.com/#provision",
            url: "https://frequencyfortress.com/provision",
            name: "Provisioner Access Pathways",
            description:
              "Provision Christed capital into the Christed Vault Ledger and fund the Frequency Fortress planetary restoration mission.",
            isPartOf: { "@id": "https://frequencyfortress.com/#website" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://frequencyfortress.com/" },
                { "@type": "ListItem", position: 2, name: "Provision", item: "https://frequencyfortress.com/provision" },
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
  )
}
