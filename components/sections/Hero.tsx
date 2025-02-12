import Image from 'next/image'
import CtaMain from '@/components/buttons/CtaMain'
import FormNewsletter from '@/components/form/FormNewsletter'

type Props = {}

export default function Hero({}: Props) {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="w-full bg-gradient text- rounded-lg px-10 py-5 border-2 border-black">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold mb-10 text-primary-foreground">Consigue renovar más barato tu seguro de coche o moto online.</h1>
              <p className="text-3xl text-primary-foreground mb-10">Compara precios… No No! Creamos un seguro especialmente para ti porque te quiero</p>
              {/* <CtaMain /> */}
              <FormNewsletter />
            </div>

            <Image src="/img/components/hero/hero_img.png" alt="hero image" className="w-[500px] h-[500px] object-contain hidden lg:block" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
