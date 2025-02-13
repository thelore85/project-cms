import Footer from '@/components/sections/Footer'
import NavigatorRetail from '@/components/navigations/retail/NavigatorRetail'

type Props = {
  children: React.ReactNode
  params: any
}

export default async function RetailLayout({children, params}: Props) {
  const {lang, pageSlug} = await params

  console.log('///////// page slug: layout: ', pageSlug)

  return (
    <>
      <NavigatorRetail lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  )
}
