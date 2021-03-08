/*
 * @Descripttion:
 * @version:
 * @Author: wanghongkui
 * @Date: 2021-03-01 15:44:07
 * @LastEditTime: 2021-03-04 16:41:04
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false;

const appOptions = {
  render: (h) => h(App),
  router, // 路由
  store // vuex
};
console.log(window.singleSpaNavigate);
// 判断是微前端加载还是独立运行
if (!window.singleSpaNavigate) {
  new Vue(appOptions).$mount('#app');
}
const vueLifecycles = singleSpaVue({
  Vue, //(必传项) 主Vue对象, 通常暴露在window对象上，或通过require('vue') import Vue from 'vue'获得
  appOptions
});

// single-spa 生命周期函数
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
