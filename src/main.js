import Vue from 'vue'
import App from './app/App.vue'
import Store from './app/store/modules/index'


Vue.config.productionTip = false

new Vue({
  Store,
  render: h => h(App),
}).$mount('#app')
