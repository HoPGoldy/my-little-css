import Vue from 'vue'
import App from './views/App.vue'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// router
import router from './router.js'
// config
import { global } from './mixin.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.mixin(global)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
