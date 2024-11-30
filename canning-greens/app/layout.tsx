import './globals.css'
import type { Metadata } from 'next'
import { jsonLdScriptProps } from 'react-schemaorg'
import { WebSite, Organization } from 'schema-dts'

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
        url: 'https://canning-greens.vercel.app/images/canning-greens-aerial.jpg',
        width: 1200,
        height: 630,
        alt: 'Vista aérea de Canning Greens',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canning Greens | Barrio Privado Exclusivo en Canning',
    description: 'Descubre Canning Greens: barrio privado con lotes unifamiliares en un entorno natural privilegiado.',
    images: ['https://canning-greens.vercel.app/images/canning-greens-aerial.jpg'],
  },
  icons: {
    icon: [
      { url: '/images/favicon.ico', sizes: 'any' },
      { url: '/images/logo-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/images/logo-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/images/logo-192x192.png' },
    ],
    shortcut: ['/images/favicon.ico'],
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
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/logo-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/images/logo-512x512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/images/logo-192x192.png" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          {...jsonLdScriptProps<WebSite>({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Canning Greens",
            url: "https://canning-greens.vercel.app",
            description: "Canning Greens: barrio privado exclusivo en Canning con lotes unifamiliares y amenities de primer nivel."
          })}
        />
        <script
          {...jsonLdScriptProps<Organization>({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Canning Greens",
            url: "https://canning-greens.vercel.app",
            logo: "https://canning-greens.vercel.app/images/logo-192x192.png",
            description: "Desarrollo de barrio privado exclusivo en Canning, Buenos Aires."
          })}
        />
      </head>
      <body className="font-ubuntu">{children}</body>
    </html>
  )
}

