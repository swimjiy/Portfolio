<template>
  <a class="nav_link" :href="url" target="_blank"><slot></slot></a>
</template>
<script>
export default {
  props: {
    url: {
      type: String
    },
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/app.scss';
.nav_link {
  display: inline-block;
  margin-top: 2em;
  padding: 9px 23px;
  box-shadow: 0,0,0,0;
  font-size: 1.4em;
  font-weight: 500;
  letter-spacing: 0.17px;
  text-align: left;
  color: #3a61f5;
  border: 0;
  background-color: $lightBlue;
  transition: 0.3s all ease-out;
  white-space: nowrap;
  @include breakpoint(medium) {
      margin-top: 3em;
  }

  &:hover{
    color: #fff;
    background-color: $blue;
    transition: 0.3s all ease-out;
  }
}
</style>