/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e40f8dc1c8219a01774037f7541cb9c6"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.79540640.css",
    "revision": "6243dc03f762719ce33f7c9954558d47"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.1daaefb7.js",
    "revision": "c137db143914638525f4a273e3e4ef90"
  },
  {
    "url": "assets/js/10.cc8af59c.js",
    "revision": "15de5b825dde42b67bedbb7b63ce151f"
  },
  {
    "url": "assets/js/11.3dbf33fd.js",
    "revision": "e0c7998712b67587a13322ed742732f8"
  },
  {
    "url": "assets/js/12.f4215532.js",
    "revision": "223660efa5e8b72dd732e318411a8f88"
  },
  {
    "url": "assets/js/13.6e85417c.js",
    "revision": "23e2e8bc8f95504718cd358d2db185ba"
  },
  {
    "url": "assets/js/14.7915ae88.js",
    "revision": "1eabb43b8fbb0454a6fbe4e3fbdd7418"
  },
  {
    "url": "assets/js/15.07acb6b6.js",
    "revision": "dbd1f08845baee49d2f8303bce867abc"
  },
  {
    "url": "assets/js/16.993b257b.js",
    "revision": "ac65653e4a0acdc546910123939f2bfe"
  },
  {
    "url": "assets/js/17.0ff98a43.js",
    "revision": "4fad073f5d9ddbe02da73d248d606213"
  },
  {
    "url": "assets/js/18.4813a7a1.js",
    "revision": "38f594a25a93fc6b5c497588dfe95dd5"
  },
  {
    "url": "assets/js/19.1e1041b6.js",
    "revision": "bb8bfe38d32dae569eeeb4d520d83c59"
  },
  {
    "url": "assets/js/20.8d2d827e.js",
    "revision": "eb6ec9762a3f7c5d34c530c520a9273d"
  },
  {
    "url": "assets/js/21.c125d95d.js",
    "revision": "07ccbdd625833832ba0a278602e005ca"
  },
  {
    "url": "assets/js/22.af99a7c3.js",
    "revision": "7b91f2d3b377e25059045f0997a468e0"
  },
  {
    "url": "assets/js/23.020ad152.js",
    "revision": "9c084d61e35b83b9f531937d0bf3a03b"
  },
  {
    "url": "assets/js/24.26d0fd5c.js",
    "revision": "e482963b893d312a56290207bb509b94"
  },
  {
    "url": "assets/js/25.2950317a.js",
    "revision": "7b96951dd7237c949e6eea3dc51432a5"
  },
  {
    "url": "assets/js/26.adacec78.js",
    "revision": "f6543f76de3bec40ef3a51100835dccc"
  },
  {
    "url": "assets/js/27.aa23cdf3.js",
    "revision": "9d46b504e643d566ec919a1d5fbca703"
  },
  {
    "url": "assets/js/5.0cbf4920.js",
    "revision": "8f3cbe2021b69c541614f6c44dd1cd7d"
  },
  {
    "url": "assets/js/6.651a5ab4.js",
    "revision": "940049851ed5833dfd8e11796a62a108"
  },
  {
    "url": "assets/js/7.9e4172b6.js",
    "revision": "ac6da2e5c68bd5ab4b510bc931935ebd"
  },
  {
    "url": "assets/js/8.b807b002.js",
    "revision": "3808422301ec996a5d841bd00c7b5dc1"
  },
  {
    "url": "assets/js/9.df1989dc.js",
    "revision": "47ef6a6c4b79c0543738e6e46705b814"
  },
  {
    "url": "assets/js/app.9babd72c.js",
    "revision": "c61326c94aa0421dc923ec4b91ae7a66"
  },
  {
    "url": "assets/js/vendors~flowchart.962cc153.js",
    "revision": "a01d8c6d6588545f983308cab0a1f3b8"
  },
  {
    "url": "assets/js/vendors~notification.1aaa2715.js",
    "revision": "871e88747e8a280ac374e2608889dcbd"
  },
  {
    "url": "example/index.html",
    "revision": "21b43580c8a991e06cc4334af9be7d27"
  },
  {
    "url": "example/life-cycle.html",
    "revision": "e05d98b2f0e0d19f7c4ea9ecdc8c9689"
  },
  {
    "url": "example/service.html",
    "revision": "d9624a782941d7fa98d77fe794f817df"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1dae36044c514c7a2dcedfa793a357cb"
  },
  {
    "url": "guide/index.html",
    "revision": "17285c44db640b46703e9d3b010caa2f"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "46aa1c07b3c150b61855472d87ae1462"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
