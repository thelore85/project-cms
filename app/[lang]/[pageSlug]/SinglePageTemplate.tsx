import {getPageBySlug} from '@/sanity/sanity-utils'

// Components
import Hero from '@/app/components/cms/sections/retail/Hero'
import ValuePropositionRetail from '@/app/components/cms/sections/retail/ValuePropositionRetail'
import Service from './comp/Service'
import Error404 from '../../components/sections/Error404'

type PageProps = {
  slug: string
}

type compMapProps = {
  [key: string]: React.FC<{component: any}>
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// PERFORMANCE NOTE: consider using next/dynamics to import only components used in the loaded page !! ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default async function SinglePageTemplate({slug}: PageProps) {
  const page = await getPageBySlug(slug)
  const components = page?.components

  console.log(components)

  const componentMap: compMapProps = {
    hero: Hero,
    service: Service,
    value: ValuePropositionRetail,
  }

  if (!page || !page.components) {
    return <Error404 />
  }

  return (
    <>
      {components?.map((component: any, index: number) => {
        const Component = componentMap[component._type]
        return Component ? <Component key={index} component={component} /> : null
      })}
    </>
  )
}
