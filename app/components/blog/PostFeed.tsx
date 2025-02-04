'use client'

import {getLocalPosts} from '@/sanity/sanity-utils'
import useStore from '@/store/store'
import {faArrowRight, faSpinner} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useState} from 'react'

export default function PostFeed() {
  const {lang} = useStore()
  const [posts, setPosts] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      const postFeed = await getLocalPosts(lang)
      setPosts(postFeed)
      setLoading(false)
    }
    fetchPosts()
  }, [lang]) // Ricarica i dati quando cambia la lingua

  return (
    <section className="container py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} spin className="w-14 h-14 text-primary" />
      ) : (
        posts?.map((post: any) => (
          <div key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{post.title}</h2>
              <Image src={post.mainImage.asset.url} alt="post-image" width={600} height={400} className="rounded-md w-full mb-2" />
              <div className="text-gray-700 line-clamp-4">
                <PortableText value={post.body} />
              </div>
            </div>

            <div className="p-6 pt-2">
              <Link href={`/es/blog/${post.slug}`} className="text-blue-500 text-primary font-medium">
                Leer mas <FontAwesomeIcon icon={faArrowRight} className="ms-4 w-4 h-4" />
              </Link>
            </div>
          </div>
        ))
      )}
    </section>
  )
}
