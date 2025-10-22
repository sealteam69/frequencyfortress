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
      text-white text-center font-bold drop-shadow-[0_0_8px_#FFFFFF]
      text-[20px] top-[40px]          
      sm:text-[22px] sm:top-[40px]     
      md:text-[26px] md:top-[50px]    
      relative
    ">
      <span className="inline-block -rotate-[6deg]">
        NAUGHTY<br/> LEVEL: {count}
        <span className="inline-block animate-wiggle ml-3">🍑</span>
      </span>
    </p>
  )
}