import HowToCardsRight from './elements/HowToCardRight'
import HowToCardsLeft from './elements/HowToCardLeft'

type Props = {
  section?: any
}

export default function HowTo({section}: Props) {
  return (
    <section id="howTo" className="bg-background mb-20">
      <div className="container">
        <div className="lg:flex justify-center items-center gap-4 lg:mb-8">
          <div className="mb-16 w-auto lg:max-w-[500px] lg:mb-0">
            <h2 className="text-center w-auto font-bold text-6xl">{section.title}</h2>
          </div>
          <HowToCardsRight number="1" imgUrl={section.step1Image} title={section.step1Title} description={section.step1Description} />
        </div>
        <div className="lg:flex justify-center gap-4">
          <HowToCardsLeft number="2" imgUrl={section.step2Image} title={section.step2Title} description={section.step2Description} />
          <HowToCardsRight number="3" imgUrl="/img/components/howTo/step3_img.png" title="Mejora asegurada" description="Haz una foto o sube un archivo... y nuestra Ia crea un formulario automatico" />
        </div>
      </div>
    </section>
  )
}
