import React from 'react'
import * as styles from './styles/pagination.module.css' 

const CurrentPage = ({i}) => {
  return <span className={styles.current}>{i+1}</span>
}

const LinkToPage = ({i, url}) => {
  return <a href={`${url}${i === 0 ? "" : i + 1}`}>{i + 1}</a>
}

const BlogPagination = ({total, current, url}) => {
  
  return (
    <div className={styles.pagination}>
      {Array.from({ length: total }, (_, i) => (
        (i+1 === current) ? <CurrentPage i={i} key={'pagination-item-'+(i+1)} /> : <LinkToPage i={i} key={'pagination-item-'+(i+1)} url={url} />
      ))}
    </div>
    )
}

export default BlogPagination