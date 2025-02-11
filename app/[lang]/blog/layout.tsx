import Footer from '@/components/sections/retail/FooterRetail'
import NavigatorRetail from '@/components/navigations/retail/NavigatorRetail'

type Props = {
  children: React.ReactNode
  params: any
}

export default async function RetailLayout({children, params}: Props) {
  const {lang} = await params

  return (
    <>
      <NavigatorRetail lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  )
}
