import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Canning Greens | Desarrollo Exclusivo en Canning',
  description: 'Descubre Canning Greens, un desarrollo residencial exclusivo en Canning que combina naturaleza, comodidad y diseño contemporáneo. Lotes unifamiliares en un entorno verde y seguro.',
  keywords: 'Canning Greens, desarrollo inmobiliario, lotes unifamiliares, Canning, Buenos Aires, naturaleza, seguridad, amenities',
  openGraph: {
    title: 'Canning Greens | Vivir en Armonía con la Naturaleza',
    description: 'Desarrollo exclusivo en Canning con lotes unifamiliares, espacios verdes y amenities de primer nivel.',
    url: 'https://canning-greens.vercel.app',
    siteName: 'Canning Greens',
    images: [
      {
        url: 'https://canning-greens.vercel.app/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Logo de Canning Greens',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canning Greens | Desarrollo Exclusivo en Canning',
    description: 'Lotes unifamiliares en un entorno natural privilegiado. Descubre la vida en Canning Greens.',
    images: ['https://canning-greens.vercel.app/images/logo.png'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://canning-greens.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-ubuntu">{children}</body>
    </html>
  )
}

