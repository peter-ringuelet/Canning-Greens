import Image from 'next/image'

const amenities = [
  { name: "Sendero y Bicicenda", image: "/images/bici.jpg" },
  { name: "Estaciones Deportivas", image: "/images/depo.PNG" },
  { name: "Canchas de Paddle", image: "/images/paddle.jpg" },
  { name: "Canchas de Tenis", image: "/images/tennis.jpg" },
  { name: "Cancha de Fútbol 5", image: "/images/f5.jpg" },
  { name: "Cancha de Fútbol 7", image: "/images/f7.jpg" },
]

export default function LocationAndAmenities() {
  return (
    <section id="location-amenities" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Ubicación y Amenidades</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Nuestra Ubicación</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.6225905293113!2d-58.47952382345372!3d-35.03968197280281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDAyJzIyLjkiUyA1OMKwMjgnMzguNCJX!5e0!3m2!1sen!2sar!4v1637176262619!5m2!1sen!2sar" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
          <p className="mt-4 text-center text-gray-600">
            Ubicación: 35&deg;02&apos;22.9&quot;S 58&deg;28&apos;38.4&quot;W (-35.039682, -58.477336)
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8">Nuestras Amenidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={amenity.image}
                    alt={amenity.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-green-800">{amenity.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

