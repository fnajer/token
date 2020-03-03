/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        modules: path.resolve(__dirname, 'src/modules'),
        styles: path.resolve(__dirname, 'src/styles'),
        locales: path.resolve(__dirname, 'src/locales'),
        shared: path.resolve(__dirname, 'src/shared'),
        icons: path.resolve(__dirname, 'src/icons'),
      },
    },
  })
}