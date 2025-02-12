import Image from 'next/image'
import CtaMainBroker from '@/components/buttons/CtaMainBroker'

type Props = {}

export default function HeroBroker({}: Props) {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="w-full py-10">
          <div className="flex justify-between items-center gap-4">
            <div className="w-auto">
              <Image src="/img/components/hero/hero_img_broker.png" priority alt="hero image" className="m-auto object-contain block lg:hidden mb-10 bg-gradient rounded-full" width={500} height={500} />
              <h1 className="font-bold mb-10 text-foreground text-4xl md:text-5xl">Consigue renovar más barato tu seguro de coche o moto online!</h1>
              <p className="text-3xl font-light text-foreground mb-10 hidden md:block">Mejora de precio o condiciones, con un seguro 100% personalizado</p>
              <CtaMainBroker />
            </div>
            <Image src="/img/components/hero/hero_img_broker.png" alt="hero image" className="rounded-full object-contain hidden lg:block bg-gradient w-[95%]" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
