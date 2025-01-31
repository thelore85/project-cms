'use client'

import SinglePost from '@/app/components/sections/blog/SinglePost'
import {usePathname} from 'next/navigation'

export default function BlogPostPage() {
  const path = usePathname()
  const blogSlug = path.split('/')[2]

  console.log('///////// slug blog', blogSlug)

  return (
    <>
      <SinglePost slug={blogSlug} />
    </>
  )
}
