import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import BlogListItem from '../components/blog/list/item'

export default class BlogList extends React.Component {

  render() { 
    const { currentPage, numPages } = this.props.pageContext
    const data = this.props.data

    return (
      <Layout pageTitle={`Blog list`}>
        {
          data.allDatoCmsPost.edges.map(({ node }, index) => (
            <BlogListItem item={node} key={index}/>
          ))
        }

        {Array.from({ length: numPages }, (_, i) => (
          <Link key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
            {i + 1}
          </Link>
        ))}
      </Layout>
    )
  }
}

export const query = graphql`
  query PostsQuery($skip: Int!, $limit: Int!) {
    allDatoCmsPost(
      limit: $limit
      skip: $skip
      sort: {fields: [featured, position, meta___publishedAt], order: [DESC, ASC, DESC]}
    ) {
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
  }
`