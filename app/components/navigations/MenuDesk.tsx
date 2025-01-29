import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoBlack from './LogoBlack'

type Props = {}

export default function MenuDesk({}: Props) {
  return (
    <div className="container hidden lg:block">
      <nav className="flex items-center justify-between bg-white rounded-full border-2 border-black shadow-flat px-8 py-4 font-bold font-noticia">
        <div className="flex items-center w-3/5 justify-between">
          <LogoBlack />
          <Link href="/#howTo" className="hover:text-primary">
            <span>Sobre Nosotros</span>
          </Link>
          <Link href="#testimonials" className="hover:text-primary">
            <span>Opiniones</span>
          </Link>
          <Link href="#faq" className="hover:text-primary">
            <span>Faq</span>
          </Link>
          <Link href="#footer" className="hover:text-primary">
            <span>Contacto</span>
          </Link>
        </div>
        <div className="">
          <Link href="#" className=" me-6 text-primary hover:text-foreground">
            <span>¿Eres broker?</span>
          </Link>
          <Link href="#" className="px-6 py-1 rounded-full border-2 border-black hover:bg-secondary ">
            <span className="">Iniciar sesión</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
