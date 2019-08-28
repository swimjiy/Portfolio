<!--<template>
    <header class="header">
        <h1 class="logo">
            <nuxt-link to='/'>
                <img src="../assets/images/logo.png" alt="logo" class="logo_image">
            </nuxt-link>
        </h1>
        <ul class="navbar_list">
            <nuxt-link
                class="navbar_item"
                tag='li'
                v-for='link in routerLinks'
                :to='link.url'
                :key='link.key'    
            >
                <a>{{ link.name }}</a>
            </nuxt-link>
        </ul>
    </header>
</template>

<script>
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

<style lang="scss" scoped>
@import '@/assets/scss/app.scss';
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 6em;
    padding: 0 2em;
    z-index: 10;
    background-color: #fff;
}

.logo {
    width: 40px;
    height: 40px;
    align-self: flex-end;
    font-size: 2.4em;
    font-weight: 500;
    font-style: normal;
    color: $dark;
}
.logo_image {
    width: 100%;
}

.navbar_list {
    display: flex;
    justify-content: flex-end;
    .navbar_item {
        display: flex;
        justify-content: flex-end;
        a {
            font-size: 1.6em;
            padding: 0 1em;
            color: $dark;
        }
        a:hover {
            text-decoration: underline;
        }
    }
}


</style>-->