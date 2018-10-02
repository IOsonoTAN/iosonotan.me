const webpack = require('webpack')
require('dotenv').config()

const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: (config) => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
      return acc
    }, {})

    config.plugins.push(new webpack.DefinePlugin(env))

    config.plugins.push(
      new webpack.ProvidePlugin({
        'window.Quill': 'quill'
      })
    )

    config.node = {
      fs: 'empty'
    }

    return config
  }
})
