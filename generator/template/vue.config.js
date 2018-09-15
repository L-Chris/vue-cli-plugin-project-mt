module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': resolve('assets'),
        'components': resolve('components'),
        'utils': resolve('utils'),
        'views': resolve('views')
      }
    },
  },
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
      data: `
        @import "@/styles/var.scss";
        @import "@/styles/mixins.scss";
      `
    }
  }
}