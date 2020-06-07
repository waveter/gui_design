import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { store } from './store'
import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/mixins/CoordinateHandler'
import customMixin from './mixins/mixin2';

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(customMixin)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
