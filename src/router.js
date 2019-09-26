// vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './views/Index'
import MoveTitle from './components/MoveTitle'
import CrossHighlight from './components/CrossHighlight'

const routes = [
    { path: '/', component: Index },
    { path: '/MoveTitle', component: MoveTitle },
    { path: '/CrossHighlight', component: CrossHighlight },
]

export default new VueRouter({
  routes
})
