<template>
    <header class="header">
        <h1 class="logo">
            <router-link to='/'>
                Swimmer
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
                    name: 'about',
                    url: '/ABOUT',
                    key: 0,
                },
                {
                    name: 'project',
                    url: '/PROJECT',
                    key: 1,
                },
            ]
        }
    }
}
</script>
