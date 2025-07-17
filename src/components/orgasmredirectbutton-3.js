'use client'

import { useRef, useEffect } from "react"

export default function OrgasmButton({ 
    label = "FINAL CUMMANDMENT", 
    redirectUrl = "/orgasm404" 
}) {
    const buttonRef = useRef(null)
    const audioRef = useRef(null)

    // 🧠 Client-side Audio init
    useEffect(() => {
        if (typeof window !== 'undefined' && !audioRef.current) {
            audioRef.current = new Audio("/assets/sacred_orgasm.mp3")
        }
    }, [])

    // 🧨 Main Click Handler
    const handleClick = () => {
        const video = document.querySelector("video")
        if (video) video.pause()

        if (audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
        }

        const key = "orgasmPressCount"
        const prev = parseInt(localStorage.getItem(key) || "0")
        const newCount = prev + 1
        localStorage.setItem(key, newCount.toString())

        setTimeout(() => {
            window.location.href = redirectUrl
        }, 1800)
    }

    return (
    <button
        ref={buttonRef}
        onClick={handleClick}
        className="
        px-6 py-3
        sm:px-6 sm:py-3
        text-[18px] sm:text-[26px] md:text-[30px]
        font-bold 
        font-['Anton'] 
        text-[#2CFF05] 
        bg-[rgb(245,0,0)]
        rounded-[18px]
        shadow-[0_0_20px_8px_#2CFF05]
        transition-transform duration-200 ease-in-out 
        hover:scale-110 
        cursor-pointer 
        whitespace-nowrap 
        border-none
        "
    >
        {label}
    </button>
    )
}