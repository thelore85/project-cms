import Footer from '@/components/sections/Footer'
import Navigator from '@/components/navigations/retail/Navigator'
import NavigatorBroker from '@/components/navigations/broker/NavigatorBroker'
import {getPageBySlug} from '@/sanity/sanity-utils'
import FooterBroker from '@/components/sections/FooterBroker'

type Props = {
  children: React.ReactNode
  params: {
    lang: string
    pageSlug: string
  }
}

export default async function LayoutTemplate({children, params}: Props) {
  const {lang, pageSlug} = params

  // Fetch page
  const page = await getPageBySlug(pageSlug, lang)
  console.log(page)

  const template = page?.layout || 'default'

  // Navigation menu map
  const navigators: {[key: string]: React.ComponentType<{lang: string}>} = {
    main: Navigator,
    business: NavigatorBroker,
  }

  // Footer map
  const footers: {[key: string]: React.ComponentType<{lang: string}>} = {
    main: Footer,
    business: FooterBroker,
  }

  // Defaylt layout
  const NavigatorComponent = navigators[template] || Navigator
  const FooterComponent = footers[template] || Footer

  return (
    <>
      <NavigatorComponent lang={lang} />
      {children}
      <FooterComponent lang={lang} />
    </>
  )
}
