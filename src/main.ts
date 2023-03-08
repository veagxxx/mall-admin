import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import 'element-plus/dist/index.css'
import "@/assets/styles/index.scss"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// Message 消息弹框样式
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'
// 封装svgicon
import 'virtual:svg-icons-register';
import SvgIcon from '@/components/svg-icon/index.vue';
// pinia
import { createPinia } from 'pinia'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('SvgIcon', SvgIcon)
app.use(router).use(createPinia()).mount('#app')

