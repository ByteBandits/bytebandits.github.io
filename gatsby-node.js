/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

// You can delete this file if you're not using it
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const writeupTemplate = path.resolve("./src/templates/writeup.js")

  return graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: {
            regex: "/.*\/writeups\/.*/README.md$/i"
          }
        },
      ) {
        edges {
          node {
            html
            fileAbsolutePath
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let relativePath = node.fileAbsolutePath.substr(__dirname.length)
      const srcLength = '/src/'.length
      const readmeMDLength = '/README.md'.length
      if (relativePath.substr(0, srcLength) === '/src/' && relativePath.substr(relativePath.length - readmeMDLength).toLowerCase() === '/readme.md') {
        relativePath = relativePath.substring(srcLength, relativePath.length - readmeMDLength)
        createPage({
          path: `/${relativePath}`,
          component: writeupTemplate,
          context: {
            html: node.html,
            relativePath: relativePath,
          },
        })
      }
    })
  })
}
