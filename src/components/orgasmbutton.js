'use client'
import { useRef, useEffect } from "react"

export default function OrgasmButton({ eddieAudioRef }) {
    const buttonRef = useRef(null)
    const orgasmAudioRef = useRef(null)

    useEffect(() => {
        orgasmAudioRef.current = new Audio("/assets/sacred_orgasm.mp3")

        const handleClick = () => {
            if (eddieAudioRef?.current) {
                eddieAudioRef.current.pause()
                eddieAudioRef.current.currentTime = 0
            }
            if (orgasmAudioRef.current) {
                orgasmAudioRef.current.currentTime = 0
                orgasmAudioRef.current.play()
            }
            setTimeout(() => {
                window.location.href = "/orgasm404"
            }, 1800)
        }

        const btn = buttonRef.current
        btn?.addEventListener("click", handleClick)

        return () => btn?.removeEventListener("click", handleClick)
    }, [eddieAudioRef])

    return (
        <button
        ref={buttonRef}
        style={{ fontFamily: "ocr-a-std" }}
        className="
            text-white 
            text-[14px] sm:text-[20px] md:text-[24px] lg:text-[24px]
            px-6 py-3
            sm:px-6 sm:py-3
            bg-[#FF0038] 
            px-5 py-2 sm:px-7 sm:py-4 md:px-7 md:py-4
            rounded-[14px] sm:rounded-[16px] md:rounded-[18px] 
            shadow-lg 
            transition-transform duration-200 ease-in-out 
            hover:scale-110 
            cursor-pointer
            items-center
            whitespace-nowrap 
            font-bold 
        "
        >
        DO NOT PRESS
        </button>
    )
}