import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faPhone} from '@fortawesome/free-solid-svg-icons'

type Props = {}

export default function HeroBig({}: Props) {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url('/img/components/hero/bg.jpg')`}}>
      <div className=" text-center text-gray-900 px-4">
        <div className=" mb-10">
          <h1 className="text-8xl font-bold mb-4">Hero Title</h1>
          <p className="text-4xl mb-6">Hero Subtitle</p>
        </div>
        <div className="flex justify-center gap-4">
          <Link href="#" className="px-6 py-3 bg-primary text-white rounded-lg">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4 inline-block me-3" />
            Learn More
          </Link>
          <Link href="#" className="px-6 py-3 bg-secondary text-white rounded-lg">
            <FontAwesomeIcon icon={faHome} className="w-4 h-4 inline-block me-3" />
            Buy now
          </Link>
        </div>
      </div>
    </section>
  )
}
