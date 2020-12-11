<template lang="pug">
  .container-fluid.p-0
    section
      swiper.swiper(:options='swiperOption')
        swiper-slide.text-white( v-for="(item, index) in banner" :key="index" :style="{ backgroundImage: 'url(' + item.image + ')' }")
          h2.mb-4 {{ item.title }}
          h3.mb-3 {{ item.subtitle }}
          p.text {{ item.text }}
        .swiper-pagination(slot='pagination')
        .swiper-button-prev(slot='button-prev')
        .swiper-button-next(slot='button-next')
    footer.bg-primary.text-light.text-center.p-5
      p Reference:
      ul.list-unstyled
        li
          a.text-info(href='https://github.com/surmon-china/vue-awesome-swiper') vue-awesome-swiper
        li
          a.text-info(href='https://github.com/surmon-china/surmon-china.github.io/blob/source/projects/vue-awesome-swiper/examples/20-infinite-loop.vue') 20-infinite-loop
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
      banner: [
        {
          image: 'https://images.unsplash.com/photo-1515339760107-1952b7a08454?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80',
          title: 'Slide 1',
          subtitle: 'Subtitle',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam consequuntur cum eius error, est ex in inventore maxime mollitia necessitatibus nihil numquam odio, officia quos ratione reprehenderit unde ut.',
        },
        {
          image: 'https://images.unsplash.com/photo-1496167117681-944f702be1f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2389&q=80',
          title: 'Slide 2',
          subtitle: 'Subtitle',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam consequuntur cum eius error, est ex in inventore maxime mollitia necessitatibus nihil numquam odio, officia quos ratione reprehenderit unde ut.',
        },
        {
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80',
          title: 'Slide 3',
          subtitle: 'Subtitle',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam consequuntur cum eius error, est ex in inventore maxime mollitia necessitatibus nihil numquam odio, officia quos ratione reprehenderit unde ut.',
        }
      ],
      swiperOption: {
        slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
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
.swiper {
  height: 460px;
  width: 100%;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-size: cover;
    background-position: center;

    .text {
      max-width: 460px;
    }
  }
}
</style>
