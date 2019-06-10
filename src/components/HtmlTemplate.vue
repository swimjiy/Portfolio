<template>
    <div id="root">
        <h2>Text</h2>
        <p>메시지 : {{ msg }}</p>
        <p v-once>메시지 한 번만 : {{ msg }}</p>
        <hr>
        <h2>Raw HTML</h2>
        <p> Mustache: {{ blueMsg }}</p>
        <p> v-html directive: <span v-html="blueMsg"> {{ blueMsg }} </span></p>
        <hr>
        <h2>Attribute</h2>
        <p v-bind:id = "id">Attribute : This is my ID </p>
        <hr>
        <h2>JavaScript</h2>
        <p>{{ number }} + 1 = {{ number + 1 }}</p>
        <p>If : {{ ok ? yes : no }}</p>
        <p>Reverse : {{reverse.split('').reverse().join('')}}</p>
        <hr>
        <h2>v-if</h2>
        <p v-if="seen">이제 나를 볼 수 있어요.</p>
        <hr>
        <h2>v-bind</h2>
        <a v-bind:href="url">네이버 링크</a>
        <a :href="url">네이버 링크</a><!-- 약어 -->
        <hr>
        <h2>v-on</h2>
        <button v-on:click="showAlert">Show Alert</button>
        <button @click="showAlert">Show Alert</button><!-- 약어 -->
        <hr>
        <h2>수식어</h2>
        <form v-on:submit.prevent="onSubmit">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello Vue.js!",
            blueMsg: "<span style='color:blue;'>I'm Blue</span>",
            id: "myId",
            number: 7,
            ok: true,
            yes: "YES!",
            no: "NO",
            reverse: "뒤집어진다",
            seen: true,
            url: "https://www.naver.com/",
            showAlert: function(){
                alert('Hello!')
            },
            onSubmit: function(){
                alert('전송 완료!')
            }
        }
    }
}
</script>

<style>

</style>
