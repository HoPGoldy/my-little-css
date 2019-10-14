<style scoped lang="stylus">
.section-title-container
    display flex
    flex-flow column nowrap
    justify-content space-around

    .vertical-center-box
        display flex
        flex-flow column nowrap

        .title
            font-weight bolder
            font-size 20px
        .sub-title
            color #888
</style>

<template lang="pug">
.section-title-container
    .vertical-center-box
        img(:src="detail.img")
        .title(:style='{ color: color }') {{detail.value}}
        .sub-title {{detail.sub}}
</template>

<script>
/**
 * 左侧标题
 */
export default {
    name: 'SectionTitle',
    data: () => ({
        
    }),
    props: {
        /**
         * 详细信息
         * 
         * @property {string} value 阶段的名字
         * @property {img} img 阶段的图标
         * @property {string} sub 名字下面的子标题
         */
        detail: {
            type: Object,
            required: true
        },
        /**
         * 标题的颜色
         */
        color: {
            type: String,
            default: '#000000'
        }
    },
    methods: { }
}
</script>
