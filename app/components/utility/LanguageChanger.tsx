'use client'

import {useRouter} from 'next/navigation'
import {usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
// import i18nConfig from '@/i18nConfig';

export default function LanguageChanger() {
  // const { i18n } = useTranslation();
  const router = useRouter()
  const currentPathname = usePathname()
  const [lang, setLang] = useState<string>()

  useEffect(() => {
    const currentLang = currentPathname.split('/')[1]
    console.log('///////////current lang: ', currentLang)
    setLang(currentLang)
  }, [])

  // language selection
  const handleChange = (e: any) => {
    const newLang = e.target.value
    router.push(currentPathname.replace(`/${lang}`, `/${newLang}`))
    // router.refresh()
    setLang(newLang)
  }

  return (
    <div className="mt-10">
      <select onChange={handleChange} value={lang} className="text-gray-700 text-sm p-2 rounded-md">
        <option value="en">Inglese</option>
        <option value="it">Italiano</option>
        <option value="es">Español</option>
      </select>
    </div>
  )
}
