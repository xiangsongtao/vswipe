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
    name: 'Slides',
    props: {
      initialSlide: {type: Number, default: 0},
      speed: {type: Number, default: 400},
      autoplay: {type: Number, default: 3000},
      loop: {type: Boolean, default: false},
      touchMoveStopPropagation: {type: Boolean, default: false}
    },

    data () {
      return {
        init: false,
        timer: null,
        slides: [],
        swipe: null, // swipe-js-iso 实例
        swiper: null // 模拟 Swiper 部分
      }
    },
    methods: {
      initSlides () {
        const _this = this
        this.timer && window.clearTimeout(this.timer)
        this.timer = window.setTimeout(() => {
          console.log('initSlides')
          if (!this.init) {
            this.swipe = new Swipe(this.$el, {
              startSlide: this.initialSlide,
              speed: this.speed,
              auto: this.autoplay,
              continuous: this.loop,
              disableScroll: false,
              stopPropagation: this.touchMoveStopPropagation,
              swiping (progress) {
                _this.$emit('onProgress', _this.swiper, progress)
              },
              callback (index, elem) {
                _this.swiper.activeIndex = index
                _this.$emit('onSlideChangeEnd', _this.swiper)
              },
              transitionEnd (index, elem) {
                _this.swiper.activeIndex = index
                _this.$emit('onTransitionEnd', _this.swiper)
              }
            })
            this.swiper = {
              activeIndex: 0,
              slides: (() => { return this.$children.length })(),
              slidePrev (runCallbacks, speed) {
                console.info('The params of `runCallbacks` and `speed` are not used in slidePrev()')
                _this.swipe.prev()
              },
              slideNext (runCallbacks, speed) {
                console.info('The params of `runCallbacks` and `speed` are not used in slideNext()')
                _this.swipe.next()
              },
              slideTo (index, duration, runCallbacks) {
                console.info('The params of `runCallbacks` are not used in slideTo()')
                _this.swipe.slide(index, duration)
              },
              update () {
                _this.$nextTick(() => {
                  _this.swiper.slides = _this.$children.length
                  _this.swipe.setup()
                })
              },
              stopAutoplay () {
                _this.swipe.stop()
              },
              destroy () {
                _this.swipe.kill()
              }
            }
            this.init = true
          } else {
            this.swiper.update()
          }
        }, 0)
      }
    },
    destroyed () {
      this.swiper.destroy()
    }
  }
</script>
