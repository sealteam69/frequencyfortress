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
      text-[18px]/3.75
      sm:text-[22px]/4.5
      lg:text-[26px]/5
      relative
    ">
      <span className="inline-block -rotate-6">
        NAUGHTY<br></br> 
        LEVEL: {count}
        <span className="inline-block animate-wiggle ml-3">🍑</span>
      </span>
    </p>
  )
}