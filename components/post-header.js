import PostTitle from '../components/post-title'

export default function PostHeader({ title }) {
  return (
    <>
      <a href="/" className="clouds-glossary">Clouds Glossary</a>
      <PostTitle>{title}</PostTitle>
    </>
  )
}
