'use client'

import React, {useState} from 'react'

type Props = {}

export default function Newsletter({}: Props) {
  const [email, setEmail] = useState('')

  const subitNewsletter = () => {
    console.log('sending email to newsletter: ', email)
  }
  return (
    <div className="w-full">
      <input type="email" placeholder="email@gmail.com..." value={email} className="p-3 rounded-xl border-2 border-black w-full mb-4" onChange={e => setEmail(e.target.value)}></input>
      <button className=" shadow-flat px-10 py-1 font-noticia text-xl font-bold text-center bg-secondary rounded-full w-full lg:w-auto" onClick={subitNewsletter}>
        Apuntarme
      </button>
    </div>
  )
}
