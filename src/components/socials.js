import * as React from "react"
import { motion } from "framer-motion"
import { honk } from "@/fonts"

export function SocialLinksNeon() {
  const socials = [
    { label: "X", url: "https://x.com/st69lol" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/seal-team-69/",
    },
    {
      label: "Google Drive",
      url: "https://drive.google.com/drive/folders/19ZzAELRFVmiR48h4UDKWhB8d7PB53Chu?usp=sharing",
    },
    {
      label: "GitHub",
      url: "https://github.com/SEALTeam69/frequencyfortress",
    },
  ]

  return (
    <motion.div className="w-full flex flex-wrap justify-center items-center gap-4 py-2 my-2 sm:gap-4 sm:py-6 sm:my-6">
      {socials.map((social, i) => (
        <motion.a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ boxShadow: "0 0 10px #FF5C00" }}
          animate={{
            boxShadow: [
              "0 0 4px #FF5C00",
              "0 0 24px #FF5C00",
              "0 0 4px #FF5C00",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.1,
            y: -3,
            boxShadow: "0 0 24px #FF5C00, 0 0 48px #FF5C00",
          }}
          className={`${honk.className} blocky-glow 
            text-transparent !text-transparent
            px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 
            text-[18px] sm:text-[26px] md:text-[28px] lg:text-[32px]
            rounded-[16px] sm:rounded-[20px] md:rounded-[24px]
            bg-transparent 
            uppercase 
            tracking-wide sm:tracking-wider md:tracking-widest 
            backdrop-blur-sm 
            hover:scale-110 
            transition-transform duration-300`}
        >
          {social.label}
        </motion.a>
      ))}
    </motion.div>
  )
}