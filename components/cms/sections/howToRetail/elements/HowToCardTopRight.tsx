import Image from 'next/image'
import React from 'react'

type Props = {
  title: string
  imgUrl: string
  description: string
  number: string
}

export default function HowToCardsTopRight({title, imgUrl, description, number}: Props) {
  return (
    <div className="bg-white border-2 border-black p-3 rounded-xl shadow-flat w-full lg:max-w-[500px] mb-10 lg:mb-0">
      <div className="relative mb-10">
        <div className="absolute flex justify-center items-center top-[-25px] left-[-25px] rounded-full bg-white p-8 w-[60px] h-[60px] border-2 border-black">
          <span className="font-noticia text-secondary font-bold text-4xl">{number}</span>
        </div>
        <h3 className="block text-center px-10 py-2 rounded-md text-black text-pretty">{title}</h3>
        <div className="absolute top-[-20px] right-[-90px] hidden md:block ">
          {imgUrl && <Image src={imgUrl} alt="photo" className="w-[130px] h-[80px]" width={200} height={200} />}
        </div>
      </div>
      <div className="rounded-lg py-5 px-8 text-white bg-primary flex justify-between items-center">
        <span className="font-normal text-xl leading-7">{description}</span>
      </div>
    </div>
  )
}
