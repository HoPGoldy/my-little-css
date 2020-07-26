<style lang="stylus" scoped>
.flex-center
    display flex
    justify-content center
    align-items center

.page
    background-color #2c3e50
    flex-direction column
    height 100vh
    width 100vw

.wave-login-container
    flex-direction column
    width 300px
    height 450px
    border-radius 20px
    background-color #34495e
    box-shadow 15px 15px 10px rgba(33m 45m 58m 0.3)
    overflow hidden
    position relative

.wave-login-container form
    width 400px
    height 200px
    // 设置层级，防止被波纹覆盖
    z-index 1

.tbx
    width 200px
    height 40px
    margin-bottom 20px
    outline none
    border none
    border-bottom 1px solid #fff
    background none 
    color #fff

.tbx::placeholder
    color #fff
    font-size 15px

.sub
    width 200px
    height 40px
    margin-top 20px
    outline none
    border 1px solid #fff
    border-radius 20px
    letter-spacing 5px
    color #fff
    background none
    cursor pointer

.wave-login-container h1
    z-index 1
    color #ecf0f1
    letter-spacing 5px
    font-size 50px
    font-weight 100
    text-shadow 5px 5px 5px rgba(33,45,58,0.3)
    cursor default

// 设置鼠标进入的样式
.in
    position absolute
    top 0
    left 0
    display block
    width 0
    height 0
    // 设置圆角，让该元素变成原型
    border-radius 50%
    background #3498bd
    transform translate(-50%,-50%)
    // 启动动画并停留在最后一帧
    animation hover-in 0.5s ease-out forwards

// 设置鼠标离开的样式
.out
    position absolute
    top 0
    left 0
    display block
    width 1200px
    height 1200px
    border-radius 50%
    background #3498bd
    transform translate(-50%,-50%)
    animation hover-out 0.5s ease-out forwards

// 鼠标进入时波纹逐渐变大
@keyframes hover-in
    0%
        width 0
        height 0
    100%
        width 1200px
        height 1200px

// 鼠标离开时波纹逐渐变小
@keyframes hover-out
    0%
        width 1200px
        height 1200px
    100%
        width 0
        height 0
</style>

<template lang="pug">
.page.flex-center
    .wave-login-container.flex-center(@mouseenter='onMouseIn' @mouseleave='onMouseOut')
        h1 BiliBili
        form
            input.tbx(type='text' placeholder='账号')
            input.tbx(type='password' placeholder='密码')
            input.sub(type='submit' value='登陆')
        //- 使用一个元素改造成圆形，通过设置其原点来模拟波纹效果
        span(v-show='waveVisable' ref='wave' :class='isIn ? "in" : "out"')

    page-footer(v-bind='footerInfo')
</template>

<script>
export default {
    name: 'WaveLogin',
    data: () => ({
        // 是否显示波纹，默认为否，防止页面加载时就出现一瞬间的波纹显示
        waveVisable: false,
        // 鼠标是否位于表单中
        isIn: false,
        // 页脚信息
        footerInfo: {
            dark: true,
            originLabel: '参考系゛ - 令人惊艳的hover效果',
            originUrl: 'https://www.bilibili.com/video/BV1Jp4y1y75i',
            codeLabel: 'hopgoldy - my-little-css/WaveLogin',
            codeUrl: 'https://github.com/HoPGoldy/my-little-css/blob/master/src/components/WaveLogin.vue'
        }
    }),
    methods: {
        /**
         * 回调 - 鼠标移入表单
         * @param {MouseEvent} 鼠标移入事件
         */
        onMouseIn(e) {
            if (this.isIn) return

            this.resetWavePos(e)

            this.isIn = true
            this.waveVisable = true
        },

        /**
         * 回调 - 鼠标移出表单
         * @param {MouseEvent} 鼠标移出事件
         */
        onMouseOut(e) {
            if (!this.isIn) return

            this.resetWavePos(e)

            this.isIn = false
        },

        /**
         * 根据鼠标位置重设波纹起点 / 终点
         * @param {MouseEvent} 鼠标移入事件
         */
        resetWavePos(e) {
            const inx = e.clientX - e.target.offsetLeft
            const iny = e.clientY - e.target.offsetTop

            this.$refs.wave.style.left = inx + 'px'
            this.$refs.wave.style.top = iny + 'px'
        }
    }
}
</script>