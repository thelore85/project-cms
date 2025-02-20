import MetaDataGeneric from '@/components/static/metaData/MetaDataGeneric'
import CardLeft from '@/components/static/sections/CardLeft'
import CardTab from '@/components/static/sections/CardTab'
import Faq from '@/components/static/sections/Faq'

import HeroBroker from '@/components/static/sections/HeroBroker'
import HowTo from '@/components/static/sections/HowTo'
import PartnersBannerLight from '@/components/static/sections/PartnersBannerLight'
import Testimonials from '@/components/static/sections/Testimonials'

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
