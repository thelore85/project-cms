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

export async function getPageBySlug(title: string, lang: string) {
  return await client.fetch(
    groq`
      *[_type == "page" && pageSlug == $title && language == $lang][0]{
        title,
        _createdAt,
        body,
        "slug": slug.current,
        layout,
        sections[] -> {
          _type,



      

          ///////////////////////////////////////////////
          //// INTERACTIVE
          ///////////////////////////////////////////////


          // Campi specifici per 'Logo Strip'
          _type == "logoStrip" => {
            "title": title,
            "logos": partnersLogo[] {
              "image": image.asset->url
            }
          },


          // Campi specifici per 'FAQ'
          _type == "faq" => {
            "title": title,
             "cards": faqCards[] {
              "content": content,
              "title": title
            }
          },




          ///////////////////////////////////////////////
          //// HERO
          ///////////////////////////////////////////////

          // Campi specifici per 'hero'
          _type == "hero" => {
            "image": image.asset->url,
            "title": title,
            "subtitle": subtitle,
            "buttonLabel": button1.label,
            "buttonUrl": button1.url,
          },

          // Campi specifici per 'heroBig'
          _type == "heroBig" => {
            "image": image.asset->url,
            "title": sectionTitle,
            "subtitle": subtitle,
          },

          // Campi specifici per 'hero form'
          _type == "heroForm" => {
            "image": image.asset->url,
            "title": sectionTitle,
            "subtitle": subtitle,
          },





          ///////////////////////////////////////////////
          //// CARDS
          ///////////////////////////////////////////////

          // Campi specifici per 'cardParagraph'
          _type == "cardParagraph" => {
            "content": content,
          },


          // Campi specifici per 'bigCardLeft'
          _type == "bigCardLeft" => {
            "image": image.asset->url,
            "title": title,
            "subtitle": subtitle,
            "content": content,
          },


          // Campi specifici per 'Card Feature'
          _type == "cardFeature" => {
            "title": sectionTitle,
            "cards": cardFeature[] {
              "title": title,
              "description": description,
              "image": image.asset->url
            }
          },


          // Campi specifici per 'Card Slider'
          _type == "cardSlider" => {
            "title": title,
             "cards": cardSlider[] {
              "description": description,
              "image": image.asset->url
            }
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





          ///////////////////////////////////////////////
          //// MAIN CONTENTS
          ///////////////////////////////////////////////

          // Campi specifici per 'paragraph'
          _type == "paragraph" => {
            "title": title,
            "content": content,
          },
          // Campi specifici per 'paragraphImageRight'
          _type == "paragraphImageRight" => {
            "title": title,
            "columnLeft": columnLeft,
            "image": image.asset->url,
          },
          // Campi specifici per 'pageTitle'
          _type == "pageTitle" => {
            "title": title,
            "subtitle": subtitle,
          },



        }
      }`,
    {title, lang},
  )
}
