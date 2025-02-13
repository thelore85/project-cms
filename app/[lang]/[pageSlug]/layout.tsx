import LayoutTemplate from './LayoutTemplate'

type Props = {
  children: React.ReactNode
  params: {
    lang: string
    pageSlug: string
  }
}

export default async function PageLayout({children, params}: Props) {
  return (
    <>
      {/* ////////////////// */}
      {/* Add metadata here  */}
      {/* ////////////////// */}

      <LayoutTemplate params={params}>{children}</LayoutTemplate>
    </>
  )
}
