"use client"

import React from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faGoogleDrive,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { icon: faXTwitter, url: "https://x.com/st69lol", label: "X" },
  { icon: faLinkedin, url: "https://www.linkedin.com/company/seal-team-69/", label: "LinkedIn" },
  { icon: faGoogleDrive, url: "https://drive.google.com/drive/folders/19ZzAELRFVmiR48h4UDKWhB8d7PB53Chu?usp=sharing", label: "Google Drive" },
  { icon: faGithub, url: "https://github.com/sealteam69/frequencyfortress", label: "GitHub" },
];

export default function SocialIcons() {
  return (
    <div className="flex justify-center items-center gap-12 p-8 ">
      {socials.map((social, i) => (
        <motion.a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: i * 0.15,
            ease: "easeOut",
          }}
          className="glyph-glitch text-[#2cff05] text-4xl hover:scale-115 transition-all duration-500 ease-in-out"
          >
            <FontAwesomeIcon icon={social.icon} title={social.label} />
        </motion.a>      
      ))}
    </div>
  );
}