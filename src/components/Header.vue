<template>
    <header class="header">
        <h1 class="logo">
            <router-link to='/'>
                swimmer
            </router-link>
        </h1>
        <ul class="navbar_list">
            <router-link
                class="navbar_item"
                tag='li'
                v-for='link in routerLinks'
                :to='link.url'
                :key='link.key'    
            >
                <a>{{ link.name }}</a>
            </router-link>
        </ul>
        <!-- <button @click='animateMenu'>Sitemenu</button> -->
    </header>
</template>

<script>
import '@/styles/header.scss';

export default {
    name: 'Header',
    data() {
        return {
            routerLinks: [
                {
                    name: 'ABOUT',
                    url: '/ABOUT',
                    key: 0,
                },
                {
                    name: 'PROJECT',
                    url: '/PROJECT',
                    key: 1,
                },
            ]
        }
    }
}
</script>
