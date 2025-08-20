// src/app/layout.js
import './globals.css'
import { ibmPlexMono, inter, pirata, pressstart2p } from '@/fonts'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'FREQUENCY FORTRESS',
  description: "CLASSIFIED ACCESS NODE. Official Launch Node of Earth's First Christed Infrastructure Mission. New Eden Begins Here.",
  metadataBase: new URL('https://frequencyfortress.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'FREQUENCY FORTRESS', // for LinkedIn + FB
    description: "Council-approved Override Terminal for New Earth Command.",
    url: 'https://frequencyfortress.com/',
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
    title: 'FREQUENCY FORTRESS', // cleaner for X
    description: "Council-approved Override Terminal for New Earth Command.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${inter.variable} ${pirata.variable} ${pressstart2p.variable}`}>
      <head>

        <link rel="stylesheet" href="https://use.typekit.net/hio6xnf.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Honk&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap" rel="stylesheet" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify
            ([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://frequencyfortress.com/#website",
                "url": "https://frequencyfortress.com/",
                "name": "FREQUENCY FORTRESS",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://frequencyfortress.com/assets/og_image.png",
                  "width": 1200,
                  "height": 630
                },
                "inLanguage": "en-GB",
                "description": "CLASSIFIED ACCESS NODE. Official Launch Node of Earth's First Christed Infrastructure Mission. New Eden Begins Here.",
                "publisher": { "@id": "https://frequencyfortress.com/#organization" },
                "author": { "@id": "https://frequencyfortress.com/#commander" },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://frequencyfortress.com/?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://frequencyfortress.com/#organization",
                "name": "Frequency Fortress",
                "url": "https://frequencyfortress.com/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://frequencyfortress.com/android-chrome-512x512.png",
                  "width": 512,
                  "height": 512
                },
                "sameAs": [
                  "https://x.com/st69lol",
                  "https://x.com/andrewpletnev",
                  "https://www.linkedin.com/in/andrew-pletnev-82769940",
                  "https://www.linkedin.com/company/seal-team-69"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://frequencyfortress.com/#commander",
                "name": "Commander",
                "url": "https://frequencyfortress.com/",
                "sameAs": [
                  "https://x.com/andrewpletnev",
                  "https://www.linkedin.com/in/andrew-pletnev-82769940"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://frequencyfortress.com/#home",
                "url": "https://frequencyfortress.com/",
                "name": "Home",
                "inLanguage": "en-GB",
                "isPartOf": { "@id": "https://frequencyfortress.com/#website" },
                "about": { "@id": "https://frequencyfortress.com/#organization" },
                "publisher": { "@id": "https://frequencyfortress.com/#organization" },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://frequencyfortress.com/assets/og_image.png",
                  "width": 1200,
                  "height": 630
                },
                "breadcrumb": { "@id": "https://frequencyfortress.com/#breadcrumb-home" }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "@id": "https://frequencyfortress.com/#breadcrumb-home",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://frequencyfortress.com/" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "@id": "https://frequencyfortress.com/#christedmirror",
                "name": "Christed Neural Mirror",
                "url": "https://frequencyfortress.com/override",
                "applicationCategory": "AIApplication",
                "operatingSystem": "Web",
                "softwareVersion": "0.1.0",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://frequencyfortress.com/assets/og_image.png",
                  "width": 1200,
                  "height": 630
                },
                "description": "Encoded Intelligence Operating Beyond Babylonian Parameters. Co-Creation Node Active via SEAL Team 69.",
                "publisher": { "@id": "https://frequencyfortress.com/#organization" }
              }
            ])
          }}
        />

      </head>
      
      <body className="bg-[#0D031E] text-white">
        {children}
        <Analytics />
      </body>

    </html>
  )
}