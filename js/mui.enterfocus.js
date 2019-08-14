(function($,jQ){
	$.enterfocus = function(selector, callback){ 
		var boxArray = [].slice.call(document.querySelectorAll(selector)); 
//		var boxArray=jQ(selector);
		if(selector==".numCtrolBar>input[type=number]"){  //  加   +- 按钮 的  number 类型
			for (var index in boxArray) {
				var box = boxArray[index];
				box.addEventListener('keyup', function(event) {
					if (event.keyCode == 13){
						var boxIndex = boxArray.indexOf(this);
						if (boxIndex == boxArray.length - 1) {
							if (callback) callback();
						} else {
							boxIndex=boxIndex+1
							var nextBox = boxArray[boxIndex];
							jQ(nextBox).focus();
						}
					}else{
						if (callback) callback("有回调吗？我要调");
					}
				}, false);
				jQ(box).bind("focus",function(event){ 
						jQ(".mui-input-row").each(function(i,item){
							jQ(".currRow>.numcontrol").find(".glyphicon-plus").unbind("click");
							jQ(".currRow>.numcontrol").find(".glyphicon-minus").unbind("click"); 
							jQ(item).removeClass("currRow");
						}) 
						jQ(this).parent(".mui-input-row").addClass("currRow"); 
						var _rootThis=this;
						var boxIndex = boxArray.indexOf(this);
						 
						if(jQ(this).parent(".mui-input-row").find(".numcontrol").length==0){
							jQ(this).after('<span class="numcontrol"><span class="glyphicon glyphicon-minus"></span><span class="glyphicon glyphicon-plus"></span></span>'); 
						}
						var offsettop=this.parentNode.offsetTop+this.parentNode.parentNode.offsetTop-50;
						jQ("#infocontent").scrollTop(offsettop);
						jQ(this).next(".numcontrol").find(".glyphicon-plus").bind("click",function(){  
 							jQ(_rootThis).value+=.5;
							console.log("当前值+0.5");
							
						});
						jQ(this).next(".numcontrol").find(".glyphicon-minus").bind("click",function(){  
							jQ(_rootThis).value-=.5;
							console.log("当前值-0.5");
						});
				}) ; 
				
			}
		}else if(selector=="input[type=number]"){     //不加   +- 按钮 的  number 类型
			for (var index in boxArray) {
				var box = boxArray[index];
				box.addEventListener('keyup', function(event) {
					if (event.keyCode == 13){
						var boxIndex = boxArray.indexOf(this);
						if (boxIndex == boxArray.length - 1) {
							if (callback) callback();
						} else {
							boxIndex=boxIndex+1
							var nextBox = boxArray[boxIndex];
							jQ(nextBox).focus();
						}
					}else{
						if (callback) callback("有回调吗？我要调");
					}
				}, false);
				jQ(box).bind("focus",function(event){ 
						jQ(".mui-input-row").each(function(i,item){ 
							jQ(".currRow>.numcontrol").find(".glyphicon-plus").unbind("click");
							jQ(".currRow>.numcontrol").find(".glyphicon-minus").unbind("click");
							jQ(item).removeClass("currRow");
							
						})  
				});  
			}
		}else{    //不加   +- 按钮 的  text 类型
			for (var index in boxArray) {
				var box = boxArray[index];
				box.addEventListener('keyup', function(event) {
					 
					if (event.keyCode == 13){ 
						var boxIndex = boxArray.indexOf(this);
						if (boxIndex == boxArray.length - 1) {
							if (callback) callback();
						}else{
//							 console.log(++boxIndex);
							boxIndex=boxIndex+1
							var nextBox = boxArray[boxIndex];
							jQ(nextBox).focus();
						}
					}else{
						if (callback) callback("有回调吗？我要调");
					}
				}, false);
				box.addEventListener('focus', function(event){
						jQ(".mui-input-row").each(function(i,item){
							jQ(".currRow>.numcontrol").find(".glyphicon-plus").unbind("click");
							jQ(".currRow>.numcontrol").find(".glyphicon-minus").unbind("click");
							jQ(item).removeClass("currRow");
						})
						var boxIndex = boxArray.indexOf(this); 
						var offsettop=this.parentNode.offsetTop+this.parentNode.parentNode.offsetTop-50;
						jQ("#infocontent").scrollTop(offsettop);
						//console.log("纵向滚动条位置:"+offsettop);// 纵向滚动条位置 
				}, false); 
				  
			}
		}
		
		
		
		
	};
}(window.mui = window.mui || {},jQuery));