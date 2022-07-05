import type { AppProps } from 'next/app'
import Home from './index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
	<>
		<Home />
	</>
  )
}

export default MyApp
