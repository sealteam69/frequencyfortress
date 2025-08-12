'use client'

import { useRef, useEffect } from "react"

export default function OrgasmButton({ 
    label = "PRESS ME HARDER", 
    redirectUrl = "/orgasm404-2" 
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
        px-5 py-3 sm:px-6 sm:py-3 md:px-6 sm:py-3 md:px-6 sm:py-3 lg:px-7 sm:py-4
        text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] 
        font-bold 
        font-['ocr-a-std'] 
        text-[#2cff05] 
        bg-[rgb(245,0,0)]
        rounded-[20px] sm:rounded-[24px] md:rounded-[24px] 
        shadow-[0_0_30px_6px_#2cff05]
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