import FooterStandard from '@/components/static/sections/Footer'
import FreeText from '@/components/static/sections/FreeText'
import PageTitle from '@/components/static/sections/PageTitle'

type Props = {}

export default async function Legal({}: Props) {
  return (
    <div className="min-h-screen">
      <div className="justify-center items-start min-h-screen">
        <PageTitle title="Terms and Conditions " description="Find here all terms and condition you can find" />
        <FreeText />
      </div>
    </div>
  )
}
