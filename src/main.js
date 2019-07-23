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

    return new Promise(resolve => {
      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }
      this.app.$root.$once('triggerScroll', () => {
        resolve(position)
      })
    })
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
