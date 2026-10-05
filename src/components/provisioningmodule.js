'use client'
import { useEffect, useRef, useState } from 'react'
import { Copy } from 'lucide-react'

export default function WalletProvisionModule({ label, address }) {
  const [status, setStatus] = useState('idle')
  const resetTimer = useRef(null)
  const pending = useRef(false)
  const mounted = useRef(false)
  const manualAddress = useRef(null)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
      clearTimeout(resetTimer.current)
    }
  }, [])

  useEffect(() => {
    if (status === 'error') {
      manualAddress.current?.focus()
      manualAddress.current?.select()
    }
  }, [status])

  const handleCopy = async () => {
    if (pending.current) return
    pending.current = true
    clearTimeout(resetTimer.current)
    setStatus('copying')
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(address)
      if (!mounted.current) return
      setStatus('copied')
      resetTimer.current = setTimeout(() => setStatus('idle'), 2000)
    } catch {
      if (mounted.current) setStatus('error')
    } finally {
      pending.current = false
    }
  }

  const isRevolut = label?.toUpperCase().includes('REVOLUT')
  const isStripe = label?.toUpperCase().includes('STRIPE')
  const isLiveLink = isRevolut || isStripe

  return (
    <div className="text-sm md:text-base relative bg-black rounded-2xl p-3 transition-colors duration-200 group flex flex-wrap flex-col items-center text-center">
      <span className="tracking-wider text-[#2CFF05]">{label}</span>
      <div className={`w-full mt-1 ${isLiveLink ? '' : 'pr-10'}`}>
        {isLiveLink ? (
          <a href={address} target="_blank" rel="noopener noreferrer"
            className="block text-xs md:text-sm text-zinc-400 break-all hover:text-[#2CFF05] hover:underline transition">
            {address}
          </a>
        ) : (
          <code className="wrap-break-word block text-xs md:text-sm text-zinc-400 break-all">
            {address}
          </code>
        )}
      </div>

      {!isLiveLink && (
        <>
          <button
            type="button"
            onClick={handleCopy}
            disabled={status === 'copying'}
            className="absolute right-3 top-2 min-h-11 min-w-11 flex items-center justify-center rounded text-zinc-400 hover:text-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50"
            aria-label={`Copy ${label || 'address'} to clipboard`}
          >
            <Copy size={20} aria-hidden="true" />
          </button>
          <p role="status" className="text-xs text-[#2CFF05]">
            {status === 'copied' ? 'Copied' : status === 'copying' ? 'Copying…' : status === 'error' ? 'Could not copy automatically. Copy the address below manually.' : ''}
          </p>
          {status === 'error' && (
            <input
              ref={manualAddress}
              type="text"
              readOnly
              value={address}
              aria-label={`${label || 'Address'} — select and copy manually`}
              onFocus={(event) => event.currentTarget.select()}
              className="mt-2 w-full rounded border border-zinc-500 bg-black p- text-xs text-white focus-visible:outline-2 focus-visible:outline-white"
            />
          )}
        </>
      )}
    </div>
  )
}
