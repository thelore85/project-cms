import Footer from '@/app/components/sections/retail/FooterRetail'
import PostFeed from '@/app/components/blog/PostFeed'
import PageTitle from '@/app/components/sections/PageTitle'

type Props = {}

export default async function Home({}: Props) {
  return (
    <div className="justify-center items-start min-h-screen bg-gray-100">
      <PageTitle title="Zee Blog" description="Check out the last new from Assurance world" />
      <main className="">
        <PostFeed />
      </main>
      <Footer />
    </div>
  )
}
