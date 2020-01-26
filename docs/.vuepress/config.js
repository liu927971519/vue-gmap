const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: '../../vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'vue-gmap',
      description: '基于 vue 、高德地图 JS API 和 UI 组件库的地图组件库'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: '@vuepress/vue',
  themeConfig: {
    repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: 'packages/docs/docs',
    // #697 Provided by the official algolia team.
    algolia: ctx.isProd ? ({
      apiKey: '3a539aab83105f01761a137c61004d85',
      indexName: 'vuepress'
    }) : null,
    smoothScroll: true,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/guide/': getGuideSidebar('指南', '深入'),
          '/example/': getExampleSidebar(),
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>'
    }],
    ['flowchart']
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js'
  ]
})

// function getApiSidebar () {
//   return [
//     'cli',
//     'node'
//   ]
// }
//
function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [

      ]
    }
  ]
}

const officalExample = fs
  .readdirSync(path.resolve(__dirname, '../example'))
  .filter(filename => filename !== 'README.md')
  .map(filename => filename.slice(0, -3))
  .sort()

function getExampleSidebar() {
  return [
    {
      title: '示例',
      collapsable: false,
      children: officalExample
    }
  ]
}
//
// const officalPlugins = fs
//   .readdirSync(path.resolve(__dirname, '../plugin/official'))
//   .map(filename => 'official/' + filename.slice(0, -3))
//   .sort()
//
// function getPluginSidebar (pluginTitle, pluginIntro, officialPluginTitle) {
//   return [
//     {
//       title: pluginTitle,
//       collapsable: false,
//       children: [
//         ['', pluginIntro],
//         'using-a-plugin',
//         'writing-a-plugin',
//         'life-cycle',
//         'option-api',
//         'context-api'
//       ]
//     },
//     {
//       title: officialPluginTitle,
//       collapsable: false,
//       children: officalPlugins
//     }
//   ]
// }
//
// function getThemeSidebar (groupA, introductionA) {
//   return [
//     {
//       title: groupA,
//       collapsable: false,
//       sidebarDepth: 2,
//       children: [
//         ['', introductionA],
//         'using-a-theme',
//         'writing-a-theme',
//         'option-api',
//         'default-theme-config',
//         'inheritance'
//       ]
//     }
//   ]
// }
