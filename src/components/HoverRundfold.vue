<style lang="stylus" scoped>
// 让卡片窗口横向排列
.hover-rundfold-container
    display flex
    flex-wrap wrap
    justify-content center
    align-items flex-start

    width 100vw
    margin-top 40px
    padding 30px

.card
    position relative
    // 卡片的基本大小（默认情况下的蓝色背景层）
    width 300px
    height 250px
    background #16384c
    margin 30px
    padding 20px 15px
    // 添加卡片阴影
    box-shadow 0 5px 202px rgba(0, 0, 0, 0.5)
    transition .3s ease-in-out

    &:hover
        height 450px

        // 调整文本位置
        .content
            visibility visible
            opacity 1
            margin-top -70px
            // 动效延迟写在这里可以实现在显示时有延迟，而隐藏时没有延迟
            transition-delay .1s

.img-box
    // 设置图片的基本尺寸
    position relative
    width 260px
    height 300px
    // 把图片往上挪出去一点
    top -60px
    left 20px
    // 让悬停时图片可以盖住文字
    z-index 1
    // 创建图片阴影
    box-shadow 0 5px 20px rgba(0, 0, 0, 0.2)

// 让图片好看点
.img-box img
    width 100%
    height 100%
    border-radius 4px
    object-fit cover

.content
    // 默认情况下文本看不到并且隐藏在很上面的地方
    position relative
    margin-top -300px
    padding 20px 15px
    text-align center
    // 默认看不到
    visibility hidden
    opacity 0
    transition .3s ease-in-out

    // 文本样式
    & h2, p
        color #eee
        cursor default
</style>

<template lang="pug">
div
    .hover-rundfold-container
        //- 卡片
        .card(v-for='item, index in imgList' :key='index')
            //- 图片层
            .img-box
                img(:src='item.src')
            //- 文本层
            .content
                h2 {{item.title}}
                p {{item.content}}

    page-footer(v-bind='footerInfo')
</template>

<script>
export default {
    name: 'HoverRundfold',
    data: () => ({
        imgList: [
            {
                title: '卡片1',
                content: '你听，海不就是在唱歌吗？时而雄壮，时而舒缓，浪花也时不时的拍岸响应，我闭上眼睛，和着海风滑过耳际的声音，恍惚间，如入无蓬莱之境，安若天堂。',
                src: 'https://s1.ax1x.com/2020/07/25/UzyWes.jpg'
            },
            {
                title: '卡片2',
                content: '空和大海相爱了，但他们的手无法相牵，爱也无法继续，天空哭了，海的双眼也湿了。因此她说：有一种界限永远无法跨越！',
                src: 'https://s1.ax1x.com/2020/07/25/Uzy2Lj.jpg'
            },
            {
                title: '卡片3',
                content: '伸展眼睛，眺望去，不见白浪滔天，但见渔帆点点，那晒的古铜色的发光的皮肤，那敏锐的眼神，善良的笑貌。',
                src: 'https://s1.ax1x.com/2020/07/25/UzycQg.jpg'
            }
        ],
        // 页脚信息
        footerInfo: {
            originLabel: 'youtube - Card Hover Effects',
            originUrl: 'https://www.youtube.com/watch?v=8b2mTq0Xrtw',
            codeLabel: 'hopgoldy - my-little-css/HoverRundfold',
            codeUrl: 'https://github.com/HoPGoldy/my-little-css/blob/master/src/components/HoverRundfold.vue'
        }
    })
}
</script>