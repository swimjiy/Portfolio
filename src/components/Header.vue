<template>
    <header class="header">
        <h1 class="logo">
            <router-link to='/'>
                logo
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
        <ul class="sns_list">
            <li class="sns_item" v-for='link in snsLinks' :key='link.key'>
                <a :href='link.url' :target='link.target'>{{link.name}}</a>
            </li>
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
            ],
            snsLinks: [
                {
                    name: 'github',
                    url: 'https://github.com/sumim00',
                    target: '_blank',
                    key: 0,
                },
                {
                    name: 'email',
                    url: 'mailto:vivid8222@gmail.com',
                    target: '_blank',
                    key: 1,
                },
            ]
        }
    }
}
</script>
