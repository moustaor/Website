import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
import VueParticles from './vue-particles'
Vue.use(VueParticles)

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Routes from './routes.js'
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
