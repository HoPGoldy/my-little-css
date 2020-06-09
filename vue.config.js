const resolve = require('path').resolve

// vue.config.js
module.exports = {
    // 选项...
    baseUrl: './my-little-css/',
    outputDir: 'docs',
    chainWebpack: config => {
        config.resolve.alias
            .set('comp', resolve(__dirname, './src/components'))
            .set('styles', resolve(__dirname, './src/styles'))
            .set('images', resolve(__dirname, './src/images'))
        
        if (process.env.use_analyzer) {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }

        config
            .plugin('html-webpack-plugin')
            .use(require('html-webpack-plugin'))
        config
            .plugin('webpack-cdn-plugin')
            .use(require('webpack-cdn-plugin'), [{
                modules: [
                    {
                        name: 'vue',
                        var: 'Vue',
                        path: 'vue.min.js'
                    },
                    {
                        name: 'vue-router',
                        var: 'VueRouter',
                        path: 'vue-router.min.js'
                    }
                ],
                prodUrl: '//cdn.bootcdn.net/ajax/libs/:name/:version/:path'
            }])

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