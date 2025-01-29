'use client'

import {usePathname} from 'next/navigation'
import React, {useEffect} from 'react'

type Props = {}

export default function ScrollToTop({}: Props) {
  const pathname = usePathname()
  console.log('/// pathname: ', pathname)

  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY

          // Scrolla verso l'elemento con un offset di 20px
          window.scrollTo({
            top: elementPosition - 20,
            behavior: 'smooth',
          })
          return
        }
      }
      // Se non c'è hash o l'elemento non viene trovato, scrolla in cima
      window.scrollTo(0, 0)
    }

    // Esegui lo scroll all'inizio
    handleScrollToHash()

    // Aggiungi un listener per il cambiamento dell'hash
    const handleHashChange = () => handleScrollToHash()
    window.addEventListener('hashchange', handleHashChange)

    // Pulisci l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [pathname]) // Usa pathname come dipendenza

  return null
}
