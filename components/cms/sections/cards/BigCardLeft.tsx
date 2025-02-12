import Image from 'next/image'

type Props = {
  section: any
}

export default function BigCardLeft({section}: Props) {
  console.log('///////// big card section: ', section)
  return (
    <section id="valueProposition" className="bg-background">
      <div className="container my-20">
        <div className="mb-10">
          <h2 className="text-center w-full m-auto font-bold text-6xl">{section.title}</h2>
        </div>
        <div className="flex justify-center">
          {/* CARD  */}
          <div className="bg-white border-2 mb-4 border-black p-5 rounded-xl shadow-flat  w-5/6 m-auto">
            <div className="xl:flex justify-between gap-5">
              <Image className="w-[300px] h-[300px] border-2 border-black m-auto md:m-0 rounded-lg" width={250} height={250} src="/img/components/valueProposition/deal_img.png" alt="good" />
              <div className="p-8">
                <h3 className="inline-block py-2 rounded-md text-black text-center w-full mb-4 text-4xl font-bold">{section.subtitle}</h3>
                <p className="text-lg">{section.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
