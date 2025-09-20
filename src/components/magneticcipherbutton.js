'use client'

import * as React from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'

export function MagneticCipherButton() {
  const [text, setText] = React.useState("ENTER THE DOSSIER")
  const original = "ENTER THE DOSSIER"
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const router = useRouter()
  const pathname = usePathname()
  const [prevPath, setPrevPath] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  // Track last path for HUD reset
  React.useEffect(() => {
    setPrevPath((prev) => (prev !== pathname ? pathname : prev))
  }, [pathname])

  React.useEffect(() => {
    if (pathname === '/' && prevPath && prevPath !== '/') {
      setLoading(false)
    }
  }, [pathname, prevPath])

  // Scramble text effect
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

  // Magnetism effect (shared for mouse + touch)
  const applyMagnetism = (target, clientX, clientY) => {
    const rect = target.getBoundingClientRect()
    const xVal = clientX - rect.left - rect.width / 2
    const yVal = clientY - rect.top - rect.height / 2
    x.set(xVal)
    y.set(yVal)
    target.style.transform = `translate(${xVal * 0.3}px, ${yVal * 0.3}px)`
  }

  const resetMagnetism = (target) => {
    x.set(0)
    y.set(0)
    target.style.transform = `translate(0px, 0px)`
  }

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      router.push('/dossier')
    }, 3300)
  }

  return (
    <>
      {/* HUD Overlay */}
      {loading && (
        <>
          <div className="white-flash" />
          <div className="transition-overlay crt font-bold text-center uppercase text-[#FF13F0] flex flex-col gap-4">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.4, 1] }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="font-bold text-[25px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-[#CCCCFF]"
              style={{ fontFamily: 'Sofia Sans Semi Condensed' }}
            >
              CLASSIFIED ACCESS GRANTED
            </motion.div>

            <div
              className="text-[13.5px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#FF13F0] tracking-wider font-bold"
              style={{ fontFamily: 'ocr-a-std, monospace' }}
            >
              DECRYPTING<span className="dotCycle"></span>
            </div>

            <div className="w-[160px] sm:w-[220px] md:w-[260px] lg:w-[320px] xl:w-[360px] h-2 bg-[#1a1a2a] rounded-md overflow-hidden mx-auto">
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

      {/* Cipher Button */}
      <motion.button
        type="button"
        aria-label="Open the Frequency Fortress Dossier"
        onClick={handleClick}
        onMouseEnter={scramble}
        onTouchStart={scramble}
        onMouseMove={(e) => applyMagnetism(e.currentTarget, e.clientX, e.clientY)}
        onTouchMove={(e) => {
          const touch = e.touches[0]
          if (touch) applyMagnetism(e.currentTarget, touch.clientX, touch.clientY)
        }}
        onMouseLeave={(e) => resetMagnetism(e.currentTarget)}
        onTouchEnd={(e) => resetMagnetism(e.currentTarget)}
        className="
          bg-transparent border-2 border-[#0014A8] text-[#0014A8]
          uppercase font-bold tracking-widest font-mono cursor-pointer 
          transition-transform duration-200 ease-out hover:scale-105

          text-[14px] px-4 py-3 mt-5      
          sm:text-[14px] sm:px-4 sm:py-3 sm:mt-0
          md:text-[14px] md:px-4 md:py-3 
          lg:text-[18px] lg:px-5 lg:py-3 
          xl:text-[18px] xl:px-5 xl:py-3 
        "
      >
        {text}
      </motion.button>

      {/* Dot Cycle */}
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