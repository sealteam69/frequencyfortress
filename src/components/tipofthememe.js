'use client'
import { motion } from 'framer-motion'

export default function TipOfTheMemeFooter() {
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
      }}
      className="
        w-full 
        max-w-[540px] 
        mx-auto 
        my-4 sm:my-6 
        px-4 py-4 
        sm:px-6 sm:py-6 
        text-center 
        font-['Pirata_One'] 
        text-[#00ffff] 
        rounded-[24px] 
        animate-pulse-border-bg
      "
    >
      <h2 className="
        text-[22px] 
        sm:text-[36px] 
        leading-snug 
        mb-2 
        tracking-wide 
        text-[#00ffff]
      ">
        🫵💀☝️ Tip of the Meme
      </h2>
      <p className="
        text-[16px] 
        sm:text-[24px] 
        font-bold 
        mt-1 
        tracking-wider 
        text-[#00ffff]
      ">
        Council-approved shitposting in progress...
      </p>
    </motion.div>
  )
}