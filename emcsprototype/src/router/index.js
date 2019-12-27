import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Firstpage from '@/views/Firstpage'
import welcomGWpage from '@/views/welcomGWpage'
import welcomHwzx from '@/views/welcomHwzxpage'
import welcomDefault from '@/views/welcomDefault'
import Login from '@/views/Login'
import About from '@/views/About'
import Lost from '@/views/Lost'
import Secendpage from '@/views/Secendpage'
import LoginTimer from '@/views/LoginTimer'
Vue.use(Router)



//router.beforeEach((to, from, next) => {
//let isLogin = sessionStorage.token ? true : false; // 判断是否是登录状态 看sessionStorage有没有token
//switch (to.path) {
//  case '/ziyushi':
//  case '/ketang':
//  case '/ketangjieguo':
//  case '/ketangxiangqing':
//  case '/fangsong':
//  case '/zhuanyeceping':
//  case '/loginbeforesz':
//  case '/loginsz':
//  case '/forgetpwdsz':
//  case '/registersz':
//  case '/register2sz':
//  case '/register3sz':
//    next();
//    break;
//  default:
////    isLogin ? next() : router.push('/loginbeforesz');
//		next();
//}
//});
/* 抽离  共用的 子路由 跳转验证 */
 
/* 抽离  共用的 子路由  必须在  路由声明 之前 */
const mainpages = [
]
//{
//path: '/login',
//name: 'login',
//component: Login 
//},
//{
//path: '/first',
//name: 'Firstpage', 
//component:Firstpage 
//},
//{
//path: '/about',
//name: 'About',
//component: About 
//},
//{
//path: '/sec',
//name: 'Secendpage',
//component: ()=> import('@/views/Secendpage.vue') 
//}







const router = new Router({
linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 1 });
      }, 0);
    });
  },
//mode: 'history',
  routes: [
	  {
	    path: '/index',
	    name: 'index',
	    component: Login 
	  },
	  {
	    path: '/',
	    name: 'root',
	    component: Login 
	  },
	  {
	    path: '/login',
	    name: 'login',
	    component: Login 
	  },
	  {
	    path: '/first',
	    name: 'first',
	    component:Firstpage
	  }, 
	  {
	    path: '/welcomGW',
	    name: 'welcomGW',
	    component:welcomGWpage
	  },
	  {
	    path: '/welcomHwzx',
	    name: 'welcomHwzx',
	    component:welcomHwzx
	  },
	  {
	    path: '/welcomCG',
	    name: 'welcomCG',
	    component:welcomDefault
	  },
	  {
	    path: '/about',
	    name: 'About',
	    component: About 
	  },
	  {
	    path: '/sec',
	    name: 'secendpage',
	    component: ()=> import('@/views/Secendpage.vue') 
	  }, 
    {
      path: '/loginTip',
      name: 'LoginTimer',
      component: LoginTimer
    },
    {
      path: '*',
      name: '404',
      component:  () => import("@/views/Lost.vue")
    },
//  {
//  	path:'/home/first',
//  	name: 'hfirst',
//  	redirect: '/first',
//    	component: Home
//  },
    {
    	path:'/home/sec',
    	name: 'sec',
      redirect: '/sec'
    },
    {
	    path: '/index/sec',
	    name: 'Secendpage',
	    redirect: '/sec',
	    component: Secendpage
  	}
  ]
})


router.beforeEach((to, from, next) => { // 全局 跳转验证   ；局部路由跳转 钩子函数在子路由内定义；
//		let token = router.app.$local.fetch("token");
//		next(); 
  let needAuth = to.matched.some(item => item.meta.login);
  let isLogin = sessionStorage.token ? true : false; 
  let userType= window.sessionStorage.getItem("usertype");
  switch (to.path) {
    	case '/':
	    case '/index':
	    case '/login':
	    case '/about':
	    case '/*':
	    case '/loginTip':
	      next();
	      break;
	    case '/welcomGW':
    	  	if(userType=='gw'){
    	  		next();
    	  	}else{
    	  		router.push({path:'/404'})
    	  	}
    	  break;
    	case '/welcomHwzx':
    	  	if(userType=='hwzx'){
    	  		next();
    	  	}else{
    	  		router.push({path:'/404'})
    	  	}
    	  break;
    	case '/welcomCG':
    	  	if(userType=='cg'){
    	  		next();
    	  	}else{
    	  		router.push({path:'/404'})
    	  	}
    	  break;
	    default:
	      isLogin ? next() : router.push({path:'/loginTip'});
			//next();
	      break;
	}
})


export default router