<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%  String path = request.getContextPath(); %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>实时接入数据展示</title>
<script type="text/javascript">
	var path = "<%=path%>";
</script>
<link href="<%=path %>/css/pageMain/common.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="<%=path %>/css/theme.css">
<link href="<%=path %>/css/pageMain/addUIstyle.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="<%=path %>/plugin/tablesort/style.css">
<link rel="stylesheet" type="text/css" href="<%=path %>/js/datetimepicker/bootstrap/css/bootstrap.min.css"> 
<link rel="stylesheet" type="text/css" href="<%=path%>/common/css/bMap4Tab.css"/>
<link rel="stylesheet" type="text/css" href="<%=path%>/css/uitabtagM.css"/>
<style type="text/css">
	 *{margin:0;padding:0;box-sizing: border-box;} 
	 .tr_no_data_msg td{
		text-align: center;
		/* display: table-cell;*/
		color:red;
	}   
	body>.container{top: 35px;    position: absolute;    width: 100%;    height: calc( 100% - 35px);	}
	body>.container>.row{margin:0;}
	.glyphicon-link{height: 32px; width: 15px; display: inline-block; line-height: 32px;}
	.bkgd_tabPagetag{position:relative;width:99% !important; margin:0 .5% 0 !important;top:0;left:0;}
	.bkgd_tabPCons{width:99% !important;height: calc( 100% - 40px);;margin:0 .5% 0 !important;padding:0;}
	.row.centerMainCont{height: calc( 100% - 39px);}
	 
	.row.centerMainCont>.bkgd_tabPagetag{height: 34px;padding: 0;}
	.tbottom{width:calc( .99 * ( 100% - 30px) );right: .5%;    left: .5%;  }
	.dropdown{display: inline-block;height: 40px;min-width: 170px;padding-top:2px;}
	.dropdown>button{width:100%;}
	.btngroup>button{display: inline-block; padding-bottom: 18px;  height: 27px;    top: 4px;    color: #fff; line-height: .8em;   text-shadow: 1px 1px 0 rgba(0,0,0,.2);}
	.btngroup>button:before {margin-right:5px;}
	
	/* .table_container table{display:block;    height: inherit;    overflow-y: auto;}
	.table_container table thead{display:inline-table;width: 100%;;text-align: center;}
	.table_container table tbody{display:inline-table;width: 100%;;text-align: center;}
	.table_container table tfoot{display:inline-table;width: 100%;text-align: center;} */
	.choicebox.handnavbar{padding-top:36px}
	.choicebox.handnavbar .handnavbarBox{ width: calc( .99 * ( 100% - 30px) );  margin-left:-.5%;margin-top: -36px;;background:#f5f5f5;height:36px;position:fixed;border: 1px solid #cccccc;border-top:none;}
	
	.table_container table{text-align: center;}
	table.tablesorter{margin-bottom:0px;}
/* page */
.page{
	
}
.page ul{
	padding:0;
	min-width: 450px;
}
.page ul::after{
	content: '';
	display: block;
	clear: both;
}
.page ul li{
	float: left;
	width:auto;
	min-width:32px;
	height: 30px;
	line-height:30px;
	list-style: none;
}
.page a{
	color:#aaa;
	font-family: "微软雅黑";
	padding:0 10px;
	text-decoration: none;
	display: block;
	text-align: center;
	border: 1px solid #ccc;
	border-left: none;
}
.page ul li:first-child a{
	border-left: 1px solid #ccc;
}

.page ul li a:hover{
	background-color: dodgerblue;
}
.page ul li a:hover{
	color: white;
}
.page .disabled a:hover{
	background-color: white;
	cursor:not-allowed;
	color: #aaa;
}
.page .active a{
	background-color: dodgerblue;
	color: white;
}
.btn-info.btn-sm{letter-spacing: .2em;    margin: 3px;    margin-left: 10px;}
</style>
<script src="<%=path %>/js/respond.js" type="text/javascript"></script>
<script src="<%=path %>/js/dateUtil.js" type="text/javascript"></script>
<script src="<%=path %>/plugin/jquery-1.11.3/jquery.min.js" type="text/javascript"></script>
<script src="<%=path %>/plugin/bootstrap/js/bootstrap.min.js" ></script>
<script src="<%=path %>/js/ws/sockjs.min.js" type="text/javascript"></script>
<script src="<%=path %>/js/ws/stomp.min.js" type="text/javascript"></script>
 
<script src="<%=path%>/js/pagination/jquery.pagination.js" type="text/javascript"></script>
<script type="text/javascript" src="<%=path %>/js/zcms/zDrag.js"></script>
<script type="text/javascript" src="<%=path %>/js/zcms/zDialog.js"></script>
<script type="text/javascript" src="<%=path %>/js/zcms/helpOperation.js"></script>
<script type="text/javascript">
//    var dicList = {};//字典map  
//    var storage = window.sessionStorage;
    var ccsInfoArr = []; //  垃圾楼
    var ccsCommunityArr = []; // 小区集合
    var ccsCarArr = []; // 车辆集合信息
    $(document).ready(function() {
    	initClassification(); // 初始化类别和，类别下面的垃圾楼
    	initCcsInfoDataList();
    	initCcsCommunity(); // 初始化小区 key：id；value：name
    	
    	initShowData('1'); //   显示数据
    	
    	// 绑定全选按钮事件
        var $selectAllA = $("#checkAllA");  // 获得上面的复选框  
        $selectAllA.click(function() {
        	$(":checkbox[name='checkAllA_child']").prop("checked", this.checked); // this指代的你当前选择的这个元素的JS对象
        });
    	
        var $selectAllB = $("#checkAllB");  // 获得上面的复选框  
        $selectAllB.click(function() {
        	$(":checkbox[name='checkAllB_child']").prop("checked", this.checked); // this指代的你当前选择的这个元素的JS对象
        });
    });
    /*** -----------------------------------------------------------查询列表----------------------------------------------------------------- ***/
	function initShowData(showType){
    	var classification = $("#sel_Classification").val(); // 垃圾楼类别编号
    	var ccsId = $("#sel_ccsInfo").val();                 // 垃圾楼编号
    	var queryCondition = {"queryEntrydate": '2019-07-09',"classification":classification,"ccsId":ccsId}; // 查询条件
    	var selShowType= showType ; //$(".tabPageBar ul .choiceBtn").attr("id"); // 显示数据类型 1。进料；2.出料；3.进出料对比
    	if(selShowType == '1'){
        	$.ajax({ // 查询进料
        		url : "${ccsBaseUrl}/queryPageListCcsData",
        		dataType : "json",
        		data : {
        			currentPage : 1,
        			pageSize : 10,
        			condition : queryCondition
        		}, 
        		type : "POST",
        		dataType : "json",
        		success : function(data) {
        			console.log(data);
        			if (!$.isEmptyObject(data)) {
        				var P2 = new Page('jinLiaoPage');
        				P2.initMathod({
        					params: {elemId: '#jinLiaoPage',total:'0'},
        					requestFunction: function () { 
        						this.config.total = parseInt(data.totalSize);  
        						//this.config.pageIndex = parseInt(data.currentPage);  
        						queryJinLiao(this.config, queryCondition);
        					}
        				});	
        			} else {
        				Dialog.alert("没有获取到相关信息！");
        			}
        		}
        	});
    	}else if(selShowType == '2'){ // 出料
    		//alert("刷新出料数据");
        	$.ajax({ // 查询进料
        		url : "${ccsBaseUrl}/queryPageOutputWeighingData",
        		dataType : "json",
        		data : {
        			currentPage : 1,
        			pageSize : 10,
        			condition : queryCondition
        		}, 
        		type : "POST",
        		dataType : "json",
        		success : function(data) {
        			console.log(data);
        			if (!$.isEmptyObject(data)) {
        				var P2 = new Page('chuLiaoPage');
        				P2.initMathod({
        					params: {elemId: '#chuLiaoPage',total:'0'},
        					requestFunction: function () { 
        						this.config.total = parseInt(data.totalSize);  
        						//this.config.pageIndex = parseInt(data.currentPage);  
        						queryChuLiao(this.config, queryCondition);
        					}
        				});	
        			} else {
        				Dialog.alert("没有获取到相关信息！");
        			}
        		}
        	});
    	
    	
    	}else if(selShowType == '3'){ // 进出料对比
    		//alert("刷新进出料对比");
        	$.ajax({ // 查询进料
        		url : "${ccsBaseUrl}/queryPageListCompareData",
        		dataType : "json",
        		data : {
        			currentPage : 1,
        			pageSize : 10,
        			condition : queryCondition
        		}, 
        		type : "POST",
        		dataType : "json",
        		success : function(data) {
        			console.log(data);
        			if (!$.isEmptyObject(data)) {
        				var P2 = new Page('jinChuLiaoPage');
        				P2.initMathod({
        					params: {elemId: '#jinChuLiaoPage',total:'0'},
        					requestFunction: function () { 
        						this.config.total = parseInt(data.totalSize);  
        						//this.config.pageIndex = parseInt(data.currentPage);  
        						queryJinChuLiao(this.config, queryCondition);
        					}
        				});	
        			} else {
        				Dialog.alert("没有获取到相关信息！");
        			}
        		}
        	});
    	}else{
    		alert("错误提示：未知的显示类型。");
    	}
    }
    // 查询进料列表
	function queryJinLiao(queryConf, qCondition){
		$.ajax({
			url : "${ccsBaseUrl}/queryPageListCcsData",
			dataType : "json",
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
			}
		});	
	}
    // 查询出料列表
	function queryChuLiao(queryConf, qCondition){
		$.ajax({
			url : "${ccsBaseUrl}/queryPageOutputWeighingData",
			dataType : "json",
			data : {
				currentPage : queryConf.pageIndex,
				pageSize : queryConf.pageSize,
				condition : qCondition
			}, 
			type : "POST",
			dataType : "json",
			success : function(data) {
				if (!$.isEmptyObject(data)) {
					console.log(data);
					renderTBChuLIaoTr(data.list);
				} else {
					Dialog.alert("没有获取到相关信息！");
				}
			}
		});	
	}  
    
    // 查询进出料对比
	function queryJinChuLiao(queryConf, qCondition){
		$.ajax({
			url : "${ccsBaseUrl}/queryPageListCompareData",
			dataType : "json",
			data : {
				currentPage : queryConf.pageIndex,
				pageSize : queryConf.pageSize,
				condition : qCondition
			}, 
			type : "POST",
			dataType : "json",
			success : function(data) {
				if (!$.isEmptyObject(data)) {
					console.log(data);
					renderTBJinChuLIaoTr(data.list);
				} else {
					Dialog.alert("没有获取到相关信息！");
				}
			}
		});	
	}  
	// 展示进料Tr
	function renderTBJinLIaoTr(list){
		var htmlStr = "";
		if(list.length > 0){
			$.each(list, function(i, item) {
				console.log(item);
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
			htmlStr += "<tr class='tr_no_data_msg'><td colspan='10'>没有获取到相关数据信息</td></tr>";
		}
		$("#table_jinliao_body").html(htmlStr); 
	}
	// 展示出料Tr
	function renderTBChuLIaoTr(list){
		var htmlStr = "";
		if(list.length > 0){
			$.each(list, function(i, item) {
				console.log(item);
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
			htmlStr += "<tr class='tr_no_data_msg'><td colspan='8'>没有获取到相关数据信息</td></tr>";
		}
		$("#table_chuliao_body").html(htmlStr); 
	}
	
	// 展示进出料对比Tr
	function renderTBJinChuLIaoTr(list){
		var htmlStr = "";
		if(list.length > 0){
			$.each(list, function(i, item) {
				console.log(item);
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
    /*******************************  切换标签部分> 结束 *****************************************/
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
    	         dataType : "json",
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
 	        dataType : "json",
 	        type : "POST",
 	        async : false,
 	        success : function(data) {
 	            if (!$.isEmptyObject(data)) {
 	            	classList = data.classList;
                    $.each(classList, function(i, item) {
                    	console.log(item);
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
 	        dataType : "json",
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
 	        dataType : "json",
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
 	        dataType : "json",
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
 
    
</script>
</head>
<body style="background-color: #f8f8f8;">  
	<div class="moku pathTitle">
		<div class="mianbaox">
			<span>密闭式清洁站<span>></span>实时数据展示</span>
		</div>
	</div>
	<div  class="container" >
		<div class="row topSearchBar">
			<div class="clo-lg-12 col-md-12 col-sm-12 col-md-xs ">
				<div class="dropdown">
					<select class="form-control" id="sel_Classification" onchange="changeSelectAction(this,'0')">
	 					<option value=""> -请选择类别-</option>
					</select>
				</div>
				<span class="glyphicon glyphicon-link"></span>
				<div class="dropdown">
					<select class="form-control" id="sel_ccsInfo" onchange="changeSelectAction(this,'1')"> 
	 					<option value=""> -请选择垃圾楼-</option>
					</select>
				</div>
			</div>
		</div>
		<div class="row centerMainCont" >
			<div class="bkgd_tabPagetag clo-lg-12 col-md-12 col-sm-12 col-md-xs">
				<!--tab页签start-->
					<div  class="tabPageBar" >
			     		<div class="leftbtn_tabBar" ><i class="displayNone"></i></div>
			     		<ul>
					     	<li class="choiceBtn" id="1" onclick="initShowData('1')">进料</li>
					     	<li id="2" onclick="initShowData('2')">出料</li>
					     	<li id="3" onclick="initShowData('3')">进出料对比</li>
				     	</ul>
			     		<div class="rightbtn_tabBar"><i class="displayNone"></i></div>
			     	</div>
		     	<!--tab页签End--> 		
			</div>
			<!--tab页签子容器-->
	     	<div class="bkgd_tabPCons  clo-lg-12 col-md-12 col-sm-12 col-xs-12"> 
	     		
		     	<div class="con_box choicebox table_container handnavbar  clo-lg-12 col-md-12 col-sm-12 col-xs-12" id="div_0" >
		     	    <div class="handnavbarBox" ><input type="button" class="btn btn-info btn-sm" value="标记"  onclick="toMarkInData('1')"></div>
					<table id="table_container" class="tablesorter">
						<thead>
							<tr class="taitou">
								<th  ><input type="checkbox" id="checkAllA" name="checkAllA" /></th>
								<th  >垃圾楼</th>
								<th  >车牌号</th>
								<th  >IC卡号</th>
								<th  >进场时间</th>
								<th  >垃圾来源</th>
								<th  >垃圾分类</th>
								<th  >称重时间</th>
								<th  >毛重</th>  
								<th  >皮重</th>  
								<th  >净重(吨)</th>
								<th  >报警</th> 
								<th  >附件</th> 
							</tr>
						</thead>
						<tbody id="table_jinliao_body">
							<%-- js动态添加内容 --%>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="13">
									<div class="tbottom"  >
										<div class="page" id="jinLiaoPage"></div>
									</div>
								</td>
							</tr>
						</tfoot>
					</table>
		     	</div> 
	     		<div class="con_box table_container handnavbar clo-lg-12 col-md-12 col-sm-12 col-xs-12"  id="div_1" >
					<div  class="handnavbarBox" ><input type="button"  class="btn btn-info btn-sm"  value="标记" onclick="toMarkInData('2')"></div>
					<table id="table_container2" class="tablesorter">
						<thead>
							<tr class="taitou">
								<th style="width: 05%;"><input type="checkbox" id="checkAllB" name="checkAllB"></th>
								<th style="width: 16%;">垃圾楼</th> 
								<th style="width: 15%;">称重时间</th> 
								<th style="width: 12%;">车牌号</th>
								<th style="width: 10%;">垃圾分类</th>
								<th style="width: 10%;">毛重(吨)</th>
								<th style="width: 10%;">皮重(吨)</th>
								<th style="width: 10%;">净重(吨)</th>
								<th style="width: 12%;">报警</th>
							</tr>
						</thead>
						<tbody id="table_chuliao_body"> 
							<%-- js动态添加内容 --%>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="7">
									<div class="tbottom"  >
										<div class="page" id="chuLiaoPage"></div>
									</div>
								</td>
							</tr>
						</tfoot>
					</table>
			     </div>
			     <!-- 第三个div 进出料总量对比 -->
	     		<div class="con_box table_container  clo-lg-12 col-md-12 col-sm-12 col-xs-12" id="div_2" >
					<table id="table_container3" class="tablesorter">
						<thead>
							<tr class="taitou">
							<!-- <th style="width: 05%;"><input type="checkbox"  id="checkAllC" name="checkAllC" /></th>
							 -->
								<th style="width: 20%;">垃圾楼</th>
								<th style="width: 20%;">进场车次</th>
								<th style="width: 20%;">进料称重总量（吨）</th>
								<th style="width: 20%;">出料车次</th>
								<th style="width: 20%;">出料称重总量（吨）</th>
							</tr>
						</thead>
						<tbody id="table_jinchuliao_body"> 
						<%--
							<tr class="taitou">
								<td style="width:5%;"><input type="checkbox" name="checkAllC_child" /></td>
								<td style="width:17px;;">业务标识</td>
								<td style="width: 18%;">垃圾来源</td>
								<td style="width: 15%;">称重时间</td>
								<td style="width: 8%;">垃圾分类</td>
								<td style="width: 07%;">进场车次</td>
								<td style="width: 09%;">进料称重总量（吨）</td>  
								<td style="width: 09%;">出场车次</td>  
								<td style="width: 12%;">出料称重总量（吨）</td>  
							</tr> 
						 --%>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="5">
									<div class="tbottom"  >
										<div class="page" id="jinChuLiaoPage" ></div>   
									</div>
								</td>
							</tr>
						</tfoot>
					</table>
			    </div>
	   		</div>  
		</div>
		<div id="response" class="row" style="position: absolute;    color: red;    display: flex;    font-size: 36px;    justify-content: center;    align-content: center; display:none;    align-items: center;    text-align: center;    padding: 20px; z-index:2000;width: 100%; height: 100%;">
		</div>
	</div>
<script type="text/javascript" src="<%=path %>/ccs/js/Mytabtag.js"></script>
<script type="text/javascript" src="<%=path %>/ccs/js/pager/MyPage.js"></script>

</body>
</html>
<%--
				  // 添加一个垃圾楼字段列和Ic卡号列
				  // 进料是ccs_data，出料是output_weighing
				  // 进出料对比就是上面的两个的对比
 --%>
