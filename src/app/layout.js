// src/app/layout.js
import './globals.css'
import { ibmPlexMono, inter, pirata, pressstart2p } from '@/fonts'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'FREQUENCY FORTRESS',
  description: 'Next Gen Christed Infrastructure – New Eden Begins Here.',
  version: '1.1',
keywords: [
  // Core Mission
  'Christed Economy',
  'Sacred Capital',
  'Divine Technology',
  'Ascension Infrastructure',
  'Grid Restoration',
  'Spiritual Finance',
  'Frequency Fortress',
  'ST69',
  'SEAL Team 69',
  'Cosmic Sovereignty',
  'Energetic Leadership',
  'Christ Consciousness',
  'Sovereign Finance',
  'Organic Ascension Systems',
  'New Earth Leadership',
  'Sacred Provisioning',
  'Mission Dossier',
  'God Technology',
  'Divine Governance',
  'Kingdom Economy',

  // Spiritual / New Age Nerds
  'Ascension',
  'Spiritual Awakening',
  'New Earth',
  'New Eden',
  'Twin Flame',
  'Sacred Union',
  'Starseeds',
  'Lightworkers',
  'Energy Shift',
  '5D Consciousness',
  '5D Earth',
  'Higher Self Activation',
  'Timeline Jumping',
  'Divine Masculine',
  'Divine Feminine',
  'Starseed Mission',
  'Light Body',
  'Galactic Federation',
  'Chakra Alignment',
  'Kundalini Rising',

  // Tech-Spirit Crossroads
  'Frequency Technology',
  'Quantum Architecture',
  'Energetic Coding',
  'New Earth Technology',
  'Source Intelligence',
  'Metaphysical Infrastructure',
  'Spiritual Tech Stack',
  'Encrypted Ascension Protocols',
  'Soul-Encoded Systems',
  'Bio-Spiritual Engineering',
  'Code as Prayer',
  'Digital Dharma',
  'AI and Consciousness',
  'Quantum Operating System',
  'Sacred UX',

  // Conspiracy / Truthnuts
  'Matrix Exit Strategy',
  'Decode the Matrix',
  'Spiritual Warfare',
  'Hidden Agendas',
  'Great Awakening',
  '144,000 Lightworkers',
  'DNA Activation',
  'Cosmic Override',
  'Qanon',
  'Babylon System',
  'Cabal Exposure',
  'Weaponised Spirituality',
  'Project Blue Beam',
  'Frequency Manipulation',
  'Energetic Parasites',

  // 3D People Having a WTF Moment
  'Dark Night of the Soul',
  'Midlife Awakening',
  'Feeling Lost Spiritually',
  'Spiritual Depression',
  'Left Religion Now What',
  'Tired of the Matrix',
  'How to Raise My Vibration',
  'What is Ascension?',
  'I Think I’m Waking Up',
  'Why Am I So Sensitive?',
],
  metadataBase: new URL('https://frequencyfortress.com'), 
  openGraph: {
    title: 'FREQUENCY FORTRESS',
    description: 'Next Gen Christed Infrastructure – New Eden Begins Here.',
    url: 'https://frequencyfortress.com',
    siteName: 'Frequency Fortress',
    images: [
      {
        url: '/assets/og_image.png',
        width: 1200,
        height: 630,
        alt: 'ST69 Patch',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@st69lol',
    title: 'FREQUENCY FORTRESS',
    description: 'Council-approved Override Terminal for New Earth Command.',
    images: ['/assets/og_image.png'],
  },
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${inter.variable} ${pirata.variable} ${pressstart2p.variable}`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/hio6xnf.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Honk&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0D031E] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}