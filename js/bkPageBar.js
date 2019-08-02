define(["../js/jquery-1.11.3"],function(){
	 return (function(){  
	 		var bkPageBar=function(str){
	 			
	 			this.name="tata:",
				this.showName=function(){
					console.log($("#firstDiv").text());
					console.log(str);
				}
				//return this
	 		}
	 		return bkPageBar;
		})()
})