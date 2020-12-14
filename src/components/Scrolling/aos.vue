<template lang="pug">
  .container-fluid.p-0
    section.vh-100.bg-info.text-white.d-flex.justify-content-center.align-items-center
      h1 SCROLL DOWN
    section.h-100.bg-info.text-white.overflow-hidden
      .container.py-6
        .row
          .col-6
            .w-100.bg-dark.rounded.item(data-aos='fade-up') fade-up
        .row
          .col-6.offset-6
            .w-100.bg-dark.rounded.item(data-aos='fade-down') fade-down
        .row
          .col-6
            .w-100.bg-dark.rounded.item(data-aos='fade-right') fade-right
        .row
          .col-6.offset-6
            .w-100.bg-dark.rounded.item(data-aos='fade-left') fade-left
        .row
          .col-6
            .w-100.bg-dark.rounded.item(data-aos='zoom-in') zoom-in
        .row
          .col-6.offset-6
            .w-100.bg-dark.rounded.item(data-aos='zoom-out') zoom-out
        .row
          .col-6
            .w-100.bg-dark.rounded.item(data-aos='slide-up') slide-up
        .row
          .col-6.offset-6
            .w-100.bg-dark.rounded.item(data-aos='flip-up') flip-up
        .row
          .col-6
            .w-100.bg-dark.rounded.item(data-aos='flip-down') flip-down
        .row
          .col-6.offset-6
            .w-100.bg-dark.rounded.item(data-aos='flip-right') flip-right
        .row
          .col-6
            .w-100.bg-dark.rounded.item(data-aos='flip-left') flip-left
    footer.bg-primary.text-light.text-center.p-5
      p Reference:
      ul.list-unstyled
        li
          a.text-info(href='https://michalsnik.github.io/aos/') AOS
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: "aos",
  created() {
    AOS.init({
      duration: 1200,
    })
  }
}
</script>

<style scoped lang="scss">
.item {
  padding: 50px;
  margin-bottom: 50vh;
}
</style>
