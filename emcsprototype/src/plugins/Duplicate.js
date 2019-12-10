export default {
    install(Vue,obj){
	Vue.prototype.deepClone=function deepClone(obj){
			var objClone = Array.isArray(obj) ? [] : {}; 
			  if (obj && typeof obj === "object"){
					    for (let key in obj){
					      if (obj.hasOwnProperty(key)) {
					        if(obj[key] && typeof obj[key] === "object") {
					          objClone[key] = deepClone(obj[key]);
					        } else {
					          objClone[key] = obj[key];
					        }
					      }
					    }
			  }else if(obj && Array.isArray(obj)){ 
			  			console.log("数组对象")
			  }
			  
			  
			  
			  
		    return objClone; 
		}
}}


 
