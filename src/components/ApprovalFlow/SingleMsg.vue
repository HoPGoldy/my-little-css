<style scoped lang="stylus">
.single-msg-container
    display flex
    padding 8px 0px 8px 100px
    .msg
        line-height 32px
        margin-left 16px
        font-size 20px
        font-weight bolder
</style>

<template lang="pug">
.single-msg-container
    img(:src="icon")
    .msg {{msg}}
</template>

<script>
export default {
    name: 'SingleMsg',
    data: () => ({
        
    }),
    props: {
        msg: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: require('images/ApprovalFlow/check.svg')
        }
    },
    methods: {

    },
}
</script>