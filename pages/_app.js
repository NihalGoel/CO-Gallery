import '../styles/globals.css';
import styles from '../styles/index.module.css';
import Meta from '../components/meta';

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Meta />
    <Component {...pageProps} />
  </>)
}
