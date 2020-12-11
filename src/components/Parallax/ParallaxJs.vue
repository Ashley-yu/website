<template lang="pug">
  .container-fluid.p-0
    section.layer-container
      ul.list-unstyled.p-0.m-0.layer-inner#scene(
        data-hover-only="true"
        data-scalar-y="0"
      )
        li.layer(data-depth='0.00')
          img.img-fluid(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg')
        li.layer(data-depth='0.20')
          img.img-fluid.image-bottom(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png')
        li.layer(data-depth='0.00')
          img.img-fluid.image-bottom(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png')
        li.layer.layer-4(data-depth='0.60')
          img.img-fluid.image-bottom(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png')
        li.layer(data-depth='0.00')
          img.img-fluid.image-bottom(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png')
        li.layer(data-depth='0.00')
          img.img-fluid.image-bottom(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png')
    section.text-white.article
      .container
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
          a.text-info(href='https://github.com/wagerfield/parallax') parallax.js
        li
          a.text-info(href='https://blog.csdn.net/github_36534129/article/details/72673585') 前端一些可爱的小插件之Parallax.js &jqueryCountup.js
        li
          a.text-info(href='http://www.alloyteam.com/2015/09/use-parallax-js-to-implement-simple-parallax-effect/') 使用 Parallax.js 实现简单视差效果
        li
          a.text-info(href='https://pcxiaobai.com/resource/frontresource/20200213/901.html') 轻量级的的视差引擎Parallax.js
</template>

<script>
import Parallax from 'parallax-js';
export default {
  name: "Parallax",
  data() {
    return {
      parallaxInstance: '',
    }
  },
  mounted() {
    //初始化parallax 插件
    let scene = document.getElementById('scene');
    this.parallaxInstance = new Parallax(scene);
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/utils/mixin";

.image-bottom {
  position: absolute;
  right: 0;
  bottom: 0;
}

.layer-container, .layer-inner, .layer {
  min-height: 105%;
}

.layer {
  width: 100%;
}

.layer-4 img {
  @include screen-md() {
    height: 70%;
  }

  @include screen-sm() {
    height: 50%;
  }
}

.article {
  background-color: #130d0a;
}
</style>
