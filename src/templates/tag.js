import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import BlogListItem from '../components/blog/list/item'

const Tag = ({ data }) => {

  return (
    <Layout pageTitle={`Tag ${data.datoCmsTag.name}`}>
      {
        data.allDatoCmsPost.edges.map(({ node }, index) => (
          <BlogListItem item={node} key={index}/>
        ))
      }
    </Layout>
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