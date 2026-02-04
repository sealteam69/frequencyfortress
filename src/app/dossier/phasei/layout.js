export async function generateMetadata() {
  const url = 'https://frequencyfortress.com/dossier/phasei';
  const title = 'FREQUENCY FORTRESS / PHASE I';
  const description =
    'Christed Capital Deployment Plan for Frequency Fortress Phase I.';

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },

    // Basic robots control
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },

    // Open Graph metadata (used by Facebook, LinkedIn, etc.)
    openGraph: {
      title,
      description,
      url,
      siteName: 'Frequency Fortress',
      image: [
        {
          url: 'https://frequencyfortress.com/assets/og_image.png',
          width: 1200,
          height: 630,
          alt: 'Frequency Fortress Phase I',
        },
      ],
      type: 'website',
      locale: 'en_GB',
    },

    // Twitter Card metadata
    twitter: {
      card: 'summary',
      site: '@st69lol',
      creator: '@st69lol',
      title,
      description,
      image: ['https://frequencyfortress.com/assets/og_image.png'],
    },

    // Optional: schema.org metadata for richer search results
    other: {
      'og:type': 'website',
      'og:locale': 'en_GB',
      'application-name': 'SEAL Team 69',
    },
  };
}

export default function Layout({ children }) {
  return <>{children}</>;
}