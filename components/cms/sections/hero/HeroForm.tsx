import Image from 'next/image'

import FormNewsletter from '@/components/form/FormNewsletter'

type Props = {
  section: any
}

export default function HeroForm({section}: Props) {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="w-full bg-gradient rounded-lg px-10 py-5 border-2 border-black">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold mb-10 text-primary-foreground">{section.title}</h1>
              <p className="text-3xl text-primary-foreground mb-10">{section.subtitle}</p>
              <FormNewsletter />
            </div>

            <Image src={section?.image} alt="hero image" className="w-[500px] h-[500px] object-contain hidden lg:block" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
