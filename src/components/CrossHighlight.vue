<style scoped lang="stylus">
.cross-container
    height 100%
    width 100%
    margin 64px 0px
.flex
    display flex
    justify-content center

    // 表格样式
    .table
        .row
            display flex
            flex-flow row
            .col
                height 100px
                width 100px
                margin 2px
                transition background-color .2s

// 非高亮(默认)样式
.not-active
    background-color #eee
// 高亮样式
.active
    background-color #888
</style>

<template lang="pug">
.cross-container
    .flex
        .table(@mouseout="onMouseOut")
            //- 行元素
            .row(v-for="rowIndex in 5" :key="rowIndex")
                //- 列元素
                .col.not-active(v-for="colIndex in 12" :key="colIndex" @mouseover="onMouseOver(rowIndex - 1, colIndex - 1)")
    page-footer(v-bind='footerInfo')
</template>

<script>
export default {
    name: 'CrossHighlight',
    data: () => ({
        hoverIndex: {
            col: null,
            row: null
        },
        // 页脚信息
        footerInfo: {
            codeLabel: 'hopgoldy - my-little-css/CrossHighlight',
            codeUrl: 'https://github.com/HoPGoldy/my-little-css/blob/master/src/components/CrossHighlight.vue'
        }
    }),
    watch: {
        // 监听 hoverIndex 触发样式更新
        hoverIndex (newData, oldData) { this.highLight(newData, oldData) }
    },
    methods: {
        /**
         * 高亮样式更新 (核心实现)
         * 
         * @param {object} newHover 新的高亮索引, 值为 this.hoverIndex
         * @param {object} oldHover 上一个高亮索引, 值同上
         */
        highLight(newHover, oldHover) {
            let rows = document.getElementsByClassName('row')
            
            // 遍历所有行
            for (let i = 0; i < rows.length; i++) {
                let cols = rows[i].getElementsByClassName('col')

                // 如果是选中行, 则该行单元格全部高亮 (高亮当前行)
                if (i == newHover.row) {
                    for (const col of cols) this.switchState(col, true)
                }
                // 如果是之前选中的行, 则取消所有单元格高亮, 只保留对应列的那一个 (取消上个行高亮))
                else if (i == oldHover.row) {
                    for (const col of cols) this.switchState(col, false)
                    this.switchState(cols[newHover.col], true)
                }
                // 如果都不是, 则取消之前选中列的单元格, 并高亮当前选中列的单元格 (高亮当前列并取消高亮上个列)
                else {
                    this.switchState(cols[oldHover.col], false)
                    this.switchState(cols[newHover.col], true)
                }
            }
        },

        /**
         * 鼠标悬停事件
         * 将悬停的横纵轴索引值保存到 data
         * 
         * @param {number} rowIndex 行索引
         * @param {number} colIndex 列索引
         */
        onMouseOver(rowIndex, colIndex) {
            this.hoverIndex = {
                col: colIndex,
                row: rowIndex
            }
        },

        /**
         * 鼠标移出事件
         * 绑定在整个表格上, 移出表格时取消所有高亮
         */
        onMouseOut() {
            this.hoverIndex = {
                col: null,
                row: null
            }
        },

        /**
         * 切换指定元素的样式
         * 
         * @param {element} ele 要更新样式的状态
         * @param {boolean} isActive 元素是高亮还是不高亮
         */
        switchState(ele, isActive) {
            if (!ele) return false

            ele.classList.remove(isActive ? 'not-active' : 'active')
            ele.classList.add(isActive ? 'active' : 'not-active')
        }
    }
}
</script>
