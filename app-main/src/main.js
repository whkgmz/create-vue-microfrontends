import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { appStart } from './microfrontend';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

// Single-spa启动方法在此处调用，是因为我们项目一般需要前置条件才会容许项目挂载 挂载应用

/// e.g
// async function login() {
//   await 相关接口请求
//   appStart();
// }
appStart();
