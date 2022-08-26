import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Header } from '@/components/navigation/header'

type Props = {
  children: ReactNode
}

export const LayoutMain: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hokusai tribute</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This is a tribute page pf hokusai" />
        <meta name="keywords" content="Hokusai, art, paint" />
        <meta name="author" content="Francis" />
      </Head>
      <Header />
      <div className="container">{children}</div>
    </>
  )
}
