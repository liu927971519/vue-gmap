<script>
import register from '../mixins/register'
import { extend } from '../utils/extension-helper'

export default {
  name: 'ElGmapInfo',
  mixins: [register],
  props: {
    containerTemplate: {
      type: String,
      default: ''
    },
    config: {
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
    },
    tplData: {
      type: Object,
      default: _ => {
        return {}
      }
    },
    position: {
      type: Array,
      default: _ => {
        return []
      }
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      SimpleInfoWindow: null,
      infoSimplifierIns: null
    }
  },
  watch: {
    tplData: {
      handler(value) {
        this.setInfoTplData(value)
      }
    },
    position: {
      handler(value) {
        this.setPosition(value)
      }
    },
    visible: {
      handler(value) {
        value ? this.open() : this.close()
      },
      immediate: true
    }
  },
  mounted() {
  },
  methods: {
    init() {
      this.loadInfoSimplifier()
    },
    loadInfoSimplifier() {
      if (this.containerTemplate) {
        // 覆盖默认的信息弹窗 dom 结构
        window.AMapUI.defineTpl('ui/overlay/SimpleInfoWindow/tpl/container.html', [], _ => {
          return this.containerTemplate
        })
      }
      window.AMapUI.loadUI(['overlay/SimpleInfoWindow'], SimpleInfoWindow => {
        this.SimpleInfoWindow = SimpleInfoWindow
        this.initInfoSimplifier(SimpleInfoWindow)
      })
    },
    initInfoSimplifier(SimpleInfoWindow) {
      this.infoSimplifierIns = new SimpleInfoWindow(extend(true, {
        infoTitle: '',
        infoBody: '',
        offset: new AMap.Pixel(0, -5)
      }, this.config))
      this.bindEvent()
    },
    bindEvent() {
      Object.keys(this.events).forEach(eventName => {
        this.pointSimplifierIns.on(eventName, this.events[eventName])
      })
    },
    open() {
      if (this.infoSimplifierIns) {
        const position = this.position.length === 2 ? this.position : this.$amap.getCenter()
        this.infoSimplifierIns.open(this.$amap, position)
      }
    },
    close() {
      if (this.infoSimplifierIns) {
        this.infoSimplifierIns.close()
      }
    },
    setInfoTplData(data) {
      this.infoSimplifierIns.setInfoTplData(data)
      // 应该调用 setInfoTplData 就会更新数据，但没有。使用 setContent 强制更新模板
      this.infoSimplifierIns.setContent(this.infoSimplifierIns._getContainerHtml())
    },
    setPosition(data) {
      this.infoSimplifierIns.setPosition(data)
    }
  },
  render(h) {
    return h
  }
}
</script>

<style scoped>

</style>
