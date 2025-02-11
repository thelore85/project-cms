import Image from 'next/image'

type Props = {
  section: any
}

export default function ValueProposition({section}: Props) {
  return (
    <section className="bg-background">
      <div className="container mb-20">
        <div className="mb-10">
          <h2 className="text-center lg:w-2/3 w-full m-auto font-bold text-6xl">{section.title}</h2>
        </div>
        <div className="lg:flex gap-4">
          {section.cards?.map((card: any, index: number) => (
            <div key={index} className="bg-white border-2 mb-4 border-black p-3 rounded-xl shadow-flat w-full m-auto">
              <div className="xl:flex justify-between items-center">
                <Image className="w-[120px] h-[120px] m-auto md:m-0" width={250} height={250} src={card.image || ''} alt={card.title || ''} />
                <h3 className="inline-block px-4 py-2 rounded-md text-black">{card.title}</h3>
              </div>
              <div className="rounded-lg p-5 text-white bg-primary flex justify-between items-center">
                <span className="text-2xl me-2 hidden lg:block">100%</span>
                <span className="">{card.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
