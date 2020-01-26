import VueGMap from '../../src/index'

export default ({ Vue, isServer }) => {
  if (!isServer) {
    import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
      Vue.use(module.default)
    })
    VueGMap.initAMapApiLoader({
      // 高德的key
      key: '55897440ff54932c599cc73b9b4baf1c',
      // 插件集合
      plugin: ['AMap.GraspRoad'],
      // 高德 sdk 版本，默认为 1.4.4
      v: '1.4.15',
      uiVersion: '1.0.11'
    })
    Vue.use(VueGMap)
  }
}
