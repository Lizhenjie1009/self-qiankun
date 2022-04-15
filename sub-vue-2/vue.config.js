module.exports = {
  devServer: {
    port: 7200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: 'sub-vue',
      libraryTarget: 'umd'
    }
  }
}