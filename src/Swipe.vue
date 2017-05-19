<style>
    [vswipe] {
        overflow: hidden;
        visibility: hidden;
        position: relative;
    }

    .swipe-wrap {
        overflow: hidden;
        position: relative;
    }
</style>
<template>
    <div vswipe>
        <div class='swipe-wrap'>
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
  import Swipe from 'swipe-js-iso'
  export default {
    props: {
      initialSlide: {type: Number, default: 0},
      speed: {type: Number, default: 400},
      autoplay: {type: Number, default: 3000},
      loop: {type: Boolean, default: false},
      touchMoveStopPropagation: {type: Boolean, default: false}
    },

    data () {
      return {
        swipe: null,
        // 模拟部分
        swiper: {
          activeIndex: 0,
          slides: [],
          slidePrev (runCallbacks, speed) {
            console.info('The params of `runCallbacks` and `speed` are not used in slidePrev()')
            this.swipe.prev()
          },
          slideNext (runCallbacks, speed) {
            console.info('The params of `runCallbacks` and `speed` are not used in slideNext()')
            this.swipe.next()
          },
          slideTo (index, duration, runCallbacks) {
            console.info('The params of `runCallbacks` are not used in slideTo()')
            this.swipe.slide(index, duration)
          },
          update () {
            this.swipe.setup()
          },
          stopAutoplay () {
            this.swipe.stop()
          },
          destroy () {
            this.swipe.kill()
          }
        }
      }
    },
    mounted () {
      this.swipe = new Swipe(this.$el, {
        startSlide: this.initialSlide,
        speed: this.speed,
        auto: this.autoplay,
        continuous: this.loop,
        disableScroll: false,
        stopPropagation: this.touchMoveStopPropagation,
        swiping (progress) {
          this.$emit('onProgress', this.swiper, progress)
        },
        callback (index, elem) {
          this.swiper.activeIndex = index
          this.$emit('onSlideChangeEnd', this.swiper)
        },
        transitionEnd (index, elem) {
          this.swiper.activeIndex = index
          this.$emit('onTransitionEnd', this.swiper)
        }
      })
    },
    destroyed () {
      this.swipe.kill()
    },
    methods: {}
  }
</script>
