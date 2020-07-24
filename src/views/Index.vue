<style lang="stylus" scoped>
.index-container
    .header
        background-color #b3d1cc
        padding 16px
        font-weight bolder
        box-shadow #eee 0px 0px 5px 3px
        +small()
            text-align center
            font-size 16px
        +large()
            text-align left
            font-size 23px

    .main
        margin 32px
        display flex
        flex-flow row wrap
        justify-content flex-start

        .item
            +small()
                width 100%
                height 150px
                margin 0px 8px 16px 8px
            +medium()
                width 41%
                height 180px
                margin 4%
            +large()
                width 21%
                height 180px
                margin 2%

</style>

<template lang="pug">
.index-container
    .header CSS 样式合集
    .main
        project-item.item(v-for="item, index in menuList" :key="index" :detail="item")
</template>

<script>
import ProjectItem from 'comp/indexComp/ProjectItem'
export default {
    name: 'Index',
    data: () => ({
        menuList: [
            // {
            //     title: '滚动标题',
            //     content: '默认情况下显示页头，向下滚动后显示其他信息',
            //     route: 'MoveTitle'
            // },
            {
                title: '十字高亮',
                content: '在表格中常见的悬停时横轴纵轴十字交叉高亮',
                route: 'CrossHighlight',
                pic: 'https://s1.ax1x.com/2020/07/24/Uv3LEn.png'
            },
            {
                title: '审批流',
                content: '工作流程/审批流程/进度显示中常见的列表样式',
                route: 'ApprovalFlow',
                pic: 'https://s1.ax1x.com/2020/07/24/Uv3X40.png'
            },
            {
                title: '3D 分层按钮',
                content: '悬停显示 3D 效果',
                route: 'HoverSocialButton',
                pic: 'https://s1.ax1x.com/2020/07/24/Uv3ONq.png'
            },
            {
                title: '视差滚动',
                content: '漂亮的页面滚动效果',
                route: 'ParallaxScroll',
                pic: 'https://s1.ax1x.com/2020/07/24/Uv3vCV.png'
            }
        ]
    }),
    components: { ProjectItem },
    methods: { }
}
</script>