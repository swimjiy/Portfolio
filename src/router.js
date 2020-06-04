import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue';
import About from './views/About.vue';
import Project from './views/Project.vue';

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

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/About',
            component: About
        },
        {
            path: '/Project',
            component: Project
        }
    ],
    scrollBehavior
})