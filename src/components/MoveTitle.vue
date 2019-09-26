<style scoped lang="stylus">
.container
    .page-header
        position fixed
        z-index 2
        width 100%
        height 80px
        background-color red
    .content
        position relative
        top 80px
        height 1000px
        // margin 16px
        background-color #eee
</style>

<template lang="pug">
.container
    .page-header
        .screen1
        .screen2
    .content
</template>

<script>
export default {
    name: 'MoveTitle',
    data: () => ({
        
    }),
    methods: {

    },
}
</script>
