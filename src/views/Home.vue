<template>
    <v-container grid-list-lg class="section">
        <v-layout row wrap align-center>
            <v-flex xs12>
                <h2 class="home_title title_left">
                    <span class="text_blue">{</span>
                    <strong class="text_bold">코드</strong>
                    <span class="text_blue">}</span> 
                    안에서
                </h2>
                <div class="home_thumb">
                    <img svg-inline class="icon home_thumb_img" src="../assets/img_home.svg" alt=""/>
                </div>
                <h2 class="home_title title_right">
                    <span class="text_blue">&lt;</span>
                    <strong class="text_bold">유영</strong>
                    <span class="text_blue">/&gt;</span> 
                    하기
                </h2>
            </v-flex>
        </v-layout>
        <!-- <Footer /> -->
    </v-container>
</template>

<script>
import '@/styles/home.scss';
// import Footer from '../components/Footer'

export default {
    name: 'Home',
    components: {
        // Footer
    }
}
</script>