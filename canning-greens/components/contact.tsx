import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail } from 'lucide-react'

export default function Contact() {
 return (
   <section id="contact" className="py-20 bg-[#BDDD8A]/20 scroll-mt-20">
     <div className="container mx-auto px-4">
       <h2 className="text-3xl font-bold text-center mb-4 text-[#234400]">Contáctanos</h2>
       <p className="text-center text-[#523F04] mb-12 max-w-3xl mx-auto">
         Estamos aquí para responder tus preguntas y ayudarte a ser parte de Canning Greens 2
       </p>
       <Card className="max-w-2xl mx-auto border-none shadow-lg bg-white">
         <CardHeader>
           <Mail className="w-10 h-10 text-[#6A952F] mb-2" />
           <CardTitle className="text-xl text-[#234400]">Envíanos un mensaje</CardTitle>
           <CardDescription className="text-base text-[#523F04]">Completa el formulario y nos pondremos en contacto contigo pronto</CardDescription>
         </CardHeader>
         <CardContent>
           <form className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Input type="text" placeholder="Nombre" className="bg-white text-[#523F04] border-[#6A952F]" />
               <Input type="email" placeholder="Email" className="bg-white text-[#523F04] border-[#6A952F]" />
             </div>
             <Input type="tel" placeholder="Teléfono" className="bg-white text-[#523F04] border-[#6A952F]" />
             <Textarea placeholder="Mensaje" className="bg-white text-[#523F04] border-[#6A952F]" rows={4} />
             <Button type="submit" className="w-full bg-[#234400] text-white hover:bg-[#6A952F] transition-colors">
               Enviar mensaje
             </Button>
           </form>
         </CardContent>
       </Card>
     </div>
   </section>
 )
}

