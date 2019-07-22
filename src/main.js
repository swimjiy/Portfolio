import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition){
    return savedPosition
  } else {
    const position = {}

    if (to.hash) {
      position.selector = to.hash

      if (to.hash === "about") {
        position.offset = { y: 100 }
      }

      return false
    }
  }
}

const router = new VueRouter({
  mode: "history",
  routes: routes,
  scrollBehavior
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
