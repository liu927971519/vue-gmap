<script>
import register from '../mixins/register'

export default {
  name: 'ElGmapSimpleMarker',
  mixins: [register],
  props: {
    points: {
      type: Array,
      default: _ => {
        return []
      }
    }
  },
  data() {
    return {
      SimpleMarker: null,
      SimpleMarkerIns: []
    }
  },
  watch: {
    points(value) {
      this.setSimpleMarker(value)
    }
  },
  methods: {
    init() {
      this.loadSimpleMarker()
    },
    loadSimpleMarker() {
      window.AMapUI.loadUI(['overlay/SimpleMarker'], SimpleMarker => {
        this.SimpleMarker = SimpleMarker
        if (Array.isArray(this.points) && this.points.length > 0) {
          this.setSimpleMarker(this.points)
        }
      })
    },
    setSimpleMarker(data) {
      this.clearMarker()
      if (this.SimpleMarker && Array.isArray(data)) {
        data.forEach(item => {
          const marker = new this.SimpleMarker({
            map: this.$amap,
            ...item
          })
          this.SimpleMarkerIns.push(marker)
        })
      }
    },
    clearMarker() {
      if (this.$amap) {
        this.SimpleMarkerIns.forEach(item => {
          this.$amap.remove(item)
        })
        this.SimpleMarkerIns = []
      }
    }
  },
  render(h) {
    return (h)
  }
}
</script>

<style scoped>

</style>
