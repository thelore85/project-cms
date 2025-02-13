import Image from 'next/image'
import CtaMainBroker from '@/components/buttons/CtaMainBroker'

type Props = {
  section: any
}

export default function HeroBig({section}: Props) {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="w-full py-10">
          <div className="flex justify-between items-center gap-4">
            <div className="w-auto">
              <Image src={section.image} priority alt="hero image" className="m-auto object-contain block lg:hidden mb-4 " width={500} height={500} />
              <h1 className="font-bold mb-10 text-foreground text-4xl md:text-5xl">{section.title}</h1>
              <p className="text-3xl font-light text-foreground mb-10 hidden md:block">{section.subtitle}</p>
              <CtaMainBroker />
            </div>
            <Image src={section.image} alt="hero_image" className=" object-contain hidden lg:block w-[115%]" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
