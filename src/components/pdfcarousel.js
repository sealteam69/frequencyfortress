// components/PDFCarousel.js
"use client"

import { useEffect, useRef, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"

const PDFCarousel = ({ files, title }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{title}</h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {files.map(({ file, title }, index) => (
            <div
              className="min-w-[300px] sm:min-w-[360px] border border-white/20 rounded-xl bg-black p-4 flex flex-col justify-between"
              key={index}
            >
              <iframe
                src={`/pdfs/${file}`}
                className="w-full h-48 sm:h-64 mb-4 rounded"
              />
              <h3 className="text-sm font-mono text-orange-400 mb-2">
                {title}
              </h3>
              <div className="flex justify-between items-center">
                <Link
                  href={`/pdfs/${file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm underline hover:text-blue-200"
                >
                  View PDF
                </Link>
                <a
                  href={`/pdfs/${file}`}
                  download
                  className="text-white text-sm underline hover:text-gray-300"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PDFCarousel