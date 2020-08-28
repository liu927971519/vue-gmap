<template>
  <el-gmap class="g-map">
    <el-gmap-simple-marker
      :points="pathPoints"
    />
  </el-gmap>
</template>

<script>
  export default {
    name: 'simpleMarker',
    data() {
      return {
        pathPoints: [{
          iconStyle: {
            src: 'https://portrait.gitee.com/uploads/avatars/user/1630/4892916_liulijian2019_1578976567.png',
            style: {
              width:'30px'
            }
          },
          label: {
            // ffset: new AMap.Pixel(20, 20),  //设置文本标注偏移量
            content: "<div class='info'>我是 marker 的 label 标签</div>", //设置文本标注内容
            direction: 'top' //设置文本标注方位
          },
          position: [116.405285, 39.904989]
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
  .g-map {
    height: 600px;
    position: relative;

  }
</style>

<style>
  .amap-marker-label {
    border: 0;
    background-color: transparent;
  }
  .info{
    background: #FFF;
    box-shadow: 2px 2px 6px #eaecef;
    border-radius: 4px;
    padding: 8px;
  }
</style>
