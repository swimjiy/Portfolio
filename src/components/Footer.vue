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

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';

.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 0em;
    z-index: 10;

    .sns_list {
        position: fixed;
        bottom: 4em;
        left: 4em;
        .sns_item {
            padding-top: 2em;
            a {
                display: block;
                width: 2.4em;
                height: 2.4em;
                font-size: 1.2em;
                color: $dark;
            }
            a:hover {
                opacity: 0.7;
            }
            .sns_github {
                background-image: url('../assets/images/icon_github.svg');
                background-size: cover;
            }
            .sns_linkedin {
                background-image: url('../assets/images/icon_linkedin.svg');
                background-size: cover;
            }
            .sns_email {
                background-image: url('../assets/images/icon_mail.svg');
                background-size: cover;
            }
        }
    }
}


</style>