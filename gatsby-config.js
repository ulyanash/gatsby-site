module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
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
  ],
};
