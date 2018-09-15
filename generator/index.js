module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint",
      "review": 'serve -s dist'
    },
    dependencies: {
      "axios": "^0.18.0",
      "vue": "^2.5.17",
      'vuex': '^3.0.1',
      'vue-router': '^3.0.1'
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^3.0.1",
      "@vue/cli-plugin-eslint": "^3.0.1",
      "@vue/cli-service": "^3.0.1",
      "@vue/eslint-config-standard": "^3.0.3",
      'node-sass': '^4.9.0',
      'sass-loader': '^7.0.1',
      "vue-template-compiler": "^2.5.17"
    }
  })

  api.render('./template')
}