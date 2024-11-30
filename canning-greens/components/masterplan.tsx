"use client"

import Image from 'next/image'
import { useState } from 'react'

export default function Masterplan() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section id="masterplan" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Masterplan</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Un desarrollo pensado para maximizar los espacios verdes y la calidad de vida de sus residentes
        </p>
        <div className="bg-white rounded-lg shadow-xl p-6 mb-12">
          <div className="relative w-full" style={{ height: '600px' }}>
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-800"></div>
              </div>
            )}
            <Image
              src="/images/Imagen17.png"
              alt="Masterplan de Canning Greens"
              fill
              className={`object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              priority
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Área Parque/Arroyo</h3>
            <p className="text-gray-600">115 lotes unifamiliares</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Área Senda</h3>
            <p className="text-gray-600">96 lotes unifamiliares</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Área Plaza</h3>
            <p className="text-gray-600">55 lotes unifamiliares</p>
          </div>
        </div>
      </div>
    </section>
  )
}

