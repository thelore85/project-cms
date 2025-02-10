import {getPageBySlug} from '@/sanity/sanity-utils'

// Components
import Hero from '@/app/components/cms/sections/hero/Hero'
import HeroForm from '@/app/components/cms/sections/hero/HeroForm'
import ValueProposition from '@/app/components/cms/sections/valueProp/ValueProposition'
import Service from '@/app/components/cms/sections/valueProp/Service'
import Error404 from '@/app/components/sections/Error404'
import HowTo from '@/app/components/cms/sections/howToRetail/HowTo'

type PageProps = {
  slug: string
}

type compMapProps = {
  [key: string]: React.FC<{section: any}>
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// PERFORMANCE NOTE: consider using next/dynamics to import only components used in the loaded page !! ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default async function SinglePageTemplate({slug}: PageProps) {
  const page = await getPageBySlug(slug)
  const sections = page?.sections

  console.log('/// sections in page', page)

  const componentMap: compMapProps = {
    hero: Hero,
    heroForm: HeroForm,
    service: Service,
    value: ValueProposition,
    howTo: HowTo,
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
