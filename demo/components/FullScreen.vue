<style>
  .swipe-fullscreen,
  .swipe-fullscreen > .swipe-wrap,
  .swipe-fullscreen > .swipe-wrap > .swipe-item {
    width: 100%;
    height: 100%;
  }

  .swipe-fullscreen .swipe-wrap > .swipe-item {
    display: block;
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
</style>
<template>
  <div style="height: 100%;">
    <back-button></back-button>
    <Slides class="swipe-fullscreen"
           :initialSlide="0"
           :speed="300"
           :autoplay="4000"
           :loop="true"
           @onSlideChangeEnd="onSlideChangeEndHandler"
           @onTransitionEnd="onTransitionEndhandler">
      <Slide style="background: #EA5A49;"></Slide>
      <Slide style="background: #44CC00;"></Slide>
      <Slide style="background: #FFBD17;"></Slide>
    </Slides>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods:{
      onSlideChangeEndHandler (index, slide) {
        console.log('slide changes')
      },
      onTransitionEndhandler (index, slide) {
        console.log('slide transition ends')
      }
    }
  }
</script>
