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
<style lang="scss">
@import '@/styles/app.scss';
.rounded {
  border-radius: 10px;
}
.nav_link {
  display: inline-block;
  margin-top: 4.7rem;
  padding: 9px 23px;
  box-shadow: 0,0,0,0;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.17px;
  text-align: left;
  color: #3a61f5;
  border: 0;
  background-color: $lightBlue;
  transition: 0.3s all ease-out;

  &:hover{
    color: #fff;
    background-color: $blue;
    transition: 0.3s all ease-out;
  }
}
</style>