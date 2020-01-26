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
  import Driving from '../../../../../src/services/driving'
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
        pathPoints: [],
        wayPoints: [
          {
            lat: 39.865042,
            lng: 116.379028
          },
          {
            lat: 39.903719,
            lng: 116.427281
          }]
      }
    },
    mounted() {
      this.drawPath()
    },
    methods: {
      async drawPath() {
        const driving = new Driving()
        const result = await driving.search([116.379028, 39.865042], [116.427281, 39.903719], { waypoints: [[115.379028, 39.865042], [116.427281, 39.903719]] })
        const steps = result.routes[0].steps
        let path = []
        steps.forEach(item => {
          path = [...path, ...item.path.map(row => {
            return [row.lng, row.lat]
          })]
        })
        this.pathPoints = [{
          name: '规划线路',
          path
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
  .grasp {
    &__container {
      height: 400px;
      position: relative;
    }
  }
</style>
