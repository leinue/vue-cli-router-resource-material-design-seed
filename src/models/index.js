import AuthService from './AuthService.js';

module.exports = {
	init: function(Vue) {

		//置钩子于Vue.http方法中，增加url前缀选项
		window.$resource = Vue.resource;
		
		window.$Model = {};
		$Model.AuthService = AuthService;
	}
}