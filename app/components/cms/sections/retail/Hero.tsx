import Image from 'next/image'
import CtaMain from '@/app/components/buttons/CtaMain'
import FormNewsletter from '@/app/components/form/FormNewsletter'

type Props = {
  component: any
}

export default function Hero({component}: Props) {
  console.log('///////// COMPONENT: ', component)
  return (
    <section className="bg-background">
      <div className="container">
        <div className="w-full bg-primary rounded-lg px-10 py-5 border-2 border-black">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold mb-10 text-primary-foreground">{component.title}</h1>
              <p className="text-3xl text-primary-foreground mb-10">{component.subtitle}</p>
              {/* <CtaMain /> */}
              <FormNewsletter />
            </div>

            <Image src={component?.image?.asset?.url} alt="hero image" className="w-[500px] h-[500px] object-contain hidden lg:block" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
