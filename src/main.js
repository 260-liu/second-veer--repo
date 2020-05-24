import Vue from 'vue'
import App from './App.vue'
import Veer from './components/veer'
import ElementUI from 'element-ui'
import Test from './components/test'
import SimpleList from './components/SimpleList'
import foldList from './components/foldList'
import ScreenButton from './components/ScreenButton'
import Good from './components/map'
import avatar from './components/avatar'
import CardImge from './components/CardImge'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.component(Veer.name, Veer)
Vue.component(Test.name, Test)
Vue.component(SimpleList.name, SimpleList)
Vue.component(foldList.name, foldList)
Vue.component(ScreenButton.name, ScreenButton)
Vue.component(Good.name, Good)
Vue.component(avatar.name, avatar)
Vue.component(CardImge.name, CardImge)
new Vue({
  render: h => h(App)
}).$mount('#app')
