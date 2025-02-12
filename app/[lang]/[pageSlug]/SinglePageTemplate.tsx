import {getPageBySlug} from '@/sanity/sanity-utils'

// Components
import Hero from '@/components/cms/sections/hero/Hero'
import HeroForm from '@/components/cms/sections/hero/HeroForm'
import ValueProposition from '@/components/cms/sections/valueProp/ValueProposition'
import Service from '@/components/cms/sections/valueProp/Service'
import Error404 from '@/components/sections/Error404'
import HowTo from '@/components/cms/sections/howToRetail/HowTo'
import PartnersBanner from '@/components/cms/sections/partners/PartnersBanner'
import Testimonial from '@/components/cms/sections/testimonial/Testimonial'
import Faq from '@/components/cms/sections/faq/Faq'
import BigCardLeft from '@/components/cms/sections/cards/BigCardLeft'

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
    heroForm: HeroForm,
    service: Service,
    value: ValueProposition,
    howTo: HowTo,
    partnersBanner: PartnersBanner,
    testimonial: Testimonial,
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
