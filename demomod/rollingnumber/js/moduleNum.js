/**
 * Created by xxps on 2019/3/8.
 */
 var moduleNum={
 		initNumSty:function(id){  
				var data=$(id).val(); 
//				$(id).siblings(".inum").remove();
				
//				for (var n=0;n<data.length;n++) {
//					$(id).after('<div class="inum" style="transition: background-position-y 1s;  -moz-transition: background-position-y 1s;  -webkit-transition: background-position-y 1s; -o-transition: background-position-y 1s;"></div>');
//				}
			 
				var last,stringOld; 
				for(var i=0;i<data.length;i++){
					  stringOld=data.substr(data.length-i-1,1);
					 if(stringOld=="."){
						 last="."
						 console.log(last+"***"+i+"....") 
						  $(id).siblings(".inum").eq(i).css({"visibility":"visible","background-position-y":-16*9+"px","background-position-x":-10+"px"})
					 } else if(stringOld=="%"){
						 last="%"
						 console.log(last+"***"+i+"%%%") 
						 
						 $(id).siblings(".inum").eq(i).css({"visibility":"visible","background-position-y":0+"px","background-position-x":-10+"px"})
					 }else{
						 last =Number(data.substr(data.length-i-1,1))-1;
						 if(last==-1){last=9}
						 console.log(last+"***"+i+"***") 
						 $(id).siblings(".inum").eq(i).css({"visibility":"visible","background-position-y":-16*last+"px","background-position-x":0+"px"})
					 }
					 if(data.length<9){
						for(var j=data.length;j<9;j++){
							$(id).siblings(".inum").eq(j).css({"visibility":"hidden"})
						}					 
					 }
				}
				 
		}, 
		cg: function(id){  //手动输入数值  手动触发 隐藏的 input》change事件
				var newVal_=$("#textin").val()
				$(id).val(newVal_);
				$(id).change(); 
		},
		setNumCg:function(id ,data){ //动态赋值传值  手动触发 隐藏的 input》change事件
				if(data.length<9){
					for (var n=data.length;n<9;n++){
						$(id).after('<div class="inum" style="transition: background-position-y 1s;  -moz-transition: background-position-y 1s;  -webkit-transition: background-position-y 1s; -o-transition: background-position-y 1s;"></div>');
					}
				}else if(data.length>9){
					for (var n=9;n<data.length;n++) {
						$(id).siblings(".inum").eq(n).remove();
					}
				}
				$(id).val(data);
				$(id).change(); 
				this.initNumSty(id);
		}
 }

