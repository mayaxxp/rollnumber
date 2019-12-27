import axios from "axios";
//import { Toast, Indicator } from "mint-ui";
import {Loading} from 'element-ui'
// axios.defaults.baseURL = 'https://api.ziyushi.com'

//import promiseFinally from 'promise.prototype.finally';
//promiseFinally.shim();
axios.defaults = Object.assign(axios.defaults, {
//	baseURL:"http://localhost:3000"
//  baseURL: "" 
    baseURL:"http://192.168.100.142:9007/emcs-admin" 
    ,timeout:3000
    ,responseType: "json" 
    ,withCredentials:true
    ,crossDomain: true
    ,headers: { 
    	"Content-Type": "application/json"   //"application/x-www-form-urlencoded"
    	,"Access-Control-Allow-Origin":"*"
//	    ,"Cache-Control": "no-cache" 
    }
}); 
let IShowToster = (str)=>{
			let option_ = {
		        text: str,
		        spinner: 'el-icon-loading',
		        fullscreen: true,
		        background: 'rgba(0, 0, 0, 0.5)'
	        };
	        let loadingInstance = Loading.service(option_);
	        setTimeout(() => { loadingInstance.close(); }, 500);        
}
const IShowLoad = (str,boolean_)=>{
			let option_ = {
		        text: str,
		        spinner: 'el-icon-loading',
		        fullscreen: true,
		        background: 'rgba(0, 0, 0, 0.5)'
	        };
	        if(boolean_){
	        	if(IShowLoad){Loading.service(option_)
	        	}else{
	        		return Loading.service(option_)
	        	}
	        }else{
	        	let loadingInstance = Loading.service(option_);
	        	setTimeout(function(){ loadingInstance.close(); }, 500);      
	        }
}
function isIE(){
    if (window.ActiveXObject || "ActiveXObject" in window) {
    return true;
}else{
    return false;
  }
}
// 添加请求拦截器
axios.interceptors.request.use(
    config => {
	    if (!window.$vm.$store.state.isloding) {
//	       	return ;
//	    }else{
	    	window.$vm.$store.state.isloding=true;
	    	IShowLoad("数据请求中……",false)
	    }

        const option_ = {
	        text: 'Loading...',
	        spinner: 'el-icon-loading',
	        fullscreen: false,
	        background: 'rgba(0, 0, 0, 0.4)'
        };
//      let loadingInstance = Loading.service(option_);
//      setTimeout(() => { loadingInstance.close(); }, config.timeout);

//	   if(config.method=="get"){        //兼容ie    防止 请求本地缓存  加随机时间码
//		   	console.log(config.url)
		   	//config.url+=(config.url.indexOf("?") == -1)?"?t="+(new Date()).getTime():"&t="+(new Date()).getTime();
//	   }
          
		if(isIE()){
			config.data=JSON.stringify(config.data)
		}
        if (config.data && !config.data.token) { 
            config.data.token = sessionStorage.getItem("token") || ""; 
        } 
        if(config.headers && !config.headers.token){ 
        	  config.headers.token = sessionStorage.getItem("token") || "";
        	  if(config.url.indexOf("code/image") > -1){ 
        	  		config.headers["Access-Control-Allow-Headers"] = "verifyToken,token"
        	  }
        } 
//		if(config.url.indexOf("tianqi.com") > -1){ 
//		  		console.log(config)
//		  		config.headers["Access-Control-Allow-Origin"] = "http://i.tianqi.com"
////      	  		config.headers["Content-Type"] = "text/html" 
////      	  		config.baseURL=''
//				config.responseType="text/html;charset=UTF-8"
//		}
		if(config.headers && !config.headers.type){ 
        	  config.headers.type = window.sessionStorage.getItem("usertype") || ""; 
       	}  
        return config;
    },
    error => {
    	console.log("访问被拦截")
        return Promise.reject(error);
    }
);
//isloding:false
//	,loginstate:true
//	,logintime:0
// 添加响应拦截器
axios.interceptors.response.use(
    response => {  
    	console.log(response)
    	if(window.$vm.$store.state.isloding==true){
    		window.$vm.$store.state.isloding=false
    	}
        if (response.status === 200){
        	console.log(response)
        	IShowLoad("数据请求成功",false)  
        	let startTime=new Date();
        	let logintime
        	try{
//      		startTime=window.$vm.tool.formatData(response.data.time,'yyyy-MM-dd HH:mm:ss')
//      		startTime = startTime.split(/\s/g)
//      		startTime = startTime[1].split(/\:/g);
        		let thj=(new Date(startTime)).getTime()
        		console.log(thj)
        	}catch(err){
        		console.log(err)
        	}
        	logintime=(new Date(startTime)).getTime().toString();       // 登录时间存入store
        	console.log(logintime)
        	 
            if (response.data){ 
                switch (response.data.code) {
                	case 4000: 
                		//用户名密码错误 
                        return response.data;
                    case 4001:
                    	console.log(response)
                    	//验证码错误
                        return response.data;
                    case 4002: 
                        return response.data;
                    case 502:
                    		IShowToster(`~下线了~  \n (${error})`); 
                        return response.data;
                    case 200: // 正常
                        	console.log("【操作成功 code200】:")
                        	if(response.config.url.indexOf("/login")>-1){
                        		console.log("/login")
                        		window.$vm.$store.dispatch('loginingStateChange',logintime)
                        	}
                        	if(response.config.url.indexOf("/logout")==-1&&response.config.url.indexOf("code/image")==-1){
                        		console.log("非logout")
                        		window.$vm.$store.state.logintime = logintime
                        	}
                            return response.data;
                    case 500: // 正常
                        	console.log("【验证码verifyToken丢失 code500】:") 
                        	IShowLoad(`~【验证码verifyToken丢失 ~  \n Again~`,false)  
                            return response.data;
                    case 5000:
                    	console.log("【系统异常 code5000】:"); 
                    	IShowLoad(`~系统异常~  \n 请稍后再试`,false)
                        return response.data;
                    default:
                        return response;
                      //return Promise.reject(response.data.msg);
                } 
				return response.data;
            } else { 
                return response;
            }
        } else {
        	IShowLoad(`网络错误!(${response.status})`,false)  
        }
        
    },
    error => {  
    	if(window.$vm.$store.state.isloding==true){
    		window.$vm.$store.state.isloding=false
    	} 
//  	console.log(JSON.stringify(error.message));
		if(error.code===5000){
			IShowLoad(`~服务器走神儿了  \n (${error})`,false) 
		}else if(JSON.stringify(error.message).indexOf("timeout")>-1){ 
			IShowLoad(`~请求超时~  \n (${error})`,false) 
		}else if(JSON.stringify(error.message).indexOf("Network Error")>-1){
			IShowLoad(`网络错误!`,false) 
			//IShowToster(`~网络故障~  \n (${error})`)
			console.log("~网络故障~") 
			console.log(error)  
		}
		return Promise.reject(error) 
    }
) ;




export default axios;
