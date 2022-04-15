import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from '../qk/index.js'
Vue.config.productionTip = false

const apps = [
  {
    name: 'sub-vue-1', // app name registered
    entry: '//localhost:7100',
    container: '#sub-vue',
    activeRule: '/sub-vue-1',
  },
  {
    name: 'sub-vue-2', // app name registered
    entry: '//localhost:7200',
    container: '#sub-vue',
    activeRule: '/sub-vue-2',
  }
]

registerMicroApps(apps)
start()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
