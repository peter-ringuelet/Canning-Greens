import { RouteIcon as Road, Zap, Droplet, Trash2, Flame, Lightbulb, Wifi, Recycle } from 'lucide-react'

const infrastructureItems = [
  { icon: Road, title: "Calles asfaltadas", description: "Pavimentos, intertrabado, cordones cunetas y pluviales" },
  { icon: Zap, title: "Redes de Energía Eléctrica", description: "Suministro eléctrico confiable" },
  { icon: Droplet, title: "Red de Agua Corriente", description: "Agua potable de calidad" },
  { icon: Trash2, title: "Red Domiciliaria de Cloacas", description: "Sistema de alcantarillado eficiente" },
  { icon: Flame, title: "Red Interna de Gas", description: "Suministro de gas natural" },
  { icon: Lightbulb, title: "Red de Iluminación", description: "Alumbrado público moderno" },
  { icon: Wifi, title: "Internet por Fibra Óptica", description: "Conexión de alta velocidad" },
  { icon: Recycle, title: "Planta de Tratamiento de Efluentes", description: "Gestión responsable de residuos" },
]

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Infraestructura de Primer Nivel</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Canning Greens 2 cuenta con una infraestructura completa y moderna para garantizar la mejor calidad de vida
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infrastructureItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

