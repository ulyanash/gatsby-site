import React from 'react'
import Img from 'gatsby-image'

const PostAuthorImage = ({image, alt}) => {
  if (image == null) {
    return
  }
  return (
    <div className="post-author-image">
      <Img fixed={image.fixed} alt={alt} />
    </div>
  )
}

export default PostAuthorImage