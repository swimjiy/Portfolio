<template>
    <main class="about">
        <section class="about_section">
            <div class="about_image_wrapper">
                <!-- <AboutImage class="about_thumb_img"/> -->
                <img svg-inline class="icon about_thumb_img" src="../assets/img_about.svg" alt=""/>
            </div>
            <div class="about_text_warpper">
                <div class="about_label">
                    <p class="label_icon"></p>
                    <p class="label_line"></p>
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
                <ul class="about_hash_list">
                    <!-- <li class="hash_item"># Web Development</li> -->
                    <li class="hash_item"># Web Front-End Developer</li>
                    <li class="hash_item"># UX/UI</li>
                    <li class="hash_item"># A11y</li>
                </ul>
            </div>
        </section>
        <section class="skills_section">
            <div class="about_label">
                <p class="label_icon"></p>
                <p class="label_line"></p>
                <p class="label_text">Skills</p>
            </div>
            <ul class="skills_list">
                <li 
                    v-for="(category, index) in category"
                    :key="index"
                    class="skills_item" 
                >
                    <h3 class="skills_title">{{ category.title }}</h3>
                    <ul class="skills_detail_list">
                        <li
                            v-for="(skill, index) in category.skills"
                            :key="index"
                            :class='skill.level'
                            class="skills_detail_item"
                        >
                            {{ skill.name }}
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- <div class="about_label">
                <p class="label_icon"></p>
                <p class="label_line"></p>
                <p class="label_text">Skills</p>
            </div>
            <Chart :chartdata="chartdata" :options="options" class="about_chart" @mousewheel="scrollHorizontal()"/> -->
        </section>
    </main>
</template>

<script>
import '@/styles/about.scss';
// import AboutImage from '../assets/img_about.svg';
import Chart from '../components/Chart'

export default {
    name: 'About',
    components: {
        Chart,
        // AboutImage
    },
    data() {
        function scrollHorizontal(e, delta) {
            this.scrollLeft -= (delta * 30);
            e.preventDefault();
        }
        return {
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
            chartdata : {
                labels: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'React', 'React Native','Vue', 'PhotoShop', 
                        ], 
                datasets: [
                    {
                    label: 'Level',
                    fill: true,
                    borderColor: '#3366ff',
                    borderWidth: 2,
                    backgroundColor: 'rgba(51, 102, 255, 0.2)',
                    pointBackgroundColor: 'white',
                    pointBorderColor: '#3366ff',
                    pointBorderWidth: 7,
                    //Data to be represented on y-axis
                    data: [5,5,3,3,2,3,1,2,4]
                    }
                ]
            },
            options : {
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 5,
                            min: 0,
                            stepSize: 1
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [ {
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false
            },
        }
    }
}
</script>