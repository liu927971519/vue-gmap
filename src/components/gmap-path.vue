<script>
import { extend } from '../utils/extension-helper'
import register from '../mixins/register'

export default {
  name: 'ElGmapPath',
  mixins: [register],
  props: {
    config: {
      type: Object,
      default: _ => {
        return {}
      }
    },
    points: {
      type: Array,
      default: _ => {
        return []
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
      PathSimplifier: null,
      pathSimplifierIns: null
    }
  },
  watch: {
    points(value) {
      this.setPointData(value)
    }
  },
  mounted() {
  },
  methods: {
    init() {
      this.loadPathSimplifier()
    },
    loadPathSimplifier() {
      window.AMapUI.loadUI(['misc/PathSimplifier'], PathSimplifier => {
        this.PathSimplifier = PathSimplifier
        this.initPathSimplifier(PathSimplifier)
        if (Array.isArray(this.points) && this.points.length > 0) {
          this.setPointData(this.points)
        }
      })
    },
    initPathSimplifier(PathSimplifier) {
      const vThis = this
      this.pathSimplifierIns = new PathSimplifier(extend(true, {
        map: vThis.$amap, // 所属的地图实例
        zIndex: 10,
        getPath: pathData => {
          return pathData.path
        },
        renderOptions: {
          // 轨迹线的样式
          pathLineStyle: {
            strokeStyle: '#00BFC8',
            borderStyle: '#00BFC8',
            lineWidth: 4,
            dirArrowStyle: false
          }
        }
      }, this.config))
      this.bindEvent()
    },
    setPointData(data) {
      if (this.pathSimplifierIns && Array.isArray(data)) {
        this.pathSimplifierIns.setData(data)
      }
    },
    bindEvent() {
      Object.keys(this.events).forEach(eventName => {
        this.pathSimplifierIns.on(eventName, this.events[eventName])
      })
    }
  },
  render(h) {
    return h
  }
}
</script>

<style scoped>

</style>
