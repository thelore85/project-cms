'use client'

import {useState} from 'react'

export default function CardTab() {
  const tabs = ['Vende', 'Gestiona', 'Crece', 'Explora', 'Mejora']
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="valueProposition" className="bg-background">
      <div className="container my-20">
        <div className="mb-10">
          <h2 className="text-center w-full m-auto font-bold text-6xl">¿Por qué trabajar con nosotros?</h2>
        </div>

        {/* CARD - TABS */}
        <div className="flex gap-4 justify-between bg-white rounded-full border-2 border-black mb-5 px-4 md:px-64 py-2 overflow-x-scroll overflow-hidden">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`text-center rounded-3xl px-4 md:px-3 md:py-2 text-md md:text-xl w-40 cursor-pointer transition-all duration-300 ${activeTab === index ? 'bg-primary text-primary-foreground opacity-100' : 'bg-background text-foreground opacity-75'}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* CARD - VENDE  */}
        {activeTab === 0 && (
          <div className="flex justify-center bg-white border-2 mb-4 border-black p-5 rounded-3xl shadow-flat m-auto min-h-[400px]">
            <div className=" md:flex justify-between items-center gap-5">
              <div className="md:w-1/2 min-h-[400px] rounded-3xl shadow-lg bg-[url('/img/components/valueProposition/deal_img.png')] bg-cover bg-center"></div>
              <div className="md:w-1/2 p-10 text-center">
                <h3 className="inline-block px-4 py-2 rounded-md text-black w-full mb-4 text-4xl font-bold">Aumenta tus ventas</h3>
                <p className="text-lg">Nuestra tecnología de subasta inversa activa una competencia entre brokers, garantizándote la mejor póliza.</p>
                <p className="text-lg"> Cuantas más ofertas recibas, mejores serán las condiciones, con total transparencia y ahorro</p>
              </div>
            </div>
          </div>
        )}

        {/* CARD - GESTIONA  */}
        {activeTab === 1 && (
          <div className="flex justify-center bg-white border-2 mb-4 border-black p-5 rounded-3xl shadow-flat m-auto min-h-[400px]">
            <div className="md:flex justify-between items-center gap-5">
              <div className="md:w-1/2 min-h-[400px] rounded-3xl shadow-lg bg-[url('/img/components/valueProposition/platform.png')] bg-cover bg-center"></div>
              <div className="md:w-1/2 p-10 text-center">
                <h3 className="inline-block px-4 py-2 rounded-md text-black w-full mb-4 text-4xl font-bold">Gestiona tus poliza en una plataforma</h3>
                <p className="text-lg">Nuestra tecnología de subasta inversa activa una competencia entre brokers, garantizándote la mejor póliza.</p>
                <p className="text-lg"> Cuantas más ofertas recibas, mejores serán las condiciones, con total transparencia y ahorro</p>
              </div>
            </div>
          </div>
        )}

        {/* CARD - CRECE  */}
        {activeTab === 2 && (
          <div className="flex justify-center bg-white border-2 mb-4 border-black p-5 rounded-3xl shadow-flat m-auto min-h-[400px]">
            <div className="md:flex justify-between items-center gap-5">
              <div className="md:w-1/2 min-h-[400px] rounded-3xl shadow-lg bg-[url('/img/components/valueProposition/grow.png')] bg-cover bg-center"></div>
              <div className="md:w-1/2 p-10 text-center">
                <h3 className="inline-block px-4 py-2 rounded-md text-black w-full mb-4 text-4xl font-bold">Haz creser tus clientes</h3>
                <p className="text-lg">Nuestra tecnología de subasta inversa activa una competencia entre brokers, garantizándote la mejor póliza.</p>
                <p className="text-lg"> Cuantas más ofertas recibas, mejores serán las condiciones, con total transparencia y ahorro</p>
              </div>
            </div>
          </div>
        )}

        {/* CARD - EXPLORA  */}
        {activeTab === 3 && (
          <div className="flex justify-center bg-white border-2 mb-4 border-black p-5 rounded-3xl shadow-flat m-auto min-h-[400px]">
            <div className="md:flex justify-between items-center gap-5">
              <div className="md:w-1/2 min-h-[400px] rounded-3xl shadow-lg bg-[url('/img/components/valueProposition/explore.png')] bg-cover bg-center"></div>
              <div className="md:w-1/2 p-10 text-center">
                <h3 className="inline-block px-4 py-2 rounded-md text-black w-full mb-4 text-4xl font-bold">Explora los seguros activos</h3>
                <p className="text-lg">Nuestra tecnología de subasta inversa activa una competencia entre brokers, garantizándote la mejor póliza.</p>
                <p className="text-lg"> Cuantas más ofertas recibas, mejores serán las condiciones, con total transparencia y ahorro</p>
              </div>
            </div>
          </div>
        )}

        {/* CARD - MEJORA  */}
        {activeTab == 4 && (
          <div className="flex justify-center bg-white border-2 mb-4 border-black p-5 rounded-3xl shadow-flat m-auto min-h-[400px]">
            <div className="md:flex justify-between items-center gap-5">
              <div className="md:w-1/2 min-h-[400px] rounded-3xl shadow-lg bg-[url('/img/components/valueProposition/learn.png')] bg-cover bg-center"></div>
              <div className="md:w-1/2 p-10 text-center">
                <h3 className="inline-block px-4 py-2 rounded-md text-black w-full mb-4 text-4xl font-bold">Mejora asegurada</h3>
                <p className="text-lg">Nuestra tecnología de subasta inversa activa una competencia entre brokers, garantizándote la mejor póliza.</p>
                <p className="text-lg"> Cuantas más ofertas recibas, mejores serán las condiciones, con total transparencia y ahorro</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
