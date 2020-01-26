<template>
  <div class="el-amap__container">
    <div class="el-amap__content" />
    <slot />
  </div>
</template>

<script>
import guid from '../utils/guid'
import CONST from '../utils/constant'
import { lazyAMapApiLoaderInstance } from '../services/injected-amap-api-instance'

export default {
  name: 'ElGmap',
  props: {
    mapOptions: {
      type: Object,
      default: _ => {
        return {}
      }
    },
    events: {
      type: Object,
      default: _ => {
        return {}
      }
    }
  },
  data() {
    return {
      $amap: null
    }
  },
  beforeCreate() {
    this._loadPromise = lazyAMapApiLoaderInstance.load()
  },
  mounted() {
    this.createMap()
  },
  destroyed() {
    this.destroyMap()
  },
  methods: {
    createMap() {
      this._loadPromise.then(() => {
        const mapElement = this.$el.querySelector('.el-amap__content')
        const elementID = this.vid || guid()
        mapElement.id = elementID
        this.$amap = this.$amapComponent = new AMap.Map(elementID, this.mapOptions)
        this.$emit(CONST.AMAP_READY_EVENT, this.$amap)
        this.$children.forEach(component => {
          component.$emit(CONST.AMAP_READY_EVENT, this.$amap)
        })
        this.bindEvent()
      })
    },
    bindEvent() {
      Object.keys(this.events).forEach(eventName => {
        this.$amap.on(eventName, this.events[eventName])
      })
    },
    destroyMap() {
      this.$amap & this.$amap.destroy()
    }
  }
}
</script>

<style scoped lang="scss">
  .el-amap {
    &__container {
      height: 100%;
    }
    &__content {
      height: 100%;
    }
  }
  /deep/.amap-logo, /deep/.amap-copyright {
    z-index: 1;
  }
</style>
