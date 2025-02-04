import MetaDataGeneric from '@/app/components/metaData/MetaDataGeneric'
import Faq from '@/app/components/sections/retail/FaqRetail'
import HeroRetail from '@/app/components/sections/retail/HeroRetail'
import HowTo from '@/app/components/sections/retail/HowToRetail'
import Partners from '@/app/components/sections/PartnersBanner'
import Testimonials from '@/app/components/sections/retail/Testimonials'
import ValueProposition from '@/app/components/sections/retail/ValuePropositionRetail'

export default async function Home() {
  return (
    <>
      <MetaDataGeneric />
      <div className="min-h-screen ">
        <main className="">
          <HeroRetail />
          <ValueProposition />
          <HowTo />
          <Partners />
          <Testimonials />
          <Faq />
        </main>
      </div>
    </>
  )
}
