import Image from 'next/image'

type Props = {}

export default function HowToRetaiil({}: Props) {
  return (
    <section id="howTo" className="bg-background mb-20">
      <div className="container">
        {/* ROW 1  */}
        <div className="lg:flex justify-center items-center gap-4 lg:mb-8">
          {/* TITLE  */}
          <div className="mb-16 w-auto lg:max-w-[500px] lg:mb-0">
            <h2 className="text-center w-auto font-bold text-6xl">¿Y cómo lo hacemos?</h2>
          </div>
          {/* CARD  */}
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-flat w-full lg:max-w-[500px] mb-10 lg:mb-0">
            <div className="relative mb-10">
              <div className="absolute flex justify-center items-center top-[-25px] left-[-25px] rounded-full bg-white p-8 w-[60px] h-[60px] border-2 border-black">
                <span className="font-noticia text-secondary font-bold text-4xl">1</span>
              </div>
              <h3 className="block text-center px-6 py-2 rounded-md text-black">Mejora asegurada</h3>
              <div className="absolute top-[-60px] right-[-90px] hidden md:block ">
                <Image src="/img/components/howTo/step1_img.png" alt="photo" className="w-[130px] h-[80px]" width={200} height={200} />
              </div>
            </div>
            <div className="rounded-lg py-5 px-8 text-white bg-primary flex justify-between items-center">
              <span className="font-normal text-xl leading-7">Haz una foto o sube un archivo... y nuestra Ia crea un formulario automatico</span>
            </div>
          </div>
        </div>
        {/* ROW 2  */}
        <div className="lg:flex justify-center gap-4">
          {/* CARD  */}
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-flat w-full lg:max-w-[500px] mb-10 lg:mb-0">
            <div className="relative mb-10 ">
              <div className="absolute flex justify-center items-center top-[-25px] left-[-25px] rounded-full bg-white p-8 w-[60px] h-[60px] border-2 border-black ">
                <span className="font-noticia text-secondary font-bold text-4xl">2</span>
              </div>
              <h3 className="block text-center px-6 py-2 rounded-md text-black">Mejora asegurada</h3>
              <div className="absolute top-[120px] left-[-80px] hidden md:block ">
                <Image src="/img/components/howTo/step2_img.png" alt="photo" className="w-[130px] h-[160px]" width={200} height={200} />
              </div>
            </div>
            <div className="rounded-lg py-5 px-8 text-white bg-primary flex justify-between items-center">
              <span className="font-normal text-xl leading-7">Haz una foto o sube un archivo... y nuestra Ia crea un formulario automatico</span>
            </div>
          </div>
          {/* CARD  */}
          <div className="bg-white border-2 border-black p-3 rounded-xl shadow-flat w-full lg:max-w-[500px] mb-10 lg:mb-0">
            <div className="relative mb-10">
              <div className="absolute flex justify-center items-center top-[-25px] left-[-25px] rounded-full bg-white p-8 w-[60px] h-[60px] border-2 border-black">
                <span className="font-noticia text-secondary font-bold text-4xl">2</span>
              </div>
              <h3 className="block text-center px-6 py-2 rounded-md text-black">Mejora asegurada</h3>
              <div className="absolute top-[150px] right-[-80px] hidden md:block">
                <Image src="/img/components/howTo/step3_img.png" alt="photo" className="w-[170px] h-[100px]" width={200} height={200} />
              </div>
            </div>
            <div className="rounded-lg py-5 px-8 text-white bg-primary flex justify-between items-center">
              <span className="font-normal text-xl leading-7">Haz una foto o sube un archivo... y nuestra Ia crea un formulario automatico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
