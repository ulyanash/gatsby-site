import React from 'react'
import Img from 'gatsby-image'
import * as styles from './styles/author-image.module.css'

const PostAuthorImage = ({image, alt}) => {
  if (image == null) {
    return
  }
  return (
    <div className={styles.avatar}>
      <Img fixed={image.fixed} alt={alt} />
    </div>
  )
}

export default PostAuthorImage