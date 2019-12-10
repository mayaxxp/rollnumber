import '@babel/polyfill'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store/store'
//import axios from 'axios'
import axios from './http'
import Tool from "@/common/js/common";
import VueAxios from 'vue-axios'
import '@/plugins/element' 
import deepClone from '@/plugins/Duplicate'
Vue.use(deepClone)
Vue.use(VueAxios, axios)
//Vue.prototype.axios = axios
Vue.prototype.tool = Tool;
Vue.config.productionTip = false
//window.onbeforeunload = onbeforeunload_handler;
//function onbeforeunload_handler(ev){  //浏览器  关闭事件 
//	var event = ev || window.event; 
//	
//	let closewindow = ()=>{
//		    return new Promise((resolve, reject) => {
//		        let wvf=setInterval(()=>{
//		        	if(window.$vm){
//								let logintime=window.$vm.$store.state.logintime
//								window.$vm.$store.dispatch('loginingStateChange',logintime)
//							} 
//		        	 event.returnValue = "Are you sure you want to close this window?"
//                     + "All of your work will be lost if you close";
//							window.closed=true
//		        		resolve(wvf)  
//		        }, 20000)  
//		    })
//		} 
//		closewindow().then(res => { 
//			clearInterval(res)
//			console.log('關閉了2');
//		}); 
//}
window.$vm=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
