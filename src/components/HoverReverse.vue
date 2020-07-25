<style lang="stylus" scoped>
// flex 布局并双轴居中
.flex-center
    display flex
    justify-content center
    align-items center

// 绝对定位并铺满
.absolute
    position absolute
    top 0
    left 0
    width 100%
    height 100%

.hover-reverse-container
    min-height 100vh

// 让卡片列表可以换行
section
    flex-wrap wrap
    transform-style preserve-3d

.card
    // 让子元素以自己为基准进行布局
    position relative
    width 320px
    height 320px
    margin 32px
    transform-style preserve-3d
    perspective 1000px

    // 自己悬停时就反转内部的 box 元素
    // 这里为什么不反转自己呢? 因为反转到 90° 时宽度为 0，这样就会打断悬停，会影响流畅度。
    &:hover .box
        transform rotateY(180deg)

// 给主要的旋转窗口添加动效
.box
    transform-style preserve-3d
    transition 1s ease

// 让图片自适应
.img-box img
    object-fit cover

.content-box
    // 注意，这个背景色实际上调整图片层反转后的背面颜色
    // 因为content-box 和 img-box 实际上是背对背紧贴在一起的，而 content-box div 则和 content-box 离开了一些距离
    background #333
    transform-style preserve-3d
    // 预先反转 180°，等悬停时反转回来
    transform rotateY(180deg)

.content-box div
    cursor default
    transform-style preserve-3d
    padding 20px
    // 创建渐变背景
    background linear-gradient(45deg, #fe0061, #ffed3b)
    // 让文本层和图片层离开一定的距离
    transform translateZ(100px)

// 调整颜色并设置背部不可见
.font
    backface-visibility hidden
    color white

.content-box div h2
    font-size 20px

.content-box div p
    font-size 16px
</style>

<template lang="pug">
.hover-reverse-container
    .flex-center
        section.flex-center
            //- 每个图片卡片
            .card(v-for='card, index in imgList' :key='index')
                //- 卡片中旋转的容器
                .box.absolute
                    //- 图片层
                    .img-box.absolute
                        img.absolute(:src='card.src')
                    //- 文本层
                    .content-box.absolute.flex-center
                        div
                            h2.font {{card.title}}
                            p.font {{card.content}}

    page-footer(v-bind='footerInfo')
</template>

<script>
export default {
    name: 'HoverReverse',
    data: () => ({
        imgList: [
            {
                title: '承受压力',
                content: '别为小小的委屈难过，人生在世，注定要受许多委屈。一个人越是成功，他所遭受的委屈也越多。要使自己的生命获得极值和炫彩，就不能太在乎委屈，不能让它们揪紧你的心灵、扰乱你的生活。',
                src: 'https://s1.ax1x.com/2020/07/25/UznKMj.jpg',
            },
            {
                title: '解除束缚',
                content: '如果想走出阴影，那就让你的脸面向阳光;如果你想告别懦弱，那就让心在历练中慢慢坚强;如果你想摆脱平凡的生活，那就努力让自己高傲的飞翔。',
                src: 'https://s1.ax1x.com/2020/07/25/UznnzQ.jpg',
            },
            {
                title: '拒绝别人',
                content: '你是否经常狠不下心来做事，对自己不够狠，对别人也不够狠。所以，你总是黏黏糊糊，总是不忍心去拒绝别人，总是下不了决心让自己过的更好，总是缠绵过往不能自拔……完了，优柔寡断的你，必须狠一次，否则你永远也活不出自己。',
                src: 'https://s1.ax1x.com/2020/07/25/UznmRg.jpg',
            },
            {
                title: '坚守自我 ',
                content: '千万不要因为别人的眼光而改变了自己的挚爱，莫要活在别人的眼光里而失去了自己!感情不能贪心，也不是梦想。所以，我们应该用心来守候属于自己的，并不惊天动地的爱情。',
                src: 'https://s1.ax1x.com/2020/07/25/UzneJS.jpg',
            },
            {
                title: '承担责任',
                content: '世俗是大多数人要走的路，责任是你必须要履行的义务。如果说我们每一个人都可以把自己分内的.责任做好，那我们这个社会自然就和谐了。责任就意味着牺牲，不辛苦就没有轻松，不痛苦就没有欢乐，幸福和不幸是对比出来的。',
                src: 'https://s1.ax1x.com/2020/07/25/UznZi8.jpg',
            },
            {
                title: '保持随性',
                content: '真正的坚韧，应该是哭的时候要彻底，笑的时候要开怀，说的时候要淋漓尽致，做的时候不要犹豫。',
                src: 'https://s1.ax1x.com/2020/07/25/UznEIf.jpg',
            }
        ],
        // 页脚信息
        footerInfo: {
            originLabel: 'youtube - 3D Image Hover Effects',
            originUrl: 'https://www.youtube.com/watch?v=HHqBS7xFnPM&feature=youtu.be',
            codeLabel: 'hopgoldy - my-little-css/HoverReverse',
            codeUrl: 'https://github.com/HoPGoldy/my-little-css/blob/master/src/components/HoverReverse.vue'
        }
    })
}
</script>