'use client'
import React, { useEffect, useState } from 'react'

export default function FundsProgressBar() {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    // Example: fetch from JSON or API route
    fetch('/public/data/funds.json')
      .then((res) => res.json())
      .then((data) => setPercentage(data.percentage))
      .catch(() => setPercentage(0))
  }, [])

  return (
    <div className="w-full max-w-xl mx-auto text-center">
      <h3 className="text-black font-mono text-sm opacity-75 mb-2">
        {percentage}% of target received
      </h3>
      <div className="w-full h-3 bg-black rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#00C9A7] to-[#007CF0] transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}