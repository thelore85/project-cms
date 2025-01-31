import Image from 'next/image'

type Props = {}

export default function ValuePropositionBroker({}: Props) {
  return (
    <section id="valueProposition" className="bg-background">
      <div className="container my-20">
        <div className="mb-10">
          <h2 className="text-center w-full m-auto font-bold text-6xl">¿Por que trabajar con nosotros?</h2>
        </div>
        <div className="flex justify-center">
          {/* CARD  */}
          <div className="bg-white border-2 mb-4 border-black p-5 rounded-xl shadow-flat  w-5/6 m-auto">
            <div className="xl:flex justify-between gap-5">
              <Image className="w-[300px] h-[300px] border-2 border-black m-auto md:m-0 rounded-lg" width={250} height={250} src="/img/components/valueProposition/deal_img.png" alt="good" />
              <div>
                <h3 className="inline-block px-4 py-2 rounded-md text-black text-center w-full mb-4 text-4xl font-bold">Mejora asegurada</h3>
                <p className="text-lg">Haz una foto o sube un archivo... y nuestra Ia crea un formulario automatico Haz una foto o sube un archivo... y nuestra Ia crea un formulario automatico Haz una foto o sube un archivo... y nuestra Ia crea un formulario automatico Haz una foto o sube un archivo... y nuestra Ia crea un formulario automatico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
