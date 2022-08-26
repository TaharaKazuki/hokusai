import { FC } from 'react'
import { Card, CardActions, CardContent, Button } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

type Props = {
  article: {
    img: string
    name: string
    excerpt: string
    slug: string
  }
}

export const CardItem: FC<Props> = ({ article }) => {
  return (
    <Fade>
      <Card style={{ maxWidth: 500 }}>
        <Image
          src={`/images/arts/${article.img}`}
          layout="responsive"
          width="1920"
          height="1080"
          alt="image"
        />
        <CardContent>
          <h5>{article.name}</h5>
          <p>{article.excerpt}</p>
        </CardContent>
        <CardActions>
          <Link href={`/articles/${article.slug}`} passHref>
            <Button variant="contained" color="primary">
              Link
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Fade>
  )
}
