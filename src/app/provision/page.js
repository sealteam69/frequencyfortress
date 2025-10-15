'use client'
import WalletProvisionModule from '@/components/provisioningmodule'
import NavBar from '@/components/navbar'
import FundsProgressBar from '@/components/fundsprogressbar'
import VaultCountdownTimer from '@/components/countdowntimer'

export default function ProvisionPage() {

  return (
    <>
      <NavBar />

      <main className="w-full text-black bg-white font-mono z-0 relative">

        <div className="max-w-4xl mx-auto text-center space-y-4 p-6 mt-24">
          <h1 className="tracking-wider text-2xl sm:text-3xl font-bold">PROVISIONER ACCESS PATHWAYS</h1>
          <p className="tracking-wide text-xs md:text-lg font-bold">
            CHOOSE YOUR FREQUENCY VECTOR. PROVISION CHRISTED CAPITAL INTO THE VAULT. 
          </p>

          <div className="max-w-5xl mx-auto m-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
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
          </div>

          <div className="text-black font-bold text-center">
            <VaultCountdownTimer />
          </div>

          <section className="mt-10">
            <FundsProgressBar />
            <p className="mt-3 text-xs text-black font-mono">
              Updated automatically from Christed Vault Ledger.
            </p>
          </section>

          <div className="w-full max-w-5xl mx-auto m-6 flex flex-col items-center text-center text-sm md:text-base">
            <p>Eddie says: &quot;If you can read this, you&apos;re chosen. Now wire the funds.&quot;</p><br/>
            <p>
              All provisioners will be recorded in the Christed Vault Ledger, a sovereign record of mission-aligned flows.  
              A transparent reporting mechanism will be established once sufficient provision is received. Your name will be honoured in the architecture that follows. 
              Please add a note or DM for ledger tracking. If anonymous, we bless the flow regardless.<br/><br/>
              <strong>You are not donating, you are provisioning the override.</strong>
            </p>
          </div>

        </div>
      </main>
    </>
  )
}