import {getPosts} from '@/sanity/sanity-utils'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default async function PostFeed({}: Props) {
  const posts = await getPosts()
  return (
    <section className="">
      <div className="container py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts?.length > 0 ? (
          posts.map((post: any) => (
            <div key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                <Image src={post.mainImage.asset.url} alt="post-image" width={600} height={400} className="rounded-md w-full mb-2" />
                {/* <p className="text-sm text-gray-500 mb-4">{new Date(post._createdAt).toDateString()}</p> */}
                <div className="text-gray-700 line-clamp-4">
                  <PortableText value={post.body} />
                </div>
              </div>

              {/* Link to the individual post */}
              <div className="p-6 pt-2">
                <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:text-blue-700 font-medium">
                  Leggi di più →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No Published Post.</p>
        )}
      </div>
    </section>
  )
}
