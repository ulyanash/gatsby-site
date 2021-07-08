import React from 'react'
import { graphql } from 'gatsby'
import BlogLayout from "../components/blog-layout"
import BlogListItem from '../components/blog/list/item'
import BlogPagination from '../components/blog/list/pagination'

export default class BlogList extends React.Component {

  render() { 
    const { currentPage, numPages } = this.props.pageContext
    const data = this.props.data

    return (
      <BlogLayout pageTitle={`Blog list`}>
        {
          data.allDatoCmsPost.edges.map(({ node }, index) => (
            <BlogListItem item={node} key={index}/>
          ))
        }

        <BlogPagination total={numPages} current={currentPage} url={`/blog/`} />
        
      </BlogLayout>
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