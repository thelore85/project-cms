export const metadata = {
  title: 'Zeeguros | Terms and conditions',
  description: 'El tuo seguro haz Zee :)',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
