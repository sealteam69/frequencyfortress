'use client'

import Link from 'next/link'

export default function ProvisionButton() {
  return (
    <div className="provision-glow-container">
      <Link
        href="/provision"
        className="provision-glow-btn text-xs sm:text-sm md:text-base lg:text-lg px-6 sm:px-7 md:px-9 py-5 sm:py-6 md:py-7 rounded-[40px] md:rounded-[40px] lg:rounded-[44px]"
      >
        FUND THE FORTRESS
      </Link>
    </div>
  )
}