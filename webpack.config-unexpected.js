const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    'index': './index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build-unexpected')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'a',
      minChunks: (module) => {
        // called for every module in `index`
        return module.resource && module.resource.includes('a.js')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'b',
      minChunks: (module) => {
        // called for every module in `a`
        return module.resource && module.resource.includes('b.js')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ]
}
