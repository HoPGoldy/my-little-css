import Vue from 'vue'
import App from './views/App.vue'
// router
import router from './router.js'
// config
import { global } from './mixin.js'

Vue.config.productionTip = false
Vue.mixin(global)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
