<template>
  <div class="complete__container">
    <el-gmap class="g-map">
      <el-gmap-info
        :visible="visible"
        :containerTemplate="containerTemplate"
        :infoTitleTemplate="infoTitleTemplate"
        :infoBodyTemplate="infoBodyTemplate"
        :tplData="tplData"
      >

      </el-gmap-info>
    </el-gmap>
    <el-button @click="_ => visible = !visible">显示</el-button>
    <el-button @click="get">显示</el-button>
  </div>
</template>

<script>
  import { containerTemplate, infoTitleTemplate, infoBodyTemplate } from './tpl/infoWindowTpl'
  export default {
    name: 'base',
    data() {
      return {
        visible: false,
        containerTemplate,
        infoTitleTemplate,
        infoBodyTemplate,
        tplData: {
          driverName: '1111111111111',
          driverMobile: '11111111',
          plateNum: '11'
        }
      }
    },
    methods: {
      get() {
        this.tplData = {
          driverName: 'eeeeeeeeeeeeee',
            driverMobile: '11111111',
            plateNum: '11'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./tpl/infoWindow";
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
