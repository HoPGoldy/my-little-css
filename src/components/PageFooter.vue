<style scoped lang="stylus">
.footer-container
    padding 64px 0px 16px 0px
    width 100%

    span, a
        font-size 8px
        font-weight bold
        text-decoration none
.split
    margin 0px 16px

.dark-mod
    span
        color #fff
    a, a:visited
        color #a0c2ff


</style>

<template lang="pug">
.footer-container(:class='dark ? "dark-mod" : ""')
    span 来源: 
    a(:href='originUrl' target='_blank') {{originLabel}}
    span.split |
    span github 代码: 
    a(:href='codeUrl' target='_blank') {{codeLabel}}
</template>

<script>
/**
 * 页脚，用于显示作者来源和代码地址
 * 
 * @param {boolean} dark [可选] 是否启用深色模式 (文本颜色会变浅)
 * @param {string} originLabel [可选] 来源链接显示文本
 * @param {string} originUrl [可选] 来源链接
 * @param {string} codeLabel 代码地址链接显示文本
 * @param {string} codeUrl 代码地址链接显示文本
 */
export default {
    name: 'PageFooter',
    props: {
        dark: {
            type: Boolean,
            default: false
        },
        originLabel: {
            type: String,
            default: 'hopgoldy'
        },
        originUrl: {
            type: String,
            default: 'https://github.com/HoPGoldy/my-little-css'
        },
        codeLabel: {
            type: String,
            required: true
        },
        codeUrl: {
            type: String,
            required: true
        }
    }
}
</script>
