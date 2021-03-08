/*
 * @Descripttion:
 * @version:
 * @Author: wanghongkui
 * @Date: 2021-03-01 15:40:03
 * @LastEditTime: 2021-03-04 16:05:28
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
//import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    //component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: 'app1',
  routes
});

export default router;
