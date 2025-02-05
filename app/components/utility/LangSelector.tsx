'use client'

import {useRouter, usePathname} from 'next/navigation'
import {useEffect} from 'react'
import useStore from '@/store/store'

export default function LangSelector() {
  const {lang, setLang} = useStore()
  const router = useRouter()
  const currentPathname = usePathname()

  // update lang on pathchange for manua input
  useEffect(() => {
    langManager()
  }, [])

  const langManager = () => {
    const urlLang = currentPathname.split('/')[1]
    if (urlLang === '') {
      // 1- LOAD DEFAULT LANGUAGE FROM BROWSER FAVOURITE
      setLang('es')
      return 'es'
    }

    if (urlLang !== '') {
      // 2- DETECT PATH INPUT/CHANGE
      setLang(urlLang)
      return urlLang
    }
  }

  // 3- UPDATE BY SELECTION
  const handleLangSelection = (newLang: string) => {
    if (newLang === lang) return // do not update if no change
    // const newPath = currentPathname.replace(`/${lang}`, `/${newLang}`)
    const newPath = `/${newLang}`

    setLang(newLang)
    router.push(newPath)
  }

  console.log('//// lang: ', lang)

  return (
    <div className="mt-10">
      <select onChange={e => handleLangSelection(e.target.value)} value={lang} className="text-gray-700 text-sm py-2 px-3 pr-6 rounded-md">
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
    </div>
  )
}
