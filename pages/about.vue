<template>
    <div>
        <section class="section flex-layout">
            <div class="about_image_container flex-item col-p-6 col-m-12">
                <img src="~assets/images/img_about.png" alt="" class="about_image">
            </div>
            <div class="flex-item col-p-6 col-m-12">
                <div class="about_label">
                    <WaveLine/>
                    <p class="label_text">Introduce</p>
                </div>
                <div class="about_description">
                    <strong class="text_bold">웹 프론트엔드 개발자를 지향하는 ‘임지영’ 입니다. </strong>
                    <p>
                        모르는 것을 알아가는 과정을 좋아하고, 이를 사람들과 공유하는 일에는 더 큰 보람을 느낍니다. 
                        마크업과 React, Vue를 이용한 컴포넌트 단위 웹 개발에 관심이 많으며, 
                        웹 접근성에도 관심이 있어 모두가 원하는 방식으로 웹에 접근할 수 있는 방법을 고민하고 있습니다.
                    </p>
                </div>
                <ul class="sns_list">
                    <li class="sns_item" v-for='link in snsLinks' :key='link.key'>
                        <a :href='link.url'
                        :target='link.target' 
                        :class='"sns_" + link.name' 
                        :alt='link.name + "새 창으로 이동"'
                        >
                        {{link.name}}
                        </a>
                    </li>
                </ul>
                <!-- <NavigationLink url="www.naver.com" class="about_button">See resume</NavigationLink> -->
            </div>
        </section>
        <section class="section">
            <div class="about_label flex-item col-p-12">
                <WaveLine/>
                <p class="label_text">Skills</p>
            </div>
            <div class="flex-layout">
                <div
                    class="flex-item col-p-3 col-t-6 col-m-12"
                    v-for="(category, index) in category"
                    :key="index"
                >
                    <div
                        class="skills_item"
                    > 
                        <h3 class="skills_title">{{ category.title }}</h3>
                        <ul class="skills_detail_list">
                            <li
                                v-for="(skill, index) in category.skills"
                                :key="index"
                                :class='skill.level'
                                class="skills_detail_item"
                                :title="skill.lavel"
                                :aria-label="skill.level + ' in '"
                            >
                                {{ skill.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import NavLink from '@/components/NavLink.vue'
import WaveLine from '~/assets/images/icon_wave.svg'

export default {
    name: 'about',
    components: {
        // AboutImage,
        WaveLine,
        "NavigationLink": NavLink
    },
    data() {
        return {
            snsLinks: [
                {
                    name: 'github',
                    url: 'https://github.com/swimjiy',
                    target: '_blank',
                    key: 0,
                },
                {
                    name: 'blog',
                    url: 'https://swimjiy.github.io/',
                    target: '_blank',
                    key: 1,
                },
                {
                    name: 'email',
                    url: 'mailto:swimjiy@gmail.com',
                    target: '_blank',
                    key: 2,
                },
            ],
            category : [
                {
                    title: 'Language',
                    skills: [
                        {
                            name: 'HTML5',
                            level: 'expert',
                        },
                        {
                            name: 'CSS3',
                            level: 'expert',
                        },
                        {
                            name: 'JavaScript',
                            level: 'intermediate',
                        },
                        {
                            name: 'TypeScript',
                            level: 'beginner',
                        },
                        {
                            name: 'C',
                            level: 'intermediate',
                        },
                    ]
                },
                {
                    title: 'Framework & Library',
                    skills: [
                        {
                            name: 'React',
                            level: 'intermediate',
                        },
                        {
                            name: 'React Native',
                            level: 'beginner',
                        },
                        {
                            name: 'Vue.js',
                            level: 'beginner',
                        },
                        {
                            name: 'Scss',
                            level: 'intermediate',
                        },
                        {
                            name: 'jQuery',
                            level: 'intermediate',
                        },
                        {
                            name: 'D3.js',
                            level: 'beginner',
                        },
                    ]
                },
                {
                    title: 'Design',
                    skills: [
                        {
                            name: 'PhotoShop',
                            level: 'expert',
                        },
                        {
                            name: 'Illustrator',
                            level: 'beginner',
                        },
                        {
                            name: 'Sketch',
                            level: 'beginner',
                        },
                    ]
                },
                {
                    title: 'Etc.',
                    skills: [
                        {
                            name: 'Git',
                            level: 'intermediate',
                        },
                        {
                            name: 'ZIRA',
                            level: 'beginner',
                        },
                        {
                            name: 'Slack',
                            level: 'expert',
                        },
                        {
                            name: 'SVN',
                            level: 'expert',
                        },
                    ]
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/app.scss';
.about_text_container {
    padding: 0 2em;
}
.about_label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: $blue;
    .label_text {
        height: 40px;
        padding-left: 45px;
        font-size: 1.4em;
        font-weight: 500;
        font-style: normal;
        text-align: left;
        color: $blue;
        line-height: 40px;
        background: url('~assets/images/icon_wave.svg') no-repeat left center;
        background-size: auto 100%;
    }
}
.about_description {
    margin-top: 0;
    font-size: 1.6em;
    font-weight: 300;
    line-height: 2;
    text-align: left;
    color: $dark;
    @include breakpoint(medium) {
        margin-top: 2.5em;
    }
    .text_bold {
        font-weight: 500;
    }
}
.about_hash_list {
    display: flex;
    flex-flow: wrap;
    margin-top: 2em;
    .hash_item {
        margin-right: 2em;
        font-size: 1.4em;
        font-weight: 500;
        font-style: normal;
        text-align: left;
        color: $blue;
    }
}
.item_button {
    display: inline-block;
    margin-top: 4.7em;
    padding: 9px 23px;
    box-shadow: 0,0,0,0;
    font-size: 1.4em;
    font-weight: 500;
    letter-spacing: 0.17px;
    text-align: left;
    color: #3a61f5;
    border: 0;
    background-color: $lightBlue;
}
.skills_list {
    display: flex;
    width: 100%;
}
.skills_item {
    padding: 2em;
    margin-bottom: 2em; 
    min-height: 500px;
    border-radius: 1em;
    background-color: #fff;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2); 
}
.about_button {
    margin-bottom: 5em;
}
.skills_title {
    font-size: 2.4em;
    font-weight: 300;
    color: $blue;
    text-align: right;
}
.sns_list {
    display: flex;
    justify-content: flex-start;
    margin-top: 2em;
    .sns_item {
        padding-right: 2em;
        a {
            display: block;
            height: 2em;
            padding-left: 3em;
            font-size: 1.2em;
            color: $dark;
            font-size: 1.4em;
            font-weight: 500;
            font-style: normal;
            color: $blue;
            line-height: 2em;
            transition: all 0.3s;
        }
        a:hover {
            opacity: 0.7;
            transition: all 0.3s;
        }
        .sns_github {
            background: url('~assets/images/icon_github.svg') no-repeat left center;
            background-size: auto 100%;
        }
        .sns_blog {
            background: url('~assets/images/icon_blog.svg') no-repeat left center;
            background-size: auto 100%;
        }
        .sns_email {
            background: url('~assets/images/icon_mail.svg') no-repeat left center;
            background-size: auto 100%;
        }
    }
}
.skills_detail_list {
    text-align: left;
    .skills_detail_item {
        position: relative;
        margin-top: 1em;
        line-height: 3.5em;
        font-size: 1.3em;
        font-weight: 500;
        color: $dark;
        &:after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: #cee1ff;
        }
        &:before {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 1;
            width: 25%;
            height: 3px;
            background-color: $blue;
        }
        &.beginner:before{
            width: 25%;
        }
        &.intermediate:before{
            width: 50%;
        }
        &.expert:before{
            width: 80%;
        }
    }
}
.about_image_container {
    max-width: 300px;
    @include breakpoint(medium) {
        max-width: 400px;
    }
    .about_image {
        width: 100%;
    }
}
</style>
