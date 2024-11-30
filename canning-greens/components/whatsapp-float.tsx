import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  // Reemplaza este enlace con el enlace real de WhatsApp cuando lo tengas
  const whatsappLink = "https://wa.me/NUMERODETELEFONO"

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  )
}

