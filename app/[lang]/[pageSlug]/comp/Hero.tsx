type Props = {
  section: any
}

export default function Hero({section}: Props) {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${section.image?.asset?.url || ''})`}}>
      <div className=" text-center text-gray-900 px-4">
        <div className=" mb-10">
          <h1 className="text-8xl font-bold mb-4">{section.title || 'Hero Title'}</h1>
          <p className="text-4xl mb-6">{section.subtitle || 'Hero Subtitle'}</p>
        </div>
        <div className="flex justify-center gap-4">
          <a href={section.button1?.url || '#'} className="px-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-800 transition">
            {section.button1?.label || 'CTA 1'}
          </a>
          <a href={section.button2?.url || '#'} className="px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition">
            {section.button2?.label || 'CTA 2'}
          </a>
        </div>
      </div>
    </section>
  )
}
