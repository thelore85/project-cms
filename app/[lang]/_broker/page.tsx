import MetaDataGeneric from '@/components/metaData/MetaDataGeneric'
import CardLeft from '@/components/sections/CardLeft'
import CardTab from '@/components/sections/CardTab'
import Faq from '@/components/sections/Faq'

import HeroBroker from '@/components/sections/HeroBroker'
import HowTo from '@/components/sections/HowTo'
import PartnersBannerLight from '@/components/sections/PartnersBannerLight'
import Testimonials from '@/components/sections/Testimonials'

export default async function Home() {
  return (
    <>
      <MetaDataGeneric />
      <div className="min-h-screen ">
        <main className="">
          <HeroBroker />
          <CardTab />
          <HowTo />
          <PartnersBannerLight />
          <CardLeft />
          <Testimonials />
          <Faq />
        </main>
      </div>
    </>
  )
}
