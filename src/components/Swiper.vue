<template>
    <v-container grid-list-lg class="section">
        <v-layout row wrap align-center>
            <v-flex xs12>
                <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback"> 
                    <swiper-slide 
                        v-for="(slide,index) in virtualData.slides"
                        :key="index"
                        style="padding:0 5%"
                    >
                        <v-container grid-list-lg>
                            <v-layout row wrap align-center class="project_item">
                                <v-flex xs12 md6 class="project_text_warpper">
                                    <div class="swiper-pagination item_number" slot="pagination"></div>
                                    <div class="item_title">
                                        <h2 class="title_text">{{ slide.title }}</h2>
                                        <p class="title_line"></p>
                                        <p class="title_date">{{ slide.date }}</p>
                                    </div>
                                    <h3 class="item_subtitle">{{ slide.subTitle }}</h3>
                                    <p class="item_description">
                                        {{ slide.description }}
                                    </p>
                                    <ul class="item_hash_list">
                                        <li
                                        v-for="(item,index) in slide.hash" 
                                        :key="index"
                                        class="hash_item"
                                        ># {{ item }}</li>
                                    </ul>
                                    <NavigationLink :url="slide.url">See resume</NavigationLink>
                                </v-flex>
                                <v-flex xs12 md6 class="project_image_wrapper">
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import 'swiper/dist/css/swiper.css'
import '@/styles/swiper.scss';

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import NavLink from './NavLink.vue'

export default {
    name: 'Swiper',
    components: {
        swiper,
        swiperSlide,
        "NavigationLink": NavLink
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            virtualData: {
                slides: [
                    {
                        title: '문화생활 기록 앱 CULOR',
                        subTitle: '기여도 : 50%',
                        description: 'IT 연합 동아리 NEXTERS 15기 활동으로 제작한 앱입니다. ios와 안드로이드 호환이 가능한 React Native로 제작했으며, state관리를 위해 Redux 및 Redux-saga를 사용했습니다.',
                        date: '2019.07 ~ 2019.08',
                        hash: ['React Native', 'Redux', 'Redux-saga', 'expo'],
                        url: 'www.naver.com'
                    },
                    {
                        title: 'DOUZONE 웹 빌더',
                        subTitle: '기여도 : 30%',
                        description: '더존 웹빌더는 더존을 이용하는 사용자들의 빠르고 쉬운 웹페이지 제작을 돕는 서비스입니다. 웹빌더 제작에 필요한 다양한 템플릿과 편집툴 UI를 구축했습니다.',
                        date: '2019.05 ~ 2019.06',
                        hash: ['HTML5', 'CSS3', 'JavaScript'],
                        url: 'www.naver.com'
                    },
                    {
                        title: 'i-ONE Bank',
                        subTitle: '기여도 : 30%',
                        description: 'IBK 기업은행 차세대 앱 i-ONE Bank입니다. React와 HTML5를 결합한 하이브리드 앱이며,  HTM5와 CSS3를 이용한 UI구축 및 animate 속성을 이용한 인터렉션을 담당했습니다.',
                        date: '2019.02 ~ 2019.05',
                        hash: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'ZIRA', 'SVN'],
                        url: 'www.naver.com'
                    },
                    {
                        title: '한경닷컴',
                        subTitle: '기여도 : 50%',
                        description: '한국경제신문 계열사인 한경닷컴의 자사 페이지 유지보수 및 사내 프로젝트를 구축했습니다.',
                        date: '2018.10 ~ 2019.02',
                        hash: ['HTML5', 'CSS3', 'SVN'],
                        url: 'www.naver.com'
                    },
                    {
                        title: 'KEDICO',
                        subTitle: '기여도 : 30%',
                        description: 'KEDICO는 한국경제신문과 전문평가단이 제공하는 ICO/암호화폐 평가 전문 사이트입니다.HTML5, CSS3를 이용한 모바일/PC 웹 UI 및 BootStrap4를 이용한 관리자 페이지 UI를 구축했습니다.',
                        date: '2018.07 ~ 2018.10',
                        hash: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap4', 'Git'],
                        url: 'www.naver.com'
                    },
                ]
            },
        }
    }
}
</script>
