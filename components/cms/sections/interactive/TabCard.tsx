'use client'

import {useState} from 'react'
import {PortableText} from 'next-sanity'

type Props = {
  section: any
}

export default function TabCard({section}: Props) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="tabCard" className="bg-background">
      <div className="container my-20">
        <div className="mb-10">
          <h2 className="text-center w-full m-auto font-bold text-6xl">{section.title}</h2>
        </div>

        {/* CARD - TABS */}
        <div className="flex gap-4 justify-between bg-white rounded-full border-2 border-black mb-5 px-4 md:px-64 py-2 overflow-x-scroll overflow-hidden">
          {section.tabs.map((tab: {title: string}, index: number) => (
            <div
              key={index.toString()}
              className={`text-center rounded-3xl px-4 md:px-3 md:py-2 text-md md:text-xl w-40 cursor-pointer transition-all duration-300 ${index === activeTab ? 'bg-primary text-primary-foreground opacity-100' : 'bg-background text-foreground opacity-75'}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>

        {/* CARDS */}
        {section.tabs.map(
          (tab: {image: string; content: any}, index: number) =>
            index === activeTab && (
              <div
                key={index.toString()}
                className="flex justify-center bg-white border-2 mb-4 border-black p-5 rounded-3xl shadow-flat m-auto min-h-[400px]"
              >
                <div className=" md:flex justify-between items-center gap-5">
                  <div
                    className="md:w-1/2 min-h-[400px] rounded-3xl shadow-lg bg-cover bg-center"
                    style={{backgroundImage: `url(${tab.image})`}}
                  ></div>
                  <div className="md:w-1/2 p-10 text-2xl font-light">
                    <PortableText value={tab.content} />
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
    </section>
  )
}
