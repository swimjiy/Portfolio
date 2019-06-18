<template>
    <div>
        <h1>{{ message }}</h1>
        <h1>{{ reversedMessage }}</h1>
        <p>{{ count }}</p>
        <p>{{ now }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: '안녕하세요',
            items: [1, 2, 3]
        }
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        },
        count: function() {
            return 'The count is ' + this.items.length * 10
        },
        now: function() {
            return Date.now()
        }
    }
}
</script>
