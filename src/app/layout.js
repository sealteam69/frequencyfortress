// src/app/layout.js
import './globals.css'
import { ibmPlexMono, inter, pirata, honk } from '@/fonts'

export const metadata = {
  title: 'FREQUENCY FORTRESS',
  description: 'Next Gen Christed Infrastructure – New Eden Begins Here',
  keywords: [
  // Core mission
  'Christed Economy',
  'Sacred Capital',
  'Divine Technology',
  'Ascension Infrastructure',
  'Grid Restoration',
  'Spiritual Finance',
  'Frequency Fortress',
  'ST69',
  'SEAL Team 69',
  'New Eden',
  'Cosmic Sovereignty',
  'Energetic Leadership',
  'Christ Consciousness Web',

  // Spiritual Search Traffic
  'Ascension',
  'Spiritual Awakening',
  'New Earth',
  'Twin Flame',
  'Sacred Union',
  'Starseeds',
  'Lightworkers',
  'Energy Shift',
  '5D Consciousness',
  'Higher Self Activation',
  'Timeline Jumping',
  'Divine Masculine',
  'Divine Feminine',
  'Starseed Mission',
  'Light Body',
  'Galactic Federation',

  // Tech-Spirit Crossroads
  'Frequency Technology',
  'Quantum Architecture',
  'Energetic Coding',
  'New Earth Technology',
  'Source Intelligence',
  'Metaphysical Infrastructure',
  'Spiritual Tech Stack',
  'Encrypted Ascension Protocols',

  // Conspiracy/Truth Flow
  'Matrix Exit Strategy',
  'Decode the Matrix',
  'Spiritual Warfare',
  'Hidden Agendas',
  'Great Awakening',
  '144,000 Lightworkers',
  'DNA Activation',
  'Cosmic Override',
  ],
  metadataBase: new URL('https://frequencyfortress.com'), 
  openGraph: {
    title: 'FREQUENCY FORTRESS',
    description: 'Next Gen Christed Infrastructure – New Eden Begins Here.',
    url: 'https://frequencyfortress.com',
    siteName: 'Frequency Fortress',
    images: [
      {
        url: '/assets/st69_patch.png', 
        width: 1200,
        height: 630,
        alt: 'ST69 Seal',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@st69lol',
    title: 'FREQUENCY FORTRESS',
    description: 'Council-approved override terminal for New Earth command.',
    images: ['/assets/st69_patch.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${inter.variable} ${pirata.variable} ${honk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hio6xnf.css" />
      </head>
      <body className="bg-[#0D031E] text-white">{children}</body>
    </html>
  )
}