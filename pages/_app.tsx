import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { LayoutMain } from '@/components/ui/main.layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  )
}

export default MyApp
