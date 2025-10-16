'use client'
import { useEffect, useState } from 'react'

export default function VaultCountdownTimer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const launchDate = new Date('2025-07-07T06:00:00Z') // 07:00 BST

    const update = () => {
      const now = new Date()
      const diff = Math.floor((now.getTime() - launchDate.getTime()) / 1000)

      const days = Math.floor(diff / (60 * 60 * 24))
      const hours = Math.floor((diff % (60 * 60 * 24)) / 3600)
      const minutes = Math.floor((diff % 3600) / 60)
      const seconds = diff % 60

      setTime({ days, hours, minutes, seconds })
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="countdown text-xl md:text-3xl">
      {time.days}d {time.hours}h {time.minutes}m {time.seconds}s
    </span>
  )
}