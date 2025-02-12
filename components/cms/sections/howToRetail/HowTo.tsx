import HowToCardsTopRight from './elements/HowToCardTopRight'
import HowToCardsBottomLeft from './elements/HowToCardBottomLeft'
import HowToCardsBottomRight from './elements/HowToCardBottomRight'
import HowToCardsTitleLeft from './elements/HotToCardTitleLeft'

type Props = {
  section?: any
}

export default function HowTo({section}: Props) {
  return (
    <section id="howTo" className="bg-background mb-20">
      <div className="container">
        <div className="lg:flex justify-center items-center gap-4 lg:mb-8">
          <HowToCardsTitleLeft title={section.title} />
          <HowToCardsTopRight number="1" imgUrl={section.step1Image} title={section.step1Title} description={section.step1Description} />
        </div>
        <div className="lg:flex justify-center gap-4">
          <HowToCardsBottomLeft number="2" imgUrl={section.step2Image} title={section.step2Title} description={section.step2Description} />
          <HowToCardsBottomRight number="3" imgUrl={section.step3Image} title={section.step3Title} description={section.step3Description} />
        </div>
      </div>
    </section>
  )
}
