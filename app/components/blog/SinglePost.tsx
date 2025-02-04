'use client'

import {useState, useEffect} from 'react'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'
import {PortableText} from 'next-sanity'
import {getPost} from '@/sanity/sanity-utils'

type Props = {
  slug: string
}

export default function SinglePost({slug}: Props) {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return
      const data = await getPost(slug)
      setPost(data)
      setLoading(false)
    }
    fetchPost()
  }, [slug])

  if (loading) {
    return <div>Caricamento...</div>
  }

  if (!post) {
    return (
      <div className="container min-h-screen py-9">
        <main className="bg-white rounded-md shadow-md p-10">
          <h1 className="text-4xl font-bold mb-4">Nessun post trovato</h1>
          <Link href="/es/blog" className="text-primary">
            <FontAwesomeIcon icon={faArrowLeft} className="me-3" /> Volver al Blog
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="container flex justify-center items-center min-h-screen">
      <main className="p-6 bg-white rounded-lg shadow-lg max-w-[800px] mb-20">
        <Link href="/blog" className="text-primary text-sm mb-6 inline-block">
          <FontAwesomeIcon icon={faArrowLeft} className="me-3" /> Volver al Blog
        </Link>
        <h1 className="text-4xl font-bold mb-10">{post.title}</h1>
        {post.mainImage?.asset?.url && (
          <div className="mb-6">
            <Image src={post.mainImage.asset.url} alt="Post image" width={600} height={400} className="object-cover rounded-lg w-full" />
          </div>
        )}
        <div className="mt-6 text-gray-700 leading-relaxed">
          <PortableText value={post.body} />
        </div>
      </main>
    </div>
  )
}
