'use client'
import { motion } from 'framer-motion'

export default function SexualSovereignOverride() {
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
        px-4 py-5 
        sm:px-6 sm:py-6 
        text-center 
        uppercase 
        text-[12px] 
        sm:text-[18px] 
        tracking-wide 
        rounded-[20px] 
        sm:rounded-[24px] 
        text-[#FF46A2] 
        font-mono 
        animate-pulse-border
      "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.4, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        CLASSIFIED: SEXUAL SOVEREIGN OVERRIDE
        <br />
        Access Restricted to Christed Command Channels Only
      </motion.div>
    </motion.div>
  )
}