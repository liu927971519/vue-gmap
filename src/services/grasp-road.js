import { lazyAMapApiLoaderInstance } from '../services/injected-amap-api-instance'

export default class GraspRoad {
  constructor(originPath) {
    this.originPath = originPath
  }
  driving() {
    const self = this
    return new Promise((resolve, reject) => {
      lazyAMapApiLoaderInstance.load().then(_ => {
        AMap.plugin('AMap.GraspRoad', function() {
          const grasp = new AMap.GraspRoad()
          grasp.driving(self.originPath, function(error, result) {
            if (!error) {
              resolve(result.data)
            }
            reject(error)
          })
        })
      })
    })
  }
}
