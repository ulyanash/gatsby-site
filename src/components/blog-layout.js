import * as React from 'react'
import AllTagsList from './blog/list/tags'
import Layout from './layout'

const BlogLayout = ({ pageTitle, children }) => {

  return (
      <Layout pageTitle={pageTitle}>
        {children}

        <AllTagsList />
      </Layout>
  )
}


export default BlogLayout