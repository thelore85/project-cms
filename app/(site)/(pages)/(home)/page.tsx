import MetaDataGeneric from '@/app/components/metaData/MetaDataGeneric'
import MenuDesk from '@/app/components/navigations/MenuDesk'
import Navigator from '@/app/components/navigations/Navigator'
import Faq from '@/app/components/sections/Faq'
import Footer from '@/app/components/sections/FooterStandard'
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
          <Navigator />
          <HeroBig />
          <ValueProposition />
          <HowTo />
          <Partners />
          <Testimonials />
          <Faq />
          <Footer />
        </main>
      </div>
    </>
  )
}
