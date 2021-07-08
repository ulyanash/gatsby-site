import React from 'react'
import Img from 'gatsby-image'

const PostImage = ({image, alt}) => {
  if (image == null) {
    return ''
  }
  return (
    <div className="post-image">
      <Img  fluid={image.fluid} alt={alt} />
    </div>
  )
}

export default PostImage