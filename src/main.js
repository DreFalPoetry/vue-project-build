import Vue from 'vue'

import ElementUI from 'element-ui'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'

import App from './App.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
