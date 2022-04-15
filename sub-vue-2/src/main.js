import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let install = null
function render () {
  install = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

export async function bootstrap () {

}

export async function mount () {
  render()
}

export async function unmount () {
  install.$destroy()
}