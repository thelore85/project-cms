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
    const currentLang = currentPathname.split('/')[1]
    if (lang !== currentLang && ['es', 'en', 'it'].includes(currentLang)) {
      setLang(currentLang)
    }
  }, [currentPathname])
  console.log('///////// lang: ', lang)

  // update lang variable and url path
  const handleLangSelection = (newLang: string) => {
    if (newLang === lang) return // do not update if no change
    // const newPath = currentPathname.replace(`/${lang}`, `/${newLang}`)
    const newPath = `/${newLang}`

    setLang(newLang)
    router.push(newPath)
  }

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
