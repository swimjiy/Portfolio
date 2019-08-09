<template>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback"> 
        <swiper-slide 
            v-for="(slide,index) in virtualData.slides"
            :key="index"
        >
            <div class="project_item">
                <div class="project_text_warpper">
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
                    <a class="item_button" :href="slide.url" >Launch site</a>
                </div>
                <div class="project_image_wrapper"></div>
            </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>


<script>
import 'swiper/dist/css/swiper.css'
import '@/styles/swiper.scss';

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'Swiper',
    components: {
        swiper,
        swiperSlide,
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
                        title: '첫번째',
                        subTitle: '서브타이틀',
                        description: '첫번째 내용',
                        date: 2018,
                        hash: ['html', 'css', 'JavaScript'],
                        url: 'www.naver.com'
                    },
                    {
                        title: '두번째',
                        subTitle: '서브타이틀',
                        description: '두번째 내용',
                        date: 2018,
                        hash: ['html', 'css', 'JavaScript'],
                        url: 'www.naver.com'
                    },
                    {
                        title: '세번째',
                        subTitle: '서브타이틀',
                        description: '세번째 내용',
                        date: 2018,
                        hash: ['html', 'css', 'JavaScript'],
                        url: 'www.naver.com'
                    },
                    {
                        title: '네번째',
                        subTitle: '서브타이틀',
                        description: '네번째 내용',
                        date: 2018,
                        hash: ['html', 'css', 'JavaScript'],
                        url: 'www.naver.com'
                    },
                    {
                        title: '다섯번째',
                        subTitle: '서브타이틀',
                        description: '다섯번째 내용',
                        date: 2018,
                        hash: ['html', 'css', 'JavaScript'],
                        url: 'www.naver.com'
                    },
                ]
            },
        }
    }
}
</script>
