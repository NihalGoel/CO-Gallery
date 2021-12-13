import markdownStyles from './markdown-styles.module.css'
import container from './container.module.css'

export default function PostBody({ content }) {
  const regexToSelectWordsInsideParagraphs = /(\w+(?![^<>]*>))/igm
  content = content.toString().replace(regexToSelectWordsInsideParagraphs, '<span>$1</span>')

  return (
    <div className="post-body">
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
