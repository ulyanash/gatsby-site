module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbysite70129.gatsbyjs.io",
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `fcca537b301288bd47c93ef9ab3d17`,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/",
      }
    }
  ],
};
