import MetaDataGeneric from '@/app/components/metaData/MetaDataGeneric'
import Faq from '@/app/components/sections/Faq'
import HeroBig from '@/app/components/sections/HeroBig'
import HowTo from '@/app/components/sections/HowTo'
import Partners from '@/app/components/sections/Partners'
import Testimonials from '@/app/components/sections/Testimonials'
import ValueProposition from '@/app/components/sections/ValueProposition'

export default async function Home() {
  return (
    <>
      <MetaDataGeneric />
      <div className="min-h-screen ">
        <main className="">
          <HeroBig />
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
