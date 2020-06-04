<template>
    <v-container grid-list-lg>
        <v-layout row wrap align-center class="section">
            <v-flex xs12 md6>
                <img svg-inline class="thumb" src="../assets/img_about.svg" alt=""/>
            </v-flex>
            <v-flex xs12 md6>
                <div class="about_label">
                    <!-- <p class="label_icon"></p> -->
                    <img svg-inline class="label_icon" src="../assets/wave_line.svg" alt=""/>
                    <!-- <p class="label_line"></p> -->
                    <p class="label_text">Introduce</p>
                </div>
                <div class="about_description">
                    <strong class="text_bold">웹 프론트엔드 개발자를 지향하는 ‘임지영’ 입니다. </strong>
                    <p>
                        모르는 것을 알아가는 과정을 좋아하고, 이를 사람들과 공유하는 일에는 더 큰 보람을 느낍니다. 
                        마크업과 React, Vue를 이용한 컴포넌트 단위 웹 개발에 관심이 많으며, 
                        웹 접근성에도 관심이 있어 모두가 원하는 방식으로 웹에 접근할 수 있는 방법을 고민하고 있습니다.
                        <!-- 최근에는 React Native를 이용한 하이브리드 앱 개발에도 흥미를 
                        갖고 있습니다.  -->
                    </p>
                </div>
                <!-- <ul class="about_hash_list">
                    <li class="hash_item"># Web Front-End Developer</li>
                    <li class="hash_item"># UX/UI</li>
                    <li class="hash_item"># A11y</li>
                </ul> -->
                <!-- <ul class="about_hash_list">
                    <li class="hash_item"># github</li>
                    <li class="hash_item"># blog</li>
                    <li class="hash_item"># email</li>
                </ul> -->
                <ul class="sns_list">
                    <li class="sns_item" v-for='link in snsLinks' :key='link.key'>
                        <a :href='link.url'
                        :target='link.target' 
                        :class='"sns_" + link.name' 
                        :alt='link.name + "새 창으로 이동"'
                        >{{link.name}}</a>
                    </li>
                </ul>
                <NavigationLink url="www.naver.com" class="about_button">See resume</NavigationLink>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="section">
            <v-flex class="about_label" xs12>
                <!-- <p class="label_icon"></p> -->
                <img svg-inline class="label_icon" src="../assets/wave_line.svg" alt=""/>
                <!-- <p class="label_line"></p> -->
                <p class="label_text">Skills</p>
            </v-flex>
            <v-flex
                xs12 sm6 lg3 px-2
                v-for="(category, index) in category"
                :key="index"
            >
                <div class="skills_item"> 
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
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import '@/styles/about.scss';
import NavLink from '../components/NavLink.vue'
// import AboutImage from '../assets/img_about.svg';

export default {
    name: 'About',
    components: {
        // AboutImage
        "NavigationLink": NavLink
    },
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
                    name: 'blog',
                    url: 'https://sumim00.github.io/',
                    target: '_blank',
                    key: 1,
                },
                {
                    name: 'email',
                    url: 'mailto:vivid8222@gmail.com',
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
                            level: 'beginner',
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
                            name: 'Bootstrap4',
                            level: 'expert',
                        },
                        {
                            name: 'jQuery',
                            level: 'intermediate',
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
                        {
                            name: 'Zeplin',
                            level: 'expert',
                        },
                    ]
                }
            ],
        }
    }
}
</script>