<template>
  <div style="height: 100%;">
    <back-button></back-button>
    <Slides class="container">
      <Slide>
        <h1>1</h1>
      </Slide>
      <Slide>
        <h1>2</h1>
      </Slide>
      <Slide>
        <div class="scroll-wrap">
          <div class="scroll">
            <p v-for="(item, index) in list" v-text="index"></p>
          </div>
        </div>
      </Slide>
    </Slides>
  </div>
</template>
<style>
  .container,
  .swipe-wrap,
  .swipe-item {
    width: 100%;
    height: 100%;
  }

  .swipe-item h1 {
    margin-top: 50px;
  }

  .scroll-wrap {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .scroll {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    width: auto;
    height: auto;
    -webkit-overflow-scrolling: touch;
    background: #eee;
    text-align: center;
  }
</style>
<script>
  export default {
    data () {
      return {
        list: []
      }
    },

    mounted () {
      this.list = new Array(100)
    }
  }
</script>
