<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h1>Vue Ex</h1> -->
    <!-- Router Link -->
    <slidebarMenu
      :width="300"
      :links="[
        {'id': 1, 'text': 'About', 'url': '/About'},
        {'id': 2, 'text': 'Project', 'url': '/Project'}
      ]"
    ></slidebarMenu>
    <nav id="nav">
      <router-link to="/">Home </router-link>
      <router-link to="/About">About </router-link>
      <router-link to="/Project">Project </router-link>
      <router-link to="/Contact">Contact </router-link>
    </nav>
    <!-- Routes rendered here -->
    <transition name="fade" mode="out-in" @after-leave="afterLeave">
      <router-view />
    </transition>
  </div>
</template>

<script>
import SlidebarMenu from './components/SlidebarMenu'

export default {
  methods: {
    afterLeave () {
      this.$root.$emit('triggerScroll')
    }
  },
  components: {
    'slidebarMenu': SlidebarMenu
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav a {
  display: inline-block;
  padding: 1em;
  margin: 1em;
  color: green;
  text-decoration: none;
  border: 1px solid green;
}
#nav a:hover {
  color: #fff;
  background: green;
}
#logo {
  width: 5em;
}
</style>
