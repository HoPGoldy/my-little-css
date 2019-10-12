<style scoped lang="stylus">
.detail-msg-container
    display flex
    flex-flow column nowrap
    padding 8px

    .msg
        font-weight bolder
        font-size 20px
        text-align left
    .sub-msg
        margin-top 6px
        color #888
        text-align left
</style>

<template lang="pug">
.detail-msg-container
    .msg(:style='msgStyle') {{detail.value}}
    .sub-msg {{detail.sub}}
</template>

<script>
/**
 * 右侧每个阶段中的节点
 */
export default {
    name: 'DetailMsg',
    data: () => ({
        
    }),
    props: {
        /**
         * 节点的详细信息
         * 
         * @property {string} value 节点内容
         * @property {string} sub 内容下方的灰色提示
         * @property {boolean} done 该节点是否完成
         */
        detail: {
            type: Object,
            required: true
        }
    },
    computed: {
        /**
         * 根据节点是否完成来确定信息的颜色
         */
        msgStyle() {
            return {
                color: this.detail.done ? '#888' : ''
            }
        }
    },
    methods: { }
}
</script>
