import markdownStyles from './markdown-styles.module.css'
import container from './container.module.css'

export default function PostBody({ content }) {
  const selectEveryWordInsideP = /(\w+(?![^<>]*>))/igm
  content = content.toString()
    .replace(/(-!)/gm, '<span class="tooltip"><sup><strong>')
    .replace(/(!-)/gm, '</strong></sup><span class="tooltip-text">')
    .replace(/(<\/p>\n<h2>)/igm, '')
    .replace(/(<\/h2>)/igm, '</span></span></p>')
    .replace(selectEveryWordInsideP, '<span class="post-text">$1</span>')

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
