import MetaDataGeneric from '@/components/metaData/MetaDataGeneric'
import Faq from '@/components/sections/retail/FaqRetail'
import HeroRetail from '@/components/sections/retail/HeroRetail'
import HowTo from '@/components/sections/retail/HowToRetail'
import Partners from '@/components/sections/PartnersBanner'
import Testimonials from '@/components/sections/retail/Testimonials'
import ValueProposition from '@/components/sections/retail/ValuePropositionRetail'

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
