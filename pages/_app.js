import '../styles/globals.css'
import Meta from '../components/meta'

export default function MyApp({ Component, pageProps }) {
  return (<>
            <Meta/>
            <Component {...pageProps} />
          </>)
}
