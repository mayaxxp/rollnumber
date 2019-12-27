<template>
	<div class="firstPage">
		<Darkmap   ref="ibmap"></Darkmap>
		<div class="f_top_banner">
			<div class="f_top_banner_lContiner">
				<div id="portMenuBar" class="portMenuBar">
					<div class="portMenuBar_a"></div> 
					<div class="portMenuBar_b">
						<div class="portMenuBar_ba"></div>
						<div class="portMenuBar_bb"></div>
					</div>
				</div>
			</div>

			<div class="f_top_banner_rContiner">
				<div class="f_top_banner_ra" style=""></div>
				<div class="f_top_banner_rb" style="">
					<div class="f_top_banner_rba" style=""></div>
				</div>
			</div>
		</div>
		<!--左上部分start-->
		<div class="models_content">
			<!--城市综合统计-->
			<div class="model_A">
				<span class="titlename">海淀区环卫综合统计</span>
				<div style="width:100%;height:100%;top:40px;left:10%;">
					<!--亮洁度start-->
					<div class="firstTj_city">
						<div style="width:55%;height: auto;position: relative; margin: 40px auto 0px;;">
							<img src="../assets/images/homefirst/boxfirstpage/tlcityimg.png" width="100%" style=" position:relative;left:0px;top:-22px" />
							<div style="position: absolute;width: 100%;height: 100%;background: #00BFF300;top:-9%;left:-19px;">
								<span style="top: -24%; left: -10%;  position: absolute;  width: 1px;">
		 							<span id="zongzhishu" class="spanblock numberStyle zongzhishu"  >{{cityljd.zongzhishu}}</span>
								<span class="cTzonghe_lable zongzhishuLab" style="">综合亮洁指数</span>
								</span>

								<span style="top:-6%; left:96%;position:absolute;width: 150px;">
		 							<span id="roadNum" class="cTzonghe_tj numberStyleb" style="top:0;left:0;">{{cityljd.roadNum}}</span>
								<!-- 道路亮洁度 -->
								<span class="cTzonghe_lable" style="top:20px;left:0;">道路亮洁度</span>
								</span>
								<span style="top:27%; left: 96%;position: absolute;width: 150px;">
		 							<span id="wcNum" class="cTzonghe_tj numberStyleb" style="top:0;left:0;">{{cityljd.wcNum}}</span>
								<span class="cTzonghe_lable" style="top:20px;left:0;">公厕亮洁度</span>
								</span>

								<span style="top:56%; left:96%;position:absolute;width: 150px;">
		 							<span id="lajNum" class="cTzonghe_tj numberStyleb" style="top:0;left:0;">{{cityljd.lajNum}}</span>
								<span class="cTzonghe_lable" style="top:20px;left:0;">垃圾清空度</span>
								</span>
							</div>
						</div>
					</div>
					<!--亮洁度End-->
					<!--4环形数据统计Start-->
					<div class="firstTj_city2">
						<rollingnum @closeThis="showOrclosePopwindowHander" data-title="资源调度统计"></rollingnum>
						<span class="sectitleN" >资源调度统计</span>
					</div>
					<!--4环形数据统计End-->
				</div>
			</div>
			<!--四圈状资源统计-->
			<div class="model_A">
				<span class="titlename">垃圾终端设施收纳量同期比</span>
				<div id="ljzdsnltqb" style="position:absolute;width:calc(100% - 20px);height:calc(100% - 40px); left:10px;top: 35px;">

				</div>
			</div>
			<!--四圈状资源统计END-->
			<!--竖状光条-->
			<div style="width: 1px;height:100%;position:absolute;right: 0px;top: 0px; ">
				<img src="../assets/images/homefirst/boxfirstpage/vhightline2.gif" width="5" height="100%" style="margin-left: -4px;" />
			</div>
			<!--竖状光条end-->
		</div>
		<!--左上部分End-->
		<!--底部左边部分start-->
		<div class="models_bottom">
			<div style="position:absolute;width:25%;height:100%; left:0px;top:0px;"> 
				<div style="position:absolute;width:100%;height:100%; ">
					<div class="boxaTit" style="height: 38px;width:100%;position:absolute; left:10px;top: 0px;">
						<div   class="floatL titlename" style="background: url(@/assets/images/homefirst/boxfirstpage/hwzx/boxhw_titleN.png) repeat-x;height:38px;width:auto;text-align: center;line-height: 35px;padding-right: 5px;padding-left: 5px;">道路保洁</div>
					</div> 
				</div>
				<div id="dl_canvas_pC" ref="dl_canvas_pC" style="position:absolute;width:95%;width:calc(100% - 10px);width:-moz-calc(100% - 10px);width:-webkit-calc(100% - 10px);height:100%; left:10px;top:15px;color:#9af50a">
					 <!--道路保洁部分开始-->
					 	<div id="dl_animation_container" ref="dl_animation_container"  class="findinAnimo"  style="position: absolute;background-color:rgba(51, 51, 51, 0.00); width:100%; height:100%;">
							<canvas id="dl_canvas" ref="dl_canvas" width="200" height="125" style="position: absolute; display: block; background-color:rgba(51, 51, 51, 0.00);"></canvas>
							<div id="dl_overlay_container" ref="dl_overlay_container"  style="pointer-events:none; overflow:hidden; width:100%; height:100%; position: absolute; border:0px #ff0000 solid;left: 0px; top: 0px; display:block;">
							<!--浮动文字图层--> 
								<span class="inaLable"  title="52345" style="left:29%; top:19%;">
									<span class="inbLable"   style="left:-60px; top:-18px;" id="span_totalTask">111</span>
								</span>
								<span class="inaLable" style="left:52%; top:19%;">
									<span class="inbLable" title="52345"  style="left:-30px; top:-18px;;" id="span_completeTask">36</span>
								</span>
								<span class="inaLable" style="left:90%; top:19%;">
									<span class="inbLable" title="52345"  style="left:-30px; top:-18px;;color:#FF9900;" id="span_warnTask">2</span>
								</span>
								<span class="inaLable" style="left:32%; top:50%;">
									<span class="inbLable" style="left:-40px; top:-18px;;" id="span_dongYuanRenShu">104</span>
								</span>
								<span class="inaLable" style="left:55%; top:50%;">
									<span class="inbLable" style="left:-30px; top:-18px;;" id="span_avgWorkTime">4.3</span>
								</span>
								<span class="inaLable" style="left:90%; top:50%;">
									<span class="inbLable" style="left:-30px; top:-17px;color:#FF9900;">0</span>
								</span>
								<span class="inaLable" style="left:32%; top:83%;">
									<span class="inbLable" style="left:-40px; top:-18px;;" id="span_chuCheShuLiang">104</span>
								</span>
								<span class="inaLable" style="left:47%; top:83%;">
									<span class="inbLable" style="left:-10px; top:-18px;;" id="span_qingSaoChe">0</span>
								</span>
								<span class="inaLable" style="left:60%; top:83%;">
									<span class="inbLable" style="left:0px; top:-18px;;" id="span_XDC">0</span>
								</span>
 
								<span class="inaLable" style="left:90%; top:83%;">
									<span class="inbLable" style="left:-30px; top:-17px;color:#FF9900;" id="span_num_8">0</span> <!--  异常 -->
								</span>
							</div>
						</div> 
						<!--道路保洁部分结束-->
				</div>
			</div>
			<div style="position: relative;width:50%;height:100%;margin: 0px auto;top:0px; border: 0px red solid;">
				<div style="position:absolute;width:100%;height:100%; ">
					<div class="boxaTit" style="height: 38px;width:100%;position:absolute; left: 0px;top: 0px;">
						<div class="floatL titlename" style="background: url(/images/welcome/boxhwa/boxhw_titleN.png) repeat-x;height:38px;width:auto;text-align: center;line-height: 35px;padding-right: 5px;padding-left: 5px;">公厕保洁情况</div>
					</div> 
				</div> 
				<div id="wc_canvas_pC" ref="wc_canvas_pC" style="position:absolute;width:100%;height:100%;   left:0px;top:0px;overflow: hidden;">
					 <div id="wc_animation_container" ref="wc_animation_container" style="position: relative; border: 0px solid rgb(255, 0, 0); margin: 0px auto; background-color: rgba(68, 68, 68, 0); width: 602px; height: 215px;">
						<canvas id="wc_canvas" ref="wc_canvas" width="602" height="215" style="position: absolute; display: block; background-color: rgba(68, 68, 68, 0); width: 602px; height: 215px;"></canvas>
						<div id="wc_overlay_container" ref="wc_overlay_container" class="findinAnimo" style="pointer-events: none; overflow: hidden; width: 602px; height: 215px; position: absolute; left: 0px; top: 0px; display: block;">
								<!--浮动文字图层-->
								<span class="inaLable" style="left: 9%; top: 33%;">
									<span id="zcgc" class="inbLable" style="left: -50px; top: -18px;">100</span>
								</span>
								<span class="inaLable" style="left: 18%; top: 33%;">
									<span id="kfz" class="inbLable" style="left: -30px; top: -18px;">68</span>
								</span>
								<span class="inaLable" style="left: 28%; top: 33%;">
									<span id="wxgb" class="inbLable" style="left: -30px; top: -18px;">32</span>
								</span>
								<span class="inaLable" style="left: 39%; top: 34%;">
									<span id="ltAlarm" class="inbLable inbLableerr" style="left: -30px; top: -18px; color: rgb(255, 153, 0);">32</span>
								</span>
								<span class="inaLable" style="left: 8%; top: 85%;">
									<span id="bjrs" class="inbLable" style="left: -37px; top: -23px;">90</span>
								</span>
								<span class="inaLable" style="left: 21%; top: 85%;">
									<span id="pjzysc" class="inbLable" style="left: -32px; top: -23px;">0.0h</span>
								</span>
								<span class="inaLable" style="left: 38%; top: 85%;">
									<span id="lbAlarm" class="inbLable inbLableerr" style="left: -30px; top: -23px; color: rgb(255, 153, 0);">0</span>
								</span>
								<span class="inaLable" style="left: 68%; top: 49%;">
									<span id="cdxfcl" class="inbLable" style="left: -53px; top: -22px;">50</span>
								</span>
								<span class="inaLable" style="left: 91%; top: 48%;">
									<span id="rtAlarm" class="inbLable inbLableerr" style="left: -30px; top: -22px; color: rgb(255, 153, 0);">1426</span>
								</span>
								<span class="inaLable" style="left: 64%; top: 84%;">
									<span id="dqkfk" class="inbLable" style="left: -39px; top: -22px;">100</span>
								</span>
								<span class="inaLable" style="left: 76%; top: 84%;">
									<span id="yqk" class="inbLable" style="left: -40px; top: -22px;">7</span>
								</span>
								<span class="inaLable" style="left: 86%; top: 84%;">
									<span id="wcl" class="inbLable" style="left: -48px; top: -22px;">7%</span>
								</span>
								<span class="inaLable" style="left: 96%; top: 84%;">
									<span id="rbAlarm" class="inbLable inbLableerr" style="left: -46px; top: -22px; color: rgb(255, 153, 0);">93</span>
								</span>
						</div>
					</div> 
				</div>
			</div>
			<div style="position:absolute;width:25%;height:100%; right:0px;top:0px;"> 
				<div style="position:absolute;width:100%;height:100%; ">
					<div class="boxaTit" style="height: 38px;width:100%;position:absolute; left: 0px;top: 0px;">
						<div class="floatL titlename" style="background: url(/images/welcome/boxhwa/boxhw_titleN.png) repeat-x;height:38px;width:auto;text-align: center;line-height: 35px;padding-right: 5px;padding-left: 5px;">
						垃圾清运
						</div>
					</div> 
				</div>
				<div id="lj_canvasaParent" ref="lj_canvasaParent" style="position:absolute;width:100%;height:100%; right:10px;top:0px;color:#9af50a">
					 <!--垃圾清运部分开始-->
						<div id="lj_anim_container" ref="lj_anim_container" style="position: absolute; background-color: rgba(68, 68, 68, 0); width: 342px; height: 213.75px;">
							<canvas id="lj_canvas" ref="lj_canvas" width="342" height="213" style="position: absolute; display: block; background-color: rgba(68, 68, 68, 0); width: 342px; height: 213.75px;"></canvas>
							<div id="lj_overlay_container" ref="lj_overlay_container" class="findinAnimo" style="pointer-events: none; overflow: hidden; width: 342px; height: 213.75px; position: absolute; left: 0px; top: 0px; display: block;">
								<!--浮动文字图层--> 
										<!--浮动文字图层--> 
										<span class="inaLable" style="left: 20%; top: 29%;">
											<span class="inbLable" style="left: -55px; top: -21px;">272</span>
										</span>
										<span class="inaLable" style="left: 46%; top: 29%;">
											<span class="inbLable" style="left: -45px; top: -21px;">1</span>
										</span> 
										<span class="inaLable" style="left: 83%;  top: 20%;cursor:pointer;">
											<span class="inbLable inbLableerr" style="  color: rgb(255, 153, 0);" onclick="showPopWin('popWin_ljlwqy','垃圾楼未清运','/queryNoRecevingBuilding.do')">272</span>
										</span>
										<span class="inaLable" style="left: 13%; top: 58%;">
											<span class="inbLable" style="left: -35px; top: -22px;">1470</span>
										</span>
										<span class="inaLable" style="left: 38%; top: 58%;">
											<span class="inbLable" style="left: -20px; top: -22px;">150</span>
										</span>
										<span class="inaLable" style="left: 70%; top: 48%;cursor:pointer;">
											<span class="inbLable inbLableerr" style="  color: rgb(255, 153, 0);" onclick="showPopWin('popWin_xqwqy','小区未清运','/queryNoRecevingLivingArea.do')">1320</span>
										</span>
										<span class="inaLable" style="left: 17%; top: 87%;">
											<span class="inbLable" style="left: -40px; top: -22px;">224</span>
										</span>
										<span class="inaLable" style="left: 49%; top: 87%;">
											<span class="inbLable" style="left: -55px; top: -22px;">76%</span>
										</span> 
										<span class="inaLable" style="left: 70%;  top: 78%;cursor:pointer;">
											
											<span class="inbLable inbLableerr" style="  color: rgb(255, 153, 0);" id="span_num_9" onclick="warningInfoPool('9');">13768</span>
										</span>
							</div>
						</div> 
								<!--道路保洁部分结束-->
				</div>
			</div>
		</div>
		<!--底部左边部分END-->
		<!--右侧部分start-->
		<div class="models_content_right">
			<div style="width: 1px;height:100%;position:absolute;left: 0px;top: 0px; ">
		 		<img src="../assets/images/homefirst/boxfirstpage/vhightlineR.gif" width="8" height="100%" style="margin-left: -4px;"/>
		 	</div>
		 	<div class="rightTopTb">
		 		<span class="spanblock titlenameTR">异常报警池</span>
		 		<div style="position:absolute;width: 100%;height: 20px;right:20px;top:2px;">
					<!-- 暂时隐藏 visibility: hidden; visibility: none;开启 --> 
		 			<div class="warningGifbtn" style="float:right; top:0px;right:0px; ">
							<img src="../assets/images/homefirst/boxfirstpage/warningyj.gif" width="50" height="25"  />
							<div  @click="warningMore()" style="">
								<span id="warningMoreType" style="font-size: 14px;font-weight: 600;">更多</span> 
								<!--<span style="color: #ffcc00;display:block;width:50px; height:15px;text-align: center;">异常</span>-->
							</div>
					</div>
		 		</div>
		 		<div id="warningInfoPool" class="warningInfoPool"  >
		 			<div v-for="alarm in carAlarmliist" :id="alarm.id" :key="alarm.id" class="warning_item" @click="dingweibaojing" >
		 				<span class="spanblock">{{alarm.plateNumber}}{{alarm.alarmTypeCode}}</span>
		 				<span class="spanblock">{{alarm.alarmTime}}</span> 
		 			</div>
		 		</div>
		 	</div> 
		 	<div class="rightMiddleTb"  > 
		 		<div id="containerrubish" class="containerrubish"  >
 
				</div>
				<span class="spanblock titlenameTR" style="position: absolute;top: 0px;">垃圾点分布</span>
		 	</div> 
		</div>
		<!--右侧部分END-->
		<div class="reportData">
			<div class="iicon">
				<div class="iicoDown" title="数据下载"></div>
			</div>
			<div class="dataItemsRP">
				<span>数据下载</span>
				<ul>
					<li>
						<a id="exportRoadCleanData" href="javascript:void(0);">
							<span><i></i></span>道路清扫</a>
					</li>
					<li>
						<a id="exportLivingAreaData" href="javascript:void(0);">
							<span><i></i></span>小区清运</a>
					</li>
					<li>
						<a id="exportBuildingData" href="javascript:void(0);">
							<span><i></i></span>垃圾楼清运</a>
					</li>
					<li>
						<a id="" href="javascript:void(0);">
							<span><i></i></span>公厕清抽</a>
					</li>
				</ul>
			</div>
		</div>
		<div id="main_portbtn" class="main_portbtn">
			<span class="iicon"></span>
			<div id="portMenuContiner" class="portMenuC">
				<div class="portMenuContiner">
					<ul>
						<li v-for="item in portMenu" :key="item.menuCode">
							<a :id="item.menuCode" href="javascript:void(0);" @click="toSecpage(item)">
								<span><i></i></span>{{item.menuName}}
							</a>
						</li>
					</ul>
					<div class="changePassbtn" @click="changePassword"><span class="iicon"></span>密码修改</div>
					<div class="signoutbtn" @click="logOutSys">退出</div>
				</div>
			</div>
		</div>
		<Popwindow @closeThis="showOrclosePopwindowHander" :data-show="showPopwin" :data-info="dataInfo" ref="popwin"></Popwindow>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Darkmap from '@/components/homeparts/Darkmap'
	import rollingnum from '@/components/rollingnumber/RollingNum' 
	import Ihcharts from '@/components/homeparts/Ihcharts'
//	import createjs from 'createjs-npm/lib/create';
	import 'script-loader!createjs/builds/1.0.0/createjs.min.js'; 
	import dl_handleComplete from '@/components/homepageHwzx/loadbottomDltj'
	import lj_handleComplete from '@/components/homepageHwzx/loadbottomLjtj'
	import wc_handleComplete from '@/components/homepageHwzx/loadbottomWctj'
//	import '@/components/homepageHwzx/dataviewLj'
//	import '@/components/homepageHwzx/dataviewWC'
//	import '@/components/homepageHwzx/loadbottomLjtj'
//	import '@/components/homepageHwzx/loadbottomWctj'
	
	import {getLajiCZoption,getLajiFBoption} from '@/common/js/hchartsOptions'

	import Highcharts from 'highcharts/highstock'
	import HighchartsMore from 'highcharts/highcharts-more'
	import SolidGauge from 'highcharts/modules/solid-gauge'
	import DarkUnica from 'highcharts/themes/dark-unica'
	//import HighchartsDrilldown from 'highcharts/modules/drilldown'
	//import Highcharts3D from 'highcharts/highcharts-3d'
	//import Highmaps from 'highcharts/modules/map' 
	//	import Highcharts from 'highcharts' 
	//	import Exporting from 'highcharts/modules/exporting'
	//	import ExportData from 'highcharts/modules/export-data'
	//	import Data from 'highcharts/modules/data'
	HighchartsMore(Highcharts)
	SolidGauge(Highcharts)
	DarkUnica(Highcharts)
	//Exporting(Highcharts)
	//ExportData(Highcharts)
	//Data(Highcharts)
	//HighchartsDrilldown(HighCharts)
	//Highcharts3D(HighCharts)
	//Highmaps(HighCharts)
	import {Popwindow} from '@/plugins/pagesCostom'
	import '@/assets/css/animal/animal.css'
	export default {
		name: 'welcomGWpage',
		components: {
			Darkmap,
			rollingnum,
			Popwindow,
			Ihcharts
		},
		props: {
			dataMenus: {
				type: Array,
				default: () => {
					return [{
						id: 'id',
						menuName: '无菜单',
						imageUrl: require('../assets/images/mainTopbanner/e5.png'),
						beselected: true,
						list: []
					}]
				}
			}
		},
		data() {
			return {
				mapstyle: "light",
				portMenu: Array,
				showPopwin: false,
				dataInfo: {},
				cityljd: {
					"wcNum": "0",
					"lajNum": "0",
					"roadNum": "0",
					"zongzhishu": "0"
				},
				gcbjid: "gcbj",
				optionGcbj: {}
				,noReceivingTotal:5000
				,leftBottomMap:{
					bjykq1: "0",    //已出勤
				    bjykq4: "0",   // //出勤率
				    bjykq3: "90", // 已出勤 总人数
				    bjykq5: "0",  //公厕保洁异常数 
				    gcbj1: "0",   // 公厕已保洁
				    gcbj3: "0",   // 公厕总任务
				    gcbj5: "0",   //公厕保洁异常数
				    gcbj4: "0",   // 公厕完成率
					gcqc1: "0", // 公厕已清抽
					gcqc3: "0", // 清抽总任务
					gcqc4: "0", // 清抽率
					gcqc5: "0", // 公厕清抽异常数
				    isModifyPwd: "false" 
				}
				,retMap:{
					dlljd: 98
					,total: 7870
					,weiWanCheng:[]
					,wzyPercent: 0
					,yiWanCheng: []
					,yzyCSPercent: 0
					,yzyPercent: 0
					,yzyZCPercent: 0
					,zyzPercent: 0
				},
				carAlarmliist:[
					{
					  alarmTime: "报警時間1",
					  alarmTypeCode: "报警种类1",
					  carNo: "车辆编号1",
					  id: "idididid",
					  orgCode: "组织编号",
					  orgName: "组织名",
					  plateNumber: "京888888"
					}
					,{
					  alarmTime: "报警時間2",
					  alarmTypeCode: "报警种类2",
					  carNo: "车辆编号2",
					  id: "idididid2",
					  orgCode: "组织编号",
					  orgName: "组织名",
					  plateNumber: "京999999"
					}
				]
			}
		},
		created(){
  		
  		},
		mounted() {
			let that=this
			this.getMenu();
			this.initCityljd(); //综合指数
			this.initGlobaldata();//页面大多数指数
			this.initLaj(); //垃圾场站  本&上周统计（左中）  
			this.initRoadTJ()
			this.initLajiTj()
  			this.initWCTj()
  			this.initLajFenbu()  //垃圾点分布  右侧中部
		},
		methods: {
			  getMenu(){  
				let that_ = this;
				
				this.axios.get("/queryWelcomeMenu.do").then((data) => {
					console.log("menu1")
					let jsond = JSON.stringify(data.data)
					if(data.data && data.data != []) {
						that_.$store.dispatch('initUserallMenuFun', data.data)
					}
				}).catch((error) => {
					console.log(error)
					if((error.message).indexOf("timeout") > -1) {
						that_.$showTostinfo('长时间未操作无响应请重新登录',that_)
						that_.$router.push({
							path: '/loginTip',
							query: {
								'msn': '请重新登录'
							}
						});
					} 
				}); 
			},
			changePassword() {},
			logOutSys(){
				 this.$store.dispatch('logoutState') 
			},
			getoWner() {
				return(this.$store.state.ownerAllMenu);
			},
			toSecpage(itemc) {
				let id_ = itemc.menuCode;
				let leftTitle = itemc.menuName;

				let arr_ = this.portMenu;
				let seczz = [];
				let tredzz = [];
				let that = this;

				let index_ = arr_.findIndex(item => item.menuCode === id_)
				let finditem = (arr_.splice(index_, 1))[0];
				let relistArr = arr_.unshift(finditem)
				seczz = (finditem.list.length > 0) ? this.deepClone(finditem.list) : [];
				if(finditem.list.length == 0) {
					//					this.$store.dispatch('changeTreMenuFun', tredzz);
					this.$store.dispatch('changerightPagesFun', {
						topageData: "暂无信息",
						topageDemo: "Nonedata"
					})
				}
				if(finditem.list && finditem.list != [] && ((finditem.list)[0]) && ((finditem.list)[0]).list != []) {
					tredzz = this.deepClone(((finditem.list)[0]).list)
					for(let t of tredzz) {
						t.beselected = false;
					}
				} else {
					tredzz = []
				}

				this.$store.dispatch('changeUserallMenuFun', arr_);
				this.$store.dispatch('changeLeftMenuFun', seczz);
				this.$store.dispatch('changeTreMenuFun', tredzz); //存储 到state

				window.sessionStorage.setItem("beSlecfirstMenuId", id_) //初次选中的按钮id ；排列在顶部第一位；
				window.sessionStorage.setItem("reSlecfirstMenuId", id_)
				this.$store.dispatch('setLeftTitlenameFun', leftTitle) //二级菜单 顶部 栏目中文名

				this.$router.push({
					path: '/home/sec'
				})
			},
			showOrclosePopwindowHander(data) {
				if(data) {
					this.dataInfo = data 
				}
				this.showPopwin = !this.showPopwin;
			},
			initRoadTJ(){
				window.clickDLa=function(){alert("Dla")}
				window.clickDLb=function(){alert("Dlb")}
				window.clickDLc=function(){alert("Dlc")}
				let dl_canvas, dl_stage, dl_exportRoot, dl_anim_container, dl_overlay_container, dl_fnStartAnimation,cavAP;
		 			dl_canvas = this.$refs.dl_canvas;
					dl_anim_container = this.$refs.dl_animation_container;
					dl_overlay_container = this.$refs.dl_overlay_container;
					cavAP=this.$refs.dl_canvas_pC
				dl_handleComplete(dl_canvas,dl_stage,dl_anim_container,dl_overlay_container,cavAP)
			},
			initLajiTj(){
				window.clickLja=function(){alert("Lja")}
				window.clickLjb=function(){alert("Ljb")}
				window.clickLjc=function(){alert("Ljc")} 
					let lj_canvas,  lj_anim_container, lj_overlay_container,cavAP;
					lj_canvas = this.$refs.lj_canvas;
					lj_anim_container = this.$refs.lj_anim_container;
					lj_overlay_container = this.$refs.lj_overlay_container;
					cavAP=this.$refs.lj_canvasaParent
				 
				lj_handleComplete(lj_canvas,lj_anim_container,lj_overlay_container,cavAP)
			},
			initWCTj(){
				window.clickWCa=function(){alert("WCa")}
				window.clickWCb=function(){alert("WCb")}
				window.clickWCc=function(){alert("WCc")}
				window.clickWCd=function(){alert("WCd")}
					let wc_canvas,  wc_anim_container, wc_dom_overlay_container,cavAP;
					wc_canvas =this.$refs.wc_canvas;
					wc_anim_container = this.$refs.wc_animation_container;
					wc_dom_overlay_container = this.$refs.wc_overlay_container;
					cavAP= this.$refs.wc_canvas_pC;
					
					wc_handleComplete(wc_canvas,wc_anim_container,wc_dom_overlay_container,cavAP);
			}
			,initCityljd() {
				let obj = {}
				let that = this
				let postReq=function(){
						that.axios.post("/welcome/getLiangJieDu",obj ).then((data)=>{ 
								if(data.code==200){
									if(data.data && data.data!=[]){ 
										that.cityljd=data.data
									}
								}
						})
				}
				postReq();
				//			setInterval(postReq,100000)

			},
			initGlobaldata() {
				let obj = {}
				let that = this 
				this.axios.post("/welcome/welcomeHwzx",obj ).then((data)=>{ 
						if(data.code==200){
							if(data.data && data.data!=[]){  
								let data_=data.data; 
								for(let item in data_){ 
									switch (item){
										case "leftBottomMap":
											that.leftBottomMap=data_.leftBottomMap
											break;
										case "retMap":
											that.retMap=data_.retMap
											break;
										case "noReceivingTotal": 
											that.noReceivingTotal=data_.noReceivingTotal
											break;
										default :
											break;
									}
									 
								}
							}
						}
				}) 
				//			setInterval(postReq,100000)

			},
			initLaj() {
				let opition = getLajiCZoption();
				Highcharts.chart('ljzdsnltqb', opition)
			}, 
			//垃圾点分布
			initLajFenbu(){
				let opition = getLajiFBoption();
				Highcharts.chart('containerrubish',opition)
			}
			,dingweibaojing(){
				this.$refs.ibmap.inMapPoint("wqqe","idd","time", "table")
			}
		},
		computed: {},
		watch: {
			'$store.state.ownerAllMenu': {
				handler(newValue, oldValue) {
					// 监听是为了把更改后的样式及时保存到arr.styles里,最后arr是要提交的 
					this.portMenu = newValue;　　　　
				},
				　　　　deep: true
			}  
		}

	}
</script>
<style>
	.firstPage {
		background: rgb(35, 41, 56);
		width: 100%;
		/*min-width: 1060px;*/
		height: 100%;
		position: absolute;
		color: rgb(113, 187, 210);
		overflow: hidden;
	}
	/*顶部  banner  部分*/
	
	.f_top_banner {
		position: absolute;
		width: 100%;
		min-width: 1000px;
		height: 58px;
		margin-left: auto;
		margin-right: auto;
		top: 0px;
		border-top: 1px solid #000000;
		background: url('../assets/images/homefirst/appTopbanner_centerrepeat.png') repeat-x;
	}
	
	.f_top_banner_lContiner {
		width: 400px;
		height: 58px;
		margin-left: 0px;
		min-width: 400px;
	}
	 
	.f_top_banner_rContiner {
		position: absolute;
		top: 0px;
		right: 0px;
		width: 420px;
		height: 58px;
		overflow: hidden;
	}
	.f_top_banner_rContiner>.f_top_banner_ra {
		float: left;
		position: relative;
		width: 106px;
		height: 100%;
		background: url('../assets/images/homefirst/appTopbanner_rightfillet.png') no-repeat;
		margin-left: -10px;
	}
	
	.f_top_banner_rContiner>.f_top_banner_rb {
		float: left;
		position: relative;
		width: 1px;
		height: 100%;
	}
	
	.f_top_banner_rContiner>.f_top_banner_rb>.f_top_banner_rba {
		margin-right: -499px;
		float: left;
		position: absolute;
		width: 500px;
		height: 100%;
		background: url('../assets/images/homefirst/appTopbanner_rightrepeat.png')
	}
	.portMenuBar {
		width: 100%;
		height: 58px;
		margin-left: auto;
		margin-right: auto;
		background: url('../assets/images/homefirst/appTopB_leftrepeat.png') repeat-x;
	}
	
	.portMenuBar>.portMenuBar_a {
		float: right;
		position: relative;
		width: 106px;
		height: 100%;
		background: url('../assets/images/homefirst/appTopB_leftfillet.png') no-repeat;
		margin-right: -106px;
	} 
	
	.portMenuBar>.portMenuBar_b {
		float: right;
		position: relative;
		width: 261px;
		height: 100%;
		background: url('../assets/images/homefirst/appTopB_leftrepeat.png') repeat-x;
	}
	
	.portMenuBar>.portMenuBar_b>.portMenuBar_ba {
		margin-left: -499px;
		float: left;
		position: absolute;
		width: 500px;
		height: 100%;
		background: url('../assets/images/homefirst/appTopB_leftrepeat.png')
	}
	.portMenuBar>.portMenuBar_b>.portMenuBar_bb {
		float: right;
		position: relative;
		width: 365px;
		height: 100%;
		background: url('../assets/images/homefirst/appTopbannerC_logoC.png') no-repeat;
	}
	
	
	/*顶部banner 部分 结束*/
	/*右上角 下拉菜单*/
	
	.reportData {
		width: 50px;
		height: 40px;
		right: 288px;
		top: 0px;
		position: absolute;
		z-index: 999;
	}
	
	.reportData:hover {
		background: rgba(3, 36, 53, 0.9);
	}
	
	.reportData>.iicon {
		position: relative;
		display: inline-block;
		top: 0px;
		margin: 10px;
		width: 30px;
		height: 30px;
		overflow: hidden;
	}
	
	.reportData>.iicon>.iicoDown {
		width: 30px;
		height: 300px;
		background: url(../assets/images/homefirst/animage/imgDowndata.png) top left no-repeat;
	}
	
	.reportData:hover>.iicon>.iicoDown {
		width: 30px;
		height: 300px;
		background: url(../assets/images/homefirst/animage/imgDowndata.png) no-repeat;
		animation: position_y .83s linear infinite;
		-webkit-animation: position_y .83s linear infinite;
	}
	
	.reportData:hover .dataItemsRP {
		width: auto;
		height: 205px;
		background: rgba(0, 0, 0, .8);
		border: 1px solid rgba(9, 74, 121, 0.8);
		display: block;
		position: absolute;
		margin: 0px;
		top: 40px;
		right: 0px;
		padding: 10px;
	}
	
	.reportData .dataItemsRP {
		overflow: hidden;
		height: 0px;
		transition: height .5s ease;
		-webkit-transition: height .5s ease;
	}
	
	.dataItemsRP>span {
		color: #f7b211;
		font-size: 14px;
		display: block;
		width: 100%;
		text-align: right;
		border-bottom: 1px solid rgba(9, 74, 121, 0.8);
	}
	
	.reportData:hover .dataItemsRP ul {
		padding-inline-start: 0px;
		box-sizing: border-box;
		padding: 0px 0px 15px;
		margin-block-end: 1em;
		margin-block-start: 0em;
	}
	
	.reportData:hover .dataItemsRP ul li {
		overflow: hidden;
		width: auto;
		height: auto;
		background: rgba(0, 0, 0, .8);
		display: block;
		margin: 0px;
		top: 40px;
		right: 0px;
		padding: 3px;
	}
	
	.reportData:hover .dataItemsRP ul li a {
		width: 130px;
		display: block;
		text-align: left;
		text-decoration: none;
		color: #ffffff;
		line-height: 30px;
	}
	
	.reportData:hover .dataItemsRP ul li a span {
		position: relative;
		display: inline-block;
		visibility: hidden;
		overflow: hidden;
		top: 0px;
		width: 25px;
		height: 30px;
		transition: margin-right .5s ease;
		-webkit-transition: margin-right .5s ease;
	}
	
	.reportData:hover .dataItemsRP ul li:hover a {
		background: black;
	}
	
	.reportData:hover .dataItemsRP ul li:hover a span {
		visibility: visible;
		margin-right: 5px;
	}
	
	.reportData:hover .dataItemsRP ul li a span i {
		width: 30px;
		height: 300px;
		display: block;
		background: url(../assets/images/homefirst/animage/imgDowndata.png) no-repeat;
		animation: position_y .83s linear infinite;
		-webkit-animation: position_y .83s linear infinite;
	}
	/*右上角下拉菜单结束*/
	/*右侧入口*/
	
	.main_portbtn {
		width: 50px;
		height: 100%;
		background: rgba(3, 36, 53, 0);
		right: 0px;
		top: 0px;
		position: absolute;
		z-index: 999;
		pointer-events: none;
	}
	
	.main_portbtn>.iicon {
		display: block;
		width: 48px;
		height: 42px;
		position: absolute;
		top: 0px;
		right: 0px;
		background: url(../assets/images/homefirst/cloud2.png);
	}
	
	.main_portbtn>.iicon:hover,
	.main_portbtn:hover>.iicon {
		background: url(../assets/images/homefirst/cloud1.png);
	}
	
	.main_portbtn>.portMenuC {
		height: 85%;
		height: calc(100% - 48px);
		height: -webkit-calc(100% - 48px);
		height: -moz-calc(100% - 48px);
		width: 200px;
		background: rgba( 3, 26, 29, 0.8);
		right: -199px;
		top: 42px;
		position: absolute;
		transition: right .15s ease;
		-webkit-transition: right .15s ease;
	}
	
	.main_portbtn:hover>.portMenuC {
		right: 0px;
	}
	
	.main_portbtn>.portMenuC>.portMenuContiner {
		background: rgba(3, 26, 29, 0.3);
		width: 180px;
		height: 100%;
		right: 14px;
		top: 8px;
		position: absolute;
		overflow: hidden;
	}
	
	.main_portbtn>.portMenuC>.portMenuContiner>ul {
		width: 200px;
		height: calc(100% - 80px);
		overflow-y: auto;
		overflow-x: hidden;
		background: rgba( 3, 26, 29, 0.8);
		position: relative;
		margin: 0px auto 0px;
		list-style-type: none;
		padding: 0px !important;
	}
	
	.main_portbtn>.portMenuC>.portMenuContiner>ul>li {
		height: 30px;
		background: blue;
		margin: 2px auto 0px;
	}
	
	.main_portbtn>.portMenuC>.portMenuContiner>ul>li>a {
		text-decoration: none;
		display: block;
		height: 100%;
		height: 100%;
		background: #1e679c;
		margin: 2px auto 0px;
		color: #FFFFFF;
		line-height: 27px;
		padding: 1px 10px;
	}
	
	.main_portbtn>.portMenuC>.portMenuContiner>ul>li>a:hover {
		background: #1872b3;
		color: #fff8bf;
	}
	
	.main_portbtn>.portMenuC>.portMenuContiner>ul>li>a>span {
		display: inline-block;
		width: 21px;
		height: 1px;
		margin-right: 5px;
		transition: margin-right .5s ease;
		-webkit-transition: margin-right .5s ease;
	}
	
	.main_portbtn>.portMenuC>.portMenuContiner>ul>li>a:hover>span {
		margin-right: 10px;
	}
	
	.main_portbtn>.portMenuC>.portMenuContiner>ul>li>a>span>i {
		background: url(../assets/images/homefirst/vehicle_info_icoN.png);
		width: 21px;
		height: 21px;
		display: block;
		margin-top: -16px;
	}
	
	.main_portbtn>.portMenuC>.portMenuContiner>.changePassbtn {
		margin-top: 5px;
		width: 180px;
		letter-spacing: .7em;
		padding-left: 20px;
		padding-right: 30px;
		height: 30px;
		color: #FFF8aa;
		line-height: 25px;
		text-align: right;
		cursor: pointer;
		-moz-user-select: -moz-none;
		-moz-user-select: none;
		-o-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	
	.main_portbtn>.portMenuC>.portMenuContiner>.signoutbtn {
		margin-top: 5px;
		background: #e70000;
		width: 180px;
		letter-spacing: 1.5em;
		padding-left: 20px;
		height: 30px;
		color: #FFF8BF;
		line-height: 30px;
		text-align: center;
		font-weight: 600;
		-moz-user-select: -moz-none;
		-moz-user-select: none;
		-o-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	/*右侧入口结束*/
	
	.toplayer {
		width: 210px;
		height: 100%;
		position: absolute;
		top: 0px;
		right: 0px;
		pointer-events: none;
	}
	
	.toplayer *,
	.main_portbtn * {
		pointer-events: auto;
	}
	/*
	 *各部分
	 *  */
	
	.models_content {
		position: absolute;
		width: 430px;
		height: 63%;
		height: calc(100% - 273px);
		height: -moz-calc(100% - 273px);
		height: -webkit-calc(100% - 273px);
		left: 0px;
		top: 58px;
		min-width: 430px;
		background: url(../assets/images/homefirst/boxfirstpage/leftpartBack.png) right top;
	}
	
	.model_A {
		position: relative;
		width: 98.8%;
		height: 50%;
		/*background: aquamarine;*/
		;
		overflow: hidden;
	}
	
	.titlename {
		font-family: '方正综艺简体';
		font-size: 20px;
		background: url(../assets/images/homefirst/boxfirstpage/boxT1.png) right top;
		width: auto;
		display: inline-block;
		height: 35px;
		padding: 0 42px 0 15px;
		color: #fff;
		line-height: 35px;
		;
	}
	
	.titlenameTR {
		font-family: '方正综艺简体';
		font-size: 20px;
		width: auto;
		display: inline-block;
		height: 32px;
		padding: 0 0px 0 30px;
		color: #fff;
		line-height: 32px;
		;
	}
	
	.sectitleN {
		font-family: '方正综艺简体';
		font-size: 1.1em;
		width: 1px;
		display: inline-block;
		height: 35px;
		padding: 10px 27px 0 8px;
		color: #fff;
		line-height: 25px;
		letter-spacing: .2em;
		top: -125px;
		position: relative;
		float: right;
	}
	
	.models_bottom {
		position: relative;
		width: 100%;
		height: 215px; 
		bottom: 215px; 
		left: 0px;
		background: rgba(1, 64, 98, 0.1);
		background: url(../assets/images/homefirst/boxfirstpage/hengxiangrepeat.png);
	}
	
	
	.boxaTit{height: 38px;width:100%;position:absolute; left: 0px;top: 0px;}
		.boxaTita{background: url(../assets/images/homefirst/boxfirstpage/boxhwa/boxhw_lt.png) no-repeat;height: 100%;width: 30px;}
		.boxaTitb{background: url(../assets/images/homefirst/boxfirstpage/boxhwa/boxhw_titleN.png) repeat-x;height:38px;width:auto;text-align: center;line-height: 35px;padding-right: 5px;padding-left: 5px;}
		.boxaTitc{background: url(../assets/images/homefirst/boxfirstpage/boxhwa/boxhw_topmida.png) no-repeat;height:38px;width:69px;}
		.boxaTitd{background: url(../assets/images/homefirst/boxfirstpage/boxhwa/boxhw_topmidb.png) repeat-x;height:38px;width:calc(100% - 219px);width:-moz-calc(100% - 219px);width:-webkit-calc(100% - 219px);}
		.boxaTite{background: url(../assets/images/homefirst/boxfirstpage/boxhwa/boxhw_tr.png) right top;height:38px;width:30px;float: right;}
		.boxaTitf{background: url(../assets/images/homefirst/boxfirstpage/boxhwa/boxhw_lm.png) repeat-y;height:100%;width: 30px;}
		.boxaTitg{height: 100%;width:calc(100% - 60px);text-align: center;}
		.boxaTith{background: url(../assets/images/homefirst/boxfirstpage/boxhwa/boxhw_mr.png) right top repeat-y;height:100%;width:30px;}
		.boxaTiti{background: url(../assets/images/homefirst/boxfirstpage/boxhwa/boxhw_lb.png) no-repeat;height:100%;width: 30px;}
		.boxaTitj{background: url(../assets/images/homefirst/boxfirstpage/boxhwa/boxhw_botm.png) repeat-x;height: 100%;width:calc(100% - 60px);text-align: center;}
		.boxaTitk{background: url(../assets/images/homefirst/boxfirstpage/boxhwa/boxhw_rb.png) no-repeat;height:100%;width:30px;}
					
	
	.models_content_right {
		position: absolute;
		height: inherit;
		right: 0px;
		top: 44px;
		width: 350px;
		height:56%;height:calc(100% - 260px);height:-moz-calc(100% - 260px);height:-webkit-calc(100% - 260px);
		background: rgba(1, 64, 98, 0.7);
		background: url(../assets/images/homefirst/boxfirstpage/right_backg.png) left top repeat-y;
	}
	
	.bottomrRoad {
		position: absolute;
		width: 42%;
		height: 100%;
		right: 5px;
		top: 0px;
		background: url(../assets/images/homefirst/boxfirstpage/bottCr_tp.png) left 5px no-repeat;
	}
	 
	.rightTopTb{position: relative;top: 0px;left: 0px;background: url(../assets/images/homefirst/boxfirstpage/tRboxtop.png) left top no-repeat;width:100%;height:50%;overflow:hidden;}
 	.rightMiddleTb{position: relative;top: 0px;left: 0px;background: url(../assets/images/homefirst/boxfirstpage/mRboxtop.png) left top no-repeat;width:100%;height:50%;}
		 	
	
	
	.model_A {
		background: url(../assets/images/homefirst/boxfirstpage/boxT1.png) 1px -39px repeat-x;
	}
	
	.model_A table td {
		color: #c4c4c4;
		text-align: center;
		font-size: 1.1em;
		;
	}
	
	.model_A table thead tr td {
		background: #021e28;
		color: #c4c4c4;
	}
	
	.model_A table tbody tr td {
		background: #043343;
	}
	
	.model_A table tbody tr td:first-child {
		background: #042733;
		color: #44ffff;
		text-align: right;
		width: 150px;
		padding-left: 10px;
		padding-right: 10px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.floatL {
		position: relative;
		float: left;
	}
	
	.spanyellow {
		font-size: 1.1em;
		color: #ff0;
		line-height: 10px
	}
	
	.spanblue {
		font-size: 1.1em;
		color: #00bff3;
		line-height: 10px;
	}
	
	.spanblock {
		display: inline-block;
	}
	
	#mountNode div {
		top: -80px !important;
	}
	
	#mountNode2 div {
		top: -80px !important;
	}
	
	#mountNode3 div {
		top: -80px !important;
	}
	
	.warningInfoPool{
		width:100%; 
	height: 90%;height: calc(100% - 32px); height:-moz-calc(100% - 32px); height:-webkit-calc(100% - 32px); 
	position: relative;margin-top: 0px;  padding-right:5px;padding-bottom:10px;overflow-y:scroll;overflow-x:hidden;}

.warning_item {
    font-family: "微软雅黑","黑体",arial, helvetica, sans-serif;
    border-left: #ff671c 3px solid;
    font-weight: 800;
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    height: 50px;
    background: rgba(3,21,46,.6);
    background: #03152e9c;
    margin-top: 3px;
    color: #acd6f9;
    padding: 5px;
}
	
	
	
	.warning_item span {
		line-height: 20px;
		width: 100%;
		word-wrap: break-word;
		-webkit-user-select: none;
		-ms-user-select: none;
		-moz-user-select: none;
		pointer-events: none;
		cursor: pointer;
		padding-left: 5px;
	}
	.warning_item>span:last-child {
		color: #1a91bf;
		text-align: right;
	}
	
	.warning_item i {
		line-height: 20px;
		width: 100%;
		word-wrap: break-word;
		padding-left: 5px;
		cursor: none;
	}
	.warning_item:hover {
		background: rgba(3, 21, 46, .9);
		background: #03152eef;
		color: #FFFFFF;
		cursor: pointer;
	}
	.warning_item:active {
		background: rgba(3, 21, 46, 1);
		background: #03152eff;
		color: #dddddd;
	}
	
	.preSpanblockFl {
		position: relative;
		float: left;
		display: inline-block;
		width: 20%;
		height: 27px;
		line-height: 27px;
		text-align: center;
		font-family: MyCustomFont, Arial, sans-serif;
		font-size: 20px;
		color: #49eeff;
		border-left: 2px #043343 solid;
		border-right: 2px #043343 solid;
	}
	
	.preSpanblockFlL {
		position: relative;
		float: left;
		display: inline-block;
		width: 20%;
		height: 27px;
		line-height: 18px;
		text-align: center;
		font-family: MyCustomFont, Arial, sans-serif;
		font-size: 12px;
		vertical-align: middle;
		color: #efefef;
		border-left: 2px #043343 solid;
		border-right: 2px #043343 solid;
	}
	
	.preSpanblockFlR {
		position: relative;
		float: right;
		display: inline-block;
		width: 25%;
		height: 35px;
		line-height: 28px;
		text-align: center;
		font-family: MyCustomFont, Arial, sans-serif;
		font-size: 12px;
		vertical-align: middle;
		color: #efefef;
	}
	
	.pieContainer {
		position: relative;
		width: 90%;
		height: 60%;
		height: calc(100% - 102px);
		height: -moz-calc(100% - 102px);
		height: -webkit-calc(100% - 102px);
		margin: 0px auto;
	}
	
	.preSpanblockFl {
		position: relative;
		float: left;
		display: inline-block;
		width: 20%;
		height: 27px;
		line-height: 27px;
		text-align: center;
		font-family: MyCustomFont, Arial, sans-serif;
		font-size: 20px;
		color: #49eeff;
		border-left: 2px #043343 solid;
		border-right: 2px #043343 solid;
	}
	
	.preSpanblockFlL {
		position: relative;
		float: left;
		display: inline-block;
		width: 20%;
		height: 27px;
		line-height: 18px;
		text-align: center;
		font-family: MyCustomFont, Arial, sans-serif;
		font-size: 12px;
		vertical-align: middle;
		color: #efefef;
		border-left: 2px #043343 solid;
		border-right: 2px #043343 solid;
	}
	
	.pieContainer {
		position: absolute;
		width: 90%;
		height: 80%;
		height: calc(100% - 32px);
		height: -moz-calc(100% - 32px);
		height: -webkit-calc(100% - 32px);
		margin: -30px auto 0px;
		padding-left: 20px
	}
	
	.preSpanblockFlR {
		position: relative;
		float: right;
		display: block;
		width: 85px;
		height: 25px;
		padding: 5px;
		line-height: 5px;
		text-align: right;
		font-family: MyCustomFont, Arial, sans-serif;
		font-size: 12px;
		vertical-align: middle;
		color: #efefef;
	}
	
	.pieContainer2 {
		position: relative;
		width: 100%;
		height: 100%;
		height: calc(100% - 28px);
		height: -moz-calc(100% - 28px);
		height: -webkit-calc(100% - 28px);
		margin: 0px auto;
	}
	
	.dDzonghe_tj {
		position: absolute;
		display: block;
		text-align: center;
		font-family: MyCustomFont, Arial, sans-serif;
		font-size: 20px;
		color: #daf6ff;
		cursor: pointer;
	}
	
	.cTzonghe_tj {
		position: absolute;
		text-align: center;
		font-family: MyCustomFont, Arial, sans-serif;
		font-size: 28px;
		color: #44ffff;
		display: block;
		line-height: 48px;
	}
	
	.cTzonghe_lable {
		position: absolute;
		font-family: '方正综艺简体';
		font-size: 18px;
		text-align: center;
		color: #daf6ff;
		display: block;
		line-height: 48px;
	}
	
	#titleimg2 {
		position: absolute;
		right: -25px;
		display: block;
		pointer-events: none;
	}
	/*横向柱状条图 样式 start*/
	
	.h_zhu_p {
		position: relative;
		left: 5%;
		display: block;
		width: 90%;
		height: 40%;
		background: #1c4549;
	}
	
	.h_zhu_ca {
		position: relative;
		float: left;
		margin-top: 0px;
		display: block;
		height: 100%;
		background: #FFFF00;
	}
	
	.h_zhu_cb {
		position: relative;
		float: left;
		margin-top: 0px;
		display: block;
		height: 100%;
		background: #00bff3;
	}
	/*横向柱状条图 样式 end*/
	/*报警异常动画按钮*/
	
	.warningGifbtn {
		position: relative;
		top: 0px;
		float: right;
		right: 5px;
		width: 50px;
		height: 35px;
		overflow: hidden;
		font-size: 1.1em;
	}
	
	.warningGifbtn img {
		border: none;
		pointer-events: none;
	}
	
	.warningGifbtn div {
		cursor: pointer;
		position: absolute;
		font-size: 1.1em;
		top: 2px;
		height: 32px;
		width: 50px;
	}
	
	.warningGifbtn div span {
		color: #ffcc00;
		display: block;
		width: 50px;
		height: 32px;
		text-align: center;
		top: 0px;
	}
	/*报警异常动画按钮*/
	
	
	
	.topbanner_rrepeat {
		position: relative;
		margin-top: -58px;
		margin-right: 420px;
		width: calc(100% - 490px);
		height: 58px;
		overflow: hidden;
	}
	
	.firstTj_city {
		background: rgba(6, 28, 39, 0.0);
		top: 0px;
		width: 50%;
		height: auto;
		left: 0px;
		float: left;
		display: inline-block;
		position: relative;
	}
	
	.zongzhishu {
		position: absolute;
		top: 0px;
		left: -42px;
		width: 132px;
		text-align: center;
		font-size: 43px;
		display: block;
		color: rgb(134, 255, 16);
	}
	
	.zongzhishuLab {
		position: absolute;
		left: -40px;
		font-size: 22px;
		top: 49px;
		width: 65px;
		text-align: right;
	}
	
	.inaLable {
	    color: #44ffff;
	    display: block;
	    position: absolute;
	    font-size: 1em;
	    text-align: right;
	}
	.inbLable {
	    color: #44ffff;
	    display: block;
	    position: absolute;
	    font-size: 1.5em;
	    text-align: left;
	    font-family: "MyCustomFont", Arial, sans-serif;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    width: 77px;
	    left: -50px;
	}
	.containerrubish{
		width: 100%;
		height: 100%;
		height: calc(100% - 30px);
		height: -moz-calc(100% - 30px);
		height: -webkit-calc(100% - 30px);
		position: absolute;
		top:40px;
		/*padding-top:30px;*/
	}
	@media (max-width: 1080px) {
		.f_top_banner_rContiner {
			left: 640px;
		}
		.partNum {
			transform: scale(.76);
			-ms-transform: scale(.76);
			-moz-transform: scale(.76);
			-webkit-transform: scale(.76);
			-o-transform: scale(.65);
		}
	}
	@media (max-width: 1280px) {
		.firstTj_city {
			top: 0px !important;
			;
		}
		.firstTj_city2 {
			background: rgba(6, 28, 39, 0.3);
			width: 50%;
			height: 100%;
			float: right;
			display: inline-block;
			position: relative;
			top: -32px!important;
		}
	}
	
	@media (min-width: 1280px) and (max-width: 1366px) {
		.firstTj_city {
			top: 0px !important;
		}
		.firstTj_city2 {
			background: rgba(6, 28, 39, 0.3);
			width: 50%;
			height: 100%;
			float: right;
			display: inline-block;
			position: relative;
			top: -32px!important;
		}
		/*.firstTj_city2 .sectitleN{visibility: none !important; display:none !important;color: red !important;}*/
	}
	
	@media (min-width: 1366px) and (max-width: 1440px) {
		.firstTj_city {
			top: 0px !important;
		}
		.firstTj_city>div>div>span:nth-child(1) {
			top: -30%!important;
			left: -20%!important;
		}
		.firstTj_city>div>div>span:nth-child(2) {
			top: -17%!important;
		}
		.firstTj_city>div>div>span:nth-child(3) {
			top: 15%!important;
		}
		.firstTj_city>div>div>span:nth-child(4) {
			top: 46%!important;
		}
		.zongzhishu {
			top: 7px;
			left: -18px;
			width: 97px;
		}
		.zongzhishuLab {
			top: 49px;
			width: 65px;
			left: -19px;
			font-size: 22px;
			line-height: 1.2em;
		}
		.firstTj_city2 {
			background: rgba(6, 28, 39, .3);
			width: 45%;
			height: 100%;
			right: 0%;
			float: right;
			display: inline-block;
			position: relative;
			top: -32px!important;
		}
		/*.firstTj_city2 .sectitleN{visibility: none !important; display:none !important;color: red !important;}*/
		.partNum {
			transform: scale(.75);
			-ms-transform: scale(.75);
			-moz-transform: scale(.75);
			-webkit-transform: scale(.75);
			-o-transform: scale(.75);
		}
		#portMenuBar img {
			margin-left: -430px!important;
		}
		.sectitleN{visibility: hidden;}
	}
	
	@media (min-height: 605px) and (max-height:663px) {
		.firstTj_city {
			top: 0px!important;
			width: 50%;
			left: 6%;
		}
		.firstTj_city>div {
			width: 40% !important;
		}
		.firstTj_city>div>div>span:nth-child(1) {
			top: -9%!important;
			left: -71%!important;
		}
		.firstTj_city>div>div>span:nth-child(2) {
			top: -27%!important;
		}
		.firstTj_city>div>div>span:nth-child(3) {
			top: 4%!important;
		}
		.firstTj_city>div>div>span:nth-child(4) {
			top: 37%!important;
		}
		.preSpanblockFl {
			line-height: 21px;
			height: 21px;
		}
		.preSpanblockFlL {
			line-height: 14px;
			height: 21px;
		}
		.firstTj_city2 {
			background: rgba(6, 28, 39, .3);
			width: 40%;
			height: 100%;
			float: right;
			display: inline-block;
			position: relative;
			top: -32px!important;
		}
		.firstTj_city2>div {
			margin-top: 0px!important;
		}
		.firstTj_city2 .sectitleN {
			padding-right: 20px;
		}
	}
	
	@media (min-width: 1440px) and (max-width: 1650px) {
		.firstTj_city {
			top: 0px !important;
		}
		.firstTj_city2 {
			background: rgba(6, 28, 39, 0.3);
			width: 44%;
			height: 100%;
			float: right;
			display: inline-block;
			position: relative;
			top: -32px !important;
		}
	}
	/*.firstTj_city2{background:rgba(6,28,39,0.3); width: 44%; height:100%; top:16%; float: right; display: inline-block; position: relative; top:-32px!important;}*/
	
	@media (min-width: 1650px) and (max-width: 1920px) {
		.firstTj_city {
			top: 0px !important;
		}
		.firstTj_city2 {
			background: rgba(6, 28, 39, 0.3);
			width: 44%;
			height: 100%;
			top: 16%;
			float: right;
			display: inline-block;
			position: relative;
			top: -10% !important;
		}
	}
	
	@media all and (min-width: 1920px) {
		.firstTj_city {
			top: 0px !important;
		}
		.firstTj_city2 {
			background: rgba(6, 28, 39, 0.3);
			width: 40%;
			height: 100%;
			float: right;
			display: inline-block;
			position: relative;
			top: -32px !important;
		}
	}
	
	.highcharts-background {
		background: rgba(0, 0, 0, .3);
	}
</style>