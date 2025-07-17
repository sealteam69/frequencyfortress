'use client'

import * as React from 'react'
import { motion, useMotionValue } from 'framer-motion'

export function MagneticCipherButton() {
  const [text, setText] = React.useState("ENTER THE DOSSIER")
  const [loading, setLoading] = React.useState(false)
  const original = "ENTER THE DOSSIER"
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const [isLargeScreen, setIsLargeScreen] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateSize = () => {
        setIsLargeScreen(window.innerWidth >= 1024) // Tailwind lg
      }
      updateSize()
      window.addEventListener('resize', updateSize)
      return () => window.removeEventListener('resize', updateSize)
    }
  }, [])

  const scramble = () => {
    const interval = setInterval(() => {
      setText(
        original
          .split("")
          .map((c) => (c === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
          .join("")
      )
    }, 50)

    setTimeout(() => {
      clearInterval(interval)
      setText(original)
    }, 500)
  }

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      window.location.href = "/dossier"
    }, 3300)
  }

  return (
    <>
      {/* CLASSIFIED HUD OVERLAY */}
      {loading && (
        <>
          <div className="white-flash" />

          <div className="transition-overlay crt font-bold text-center uppercase text-[#FF13F0] flex flex-col gap-4 tracking-[0.1em]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.4, 1] }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="text-[18px] sm:text-[28px] lg:text-[32px] text-pink-500 glow aberration"
              style={{ fontFamily: 'Arial' }}
            >
              CLASSIFIED ACCESS GRANTED
            </motion.div>

            <div className="text-[12px] sm:text-[18px] font-bold glow text-[#ff00ff] tracking-wider"
                 style={{ fontFamily: 'ocr-a-std, monospace' }}
            >
              DECRYPTING<span className="dotCycle"></span>
            </div>

            <div className="w-[160px] sm:w-[200px] md:w-[260px] lg:w-[320px] h-2 bg-[#1a1a2a] rounded-md overflow-hidden mx-auto">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.8, ease: "easeInOut" }}
                className="h-full bg-[#ff00ff] rounded-md"
              />
            </div>
          </div>
        </>
      )}

      {/* CIPHER BUTTON */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={scramble}
        onMouseMove={(e) => {
          if (!isLargeScreen) return
          const rect = e.currentTarget.getBoundingClientRect()
          const xVal = e.clientX - rect.left - rect.width / 2
          const yVal = e.clientY - rect.top - rect.height / 2
          x.set(xVal)
          y.set(yVal)
          e.currentTarget.style.transform = `translate(${xVal * 0.3}px, ${yVal * 0.3}px)`
        }}
        onMouseLeave={(e) => {
          if (!isLargeScreen) return
          x.set(0)
          y.set(0)
          e.currentTarget.style.transform = `translate(0px, 0px)`
        }}
        className="bg-transparent border-2 border-[#0014A8] text-[#0014A8] text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] px-4 sm:px-6 py-2 sm:py-3 font-bold tracking-widest font-mono uppercase transition-transform duration-200 ease-out cursor-pointer hover:scale-105"
      >
        {text}
      </motion.button>

      {/* Dot Cycle Animation */}
      <style>
        {`
          .dotCycle::after {
            content: '';
            display: inline-block;
            animation: dots 1.2s steps(3, end) infinite;
          }
          @keyframes dots {
            0% { content: ''; }
            33% { content: '.'; }
            66% { content: '..'; }
            100% { content: '...'; }
          }
        `}
      </style>
    </>
  )
}