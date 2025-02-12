import React from 'react'

type Props = {
  section: any
}

export default function Service({section}: Props) {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{section.sectionTitle || 'Service Section Title'}</h2>
        <p className="text-lg mb-8">{section.sectionSubtitle || 'Service Section Subtitle'}</p>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
        <div className="flex flex-wrap justify-center">
          {section.serviceCards?.map((card: any, index: number) => (
            <div className="w-1/3 p-2">
              <div key={index} className=" bg-white rounded-lg shadow-md p-4 ">
                <div className="text-center">
                  <img src={card.image?.asset?.url || ''} alt={card.title || ''} className="inline-block h-20 w-20 object-cover p-4" />
                  <h3 className="text-3xl font-semibold mb-2">{card.title || 'Card Title'}</h3>
                </div>

                <p className="text-sm text-gray-600">{card.description || 'Card Description'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
