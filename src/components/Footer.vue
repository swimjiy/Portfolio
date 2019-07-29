<template>
    <footer class="footer">
        <ul class="sns_list">
            <li class="sns_item" v-for='link in links' :key='link.key'>
                <a :href='link.url' :target='link.target'>{{link.name}}</a>
            </li>
        </ul>
        <!-- <button>view details</button> -->
    </footer>
</template>

<script>
import '@/styles/footer.scss';

export default {
    name: 'Footer',
    data() {
        return {
            key: 0,
            links: [
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
