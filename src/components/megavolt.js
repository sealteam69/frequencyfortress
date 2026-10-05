'use client'
import { motion } from 'framer-motion'

export default function MegavoltBlock() {
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
        my-3.5 sm:my-5
        px-3 py-3 
        sm:px-6 sm:py-6 
        bg-black 
        shadow-[0_0_25px_#FF0] 
        text-center
      "
    >
      <p className="
        text-[19px] 
        sm:text-[28px] 
        md:text-[32px]
        uppercase 
        font-megavolt 
        text-yellow-400 
        leading-tight 
        tracking-wider
        max-w-[300px] 
        sm:max-w-[440px]
        md:max-w-[500px]
        mx-auto 
      ">
        ⚡ Unleash the Frequency ⚡
      </p>

      <p className="
        text-[9.5px] 
        sm:text-[12.5px] 
        md:text-[14px]
        mt-3 
        text-yellow-300 
        font-mono 
        tracking-tight
      ">
        This node is powered by Source code and sacred rage.
      </p>
    </motion.div>
  )
}