<style>
    .swipe-item {
        float: left;
        width: 100%;
        position: relative;
    }
</style>
<template>
    <div class="swipe-item">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Slide',
    mounted () {
      if (this.$parent.$options._componentTag.toLowerCase() === 'slides') {
        this.$parent.initSlides()
      }
    }
  }
</script>
