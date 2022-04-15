module.exports = {
  devServer: {
    port: 7100,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: 'subVue',
      libraryTarget: 'umd'
    }
  }
}