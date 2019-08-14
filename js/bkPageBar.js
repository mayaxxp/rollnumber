require.config({
    paths : {
        "jquery" : ["../js/jquery-1.11.3"]   
    }
})
define(["jquery"],function($){
	 		var BkPageBar=function(parentID){
	 			this.divparent=document.getElementById(parentID); 
				this.init();
				this.parentID=parentID
	 		};
	 		BkPageBar.prototype={
	 			constructor : BkPageBar,
	 			config:function(obj){
	 				var obj_=obj?obj:{elemId:'#'+this.parentID,pageIndex:1,total:0,pageNum:7,pageSize:10};
	 				return obj_;
	 			},
	 			init:function(){
	 				var self=this;
					this.render(this.config());
	 			},
	 			getDom:function(){
	 				this.btnFirst=this.divparent.getElementsByClassName("glyphicon-step-backward")[0];
					this.btnPre=this.divparent.getElementsByClassName("glyphicon-triangle-left")[0];
					this.btnNext=this.divparent.getElementsByClassName("glyphicon-triangle-right")[0];
					this.btnLast=this.divparent.getElementsByClassName("glyphicon-step-forward")[0];
					this.lineToNum=this.divparent.getElementsByTagName("li")[0].getElementsByTagName("input")[0];
					this.pageToNum=this.divparent.getElementsByTagName("li")[3].getElementsByTagName("input")[0];
	 			
	 			},
	 			render:function(cfg){
	 				//var self=this;
	 				var data_=cfg;  //{elemId:'#'+parentID,pageIndex:1,total:0,pageNum:'7',pageSize:'10'}
	 				var currentPage=cfg.pageIndex?cfg.pageIndex:1;  //当前页；
	 				var numTotal=cfg.total?cfg.total:0;				//所有条总数；
	 				
	 				var demo_='';
	 					demo_+='<ul>';
						demo_+='<li><input type="number" name=""   value="'+data_.pageSize+'" title="输入行数，回车跳转"/>行/页</li>';
						demo_+='<li><span  >0</span>/<span id="">0</span>页</li>';
						demo_+='<li><span   class="glyphicon glyphicon-step-backward" title="首页"></span>';
						demo_+='<span class="glyphicon glyphicon-triangle-left"  title="前一页"></span>';
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
	 				var this_=this;
	 				this.lineToNum.onchange=function(){ // 每页显示×行
	 					var val_= this.value;
	 						console.log("每页显示"+val_+"行");
	 						var obj={pageSize:val_}
	 						this_.refreshCfg(obj);
	 					};
	 				this.btnFirst.onclick=function(){
	 					console.log("首页");
 						var obj={pageIndex:1};
 						this_.refreshCfg(obj);
 					};
	 				this.btnPre.onclick=function(){
	 					var preP=(this_.config()).pageIndex-1;
	 					console.log(preP);
	 					console.log("上一页:"+preP);
	 					var obj={pageIndex:preP};
 						this_.refreshCfg(obj);
	 				};
	 				this.btnNext.onclick=function(){ 
	 					(this_.config()).pageIndex+=1 
						console.log(this_.config());
	 					console.log("下一页:"+(this_.config()).pageIndex); 
	 					var obj={pageIndex:(this_.config()).pageIndex};
 						this_.refreshCfg(obj);
 					};
	 				this.btnLast.onclick=function(){
	 					var lastPN=(this_.config()).pageNum;
	 					console.log("尾页"+lastPN);
	 					var obj={pageIndex:lastPN};
 						this_.refreshCfg(obj);
	 				};
	 				this.pageToNum.onchange=function(){   //跳转至×页
	 					var val_= this.value;
	 						var obj={pageIndex:val_};
	 						console.log("跳转至:"+val_+"页");
	 						this_.refreshCfg(obj);
	 				};
	 			},
	 			refreshCfg:function(obj){
	 				var newobj=$.extend((this.config()),obj)
	 				this.config(newobj);
	 				this.render(this.config());
	 			}
	 		}; 
	 		return BkPageBar; 
}) 
