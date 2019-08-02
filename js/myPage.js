/**
 * 自定义分页（封装实现）
 * @type {Page}
 * @data：2019-06-02
 * @author：lzw
 */ 
// P = new Page();
//分页对象
require.config({
    paths : {
        "jquery" : ["../js/jquery-1.11.3"]   
    }
})
define(["jquery"],function($){
	return (function (){ 
		var myPage=function(pagerId){  
		    this.config = {elemId:'#'+pagerId,pageIndex:'1',total:'0',pageNum:'7',pageSize:'10'};//默认参数
		    this.version = '1.0';//分页版本
		    this.requestFunction = null;//分页版本
			var this_=this;
			this.isBlank = function(str){
			    if(str == undefined || str == null || str.trim() == ''){
			        return true;
			    }
			    return false;
			}
		    //初始化参数
		    this.initMathod = function(obj){
		        this_.config=$.extend(this_.config,obj.params);//默认参数 + 用户自定义参数 
		        this.requestFunction = obj.requestFunction;
		        this.renderPage();
		    };
		
		    //渲染分页
		    this.renderPage = function(){
		        this.requestFunction();
		        this.pageHtml();
		 
		        //分页绑定事件
				var thisPage = this;
				$(this.config.elemId).unbind(); // 先解除绑定事件，防止添加重复的点击事件
		        $(this.config.elemId).on('click','span',function(){
		            var flag = $(this).hasClass('disabled');
		            if(flag){
		                return false;
		            }
		            var pageIndex = $(this).data('pageindex'); 
		            thisPage.config.pageIndex = pageIndex;
		            thisPage.requestFunction();
		            thisPage.pageHtml();
		        });
		        /*设置每页行数触发事件*/
				$(document).off("change","input.lineC").on("change","input.lineC",function(){
					thisPage.config.pageSize=$(this).val(); 
					thisPage.requestFunction();
		            thisPage.pageHtml(); 
				});
				/*设置跳转页面触发事件*/
				$(document).off("change","input.jumppage").on("change","input.jumppage",function(){
					thisPage.config.pageIndex=$(this).val(); 
					thisPage.requestFunction();
		            thisPage.pageHtml(); 
				});
				
		    };
		    //分页合成
		    this.pageHtml = function(){
		        var data = this.config;
		        if(parseInt(data.total) <= 0){
		            return false;
		        }
		
		        var elemId = data.elemId;
		        var pageNum = this_.isBlank(data.pageNum) ? 7 : parseInt(data.pageNum);//可显示页码个数
		        var pageSize = this_.isBlank(data.pageSize) ? 10 : parseInt(data.pageSize);//可显示单页行数
		        var total = parseInt(data.total);//总记录数
		        var pageTotal = total%pageSize != 0 ? parseInt(total/pageSize) + 1 : parseInt(total/pageSize);//总页数
		        var pageIndex = pageTotal < parseInt(data.pageIndex) ? pageTotal : parseInt(data.pageIndex);//当前页
		        var j = pageTotal < pageNum ? pageTotal : pageNum;//如果总页数小于可见页码，则显示页码为总页数
		        var k = pageIndex < parseInt((j/2) + 1) ? -1 * (pageIndex - 1) : pageIndex > (pageTotal - parseInt(j/2)) ? -1 * (j - (pageTotal - pageIndex) - 1) : -1 * parseInt((j/2));//遍历初始值
		        
		 
		        var pageHtml = '<ul>';
					pageHtml += '<li ><input type="number" name="" class="lineC" value="'+ pageSize +'" title="输入行数，回车跳转"/>行/页</li>'
					pageHtml += '<li><span id="" style="width: 22px;    display: inline-block;    text-align: right;">'+pageIndex+'</span>/<span id="" style="width:16px;    display: inline-block;    text-align:left;">'+pageTotal+'</span>页</li>'
					pageHtml += '<li>'
						if(pageIndex <= 0 || pageIndex == 1){
							pageHtml += '<span id="" class="glyphicon glyphicon-step-backward disabled" title="首页" data-pageindex="'+ pageIndex +'"></span>'+
								'<span id="" class="glyphicon glyphicon-triangle-left disabled"  title="前一页" data-pageindex="'+ pageIndex +'"></span>'
				        }else{
				        	pageHtml += '<span id="" class="glyphicon glyphicon-step-backward" title="首页" data-pageindex="1"></span>'+
							'<span id="" class="glyphicon glyphicon-triangle-left"  title="前一页" data-pageindex="'+ (pageIndex - 1) +'"></span>' 
				        }
					
						if(pageTotal == 1 ||  pageTotal <= pageIndex){
							pageHtml +='<span class="glyphicon glyphicon-triangle-right disabled"  data-pageindex="'+ pageTotal +'" title="下一页"></span>'+
								'<span class="glyphicon glyphicon-step-forward disabled"  data-pageindex="'+ pageTotal +'" title="尾页"></span>' 
				       }else{
				        	pageHtml +='<span class="glyphicon glyphicon-triangle-right"  data-pageindex="'+ (pageIndex + 1) +'" title="下一页"></span>'+
								'<span class="glyphicon glyphicon-step-forward"  data-pageindex="'+ pageTotal +'" title="尾页"></span>'
				        }
					pageHtml += '</li>'
					pageHtml+='<li>跳转至<input type="number" name="" class="jumppage" value="'+ pageIndex +'" max="'+ pageTotal +'" min="1" title="输入页数，回车跳转"/>页</li>'
		        	pageHtml += '</ul>'
		        	var oBox=document.getElementById(pagerId);
		        	oBox.innerHTML="";
		        	oBox.innerHTML=pageHtml;
		    	};
		    }
			return myPage;
		})()
})