<template>
  <header class="ek-header" :style="styles">
    <div class="ek-header-content" :style="{color: styles.color}">
      <i class="iconfont icon-arrow_left" :style="{color: styles.color}" @click="handleClick"/>
      <slot>{{title}}</slot>
      <div class="ek-header-action">
        <slot name="action"></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String | Array
    },
    styles: {
      type: Object
    }
  },
  methods: {
    handleClick () {
      this.goBack()
    }
  }
}
</script>

<style lang="scss" scoped>
  .ek-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: $head-height;
    line-height: $head-height;
    z-index: 99;
    &-content {
      @include font-dpr(18px);
      display: flex;
      align-items: center;
      justify-content: center;
      height: $nav-height;
      color: #ffffff;
      .icon-arrow_left {
        @include font-dpr(20px);
        position: absolute;
        top: 50%;
        left: px2rem(16px);
        transform: translateY(-50%);
        font-weight: bold;
        color: #ffffff;
      }
    }
    &-action {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: px2rem(16px);
    }
  }
</style>
