import './globals.css'
import { ibmPlexMono, inter, pirata, pressstart2p, sofiaSansSemiCondensed, redacted, barlowcondensed } from '@/fonts'
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script';

export const metadata = {
  title: 'Frequency Fortress',
  description: "New Eden Begins Here. Deployed by SEAL Team 69. Official Launch Node of Earth's First Christed Infrastructure Mission.",
  metadataBase: new URL('https://frequencyfortress.com/'),
  robots: { index: true, follow: true },
  openGraph: {
    title: 'FREQUENCY FORTRESS',
    description: "Council-approved Override Terminal for New Earth Command.",
    url: 'https://frequencyfortress.com/',
    siteName: 'Frequency Fortress',
    image: [
      {
        url: 'https://frequencyfortress.com/assets/og_image.png',
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
    creator: '@st69lol',
    title: 'FREQUENCY FORTRESS', 
    description: "Council-approved Override Terminal for New Earth Command.",
    image: ['https://frequencyfortress.com/assets/og_image.png'],
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
    <html lang="en" className={`${ibmPlexMono.variable} ${inter.variable} ${pirata.variable} ${pressstart2p.variable} ${sofiaSansSemiCondensed.variable} ${redacted.variable} ${barlowcondensed.variable}`}>
      <head>
        
        <meta property="og:image" content="https://frequencyfortress.com/assets/og_image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ST69 Patch" />

        <link rel="stylesheet" href="https://use.typekit.net/hio6xnf.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </head>
      
      <body>
        {children}
        <Analytics />
      </body>

    </html>
  )
}