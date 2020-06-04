<template>
    <div class="slidebar_container">
        <!-- Nav Links -->
        <div ref="slider" class="navMenu" :style="menuWidth">
            <a href="javascript:void(0)" class="closebtn" @click="closeMenu()">X</a>
            <nav>
                <router-link v-for="link in links" :key="link.id" :to="link.url" @click.prevent="closeMenu()">{{ link.text }}</router-link>
            </nav>
        </div>
        <div ref="manuIcon" class="navIcon">
            <a href="javascript:void(0)" @click="toggleMenu()" data-test-ref="navMenuLink">
                <!-- <svg>
                    <path d="M0,5 30,5" stroke-width="5"/>
                    <path d="M0,14 30,14" stroke-width="5"/>
                    <path d="M0,23 30,23" stroke-width="5"/>
                </svg> -->
                =
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.slidebar_container {

}
.navIcon {
    position: absolute;
    top: 20px;
    right: 20px;
}
.navMenu {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 0;
    height: 100%;
    background-color: #fff
}
</style>


<script>
export default {
    name: 'Navbar',
    props: {
        width: {
            type: Number,
            required: false,
            default: 250
        },
        links: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            // styles: styles,
            menuWidth: {
                'width': 0
            }
        };
    },
    // computed: {
    //     menuDirection () {
    //         return this.direction === 'right' ? { 'right': 0 } : { 'left': 0 }
    //     },
    //     iconDirection () {
    //         return this.direction === 'right' ? { 'float': 'right' } : { 'float': 'left' }
    //     },
    //     app () {
    //         return document.getElementById('app')
    //     }
    // },
    methods: {
        openMenu() {
            const width = this.width.toString() + 'px'
            this.menuWidth = {'width' : '100%'}
        },
        closeMenu() {
            this.menuWidth = {'width' : 0}
        },
        toggleMenu () {
            if (this.menuWidth.width === 0) {
                this.openMenu()
            } else {
                this.closeMenu()
            }
        }
    }
}
</script>
