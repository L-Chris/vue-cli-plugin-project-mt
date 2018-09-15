module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      review: 'serve -s dist'
    },
    dependencies: {
      "axios": "^0.18.0",
      'vuex': '^3.0.1',
      'vue-router': '^3.0.1'
    },
    devDependencies: {
      'node-sass': '^4.9.0',
      'sass-loader': '^7.0.1'
    }
  })

  api.render('./template')
}