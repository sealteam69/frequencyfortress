'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProvisionButton() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 1, ease: 'easeOut', delay: 0.2 }
        }
      }}>
      <div className="provision-glow-container">
        <Link
          href="/provision"
          className="provision-glow-btn text-[11px] sm:text-[13px] md:text-[15px] px-7 sm:px-8 md:px-9 py-5 sm:py-6 md:py-7 rounded-[40px] sm:rounded-[40px] md:rounded-[48px]"
        >
          FUND THE FORTRESS
        </Link>
      </div>
    </motion.div>
  )
}