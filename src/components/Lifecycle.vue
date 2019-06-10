// Lifecycle.vue
<template>
    <div id="root">
        <h1>Lifecycle State : {{ msg }}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return{
            msg: 'View Lifecycle'
        }
    },
    beforeCreate() {
        this.msg = 'beforeCreate'
        console.log('beforeCreate')
    },
    created() {
        this.msg = 'created'
        console.log('created')
    },
    mounted(){
        this.msg = 'mounted'
        console.log('mounted')
    },
    updated(){
        this.msg = 'updated'
        console.log('updated')
    },
    destroyed(){
        this.msg = 'destroyed'
        console.log('destroyed')
    }
}
</script>

