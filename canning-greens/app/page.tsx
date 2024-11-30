import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Masterplan from '@/components/masterplan'
import LocationAndAmenities from '@/components/location-and-amenities'
import Infrastructure from '@/components/infrastructure'
import Investment from '@/components/investment'
import Gallery from '@/components/gallery'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import WhatsAppFloat from '@/components/whatsapp-float'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Masterplan />
        <LocationAndAmenities />
        <Infrastructure />
        <Investment />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

