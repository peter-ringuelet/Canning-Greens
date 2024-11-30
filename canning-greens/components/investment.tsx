import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Home, Clock } from 'lucide-react'

export default function Investment() {
 const investmentReasons = [
   {
     icon: TrendingUp,
     title: "Alta Revalorización",
     description: "Incremento significativo en los precios de las propiedades y demanda continua según Ámbito Financiero"
   },
   {
     icon: Home,
     title: "Lotes Ideales",
     description: "600 m² que brindan excelente constructividad con costos más accesibles"
   },
   {
     icon: Clock,
     title: "Tendencia Home Office",
     description: "Creciente demanda de espacios que combinan trabajo y calidad de vida"
   }
 ]

 return (
   <section className="py-20 bg-[#BDDD8A]/20 scroll-mt-20">
     <div className="container mx-auto px-4">
       <h2 className="text-3xl font-bold text-center mb-4 text-[#234400]">¿Por qué invertir en Canning?</h2>
       <p className="text-center text-[#523F04] mb-12 max-w-3xl mx-auto">
         La zona experimenta una transformación urbana sin precedentes, con un crecimiento sostenido que la convierte en una excelente oportunidad de inversión
       </p>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {investmentReasons.map((reason, index) => (
           <Card key={index} className="border-none shadow-lg bg-white">
             <CardHeader>
               <reason.icon className="w-10 h-10 text-[#6A952F] mb-2" />
               <CardTitle className="text-xl text-[#234400]">{reason.title}</CardTitle>
             </CardHeader>
             <CardContent>
               <CardDescription className="text-base text-[#523F04]">{reason.description}</CardDescription>
             </CardContent>
           </Card>
         ))}
       </div>
     </div>
   </section>
 )
}

