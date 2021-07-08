import React from 'react'
import PostAuthor from './author'
import PostCategory from './category'
import PostTags from './tags'
import * as styles from './styles/meta.module.css'

const PostMeta = ({item}) => {
  return (
    <div className={styles.meta}>
      <span className={`${styles.date} ${styles.meta_item}`}>
        {item.meta.publishedAt}
      </span>
      <span className={styles.meta_item}>
        {item.contentNode.childMarkdownRemark.timeToRead} min
      </span>
      <PostCategory category={item.category} />
      <PostAuthor author={item.author} />
      <PostTags tags={item.tag} />
    </div>
  )
}

export default PostMeta