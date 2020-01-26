import { lazyAMapApiLoaderInstance } from '../services/injected-amap-api-instance'

export default class Driving {
  search(...params) {
    return new Promise((resolve, reject) => {
      lazyAMapApiLoaderInstance.load().then(_ => {
        AMap.plugin('AMap.Driving', function() {
          const driving = new AMap.Driving()
          driving.search(...params, function(status, result) {
            if (status === 'complete') {
              resolve(result)
            }
            reject(status)
          })
        })
      })
    })
  }
}
