import MetaDataGeneric from '@/components/metaData/MetaDataGeneric'
import HeroBroker from '@/components/sections/broker/HeroBroker'
import ValuePropositionBroker from '@/components/sections/broker/ValuePropositionBroker'

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
