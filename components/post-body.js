import markdownStyles from './markdown-styles.module.css'
import container from './container.module.css'

export default function PostBody({ content }) {
  const selectEveryWordInsideP = /(\w+(?![^<>]*>))/igm
  console.log(content)
  content = content.toString()
    .replace(/(<\/p>\n<h2>)/igm, ' <span class="tooltip"><sup><strong>1</strong></sup><span class="tooltip-text">')
    .replace(/(<\/h2>)/igm, '</span></span></p>')
  // console.log(content)
  content = content.toString().replace(selectEveryWordInsideP, '<span class="post-text">$1</span>')
  console.log(content)
  return (
    <div className="post-body">
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      >
        </div>
    </div>
  )
}
