import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from './styles/tags.module.css'
import * as tag_styles from '../post/styles/tags.module.css'

const AllTagsList = () => {
  const data = useStaticQuery(graphql`
  query Tags {
    allDatoCmsTag {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`)

  return (
    <div className={styles.tags_list}>
      <h3>List of Tags</h3>
      {data.allDatoCmsTag.edges.map(({node}) => { return <Link to={'/tag/'+node.slug} key={'tag-list-'+node.slug}><span className={tag_styles.tag}>{node.name}</span></Link> })}
    </div>
  )
}

export default AllTagsList