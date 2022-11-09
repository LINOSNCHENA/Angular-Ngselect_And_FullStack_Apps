module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8083
    },
    transpileDependencies: [
        // can be string or regex
        'my-dep',
        /other-dep/
      ],
    chainWebpack: config => {
        config.module.rules.delete('eslint')
      
    }
}