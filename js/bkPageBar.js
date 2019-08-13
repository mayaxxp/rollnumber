define(function(){
	 		var BkPageBar=function(parentID){
	 			this.divparent=document.getElementById(parentID);
	 			this.config = {elemId:'#'+pagerId,pageIndex:'1',total:'0',pageNum:'7',pageSize:'10'};
				this.init();
	 		};
	 		BkPageBar.prototype={
	 			constructor : BkPageBar, 
	 			init:function(){
	 				var self=this;
					this.render();
					
	 			},
	 			getDom:function(){
	 				this.btnFirst=this.divparent.getElementsByClassName("glyphicon-step-backward")[0];
					this.btnPre=this.divparent.getElementsByClassName("glyphicon-triangle-left")[0];
					this.btnNext=this.divparent.getElementsByClassName("glyphicon-triangle-right")[0];
					this.btnLast=this.divparent.getElementsByClassName("glyphicon-step-forward")[0];
					this.lineToNum=this.divparent.getElementsByTagName("li")[0].getElementsByTagName("input")[0];
					this.pageToNum=this.divparent.getElementsByTagName("li")[3].getElementsByTagName("input")[0];
	 			},
	 			render:function(){
	 				//var self=this;
	 				var demo_='';
	 					demo_+='<ul>';
						demo_+='<li><input type="number" name=""   value="" title="输入行数，回车跳转"/>行/页</li>';
						demo_+='<li><span  >0</span>/<span id="">0</span>页</li>';
						demo_+='<li><span   class="glyphicon glyphicon-step-backward" title="首页"></span>';
						demo_+='<span   class="glyphicon glyphicon-triangle-left"  title="前一页"></span>';
						demo_+='<span class="glyphicon glyphicon-triangle-right" title="后一页"></span>';
						demo_+='<span class="glyphicon glyphicon-step-forward" title="尾页"></span>';
						demo_+='</li>';
						demo_+='<li>跳转至<input type="number" name=""  value="" max="6" title="输入页数，回车跳转"/>页</li>';
						demo_+='</ul>';
						this.divparent.innerHTML=demo_;
						this.getDom();
						this.handler();
//	 				return demo_;
	 			},
	 			handler:function(){
	 				this.lineToNum.onchange=function(){
	 					var val_= this.value;
	 					console.log(val_);
	 					};
	 				this.btnFirst.onclick=function(){console.log("首页")};
	 				this.btnPre.onclick=function(){console.log("上一页")};
	 				this.btnNext.onclick=function(){console.log("下一页")};
	 				this.btnLast.onclick=function(){console.log("尾页")};
	 				this.pageToNum.onchange=function(){
	 					var val_= this.value;
	 					console.log(val_);
	 					};
	 			} 
	 		}; 
	 		return BkPageBar; 
}) 
