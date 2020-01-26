<template>
  <div class="complete__container">
    <el-gmap class="g-map" :events="events" v-if="isStart" />
    <button
      v-if="!isStart"
      type="button"
      class="complete__button el-button el-button--default"
      @click="_ => this.isStart = true"
    >
      开始创建地图
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isStart: false,
        events: {
          complete: this.completeFun
        }
      }
    },
    methods: {
      completeFun() {
        alert('地图加载完成哦！')
      }
    }
  }
</script>

<style scoped lang="scss">
  .complete {
    &__container {
      height: 300px;
      background-color: antiquewhite;
      position: relative;
    }
    &__button {
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 2;
    }
  }
</style>
