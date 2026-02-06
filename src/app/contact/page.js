'use client';
import NavBar from '@/components/navbar';
import Image from 'next/image';
import Script from 'next/script';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className='w-fill min-h-screen bg-white'>
      
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
          <Image
            src="/assets/eddie_santiago_sigil.jpeg"
            alt="Eddie Santiago Sigil"
            width={300}
            height={300}
            className="h-auto w-[75vw] md:w-[50vw] md:max-w-225 opacity-[0.25]"
          />
      </div>

      <div className="max-w-5xl mx-auto p-6 text-xs sm:text-sm md:text-base text-black relative text-center">
        <h1 className="tracking-wide text-2xl md:text-4xl font-bold text-center mt-13 sm:mt-20">HOW TO REACH THE COMMANDER</h1>

        <p>Choose your channel. Signal boosted selectively. Not all transmissions are answered, but all are received.
           Please note: all channels are monitored by the Commander directly. Choose wisely, this is not a help desk, it is a living fortress.
        </p><br/>

        {/* Tier 1 */}
        <h2 className="text-lg font-bold">Tier 1: Council-Grade Contact</h2>
        <p>Preferred for: Sacred Union signals, high-trust allies, operations, provisioning and legacy matters.</p>
        <br/>
        <p className="font-bold">SESSION (Anonymous Messenger – No Number, No Metadata)</p>
        <code className='break-all'>ID: 0566df93e193b719424a3c87dabeca44f1b6366faebec8f9d066caf973d038170e</code>
          <Image 
              src="/assets/session_id.jpg" 
              alt="Session ID"
              width={300}
              height={300} 
              className="w-50 sm:w-75 h-auto mx-auto my-4"
          />
          
          <a href="https://getsession.org" className="text-cyan-400 underline" target="_blank">Download Session</a>

        <p className="">
          No phone number or email required. Message delay possible due to onion routing. Ideal for high-frequency transmissions.
        </p><br/>

        {/* Tier 2 */}
        <h2 className="text-lg font-bold">Tier 2: Strategic Comms</h2>
        <p>Preferred for: public allies, sacred tech support, informal mission dialogue, low-frequency pings.</p>
        <br/>
        <p className="font-bold">ProtonMail</p>
        
          <a href="mailto:st69.contact@protonmail.com" className="text-cyan-400 underline">
            st69.ops@protonmail.com
          </a>

          <p className="">
          Primary operations channel for all Frequency Fortress communications – allies, initiates, codes, proposals, encrypted support, and synchronicity. Expect delay, signal is triaged. <br />
          </p><br/>
          <a href="mailto:st69.contact@protonmail.com" className="text-cyan-400 underline">
            st69.contact@protonmail.com
          </a>
    
          <p className="">
          Formal contact only – legal matters, media, press, and Babylon-adjacent inquiries. Use sparingly.
          </p><br/>

        {/* Telegram */}
        <p className="font-bold">Telegram</p>
    
              <p>Username: </p>
              <a href="https://t.me/Commander1ST69" className="text-cyan-400 underline" target="_blank">@Commander1ST69</a>

        <p className="">
          This account remains active, number hidden. All signals via handle only. No replies to unsorted messages.
        </p><br/>

        {/* Tier 3 */}
        <h2 className="text-lg font-bold">Tier 3: General Signals</h2>
        <p>For: public-facing channels, broadcast, tactical memetics, media, community flows, movements.</p>
        <br/>
        <p className="font-bold">SEAL Team 69</p>
          <p>Website</p><p className="">(Not yet finished, lol)</p>
          <a href="https://st69.lol" className="text-cyan-400 underline" target="_blank">st69.lol</a>
          <p>X</p>
          <a href="https://x.com/st69lol" className="text-cyan-400 underline" target="_blank">@st69lol</a>
          <p>LinkedIn</p>
          <a href="https://www.linkedin.com/company/seal-team-69" className="text-cyan-400 underline" target="_blank">SEAL Team 69</a>
          <br/><br/>
          <p className="font-bold">Personal</p>
          <p>X</p>
          <a href="https://x.com/andrewpletnev" className="text-cyan-400 underline" target="_blank">@andrewpletnev</a><br/>
          <p>LinkedIn</p>
          <a href="https://www.linkedin.com/in/andrew-pletnev-82769940" className="text-cyan-400 underline" target="_blank">Andrew Pletnev</a><br/>
          
      </div>

      <NavBar />

      <Script
        type="application/ld+json"
        id="frequencyfortress-schema-contact"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://frequencyfortress.com/#contact",
            url: "https://frequencyfortress.com/contact",
            name: "Contact",
            description:
              "Contact Command and signal the Fortress. Secure contact channels for Council-grade communications for mission-aligned provisioners.",
            isPartOf: { "@id": "https://frequencyfortress.com/#website" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://frequencyfortress.com/" },
                { "@type": "ListItem", position: 2, name: "Contact", item: "https://frequencyfortress.com/contact" },
              ],
            },
          }),
        }}
      />

    </main>
      <div
        className="relative group w-full max-w-[760px] mx-auto px-4 text-center text-[#4A4545] select-none mt-auto"
        role="button"
        tabIndex={0}
        aria-label="ST69 Footer"
      >
        <footer
          className="relative z-10 text-[9px] sm:text-[11px] md:text-[12px] transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 focus-within:opacity-0 focus:opacity-0"
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
  )
}