import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vueDebounce from 'vue-debounce'


Vue.config.productionTip = false

Vue.use(vueDebounce, {
  defaultTime: '700ms'
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
