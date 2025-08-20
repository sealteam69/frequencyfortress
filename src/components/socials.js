"use client"

import React from "react"
import { motion } from "framer-motion"

const socials = [
  { label: "X", url: "https://x.com/st69lol" },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/seal-team-69/" },
  { label: "Google Drive", url: "https://drive.google.com/drive/folders/19ZzAELRFVmiR48h4UDKWhB8d7PB53Chu?usp=sharing" },
  { label: "GitHub", url: "https://github.com/SEALTeam69/frequencyfortress" },
]

export default function SocialLinksNeon() {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-3 pt-6 pb-6 sm:gap-5 sm:pt-10 sm:pb-6 ">
      {socials.map((social, i) => (
        <motion.a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: i * 0.15,
            ease: "easeOut",
          }}
          className={`
            glyph-glitch
            font-pressstart relative inline-block text-center
            px-4 py-3 sm:px-6 sm:py-4
            tracking-[-0.1em]
            text-[10.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] 
            border border-[#FF5C00] text-[#FF5C00] bg-white/5 backdrop-blur-sm
            rounded-[24px] sm:rounded-[30px]
            shadow-[0_0_6px_#FF5C00]
            hover:shadow-[0_0_16px_#FF5C00,0_0_24px_#FF5C00]
            transition-all duration-300 ease-in-out
            before:content-[''] before:absolute before:inset-0 before:rounded-[18px]
            before:border before:border-[#FF5C00]/40 before:blur-md before:opacity-60 before:z-10
            hover:scale-[1.1]
            active:scale-95
            active:shadow-[0_0_16px_#FF5C00,0_0_24px_#FF5C00]
            touch-manipulation   
            `}
          onTouchStart={() => {}}   /* <- iOS quirk: ensures :active reliably fires */
        >
          {social.label}
        </motion.a>
      ))}
    </div>
  )
}