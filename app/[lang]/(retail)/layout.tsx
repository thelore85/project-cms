'use client'

import Footer from '@/app/components/sections/retail/FooterRetail'
import ScrollToTop from '@/app/components/utility/ScrollToTop'
import NavigatorRetail from '@/app/components/navigations/retail/NavigatorRetail'
import {useParams} from 'next/navigation'

type Props = {
  children: React.ReactNode
}

export default function BrokerLayout({children}: Props) {
  const {lang} = useParams() as {lang: string} // Assicurati che il segmento dinamico si chiami "lang"

  console.log('//////////////////// LANNNNNNG: ', lang)

  return (
    <>
      <NavigatorRetail lang={lang} />
      {children}
      <Footer />
    </>
  )
}
