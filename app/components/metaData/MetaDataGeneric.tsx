import {Metadata} from 'next'

type Props = Metadata & {}

export default async function MetaTagsGeneric({}: Props) {
  return (
    <>
      {/* PAGE META TAG */}
      <title>Zeeguros | Tu seguro haz Zee!</title>
      <meta name="description" content="Las mejores ofertas de seguros, con unos pocos clicks" />
      <meta name="keywords" content={'seguro'} />
      <meta name="author" content="Zeeguros" />

      {/* LINKS */}
      <link rel="canonical" href="https://www.zeeguros.com/" />
      <link rel="icon" href="/img/favicon/favicon.ico" />
      <link rel="manifest" href={`/manifest.json`}></link>

      {/* SOCIAL MEDIA */}
      <meta property="og:description" content="Las mejores ofertas de seguros, con unos pocos clicks" />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_FRONT_URL}` + '/img/social/social_image.png'} />
      <meta property="og:url" content="https://www.zeeguros.com/" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zeeguros | tu seguro haz Zee!" />
      <meta name="twitter:description" content="Las mejores ofertas de seguros, con unos pocos clicks" />
      <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_FRONT_URL}` + '/img/social/social_image.png'} />
    </>
  )
}
