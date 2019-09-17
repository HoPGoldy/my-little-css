const resolve = require('path').resolve

// vue.config.js
module.exports = {
    // 选项...
    baseUrl: './',
    chainWebpack: config => {
        config.resolve.alias
            .set('comp', resolve(__dirname, './src/components'))
            .set('styles', resolve(__dirname, './src/styles'))

        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    }
}

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                resolve(__dirname, './src/styles/global.styl'),
            ],
        })
}  