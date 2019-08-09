<template>
    <main class="about">
        <section class="about_section">
            <div class="about_image_wrapper">
                <p>임시 이미지</p>
            </div>
            <div class="about_text_warpper">
                <div class="about_label">
                    <p class="label_icon"></p>
                    <p class="label_line"></p>
                    <p class="label_text">Introduce</p>
                </div>
                <div class="about_description">
                    <strong class="text_bold">프론트엔드 개발자를 지향하는 ‘임지영’ 입니다. </strong>
                    <p>
                        탐구하는 것을 좋아하고 알아낸 것을 공유하는 것에 더 큰 보람을 느낍니다. 
                        평소에는 React와 Vue를 이용한 컴포넌트 단위 웹 개발에 관심을 가지고 
                        있으며, 최근에는 React Native를 이용한 하이브리드 앱 개발에도 흥미를 
                        갖고 있습니다. 
                        <br/>
                        건강한 신체에 건강한 정신이 깃든다는 문장에 크게 공감하여 동네 구민센
                        터에서 수영을 간헐적으로 다니고 있습니다.
                    </p>
                </div>
                <ul class="about_hash_list">
                    <li class="hash_item"># Web Development</li>
                    <li class="hash_item"># Front-End Developer</li>
                    <li class="hash_item"># UX/UI</li>
                </ul>
            </div>
        </section>
        <section class="skills_section">
            <div class="about_label">
                <p class="label_icon"></p>
                <p class="label_line"></p>
                <p class="label_text">Skills</p>
            </div>
            <Chart :chartdata="chartdata" :options="options" class="about_chart" @mousewheel="scrollHorizontal()"/>
        </section>
    </main>
</template>

<script>
import '@/styles/about.scss';
import Chart from '../components/Chart'

export default {
    components: {
        Chart,
    },
    data() {
        function scrollHorizontal(e, delta) {
            this.scrollLeft -= (delta * 30);
            e.preventDefault();
        }
        return {
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