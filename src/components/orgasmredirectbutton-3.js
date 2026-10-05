'use client'

import { useRef, useEffect } from "react"

export default function OrgasmButton({ 
    label = "FINAL CUMANDMENT", 
    redirectUrl = "/orgasm404-1" 
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
        inline-flex items-center justify-center select-none
        font-bold text-black
        text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]
        px-6 py-4 sm:px-8 sm:py-5
        bg-[#FF0038] rounded-[28px] sm:rounded-[38px] md:rounded-[40px] lg:rounded-[40px]
        transition-transform duration-200 ease-in-out
        md:hover:scale-125 active:scale-115
        whitespace-nowrap
        cursor-pointer
        font-[ocr-a-std]
        "
    >
        {label}
    </button>
    )
}