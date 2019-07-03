<template>
    <div>
        <p>count: {{ count }}</p>
        <p>second: {{ secondCount }}</p>
        <p>computed: {{ double }}</p>
        <p>methods: {{ triple() }}</p>
        <button v-on:click="count ++">count+1</button>
        <button v-on:click="secondCount ++">secondCount+1</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
            secondCount: 0
        }
    },
    computed: {
        double: function() {
            console.log('computed double')
            return this.count * 2
        }
    },
    methods: {
        triple: function() {
            console.log('methods triple')
            return this.count * 3
        }
    }
}
</script>
