(function tabPagetagInit($){
			//var tabname =   //初始化选中标签默认样式；
				var newHtml='<div class="choiceBtnLcstyle"></div><div class="choiceBtnCcstyle">'+$(".choiceBtn").text()+'</div><div class="choiceBtnRcstyle"></div>'
				$(".choiceBtn").html(newHtml);
			$(".tabPageBar ul li").bind("click",function(i){
				var gi= $(this).index();   //选择项序号
				$(".tabPageBar ul li").removeClass("choiceBtn");
				$(this).addClass("choiceBtn");
// 				var oldHtml;
				$(".tabPageBar ul li").each(function(){
					 
				     if($(this).hasClass("choiceBtnCcstyle")){
				     	$(this).html($(this).find(".choiceBtnCcstyle").text());
				     }else{
				    	 $(this).html($(this).text());
				     }
				  }) 
				$(".con_box").each(function(){
					if($(this).hasClass("choicebox")){
						$(this).removeClass("choicebox");
				}})
				$(".con_box:eq("+gi+")").addClass("choicebox");
				var newHtml='<div class="choiceBtnLcstyle"></div><div class="choiceBtnCcstyle">'+$(this).text()+'</div><div class="choiceBtnRcstyle"></div>'
			 	$(".choiceBtn").html(newHtml); 
			})
})(jQuery)
