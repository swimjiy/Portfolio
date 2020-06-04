<template>
    <section class="section align-center">
        <div class="flex-layout">
            <div class="flex-item col-m-12">
                <h2 class="home_title title_left">
                    <span class="text_blue">{</span>
                    <strong class="text_bold">코드</strong>
                    <span class="text_blue">}</span> 
                    안에서
                </h2>
            </div>
            <div class="flex-item col-m-12">
                 <div class="home_thumb">
                    <img src="~assets/images/img_home.png" alt="" class="image">
                </div>
            </div>
            <div class="flex-item col-m-12">
                <h2 class="home_title title_right">
                    <span class="text_blue">&lt;</span>
                    <strong class="text_bold">유영</strong>
                    <span class="text_blue">/&gt;</span> 
                    하기
                </h2>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/app.scss';

.home_title {
  font-size: 6em;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: 0.72px;
  text-align: left;
  color: $dark;
  &.title_left {
    text-align: left;
  }
  &.title_right {
    text-align: right;
  }
  .text_bold {
    font-weight: 500;
  }
  .text_blue {
    color: $blue;
  }
}
.home_thumb {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 65em;
  height: auto;
  margin: 0 auto;
  @include breakpoint(medium) {
    height: 16em;
  }
  .image {
    width: 100%;
    // height: 100%;
  }
}
</style>

