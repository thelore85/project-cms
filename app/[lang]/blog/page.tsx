import PageTitle from '@/components/sections/PageTitle'
import PostFeed from '@/components/blog/PostFeed'

type Props = {}

export default async function Home({}: Props) {
  return (
    <div className="justify-center items-start min-h-screen bg-gray-100">
      <PageTitle title="El Manual de los Seguros " description="Guías prácticas para entender, comparar y elegir seguros de forma inteligente, evitando costos ocultos y tomando decisiones seguras" />
      <main className="">
        <PostFeed />
      </main>
    </div>
  )
}
