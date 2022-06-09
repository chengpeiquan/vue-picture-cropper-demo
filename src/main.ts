import { createApp } from 'vue'
import baiduAnalytics from 'vue-baidu-analytics'
import App from '@/App.vue'
import router from '@/router'

// 全局样式
import '@less/global.less'

createApp(App)
  .use(router)
  .use(baiduAnalytics, {
    router,
    siteIdList: ['8dca8e2532df48ea7f1b15c714588691'],
  })
  .mount('#app')
