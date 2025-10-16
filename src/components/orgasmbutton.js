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
        font-bold text-black
        text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]
        px-6 py-4 sm:px-8 sm:py-5
        bg-[#FF0038] rounded-[28px] sm:rounded-[32px] lg:rounded-[36px]
        transition-transform duration-200 ease-in-out
        md:hover:scale-125 active:scale-115
        whitespace-nowrap
        cursor-pointer
      "
    >
      DO NOT PRESS
    </button>
  )
}