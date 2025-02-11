////////////////////////////////////////////////////////
// Manage redirecto for main rout navigation

import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

export function middleware(req: NextRequest) {
  const {pathname} = req.nextUrl

  // Lista delle lingue supportate
  const supportedLocales = ['es', 'en', 'it']
  const defaultLocale = 'es'

  // Se la path è già una lingua (es. /en, /it) non fare nulla
  const firstSegment = pathname.split('/')[1]
  if (supportedLocales.includes(firstSegment)) {
    return NextResponse.next()
  }

  // Se siamo in `/`, reindirizza a `/es` (o la lingua predefinita)
  const newUrl = new URL(`/${defaultLocale}${pathname}/home`, req.url)
  return NextResponse.redirect(newUrl)
}

// Configura Next.js per eseguire il middleware su tutte le pagine
export const config = {
  matcher: '/((?!_next|api|favicon.ico).*)',
}
