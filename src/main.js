import Vue from 'vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import ElementUI from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App.vue'
import store from './store'
import router from './router'

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(ElementUI)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
