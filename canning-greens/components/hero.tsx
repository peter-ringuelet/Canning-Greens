import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative h-[90vh] scroll-mt-20 font-['Ubuntu', sans-serif]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Imagen7.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-4 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl">
          Canning Greens
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Elegancia arquitectónica en armonía con la naturaleza.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact">
            <Button size="lg" className="w-full sm:w-auto bg-[#234400] text-white hover:bg-[#6A952F] shadow-lg">
              Solicitar información
            </Button>
          </a>
          <a href="#masterplan">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/80 text-[#234400] hover:bg-[#BDDD8A] hover:text-[#234400] border-none shadow-lg">
              Ver masterplan
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

