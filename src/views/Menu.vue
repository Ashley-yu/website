<template lang="pug">
  .container.py-3
    .row
      .col-md-3
        .list-group
          a.list-group-item.list-group-item-action.active(href='#' aria-current='true')
            | Parallax Example
          router-link.list-group-item.list-group-item-action(to='/parallax/multiLayered')
            | Multi-Layered
          router-link.list-group-item.list-group-item-action(to='/parallax/parallaxJs')
            | Parallax Js
          //router-link.list-group-item.list-group-item-action(to='/parallax/parallaxScrolling')
            | Parallax Scrolling
          router-link.list-group-item.list-group-item-action(to='/parallax/parallaxSwiper')
            | Parallax + Swiper
          router-link.list-group-item.list-group-item-action(to='/parallax/laxJs')
            | Lax Js
      .col-md-3
        .list-group
          a.list-group-item.list-group-item-action.active(href='#' aria-current='true')
            | Carousel Example
          router-link.list-group-item.list-group-item-action(to='/carousel/swiperParallaxBackground')
            | Swiper Parallax Background
          router-link.list-group-item.list-group-item-action(to='/carousel/swiperInfiniteLoop')
            | Swiper Infinite Loop
          router-link.list-group-item.list-group-item-action(to='/carousel/owlCarousel')
            | Owl Carousel
      .col-md-3
        .list-group
          a.list-group-item.list-group-item-action.active(href='#' aria-current='true')
            | Scrolling Effect Example
          router-link.list-group-item.list-group-item-action(to='/Scrolling/aos')
            | AOS
</template>

<script>
export default {
  name: "Parallax"
}
</script>

<style scoped>

</style>
