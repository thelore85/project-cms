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

type MapProps = {[key: string]: React.ComponentType<{lang: string}>}

export default async function LayoutTemplate({children, params}: Props) {
  const {lang, pageSlug} = await params

  // Fetch page
  const page = await getPageBySlug(pageSlug, lang)
  const template = page?.layout || 'default'

  // Navigation menu map
  const navigators: MapProps = {
    main: Navigator,
    business: NavigatorBroker,
  }

  // Footer map
  const footers: MapProps = {
    main: Footer,
    business: FooterBroker,
  }

  // Layout attribution
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
