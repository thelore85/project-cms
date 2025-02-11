'use client'

import SinglePost from '@/components/blog/SinglePost'
import {usePathname} from 'next/navigation'

export default function BlogPostPage() {
  const path = usePathname()
  const blogSlug = path.split('/')[3]

  console.log('///////// slug blog', blogSlug)

  return (
    <>
      <SinglePost slug={blogSlug} />
    </>
  )
}
