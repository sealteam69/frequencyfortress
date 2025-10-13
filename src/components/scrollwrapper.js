'use client'

import { usePathname } from 'next/navigation'

export default function ScrollWrapper({ children }) {
  const pathname = usePathname()

  // Define routes that should have scroll enabled
  const enableScroll = [
    '/dossier',
    '/provision',
    '/contact',
    '/phasei',
  ]

  const scrollClass = enableScroll.includes(pathname)
    ? 'overflow-y-scroll'
    : ''

  return (
    <div className={`${scrollClass} min-h-screen`}>
      {children}
    </div>
  )
}