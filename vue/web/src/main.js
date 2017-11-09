// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iview from 'iview'
import router from './router'
import animate from 'animate.css'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
Vue.use(iview)
Vue.use(animate)
// Vue.use($)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
