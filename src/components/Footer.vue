<template>
    <footer class="footer">
        <ul class="sns_list">
            <li class="sns_item" v-for='link in snsLinks' :key='link.key'>
                <a :href='link.url' :target='link.target' :class='"sns_" + link.name' :alt='link.name + "새 창으로 이동"'></a>
            </li>
        </ul>
    </footer>
</template>

<script>
import '@/styles/footer.scss';

export default {
    name: 'Footer',
    data() {
        return {
            snsLinks: [
                {
                    name: 'github',
                    url: 'https://github.com/sumim00',
                    target: '_blank',
                    key: 0,
                },
                {
                    name: 'linkedin',
                    url: 'mailto:vivid8222@gmail.com',
                    target: '_blank',
                    key: 1,
                },
                // {
                //     name: 'email',
                //     url: 'mailto:vivid8222@gmail.com',
                //     target: '_blank',
                //     key: 2,
                // },
            ]
        }
    }
}
</script>
