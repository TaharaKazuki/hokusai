import { FC } from 'react'
import { GetStaticPropsContext, GetStaticPropsResult, GetStaticPathsResult } from 'next'
import { getJsonData } from 'utils/tool'
import Image from 'next/image'

type Props = {
  data?: Article
}

type Article = {
  id: string
  name: string
  excerpt: string
  slug: string
  img: string
  content: string
}

const ArticlePage: FC<Props> = ({ data }) => {
  return data ? (
    <div>
      <Image
        src={`/images/arts/${data.img}`}
        layout="responsive"
        width="1920"
        height="1080"
        alt="image"
      />
      <div className="article_container">
        <h1>{data.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export const getStaticProps = async (
  context: GetStaticPropsContext<{ slug: string }>
): Promise<GetStaticPropsResult<Props>> => {
  const { params } = context

  const data = await getJsonData()
  const articles = data.articles as Article[]

  let articleData = articles.find((article) => article.slug === params!.slug)

  return {
    props: {
      data: articleData,
    },
  }
}

export const getStaticPaths = async (): Promise<GetStaticPathsResult<{ slug: string }>> => {
  const data = await getJsonData()
  const paths = data.articles.map((article: any) => ({
    params: { slug: article.slug },
  }))
  return { paths, fallback: false }
}

export default ArticlePage
