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
    <div className="bg-zinc-700 rounded-xl p-4 transition-colors duration-200 group hover:bg-zinc-600">
      <div className="flex flex-col space-y-2 sm:space-y-1">
        <span className="text-sm font-bold text-zinc-300">{label}</span>
        {isRevolut ? (
          <a
            href={address}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-cyan-400 hover:underline break-all"
          >
            {address}
          </a>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <code className="text-sm text-zinc-400 break-all">{address}</code>
            <button
              onClick={handleCopy}
              className="text-zinc-400 hover:text-cyan-400"
              aria-label="Copy to clipboard"
            >
              {copied ? (
                <span className="text-xs text-cyan-400">Copied</span>
              ) : (
                <Copy size={20} />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}