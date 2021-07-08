import React from 'react'
import { graphql } from 'gatsby'
import BlogListItem from '../components/blog/list/item'
import BlogLayout from '../components/blog-layout'

const Tag = ({ data }) => {

  return (
    <BlogLayout pageTitle={`Tag ${data.datoCmsTag.name}`}>
      {
        data.allDatoCmsPost.edges.map(({ node }, index) => (
          <BlogListItem item={node} key={index}/>
        ))
      }
    </BlogLayout>
  )
}

export const query = graphql`
  query TagPostsQuery($slug: String!) {
    allDatoCmsPost(filter: {tag: {elemMatch: {slug: {eq: $slug}}}}, limit: 10, sort: {fields: [featured, position, meta___publishedAt], order: [DESC, ASC, DESC]}) {
      edges {
        node {
          id
          title
          slug
          position
          contentNode {
            childMarkdownRemark {
              excerpt(pruneLength: 100, truncate: true, format: PLAIN)
            }
          }
        }
      }
    }
    datoCmsTag(slug: {eq: $slug}) {
      name
      slug
    }
  }
`

export default Tag