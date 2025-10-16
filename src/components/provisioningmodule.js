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

  const isRevolut = label === 'REVOLUT'

  return (
    <div className="text-sm md:text-base relative bg-zinc-800 rounded-xl p-3 transition-colors duration-200 group hover:bg-zinc-600">
      {/* content gets extra right padding so the icon has room */}
      <div className="space-y-1 pr-8">
        <span className="tracking-wider text-[#2CFF05]">{label}</span>
        {isRevolut ? (
          <a
            href={address}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs md:text-sm text-zinc-400 break-all hover:text-cyan-400 hover:underline transition-colors duration-200"
          >
            {address}
          </a>
        ) : (
          <code className="block text-xs md:text-sm text-zinc-400 break-all">
            {address}
          </code>
        )}
      </div>

      {/* copy button is centered against the OUTER container */}
      <button
        onClick={handleCopy}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded"
        aria-label="Copy to clipboard"
      >
        {copied ? <span className="text-sm text-cyan-400">Copied</span> : <Copy size={20} />}
      </button>
    </div>
  )
}