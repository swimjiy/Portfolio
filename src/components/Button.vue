<template>
  <button class="{ rounded: rounded }"><slot></slot></button>
</template>
<script>
export default {
  props: {
    rounded: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.rounded {
  border-radius: 10px;
}
</style>