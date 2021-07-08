require("dotenv").config({
  path: `.env`,
})

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
      var tags = {};
      
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
          if (tags[tag_item.slug] == undefined) {
            tags[tag_item.slug] = 1;
          } else {
            tags[tag_item.slug]++;
          }
        })

        // posts pagination
        const posts = result.data.allDatoCmsPost.edges
        const postsPerPage = parseInt(process.env.POSTS_PER_PAGE)
        var numPages = Math.ceil(posts.length / postsPerPage)
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

        // tags pagination
        Object.entries(tags).forEach(([tag_slug, tag_posts]) => {
          numPages = Math.ceil(tag_posts / postsPerPage)
          for (let i = 0; i < numPages; i++) {
            createPage({
              path: i === 0 ? `/tag/${tag_slug}` : `/tag/${tag_slug}/${i + 1}`,
              component: path.resolve("./src/templates/tag.js"),
              context: {
                slug: tag_slug,
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
              },
            })
          }
        })
        
      })
      resolve()
    })
  })
}