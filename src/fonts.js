// src/fonts.js
import { IBM_Plex_Mono, Inter , Pirata_One, Pixelify_Sans, Orbitron, Finger_Paint, Bowlby_One_SC, Anton, DynaPuff, Honk, Overpass_Mono } from 'next/font/google'

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const pirata = Pirata_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-pirata',
  display: 'swap',
});

export const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pixelify',
})

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-orbitron",
  display: "swap",
});

export const fingerpaint = Finger_Paint({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-fingerpaint",
  display: "swap",
});

export const bowlbyonesc = Bowlby_One_SC({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-bowlbyonesc",
  display: "swap",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-anton",
  display: "swap",
});

export const dynapuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-dynapuff",
  display: "swap",
});

export const honk = Honk({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-honk",
  display: "swap",
});

export const overpassmono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["700"], 
  variable: "--font-overpassmono",
  display: "swap",
});