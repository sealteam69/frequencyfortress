'use client'
import React, { useEffect, useState } from 'react'

export default function FundsProgressBar() {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    // Example: fetch from JSON or API route
    fetch('/data/funds.json')
      .then((res) => res.json())
      .then((data) => setPercentage(data.percentage))
      .catch(() => setPercentage(0))
  }, [])

  return (
    <div className="w-full max-w-lg mx-auto text-center flex flex-col justify-center">
      <div className="w-full h-2 bg-black rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-[#00C9A7] to-[#007CF0] transition-all duration-700"
          style={{ width: `${0.001}%` }}
        />
      </div>
      <p className="text-black text-sm sm:text-base">
        {0.001}% OF TARGET RECEIVED [Updated automatically from the Christed Vault Ledger]</p>
    </div>
  )
}