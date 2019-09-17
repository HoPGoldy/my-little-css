<style scoped lang="stylus">
.project-item
    position relative
    overflow hidden
    // 鼠标悬停时触发的变化
    &:hover
        .font 
            background: rgba(0, 0, 0, 0.45)
            .project-title
                font-size 28px
            .line
                width calc(100% - 40px)
            .project-content
                opacity 1
                margin-left 0px
        // 背景图放大
        .background-pic
            transform scale(1.1, 1.1)

    // 背景图样式
    .background-pic
        max-width 100%
        transition transform .2s
    // 内容显示页面样式
    .font
        transition all .2s
        // 绝对定位
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        // 背景层默认透明
        background: rgba(138, 138, 138, 0.4)

        color white
        text-align left
        cursor pointer
        // 标题样式
        .project-title
            transition all .2s
            +mediaDesktop()
                font-size 33px
            +mediaMobile()
                font-size 23px
            font-weight bolder
            padding 18px
        // 分割线样式
        .line
            background-color white
            height 2px
            width 0px
            transition width .2s
            margin 0px 20px
        // 内容样式
        .project-content
            transition all .2s
            opacity 0
            margin-left 20px
            padding 18px
            +mediaMobile()
                font-size 15px
</style>

<template lang="pug">
.project-item(@click="jumpTo")
    img.background-pic(:src="detail.pic")
    .font
        .project-title {{detail.title}}
        .line
        .project-content {{detail.content}}

</template>

<script>
export default {
    name: 'ProjectItem',
    props: {
        /**
         * 显示的内容
         * 
         * @property {string} title 悬停后显示的标题
         * @property {string} content 悬停后显示的内容
         * @property {string} pic 背景显示的图片
         * @property {string} route 点击后跳转到的地址 (不会显示)
         */
        detail: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        
    }),
    methods: {
        jumpTo() {
            this.$router.push(this.detail.route)
        }
    },
}
</script>
