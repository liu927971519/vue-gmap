import CONSTANTS from '../utils/constant'

export default {
  data() {
    return {
      $amap: null
    }
  },

  mounted() {
    this.$on(CONSTANTS.AMAP_READY_EVENT, map => {
      this.$amap = map
      this.init()
    })
  },
  destroyed() {
  },
  methods: {
  }
}
