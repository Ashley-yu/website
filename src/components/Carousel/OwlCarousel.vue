<template lang="pug">
  .container-fluid.p-0
    section
      carousel(:autoplay="false" :nav="false" :dots="true").position-relative
        // Custom prev and next buttons
        template(v-slot:prev='')
          span.position-absolute.btn.btn-light.border-0.py-6.px-3.prev <
        img(src='https://placeimg.com/200/200/any?1')
        img(src='https://placeimg.com/200/200/any?2')
        img(src='https://placeimg.com/200/200/any?3')
        img(src='https://placeimg.com/200/200/any?4')
        img(src='https://placeimg.com/200/200/any?5')
        img(src='https://placeimg.com/200/200/any?6')
        img(src='https://placeimg.com/200/200/any?7')
        img(src='https://placeimg.com/200/200/any?8')
        img(src='https://placeimg.com/200/200/any?9')
        template(v-slot:next='')
          span.position-absolute.btn.btn-light.border-0.py-6.px-3.next >
    footer.bg-primary.text-light.text-center.p-5
      p Reference:
      ul.list-unstyled
        li
          a.text-info(href='https://github.com/s950329/vue-owl-carousel') vue-owl-carousel
        li
          a.text-info(href='https://owlcarousel2.github.io/OwlCarousel2/') Owl Carousel 2
        li
          a.text-info(href='https://codepen.io/velrke/pen/jjdgBO') Owl Carousel owl slider
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: "OwlCarousel",
  components: {
    carousel
  },
}
</script>

<style scoped lang="scss">
.prev, .next {
  top: calc(50%);
  transform: translateY(-50%);
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
}

.prev {
  left: 0;
}
.next {
  right: 0;
}
</style>
