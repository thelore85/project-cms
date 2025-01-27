import MetaDataGeneric from '@/app/components/metaData/MetaDataGeneric'
import Footer from '@/app/components/sections/FooterStandard'
import HeroBig from '@/app/components/sections/HeroBig'
import HowTo from '@/app/components/sections/HowTo'
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
          <Footer />
        </main>
      </div>
    </>
  )
}
