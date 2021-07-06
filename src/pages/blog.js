import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogListItem from '../components/blog/list/item'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPost(limit: 10, sort: {fields: [featured, position, meta___publishedAt], order: [DESC, ASC, DESC]}) {
        edges {
          node {
            id
            content
            title
            slug
            position
          }
        }
      }
    }
  `);

  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allDatoCmsPost.edges.map(({ node }, index) => (
          <BlogListItem item={node} key={index}/>
        ))
      }
    </Layout>
  )

}

export default BlogPage
