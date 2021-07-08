import React from 'react'
import * as styles from './styles/tags.module.css'

const PostTags = ({tags}) => {  
  return (
    <p>
      {
        tags.map(function(tag){
          return <a className={styles.tag} href={"/tag/"+tag.slug}>{tag.name}</a>;
        })
      }
    </p>
  )
}

export default PostTags