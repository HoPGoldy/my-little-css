<style lang="stylus" scoped>
$mobile-width = 450px
.index-container
    .header
        background-color #b3d1cc
        padding 16px
        font-size 18px
        font-weight bolder
        box-shadow #eee 0px 0px 5px 3px
        +mediaDesktop()
            text-align left
        +mediaMobile()
            text-align center
    .main
        margin 64px
        display flex
        flex-flow row wrap
        justify-content space-between

        .item
            +mediaDesktop()
                width 400px
            +mediaMobile()
                width 100%
            height 250px
        
</style>

<template lang="pug">
.index-container
    .header hopgoldy 的 CSS 小玩意
    .main
        project-item.item(v-for="item, index in menuList" :key="index" :detail="item")
</template>

<script>
import ProjectItem from 'comp/indexComp/ProjectItem'
export default {
    name: 'Index',
    data: () => ({
        menuList: [
            {
                title: '滚动标题',
                content: '默认情况下显示页头，向下滚动后显示其他信息',
                route: 'MoveTitle'
            }
        ]
    }),
    components: { ProjectItem },
    methods: { }
}
</script>