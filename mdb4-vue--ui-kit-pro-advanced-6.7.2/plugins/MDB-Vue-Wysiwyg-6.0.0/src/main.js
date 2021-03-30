import "mdb-wysiwyg/lib/main.css"
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Tippy from 'v-tippy'
import 'v-tippy/dist/tippy.css'
Vue.use(Tippy, {
  position: 'bottom',
  arrow: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
