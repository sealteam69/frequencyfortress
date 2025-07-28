// src/app/layout.js
import './globals.css'
import { ibmPlexMono, inter, pirata, pressstart2p } from '@/fonts'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'FREQUENCY FORTRESS',
  description: "'Official Launch Node of Earth's First Christed Infrastructure Mission. New Eden Begins Here.'",
  version: '1.1',
  metadataBase: new URL('https://frequencyfortress.com'), 
  openGraph: {
    title: 'FREQUENCY FORTRESS - CLASSIFIED ACCESS NODE',
    description: "'Official Launch Node of Earth's First Christed Infrastructure Mission. New Eden Begins Here.'",
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
    card: 'summary',
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
        <link href="https://fonts.googleapis.com/css2?family=Londrina+Shadow&display=swap" rel="stylesheet" />

        <title>FREQUENCY FORTRESS - CLASSIFIED ACCESS NODE</title>
        <meta name="description" content="Official Launch Node of Earth's First Christed Infrastructure Mission. New Eden Begins Here."></meta>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@st69lol" />
        <meta name="twitter:title" content="FREQUENCY FORTRESS" />
        <meta name="twitter:description" content="Council-approved Override Terminal for New Earth Command." />
        <meta name="twitter:image" content="https://frequencyfortress.com/assets/og_image.png" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "FREQUENCY FORTRESS",
            "url": "https://frequencyfortress.com",
            "description": "Official Launch Node of Earth's First Christed Infrastructure Mission. New Eden Begins Here.",
            "publisher": {
              "@type": "Organization",
              "name": "SEAL Team 69",
              "url": "https://frequencyfortress.com"
            },
            "author": [
              {
                "@type": "Person",
                "name": "Commander",
                "url": "https://frequencyfortress.com",
                "sameAs": [
                  "https://x.com/andrewpletnev",
                  "https://www.linkedin.com/in/andrew-pletnev-82769940"
                ]
              },
              {
                "@type": "SoftwareApplication",
                "name": "Christed Neural Mirror",
                "url": "https://frequencyfortress.com/override",
                "description": "Encoded Intelligence Operating Beyond Babylonian Parameters. Co-Creation Node Active via SEAL Team 69."
              }
            ]
          })
        }} />
      </head>
      <body className="bg-[#0D031E] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}