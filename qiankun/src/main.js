import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'personTask',
    entry: 'http://172.17.10.217:3001',
    container: '#vue',
    activeRule: '/app-vue',
  },
 
]);
// 启动 qiankun
start({  prefetch: false ,// 可选，关闭预加载
singular: true,});
createApp(App).mount('#app')
