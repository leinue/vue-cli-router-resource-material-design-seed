import Vue from 'vue';
import App from './App';
import Keen from 'keen-ui';
import KeenStyle from '../node_modules/keen-ui/dist/min/keen-ui.min.css';
//加载AJAX Service库
import Service from './models/index.js';
//加载vue-router
import VueRouter from 'vue-router';
import routerConfig from './routers.js';

//加载keen-ui
Vue.use(Keen);

//----------------------------初始化AJAX----------------------------

//加载AJAX请求库
Vue.use(require('vue-resource'));

//初始化AJAX头
Vue.http.options.root = 'http://localhost';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

//----------------------------初始化AJAX----------------------------

//----------------------------初始化路由----------------------------

Vue.use(VueRouter);

var router = new VueRouter();

routerConfig(router);

router.start(App, '#main');

//路由请求开始时调用
router.beforeEach(function () {

});

//路由请求结束后调用
router.afterEach(function () {
	
});

router.redirect({
  '*': '/index'
});

//----------------------------初始化路由----------------------------

Service.init(Vue);
