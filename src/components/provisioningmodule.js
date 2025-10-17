'use client'
import { useState } from 'react'
import { Copy } from 'lucide-react'

export default function WalletProvisionModule({ label, address }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // detect provider type
  const isRevolut = label?.toUpperCase().includes('REVOLUT')
  const isStripe = label?.toUpperCase().includes('STRIPE')
  const isLiveLink = isRevolut || isStripe

  return (
    <div className="text-sm md:text-base relative bg-black rounded-xl p-3 transition-colors duration-200 group">
      <div className="space-y-1 pr-6">
        <span className="tracking-wider text-[#2CFF05]">{label}</span>

        {isLiveLink ? (
          <a
            href={address}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs md:text-sm text-zinc-400 break-all hover:text-cyan-300 hover:underline transition"
          >
            {address}
          </a>
        ) : (
          <code className="block text-xs md:text-sm text-zinc-400 break-all">
            {address}
          </code>
        )}
      </div>

      {/* Copy button appears only when NOT Revolut/Stripe */}
      {!isLiveLink && (
        <button
          onClick={handleCopy}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-cyan-300 focus-visible:outline-none"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <span className="text-sm text-cyan-400">Copied</span>
          ) : (
            <Copy size={20} />
          )}
        </button>
      )}
    </div>
  )
}