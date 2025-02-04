import Footer from '@/app/components/sections/retail/FooterRetail'
import ScrollToTop from '@/app/components/utility/ScrollToTop'
import NavigatorBroker from '@/app/components/navigations/broker/NavigatorBroker'
import FooterBroker from '@/app/components/sections/broker/FooterBroker'

type Props = {
  children: React.ReactNode
}

export default function BrokerLayout({children}: Props) {
  return (
    <>
      <NavigatorBroker />
      {children}
      <FooterBroker />
    </>
  )
}
