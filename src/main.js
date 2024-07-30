import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

// 从 route.js 导出路由数据
import router from "./route.js";

import 'nprogress/nprogress.css';
import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css';

const app = createApp(App);
// 使用路由
app.use(router);
app.use(elementPlus);
app.use(ArcoVue);
app.mount('#app');