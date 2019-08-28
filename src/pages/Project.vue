<template>
    <Swiper />
</template>

<script>
import Swiper from '../components/Swiper'

export default {
    name: 'Project',
    components: {
        Swiper,
    },
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/app.scss';

.project {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2%;

}
.project_section {
    padding: 10% 10%;
    
}
.project_swiper {
    flex: 1;
    border: 1px solid #000;
}

</style>