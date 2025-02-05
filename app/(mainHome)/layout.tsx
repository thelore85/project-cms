'use client'

import Footer from '@/app/components/sections/retail/FooterRetail'
import NavigatorRetail from '@/app/components/navigations/retail/NavigatorRetail'

type Props = {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export default function BrokerLayout({children, params}: Props) {
  const {lang} = params

  return (
    <>
      {/* <ScrollToTop /> */}
      <NavigatorRetail lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  )
}
