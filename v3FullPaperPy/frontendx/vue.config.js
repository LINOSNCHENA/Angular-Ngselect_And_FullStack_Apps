module.exports = {
    lintOnSave: false,
    transpileDependencies: [
        // can be string or regex
        'my-dep',
        /other-dep/
      ],
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}