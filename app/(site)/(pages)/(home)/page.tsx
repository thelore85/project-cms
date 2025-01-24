import MetaTagsGeneric from '@/app/components/metaData/MetaDataGeneric'
import Footer from '@/app/components/sections/FooterStandard'
import HeroBig from '@/app/components/sections/HeroBig'

export default async function Home() {
  return (
    <>
      <MetaTagsGeneric />
      <div className="min-h-screen ">
        <main className="">
          <HeroBig />
          <Footer />
        </main>
      </div>
    </>
  )
}
