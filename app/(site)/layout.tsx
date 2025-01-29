import {Geist, Geist_Mono, Inter, Noticia_Text, Poppins} from 'next/font/google'
import '../globals.css'

// Comonents
import ScrollToTop from '@/app/components/utility/ScrollToTop'
import Navigator from '../components/navigations/Navigator'
import Footer from '../components/sections/FooterStandard'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

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
}

export default function RootLayout({children}: Props) {
  return (
    <html lang="es" className={`${noticiaText.variable} ${poppins.variable} antialiased`}>
      <body>
        {/* <ScrollToTop /> */}
        <Navigator />
        {children}
        <Footer />
      </body>
    </html>
  )
}
