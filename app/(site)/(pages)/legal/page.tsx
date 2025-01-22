import FooterStandard from '@/app/components/sections/FooterStandard'
import FreeText from '@/app/components/sections/FreeText'
import PageTitle from '@/app/components/sections/PageTitle'

type Props = {}

export default async function Legal({}: Props) {
  return (
    <div className="min-h-screen">
      <main className="">
        <PageTitle title="Terms and condition" description="here you can find all terms of your Zeeguros account" />
        <FreeText />
        <FooterStandard />
      </main>
    </div>
  )
}
