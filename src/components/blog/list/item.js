import * as React from 'react'
import { Link } from 'gatsby'

const BlogListItem = ({item}) => (
  <div>
      <h2> {item.position} <Link to={'/post/' + item.slug}>{item.title}</Link></h2>
      <p
          dangerouslySetInnerHTML={{
            __html: item.contentNode.childMarkdownRemark.excerpt,
          }}
          itemProp="content"
        />
  </div>
)
  
export default BlogListItem