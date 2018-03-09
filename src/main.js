// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//layer弹窗
// import 'vue-layer-mobile/need/layer.css'
// import layer from 'vue-layer-mobile'
Vue.use(layer)

//MinitUi
import Minit from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Minit)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
