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
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Canning Greens: Tu Nuevo Hogar en Canning</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
              Canning Greens es más que un barrio privado, es un estilo de vida en armonía con la naturaleza. 
              Ubicado en el corazón de Canning, nuestro desarrollo ofrece lotes unifamiliares en un entorno 
              seguro y tranquilo, ideal para familias que buscan calidad de vida sin renunciar a la comodidad.
            </p>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Con amplios espacios verdes, amenities de primer nivel y una infraestructura moderna, 
              Canning Greens es la elección perfecta para quienes desean vivir en un verdadero oasis urbano.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

