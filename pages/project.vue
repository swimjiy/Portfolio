<template>
    <section class="section flex-layout">
        <div
            v-swiper:mySwiper="swiperOption"
        >
            <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
                <div class="project_item flex-layout">
                    <div class="project_text_warpper flex-item col-p-6 col-m-12">
                        <div class="hidden-t visible-m">
                            <div class="project_label_wrapper">
                                <div class="swiper-pagination item_number" slot="pagination"></div>
                                <p class="title_line"></p>
                                <p class="title_date">{{ banner.date }}</p>
                            </div>
                        </div>
                        <div class="swiper-pagination item_number hidden-m visible-t" slot="pagination"></div>
                        <div class="item_title">
                            <h2 class="title_text">{{ banner.title }}</h2>
                            <p class="title_line hidden-m visible-t"></p>
                            <p class="title_date hidden-m visible-t">{{ banner.date }}</p>
                        </div>
                        <h3 class="item_subtitle">{{ banner.subTitle }}</h3>
                        <p class="item_description">
                            {{ banner.description }}
                        </p>
                        <ul class="item_hash_list">
                            <li
                            v-for="(item,index) in banner.hash" 
                            :key="index"
                            class="hash_item"
                            ># {{ item }}</li>
                        </ul>
                        <NavigationLink :url="banner.url">See Details</NavigationLink>
                    </div>
                    <div class="project_image_wrapper flex-item col-p-6 col-m-12">
                        <img
                            :src="require('@/assets/images/'+banner.image)" 
                            alt="" 
                            class="image"
                        >
                    </div>
                </div>
            </div>
            </div>
            <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
            <div class="swiper-button-prev hidden-m visible-t" slot="button-prev"></div>
            <div class="swiper-button-next hidden-m visible-t" slot="button-next"></div>
        </div>
    </section>
</template>

<script>
import NavLink from '@/components/NavLink.vue'
  export default {
    name: 'project',
    components: {
        "NavigationLink": NavLink
    },
    data () {
      return {
        // banners: [
        //   '/1.jpg',
        //   '/2.jpg',
        //   '/3.jpg'
        // ],
        banners: [
            {
                title: '농수축산물 시세 찾기 Cart Savior',
                subTitle: '기여도 : 40%',
                description: 'SW 아카데미 42SEOUL의 팀 프로젝트로 진행한 반응형 웹입니다. 디자인 및 프로트엔드 개발을 담당했으며 그래프 제작을 위해 D3.js를 사용했습니다.',
                date: '2020.04 ~ 2020.05',
                hash: ['HTML', 'CSS', 'JavaScript', 'D3.js'],
                image: 'project-cart.png',
                url: 'http://www.cartsavior.ga/'
            },
            {
                title: '문화생활 기록 앱 CULOR',
                subTitle: '기여도 : 50%',
                description: 'IT 연합 동아리 NEXTERS 15기 활동으로 제작한 앱입니다. ios와 안드로이드 호환이 가능한 React Native로 제작했으며, state관리를 위해 Redux 및 Redux-saga를 사용했습니다.',
                date: '2019.07 ~ 2019.08',
                hash: ['React Native', 'Redux', 'Redux-saga', 'expo'],
                image: 'project_culor.jpg',
                url: 'https://github.com/Nexters/CultureLand-Android'
            },
            {
                title: 'DOUZONE 웹 빌더',
                subTitle: '기여도 : 30%',
                description: '더존 웹빌더는 더존을 이용하는 사용자들의 빠르고 쉬운 웹페이지 제작을 돕는 서비스입니다. 웹빌더 제작에 필요한 다양한 템플릿과 편집툴 UI를 구축했습니다.',
                date: '2019.05 ~ 2019.06',
                hash: ['HTML5', 'CSS3', 'JavaScript'],
                image: 'project_douzone.jpg',
                url: 'http://www.we-builder.net/'
            },
            {
                title: 'i-ONE Bank',
                subTitle: '기여도 : 30%',
                description: 'IBK 기업은행 차세대 앱 i-ONE Bank입니다. React와 HTML5를 결합한 하이브리드 앱이며,  HTM5와 CSS3를 이용한 UI구축 및 animate 속성을 이용한 인터렉션을 담당했습니다.',
                date: '2019.02 ~ 2019.05',
                hash: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'ZIRA', 'SVN'],
                image: 'project_ibk.jpg',
                url: 'https://play.google.com/store/apps/details?id=com.ibk.android.ionebank&hl=en_US'
            },
            {
                title: '한경닷컴',
                subTitle: '기여도 : 50%',
                description: '한국경제신문 계열사인 한경닷컴의 자사 페이지 유지보수 및 사내 프로젝트를 구축했습니다.',
                date: '2018.10 ~ 2019.02',
                hash: ['HTML5', 'CSS3', 'SVN'],
                image: 'project-hk.jpg',
                url: 'https://www.hankyung.com'
            },
            {
                title: 'KEDICO',
                subTitle: '기여도 : 30%',
                description: 'KEDICO는 한국경제신문과 전문평가단이 제공하는 ICO/암호화폐 평가 전문 사이트입니다.HTML5, CSS3를 이용한 모바일/PC 웹 UI 및 BootStrap4를 이용한 관리자 페이지 UI를 구축했습니다.',
                date: '2018.07 ~ 2018.10',
                hash: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap4', 'Git'],
                image: 'project-kedico.jpg',
                url: ''
            },
        ],
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
        //   centeredSlides: true,
        //   spaceBetween: 30,
            pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        //   pagination: '.swiper-pagination',
        //   paginationClickable: true,
        //   prevButton: '.swiper-button-prev',
        //   nextButton: '.swiper-button-next',
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        }
      }
    },
    mounted() {
      console.log('app init', this)
      setTimeout(() => {
        // this.banners.push('')
        console.log('banners update')
      }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper, 
        'I will slideTo banners 3')
       this.mySwiper.slideTo(0)
    }
  }
</script>


<style lang="scss" scoped>
@import '@/assets/scss/app.scss';
  .my-swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
  .project_item {
      padding: 0 20px;
        flex-direction: column-reverse;
        @include breakpoint(medium) {
            flex-direction: row;
        }
    }
    .item_number {
        width: auto;
        font-size: 1.4em;
        font-weight: 500;
        letter-spacing: 0.17px;
        color: $blue;
        &.swiper-pagination {
            position: unset;
            text-align: left;
            .swiper-pagination-current, .swiper-pagination-total {
                color: $blue;
            }
        }
    }
    .item_title {
        margin-top: 20px;
        @include breakpoint(medium) {
            margin-top: 50px;
        }
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: $grey;
    }
    .title_line {
        width: 2.3em;
        height: 0.1em;
        margin: 0 1em;
        background-color: $grey;
    }
    .title_date {
        font-size: 1.4em;
        font-weight: 300;
        font-style: normal;
        text-align: left;
        color: $grey;
        white-space: nowrap;
    }
    .title_text {
        font-size: 2.4em;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0.36px;
        color: $dark;
        white-space: nowrap;
    }
    .item_subtitle{
        margin-top: 1.4em;
        font-size: 1.6em;
        font-weight: 500;
        letter-spacing: 0.19px;
        color: $dark;
    }
    .item_description {
        max-width: 50em;
        margin-top: 30px;
        font-size: 1.6em;
        font-weight: 300;
        line-height: 2;
        color: $dark;
        @include breakpoint(medium) {
            margin-top: 40px;
        }
    }
    .item_hash_list {
        display: flex;
        flex-flow: wrap;
        margin-top: 2em;
        .hash_item {
            margin-right: 2em;
            font-size: 1.4em;
            font-weight: 500;
            font-style: normal;
            text-align: left;
            color: $dark;
            white-space: nowrap;
        }
    }
    .item_button {
        display: inline-block;
        margin-top: 1em;
        padding: 9px 23px;
        box-shadow: 0,0,0,0;
        font-size: 1.4em;
        font-weight: 500;
        letter-spacing: 0.17px;
        text-align: left;
        color: #3a61f5;
        border: 0;
        background-color: $lightBlue;
        @include breakpoint(medium) {
            margin-top: 3em;
        }
    }
    .project_image_wrapper {
        display: flex;
        align-items: center;
        height: 40em;
        overflow: hidden;
        .image {
            width: 100%;
        }
    }
    .project_label_wrapper {
        display: flex;
        margin-top: 20px;
        justify-content: flex-start;
        align-items: center;
        
        @include breakpoint(medium) {
            margin-top: 0;
        }
    }
</style>
