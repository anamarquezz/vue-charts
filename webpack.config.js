'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

let config = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 'vue': 'vue/dist/vue.common',
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    // common config

    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

let distConfig = Object.assign({}, config, {
  name: 'dist config',
  entry: './src/vue-charts.js',
  output: {
    path: __dirname + '/dist',
    filename: 'vue-charts.js'
  },
})

let sampleConfig = Object.assign({}, config, {
  name: 'sample config',
  entry: './src/sample.js',
  output: {
    path: __dirname + '/dist',
    filename: 'sample.js'
  },
})

module.exports = [distConfig, sampleConfig]
