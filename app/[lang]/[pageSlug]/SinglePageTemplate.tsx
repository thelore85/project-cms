import {getPageBySlug} from '@/sanity/sanity-utils'

// Components
import Hero from '@/components/cms/sections/hero/Hero'
import HeroForm from '@/components/cms/sections/hero/HeroForm'
import CardFeature from '@/components/cms/sections/cards/CardFeature'
import Error404 from '@/components/sections/Error404'
import HowTo from '@/components/cms/sections/howToRetail/HowTo'
import LogoStrip from '@/components/cms/sections/LogoStrip/LogoStrip'
import Faq from '@/components/cms/sections/faq/Faq'
import BigCardLeft from '@/components/cms/sections/cards/BigCardLeft'
import HeroBig from '@/components/cms/sections/hero/HeroBig'
import CardSlider from '@/components/cms/sections/cards/CardSlider'

type PageProps = {
  slug: string
  lang: string
}

type compMapProps = {
  [key: string]: React.FC<{section: any}>
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// PERFORMANCE NOTE: consider using next/dynamics to import only components used in the loaded page !! ////
//// PERFORMANCE NOTE: mayne is not necessary the above optimization due to server rendering             ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default async function SinglePageTemplate({slug, lang}: PageProps) {
  const page = await getPageBySlug(slug, lang)
  const sections = page?.sections

  const componentMap: compMapProps = {
    hero: Hero,
    heroBig: HeroBig,
    heroForm: HeroForm,
    cardFeature: CardFeature,
    howTo: HowTo,
    logoStrip: LogoStrip,
    cardSlider: CardSlider,
    faq: Faq,
    bigCardLeft: BigCardLeft,
  }

  if (!page || !page.sections) {
    return <Error404 />
  }

  return (
    <>
      {sections?.map((section: any, index: number) => {
        const Component = componentMap[section._type]
        return Component ? <Component key={index} section={section} /> : null
      })}
    </>
  )
}
