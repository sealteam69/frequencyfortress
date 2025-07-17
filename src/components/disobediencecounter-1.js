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
      text-[16px] sm:text-[22px] md:text-[26px] 
      text-white 
      font-medium 
      mt-4 
      text-center 
      tracking-wide 
      drop-shadow-[0_0_6px_#FFFFFF]
    ">
      <span className="inline-block -rotate-[5deg]">
        Naughty Level: {count}
        <span className="inline-block animate-wiggle ml-2">🍑</span>
      </span>
    </p>
  )
}