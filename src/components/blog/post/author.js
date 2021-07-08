import React from 'react'
import PostAuthorImage from './author-image'
import * as styles from './styles/author.module.css'

const PostAuthor = ({author}) => {  
  if (!author) {
    return '';
  }

  return (
    <div className={styles.author}>
      <PostAuthorImage image={author?.avatar} alt={author.name} />
      <span className={styles.author_name}>
        {author.name}
      </span>
    </div>
  )
}

export default PostAuthor