import React from 'react'
import * as styles from './styles/pagination.module.css' 

const CurrentPage = ({i}) => {
  return <span className={styles.current}>{i+1}</span>
}

const LinkToPage = ({i}) => {
  return <a href={`/blog/${i === 0 ? "" : i + 1}`}>{i + 1}</a>
}

const BlogPagination = ({total, current}) => {
  
  return (
    <div className={styles.pagination}>
      {Array.from({ length: total }, (_, i) => (
        (i+1==current) ? <CurrentPage i={i}/> : <LinkToPage i={i} />
      ))}
    </div>
    )
}

export default BlogPagination