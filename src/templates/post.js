import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const Post = ({ data }) => (
    <Layout>
      <article className="post">
        <HelmetDatoCms seo={data.datoCmsPost.seoMetaTags} />
        <div className="post-inner">
          <h1>{data.datoCmsPost.title}</h1>

          <div
            className="post-body"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsPost.contentNode.childMarkdownRemark.html,
            }}
          />

          {data.datoCmsPost.image != null &&
              <div className="post-image">
                <img src={data.datoCmsPost.image?.url} alt={data.datoCmsPost.title} />
              </div>
          }
        </div>
      </article>
    </Layout>
)

export const query = graphql`
  query PostQuery($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      category {
        name
      }
      content
      id
      image {
        url
      }
      meta {
        publishedAt
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      slug
      title
      tag {
        name
      }
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Post