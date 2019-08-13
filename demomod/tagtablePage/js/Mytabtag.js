/**
 * 自定义tabTag页签
 * @type tag
 * @data：2019-08-01
 * @author：xxp
 */  
require.config({
    paths : {
    	jquery : ["../../js/jquery-1.11.3"] ,
    	myPage : ["../../js/myPage"]
    }
})
 define(["jquery","myPage"],function($,myPage){ 
			 (function tabPagetagInit($){
						//var tabname =   //初始化选中标签tag默认样式； 
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
						 	
						 	switch (gi) {
								case 0:
									initShowData(gi+1+"");
									break;
								case 1:
									initShowData(gi+1+"");
									break;
								case 2:
									initShowData(gi+1+"");
									break;
							     default:
							     break;
							}
						})
			})(jQuery);
			initShowData("1");
	 		/*** -----------------------------------------------------------查询列表----------------------------------------------------------------- ***/
			function initShowData(showType){
		    	var classification = ""//$("#sel_Classification").val(); // 垃圾楼类别编号
		    	var ccsId =""// $("#sel_ccsInfo").val();                 // 垃圾楼编号
		    	var queryCondition = {"queryEntrydate": '2019-07-09',"classification":classification,"ccsId":ccsId}; // 查询条件
		    	var selShowType= showType ; //$(".tabPageBar ul .choiceBtn").attr("id"); // 显示数据类型 1。进料；2.出料；3.进出料对比
		    	if(selShowType == '1'){
		    		getDataAjax({url:"http://192.168.20.54:9011/ccsmanage/queryPageListCcsData",target:"jinLiaoPage",data:queryCondition,fn:queryJinLiao})
		    	}else if(selShowType == '2'){ // 出料 
		    		getDataAjax({url:"http://192.168.20.54:9011/ccsmanage/queryPageOutputWeighingData",target:"chuLiaoPage",data:queryCondition,fn:queryChuLiao})
	  	    	}else if(selShowType == '3'){ // 进出料对比
		    		getDataAjax({url:"http://192.168.20.54:9011/ccsmanage/queryPageListCompareData",target:"jinChuLiaoPage",data:queryCondition,fn:queryJinChuLiao})
		     	}else{
		    		alert("错误提示：未知的显示类型。");
		    	}
		    }
			
			function getDataAjax(obj){
				
				var url_=obj.url;
				if(url_!=null||url_!=""){
					$.ajax({ // 查询进料
		        		url : url_,
		        		dataType : "json",
		        		timeout : 3000,
		        		data : {
		        			currentPage : 1,
		        			pageSize : 10,
		        			condition : obj.data
		        		}, 
		        		type : "POST",
		        		async:true,
		        		dataType : "json",
		        		success : function(data){
		        			if (!$.isEmptyObject(data)) {
		        				var P2 = new myPage(obj.target);
		        				P2.initMathod({
		        					params: {elemId: '#'+obj.target,total:'0'},
		        					requestFunction: function () { 
		        						this.config.total = parseInt(data.totalSize);  
		        						//this.config.pageIndex = parseInt(data.currentPage);  
		        						(obj.fn)(this.config,  obj.data);
		        					}
		        				});	
		        				
		        			} else {
		        				Dialog.alert("没有获取到相关信息！");
		        			}
		        		},
		        		error:function(msg){
		        			var targetId=obj.target; 
				        	var P2 = new myPage(targetId);
							P2.initMathod({
								params: {elemId:'#'+obj.target,total:'1',pageSize:"1"},
								requestFunction: function () { 
									this.config.total =1;  
								}
							});
							
							switch (obj.fn){
								case queryJinLiao: 
									renderTBJinLIaoTr([]);
									break;
								case queryChuLiao: 
									renderTBChuLIaoTr([]);
									break;
								case queryJinChuLiao: 
									renderTBJinChuLIaoTr([]);
									break;
								default:
							     	break;
							}
							
		        		}
		        	});
				}else{
					var targetId=obj.target; 
			        	var P2 = new myPage(targetId);
						P2.initMathod({
							params: {elemId:'#'+obj.target,total:'0',pageSize:"1"},
							requestFunction: function () { 
								this.config.total =100;  
							}
						}); 
		        		
		    	} 
			} 
			
			
			// 查询进料列表
	function queryJinLiao(queryConf, qCondition){
		$.ajax({
			url : "http://192.168.20.54:9011/ccsmanage/queryPageListCcsData",
			dataType : "json",timeout : 3000,
			data : {
				currentPage : queryConf.pageIndex,
				pageSize : queryConf.pageSize,
				condition : qCondition
			}, 
			type : "POST",
			dataType : "json",
			success : function(data) {
				if (!$.isEmptyObject(data)) {
					renderTBJinLIaoTr(data.list);
				} else {
					Dialog.alert("没有获取到相关信息！");
				}
			},
			error:function(){
				renderTBJinLIaoTr([]);
			}
		});	
	}
    // 查询出料列表
	function queryChuLiao(queryConf, qCondition){
		$.ajax({
			url : "http://192.168.20.54:9011/ccsmanage/queryPageOutputWeighingData",
			dataType : "json",timeout : 3000,
			data : {
				currentPage : queryConf.pageIndex,
				pageSize : queryConf.pageSize,
				condition : qCondition
			}, 
			type : "POST",
			dataType : "json",
			success : function(data) {
				if (!$.isEmptyObject(data)) {
					renderTBChuLIaoTr(data.list);
				} else {
					Dialog.alert("没有获取到相关信息！"); 
				}
			},
			error:function(){
				renderTBChuLIaoTr([]);
			}
		});	
	}  
    
    // 查询进出料对比
	function queryJinChuLiao(queryConf, qCondition){
		$.ajax({
			url : "http://192.168.20.54:9011/ccsmanage/queryPageListCompareData",
			dataType : "json",timeout : 3000,
			data : {
				currentPage : queryConf.pageIndex,
				pageSize : queryConf.pageSize,
				condition : qCondition
			}, 
			type : "POST",
			dataType : "json",
			success : function(data) {
				if (!$.isEmptyObject(data)) {
					renderTBJinChuLIaoTr(data.list);
				} else {
					Dialog.alert("没有获取到相关信息！"); 
				}
			},
			error:function(){
				renderTBJinChuLIaoTr([]);
			}
		});	
	}  
	// 展示进料Tr
	function renderTBJinLIaoTr(list){
		var htmlStr = "";
		if(list.length > 0){
			$.each(list, function(i, item) {
				htmlStr +=  "<tr id=\""+item.id+"\">\r\n" + 
				"				<td style=\"width: 05%;\"><input type=\"checkbox\" value=\""+item.id+"\" name=\"checkAllA_child\"></td>\r\n" + 
				"				<td style=\"width: 08%;\">"+getCcsInfoNameById(item.ccsId)+"</td>\r\n" +  // 垃圾楼信息
				"				<td style=\"width: 06%;\">"+getCcsCarPlatenumberById(item.carId)+"</td>\r\n" +  // 车牌号
				"				<td style=\"width: 06%;\">"+getCcsCarIcNumberById(item.carId)+"</td>\r\n" +  // 车辆Ic卡号
				"				<td style=\"width: 10%;\">"+item.checkindate+"</td>\r\n" +  // 进场时间
				"				<td style=\"width: 08%;\">"+getCNameById(item.communityid)+"</td>\r\n" +  // 小区名称
				"				<td style=\"width: 07%;\">"+getTypeStr(item.wastetype)+"</td>\r\n" +  // 垃圾分类
				"				<td style=\"width: 10%;\">"+(item.collectdate != null ? item.collectdate : "-")   +"</td>\r\n" +  // 进场称重时间
				"				<td style=\"width: 06%;\">"+ (item.grossweight != null ? item.grossweight : "-")  +"</td>  \r\n" +  // 毛重
				"				<td style=\"width: 06%;\">"+ (item.tareweight != null ? item.tareweight : "-")  +"</td>  \r\n" +  // 皮重
				"				<td style=\"width: 06%;\">"+(item.netweight != null ? item.netweight : "-") +"</td>\r\n" +  // 净重(吨)
				"				<td style=\"width: 14%;\">"+(item.alarmMessage != null ? item.alarmMessage : "-")   +"</td>\r\n" +  // setAlarmMessage alarmMessage
				"				<td style=\"width: 08%;\"><a href=\"javascript:void(0)\">暂无</a></td>\r\n" +  // 没有数据
				"			 </tr>";
			});
		}else{
			htmlStr += "<tr class='tr_no_data_msg'><td colspan='13'>没有获取到相关数据信息</td></tr>";
		}
		$("#table_jinliao_body").html(htmlStr); 
	}
	// 展示出料Tr
	function renderTBChuLIaoTr(list){
		var htmlStr = "";
		if(list.length > 0){
			$.each(list, function(i, item) {
				console.log('-----------------------------------------------------');
				htmlStr +=  "<tr id=\""+item.id+"\">\r\n" + 
				"<td style=\"width: 05%;\"><input type=\"checkbox\" value=\""+item.id+"\" name=\"checkAllB_child\"></td>\r\n" + 
				"<td style=\"width: 16%;\">"+getCcsInfoNameById(item.ccsId)+"</td>\r\n" + 
				"<td style=\"width: 15%;\">"+(item.collectdate != null ? item.collectdate : "-")+"</td>\r\n" + 
				"<td style=\"width: 12%;\">"+(item.platenumber != null ? item.platenumber : "-")+"</td>\r\n" + 
				"<td style=\"width: 10%;\">"+getTypeStr(item.wastetype)+"</td>\r\n" + 
				"<td style=\"width: 10%;\">"+(item.grossweight != null ? item.grossweight : "-")+"</td>\r\n" + 
				"<td style=\"width: 10%;\">"+(item.tareweight != null ? item.tareweight : "-")+"</td>\r\n" + 
				"<td style=\"width: 10%;\">"+(item.netweight != null ? item.netweight : "-")+"</td>\r\n" + 
				"<td style=\"width: 12%;\">"+(item.alarmMessage != null ? item.alarmMessage : "-")   +"</td>\r\n" +   
				"</tr> "; 
			});
		}else{
			htmlStr += "<tr class='tr_no_data_msg'><td colspan='9'>没有获取到相关数据信息</td></tr>";
		}
		$("#table_chuliao_body").html(htmlStr); 
	}
	
	// 展示进出料对比Tr
	function renderTBJinChuLIaoTr(list){
		var htmlStr = "";
		if(list.length > 0){
			$.each(list, function(i, item) {
				console.log('---------------xxxxxxxxxxxxxxxx-----');
				htmlStr += "<tr>\r\n" + 
				"<td style=\"width: 10%;\">"+(item.ccsName != null ? item.ccsName : "-")+"</td>\r\n" + 
				"<td style=\"width: 10%;\">"+(item.entryNumber != null ? item.entryNumber : "-")+"</td>\r\n" + 
				"<td style=\"width: 06%;\">"+(item.entryTotalNetweight != null ? item.entryTotalNetweight : "-")+"</td>\r\n" + 
				"<td style=\"width: 06%;\">"+(item.outNumber != null ? item.outNumber : "-")+"</td>\r\n" + 
				"<td style=\"width: 06%;\">"+(item.outTotalNetweight != null ? item.outTotalNetweight : "-")+"</td>\r\n" + 
				"</tr>"; 
			});
		}else{
			htmlStr += "<tr class='tr_no_data_msg'><td colspan='5'>没有获取到相关数据信息</td></tr>";
		}
		$("#table_jinchuliao_body").html(htmlStr); 
	}
	var ccsInfoArr = []; //  垃圾楼
    var ccsCommunityArr = []; // 小区集合
    var ccsCarArr = []; // 车辆集合信息
	 function changeSelectAction(obj,type){
		if(type == '0'){
			var classification = obj.value;
        	// 级联类别下的垃圾楼数据列表
            $("#sel_ccsInfo").empty();
            $("#sel_ccsInfo").append("<option value=''>-请选择垃圾楼-</option>");
        	$.each(classList, function(i, item) {
         	    var ccsList = item.ccsList;
         	    if(item.id == classification){
         	    	for (var i = 0; i < ccsList.length; i++) {
     					var ccs = ccsList[i];
     					$("#sel_ccsInfo").append("<option value='"+ccs.id+"'>"+ccs.name+"</option>"); //为Select追加一个Option(下拉项) 
     				}	
         	    }
            });
		} 
		var selShowType = $(".tabPageBar ul .choiceBtn").attr("id"); // 显示数据类型 1。进料；2.出料；3.进出料对比
        // 进行数据查询 
        initShowData(selShowType); 
    }
	/**
	* type ：1标记进料；2标记出料
	 * 弹出标记页面
	 */
 	function toMarkInData(type){
		var cks ;
		if(type == '1'){ // 进料
			cks = document.getElementsByName("checkAllA_child");
		}else if(type == '2'){ // 出料
			cks = document.getElementsByName("checkAllB_child");
		}
		var tag = 0;
		var reconciliationids = "";
		for(var i=0;i<cks.length;i++){
			if(cks[i].checked == true){
				tag = 1;
			}
		}
		if(tag!=1 || reconciliationids=='on'){
			Dialog.alert("提示：请选择具体的记录！");
			return;
		} 

		 for(var i=0;i<cks.length;i++){
			if(cks[i].checked == true){
				reconciliationids += cks[i].value+',';
			}
		 }
         var diag = new Dialog();
         diag.Width = 720;
         diag.Height = 260;
         diag.Title = type == "1"? "进料标记": "出料标记";
         diag.URL = "<%=path%>/ccsInDataToMark.do";
         diag.OKEvent = function () {
          	 var childFram = diag.innerFrame.contentWindow.document;
    		 reconciliationids = childFram.getElementById("txt_reconciliationids").value;  
    		 var context = childFram.getElementById("txt_other_context").value;  
    		 var selMarkTypeObj = childFram.getElementById("sel_mark_type");
    		 // var markType = selMarkTypeObj.value; // 标记类型（可为空）
             if (context == undefined || context.trim() == "") {
                 Dialog.alert("标记内容不能为空！");
                 return;
             }
    		 var creater = "${sessionScope.loginUser.userId}";
    		 var pData = {
    				 "reconciliationids":reconciliationids,
    				 "context":context,
    				 "creator":creater  
    		 };
    	   	 $.ajax({
    	         url : "${ccsBaseUrl}/alarm/saveAlarm",  
    	         dataType : "json",timeout : 3000,
    	         type : "POST",
    	         async : false,
    	         data: pData,
    	         success : function(data) {
    	             if (!$.isEmptyObject(data)) {
    	            	 var list = data.list;
    	            	 var success = data.success;
    	            	 if(success){
    	            		 Dialog.alert("保存成功");
    	            		 // 修改报警信息
    	            		 changeInDataAlarmMsg(reconciliationids, context,type);
    	            	     diag.close();
    	            	 }else{
    	            		Dialog.alert(data.message);
    	            	 }
    	             } else {
    	            	Dialog.alert("操作异常！");
    	             }
    	         }
    	     });
         };
         diag.OnLoad = function () {
             // 初始化显示的值
             var childFram = diag.innerFrame.contentWindow.document;
             childFram.getElementById("txt_reconciliationids").value = reconciliationids;  
         };
         diag.CancelEvent = function () {
             diag.close();
         }
         diag.show();
         diag.okButton.value = "保存";
         diag.cancelButton.value = "取消"; 
 	 } 
 
	 /**
	 * 修改行数据的报警信息
	 */
	 function changeInDataAlarmMsg(ids, alarmMsg, type){
		 var idArr = ids.split(",");
		 for (var i = 0; i <idArr.length; i++){
			 if(idArr[i] == ""){
				 continue;
			 }
			 
			 if(type == '1'){
				 var cellAlarm = $("#"+idArr[i]).find("td").eq(11);
				 var oldTxt = cellAlarm.text();
				 cellAlarm.text(alarmMsg + "," +oldTxt).attr('title',alarmMsg + "," +oldTxt);
			 }else if(type == '2'){
				 var cellAlarm = $("#"+idArr[i]).find("td").eq(8);
				 var oldTxt = cellAlarm.text();
				 cellAlarm.text(alarmMsg + "," +oldTxt).attr('title',alarmMsg + "," +oldTxt);
			 }
			 
		 }
	 }  
    // 初始化垃圾楼分类列表
    function initClassification(){  
 	    $.ajax({
 	        url :  "${ccsBaseUrl}/queryCcsInfoClassification", 
 	        dataType : "json",timeout : 3000,
 	        type : "POST",
 	        async : false,
 	        success : function(data) {
 	            if (!$.isEmptyObject(data)) {
 	            	classList = data.classList;
                    $.each(classList, function(i, item) {
                    	$("#sel_Classification").append("<option value='"+item.id+"'>"+item.classificationName+"</option>"); //为Select追加一个Option(下拉项) 
                    });
 	            } else {
 	            	Dialog.alert("没有获取到消纳场相关数据！");
 	            }
 	        }
 	    });
    }
    
    // 初始化垃圾楼名字列表  
    function initCcsInfoDataList(){  
 	    $.ajax({
 	        url :  "${ccsBaseUrl}/queryCcsInfoList", 
 	        dataType : "json",timeout : 3000,
 	        type : "POST",
 	        async : false,
 	        success : function(data) {
 	            if (!$.isEmptyObject(data)) {
 	            	ccsInfoArr = data.list;
 	            } else {
 	            	console.log('-获取垃圾楼信息失败-'); 
 	            }
 	        }
 	    });
    }
    
    // 初始化小区Map数据
    function initCcsCommunity(){
 	    $.ajax({
 	        url :  "${ccsBaseUrl}/queryCommunityList", 
 	        dataType : "json",timeout : 3000,
 	        type : "POST",
 	        async : false,
 	        success : function(data) {
 	            if (!$.isEmptyObject(data)) {
 	            	ccsCommunityArr = data;
 	            } else {
 	            	console.log('-获取小区信息失败-'); 
 	            }
 	        }
 	    });    	
	}
    // 初始化车辆信息Map数据
    function initCarPlatenumber(){  
 	    $.ajax({ 
 	        url :  "${ccsBaseUrl}/queryCarPlatenumberList", 
 	        dataType : "json",timeout : 3000,
 	        type : "POST",
 	        async : false,
 	        success : function(data) {
 	            if (!$.isEmptyObject(data)) {
 	            	ccsCarArr = data.list;
 	            } else {
 	            	console.log('-获取小区信息失败-'); 
 	            }
 	        }
 	    });    	
	}
    /**
     * 获取查询参数
     */
    function GetJsonData() {
 		  var dpsId=$("#div_xnc .choiceBtn").attr("id"); 
 		  var today = currentDay();
          var json = {"dpsId":dpsId, "queryEntrydate": today};
          return json;
    }
    // 根据垃圾类型得到显示字符文字内容
    function getTypeStr(type){
    	if(type == '1'){
    		return '生活垃圾';
    	}else if(type == '2'){
    		return '建筑垃圾';
    	}else{
    		return '厨余垃圾';
    	}
    }
    // 根据小区的ID得到小区的名字
    function getCNameById(id){
    	for(var i= 0; i< ccsCommunityArr.length; i++){
    		var ccsCom  = ccsCommunityArr[i];
    		if(ccsCom.id  == id){
    			return ccsCom.cName;
    		}
    	}
    	return "-";
    }
    // 根据车辆ID得到车牌号
    function getCcsCarPlatenumberById(id){ 
    	for(var i= 0; i< ccsCarArr.length; i++){
    		var car  = ccsCarArr[i];
    		if(car.id  == id){
    			return car.platenumber; 
    		}
    	}
    	return "-";
    }
    
    // 根据车辆IC卡号
    function getCcsCarIcNumberById(id){ 
    	for(var i= 0; i< ccsCarArr.length; i++){
    		var car  = ccsCarArr[i];
    		if(car.id  == id){
    			return car.icnumber; 
    		}
    	}
    	return "-";
    }
    
    // 根据垃圾楼ID得到垃圾楼的名字
    function getCcsInfoNameById(id){  
    	for(var i= 0; i< ccsInfoArr.length; i++){
    		var ccsInfo  = ccsInfoArr[i];
    		if(ccsInfo.id  == id){
    			return ccsInfo.name; 
    		}
    	}
    	return "-";
    }
    
    
			
			
			
	} 
 )