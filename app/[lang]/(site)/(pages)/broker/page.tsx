import MetaDataGeneric from '@/app/components/metaData/MetaDataGeneric'
import Faq from '@/app/components/sections/retail/FaqRetail'
import HeroBroker from '@/app/components/sections/broker/HeroBroker'
import ValuePropositionBroker from '@/app/components/sections/broker/ValuePropositionBroker'

export default async function Home() {
  return (
    <>
      <MetaDataGeneric />
      <div className="min-h-screen ">
        <main className="">
          <HeroBroker />
          <ValuePropositionBroker />
        </main>
      </div>
    </>
  )
}
