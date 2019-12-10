/**
 * Created by xxps on 2018/1/19.
 */
 /**
  * @param: id为所要添加内容元素的ID;
  * @param: type默认为"Hmn_panel_AC";
  * @param: w为所要添加内容元素的宽
  * @param: h为所要添加内容元素的高;
  * @param: data 为所要添加内容的DOM元素;
  * @param: contentDiv 为父容器对象;
  **/
function Hmn_panel(id,type,w,h,titleName,data,contentDiv){
    var obj = new Object();
    obj.id = id;
    obj.type = type;
    obj.w = w;
    obj.h = h;
    obj.name = titleName;
    obj.data_ = data;
    
    obj.bindData=function(data_){
    	$("#"+id).find(".Hmn_panelNormal_top_center").html(data);
    }
    obj.resize=function(w_,h_){
        $("#"+id).find(".Hmn_panelNormal_top_center").css({"width":(parseInt(w_)-30)+"px"});
        $("#"+id).find(".Hmn_panelNormal_Mid_center").css({"width":(parseInt(w_)-30)+"px"});
        $("#"+id).find(".Hmn_panelNormal_Bottom_center").css({"width":(parseInt(w_)-30)+"px"});
        $("#"+id).find(".Hmn_panelNormal_mid").css({"height":(parseInt(h_)-52)+"px"});
    };
    var ii=(obj.data_).length;
    //   容器样式为  Narmolpanel
    if(obj.type=="Hmn_panel_Nar"){

        obj.dom='<div id="'+obj.id+'" class="Hmn_panel_content"  style="width:'+parseInt(obj.w)+'px;height:'+parseInt(obj.h)+'px;">'+ '<div class="Hmn_panelNormal_top"  >'+ '<div class="Hmn_panelNormal_top_left"></div ><div class="Hmn_panelNormal_top_center"  style="width:'+(parseInt(obj.w)-30)+'px;" >'+obj.name+'<a><div class="Hmn_panelNormal_moreBtn">更多</div></a></div><div class="Hmn_panelNormal_top_right"></div>'+
        '</div>'+ '<div class="Hmn_panelNormal_mid" style="height:'+(parseInt(obj.h)-52)+'px;">'+ '<div class="Hmn_panelNormal_Mid_left"></div ><div class="Hmn_panelNormal_Mid_center" style="width:'+(parseInt(obj.w)-30)+'px;">'+(obj.data_)+'</div><div class="Hmn_panelNormal_Mid_right" ></div></div>'+
        '<div class="Hmn_panelNormal_Bottom"  > '+ ' <div class="Hmn_panelNormal_Bottom_left"></div ><div class="Hmn_panelNormal_Bottom_center" style="width:'+(parseInt(obj.w)-30)+'px;"></div><div class="Hmn_panelNormal_Bottom_right" ></div></div>'
        obj.resize=function(w_,h_){
            $("#"+id).css({"width":(w_)+"px","height":(h_)+"px"});
            $("#"+id).find(".Hmn_panelNormal_top_center").css({"width":(parseInt(w_)-30)+"px"});
            $("#"+id).find(".Hmn_panelNormal_Mid_center").css({"width":(parseInt(w_)-30)+"px"});
            $("#"+id).find(".Hmn_panelNormal_Bottom_center").css({"width":(parseInt(w_)-30)+"px"});
            $("#"+id).find(".Hmn_panelNormal_mid").css({"height":(parseInt(h_)-52)+"px"});
        };
    };
    //   容器样式为  Hmn_panel_AC
    if(obj.type=="Hmn_panel_AC"){
    	/*20181129调整前
        obj.dom='<div id="'+obj.id+'"  class="Hmn_panel_content" style="width:'+parseInt(obj.w)+'px;height:'+parseInt(obj.h)+'px;opacity:1;">'+
                '<div class="Hmn_panelAC_top"><div class="Hmn_panelAC_top_left"></div><div class="Hmn_panelAC_top_center" style="width:'+(parseInt(obj.w)-120)+'px;">'+obj.name+'</div><div class="Hmn_panelAC_top_right"><a><div class="Hmn_panelAC_closeBtn"></div></a></div></div>'+
                '<div class="Hmn_panelAC_mid" style="height:'+(parseInt(obj.h)-140)+'px;"><div class="Hmn_panelAC_Mid_left"></div><div class="Hmn_panelAC_Mid_center" style="width:'+(parseInt(obj.w)-120)+'px;"></div> <div class="Hmn_panelAC_Mid_right"></div></div>'+
                '<div class="Hmn_panelAC_Bottom"><div class="Hmn_panelAC_Bottom_left"></div><div class="Hmn_panelAC_Bottom_center" style="width:'+(parseInt(obj.w)-120)+'px;"></div><div class="Hmn_panelAC_Bottom_right"></div></div>'+
                '<div class="Hmn_panelAC_Content"  style="width:'+(parseInt(obj.w)-70)+'px;height:'+(parseInt(obj.h)-80)+'px">'+(obj.data_)+'</div></div>'
        obj.resize=function(w_,h_){
            $("#"+id).css({"width":(w_)+"px","height":(h_)+"px"});
            $("#"+id).find(".Hmn_panelAC_top_center").css({"width":(parseInt(w_)-120)+"px"});
            $("#"+id).find(".Hmn_panelAC_Mid_center").css({"width":(parseInt(w_)-120)+"px"});
            $("#"+id).find(".Hmn_panelAC_Bottom_center").css({"width":(parseInt(w_)-120)+"px"});
            $("#"+id).find(".Hmn_panelAC_mid").css({"height":(parseInt(h_)-140)+"px"});
        };
        */
        /*20181129调整后*/
		obj.dom='<div id="'+obj.id+'"  class="Hmn_panel_content" style="width:'+(parseInt(obj.w)+75)+'px;height:'+(parseInt(obj.h)+63)+'px;opacity:1; bottom:'+((parseInt(obj.h)+63)/-2)+'px;left:'+((parseInt(obj.w)+75)/-2)+'px;position: absolute;">'+
		    '<div class="Hmn_panelAC_top"><div class="Hmn_panelAC_top_left"></div><div class="Hmn_panelAC_top_center" style="width:'+(parseInt(obj.w)-120+75)+'px;"><div class="Hmn_panelAC_moveArea" style="width:100%;height:31px;position:absolute;left:0px;top:4px;">'+obj.name+'</div></div><div class="Hmn_panelAC_top_right"><a><div class="Hmn_panelAC_closeBtn"></div></a></div></div>'+
		    '<div class="Hmn_panelAC_mid" style="height:'+(parseInt(obj.h)-140+63)+'px;"><div class="Hmn_panelAC_Mid_left"></div><div class="Hmn_panelAC_Mid_center" style="width:'+(parseInt(obj.w)-120+75)+'px;"></div> <div class="Hmn_panelAC_Mid_right"></div></div>'+
		    '<div class="Hmn_panelAC_Bottom"><div class="Hmn_panelAC_Bottom_left"></div><div class="Hmn_panelAC_Bottom_center" style="width:'+(parseInt(obj.w)-120+75)+'px;"></div><div class="Hmn_panelAC_Bottom_right"></div></div>'+
		    '<div class="Hmn_panelAC_Content"  style="width:'+parseInt(obj.w)+'px;height:'+parseInt(obj.h)+'px">'+(obj.data_)+'</div></div>'
		obj.resize=function(w_,h_){
		    $("#"+id).css({"width":(w_+75)+"px","height":(h_+63)+"px"});
		    $("#"+id).find(".Hmn_panelAC_top_center").css({"width":(w_-120+75)+"px"});
		    $("#"+id).find(".Hmn_panelAC_Mid_center").css({"width":(w_-120)+75+"px"});
		    $("#"+id).find(".Hmn_panelAC_Bottom_center").css({"width":(w_-120+75)+"px"});
		    $("#"+id).find(".Hmn_panelAC_mid").css({"height":(h_-140+63)+"px"});
		};
    }
    if(obj.type=="Hmn_panel_BC"){
    	obj.dom='<div id="'+obj.id+'"  class="Hmn_panel_content" style="width:'+parseInt(obj.w)+'px;height:'+parseInt(obj.h)+'px;opacity:1;">'+
			        '<div class="Hmn_panelBC_top">'+
			            '<div class="Hmn_panelBC_top_left"   ></div>'+
			            '<div class="Hmn_panelBC_top_repeat1" >'+obj.name+'</div>'+
			            '<div class="Hmn_panelBC_top_center" ></div>'+
			            '<div class="Hmn_panelBC_top_repeat2" style="width:'+(parseInt(obj.w)-43-98-(obj.name.length)*19.5125)+'px;"></div>'+
			            '<div class="Hmn_panelBC_top_right"></div>'+
			        '</div>'+
			        '<div class="Hmn_panelBC_mid" style="height:'+(parseInt(obj.h)-60)+'px;">'+
			            '<div class="Hmn_panelBC_Mid_left"></div>'+
			            '<div class="Hmn_panelBC_Mid_center" style="width:'+(parseInt(obj.w)-43)+'px;">'+(obj.data_)+'</div>'+
			            '<div class="Hmn_panelBC_Mid_right"></div>'+
			        '</div>'+
			        '<div class="Hmn_panelBC_Bottom">'+
			            '<div class="Hmn_panelBC_Bottom_left"></div>'+
			            '<div class="Hmn_panelBC_Bottom_center"  style="width:'+(parseInt(obj.w)-43)+'px;"></div>'+
			            '<div class="Hmn_panelBC_Bottom_right"></div>'+
			        '</div>'+
				'</div>';
		obj.resize=function(w_,h_){
            $("#"+id).css({"width":(w_)+"px","height":(h_)+"px"});
            $("#"+id).find(".Hmn_panelBC_top_repeat2").css('width":'+(parseInt(obj.w)-43-98)-$("#"+id).find(".Hmn_panelBC_top_repeat1").css("width")+'px');
            $("#"+id).find(".Hmn_panelBC_Mid_center").css({"width":(parseInt(w_)-43)+"px"});
            $("#"+id).find(".Hmn_panelBC_Bottom_center").css({"width":(parseInt(w_)-43)+"px"});
            $("#"+id).find(".Hmn_panelBC_mid").css({"height":(parseInt(h_)-60)+"px"});
        };
    }
    /*20181129调整前
    obj.colseWindow=function(){
        //$("#"+id).css({"width":"200px","height":"180px"});
        $("#"+id).css({"opacity":0.0});
        setTimeout(function(){$("#"+id).remove();},300);
        $(".dataview_popwindow").addClass("hidd_popwindow");
    };
    */
    /*20181129调整后*/
    obj.colseWindow = function(){
        $("#"+id).animate({"opacity":0.0},500);
        setTimeout(function(){$("#"+id).remove();},500);
        $(".dataview_popwindow").addClass("hidd_popwindow");
        $(contentDiv).empty();
    };
    $(contentDiv).append(obj.dom);
    
    /*20181129调整前
    //点击关闭窗口事件
    $("#"+id).find(".Hmn_panelAC_closeBtn").click(function(){
        $("#"+id).css({"opacity":0.0});
        setTimeout(function(){$("#"+id).remove();},300);
        $(".dataview_popwindow").addClass("hidd_popwindow");
    });
    */
    /*20181129调整后*/
    //点击关闭窗口事件
    $("#"+id).find(".Hmn_panelAC_closeBtn").click(function(){
		$("#"+id).animate({"opacity":0.0},500)
		setTimeout(function(){$("#"+id).remove();},500);
        $(".dataview_popwindow").addClass("hidd_popwindow");
        $(contentDiv).empty();
    }); 
    
    /*弹出框拖动相关start*/
    $("#"+id).find(".Hmn_panelAC_moveArea").mouseenter(function(){ 
     	$("#"+id).find(".Hmn_panelAC_moveArea").mousedown(function(ev){ 
	    	Ev= ev || window.event; 
	    	obj.domleft=$(".Hmn_panel_content").css("left");
	    	obj.dombottom=$(".Hmn_panel_content").css("bottom");
			obj.mousePos = mouseCoords(ev); 
			 
			$(this).mousemove(function(e){   //开始移动
				movethisPanel(e); 
			})
			$(this).mouseleave(function(e){   //开始移动
				$(this).unbind('mousemove'); 
				$(this).unbind('mousedown'); 
			})
			$(this).mouseup(function(e){   //开始移动
				$(this).unbind('mousemove'); 
			})
	    });
     })
    function movethisPanel(e){ 
    	obj.mouseNewPos=mouseCoords(e); 
		var pleft=parseInt(obj.domleft)+(obj.mouseNewPos.x-obj.mousePos.x); 
		var pbottom=parseInt(obj.dombottom)+(obj.mousePos.y-obj.mouseNewPos.y); 
		$(".Hmn_panel_content").css({"left":pleft+"px"}) 
		$(".Hmn_panel_content").css({"bottom":pbottom+"px"})  
    	return ;
    }
    function mouseCoords(ev){   //获取鼠标坐标
		if(ev.pageX || ev.pageY){ 
			return {x:ev.pageX, y:ev.pageY}; 
		} 
		return {  x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,  y:ev.clientY + document.body.scrollTop - document.body.clientTop  }; 
	}
    /*弹出框拖动相关end*/
    
    $("#"+id).find(".Hmn_panelBC_top_repeat2").css('width":'+(parseInt(obj.w)-43-98)-$("#"+id).find(".Hmn_panelBC_top_repeat1").css("width")+'px');
    return obj;
}

/**
 * Created by xxps on 2018/4/10.
 */
 /**
  * @param: id为所要添加内容元素的ID;
  * @param: type默认为"Hmn_panel_AC";
  * @param: w为所要添加内容元素的宽
  * @param: h为所要添加内容元素的高;
  * @param: data 为所要添加内容的DOM元素;
  * @param: contentDiv 为父容器对象;
  **/
function Hmn_panel_noClose(id,type,w,h,titleName,data,contentDiv){
    var obj = new Object();
    obj.id = id;
    obj.type = type;
    obj.w = w;
    obj.h = h;
    obj.name = titleName;
    obj.data_ = data;
    
    obj.bindData=function(data_){
    	$("#"+id).find(".Hmn_panelNormal_top_center").html(data);
    }
    obj.resize=function(w_,h_){
        $("#"+id).find(".Hmn_panelNormal_top_center").css({"width":(parseInt(w_)-30)+"px"});
        $("#"+id).find(".Hmn_panelNormal_Mid_center").css({"width":(parseInt(w_)-30)+"px"});
        $("#"+id).find(".Hmn_panelNormal_Bottom_center").css({"width":(parseInt(w_)-30)+"px"});
        $("#"+id).find(".Hmn_panelNormal_mid").css({"height":(parseInt(h_)-52)+"px"});
    };
    var ii=(obj.data_).length;
    //   容器样式为  Narmolpanel
    if(obj.type=="Hmn_panel_Nar"){

        obj.dom='<div id="'+obj.id+'" class="Hmn_panel_content"  style="width:'+parseInt(obj.w)+'px;height:'+parseInt(obj.h)+'px;">'+ '<div class="Hmn_panelNormal_top"  >'+ '<div class="Hmn_panelNormal_top_left"></div ><div class="Hmn_panelNormal_top_center"  style="width:'+(parseInt(obj.w)-30)+'px;" >'+obj.name+'<a><div class="Hmn_panelNormal_moreBtn">更多</div></a></div><div class="Hmn_panelNormal_top_right"></div>'+
        '</div>'+ '<div class="Hmn_panelNormal_mid" style="height:'+(parseInt(obj.h)-52)+'px;">'+ '<div class="Hmn_panelNormal_Mid_left"></div ><div class="Hmn_panelNormal_Mid_center" style="width:'+(parseInt(obj.w)-30)+'px;">'+(obj.data_)+'</div><div class="Hmn_panelNormal_Mid_right" ></div></div>'+
        '<div class="Hmn_panelNormal_Bottom"  > '+ ' <div class="Hmn_panelNormal_Bottom_left"></div ><div class="Hmn_panelNormal_Bottom_center" style="width:'+(parseInt(obj.w)-30)+'px;"></div><div class="Hmn_panelNormal_Bottom_right" ></div></div>'
        obj.resize=function(w_,h_){
            $("#"+id).css({"width":(w_)+"px","height":(h_)+"px"});
            $("#"+id).find(".Hmn_panelNormal_top_center").css({"width":(parseInt(w_)-30)+"px"});
            $("#"+id).find(".Hmn_panelNormal_Mid_center").css({"width":(parseInt(w_)-30)+"px"});
            $("#"+id).find(".Hmn_panelNormal_Bottom_center").css({"width":(parseInt(w_)-30)+"px"});
            $("#"+id).find(".Hmn_panelNormal_mid").css({"height":(parseInt(h_)-52)+"px"});
        };
    };
    //   容器样式为  Hmn_panel_AC
    if(obj.type=="Hmn_panel_AC"){
    	/*20181129调整前
        obj.dom='<div id="'+obj.id+'"  class="Hmn_panel_content" style="width:'+parseInt(obj.w)+'px;height:'+parseInt(obj.h)+'px;opacity:1;">'+
                '<div class="Hmn_panelAC_top"><div class="Hmn_panelAC_top_left"></div><div class="Hmn_panelAC_top_center" style="width:'+(parseInt(obj.w)-120)+'px;">'+obj.name+'</div><div class="Hmn_panelAC_top_right"><a><div class="Hmn_panelAC_closeBtn"></div></a></div></div>'+
                '<div class="Hmn_panelAC_mid" style="height:'+(parseInt(obj.h)-140)+'px;"><div class="Hmn_panelAC_Mid_left"></div><div class="Hmn_panelAC_Mid_center" style="width:'+(parseInt(obj.w)-120)+'px;"></div> <div class="Hmn_panelAC_Mid_right"></div></div>'+
                '<div class="Hmn_panelAC_Bottom"><div class="Hmn_panelAC_Bottom_left"></div><div class="Hmn_panelAC_Bottom_center" style="width:'+(parseInt(obj.w)-120)+'px;"></div><div class="Hmn_panelAC_Bottom_right"></div></div>'+
                '<div class="Hmn_panelAC_Content"  style="width:'+(parseInt(obj.w)-70)+'px;height:'+(parseInt(obj.h)-80)+'px">'+(obj.data_)+'</div></div>'
        obj.resize=function(w_,h_){
            $("#"+id).css({"width":(w_)+"px","height":(h_)+"px"});
            $("#"+id).find(".Hmn_panelAC_top_center").css({"width":(parseInt(w_)-120)+"px"});
            $("#"+id).find(".Hmn_panelAC_Mid_center").css({"width":(parseInt(w_)-120)+"px"});
            $("#"+id).find(".Hmn_panelAC_Bottom_center").css({"width":(parseInt(w_)-120)+"px"});
            $("#"+id).find(".Hmn_panelAC_mid").css({"height":(parseInt(h_)-140)+"px"});
        };
        */
        /*20181129调整后*/
		obj.dom='<div id="'+obj.id+'"  class="Hmn_panel_content" style="width:'+(parseInt(obj.w)+75)+'px;height:'+(parseInt(obj.h)+63)+'px;opacity:1; bottom:'+((parseInt(obj.h)+63)/-2)+'px;left:'+((parseInt(obj.w)+75)/-2)+'px;position: absolute;">'+
		    '<div class="Hmn_panelAC_top"><div class="Hmn_panelAC_top_left"></div><div class="Hmn_panelAC_top_center" style="width:'+(parseInt(obj.w)-120+75)+'px;"><div class="Hmn_panelAC_moveArea" style="width:100%;height:31px;position:absolute;left:0px;top:4px;">'+obj.name+'</div></div><div class="Hmn_panelAC_top_right"></div></div>'+
		    '<div class="Hmn_panelAC_mid" style="height:'+(parseInt(obj.h)-140+63)+'px;"><div class="Hmn_panelAC_Mid_left"></div><div class="Hmn_panelAC_Mid_center" style="width:'+(parseInt(obj.w)-120+75)+'px;"></div> <div class="Hmn_panelAC_Mid_right"></div></div>'+
		    '<div class="Hmn_panelAC_Bottom"><div class="Hmn_panelAC_Bottom_left"></div><div class="Hmn_panelAC_Bottom_center" style="width:'+(parseInt(obj.w)-120+75)+'px;"></div><div class="Hmn_panelAC_Bottom_right"></div></div>'+
		    '<div class="Hmn_panelAC_Content"  style="width:'+parseInt(obj.w)+'px;height:'+parseInt(obj.h)+'px">'+(obj.data_)+'</div></div>'
		obj.resize=function(w_,h_){
		    $("#"+id).css({"width":(w_+75)+"px","height":(h_+63)+"px"});
		    $("#"+id).find(".Hmn_panelAC_top_center").css({"width":(w_-120+75)+"px"});
		    $("#"+id).find(".Hmn_panelAC_Mid_center").css({"width":(w_-120)+75+"px"});
		    $("#"+id).find(".Hmn_panelAC_Bottom_center").css({"width":(w_-120+75)+"px"});
		    $("#"+id).find(".Hmn_panelAC_mid").css({"height":(h_-140+63)+"px"});
		};
    }
    if(obj.type=="Hmn_panel_BC"){
    	obj.dom='<div id="'+obj.id+'"  class="Hmn_panel_content" style="width:'+parseInt(obj.w)+'px;height:'+parseInt(obj.h)+'px;opacity:1;">'+
			        '<div class="Hmn_panelBC_top">'+
			            '<div class="Hmn_panelBC_top_left"   ></div>'+
			            '<div class="Hmn_panelBC_top_repeat1" >'+obj.name+'</div>'+
			            '<div class="Hmn_panelBC_top_center" ></div>'+
			            '<div class="Hmn_panelBC_top_repeat2" style="width:'+(parseInt(obj.w)-43-98-(obj.name.length)*19.5125)+'px;"></div>'+
			            '<div class="Hmn_panelBC_top_right"></div>'+
			        '</div>'+
			        '<div class="Hmn_panelBC_mid" style="height:'+(parseInt(obj.h)-60)+'px;">'+
			            '<div class="Hmn_panelBC_Mid_left"></div>'+
			            '<div class="Hmn_panelBC_Mid_center" style="width:'+(parseInt(obj.w)-43)+'px;">'+(obj.data_)+'</div>'+
			            '<div class="Hmn_panelBC_Mid_right"></div>'+
			        '</div>'+
			        '<div class="Hmn_panelBC_Bottom">'+
			            '<div class="Hmn_panelBC_Bottom_left"></div>'+
			            '<div class="Hmn_panelBC_Bottom_center"  style="width:'+(parseInt(obj.w)-43)+'px;"></div>'+
			            '<div class="Hmn_panelBC_Bottom_right"></div>'+
			        '</div>'+
				'</div>';
		obj.resize=function(w_,h_){
            $("#"+id).css({"width":(w_)+"px","height":(h_)+"px"});
            $("#"+id).find(".Hmn_panelBC_top_repeat2").css('width":'+(parseInt(obj.w)-43-98)-$("#"+id).find(".Hmn_panelBC_top_repeat1").css("width")+'px');
            $("#"+id).find(".Hmn_panelBC_Mid_center").css({"width":(parseInt(w_)-43)+"px"});
            $("#"+id).find(".Hmn_panelBC_Bottom_center").css({"width":(parseInt(w_)-43)+"px"});
            $("#"+id).find(".Hmn_panelBC_mid").css({"height":(parseInt(h_)-60)+"px"});
        };
    }
    /*20181129调整前
    obj.colseWindow=function(){
        //$("#"+id).css({"width":"200px","height":"180px"});
        $("#"+id).css({"opacity":0.0});
        setTimeout(function(){$("#"+id).remove();},300);
        $(".dataview_popwindow").addClass("hidd_popwindow");
    };
    */
    /*20181129调整后*/
    obj.colseWindow = function(){
        $("#"+id).animate({"opacity":0.0},500);
        setTimeout(function(){$("#"+id).remove();},500);
        $(".dataview_popwindow").addClass("hidd_popwindow");
        $(contentDiv).empty();
    };
    $(contentDiv).append(obj.dom);
    
    /*20181129调整前
    //点击关闭窗口事件
    $("#"+id).find(".Hmn_panelAC_closeBtn").click(function(){
        $("#"+id).css({"opacity":0.0});
        setTimeout(function(){$("#"+id).remove();},300);
        $(".dataview_popwindow").addClass("hidd_popwindow");
    });
    */
    /*20181129调整后*/
    //点击关闭窗口事件
    $("#"+id).find(".Hmn_panelAC_closeBtn").click(function(){
		$("#"+id).animate({"opacity":0.0},500)
		setTimeout(function(){$("#"+id).remove();},500);
        $(".dataview_popwindow").addClass("hidd_popwindow");
        $(contentDiv).empty();
    }); 
    
    /*弹出框拖动相关start*/
    $("#"+id).find(".Hmn_panelAC_moveArea").mouseenter(function(){ 
     	$("#"+id).find(".Hmn_panelAC_moveArea").mousedown(function(ev){ 
	    	Ev= ev || window.event; 
	    	obj.domleft=$(".Hmn_panel_content").css("left");
	    	obj.dombottom=$(".Hmn_panel_content").css("bottom");
			obj.mousePos = mouseCoords(ev); 
			 
			$(this).mousemove(function(e){   //开始移动
				movethisPanel(e); 
			})
			$(this).mouseleave(function(e){   //开始移动
				$(this).unbind('mousemove'); 
				$(this).unbind('mousedown'); 
			})
			$(this).mouseup(function(e){   //开始移动
				$(this).unbind('mousemove'); 
			})
	    });
     })
    function movethisPanel(e){ 
    	obj.mouseNewPos=mouseCoords(e); 
		var pleft=parseInt(obj.domleft)+(obj.mouseNewPos.x-obj.mousePos.x); 
		var pbottom=parseInt(obj.dombottom)+(obj.mousePos.y-obj.mouseNewPos.y); 
		$(".Hmn_panel_content").css({"left":pleft+"px"}) 
		$(".Hmn_panel_content").css({"bottom":pbottom+"px"})  
    	return ;
    }
    function mouseCoords(ev){   //获取鼠标坐标
		if(ev.pageX || ev.pageY){ 
			return {x:ev.pageX, y:ev.pageY}; 
		} 
		return {  x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,  y:ev.clientY + document.body.scrollTop - document.body.clientTop  }; 
	}
    /*弹出框拖动相关end*/
    
    $("#"+id).find(".Hmn_panelBC_top_repeat2").css('width":'+(parseInt(obj.w)-43-98)-$("#"+id).find(".Hmn_panelBC_top_repeat1").css("width")+'px');
    return obj;
}