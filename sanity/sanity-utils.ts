import {apiVersion, dataset, projectId} from '../sanity/env'
import {createClient, groq} from 'next-sanity'

// Crea un'istanza condivisa del client Sanity
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Usa la CDN per query più veloci in ambienti di produzione
})

type PostProps = {
  _id: string
  _createdAt: string
  title: string
  body: any // Puoi migliorare questa tipizzazione se conosci la struttura precisa del body
  mainImage: {
    asset: {
      url: string
    }
    alt?: string
  }
  slug: string
  _translations?: []
}

export async function getLocalPosts(lang: string) {
  const posts: PostProps = await client.fetch(
    groq`*[_type == "post" && language == $lang]{
      _id,
      _createdAt,
      title,
      body,
      mainImage { asset -> { url }, alt },
      "slug": slug.current,
      "_translations": *[_type == "translation.metadata" && references(^._id)][0].translations[].value->{
        title,
        "slug": slug.current,
        "language": language
      }
    }`,
    {lang},
  )
  return posts
}

export async function getPosts() {
  const posts = await client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      body,
      mainImage { asset -> { url }, alt },
      "slug": slug.current
    }`,
  )
  return posts
}

export async function getPost(slug: string) {
  console.log(slug)
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      _createdAt,
      body,
      mainImage { asset -> { url }, alt },
      "slug": slug.current
    }`,
    {slug},
  )
}

// export async function getPost() {
//   return await client.fetch(
//     groq`*[_type == "post"][0]{
//       title,
//       _createdAt,
//       body,
//       mainImage { asset -> { url }, alt },
//       "slug": slug.current
//     }`,
//   )
// }

export async function getPage() {
  return await client.fetch(
    groq`
    *[_type == "page"][0]{
      title,
      _createdAt,
      body,
      "slug": slug.current,
      components[] -> {
        _type,
        title,
        subtitle,
        image { asset -> { url } },
        button1 { label, url },
        button2 { label, url },
        sectionTitle,
        sectionSubtitle,
        serviceCards[] {
          title,
          description,
          image { asset -> { url } }
        }
      }
    }`,
  )
}

export async function getBurgerMenu() {
  return await client.fetch(
    groq`
    *[_type == "burger"][0]{
      title,
      description,
      logo {
        asset -> { url }
      },
      links[] {
        label,
        url,
        slug
      }
    }`,
  )
}
