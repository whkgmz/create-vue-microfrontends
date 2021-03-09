/*
 * @Descripttion:
 * @version:
 * @Author: wanghongkui
 * @Date: 2021-03-02 18:13:53
 * @LastEditTime: 2021-03-09 17:55:34
 */
import { registerApplication, start } from 'single-spa';

///// 文件的相关路径需要替换成自己项目实际路径
/**
 *
 * 获取子项目app.js文件
 */
function getApplication(path) {
  return window.System.import(`${path}?time=${new Date().getTime()}`).then((res) => {
    if (res.default) {
      return window.System.import(res.default['app.js']).then((ret) => ret.default);
    }
  });
}
/**
 * name: 第一个参数表示应用名称，name必须是string类型
 *
 * app:  加载函数  可以是一个Promise类型的 加载函数，返回的Promise resolve之后的结果必须是一个可以被解析的应用，
 * 这个应用其实是一个包含single-spa各个生命周期函数 的对象(e.g: vue打包 引入后的app.js)。
 *
 * activeWhen: 激活函数 一个纯函数  window.loaction作为第一个参数被调用，只有函数返回的值为true时，应用才会被激活。
 * 通常情况下，activity function会根据 window.location 的path来决定是否需要被激活(我就是这样玩的)
 *
 * single-spa根据顶级路由查找应用，而每个应用会处理自身的子路由。以下场景，single-spa会调用应用的activity funtion
 * 1.hashchange or popstate 事件触发时(vue-router hash或history路由模式都会触发)
 * 2.pushState or replaceState被调用时
 * 3.在single-spa 手动调用 triggerAppChange 方法
 * 4.checkActivityFunctions 方法被调用时
 *
 * customProps
 * 对象 可以表示自定义字段，子应用生命周期函数可以获取
 * 函数 两个参数 应用的名称和window.location
 */
const development = process.env.NODE_ENV === 'development';
/// web 部署根域名
const baseUrl = process.env.VUE_APP_WEB_URL;

const configProject = [
  {
    name: 'app1',
    app: window.System.import('app-demo1').then((res) => res.default),
    activeWhen: (location) => location.pathname.startsWith('/app1'),
    customProps: {
      // 对象
      everything: 'just do it'
    }
    //   customProps: (name, location) => {
    //     // 函数
    //     return {everything: 'just do it'};
    //   }
  },
  {
    name: 'app2',
    app: getApplication(development ? 'http://localhost:8993/manifest.json' : `${baseUrl}/app2/manifest.json`),
    activeWhen: (location) => location.pathname.startsWith('/app2'),
    customProps: {
      // 对象
      everything: 'just do it'
    }
  }
];

/// 注册子应用
configProject.forEach((element) => {
  registerApplication(element);
});
export function appStart() {
  // 在调用 start 之前, 应用会被加载, 但不会初始化，挂载或卸载。暴露出这个方法是可以控制子应用的激活时机，优化项目性能。
  // 比如我们一般需要登录成功之后，才会去加载子项目
  return start();
}
