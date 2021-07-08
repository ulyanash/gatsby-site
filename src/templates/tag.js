import React from 'react'
import { graphql } from 'gatsby'
import BlogListItem from '../components/blog/list/item'
import BlogLayout from '../components/blog-layout'
import BlogPagination from '../components/blog/list/pagination'

export default class Tag extends React.Component {

    render() { 
      const { currentPage, numPages } = this.props.pageContext
      const data = this.props.data
  

      return (
        <BlogLayout pageTitle={`Tag ${data.datoCmsTag.name}`}>
          {
            data.allDatoCmsPost.edges.map(({ node }, index) => (
              <BlogListItem item={node} key={index}/>
            ))
          }

          <BlogPagination total={numPages} current={currentPage} url={`/tag/${data.datoCmsTag.slug}/`} />
        </BlogLayout>
      )
    }
}

export const query = graphql`
  query TagPostsQuery($slug: String!, $skip: Int!, $limit: Int!) {
    allDatoCmsPost(filter: {tag: {elemMatch: {slug: {eq: $slug}}}}, limit: $limit, skip: $skip, sort: {fields: [featured, position, meta___publishedAt], order: [DESC, ASC, DESC]}) {
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
