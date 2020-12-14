<template lang="pug">
  .container-fluid.p-0
    section.vh-100.h1.text-white.font-weight-light.bg-secondary.d-flex.justify-content-center.align-items-center
      p.scroll-text Scroll down
    section.text-white.vh-100.animation
      h1.animation-title Animation
      p.h3.font-weight-light.animation-text Check out this nifty little scroll based animation with lax.js
      .square-big
      .square-small
    section.vh-100.bg-dark
    footer.bg-primary.text-light.text-center.p-5
      p Reference:
      ul.list-unstyled
        li
          a.text-info(href='https://github.com/alexfoxy/lax.js') lax.js
        li
          a.text-info(href='https://codesandbox.io/s/laxjs-react-example-nc4h7') lax.js-react-example
        li
          a.text-info(href='https://codepen.io/Heidene/pen/GeaNpG') Lax
</template>

<script>
import lax from "lax.js";

export default {
  name: "LaxJs",
  data() {
    return {
    }
  },
  mounted() {
    // rightToLeft-.1 fadeInOut
    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    lax.addElements(
        ".animation-title",
        {
          scrollY: {
            translateX: [
              ['elInY', 'elCenterY', 'elOutY'],
              [200, 100, 50],
            ],
            opacity: [
              ['elInY', 'elCenterY', 'elOutY-200'],
              [1, 1, 0],
            ],
          }
        },
    );

    lax.addElements(
        ".animation-text",
        {
          scrollY: {
            blur: [
              ['elInY', 'elCenterY', 'elOutY'],
              [0, 1, 2],
            ],
            opacity: [
              ['elInY', 'elCenterY', 'elOutY'],
              [1, 1, 0],
            ],
          }
        },
    );

    lax.addElements(
        ".square-big",
        {
          scrollY: {
            rotate: [
              ['elInY', 'elCenterY', 'elOutY'],
              [0, 180 ,360],
            ],
          }
        },
    );

    lax.addElements(
        ".square-small",
        {
          scrollY: {
            scale: [
              ['elInY', 'elCenterY', 'elOutY'],
              [0, 1 ,0],
            ],
          }
        },
    );
  },
  created() {
    // init lax
    lax.init();
  },
}
</script>

<style scoped lang="scss">
.animation {
  background-color: #1989A6;
  padding: 12em;
  overflow: hidden;
  position: relative;
}

.animation-title {
  position: absolute;
  left: 15%;
  font-size: 10em;
  text-transform: uppercase;
  z-index: 1;
}

.animation-text {
  position: absolute;
  top: 500px;
  width: 30%;
  z-index: 1;
}

.square-big, .square-small {
  position: absolute;
  overflow: hidden;
}

.square-big {
  top: 0;
  left: 20%;
  width: 50vw;
  height: 50vw;
  border: 30px solid #20A2C3;
  transform: rotateZ(65deg);
}

.square-small {
  top: 20%;
  left: 10%;
  width: 15vw;
  height: 15vw;
  border: 30px solid rgba(255, 255, 255, 0.5);
}
</style>
