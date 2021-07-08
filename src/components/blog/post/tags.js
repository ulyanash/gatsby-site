import React from 'react'
import * as styles from './styles/tags.module.css'

const PostTags = ({tags}) => {  
  return (
    <p>
      {
        tags.map(function(tag){
          return <span className={styles.tag}>tag.name</span>;
        })
      }
    </p>
  )
}

export default PostTags