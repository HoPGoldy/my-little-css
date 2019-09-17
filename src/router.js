// vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './views/Index'
import MoveTitle from './components/MoveTitle'

const routes = [
    { path: '/', component: Index },
    { path: '/MoveTitle', component: MoveTitle },
]

export default new VueRouter({
  routes
})
