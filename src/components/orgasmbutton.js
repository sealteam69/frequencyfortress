'use client'

import { useRef, useEffect, useCallback } from 'react'

export default function OrgasmButton({ eddieAudioRef }) {
  const orgasmAudioRef = useRef(null)

  // Preload audio element once
  useEffect(() => {
    orgasmAudioRef.current = new Audio('/assets/sacred_orgasm.mp3')
    // iOS tip: ensure it only plays on a user gesture (our onClick provides that)
  }, [])

  const handleActivate = useCallback(async () => {
    // Stop Eddie if playing
    try {
      if (eddieAudioRef?.current) {
        eddieAudioRef.current.pause()
        eddieAudioRef.current.currentTime = 0
      }
    } catch {}

    // Play the sacred sound
    try {
      if (orgasmAudioRef.current) {
        orgasmAudioRef.current.currentTime = 0
        await orgasmAudioRef.current.play() // may reject on some browsers
      }
    } catch {
      // ignore autoplay errors; redirect still proceeds
    }

    // Redirect after a short ritual delay
    setTimeout(() => {
      window.location.href = '/orgasm404'
    }, 1800)
  }, [eddieAudioRef])

  // Keyboard: Space/Enter should activate
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleActivate()
    }
  }

  return (
    <button
      type="button"
      aria-label="Do not press (Council says press)"
      onClick={handleActivate}
      onKeyDown={onKeyDown}
      style={{ fontFamily: 'ocr-a-std' }}
      className="
        inline-flex items-center justify-center select-none
        font-bold text-white
        /* Responsive text sizes */
        text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]
        /* Unified padding (no duplicates) */
        px-6 py-4 sm:px-8 sm:py-5
        /* Visuals */
        bg-[#FF0038] rounded-[18px] sm:rounded-[24px] shadow-lg
        transition-transform duration-200 ease-in-out
        /* Desktop hover, mobile/keyboard press */
        md:hover:scale-125 active:scale-115
        /* Focus ring for a11y */
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF0038]/60 focus-visible:ring-offset-black
        whitespace-nowrap
        cursor-pointer
      "
    >
      DO NOT PRESS
    </button>
  )
}