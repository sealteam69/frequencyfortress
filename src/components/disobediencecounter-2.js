'use client'
import { useEffect, useState } from "react"

export default function DisobedienceCounter({ counterKey = "orgasmPressCount" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const stored = localStorage.getItem(counterKey)
    const pressCount = stored ? parseInt(stored) : 0
    setCount(pressCount)
  }, [counterKey])

  return (
    <p className="
      font-['DynaPuff']
      text-white text-center font-medium tracking-wide drop-shadow-[0_0_6px_#FFFFFF]
      
      text-[20px] top-[40px]            // xs: 0–639px
      sm:text-[22px] sm:top-[40px]     // sm: 640–767px
      md:text-[24px] md:top-[50px]     // md: 768–1023px
      lg:text-[26px] lg:top-[50px]     // lg: 1024–1279px
      xl:text-[26px] xl:top-[50px]     // xl: 1280–1535px

      relative
    ">
      <span className="inline-block -rotate-[5deg]">
        Naughty Level: {count}
        <span className="inline-block animate-wiggle ml-2">🍑</span>
      </span>
    </p>
  )
}