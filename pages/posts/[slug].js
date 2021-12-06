import { useRouter } from 'next/router'
import Posts from '../../components/posts'
import container from '../../components/container.module.css'
import Menu from '../../components/menu'
import markdownToHtml from '../../lib/markdownToHtml'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import {getPostBySlug, getAllPosts} from '../../lib/postHelpers';

export default function Post({ post, titles }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
        <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Head>
            <title>
            {post.title} | C|O gallery
            </title>
          </Head>
          <div className={container.container}>
            <PostHeader title={post.title} />
            <PostBody content={post.content} />
            <Menu>{titles.length > 0 && <Posts posts={titles}/>}</Menu>
          </div>
        </>
      )}
        </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')
  const postTitles = getAllPosts(['slug', 'title', 'content']);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      titles: postTitles
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
