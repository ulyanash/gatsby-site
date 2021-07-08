import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostImage from "../components/blog/post/image"
import PostTitle from "../components/blog/post/title"
import PostMeta from "../components/blog/post/meta"
import PostBody from "../components/blog/post/body"

const Post = ({ data }) => {

  return (
    <Layout>
      <article className="post">
        <HelmetDatoCms seo={data.datoCmsPost.seoMetaTags} />
        <div className="post-inner">
          <PostTitle title={data.datoCmsPost.title} />
          <PostMeta item={data.datoCmsPost} />
          <PostImage image={data.datoCmsPost.image} alt={data.datoCmsPost.title} />
          <PostBody html={data.datoCmsPost.contentNode.childMarkdownRemark.html} />
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      content
      id
      image {
        fluid(maxWidth: 600, imgixParams: { auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
        url
      }
      meta {
        publishedAt(formatString: "LL")
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      slug
      title
      tag {
        name
        slug
      }
      author {
        name
        avatar {
          fixed(
            width: 48
            height: 48
            imgixParams: { fm: "jpg", fit: "crop", sat: -100 }
          ) {
            ...GatsbyDatoCmsFixed
          }
        }
      }
      contentNode {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`

export default Post