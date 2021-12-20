import PostTitle from '../components/post-title'
import { useRouter } from 'next/router'

export default function PostHeader({ title }) {
  const router = useRouter()
  const enUrl = router.asPath.toString().replace("_de", "_en")
  const deUrl = router.asPath.toString().replace("_en", "_de")
  const isDE = router.asPath.toString().endsWith("_de")
  let artistUrl
  if(isDE){
    artistUrl = "/posts/Adrian_de"
  } else {
    artistUrl = "/posts/Adrian_en"
  }

  return (
    <>
      <a href="/" className="clouds-glossary">Clouds Glossary</a>
      <a href={enUrl} className="en">(En)</a>
      <a href={deUrl} className="de">(De)</a>
      <a href={artistUrl} className="adrian-sauer">&#8730;</a>
      <a href="/" className="cross-menu">&#x2573;</a>
      <PostTitle>{title}</PostTitle>
    </>
  )
}
