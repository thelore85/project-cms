// useStore.ts
import {create} from 'zustand'

interface StoreState {
  // Variables type
  lang: string
  currency: string

  // Actions type
  setLang: (lang: string) => void
  setCurrency: (currency: string) => void
}

const useStore = create<StoreState>(set => ({
  // Variables default value
  lang: 'es',
  currency: 'EUR',

  // Actions
  setLang: (lang: string) => set({lang}),
  setCurrency: (currency: string) => set({currency}),
}))

export default useStore
