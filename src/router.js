// vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './views/Index'

const routes = [
  { path: '/', component: Index }
]

export default new VueRouter({
  routes
})
