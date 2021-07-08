const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsPost {
          edges {
            node {
              tag {
                slug
              }
              slug
            }
          }
        }
      }
    `).then(result => {
      var tags = [];
      
      result.data.allDatoCmsPost.edges.map(({ node: post }) => {
        
        // create post page
        createPage({
          path: `post/${post.slug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: post.slug,
          },
        })

        // create tag page
        post.tag.map((tag_item) => {
          if (!tags.includes(tag_item.slug)) {
            createPage({
              path: `tag/${tag_item.slug}`,
              component: path.resolve(`./src/templates/tag.js`),
              context: {
                slug: tag_item.slug,
              },
            })

            tags.push(tag_item.slug)
          }
        })

        // posts pagination
        const posts = result.data.allDatoCmsPost.edges
        const postsPerPage = 2
        const numPages = Math.ceil(posts.length / postsPerPage)
        for (let i = 0; i < numPages; i++) {
          createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/blog-list.js"),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        }

        // todo: add tags and post pagination

      })
      resolve()
    })
  })
}