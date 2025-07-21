'use client';
import { useState } from 'react';

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
    <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 md:mt-12">
        <div className="sigil-wrapper relative overflow-visible" onClick={playEddie}>
        <img
        src="/assets/eddie_santiago_sigil.jpeg"
        alt="Eddie Santiago Sigil"
        className="
            sigil-animation cursor-pointer hover:scale-75 transition-transform
            w-[240px] sm:w-[320px] md:w-[400px] lg:w-[460px]
        "
        />

            <div className="
            font-pirata 
            sigil-hover-text 
            uppercase 
            text-center 
            drop-shadow-md 
            text-[#ff00ff]
            text-[14px] sm:text-[20px] md:text-[24px] lg:text-[28px]
            tracking-normal sm:tracking-wide md:tracking-wider lg:tracking-widest
            ">
            Tap the Sigil. Feel the Pulse.
            </div>

        <div className="glitter-overlay absolute inset-0 pointer-events-none" />
        </div>
    </div>
    );
}
