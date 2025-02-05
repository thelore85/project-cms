'use client'

import Footer from '@/app/components/sections/retail/FooterRetail'
import ScrollToTop from '@/app/components/utility/ScrollToTop'
import NavigatorRetail from '@/app/components/navigations/retail/NavigatorRetail'
import useStore from '@/store/store'

type Props = {
  children: React.ReactNode
}

export default function BrokerLayout({children}: Props) {
  const {lang} = useStore()

  return (
    <>
      {/* <ScrollToTop /> */}
      <NavigatorRetail lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  )
}
