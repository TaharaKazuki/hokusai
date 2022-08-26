import type { NextPage, GetStaticProps } from 'next'
import { CarrouselCom } from '@/components/ui/carrousel'
import { getJsonData } from 'utils/tool'

type Props = {
  data: {
    carrousel: {
      id: string
      name: string
      title: string
    }[]
  }
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <CarrouselCom data={data.carrousel} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getJsonData()
  return {
    props: {
      data: data,
    },
  }
}

export default Home
