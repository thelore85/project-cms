import {Noticia_Text, Poppins} from 'next/font/google'
import {GoogleTagManager} from '@next/third-parties/google'
import '@/app/globals.css'

// Comonents
// import ScrollToTop from '@/components/utility/ScrollToTop'

const noticiaText = Noticia_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noticia-text',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

type Props = {
  children: React.ReactNode
  // params: {lang: string; pageSlug: string}
}

export default function RootLayout({children}: Props) {
  return (
    <html lang="es" className={`${noticiaText.variable} ${poppins.variable} antialiased`}>
      <body>
        <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
        {/* <ScrollToTop /> */}
        {children}
      </body>
    </html>
  )
}
