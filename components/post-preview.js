import Link from 'next/link'

export default function PostPreview({
  title,
  slug,
}) {
  return (
    <div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
    </div>
  )
}
