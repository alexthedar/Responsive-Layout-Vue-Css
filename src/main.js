// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'bulma/css/bulma.css'
import enquire from 'assets/js/enquire.js'

Vue.use(VueMaterial)
Vue.extend(enquire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
