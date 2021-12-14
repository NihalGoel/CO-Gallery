import PostTitle from '../components/post-title'

export default function PostHeader({ title }) {
  return (
    <>
      <a href="/" className="clouds-glossary">Clouds Glossary</a>
      <a href="/" className="adrian-sauer">&#8730;</a>
      <a href="/" className="cross-menu">&#x2573;</a>
      <PostTitle>{title}</PostTitle>
    </>
  )
}
