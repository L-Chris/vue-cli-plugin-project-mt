module.exports = {
  devServer: {
    proxy: {
      '/mock/': {
        target: 'https://nei.netease.com/api/apimock',
        changeOrigin: true,
        pathRewrite: {
          '/mock': '/mockServer-key'
        }
      },
      '/parent': {
        target: 'http://mapi.ekwing.com/parent',
        changeOrigin: true,
        pathRewrite: {
          '^/parent': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/var.scss";
          @import "@/styles/mixins.scss";
        `
      }
    }
  }
}