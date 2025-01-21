import Link from 'next/link'

export default async function Home() {
  return (
    <div className="min-h-screen ">
      <main className="">
        <div>
          <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url('/img/components/hero/bg.jpg'})`}}>
            <div className=" text-center text-gray-900 px-4">
              <div className=" mb-10">
                <h1 className="text-8xl font-bold mb-4">Hero Title</h1>
                <p className="text-4xl mb-6">Hero Subtitle</p>
              </div>
              <div className="flex justify-center gap-4">
                <a href="#" className="px-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-800 transition">
                  Learn More
                </a>
                <a href="#" className="px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition">
                  Buy Now
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="p-4 rounded-md border-gray-100 bg-gray-50 border-2 mb-2">
          <Link href="/blog" className="text-blue-500 hover:text-blue-700 font-medium">
            {'>'} Go to Blog
          </Link>
        </div>
      </main>
    </div>
  )
}
