"use client";

import React from "react";
import { motion } from "framer-motion";

const socials = [
  { name: "Twitter", url: "https://x.com/st69lol", mask: "x-twitter-brands-solid.svg" },
  { name: "Facebook", url: "https://www.facebook.com/st69lol", mask: "facebook-brands-solid.svg" },
  { name: "TikTok", url: "https://www.tiktok.com/@st69lol", mask: "tiktok-brands-solid.svg" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/seal-team-69", mask: "linkedin-brands-solid.svg" },
  { name: "Instagram", url: "https://www.instagram.com/st69lol/", mask: "instagram-brands-solid.svg" },
  { name: "YouTube", url: "https://www.youtube.com/@st69lol", mask: "youtube-brands-solid.svg" },
  { name: "GitHub", url: "https://github.com/sealteam69/frequencyfortress", mask: "github-brands-solid.svg" },
];

export default function SocialIcons() {
  return (
    <div className="grid grid-cols-7 gap-12 sm:gap-5 justify-items-center p-5 sm:p-6">
      {socials.map((social, i) => (
        <motion.a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: [0.17, 0.67, 0.83, 0.67] }}
          className="group rounded-full p-2.5 sm:p-3 bg-black/20 shadow-neon hover:scale-110 transition-all duration-300 ease-in-out w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center"
          title={social.name}
        >
          {/* Normal icon (default visible) */}
          <img
            src={`/icons/${social.mask}`}
            alt={social.name}
            className="w-8 h-8 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-opacity duration-300 group-hover:opacity-0"
          />

          {/* Sigil mask on hover */}
          <div
            className="absolute w-8 h-8 sm:w-8 sm:h-8 md:w-9 md:h-9 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundImage: "url('/assets/eddie_santiago_sigil.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitMaskImage: `url(/icons/${social.mask})`,
              maskImage: `url(/icons/${social.mask})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </motion.a>
      ))}
    </div>
  );
}