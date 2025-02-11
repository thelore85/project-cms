import FooterStandard from '@/components/sections/retail/FooterRetail'
import FreeText from '@/components/sections/FreeText'
import PageTitle from '@/components/sections/PageTitle'

type Props = {}

export default async function Legal({}: Props) {
  return (
    <div className="min-h-screen">
      <div className="justify-center items-start min-h-screen bg-gray-100">
        <PageTitle title="Terms and Conditions " description="Find here all terms and condition you can find" />
        <FreeText />
      </div>
    </div>
  )
}
