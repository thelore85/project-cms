'use client'

import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  email: z.string().email('Correo electrónico inválido'),
})

type FormData = z.infer<typeof schema>
type Props = {}

export default function FormNewsletter({}: Props) {
  const [email, setEmail] = useState('')

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email')}
        placeholder="email@gmail.com..."
        className="p-3 rounded-xl border-2 border-black w-full mb-2"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      {errors.email && <span className="block font-light text-[13px] text-red-800 italic mb-2">{errors.email.message}</span>}

      <button
        type="submit"
        className="shadow-flat text-white px-10 py-2 font-noticia text-xl font-bold text-center bg-primary hover:bg-secondary hover:text-black rounded-full w-full lg:w-auto"
      >
        Apúntate a la waitlist
      </button>
    </form>
  )
}
