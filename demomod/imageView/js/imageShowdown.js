(function($,doc,win,bootoast_){
	function resizeCurrtargetImg(slect){
		var imgw_h={};
		$("#mainImgC img").attr("src",slect);   //设置图片链接
		$("<img/>").attr("src", slect).load(
			function(){ 
		        imgw_h.w = this.width; 
				imgw_h.h = this.height;
				reSetsizeImg(imgw_h); 
		});  
	} 
	function reSetsizeImg(obj){
		 
		var conW_H={};
		conW_H.w=$("#mainImgC")[0].clientWidth;
		conW_H.h=$("#mainImgC")[0].clientHeight;
		var igs=obj.w/obj.h
		var cts=conW_H.w/conW_H.h
		console.log(JSON.stringify(conW_H));
		if(obj.w>obj.h&&conW_H.w>conW_H.h){
				if(igs >cts){
					$("#mainImgC img").css("width",100+'%');
					$("#mainImgC img").css("height","auto");  
					$("#mainImgC img").css("margin-top",(conW_H.h-conW_H.w*obj.h/obj.w)/2+"px");  //(conW_H.h-conW_H.w*obj.h/obj.w)+"px"    /  "auto"
					console.log("001")
				}else{
					$("#mainImgC img").css("width",100+'%');
					$("#mainImgC img").css("height",conW_H.w*obj.h/obj.w +'px'); //conW_H.w*obj.h/obj.w    auto 
					$("#mainImgC img").css("margin-top",0+"px");  
					console.log("002")
				} 
			}else{
				$("#mainImgC img").css("width",conW_H.h*obj.w/obj.h+'px');
				$("#mainImgC img").css("height",100+'%');
				$("#mainImgC img").css("margin-top",0+"px");
				console.log("003")
			}
			
	}		
	function initUllimge(index){
		var this_= $($(".imgLList .ulCont ul li img")[index]); 
		var imgurl=this_.attr("src");
		$(".firstRow>div>.downloadCon>a").attr("href",imgurl);
		this_.css("border","2px solid #ccc").parent("li").siblings("li").find("img").css("border","none");
		resizeCurrtargetImg(imgurl)
	}
	
	
				
	$(doc).ready(function(){
		console.log("初始化")
		initUllimge(0)  //初始化  显示第一个图片
		var imgurl=$("#mainImgC img").attr("src");
		resizeCurrtargetImg(imgurl);
		$(".imgLList .ulCont ul li").on("click","img",null,function(e){ 
			var imgurl=$(this).attr("src");
			$(".firstRow>div>.downloadCon>a").attr("href",imgurl);
			$(this).css("border","2px solid #ccc").parent("li").siblings("li").find("img").css("border","none");
			resizeCurrtargetImg(imgurl)
		})
		$(".imgLList").on("click",".prev",null,function(e){ console.log("上一张")
			var margL=parseInt($(".imgLList .ulCont ul").css("margin-left"))
			var margR=parseInt($(".imgLList .ulCont ul").css("margin-right"))
 			var widthUL=parseInt($(".imgLList .ulCont ul").css("width"))
 			var widthulCont=parseInt($(".imgLList .ulCont").css("width"))
 			if((widthUL+margL)<=widthulCont){
 				toastl('右侧没有更多图片了')
 				return;
 			}
			$(".imgLList .ulCont ul").css("margin-left",(margL-83.6-15)+"px");
		})
		$(".imgLList").on("click",".next",null,function(e){ 
			var margL=parseInt($(".imgLList .ulCont ul").css("margin-left"))
			var margR=parseInt($(".imgLList .ulCont ul").css("margin-right"))
			var widthUL=parseInt($(".imgLList .ulCont ul").css("width"))
 			var widthulCont=parseInt($(".imgLList .ulCont").css("width"))
 			if((margL)>=0){
 				toastl('左侧没有更多图片了')
 				return;
 			}
			$(".imgLList .ulCont ul").css("margin-left",(margL+83.6+15)+"px");
		})
	})
	function toastl(msg){
		if(bootoast_){
 					bootoast_({ 
			        message: msg, 
			        position:'bottom-center', 
			        timeout:1.5 
			      }); 
 				}
	}
	$(win).resize(function(){
		var imgurl=$("#mainImgC img").attr("src");
		resizeCurrtargetImg(imgurl)
	})
				
})(jQuery,document,window,bootoast)