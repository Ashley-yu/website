<template lang="pug">
  .container-fluid.p-0
    section
      swiper.swiper(:options='swiperOption')
        .parallax-bg(slot='parallax-bg' data-swiper-parallax='-23%' style='background-image: url(https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80);')
        swiper-slide.text-white
          h3.title.font-weight-bold.mb-3(data-swiper-parallax='-100') Slide 1
          h4.subtitle.mb-3(data-swiper-parallax='-240') Subtitle
          .text(data-swiper-parallax='-360')
            p
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        swiper-slide.text-white
          h3.title.font-weight-bold.mb-3(data-swiper-parallax='-100') Slide 2
          h4.subtitle.mb-3(data-swiper-parallax='-240') Subtitle
          .text(data-swiper-parallax='-360')
            p
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        swiper-slide.text-white
          h3.title.font-weight-bold.mb-3(data-swiper-parallax='-100') Slide 3
          h4.subtitle.mb-3(data-swiper-parallax='-240') Subtitle
          .text(data-swiper-parallax='-360')
            p
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        .swiper-pagination.swiper-pagination-white(slot='pagination')
        .swiper-button-prev.swiper-button-white(slot='button-prev')
        .swiper-button-next.swiper-button-white(slot='button-next')
    footer.bg-primary.text-light.text-center.p-5
      p Reference:
      ul.list-unstyled
        li
          a.text-info(href='https://github.com/surmon-china/vue-awesome-swiper') vue-awesome-swiper
        li
          a.text-info(href='https://github.com/surmon-china/surmon-china.github.io/blob/source/projects/vue-awesome-swiper/examples/33-parallax.vue') 33-parallax
</template>

<script>
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
      swiperOption: {
        speed: 600,
        parallax: true,
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
  }
}
</script>

<style scoped lang="scss">
.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.swiper {
  width: 100%;
  height: 380px;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 80px;

    .text {
      max-width: 430px;
    }
  }
}
</style>
