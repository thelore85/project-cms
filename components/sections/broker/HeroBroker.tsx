import Image from 'next/image'
import CtaMainBroker from '../../buttons/CtaMainBroker'

type Props = {}

export default function HeroBroker({}: Props) {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="w-full bg-primary rounded-lg p-10 border-2 border-black">
          <div className="flex justify-between items-center">
            <div className="w-auto">
              <h1 className="font-bold mb-10 text-primary-foreground">¿Renovar tu seguro de moto y coche con un 25% de ahorro? ¡Hecho!</h1>
              <p className="text-3xl text-primary-foreground mb-10">Mejora de precio o condiciones, con un seguro 100% personalizado</p>
              <CtaMainBroker />
            </div>
            <Image src="/img/components/hero/hero_img_broker.png" alt="hero image" className="rounded-full object-contain hidden lg:block" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
