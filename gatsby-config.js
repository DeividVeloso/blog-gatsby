module.exports = {
  siteMetadata: {
    title: 'Programador de Guerrilha Blog',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/contents`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-glamor`,
  ]
}
