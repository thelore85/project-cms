import Image from 'next/image'
import CtaMain from '@/components/buttons/CtaMain'

type Props = {}

export default function ValueProposition({}: Props) {
  return (
    <section className="bg-background">
      <div className="container mb-20">
        <div className="mb-10">
          <h2 className="text-center lg:w-2/3 w-full m-auto font-bold text-6xl">¿Por que renovar tu seguro con nosotros?</h2>
        </div>
        <div className="lg:flex gap-4">
          {/* CARD  */}
          <div className="bg-white border-2 mb-4 border-black p-3 rounded-xl shadow-flat w-full m-auto">
            <div className="xl:flex justify-between items-center">
              <Image className="w-[120px] h-[120px] m-auto md:m-0" width={250} height={250} src="/img/components/valueProposition/value1_img.png" alt="good" />
              <h3 className="inline-block px-4 py-2 rounded-md text-black">Mejora asegurada</h3>
            </div>
            <div className="rounded-lg p-5 text-white bg-primary flex justify-between items-center">
              <span className="text-2xl me-2 hidden lg:block">100%</span>
              <span className="">Todas tus pólizas a mano. Renovar pulsando un solo botón.</span>
            </div>
          </div>
          <div className="bg-white border-2 mb-4 border-black p-3 rounded-xl shadow-flat w-full m-auto">
            <div className="xl:flex justify-between items-center">
              <Image className="w-[150px] h-[120px] m-auto md:m-0" width={250} height={250} src="/img/components/valueProposition/value2_img.png" alt="good" />
              <h3 className="inline-block px-4 py-2 rounded-md text-black">Centralizado</h3>
            </div>
            <div className="rounded-lg p-5 text-white bg-primary flex justify-between items-center">
              <span className="text-2xl me-2 hidden lg:block">100%</span>
              <span className="">Todas tus pólizas a mano. Renovar pulsando un solo botón.</span>
            </div>
          </div>
          <div className="bg-white border-2 mb-4 border-black p-3 rounded-xl shadow-flat w-full m-auto">
            <div className="xl:flex justify-between items-center">
              <Image className="w-[120px] h-[120px] m-auto md:m-0" width={250} height={250} src="/img/components/valueProposition/value3_img.png" alt="good" />
              <h3 className="inline-block px-4 py-2 rounded-md text-black">Personalizado</h3>
            </div>
            <div className="rounded-lg p-5 text-white bg-primary flex justify-between items-center">
              <span className="text-2xl me-2 hidden lg:block">100%</span>
              <span className="">La única plataforma que crea ofertas exclusivamente para ti</span>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold mb-10 text-primary-foreground">¿Renovar tu seguro de moto y coche con un 25% de ahorro? ¡Hecho!</h1>
            <p className="text-3xl text-primary-foreground mb-10">Mejora de precio o condiciones, con un seguro 100% personalizado</p>
            <CtaMain />
          </div>
          <Image src="/img/components/hero/hero_img.png" alt="hero image" className="w-[500px] h-[500px] object-contain" width={500} height={500} />
        </div> */}
      </div>
    </section>
  )
}
