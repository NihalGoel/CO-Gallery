import markdownStyles from './markdown-styles.module.css'
import container from './container.module.css'

export default function PostBody({ content }) {

  const regexToSelectWordsInsideParagraphs = /(\w+(?![^<>]*>))/igm
  console.log(content)
  content = content.toString().replace(regexToSelectWordsInsideParagraphs, '<span>$1</span>')
  return (
      <div
        className={markdownStyles['markdown'], container.body}
        dangerouslySetInnerHTML={{ __html: content }}
      />
  )
}
