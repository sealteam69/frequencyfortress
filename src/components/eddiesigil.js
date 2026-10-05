'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function EddieSigil({ audioRef }) {
    const [transmissionActive, setTransmissionActive] = useState(false);

    const playEddie = () => {
    if (audioRef?.current) {
        audioRef.current.volume = 1.0;
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(err => {
        console.error('Playback failed:', err);
        });
        setTransmissionActive(true);
    }
    };

 return (
    <div className="flex flex-col items-center justify-center mt-17 sm:mt-22 md:mt-28 lg:mt-30">
        <div className="sigil-wrapper relative overflow-visible" onClick={playEddie}>
        <Image
        src="/assets/eddie_santiago_sigil.jpeg"
        alt="Eddie Santiago Sigil"
        width={300}
        height={300}
        className="
            sigil-animation cursor-pointer hover:scale-75 transition-transform
            w-60 sm:w-[320px] md:w-[400px] lg:w-[460px]
        "
        />

            <div className="
            sigil-hover-text 
            text-center 
            drop-shadow-md 
            text-[#ff00ff]
            text-[22px]/6 sm:text-[24px]/7 md:text-[30px]/9 lg:text-[34px]/10
            tracking-normal 
            ">
            Tap the Sigil.<br></br> 
            Feel the Pulse.
            </div>

        <div className="glitter-overlay absolute inset-0 pointer-events-none" />
        </div>
    </div>
    );
}
