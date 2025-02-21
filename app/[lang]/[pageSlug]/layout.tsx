import LayoutTemplate from './LayoutTemplate'

type Props = {
  children: React.ReactNode
  params:
    | {
        lang: string
        pageSlug: string
      }
    | Promise<{
        lang: string
        pageSlug: string
      }>
}

export default async function PageLayout({children, params}: Props) {
  // Ensure params is resolved properly, await if it's a Promise
  const resolvedParams = await (params instanceof Promise ? params : Promise.resolve(params))

  return (
    <>
      {/* ////////////////// */}
      {/* Add metadata here  */}
      {/* ////////////////// */}

      <LayoutTemplate params={resolvedParams}>{children}</LayoutTemplate>
    </>
  )
}
