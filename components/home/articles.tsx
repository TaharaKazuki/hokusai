import { FC } from 'react'
import Masonry from 'react-masonry-css'
import { CardItem } from '@/components/ui/card'

const breakpoints = {
  default: 3,
  768: 2,
  500: 1,
}

type Props = {
  data: {
    id: string
    name: string
    excerpt: string
    slug: string
    img: string
  }[]
}

export const Articles: FC<Props> = ({ data }) => {
  return (
    <>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((article) => (
          <CardItem key={article.id} article={article} />
        ))}
      </Masonry>
    </>
  )
}
