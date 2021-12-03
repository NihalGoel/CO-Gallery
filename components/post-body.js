import markdownStyles from './markdown-styles.module.css'
import container from './container.module.css'

export default function PostBody({ content }) {
  return (
      <div
        className={markdownStyles['markdown'], container.body}
        dangerouslySetInnerHTML={{ __html: content }}
      />
  )
}
