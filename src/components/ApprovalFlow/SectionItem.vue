<style scoped lang="stylus">
.section-container
    padding 0px 12px
    display flex
    position relative
</style>

<template lang="pug">
.section-container
    section-title(:detail='detail.title' :color='detail.color')
    split-bar(:nodes='detail.stage.map(stage => stage.done)' :color='detail.color')
    .stage-list
        detail-msg(v-for="stage, index in detail.stage" :index="index" :detail='stage')
</template>

<script>
/**
 * 阶段组件
 * 包含了左侧标题、中间分隔和右侧多个节点信息
 */
import SectionTitle from './SectionTitle'
import DetailMsg from './DetailMsg'
import SplitBar from './SplitBar'

export default {
    name: 'SectionItem',
    data: () => ({
        
    }),
    props: {
        /**
         * 阶段的详细数据
         * 
         * @property {string} color 该阶段的主要颜色
         * @property {object} title 每个阶段左侧的标题
         *     @property {string} value 阶段的名字
         *     @property {img} img 阶段的图标
         *     @property {string} sub 名字下面的子标题
         * @property {array} stage 阶段中的子节点
         *     @property {string} value 节点内容
         *     @property {string} sub 内容下方的灰色提示
         *     @property {boolean} done 该节点是否完成
         */
        detail: {
            type: Object,
            required: true
        }
    },
    components: { SectionTitle, DetailMsg, SplitBar },
    methods: {

    },
    mounted() {
        console.log('阶段！', this.detail)
    }
}
</script>
