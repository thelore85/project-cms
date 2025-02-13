////////////// layoutTemplate
import Footer from '@/components/sections/Footer'
import NavigatorRetail from '@/components/navigations/retail/NavigatorRetail'
import NavigatorBroker from '@/components/navigations/broker/NavigatorBroker'
import {getPageBySlug} from '@/sanity/sanity-utils'

type Props = {
  children: React.ReactNode
  params: {
    lang: string
    pageSlug: string
  }
}

export default async function LayoutTemplate({children, params}: Props) {
  const {lang, pageSlug} = params

  // Fetch della pagina dal CMS
  const page = await getPageBySlug(pageSlug, lang)
  const template = page?.layout || 'default'

  // Mappa dei layout: associa ad ogni valore il rispettivo componente
  const navigators: {[key: string]: React.ComponentType<{lang: string}>} = {
    retail: NavigatorRetail,
    broker: NavigatorBroker,
  }

  // Se non esiste un layout specifico, usa il default
  const Navigator = navigators[template] || NavigatorRetail

  return (
    <>
      <Navigator lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  )
}
