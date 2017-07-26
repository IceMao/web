/**
 * Created by ice on 2017/7/20.
 */
import Vue from "vue";
import vueRouter from 'vue-router';
import vueResource from 'vue-resource';

Vue.use(vueRouter);
Vue.use(vueResource);

const NotFound = { template: '<h2>NotFound </h2>' }
const Home = { template: '<p>我是谁！！！</p>' }
const About = { template: '<h1>About </h1>' }

require('./common/styles/common.css');

//路由
const routes = [{
    path: '/home',
    component: Home
},{
    path: '/about',
    component: About
},{
    path: '/not',
    component: NotFound
}];

const router = new vueRouter({
  hashbang: false,
  mode: 'history',
    routes
});

const app = new Vue({
    router,
}).$mount('#app');
