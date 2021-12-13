import container from '../components/container.module.css'
import Menu from '../components/menu'
import Posts from '../components/posts'

export default function Index({posts, children}) {
      return (
          <div className={container.container}>
            <a href="/" className="clouds-glossary">Clouds Glossary</a>
            <a href="/" className="adrian-sauer">&#8730;</a>
            <div className={container.contentContainer}></div>
            <Menu>
              {posts.length > 0 && <Posts posts={posts}></Posts>}
            </Menu>
            <div>{children}</div>
          </div>
      )
    }

export async function getStaticProps() {
  return {
    props: {
      posts: require('../lib/api.js'),
    },
  }
}
