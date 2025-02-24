type Props = {
  section: {
    title: string
    image: string
    content: string
    subtitle: string
  }
}

export default function BigCardLeft({section}: Props) {
  return (
    <section id="valueProposition" className="bg-background">
      <div className="container my-20">
        <div className="mb-10">
          <h2 className="text-center w-full m-auto font-bold text-6xl">{section.title}</h2>
        </div>
        <div className="flex justify-center">
          {/* CARD  */}
          <div className="bg-white border-2 mb-4 border-black p-5 rounded-xl shadow-flat w-full m-auto">
            <div className="xl:flex justify-between gap-5">
              <div
                className="w-full md:w-4/12 min-h-[400px] rounded-3xl shadow-lg bg-cover bg-center"
                style={{backgroundImage: `url(${section.image})`}}
              ></div>
              <div className="w-full md:w-8/12 p-4 md:p-8">
                <h3 className="inline-block py-2 rounded-md text-black text-center w-full mb-4 text-4xl font-bold">{section.subtitle}</h3>
                <p className="text-lg mb-0">{section.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
