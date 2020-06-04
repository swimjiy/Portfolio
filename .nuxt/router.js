import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _086ef8f4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1884de5c = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _1b805e4b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/portfolio/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _086ef8f4,
    name: "about"
  }, {
    path: "/project",
    component: _1884de5c,
    name: "project"
  }, {
    path: "/",
    component: _1b805e4b,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
