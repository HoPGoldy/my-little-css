<style scoped lang="stylus">
// 让按钮伪纵向居中
.button-container
    position absolute
    top 45%
    bottom  0px
    left 0px
    right 0px

// 让按钮组横向居中
.icons
    display flex
    justify-content center

.icons .button
    cursor pointer
    // 按钮之间的间距
    margin 0 25px
    // 子孙元素的 absolute 基础定位
    position relative

// 设置按钮的大小及转换
.icons .button .layer
    width 55px
    height 55px
    transition transform 0.3s

// 悬停时的 3d 效果：旋转 + 变形
.icons .button:hover .layer
    transform rotate(-35deg) skew(20deg)

.icons .button .layer span
    // 让每个框的大小都相同
    position absolute
    top 0
    left 0
    height 100%
    width 100%
    // 加深边框显示
    border 1px solid #fff
    border-radius 5px
    transition all .3s

// 调整按钮图标大小
.icons .button .layer .fab
    font-size 30px
    line-height 55px

// 下面五个调整按钮边框的位置及透明度，做出渐隐的效果
.icons .button:hover .layer span:nth-child(1)
    opacity 0.2

.icons .button:hover .layer span:nth-child(2)
    opacity 0.4
    transform translate(5px, -5px)

.icons .button:hover .layer span:nth-child(3)
    opacity 0.6
    transform translate(10px, -10px)

.icons .button:hover .layer span:nth-child(4)
    opacity 0.8
    transform translate(15px, -15px)

.icons .button:hover .layer span:nth-child(5)
    opacity 1
    transform translate(20px, -20px)

// 下面五个指定了按钮和边框的颜色
.icons .button:nth-child(1) .layer span,
.icons .button:nth-child(1) .text
    color #4267B2
    border-color #4267B2

.icons .button:nth-child(2) .layer span,
.icons .button:nth-child(2) .text
    color #1DA1F2
    border-color #1DA1F2

.icons .button:nth-child(3) .layer span,
.icons .button:nth-child(3) .text
    color #E1306C
    border-color #E1306C

.icons .button:nth-child(4) .layer span,
.icons .button:nth-child(4) .text
    color #2867B2
    border-color #2867B2

.icons .button:nth-child(5) .layer span,
.icons .button:nth-child(5) .text
    color #ff0000
    border-color #ff0000

// 下面五个指定了按钮的阴影颜色
.icons .button:nth-child(1) .layer span
    box-shadow 0px 0px 3px #4267B2

.icons .button:nth-child(2) .layer span
    box-shadow 0px 0px 3px #1DA1F2

.icons .button:nth-child(3) .layer span
    box-shadow 0px 0px 3px #E1306C

.icons .button:nth-child(4) .layer span
    box-shadow 0px 0px 3px #4267B2

.icons .button:nth-child(5) .layer span
    box-shadow 0px 0px 3px #ff0000

// 按钮名称下滑渐显效果的初始设置
.icons .button .text
    position absolute
    bottom -5px
    opacity 0
    // left 和 transform 属性配合实现名称居中效果
    left 50%
    transform translateX(-50%)
    transition bottom .3s ease, opacity .3s ease

// 按钮名称在悬停时下滑渐显
.icons .button:hover .text
    bottom -35px
    opacity 1
</style>

<template lang="pug">
.button-container
    .icons
        //- 单个按钮
        .button(v-for='button in buttons')
            //- layer 实现 3D 效果中的多层显示，最后一层包含按钮的图标
            .layer
                span(v-for='border in 4')
                span.fab(:class='button.icon')
            //- 按钮名称
            span.text {{button.label}}

    page-footer(v-bind='footerInfo')
</template>

<script>
export default {
    name: 'HoverSocialButton',
    data: () => ({
        /**
         * 按钮配置
         * 
         * @property {string} icon 图标名称
         * @property {string} label 显示的按钮名
         */
        buttons: [
            { icon: 'fa-facebook-f', label: 'Facebook' },
            { icon: 'fa-twitter', label: 'Twitter' },
            { icon: 'fa-instagram', label: 'Instagram' },
            { icon: 'fa-linkedin-in', label: 'Linkedin' },
            { icon: 'fa-youtube', label: 'Youtube' }
        ],
        // 页脚信息
        footerInfo: {
            originLabel: 'bilibili - 按钮 3D 分层悬停效果',
            originUrl: 'https://www.bilibili.com/video/BV1g5411x7Cy',
            codeLabel: 'hopgoldy - my-little-css/HoverSocialButton',
            codeUrl: 'https://github.com/HoPGoldy/my-little-css/blob/master/src/components/HoverSocialButton.vue'
        }
    })
}
</script>
