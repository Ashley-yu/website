<template lang="pug">
  .container-fluid.p-0
    section
      carousel(:autoplay="true")
        img(src='https://placeimg.com/200/200/any?1')
        img(src='https://placeimg.com/200/200/any?2')
        img(src='https://placeimg.com/200/200/any?3')
        img(src='https://placeimg.com/200/200/any?4')
        img(src='https://placeimg.com/200/200/any?5')
        img(src='https://placeimg.com/200/200/any?6')
        img(src='https://placeimg.com/200/200/any?7')
        img(src='https://placeimg.com/200/200/any?8')
        img(src='https://placeimg.com/200/200/any?9')
    footer.bg-primary.text-light.text-center.p-5
      p Reference:
      ul.list-unstyled
        li
          a.text-info(href='https://github.com/s950329/vue-owl-carousel') vue-owl-carousel
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

<style scoped>

</style>
