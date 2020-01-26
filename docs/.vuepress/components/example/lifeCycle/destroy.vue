<template>
  <div class="destroy__container">
    <el-gmap class="g-map" v-if="!isDestroy" />
    <button
      type="button"
      :class="`destroy__button el-button el-button--${isDestroy ? 'default' : 'danger'}`"
      @click="_ => this.isDestroy = !this.isDestroy"
    >
      {{ isDestroy ? '创建' : '销毁'}}
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isDestroy: false
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
.destroy {
  &__container {
    height: 300px;
    background-color: antiquewhite;
    position: relative;
  }
  &__button {
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 2;
  }
}
</style>
