import container from '../components/container.module.css'
import Menu from '../components/menu'
import Posts from '../components/posts'
import { useRouter } from 'next/router'

export default function Index({posts, children}) {
  const router = useRouter()
  let filteredPosts;
  const isDE = router.asPath.toString().endsWith("=de")
  let artistUrl;
  let cloudsGlossaryText;
  if(isDE){
    filteredPosts = posts.filter(filterDe)
    artistUrl = "/posts/Adrian_de"
    cloudsGlossaryText = "Unter, in und über Wolken"
  } else {
    filteredPosts = posts.filter(filterEn)
    artistUrl = "/posts/Adrian_en"
    cloudsGlossaryText = "Below, in, and above Clouds"
  }

  return (
          <div className={container.container}>
            <a href="/" className="clouds-glossary">{cloudsGlossaryText}</a>
            <a href={artistUrl} className="adrian-sauer">+</a>
            <a href="?lang=en" className="en">(En)</a>
            <a href="?lang=de" className="de">(De)</a>
            <div className={container.contentContainer}></div>
            <Menu>
              {filteredPosts.length > 0 && <Posts posts={filteredPosts}></Posts>}
            </Menu>
            <div>{children}</div>
          </div>
      )
    }

function filterEn(value){
  return value.slug.toString().endsWith("_en")
}

function filterDe(value){
  return value.slug.toString().endsWith("_de")
}

export async function getStaticProps() {
  return {
    props: {
      posts: require('../lib/api.js'),
    },
  }
}
