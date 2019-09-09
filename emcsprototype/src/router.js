import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Firstpage from './views/Firstpage'
import Login from './views/Login'
import About from './views/About'
import Lost from './views/Lost'
import Secendpage from './views/Secendpage'
import LoginTimer from './views/LoginTimer'
Vue.use(Router) 
/*抽离  共用的 子路由 跳转验证*/
var islogin = (to, from, next) => {
				let needLogin = false;      //
				console.log("【子路由】："+needLogin);
				if(needLogin){
					next('/loginTip');  //需要登录 
				}else{  
					next();				//已经登录  继续跳转到要跳转的页面
				}
	}

/*抽离  共用的 子路由  必须在  路由声明 之前*/
const mainpages=[
					{
						path: 'login',
						name: 'login',
						component: Login,
      					beforeEnter:(to, from, next)=>{
      						let thisLogin = 4;
      						console.log("【子路由】："+thisLogin);  
      						next(); 
      					} 
					},
					{
						path: 'first',
						name: 'Firstpage',
						component: Firstpage,
      					beforeEnter:islogin 
					},
					{
						path: 'about', 
						name: 'About', 
						component: About,
      					beforeEnter:islogin
					},
					{
						path: 'sec', 
						name: 'Secendpage', 
						component: Secendpage,
      					beforeEnter:islogin
					}
				]
export default new Router({
	mode:'history',
	routes: [
		{
			path: '/loginTip', 
			name: 'LoginTimer', 
			component: LoginTimer,
      		meta: { login: true } 
		},
		{
			path: '*', 
			name: '404', 
			component: Lost,
      		meta: { login: true } , 
		},
		{
			path: '/', 
			name: 'home', 
			component: Home,
			redirect: '/home/login',
			children: mainpages,
      		meta: { login: true} 
		},
		{
			path: '/home',
			name: 'home',  
			component: Home,
			redirect: '/home/login',
			children: mainpages,
      		meta: { login: true } 
		} 
	] 
})