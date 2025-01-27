import Image from 'next/image'

type Props = {}

export default function HowTo({}: Props) {
  return (
    <section className="bg-background">
      <div className="container">
        {/* ROW 1  */}
        <div className="flex justify-center gap-4 mb-8">
          {/* TITLE  */}
          <div className="mb-10 max-w-[500px]">
            <h2 className="text-center w-auto font-bold text-6xl">¿Y cómo lo hacemos?</h2>
          </div>
          {/* CARD  */}
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-flat w-auto max-w-[500px]">
            <div className="relative mb-10">
              <div className="absolute flex justify-center items-center top-[-25px] left-[-25px] rounded-full bg-white p-8 w-[60px] h-[60px] border-2 border-black">
                <span className="font-noticia text-secondary font-bold text-4xl">1</span>
              </div>
              <h3 className="block text-center px-4 py-2 rounded-md text-black">Mejora asegurada</h3>
              <div className="absolute top-[-80px] right-[-80px] ">
                <Image src="/img/components/howTo/step1_img.png" alt="photo" className="w-[150px] h-[150px]" width={200} height={200} />
              </div>
            </div>
            <div className="rounded-lg py-5 px-8 text-white bg-primary flex justify-between items-center">
              <span className="font-normal text-xl leading-7">Haz una foto o sube un archivo... y nuestra Ia crea un formulario automatico</span>
            </div>
          </div>
        </div>
        {/* ROW 2  */}
        <div className="flex justify-center gap-4">
          {/* CARD  */}
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-flat w-auto max-w-[500px]">
            <div className="relative mb-10">
              <div className="absolute flex justify-center items-center top-[-25px] left-[-25px] rounded-full bg-white p-8 w-[60px] h-[60px] border-2 border-black">
                <span className="font-noticia text-secondary font-bold text-4xl">1</span>
              </div>
              <h3 className="block text-right px-4 py-2 rounded-md text-black">Mejora asegurada</h3>
            </div>
            <div className="rounded-lg p-5 text-white bg-primary flex justify-between items-center">
              <span className="font-medium text-lg leading-6">Todas tus pólizas a mano. Renovar pulsando un solo botón.</span>
            </div>
          </div>
          {/* CARD  */}
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-flat w-auto max-w-[500px]">
            <div className="relative mb-10">
              <div className="absolute flex justify-center items-center top-[-25px] left-[-25px] rounded-full bg-white p-8 w-[60px] h-[60px] border-2 border-black">
                <span className="font-noticia text-secondary font-bold text-4xl">1</span>
              </div>
              <h3 className="block text-right px-4 py-2 rounded-md text-black">Mejora asegurada</h3>
            </div>
            <div className="rounded-lg p-5 text-white bg-primary flex justify-between items-center">
              <span className="text-2xl me-2">100%</span>
              <span className="font-medium text-lg">Todas tus pólizas a mano. Renovar pulsando un solo botón.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
