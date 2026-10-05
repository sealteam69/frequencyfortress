'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function ProvisionButton() {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(false)
  // Hover border: adjust these values to tune the finishing touch.
  const borderWidth = 1.7 // pixels
  const edgeSoftness = 2.2 // blur in pixels; higher = more blended
  const edgeIntensity = 1.4 // brightness multiplier; 1 = normal
  const borderDuration = 0.8 // hover fade in/out, in seconds
  const hoverGlowSize = 95 // outer glow blur in pixels; higher = wider
  const hoverGlowSpread = 7 // extra outward reach in pixels
  const buttonColor = '#000000'
  const hoverGlow = '#3074eb'
  const borderColor = '#3074eb'
  const borderHighlight = '#3074eb'

  // Mask keeps the hover gradient on the edge of the button.
  const borderStyle = {
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    padding: borderWidth,
    pointerEvents: 'none',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  }


  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: reduceMotion ? 0.2 : 1, ease: 'easeOut', delay: 0.2 }
        }
      }}>
      <div className="provision-glow-container">
          <Link
            href="/provision"
            className="provision-glow-btn text-[11.5px] sm:text-[13px] md:text-[15px] px-7 sm:px-8 md:px-9 py-5 sm:py-6 md:py-7 rounded-[40px] sm:rounded-[40px] md:rounded-[48px]"
            style={{ position: 'relative', background: buttonColor, isolation: 'isolate' }}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={(event) => setActive(event.currentTarget === document.activeElement)}
            onFocus={() => setActive(true)}
            onBlur={(event) => setActive(event.currentTarget.matches(':hover'))}
          >
            <motion.span
              aria-hidden="true"
              style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none', zIndex: -1 }}
              animate={{ boxShadow: active
                ? `0 0 30px ${hoverGlow}80, 0 0 ${hoverGlowSize}px ${hoverGlowSpread}px ${hoverGlow}55, inset 0 0 25px ${hoverGlow}25`
                : `0 0 0px ${hoverGlow}00, 0 0 0px 0px ${hoverGlow}00, inset 0 0 0px ${hoverGlow}00` }}
              transition={{ duration: reduceMotion ? 0 : 0.45 }}
            />
            {/* Blur the wrapper AFTER its children are masked, softening the edge itself. */}
            <span aria-hidden="true" style={{
              position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
              filter: `blur(${edgeSoftness}px) brightness(${edgeIntensity})`,
            }}>
            <motion.span
              key="full-border"
              aria-hidden="true"
              style={{
                ...borderStyle,
                backgroundImage: `linear-gradient(135deg, ${borderHighlight}, ${borderColor})`,
              }}
              initial={false}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : borderDuration, ease: 'easeInOut' }}
            />
            </span>
            <span style={{ position: 'relative' }}>FUND THE FORTRESS</span>
          </Link>
      </div>
    </motion.div>
  )
}
