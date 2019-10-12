<style scoped lang="stylus">
.split-bar-container
    margin 0px 12px
    width 24px
    position relative
    top 0
    bottom 0
    border-radius 13px
    opacity 0.6
    display flex
    flex-flow column nowrap
    justify-content space-around
</style>

<template lang="pug">
.split-bar-container(:style="{ backgroundColor: color }")
    img.icon(v-for='done, index in nodes' :index='index' :src="done ? successIcon : loadIcon")
</template>

<script>
/**
 * 中间的分隔条
 */
export default {
    name: 'SplitBar',
    data: () => ({
        successIcon: require('images/ApprovalFlow/success.svg'),
        loadIcon: require('images/ApprovalFlow/refresh.svg')
    }),
    props: {
        /**
         * 分隔条上有几个点
         * 数组元素为 boolean 类型
         */
        nodes: {
            type: Array,
            required: true
        },
        /**
         * 分隔条的颜色
         */
        color: {
            type: String,
            default: '#000'
        }
    },
    methods: { }
}
</script>
