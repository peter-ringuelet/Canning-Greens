"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const menuItems = [
    { href: "#features", label: "Características" },
    { href: "#masterplan", label: "Masterplan" },
    { href: "#location-amenities", label: "Ubicación y Amenidades" },
    { href: "#infrastructure", label: "Infraestructura" },
    { href: "#gallery", label: "Galería" },
    { href: "#contact", label: "Contacto" },
  ]

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Canning Greens Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8 mx-auto">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 hover:text-[#6A952F] whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <a href="#contact" className="hidden md:block">
              <Button className="bg-[#234400] text-white hover:bg-[#6A952F] border-none hover:border-none focus:ring-0">
                Agendar visita
              </Button>
            </a>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden ml-4" onClick={toggleMenu}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <SheetTitle className="text-left text-lg font-bold text-[#234400] mb-4">Menú de navegación</SheetTitle>
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a 
                        href={item.href} 
                        className="text-gray-600 hover:text-[#6A952F] py-2"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <a href="#contact" className="w-full block" onClick={closeMenu}>
                      <Button className="w-full bg-[#234400] text-white hover:bg-[#6A952F] border-none hover:border-none focus:ring-0">
                        Agendar visita
                      </Button>
                    </a>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
