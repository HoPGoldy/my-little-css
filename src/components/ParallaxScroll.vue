<style scoped lang="stylus">
// 铺满整个窗口
.scroll-container
    width 100vw
    height 100vh
    // 设置透视，让背景图刚好可以铺满屏幕又不减弱视差效果
    perspective 100px
    // **核心样式**，将所有 transform 调整为 3D 效果
    transform-style preserve-3d
    overflow-y auto

// 内容竖行排列
.main
    display flex
    flex-flow: column nowrap
    align-items center
    justify-content center

// 分隔开每个图片块
.list-item
    cursor pointer
    // 设置相对定位，使得其中的内容可以以自己为基准进行渲染
    position relative
    // 调整前景文本位置
    display flex
    flex-direction column
    align-items center
    justify-content center
    // 抹平图片宽度差异
    width 100%
    height 45vh
    // 让超出本 div 的内容隐藏，不然背景的图片就会相互挤兑
    overflow hidden

// 悬停时背景亮度提高
.list-item:hover .item-image::before
    background-color rgba(0, 0, 0, 0.2)

// 把背景图设为绝对定位，模拟为背景样式
.item-image
    position absolute
    width 100%
    height 100%
    z-index -1
    // **核心样式** 通过调整 z 轴拉远距离
    // 然后结合 transform-style preserve-3d 营造出视差滚动的效果（离自己越远的物体看起来移动的越慢）
    transform translateZ(-50px) scale(2.4)

// 为背景图添加深色蒙版
.item-image::before
    content ""
    display block
    position absolute
    width 100%
    height 100%
    background-color rgba(0, 0, 0, 0.4)
    transition all 0.3s ease

// 图片居中显示
.item-image img
    display block
    width 100%
    height 100%
    // 调整图片显示模式，避免因为图片大小不一露出白边
    object-fit cover

// 调整文本字体
.item-text
    user-select none
    color #ffffff
    font-family "Courier New", Courier, monospace
    text-align center
    // 悬停时缩放一下文本
    transition all .1s
    &:hover
        transform scale(1.1)

.text-title
    font-size 2rem
    font-weight bolder
    margin-bottom 20px

.text-desc
    font-size 1.2rem
</style>

<template lang="pug">
.scroll-container
    .main
        //- 所有图片列表
        section.list-item(v-for='imgDetail, index in imgList' :key='index')
            //- 显示图片作为背景
            .item-image
                img(:src='imgDetail.src')
            //- 显示前景文本
            .item-text
                .text-title {{imgDetail.title}}
                .text-desc {{imgDetail.describe}}

    page-footer(v-bind='footerInfo')
</template>

<script>
export default {
    name: 'ParallaxScroll',
    data: () => ({
        imgList: [
            {
                src: 'https://miiiku.github.io/shichagundong/images/1.jpg',
                title: '「四月是你的谎言」',
                describe: '我在盛开的樱花下遇见你，从此命运不再属于自己。'
            },
            {
                src: 'https://miiiku.github.io/shichagundong/images/2.jpg',
                title: '「言叶之庭」',
                describe: '每晚临睡前 每天睁开眼的瞬间 不知不觉 我都在祈盼雨天 祈盼雨天 祈盼和那个人 再次相会'
            },
            {
                src: 'https://miiiku.github.io/shichagundong/images/3.jpg',
                title: '「你的名字」',
                describe: '黄昏，不是白昼亦不是夜晚，是我努力却看不清你的脸。'
            },
            {
                src: 'https://miiiku.github.io/shichagundong/images/4.jpg',
                title: '「天气之子」',
                describe: '天气真的是很不可思议，光只是天空的模样就让人感动不已。'
            },
            {
                src: 'https://miiiku.github.io/shichagundong/images/5.jpg',
                title: '「K-ON！」',
                describe: '重要的，珍惜的，一直在身边，一旦成为理所当然，就难以发现'
            },
            {
                src: 'https://miiiku.github.io/shichagundong/images/6.jpg',
                title: '「CLANNAD」',
                describe: '我也很没用，但是两个人一起的话，就会变得很坚强。'
            }
        ],
        // 页脚信息
        footerInfo: {
            originLabel: 'miiiku - 视差滚动效果',
            originUrl: 'https://github.com/miiiku/miiiku.github.io',
            codeLabel: 'hopgoldy - my-little-css/ParallaxScroll',
            codeUrl: 'https://github.com/HoPGoldy/my-little-css/blob/master/src/components/ParallaxScroll.vue'
        }
    })
}
</script>
