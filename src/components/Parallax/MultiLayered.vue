<template lang="pug">
  .container-fluid.p-0
    section.layer-container
      .layer-bg.layer(data-depth='0.10' data-type='parallax')
      .layer-1.layer(data-depth='0.20' data-type='parallax')
      .layer-2.layer(data-depth='0.50' data-type='parallax')
      .layer-3.layer(data-depth='0.80' data-type='parallax')
      .layer-overlay.layer(data-depth='0.85' data-type='parallax')
      .layer-4.layer(data-depth='1.00' data-type='parallax')
    section.layer-mobile
    section.text-white.article
      .row.p-5
        .col-sm-6
          h1.h3 You cannot hide the soul. Through all his unearthly tattooings, I thought I saw the traces of a simple honest heart.
      .row.p-5
        .col-md-6
          p And besides all this, there was a certain lofty bearing about the Pagan, which even his uncouthness could not altogether maim. He looked like a man who had never cringed and never had had a creditor. Whether it was, too, that his head being shaved, his forehead was drawn out in freer and brighter relief, and looked more expansive than it otherwise would, this I will not venture to decide; but certain it was his head was phrenologically an excellent one.
          br
          p It may seem ridiculous, but it reminded me of General Washington&apos;s head, as seen in the popular busts of him. It had the same long regularly graded retreating slope from above the brows, which were likewise very projecting, like two long promontories thickly wooded on top. Queequeg was George Washington cannibalistically developed.
          br
          p Whilst I was thus closely scanning him, half-pretending meanwhile to be looking out at the storm from the casement, he never heeded my presence, never troubled himself with so much as a single glance; but appeared wholly occupied with counting the pages of the marvellous book. Considering how sociably we had been sleeping together the night previous, and especially considering the affectionate arm I had found thrown over me upon waking in the morning, I thought this indifference of his very strange. But savages are strange beings; at times you do not know exactly how to take them.
        .col-md-6
          p At first they are overawing; their calm self-collectedness of simplicity seems a Socratic wisdom. I had noticed also that Queequeg never consorted at all, or but very little, with the other seamen in the inn. He made no advances whatever; appeared to have no desire to enlarge the circle of his acquaintances. All this struck me as mighty singular; yet, upon second thoughts, there was something almost sublime in it. Here was a man some twenty thousand miles from home, by the way of Cape Horn, that is&mdash;which was the only way he could get there&mdash;thrown among people as strange to him as though he were in the planet Jupiter; and yet he seemed entirely at his ease; preserving the utmost serenity; content with his own companionship; always equal to himself.
          br
          p Here was a man some twenty thousand miles from home, by the way of Cape Horn, that is&mdash;which was the only way he could get there&mdash;thrown among people as strange to him as though he were in the planet Jupiter; and yet he seemed entirely at his ease; preserving the utmost serenity; content with his own companionship; always equal to himself. Surely this was a touch of fine philosophy; though no doubt he had never heard there was such a thing as that.
          a.text-info(href='https://medium.com/@PatrykZabielski/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27')
            | Learn how to create this parallax effect
    footer.bg-primary.text-light.text-center.p-5
      p Reference:
      ul.list-unstyled
        li
          a.text-info(href='https://codepen.io/zabielski/pen/MyoBaY') layered Parallax Illustration
</template>

<script>
export default {
  name: "MultiLayered",
  created() {
    window.addEventListener('scroll', function () {
      let movement, translate3d;
      let topDistance = this.pageYOffset;
      let layers = document.querySelectorAll("[data-type='parallax']");

      layers.forEach(item => {
        movement = -(topDistance * (item.getAttribute('data-depth')));
        translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        item.style['-webkit-transform'] = translate3d;
        item.style['-moz-transform'] = translate3d;
        item.style['-ms-transform'] = translate3d;
        item.style['-o-transform'] = translate3d;
        item.style.transform = translate3d;
      })
    });
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/utils/mixin";

.container-fluid {
  overflow: hidden;
  position: relative;
}

.layer {
  background-position: bottom center;
  background-size: auto;
  background-repeat: no-repeat;
  width: 100%;
  position: fixed;
  z-index: -1;
}

.layer-container, .layer {
  min-height: 800px;
}

.layer-bg {
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg');
}
.layer-1 {
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png');
  background-position: left bottom;
}
.layer-2 {
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png');
}
.layer-3 {
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png');
  background-position: right bottom;
}
.layer-4 {
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png');
}
.layer-overlay {
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png');
}

.layer-mobile {
  display: none;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/full_illustration.png") no-repeat center bottom / cover;
  height: 320px;
}

.article {
  background-color: #130d0a;
}

@include screen-sm() {
  .layer-container {
    display: none;
  }
  .layer-mobile {
    display: block;
  }
}
</style>
