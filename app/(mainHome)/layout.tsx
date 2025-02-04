import Footer from '@/app/components/sections/retail/FooterRetail'
import ScrollToTop from '@/app/components/utility/ScrollToTop'
import NavigatorRetail from '@/app/components/navigations/retail/NavigatorRetail'

type Props = {
  children: React.ReactNode
}

export default function BrokerLayout({children}: Props) {
  return (
    <>
      <ScrollToTop />
      <NavigatorRetail />
      {children}
      <Footer />
    </>
  )
}
