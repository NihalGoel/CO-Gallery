import Link from 'next/link'
import { useRouter } from "next/router";

export default function PostPreview({
  title,
  slug,
}) {
  const router = useRouter();
  const isActive = router.asPath.endsWith(slug.toString().split(" ").pop())
  console.log(router)
  if(isActive)
    console.log(router)
  return (
    <div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className={isActive ? "active" : "inactive"}>{title}</a>
        </Link>
      </h3>
    </div>
  )
}
