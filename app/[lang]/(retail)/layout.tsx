import Footer from '@/app/components/sections/retail/FooterRetail'
import ScrollToTop from '@/app/components/utility/ScrollToTop'
import NavigatorRetail from '@/app/components/navigations/retail/NavigatorRetail'
import {useParams} from 'next/navigation'

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
      <NavigatorRetail lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  )
}
