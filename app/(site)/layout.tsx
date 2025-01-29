import {Noticia_Text, Poppins} from 'next/font/google'
import '../globals.css'

// Comonents
import Navigator from '../components/navigations/Navigator'
import Footer from '../components/sections/FooterStandard'
import ScrollToTop from '../components/utility/ScrollToTop'

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
        <ScrollToTop />
        <Navigator />
        {children}
        <Footer />
      </body>
    </html>
  )
}
