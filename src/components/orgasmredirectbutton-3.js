'use client'

import { useRef, useEffect } from "react"

export default function OrgasmButton({ 
    label = "FINAL CUMANDMENT", 
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
        px-6 py-4 sm:px-8 sm:py-5
        text-[18px] sm:text-[22px] md:text-[26px] 
        font-['ocr-a-std'] 
        text-[#2cff05] 
        bg-[rgb(245,0,0)]
        rounded-[28px] sm:rounded-[32px] lg:rounded-[36px]
        shadow-[0_0_0_0px_#2cff05]
        transition-transform duration-200 ease-in-out 
        hover:scale-110 
        cursor-pointer 
        whitespace-nowrap 
        "
    >
        {label}
    </button>
    )
}