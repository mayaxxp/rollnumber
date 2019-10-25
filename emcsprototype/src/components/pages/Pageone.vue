<template>
	<div id="top_mainpage_c"  class="centermainpage">
			<!--左侧部分-->
			<div id="pageleftpart" class="pageleftpart" >
				<!--左侧上部部分-->
				<div class="mapandTreePart"  >
					<!--左侧树列表容器部分-->
					<!--中部GIS容器部分-->
					<div id="mapPart"  class="mapPart"  >
						<div class="map_container">
							<div class="panel_Top">
								<span class="panel_TL"></span>
								<span class="panel_TC"><span></span>GIS信息</span>
								<span class="panel_TR"></span>
							</div>
							<div class="panel_content">
								<div class="main_container" >
									<div  class="main_containerCon">
										<!--<div id="map" class="mapCon" tabindex="0"  >
											
										</div>-->
										<Lightmap></Lightmap>
										<div id="myPageTop" class="mymapPageTop">
											<!--<input type="text" placeholder="请输入关键字进行搜索"  style="color:red;">-->
											<div class="glyphicon colorA glyphicon-stop">常规道路</div>
											<div class="glyphicon colorB glyphicon-stop">常规道路</div>
											<div class="glyphicon colorC glyphicon-stop">常规道路</div>
											<div class="glyphicon glyphicon-stop ">常规道路</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--左侧底部报警部分-->
				<div id="warning_c_t" class="warning_c_t"  >
					<!--报警信息容器-->
					<div id="tabledata" class="bottom_container">
							<div class="panel_Top">
								<span class="panel_TL"></span>
								<span class="panel_TC"><span></span>道路详细信息</span>
								<span class="panel_TR"><span class="b_toggleMin b_toggleMax"></span></span>
							</div>
							<div class="panel_content container">
								<div class="dateOform2 form-inline row table_container">
									<!--tab页签子容器-->
							     	<div  class="bkgd_tabPCons  clo-lg-12 col-md-12 col-sm-12 col-xs-12">
								     	<div class="choicebox table_container handnavbar  clo-lg-12 col-md-12 col-sm-12 col-xs-12" id="div_0" >

								     	</div>
							   		</div>
								</div>
							</div>
					</div>
				</div>
			</div>
			<!--右侧车辆信息部分-->
			<div id="vehicleInfo_c_t"  class="vehicleInfo_c_t"  >
				<div class="right_container">
						<div class="panel_Top">
							<span class="panel_TL"></span>
							<span class="panel_TC"><span style="margin-top:50px; margin-left:-5px"></span>道路查询信息</span>
							<span class="panel_TR"><span class="r_toggleMin r_toggleMax"></span></span>
						</div>
						<div class="panel_content" >
							<div class="main_container" id="vehicle_info" style="visibility:hidden;">
								 <!--道路详情-->
								 <div id="rightroadList" class="container-fluid">
									<div class="row searchfilterBar">
										<div class="col-lg-12">
											<input type="date" class="form-control form-inline" placeholder="请选择日期" autocomplete="off">
										</div>
										<div class="col-lg-12">
											<div class="input-group">
												<input type="text" class="form-control" aria-label="..." placeholder="请选择级别">
												<div class="input-group-btn">
													<button type="button" class="btn btn-default dropdown-toggle glyphicon glyphicon-triangle-bottom" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										        </button>
													<ul class="dropdown-menu dropdown-menu-right">
														<li>
															<a href="#">一级</a>
														</li>
														<li>
															<a href="#">二级</a>
														</li>
														<li role="separator" class="divider"></li>
														<li>
															<a href="#">应急路段</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="input-group">
												<input id="tipinput" type="text" class="form-control" placeholder="请输入道路名称">
												<span class="input-group-btn">
										        <button class="btn btn-default glyphicon glyphicon-search" type="button"></button>
										      </span>
											</div>
										</div>
									</div>
									<div class="row roadlist">

									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
</template>
<script>
import '@/assets/css/roadlist/roadlist.css'
import MapLoader from '@/plugins/AMap.js' 
import Lightmap from '@/components/homeparts/Lightmap'
export default {
  name: 'Pageone',
  props: {
    msg: String
  },
  components: {Lightmap},
  data(){
  	return {
		currentRoad:{
				"id":"null",
				"typely":"defaultRoad",
				"cnName":"未选定道路",
				"leaveT":"未选定道路",
				"datetime":"未选定道路",
				"total_CNun":NaN,
				"curr_CNun":NaN,
				"total_mileage":NaN,
				"travel_mileage":NaN,
				"nowork_mileage":NaN,
				"warning_mileage":NaN
			},
			arrAllroad:[],
			defaultRoad:[{
						"id":"null",
						"typely":"defaultRoad",
						"cnName":"无相关常规道路"
					}],
			emeR:[{
						"id":"null",
						"typely":"defaultRoad",
						"cnName":"无相关应急道路"
					}],
			rselected:"defaR",
			arrRselected:[]
		}
  	},
    mounted () {
     	this.init()
    },
	methods:{
		init: function (){
//	        let that = this
////	        let url_='http://webapi.amap.com/maps?v=1.4.8&key=5223b5cb275676fa965a09bef4122d4a&plugin=AMap.Autocomplete,AMap.Geocoder,AMap.GraspRoad,AMap.Driving'
//		    MapLoader().then(AMap => {
//		      console.log('地图加载成功')
//		      that.map = new AMap.Map('map', {
//  	        resizeEnable: true,
//		        center: [116.397428, 39.90923],
//		        zoom: 11
////		        ,mapStyle:'amap://styles/714229208e0479396726049852396268'
//		      })
//		    }, e => {
//		      console.log('地图加载失败' ,e)
//		    })

	  	},
	  	initdemoHW(w_,h_){
				var partR_W=parseInt($("#vehicleInfo_c_t").width());
				var partL_W=parseInt($("#treegroup_c_t").width());
				var partB_H=parseInt($("#warning_c_t").height());

				$("#pageleftpart").css({"width":(w_-partR_W-1)+"px"});
				$("#warning_c_t").css({"width":(w_-partR_W-1)+"px"});
				$("#warning_c_t").find(".panel_Top .panel_TC").css({"width":(w_-partR_W-1-16)+"px"});
				 $("#vehicleInfo_c_t").find(".panel_Top .panel_TC").css({"width":(partR_W-16)+"px"});
				$("#vehicleInfo_c_t").find(".panel_content").css({"height":(h_-25)+"px"});
				 $("#vehicle_info").css({"width":(partR_W-4)+"px"});

				 $("#warning_c_t").find(".panel_content").css({"height":(partB_H-25)+"px"});
				 $("#warning_c_t").find(".main_container").css({"width":(w_-partR_W-1-4)+"px"});

				$("#mapPart").css({"width":(w_-partR_W-2-partL_W)+"px","height":(h_-partB_H-1)+"px"})
				$("#mapPart").find(".panel_Top .panel_TC").css({"width":(w_-partR_W-2-16-partL_W)+"px"})
				$("#mapPart").find(".panel_content").css({"height":(h_-25-partB_H)+"px"})
				$("#mapPart").find(".main_container").css({"width":(w_-partR_W-4-partL_W)+"px"})
				$(".mapandTreePart").css({"height":(h_-partB_H-1)+"px"});
			},
		change_handler(bl){
					if(bl==this.rselected){return;}else{
						this.rselected=event.currentTarget.id;
					}
				},
				togglethisroad(){
					//切换当前点击道路是否存在于 显示 数组中
					var r=event.currentTarget.id;
					var arr=this.arrRselected;
					if(arr.length!=0){
						if(arr.indexOf(r)!= -1){
							arr=[]
							this.arrRselected=[]
							showRoadInfo(false);//打开底部详情
						}else{
							arr=[]
							this.arrRselected=[]
							var this_=this
							axios.get('road_aa_info.json',{params: {ID: r}}).then(function(response){
						      	  this_.arrRselected.push(r);
							      showroadout(r);//打开底部详情
						      }).catch(function (error) {
						      	// 请求失败处理
						        console.log(error);
						      });
						}
					}else if(arr.length==0){

						this.arrRselected.push(r);
						axios.get('road_aa_info.json',{params: {ID: r}})    //应post？
					    .then(function(response){
						      	showroadout(r);//打开底部详情
					      	})
					    .catch(function (error) {
					      	// 请求失败处理
					        console.log(error);
					     });
					}
					console.log("ca");
				},
				returnClass(id){
					//  返回 列表中  道路 按钮 的 class  样式；
					var class_=['col-lg-12','btn','btn-default','glyphicon','glyphicon-eye-close',{'glyphicon-eye-open':((this.arrRselected.indexOf(id)!=-1)?1:0)}]
					return class_;
				}
			},
			computed:{
					getdefaultR(){
						var arr=[];
					 	var allroad=this.arrAllroad;
						for(i=0;i<allroad.length;i++){
							var its=allroad[i];
							if(its.typely==="defaultRoad"){
								arr.push(allroad[i]);
							}
						}
						this.defaultRoad=arr
						return arr;
					},
					getemeR(){
						var arr=[];
					 	var allroad=this.arrAllroad;
						for(i=0;i<allroad.length;i++){
							var its=allroad[i];
							if(its.typely==="emeRoad"){
								arr.push(allroad[i]);
							}
						}
						this.emeR=arr
						return arr;
					}
			}
}
</script>

<style>
	.centermainpage{position: absolute;
	    width: calc(100% - 180px);width: -moz-calc(100% - 180px);width:-webkit-calc(100% - 180px);
	    left: 180px;
	    height: calc(100% - 94px);height: -moz-calc(100% - 94px);height:-webkit-calc(100% - 94px);
	    top: 94px;
	    background: rgb(33, 68, 169);
	    overflow: hidden;}
	.pageleftpart{position: relative;float:left;width:95%; width: calc(100% - 31px);width:-webkit-calc(100% - 31px);width: -moz-calc(100% - 31px); height: 100%;margin-right: 1px;}
	.mapandTreePart{position:relative;float:left;height:95%;height:calc(100% - 25px);height:-webkit-calc(100% - 25px);height:-moz-calc(100% - 25px); margin-bottom:1px;width:100%;}
	.mapPart{position: relative;float:left; height:100%; margin-left:1px;width:99.8%;width:calc(100% - 1px);width:-webkit-calc(100% - 1px);width: -moz-calc(100% - 1px);	}
	.map_container,.right_container,.bottom_container,.leftTree_container{width:100%;height:100%;float:left;height: inherit; left:2px;background:#0f88ca; border-radius: 5px;overflow: hidden;}
			.main_container{ width:90%;width:calc(100% - 4px);width: -webkit-calc(100% - 4px);width: -moz-calc(100% - 4px);height:100%;height:calc(100% - 4px);width: -webkit-calc(100% - 4px);width: -moz-calc(100% - 4px);background: white;margin-left: auto;margin-right: auto;}
			.main_containerCon{width:100%;height:100%;float:left;padding:5px;border:0px dotted #ff0000;margin:0px;background:#ffffff;}
			.vehicleInfo_c_t{position: relative;float:right;width:30px; height: 100%;}
			.warning_c_t{bottom: 0px;float:left;height:24px; width:100%;}

			.mapCon{width:100%;height:100%; min-width:90%;min-height:90%;text-align:center;}
			.mymapPageTop{position: absolute;    bottom: 12px;    right: 10px;    height: 135px; padding-top: 8px; width: 105px;    background:rgba(255, 255, 255, 0.8);    border-radius: 0px;    box-shadow: 0px 0px 5px rgba(0,0,0,.1);border-top-left-radius: 5px;}
    		.mymapPageTop>.glyphicon{padding: 3px 10px;position: relative;margin: 5px auto;letter-spacing: .1em;}
    		.mymapPageTop>.glyphicon:before{color: red;margin-right:5px;}
    		.mymapPageTop>.colorA:before{color: blue;margin-right:5px;}
    		.mymapPageTop>.colorB:before{color: limegreen;margin-right:5px;}
    		.mymapPageTop>.colorC:before{color: orange;margin-right:5px;}
			.panel_Top{width:100%;height:32px;}
			.panel_Top span{position: relative;float: left;display: inline-block;height:inherit;}
			.panel_Top .panel_TL{background: url(../../assets/images/roadlist/img/panel_Top_i.png) 0px 0px; width: 8px; height:32px;}
			.panel_Top .panel_TC{background: url(../../assets/images/roadlist/img/panel_Top_i.png) 0px -41px repeat-x;line-height:32px;white-space:normal; font-weight:600;position: relative;float: left;height:32px;width:90%; width: calc(100% - 16px);width: -webkit-calc(100% - 16px);width: -moz-calc(100% - 16px);  color: #fff;font-size:14px;letter-spacing:2px;}
			.panel_Top .panel_TC span{background: url(../../assets/images/roadlist/img/t_map_gis.png) no-repeat;margin-right:10px; background-position-y: 5px;display: inline-block;height:32px;width: 24px;line-height: 32px;}
			.panel_Top .panel_TR{background: url(../../assets/images/roadlist/img/panel_Top_i.png) 0px -82px no-repeat;;width: 8px; height: 32px;}
			.panel_content{width: 100%; height:90%;height:calc( 100% - 32px);height: -webkit-calc(100% - 32px);height: -moz-calc(100% - 32px);margin-left: auto;margin-right: auto;}

			/*右侧收缩按钮*/
			.panel_Top .panel_TR .r_toggleMin{background: url(../../assets/images/roadlist/img/t_r_minOrmax10_13.png) no-repeat;margin-left: -10px;margin-top: 8px; background-position-y:-13px;;display: inline-block;height:13px;width: 10px;line-height: 32px;}
			.panel_Top .panel_TR .r_toggleMin:hover{background-position-y:-0px;}
			.panel_Top .panel_TR .r_toggleMin:active{background-position-y:-26px;}
			.panel_Top .panel_TR .r_toggleMax{background: url(../../assets/images/roadlist/img/t_r_minOrmax10_13.png) no-repeat;margin-left: -10px;margin-top:8px; background-position-y:-52px;;display: inline-block;height:13px;width: 10px;line-height: 32px;}
			.panel_Top .panel_TR .r_toggleMax:hover{background-position-y:-39px;}
			.panel_Top .panel_TR .r_toggleMax:active{background-position-y:-65px;}
			 #vehicle_info{overflow-y:hidden;}
			/* 左侧树列表的收缩按钮样式 */
			.panel_Top .panel_TR .l_toggleMin{background: url(../../assets/images/roadlist/img/t_l_minOrmax10_13.png) no-repeat;margin-left: -10px;margin-top: 8px; background-position-y:-52px;;display: inline-block;height:13px;width: 10px;line-height: 32px;}
			.panel_Top .panel_TR .l_toggleMin:hover{background-position-y:-39px;}
			.panel_Top .panel_TR .l_toggleMin:active{background-position-y:-65px;}
			.panel_Top .panel_TR .l_toggleMax{background: url(../../assets/images/roadlist/img/t_l_minOrmax10_13.png) no-repeat;margin-left: -10px;margin-top:8px; background-position-y:-13px;;display: inline-block;height:13px;width: 10px;line-height: 32px;}
			.panel_Top .panel_TR .l_toggleMax:hover{background-position-y:-0px;}
			.panel_Top .panel_TR .l_toggleMax:active{background-position-y:-26px;}
			.leftTree_container .panel_Top .panel_TC span{background: url(../../assets/images/roadlist/img/t_group_listTree.png) no-repeat;margin-right:10px; background-position-y: 5px;}
			.leftTree_container,
			.leftTree_container .panel_Top .panel_TL,
			.leftTree_container .panel_Top .panel_TC,
			.leftTree_container .panel_Top .panel_TR{background:#faffe2 !important;color: #333;}
			#treegroup_c_t .main_container{background:#faffe2 !important;}
			/* 底部报警的收缩按钮样式 */
			.panel_Top .panel_TR .b_toggleMin{background: url(../../assets/images/roadlist/img/t_b_minOrmax10_13.png) no-repeat;margin-left: -13px;margin-top: 8px; background-position-y:-13px;;display: inline-block;height:13px;width: 13px;line-height: 32px;}
			.panel_Top .panel_TR .b_toggleMin:hover{background-position-y:-0px;}
			.panel_Top .panel_TR .b_toggleMin:active{background-position-y:-26px;}
			.panel_Top .panel_TR .b_toggleMax{background: url(../../assets/images/roadlist/img/t_b_minOrmax10_13.png) no-repeat;margin-left: -13px;margin-top: 8px; background-position-y:-52px;;display: inline-block;height:13px;width: 13px;line-height: 32px;}
			.panel_Top .panel_TR .b_toggleMax:hover{background-position-y:-39px;}
			.panel_Top .panel_TR .b_toggleMax:active{background-position-y:-65px;}

			/*右侧车辆表格*/
			#r_table_a td{padding: 5px;text-align: center;vertical-align: middle;line-height:20px;height:20px;min-height:20px;border: 1px #dddddd solid;border-bottom-color:#DDDDDD;border-top-color:#ffffff;border-left-color:#dddddd;vertical-align: top;align-items: center;border-collapse:separate;}
			#r_table_a{width:90%;width: calc(100% - 10px); width: -webkit-calc(100% - 10px);width: -moz-calc(100% - 10px);  font-size: 12px;letter-spacing:1px;margin-top:5px;margin-left: auto; margin-right:auto; height: 117px;border-width: 1px;border-style:solid;border-bottom-color:#DDDDDD;border-top-color:#DDDDDD;border-left-color:#dddddd;border-right-color:#dddddd;vertical-align: top;align-items: center;border-collapse:separate;}
			#r_table_b td{padding: 5px;;text-align: center;vertical-align: middle;line-height: 24px;height: 24px;min-height:24px;border: 1px #dddddd solid;border-bottom-color:#DDDDDD;border-top-color:#ffffff;border-left-color:#ffffff;border-right-color:#dddddd;vertical-align: top;align-items: center;border-collapse:separate;}
			#r_table_b{width:90%;width: calc(100% - 10px);width: -webkit-calc(100% - 10px);width: -moz-calc(100% - 10px); font-size: 12px;letter-spacing:1px;margin-top:5px;margin-left: auto; margin-right:auto; height: 247px;border-width: 1px;border-style:solid;border-bottom-color:#DDDDDD;border-top-color:#DDDDDD;border-left-color:#dddddd;border-right-color:#dddddd;vertical-align: top;align-items: center;border-collapse:separate;}
			.td_title_color{background: #f5f6fb;vertical-align: middle;}
			.td_value_color{color: #267bef;}

		 	.panel_Top{height:24px;}
			.panel_content{height:90%;height:calc( 100% - 24px);height:-webkit-calc(100% - 24px);height: -moz-calc(100% - 24px); }
			.panel_Top .panel_TL{height:24px;}
			.panel_Top .panel_TC span{height:24px;background-position-y:2px;}
			.panel_Top .panel_TC{height:24px;line-height: 24px;}
			.panel_Top .panel_TR{height:24px;}
			.panel_Top .panel_TR .b_toggleMax{margin-top: 5px;}
			.panel_Top .panel_TR .b_toggleMin{margin-top: 5px;}
			.panel_Top .panel_TR .r_toggleMin{margin-top: 5px;}

		 	#vehicleInfo_c_t .panel_Top .panel_TC{width: 14px;}
		 	.right_container .panel_Top .panel_TC span,.bottom_container .panel_Top .panel_TC span{background: require(../../assets/images/roadlist/img/t_roadInfo.png) no-repeat;top: 3px;}

			.bkgd_tabPCons{
				width: 99% !important;
			    margin: 0 .5% 0 !important;
			    padding: 0;
			    height: 100%;
			    position: relative;
			    top: 0px;
			    left: 0px;
			    border: 1px solid #cccccc;
			    background: #ffffff;
			    border-top-width: 0px;
			    border-radius: 0 0 5px 5px;
			}
			.choicebox.handnavbar {
			    padding-top: 0px;
			}
			.choicebox {
			    display: block;
			    padding: 5px;
			    width: 100%;
			    width: calc( 100% - 0px );
			    width: -webkit-calc( 100% - 0px );
			    width: -moz-calc( 100% - 0px );
			    height: 90%;
			    height: calc( 100% - 28px);
			    height: -webkit-calc( 100% - 28px);
			    height: -moz-calc( 100% - 28px);
			    overflow: hidden;
			    overflow-y: scroll;
			}
			.table_container {
			    height: 100%;
			    /*height: calc(100% - 61px);
			    height: -moz-calc(100% - 61px);
			    height: -webkit-calc(100% - 61px);*/
			}

			table.tablesorter {
			    margin-bottom: 0px;
			    text-align: center;
			    width: 100%;
			    background: #e8e8e8;
			}
			.table_container table.tablesorter thead tr {

			}
			.table_container table thead tr {
			    line-height: 35px;
			    height: 35px;
			}
			.table_container table.tablesorter thead tr th{
			    border-right: 1px solid #d2cfcf;
			    border-bottom: 1px solid #d2cfcf;
			}
			.table_container table.tablesorter tbody tr td{
			    border-left: none;
			    border-right: 1px solid #e6e6e6;
			    border-bottom: 1px solid #e6e6e6;
			    background: none;
			    text-overflow: ellipsis;
			    overflow: hidden;
			    white-space: nowrap;
			    max-width: 152px;
			}
			.table_container table.tablesorter thead tr th:first-child,.table_container table.tablesorter tbody tr td:first-child{
				border-left: 1px solid #d2cfcf;
			}
			.table_container table.tablesorter tr th, .table_container table.tablesorter tr td {
			    height: 100%;
			}
			table th, table td {
			    text-align: center;
			    cursor: pointer;
			}
			.table_container table.tablesorter tbody tr:nth-child(odd) {
			    background: #ffffff;
			}
			.table_container table.tablesorter tbody tr, .table_container table.tablesorter tbody tr td {
			    height: 28px;
			    max-height: 28px;
			}
</style>
