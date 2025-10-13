'use client';
import NavBar from '@/components/navbar';

export default function ContactPage() {
  return (
    <main className='w-fill min-h-screen bg-white'>
      <div className="max-w-3xl mx-auto p-6 text-xs sm:text-sm md:text-base text-black font-mono">
        <h1 className="tracking-wider text-2xl md:text-3xl font-bold text-center">HOW TO REACH THE COMMANDER</h1><br/>

        {/* Tier 1 */}
        <h2 className="text-xl font-bold">Tier 1: Council-Grade Contact</h2>
        <p>Preferred for:</p>
        <ul className="list-disc list-inside">
          <li>Sacred Union signals</li>
          <li>High-trust allies</li>
          <li>Operations, investments, & legacy matters</li>
        </ul><br/>
        <p className="font-bold">SESSION (Anonymous Messenger – No Number, No Metadata)</p>
        <code className='break-all'>ID: 0566df93e193b719424a3c87dabeca44f1b6366faebec8f9d066caf973d038170e</code>
          <img 
              src="/assets/session_id.jpg" 
              alt="Session ID" 
              className="w-50 sm:w-75 h-auto mx-auto my-4"
          />
          
          <a href="https://getsession.org" className="text-cyan-400 underline" target="_blank">Download Session</a>

        <p className="">
          No phone number or email required. Message delay possible due to onion routing. Ideal for high-frequency transmissions.
        </p><br/>

        {/* Tier 2 */}
        <h2 className="text-xl font-bold">Tier 2: Strategic Comms</h2>
        <p>Preferred for:</p>
        <ul className="list-disc list-inside">
          <li>Public allies, sacred tech support</li>
          <li>Informal mission dialogue, async updates, low-frequency pings</li>
        </ul>
        <br/>
        <p className="font-bold">ProtonMail</p>
        
          <a href="mailto:st69.contact@protonmail.com" className="text-cyan-400 underline">
            st69.ops@protonmail.com
          </a>

          <p className="">
          Primary operations channel for all Frequency Fortress communications – allies, initiates, codes, proposals, encrypted support, and synchronicity. Expect delay; signal is triaged. <br />
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
        <h2 className="text-xl font-bold">Tier 3: General Signals</h2>
        <p>For:</p>
        <ul className="list-disc list-inside">
          <li>Public broadcast</li>
          <li>Tactical memetics</li>
          <li>Media, community flows, movements</li>
        </ul>
        <br/>
        <p className="font-bold">SEAL Team 69</p>
          <p>Website</p><p className="">(Not yet finished, lol)</p>
          <a href="https://st69.lol" className="text-cyan-400 underline" target="_blank">st69.lol</a>
          <p>X</p>
          <a href="https://x.com/st69lol" className="text-cyan-400 underline" target="_blank">@st69lol</a>
          <p>LinkedIn</p>
          <a href="https://linkedin.com/company/sealteam69" className="text-cyan-400 underline" target="_blank">SEAL Team 69</a>
          <br/><br/>
          <p className="font-bold">Personal</p>
          <p>X</p>
          <a href="https://x.com/andrewpletnev" className="text-cyan-400 underline" target="_blank">@andrewpletnev</a><br/>
          <p>LinkedIn</p>

          <a href="https://linkedin.com/in/andrewpletnev" className="text-cyan-400 underline" target="_blank">Andrew Pletnev</a><br/>
          <br/>
          <div className=" pb-10">
          <p>Public-facing channels.</p><br/>
          <p>Signal boosted selectively. Note: All channels are monitored by the Commander directly. Choose wisely. This is not a help desk, it is a living fortress.</p>
          </div>
      </div>
        
      <NavBar />

    </main>
  )
}