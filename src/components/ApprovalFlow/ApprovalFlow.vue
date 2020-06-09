<style scoped lang="stylus">
.approval-flow-container
    height 100%
    width 100%
    margin 64px 0px
.flex
    display flex
    justify-content center

    .border
        padding 32px
</style>

<template lang="pug">
.approval-flow-container
    .flex
        flow.border(:detail="flowData")
    page-footer(v-bind='footerInfo')
</template>

<script>
import Flow from './Flow'

export default {
    name: 'ApprovalFlow',
    data: () => ({
        flowData: {
            startMsg: '[报销人] xxx 于 2019-5-12 发起审批申请',
            nowMsg: '单据审批中，请稍等',
            sections: [
                {
                    color: '#45d39f',
                    title: {
                        value: '资金付款',
                        img: require('images/ApprovalFlow/cat.svg'),
                        sub: ''
                    },
                    stage: [
                        {
                            value: '等待资金中心付款',
                            sub: '',
                            done: false
                        }
                    ]
                },
                {
                    color: '#8683df',
                    title: {
                        value: '财务审核',
                        img: require('images/ApprovalFlow/tee.svg'),
                        sub: '(剩余 2 天)'
                    },
                    stage: [
                        {
                            value: '等待财务审核, 可致电 000-1111-2222 查询最新进展',
                            sub: '该节点已停留 1 天',
                            done: false
                        }
                    ]
                },
                {
                    color: '#009bff',
                    title: {
                        value: '业务审批',
                        img: require('images/ApprovalFlow/dog.svg'),
                        sub: '(剩余 1 天)'
                    },
                    stage: [
                        {
                            value: '[分管领导] xxx 正在审批中...',
                            sub: '该节点已停留 2 天',
                            done: false
                        },
                        {
                            value: '[部门负责人] xxx 已于 2019-5-13 通过该申请',
                            sub: '该节点审批用时 12 小时',
                            done: true
                        }
                    ]
                }
            ]
        },
        // 页脚信息
        footerInfo: {
            codeLabel: 'hopgoldy - my-little-css/ApprovalFlow',
            codeUrl: 'https://github.com/HoPGoldy/my-little-css/blob/master/src/components/ApprovalFlow/ApprovalFlow.vue'
        }
    }),
    components: { Flow },
    methods: {

    },
}
</script>
