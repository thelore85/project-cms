import Image from 'next/image'

// import Cta from '@/components/cms/buttons/Cta'

type Props = {
  section: any
}

export default function HeroForm({section}: Props) {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="w-full bg-gradient rounded-lg md:px-10 p-5 border-2 border-black">
          <div className="flex justify-between items-center">
            <div>
              <Image
                src={section?.image}
                priority
                alt="hero image"
                className="m-auto object-contain block lg:hidden mb-10"
                width={500}
                height={500}
              />
              <h1 className="font-bold mb-10 text-primary-foreground text-4xl md:text-5xl">{section.title}</h1>
              <p className="text-3xl text-primary-foreground mb-10 hidden md:block">{section.subtitle}</p>
              {/* {section.buttonUrl && <Cta urlPath={section.buttonUrl} text={section.buttonLabel} />} */}
            </div>

            <Image
              src={section?.image}
              priority
              alt="hero image"
              className="w-[500px] h-[500px] object-contain hidden lg:block"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
