import {apiVersion, dataset, projectId} from '../sanity/env'
import {createClient, groq} from 'next-sanity'

// Crea un'istanza condivisa del client Sanity
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Usa la CDN per query più veloci in ambienti di produzione
})

export async function getLocalPosts(lang: string) {
  const posts = await client.fetch(
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

export async function getPageBySlug(title: string) {
  return await client.fetch(
    groq`
      *[_type == "page" && title == $title][0]{
        title,
        _createdAt,
        body,
        "slug": slug.current,
        sections[] -> {
          _type,

          // Campi specifici per 'hero'
          _type == "hero" => {
            "image": image.asset->url,
            "title": title,
            "subtitle": subtitle,
            "buttonLabel": button1.label,
            "buttonUrl": button1.url,
          },

          // Campi specifici per 'hero form'
          _type == "heroForm" => {
            "image": image.asset->url,
            "title": sectionTitle,
            "subtitle": subtitle,
          },

          // Campi specifici per 'howTo'
          _type == "howTo" => {
            "title": title,
            "step1Title": step1.title,
            "step1Description": step1.description,
            "step1Image": step1.image.asset->url,
            "step2Title": step2.title,
            "step2Description": step2.description,
            "step2Image": step2.image.asset->url,
            "step3Title": step3.title,
            "step3Description": step3.description,
            "step3Image": step3.image.asset->url
          },

          // Campi specifici per 'Partners Banner'
          _type == "partnersBanner" => {
            "title": title,
            "logos": partnersLogo[] {
              "image": image.asset->url
            }
          },


          // Campi specifici per 'value'
          _type == "value" => {
            "title": sectionTitle,
            "cards": serviceCards[] {
              "title": title,
              "description": description,
              "image": image.asset->url
            }
          }
        }
      }`,
    {title},
  )
}
