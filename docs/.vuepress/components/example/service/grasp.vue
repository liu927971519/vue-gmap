<template>
 <div  class="grasp__container">
   <el-gmap class="g-map">
     <el-gmap-path
       :config="pathConfig"
       :points="pathPoints"
     />
   </el-gmap>
 </div>
</template>

<script>
  import GraspRoad from '../../../../../src/services/grasp-road'
  import { originPath } from './data'

  export default {
    data() {
      return {
        pathConfig: {
          renderOptions: {
            pathLineStyle: {
              strokeStyle: '#2BA6EF'
            },
            pathLineHoverStyle: {
              strokeStyle: '#2BA6EF'
            },
            pathLineSelectedStyle: {
              strokeStyle: '#541545'
            }
          }
        },
        pathPoints: []
      }
    },
    mounted() {
      this.drawPath()
    },
    methods: {
      async graspRoad() {
        const path = originPath.map((item, index) => {
          // 搞不懂为什么高德要这么传参
           if (index === 0) {
             return {
               x: item.lng,
               y: item.lat,
               sp: 10,
               ag: 10,
               tm: 1478031031
             }
           }
           return {
             x: item.lng,
             y: item.lat,
             sp: 10,
             ag: 10,
             tm: index + 2
           }
        })
        return await new GraspRoad(path).driving()
      },
      async drawPath() {
        const tempData = await this.graspRoad()
        this.pathPoints = [{
          name: '原轨迹',
          path: originPath.map(item => {
            return [item.lng, item.lat]
          })
        }, {
          name: '纠偏之后轨迹',
          path: tempData.points.map(item => {
            return [item.x, item.y]
          })
        }]
        console.log(this.pathPoints)
      }
    }
  }
</script>

<style scoped lang="scss">
  .grasp {
    &__container {
      height: 600px;
      position: relative;
    }
  }
</style>
