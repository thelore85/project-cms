import NavigatorBroker from '@/components/navigations/broker/NavigatorBroker'
import FooterBroker from '@/components/sections/FooterBroker'

type Props = {
  children: React.ReactNode
  params: any
}

export default async function BrokerLayout({children, params}: Props) {
  const {lang} = await params
  return (
    <>
      <NavigatorBroker lang={lang} />
      {children}
      <FooterBroker lang={lang} />
    </>
  )
}
