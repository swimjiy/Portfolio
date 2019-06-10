<template>
  <div class="hello">
    <p v-once>메세지 : {{ msg }}</p>
    <p v-once>메세지 한 번만 : {{ msg }}</p>
    <p>Using mustaches: {{ blue }}</p>
    <p>Using v-html directive: <span v-html="blue">{{ blue }}</span></p>
    <p>Using v-html directive: <span v-html="blue">{{ blue }}</span></p>
    <p>{{ number }} + 1 = {{ number + 1 }}</p>
    <p v-bind:id="'list-' + id"></p>
    <h2>
      Face Switch : 
      <img v-bind:src="feel?smile:bad"/>
    </h2>
    <!-- 전체 -->
    <button v-on:click="doSomething">...</button>
    <!-- 약어 -->
    <button @click="doSomething">...</button>
    <!-- 전체 -->
    <a v-bind:href="url">...</a>
    <!-- 약어 -->
    <a :href="url">...</a>
    <p>Reverse : {{ reverse.split('').reverse().join('') }}</p>
    <p v-if="seen">이제 나를 볼 수 있어요</p>
    <p v-if="type === 'A'">A</p>
    <p v-else-if="type === 'B'">B</p>
    <p v-else>Nothing</p>
    <p v-show="show">Boom!</p>
    <form v-on:submit.prevent="onSubmit"> ... </form>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
  data() {
    return {
      msg: "Hello Vue.js!",
      blue: "<span style='color:blue'>Blue</span>",
      number: 3,
      feel: true,
      smile: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/153/smiling-face-with-smiling-eyes_1f60a.png",
      bad: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/153/crying-face_1f622.png",
      doSomething: console.log('hello!'),
      reverse: "ABCDEFG",
      type: 'F',
      show: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
