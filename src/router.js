// vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './views/Index'
import MoveTitle from './components/MoveTitle'
import CrossHighlight from './components/CrossHighlight'
import ApprovalFlow from './components/ApprovalFlow/ApprovalFlow'

const routes = [
    { path: '/', component: Index },
    { path: '/MoveTitle', component: MoveTitle },
    { path: '/CrossHighlight', component: CrossHighlight },
    { path: '/ApprovalFlow', component: ApprovalFlow },
]

export default new VueRouter({
  routes
})
