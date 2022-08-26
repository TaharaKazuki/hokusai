import type { NextPage, GetStaticPropsResult } from 'next'
import { CarrouselCom } from '@/components/ui/carrousel'
import { Articles } from '@/components/home/articles'
import { getJsonData } from 'utils/tool'

type Props = {
  data: {
    carrousel: {
      id: string
      name: string
      title: string
    }[]
    articles: {
      id: string
      name: string
      excerpt: string
      slug: string
      img: string
    }[]
  }
}

const Home: NextPage<Props> = ({ data }) => {
  console.info(data)
  return (
    <>
      <CarrouselCom data={data.carrousel} />
      <Articles data={data.articles} />
    </>
  )
}

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  const data = await getJsonData()
  return {
    props: {
      data: data,
    },
  }
}

export default Home
