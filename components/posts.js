import PostPreview from '../components/post-preview'

export default function Posts({ posts, children }) {
  return (
      <div>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
          />
        ))}
      </div>
  )
}
