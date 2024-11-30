import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Canning Greens | Barrio Privado Exclusivo en Canning',
  description: 'Canning Greens: barrio privado exclusivo en Canning. Lotes unifamiliares, espacios verdes y amenities de primer nivel. Descubre la vida en armonía con la naturaleza.',
  keywords: 'Canning Greens, barrio privado, Canning, desarrollo inmobiliario, lotes unifamiliares, Buenos Aires, naturaleza, seguridad, amenities',
  openGraph: {
    title: 'Canning Greens | Barrio Privado en Armonía con la Naturaleza',
    description: 'Canning Greens: barrio privado exclusivo en Canning con lotes unifamiliares, espacios verdes y amenities de primer nivel.',
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
    title: 'Canning Greens | Barrio Privado Exclusivo en Canning',
    description: 'Descubre Canning Greens: barrio privado con lotes unifamiliares en un entorno natural privilegiado.',
    images: ['https://canning-greens.vercel.app/images/logo.png'],
  },
  icons: {
    icon: [
      { url: '/images/logo-32x32.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png' },
    ],
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
        {/* Favicon en 32x32 */}
        <link rel="icon" href="/images/logo-32x32.png" type="image/png" sizes="32x32" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/images/logo.png" />

        {/* Web Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-ubuntu">{children}</body>
    </html>
  )
}


