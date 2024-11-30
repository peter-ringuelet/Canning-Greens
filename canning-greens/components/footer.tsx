import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
 return (
   <footer className="bg-[#234400] text-white py-12">
     <div className="container mx-auto px-4">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div>
           <h3 className="text-xl font-bold mb-4">Canning Greens 2</h3>
           <p className="mb-4">Un lugar exclusivo para vivir en armonía con la naturaleza.</p>
           <div className="flex space-x-4">
             <Link href="#" className="hover:text-[#BDDD8A]">
               <Facebook />
             </Link>
             <Link href="#" className="hover:text-[#BDDD8A]">
               <Instagram />
             </Link>
             <Link href="#" className="hover:text-[#BDDD8A]">
               <Twitter />
             </Link>
           </div>
         </div>
         <div>
           <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
           <ul className="space-y-2">
             <li><Link href="#features" className="hover:text-[#BDDD8A]">Características</Link></li>
             <li><Link href="#gallery" className="hover:text-[#BDDD8A]">Galería</Link></li>
             <li><Link href="#contact" className="hover:text-[#BDDD8A]">Contacto</Link></li>
           </ul>
         </div>
         <div>
           <h4 className="text-lg font-semibold mb-4">Contacto</h4>
           <p>Calle Principal 123, Canning</p>
           <p>Buenos Aires, Argentina</p>
           <p>Tel: (123) 456-7890</p>
           <p>Email: info@canninggreens2.com</p>
         </div>
       </div>
       <div className="mt-8 pt-8 border-t border-[#523F04] text-center">
         <p>&copy; 2024 Canning Greens 2. Todos los derechos reservados.</p>
       </div>
     </div>
   </footer>
 )
}