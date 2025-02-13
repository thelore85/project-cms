import Link from 'next/link'
import React from 'react'
import LogoBlack from './LogoBlack'

type Props = {
  lang: string
}

export default function MenuDesk({lang}: Props) {
  return (
    <div className="container hidden lg:block">
      <nav className="flex items-center justify-between bg-white rounded-full border-2 border-black shadow-flat px-8 py-4 font-bold font-noticia">
        <div className="flex items-center w-3/5 justify-left gap-10">
          <LogoBlack lang={lang} />
          <Link href={`/${lang}/home/#howTo`} className="hover:text-primary">
            <span>Sobre Nosotros</span>
          </Link>
          <Link href={`/${lang}/home/#testimonials`} className="hover:text-primary">
            <span>Opiniones</span>
          </Link>
          <Link href={`/${lang}/home/#faq`} className="hover:text-primary">
            <span>Faq</span>
          </Link>
          <Link href={`/${lang}/home/#footer`} className="hover:text-primary">
            <span>Contacto</span>
          </Link>
          <Link href={`/${lang}/blog`} className="hover:text-primary">
            <span>Blog</span>
          </Link>
        </div>
        <div className="">
          <Link href={`/${lang}/broker`} className=" me-6 text-primary hover:text-foreground">
            <span>¿Eres broker?</span>
          </Link>
          <Link href={`/${lang}/home`} className="px-6 py-1 rounded-full border-2 border-black hover:bg-secondary ">
            <span className="">Iniciar sesión</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
