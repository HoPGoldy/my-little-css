import Vue from 'vue'
import App from './views/App.vue'
import router from './router'

import PageFooter from './components/PageFooter'

Vue.config.productionTip = false
Vue.component('PageFooter', PageFooter)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
