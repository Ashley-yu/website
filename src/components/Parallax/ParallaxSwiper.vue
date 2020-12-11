<template lang="pug">
  .container-fluid.p-0
    section
      swiper.swiper(:options='swiperOption')
        swiper-slide
          ul.list-unstyled.p-0.m-0.layer-inner#scene(
            data-hover-only="true"
          )
            li.layer(data-depth="0.0")
              img.img-fluid.w-100.h-100(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg')
            li.layer(data-depth="0.2")
              img.img-fluid.w-100.h-100.image-bottom-left(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png')
            li.layer(data-depth="0.0")
              img.img-fluid.w-100.h-100(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png')
            li.layer.layer-4(data-depth="0.6")
              img.img-fluid.image-bottom-right(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png')
            li.layer(data-depth="0.0")
              img.img-fluid.w-100.image-bottom-right(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png')
            li.layer(data-depth="0.0")
              img.img-fluid.w-100.h-100(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png')
        swiper-slide
          img.img-fluid.w-100.h-100(src='https://source.unsplash.com/random?sig=53')
        .swiper-pagination(slot='pagination')
        .swiper-button-prev(slot='button-prev')
        .swiper-button-next(slot='button-next')
    footer.bg-primary.text-light.text-center.p-5
      p Reference:
      ul.list-unstyled
        li
          a.text-info(href='https://github.com/surmon-china/vue-awesome-swiper') vue-awesome-swiper
        li
          a.text-info(href='https://github.com/wagerfield/parallax') parallax.js
        li
          a.textinfo(href='https://codepen.io/swmj/pen/RwPxQzR?editors=1010') Swiper JS - Demo
</template>

<script>
import Parallax from 'parallax-js';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: "SwiperParallaxBackground",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      parallaxInstance: '',
      swiperOption: {
        slidesPerView: 1,
        // loop: true, // loop 後的 parallax 效果會消失
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted() {
    //初始化parallax 插件
    this.parallaxInstance = new Parallax(document.getElementById('scene'));
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/utils/mixin";

.swiper-container {
  height: 420px;
  @include screen-md() {
    max-height: 360px;
  }
  @include screen-sm() {
    max-height: 280px;
  }
  @include screen-xs() {
    max-height: 120px;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

.image-bottom-left {
  position: absolute;
  left: 0;
  bottom: 0;
}

.image-bottom-right {
  position: absolute;
  right: 0;
  bottom: 0;
}

.layer-container, .layer-inner, .layer {
  //min-height: 105%;
  height: 100%;
}

.layer {
  width: 100%;
}

.layer-4 img {
  height: 85%;

  @include screen-md() {
    height: 75%;
  }

  @include screen-sm() {
    height: 65%;
  }
}

</style>
