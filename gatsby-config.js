module.exports = {
  siteMetadata: {
    title: `ByteBandits`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/writeups`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        pedantic: false,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 720,
            },
          },
          `gatsby-remark-copy-linked-files`
        ],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [
          `tags`,
          `type`,
          `tools`,
          `techniques`,
          `ctfName`,
          `problemName`,
          `author`,
          // http://danhounshell.com/blog/tips-for-gatsby-elasticlunr-search-plugin/
          // `body`
        ],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            // http://danhounshell.com/blog/tips-for-gatsby-elasticlunr-search-plugin/
            // body: node => node.rawMarkdownBody,
            tags: node => {
              let tags = node.rawMarkdownBody.split('\n').find(line => line.indexOf('[](tags=') !== -1)
              return tags ? tags.substring(8, tags.length-1).split(',') : []
            },
            type: node => {
              let tags = node.rawMarkdownBody.split('\n').find(line => line.indexOf('[](type=') !== -1)
              return tags ? tags.substring(8, tags.length-1).split(',') : []
            },
            tools: node => {
              let tags = node.rawMarkdownBody.split('\n').find(line => line.indexOf('[](tools=') !== -1)
              return tags ? tags.substring(8, tags.length-1).split(',') : []
            },
            techniques: node => {
              let tags = node.rawMarkdownBody.split('\n').find(line => line.indexOf('[](techniques=') !== -1)
              return tags ? tags.substring(8, tags.length-1).split(',') : []
            },
            ctfName: node => {
              let relativePath = node.fileAbsolutePath.substr(__dirname.length)
              const srcLength = '/src/'.length
              const readmeMDLength = '/README.md'.length
              if (relativePath.substr(0, srcLength) === '/src/' && relativePath.substr(relativePath.length - readmeMDLength).toLowerCase() === '/readme.md') {
                return ('/' + relativePath.substring(srcLength, relativePath.length - readmeMDLength)).split('/')[2]
              }
            },
            problemName: node => {
              let relativePath = node.fileAbsolutePath.substr(__dirname.length)
              const srcLength = '/src/'.length
              const readmeMDLength = '/README.md'.length
              if (relativePath.substr(0, srcLength) === '/src/' && relativePath.substr(relativePath.length - readmeMDLength).toLowerCase() === '/readme.md') {
                return ('/' + relativePath.substring(srcLength, relativePath.length - readmeMDLength)).split('/')[4]
              }
            },
            author: node => {
              let relativePath = node.fileAbsolutePath.substr(__dirname.length)
              const srcLength = '/src/'.length
              const readmeMDLength = '/README.md'.length
              if (relativePath.substr(0, srcLength) === '/src/' && relativePath.substr(relativePath.length - readmeMDLength).toLowerCase() === '/readme.md') {
                return ('/' + relativePath.substring(srcLength, relativePath.length - readmeMDLength)).split('/')[5]
              }
            },
            path: node => {
              let relativePath = node.fileAbsolutePath.substr(__dirname.length)
              const srcLength = '/src/'.length
              const readmeMDLength = '/README.md'.length
              if (relativePath.substr(0, srcLength) === '/src/' && relativePath.substr(relativePath.length - readmeMDLength).toLowerCase() === '/readme.md') {
                return relativePath.substring(srcLength, relativePath.length - readmeMDLength)
              }
            }
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
