<style scoped lang="stylus">
.flow-container
    background-color #f2f8fc

    .section-item
        margin 8px 0px
    .split-dot
        display flex
        flex-flow column nowrap

    & > .split-dot::after
        content ''
        height 30px
        width 10px
        padding-left 100px
        border-right 10px dotted #d8dadb
</style>

<template lang="pug">
.flow-container
    .split-dot
        single-msg(:msg='detail.nowMsg' :icon="nowMsgIcon")
    .split-dot(v-for="section, index in detail.sections" :key="index" )
        section-item.section-item(:detail='section')
    single-msg(:msg='detail.startMsg')
</template>

<script>
import SectionItem from './SectionItem'
import SingleMsg from './SingleMsg'

export default {
    name: 'Flow',
    data: () => ({
        nowMsgIcon: require('images/ApprovalFlow/now.svg')
    }),
    props: {
        /**
         * 审批流所需数据
         * 
         * @property {string} startMsg 开始时的信息，显示在最下面
         * @property {string} nowMsg 当前的信息，显示在最上面
         * @property {array} sections 阶段，下面测试数据一共包含三个阶段：业务审批/财务审核/资金付款
         *     @property {string} color 该阶段的主要颜色
         *     @property {object} title 每个阶段左侧的标题
         *         @property {string} value 阶段的名字
         *         @property {img} img 阶段的图标
         *         @property {string} sub 名字下面的子标题
         *     @property {array} stage 阶段中的子节点
         *         @property {string} value 节点内容
         *         @property {string} sub 内容下方的灰色提示
         *         @property {boolean} done 该节点是否完成
         */
        detail: {
            type: Object,
            required: true
        }
    },
    components: { SectionItem, SingleMsg },
    methods: {

    },
    mounted() {

    }
}
</script>
