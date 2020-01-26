<script>
import { extend } from '../utils/extension-helper'
import register from '../mixins/register'

export default {
  name: 'ElGmapPoint',
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
    groupStyleFun: {
      type: Function,
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
      PointSimplifier: null,
      pointSimplifierIns: null
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
      this.loadPointSimplifier()
    },
    loadPointSimplifier() {
      window.AMapUI.loadUI(['misc/PointSimplifier'], PointSimplifier => {
        this.PointSimplifier = PointSimplifier
        this.initPointSimplifier(PointSimplifier)
        if (Array.isArray(this.points) && this.points.length > 0) {
          this.setPointData(this.points)
        }
      })
    },
    initPointSimplifier(PointSimplifier) {
      const vThis = this
      const groupStyleMap = this.getGroupStyle(PointSimplifier, this.onIconLoad, this.onIconError)
      this.pointSimplifierIns = new PointSimplifier(extend(true, {
        map: vThis.$amap, // 所属的地图实例
        zIndex: 100,
        getPosition: function(item) {
          return item.lngLatLine
        },
        getHoverTitle() {
          return null
        },
        // 使用GroupStyleRender
        renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
        renderOptions: {
          getGroupId: function(item) {
            return item.groupId
          },
          groupStyleOptions: function(groupId) {
            return groupStyleMap[groupId]
          }
        }
      }, this.config))
      this.bindEvent()
    },
    setPointData(data) {
      if (this.pointSimplifierIns && Array.isArray(data)) {
        this.pointSimplifierIns.setData(data)
      }
    },
    onIconLoad() {
      this.pointSimplifierIns.renderLater()
    },
    onIconError(e) {
      console.log(e)
    },
    getGroupStyle(PointSimplifier, onIconLoad, onIconError) {
      return this.groupStyleFun(PointSimplifier, onIconLoad, onIconError)
    },
    bindEvent() {
      Object.keys(this.events).forEach(eventName => {
        this.pointSimplifierIns.on(eventName, this.events[eventName])
      })
    }
  },
  render(h) {
    return (h)
  }
}
</script>

<style scoped>

</style>
