export const metadata = {
  title: 'Zeeguros | home page',
  description: 'El tuo seguro haz Zee :)',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
