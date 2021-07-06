import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogListItem from '../components/blog/list-item'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPost(limit: 10, sort: {fields: title}) {
        edges {
          node {
            id
            content
            title
            slug
          }
        }
      }
    }
  `);

  return (
    <Layout pageTitle="My Blog Posts">
      <div>
      {
        data.allDatoCmsPost.edges.map(({ node }, index) => (
          <BlogListItem item={node} key={index}/>
        ))
      }
      </div>
    </Layout>
  )

}

export default BlogPage
