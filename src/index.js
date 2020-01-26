import GMap from './components/gmap.vue'
import GmapPoint from './components/gmap-point.vue'
import GmapPath from './components/gmap-path'
import GmapInfo from './components/gmap-info'
import { initAMapApiLoader } from './services/injected-amap-api-instance'
import Driving from './services/driving'
const components = [GMap, GmapPoint, GmapPath, GmapInfo]

const VueGMap = {
  initAMapApiLoader,
  Driving
}

VueGMap.install = Vue => {
  if (VueGMap.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
}

const install = Vue => {
  if (install.installed) return
  VueGMap.install(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  // 防止高德所需 js 被多次加载，导致地图初始化失败
  const amapKeys = Object.keys(localStorage).filter(key => key.match(/^_AMap_/))
  amapKeys.forEach(key => {
    localStorage.removeItem(key)
  })
}

export {
  initAMapApiLoader,
  install,
  Driving
}

export default VueGMap
