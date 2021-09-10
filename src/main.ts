import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@less/global.less'

createApp(App).use(router).mount('#app')
