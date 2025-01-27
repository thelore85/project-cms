import Image from 'next/image'
import CtaMain from '../buttons/CtaMain'

type Props = {}

export default function HeroBig({}: Props) {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="w-full bg-primary rounded-lg px-10 py-5 border-2 border-black">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold mb-10 text-primary-foreground">¿Renovar tu seguro de moto y coche con un 25% de ahorro? ¡Hecho!</h1>
              <p className="text-3xl text-primary-foreground mb-10">Mejora de precio o condiciones, con un seguro 100% personalizado</p>
              <CtaMain />
            </div>
            <Image src="/img/components/hero/hero_img.png" alt="hero image" className="w-[500px] h-[500px] object-contain" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
