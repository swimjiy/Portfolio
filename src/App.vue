<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in" @after-leave="afterLeave">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

import '@/styles/app.scss'

export default {
  methods: {
    afterLeave () {
      this.$root.$emit('triggerScroll')
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

