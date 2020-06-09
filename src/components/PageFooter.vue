<style scoped lang="stylus">
.footer-container
    padding-top 64px
    width 100%

    span, a
        font-size 8px
        font-weight bold
        text-decoration none
.split
    margin 0px 16px
</style>

<template lang="pug">
.footer-container
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
 * @param {string} originLabel [可选] 来源链接显示文本
 * @param {string} originUrl [可选] 来源链接
 * @param {string} codeLabel 代码地址链接显示文本
 * @param {string} codeUrl 代码地址链接显示文本
 */
export default {
    name: 'PageFooter',
    props: {
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
