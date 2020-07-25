// vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
if (!window.VueRouter) Vue.use(VueRouter)

import Index from './views/Index'
import comps from './components'

const routes = [
    { path: '/', component: Index },
    // 给要展示的组件配置路由
    ...Object.keys(comps).map(name => ({ path: `/${name}`, component: comps[name] }))
]

export default new VueRouter({ routes })
