import NavigatorBroker from '@/app/components/navigations/broker/NavigatorBroker'
import FooterBroker from '@/app/components/sections/broker/FooterBroker'

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
      <NavigatorBroker lang={lang} />
      {children}
      <FooterBroker lang={lang} />
    </>
  )
}
