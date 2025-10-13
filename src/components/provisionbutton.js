'use client'

import Link from 'next/link'

export default function ProvisionButton() {
  return (
    <div className="provision-glow-container">
      <Link
        href="/provision"
        className="provision-glow-btn text-sm md:text-xl"
      >
        FUND THE FORTRESS
      </Link>
    </div>
  )
}