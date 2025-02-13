import SinglePageTemplate from './SinglePageTemplate'

type PageProps = {
  params: any
}

export default async function Page({params}: PageProps) {
  const {pageSlug, lang} = await params

  return (
    <div className="min-h-screen">
      <SinglePageTemplate slug={pageSlug} lang={lang} />
    </div>
  )
}
