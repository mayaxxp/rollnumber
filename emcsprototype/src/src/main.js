import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {    //全局 跳转验证   ；局部路由跳转 钩子函数在子路由内定义； 
//		let token = router.app.$local.fetch("token");
//		next();
    let needAuth = to.matched.some(item => item.meta.login);  
		if(needAuth){
			next();
		}else{next("/home");}
		 console.log("【要验证？】"+needAuth+"::")
		  
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
