// vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
if (!window.VueRouter) Vue.use(VueRouter)

import Index from './views/Index'
import MoveTitle from './components/MoveTitle'
import CrossHighlight from './components/CrossHighlight'
import ApprovalFlow from './components/ApprovalFlow/ApprovalFlow'
import HoverSocialButton from './components/HoverSocialButton'
import ParallaxScroll from './components/ParallaxScroll'
import HoverReverse from './components/HoverReverse' 

const routes = [
    { path: '/', component: Index },
    { path: '/MoveTitle', component: MoveTitle },
    { path: '/CrossHighlight', component: CrossHighlight },
    { path: '/ApprovalFlow', component: ApprovalFlow },
    { path: '/HoverSocialButton', component: HoverSocialButton },
    { path: '/ParallaxScroll', component: ParallaxScroll },
    { path: '/HoverReverse', component: HoverReverse },
]

export default new VueRouter({ routes })
