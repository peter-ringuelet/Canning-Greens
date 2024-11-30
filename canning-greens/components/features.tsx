import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, TreesIcon as Tree, Building2, MapPin, Trophy, Users } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: 'Ubicación Estratégica',
      description: 'Excelentes accesos a través de nuevas rutas y autopistas, cerca de centros comerciales, bancos y colegios.'
    },
    {
      icon: Tree,
      title: 'Espacios Verdes',
      description: 'Senderos para caminatas y ciclismo que integran la flora autóctona, promoviendo la biodiversidad y sostenibilidad.'
    },
    {
      icon: Trophy,
      title: 'Amenities Deportivas',
      description: '4 canchas de tenis, 4 de paddle, canchas de fútbol 5 y 7, en un predio de 15.000m².'
    },
    {
      icon: Building2,
      title: 'Salón de Usos Múltiples',
      description: 'Espacioso salón con capacidad para 100 personas, ideal para eventos y reuniones.'
    },
    {
      icon: Shield,
      title: 'Seguridad Integral',
      description: 'Sistema de vigilancia las 24 horas en un entorno cerrado y controlado.'
    },
    {
      icon: Users,
      title: 'Inversión Inteligente',
      description: 'Alto potencial de revalorización en una zona de constante crecimiento y demanda.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-[#BDDD8A]/20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#234400]">Características Destacadas</h2>
        <p className="text-center text-[#523F04] mb-12 max-w-3xl mx-auto">
          Canning Greens ofrece una combinación perfecta entre naturaleza, comodidad y diseño contemporáneo
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg bg-white">
              <CardHeader>
                <feature.icon className="w-10 h-10 text-[#6A952F] mb-2" />
                <CardTitle className="text-xl text-[#234400]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#523F04]">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

