import markdownStyles from './markdown-styles.module.css'
import container from './container.module.css'

export default function PostBody({ content }) {
  const selectEveryWordInsideP = /(\w+(?![^<>]*>))/igm
  console.log(content)
  content = content.toString()
    .replace(/(<strong>)/igm, ' <span class="tooltip">1<span class="tooltip-text">')
    .replace(/(<\/strong>)/igm, '</span></span>')
  console.log(content)
  content = content.toString().replace(selectEveryWordInsideP, '<span class="post-text">$1</span>')
  // console.log(content)
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
