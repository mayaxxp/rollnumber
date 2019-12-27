<template>
	<div class="firstPage">
		<Darkmap   ref="ibmap"></Darkmap>
		<div class="f_top_banner">
			<div class="f_top_banner_lContiner">
				<div id="portMenuBar" class="portMenuBar">
					<div class="portMenuBar_a"></div>
					<div class="portMenuBar_b"></div>
					<div class="portMenuBar_c">
						<div class="portMenuBar_ca"></div>
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
						<div style="width:50%;height: auto;position: relative; margin: 40px auto 0px;;">
							<img src="../assets/images/homefirst/boxfirstpage/tlcityimg.png" width="100%" style=" position:relative;left:0px;top:-22px" />
							<div style="position: absolute;width: 100%;height: 100%;background: #00BFF300;top:0%;left: 0px;">
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
						<rollingnum @closeThis="showOrclosePopwindowHander"></rollingnum>
						<span class="sectitleN">资源调度统计</span>
					</div>
					<!--4环形数据统计End-->
				</div>
			</div>
			<!--四圈状资源统计-->
			<div class="model_A">
				<span class="titlename">垃圾终端设施收纳量同期比</span>
				<div id="ljzdsnltqb" style="position:absolute;width:calc(100% - 20px);height:calc(100% - 40px); left:10px;top: 30px;">

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
			<div style="position:absolute;width:58%;height:100%; left:0px;top:0px;">
				<div style="position:absolute;width:100%;height:100%; ">
					<div class="boxaTit"  > 
						<div class="floatL boxaTita"  ></div>
						<div class="floatL titlename boxaTitb"  >公厕保洁</div>
						<div class="floatL boxaTitc"  ></div>
						<div class="floatL boxaTitd" ></div>
						<div class="floatL boxaTite" ></div> 
					</div>
					<div style="width:100%;height:calc(100% - 76px);position:absolute;left: 0px;top:38px; ">
						<div class="floatL boxaTitf" ></div>
						<div class="floatL boxaTitg" ></div>
						<div class="floatL boxaTith" ></div>
					
					
					</div>
					<div style="height: 38px;width:100%;position:absolute; left: 0px;bottom: 0px;">
						<div class="floatL boxaTiti"  ></div>
						<div class="floatL boxaTitj"  ></div>
						<div class="floatL boxaTitk"  ></div>
					</div>
				</div>
				<div style="position:absolute;width:calc(100% - 20px);height:calc(100% - 40px); left:10px;top: 30px;color:#9af50a">
					<div style="position:relative;float:left;width:33%;height:100%; left:0px;top:0px;">

						<div style="font:14px '微软雅黑';position:absolute;left: 5px;top:0px;line-height: 20px; "><span style="width:10px;height:10px;display:inline-block;background:#00bff3;"></span>已保洁{{leftBottomMap.gcbj1}}座</div>
						<div style="font:14px '微软雅黑';position:absolute;left: 5px;top:16px;line-height: 20px;"><span style="width:10px;height:10px;display:inline-block;background:#858585;"></span>总任务{{leftBottomMap.gcbj3}}座</div>
						<div class="warningGifbtn" style="top:5px;">
							<img src="../assets/images/homefirst/boxfirstpage/warningyj.gif" width="50" height="35">
							<div @click="showOrclosePopwindowHander({'id':'popWin_ToiletCleanAlarm','title':'公厕保洁异常列表','url':'/queryDate4PopWin_ToiletCleanAlarm.do','width':400,'height':220})" style="z-index:99;">
								<span id="span_num_7" class="fullspan" style="">{{leftBottomMap.gcbj5}}</span>
							</div>
						</div>
						<div  class="pieboxContent">
							<div id="gcbj" style="height:200px;width:210px;overflow:hidden;position:absolute;top:20px;left:10px;z-index:9;" data-highcharts-chart="2">
								 
							</div>
							<span class="" style="font:14px '微软雅黑';display: block;position: absolute;left:30px;top:127px;">公厕保洁</span>
							<span class="" style="font: 1.2em 微软雅黑;    display: block;    position: absolute;    left: 32px;    top: 99px;">{{leftBottomMap.gcbj4}}%</span>
						</div>
					</div>
					<div style="position:relative;float:left;width:33%;height:100%; left:0px;top:0px;border-left:2px #21668a solid;">

						<div style="font:14px '微软雅黑';position:absolute;left: 5px;top:0px;line-height: 20px; "><span style="width:10px;height:10px;display:inline-block;background:#00bff3;"></span>已出勤{{leftBottomMap.bjykq1}}人</div>
						<div style="font:14px '微软雅黑';position:absolute;left: 5px;top:16px;line-height: 20px;"><span style="width:10px;height:10px;display:inline-block;background:#858585;"></span>总人数{{leftBottomMap.bjykq3}}人</div>
						<div class="warningGifbtn" style="top:-5px;">
							<img src="../assets/images/homefirst/boxfirstpage/warningyj.gif" width="50" height="35">
							<div @click="showOrclosePopwindowHander({'id':'popWin_ToiletCleanAlarm','title':'公厕保洁异常列表','url':'/queryDate4PopWin_ToiletCleanAlarm.do','width':400,'height':220})"  style="z-index:99;">
								<span style="" class="fullspan">0</span>
							</div>
						</div>
						<div class="pieboxContent" >
							<div id="bjykq" style="height:200px;width:210px;overflow:hidden;position:absolute;top:20px;left:10px;z-index:9;" data-highcharts-chart="3">
								 
							</div>
							<span class="" style="font:14px '微软雅黑';display: block;position: absolute;left:30px;top:127px;">保洁员考勤</span>
							<span class="" style="font: 1.2em 微软雅黑;    display: block;    position: absolute;    left: 32px;    top: 99px;">{{leftBottomMap.bjykq4}}%</span>
						</div>
					</div>
					<div style="position:relative;float:left;width:33%;height:100%; left:0px;top:0px;border-left:2px #21668a solid;">

						<div style="font:14px '微软雅黑';position:absolute;left: 5px;top:0px;line-height: 20px; "><span style="width:10px;height:10px;display:inline-block;background:#00bff3;"></span>已清抽{{leftBottomMap.gcqc1}}座</div>
						<div style="font:14px '微软雅黑';position:absolute;left: 5px;top:16px;line-height: 20px;"><span style="width:10px;height:10px;display:inline-block;background:#858585;"></span>总任务{{leftBottomMap.gcqc3}}座</div>
						<div class="warningGifbtn" style="top:-5px;">
							<img src="../assets/images/homefirst/boxfirstpage/warningyj.gif" width="50" height="35">
							<div  @click="showOrclosePopwindowHander({'id':'popWin_ToiletCleanAlarm','title':'公厕保洁异常列表','url':'/queryDate4PopWin_ToiletCleanAlarm.do','width':650,'height':220})" style="z-index:99;">
								<span style="" class="fullspan">{{leftBottomMap.gcqc5}}</span>
							</div>
						</div>
						<div class="pieboxContent">
							<div id="gcqc" style="height:200px;width:210px;overflow:hidden;position:absolute;top:20px;left:10px;z-index:9;" data-highcharts-chart="4">
								 
							</div>
							<span class="" style="font:14px '微软雅黑';display: block;position: absolute;left:30px;top:127px;">公厕清抽</span>
							<span class="" style="font: 1.2em 微软雅黑;    display: block;    position: absolute;    left: 32px;    top: 99px;">{{leftBottomMap.gcqc4}}%</span>
						</div>
					</div>
				</div>
 
			</div>
			<div class="bottomrRoad">
				<div class="floatL titlenameTR"  style="position:absolute;width:100%;height:100%;padding-left:48px; ">
					道路清洁实时里程统计
					 <div class="warningGifbtn" >
							<img src="../assets/images/homefirst/boxfirstpage/warningyj.gif" width="50" height="35"  /> 
							<div @click="showOrclosePopwindowHander({'id':'popWin_WarnRoadCleanDataPage','title':'道路清洁报警路段','url':'/queryDate4PopWin_ToiletCleanAlarm.do','width':650,'height':250})"   style="z-index:99;">
								<span id="span_num_8" style="font-size:0.8em;"  class="fullspan" >04234</span>  
								 <span style="color: #ffcc00;display:block;width:50px; height:15px;text-align: center;">异常</span> 
							</div>
					</div>
				</div>
				<div id="containerroad" @click="showOrclosePopwindowHander({'id':'win_work_road','title':'道路清洁实时里程列表','url':'/queryDate4PopWin_ToiletCleanAlarm.do','width':650,'height':220})"
					style="position:absolute;width:100%;height:calc(100% - 42px);height:80%;height:calc(100% - 42px);height:-moz-calc(100% - 42px);
					height:-webkit-calc(100% - 42px);background:#011f35a3;left: 0px;top:35px;overflow: hidden;">
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
		 		<span class="spanblock titlenameTR">垃圾清运完成率</span>
		 		<div class="pieContainer" style="">
		 				<div class="warningGifbtn" style="float: left; top:25px;left: -10px;"  >
							<img src="../assets/images/homefirst/boxfirstpage/warningyj.gif" width="50" height="30"  />
<!-- 							<div  onclick="warningInfoPool('9');" style="cursor: pointer;z-index:888;"> -->
								<div  @click="showPopWin('popWin_ttt','垃圾清运异常情况','<%=path%>/queryNoRecevingAlarm.do')" style="cursor: pointer;z-index:888;">
							 	<!--<span id="span_num_9"  class="fullspan" >0</span> -->  
								<span   class="fullspan" >{{noReceivingTotal}}</span> 
								</div>
						</div> 
	 			</div>
		 		<div id="containerrubish" style="width: 100%;height:80%;position: relative;margin-top:20px;">
 
				</div>
		 	</div>
		 	<div class="rightBottomTb"  >
		 		<span class="spanblock titlenameTR">道路作业分类统计</span>
		 		<div id="" style="width: 100%;height:100%;position: relative;margin-top: 0px;">
		 			<div style="position:relative;width:90%;height:21px;background:#022835;margin:0px auto ; ">
		 			 	<span class="preSpanblockFlL"><span style="color:yellow;font-size: 25px;">■</span>作业中</span>
		 			 	<span class="preSpanblockFlL"><span style="color:#00bff3;font-size: 25px;">■</span>已作业</span> 
		 			 	<span class="preSpanblockFlL"><span style="color:#00ff00;font-size: 25px;">■</span>正常</span>
		 			 	<span class="preSpanblockFlL"><span style="color:#fc2626;font-size: 25px;">■</span>超速</span>
		 			 	<span class="preSpanblockFlL"><span style="color:#ece7cf;font-size: 25px;">■</span>未作业</span>
		 			</div>
		 			<div id="div_container_roadclean_pie" @click="showOrclosePopwindowHander({'id':'work_road','title':'道路作业分类列表','url':'/queryDate4PopWin_ToiletCleanAlarm.do','width':650,'height':220})" class="pieContainer2"></div>
		 		</div>
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
	import { getGCBJopition, getLajiCZoption,getRoadTotaloption,getRoadtypeOption,getRubbComple} from '@/common/js/hchartsOptions'

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
					total: 7870, // 总的需要完成的里程（千米）
				    weiWanCheng: [ // 已经完成的里程 （1-24小时）
				      ],
				    yiWanCheng: [ // 没有完成的里程
				      ]
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
  			if(window.sessionStorage.getItem("token")){
 				//在页面刷新时将vuex里的信息保存到sessionStorage里 
	  			let that=this
	  			window.addEventListener("beforeunload",()=>{
			  			window.sessionStorage.setItem("store",JSON.stringify(that.$store.state)) 
		  		}) 
		  		window.unload=()=>{ 
					    // 加载完成之前，执行。执行顺序:父组件-子组件
						  if(window.sessionStorage.getItem("store") ) { 
									that.$store.replaceState(Object.assign({}, that.$store.state,JSON.parse(sessionStorage.getItem("store")))) 
									window.sessionStorage.removeItem("store")
									that.$store.dispatch('loginingStateChange',new Date().getTime().toString())
									let logintime=(new Date()).getTime().toString()   //继续前端登录时长计时--获取上次时间
	          						that.$store.dispatch('loginingStateChange',logintime)   //继续前端登录时长计时
						  } 
		  		}
 			}
  		},
		mounted() {
			this.getMenu();
			this.initCityljd(); //综合指数
			this.initGlobaldata();//页面大多数指数
			this.initLaj(); //垃圾场站  本&上周统计（左中）
			this.gongcebaoji(); //公厕保洁
			this.initRoad();//道路清洁实时里程
			this.initRoadtype();//道路作业分类统计
			this.initRubishComplt()//垃圾清运完成率
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
			initCityljd() {
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
				this.axios.post("/welcome/welcomeGw",obj ).then((data)=>{ 
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
			initRoad(){
				let retMapData=this.retMap
				let option_=getRoadTotaloption(retMapData);
				Highcharts.chart('containerroad',option_) 
			},
			initRoadtype(){
				let option_=getRoadtypeOption();
				Highcharts.chart('div_container_roadclean_pie',option_)
			},
			initRubishComplt(){
				let option_=getRubbComple()	
				Highcharts.chart('containerrubish',option_)
			}
			,gongcebaoji() {
				if(!Highcharts.theme) {
					Highcharts.setOptions({
						chart: {
							backgroundColor: 'red'
						},
						colors: ['#ef0808', '#9DFF02', '#CCCCCC'],
						title: {
							style: {
								color: 'silver'
							}
						},
						tooltip: {
							style: {
								color: 'silver'
							}
						}
					});
				}
				let ptionGcbj = getGCBJopition({'num':30,'color':'#b5ff52'});
				let that = this
				//公厕保洁start
				 
				Highcharts.chart('gcbj', ptionGcbj,function callback(){ 
//					let kpg="M 28.9 28.65 Q 27.85 30.5 26.85 31.15 25.85 31.85 23.85 32 L 7.6 31.95 Q 6.45 31.95 5.9 31.7 5.25 31.45 5.05 30.8 4.95 30.15 5.2 29.45 5.6 28.8 6.45 28.1 7.8 27.1 8.4 26.15 9.15 25.1 9.1 23.75 L 9.1 20.45 Q 9.1 19.15 9.75 18.6 10.35 18.05 11.75 18.05 L 16.15 18.05 16.15 8.3 Q 16.15 6.95 17.1 5.95 18.05 5 19.35 5 20.65 5 21.55 5.95 22.4 6.95 22.4 8.3 L 22.4 18.05 27.45 18.05 Q 29 18.05 29.45 18.35 30 18.75 30 20.1 L 30 22.75 Q 30 23.6 29.7 24.15 29.2 24.75 28.35 24.75 L 13.55 24.75"
//					let nkpg=kpg.replace(/\s/g,",").replace(/M/g,"'M'").replace(/Q/g,"'Q'").replace(/L/g,"'L'")
// 					console.log(nkpg)
					 this.renderer.path(['M',28.9,28.65,'Q',27.85,30.5,26.85,31.15,25.85,31.85,23.85,32,'L',7.6,31.95,'Q',6.45,31.95,5.9,31.7,5.25,31.45,5.05,30.8,4.95,30.15,5.2,29.45,5.6,28.8,6.45,28.1,7.8,27.1,8.4,26.15,9.15,25.1,9.1,23.75,'L',9.1,20.45,'Q',9.1,19.15,9.75,18.6,10.35,18.05,11.75,18.05,'L',16.15,18.05,16.15,8.3,'Q',16.15,6.95,17.1,5.95,18.05,5,19.35,5,20.65,5,21.55,5.95,22.4,6.95,22.4,8.3,'L',22.4,18.05,27.45,18.05,'Q',29,18.05,29.45,18.35,30,18.75,30,20.1,'L',30,22.75,'Q',30,23.6,29.7,24.15,29.2,24.75,28.35,24.75,'L',13.55,24.75])
						.attr({
						'stroke': '#b5ff52',
						'stroke-linecap': 'round',
						'stroke-linejoin': 'round',
						'stroke-width': 2,
						'zIndex': 0
					}).translate(90, 95).add(ptionGcbj.series[1].group); 
				})
				//公厕保洁End
				//保洁考勤start
				let ptionbjykq = getGCBJopition({'num':60,'color':'#f6ff6e'});
				Highcharts.chart('bjykq', ptionbjykq,function callback(){ 
					// Stand icon
					this.renderer.path(['M',24.45,6.2,'L',24.45,9.5,'M',27.6,8.1,'Q',28.8,8.1,29.15,8.2,30,8.45,30,9.35,30,14.8,30,25.55,'L',30,26.95,'Q',30,27.5,29.7,27.8,29.4,28.2,28.9,28.2,'L',6.2,28.2,'Q',5.7,28.2,5.4,27.8,5,27.45,5,26.95,'L',5,9.35,'Q',5,8.7,5.5,8.4,5.95,8.05,6.55,8.05,'L',7.4,8.05,'M',13.2,17.35,'L',16.1,20.4,'Q',16.4,20.7,16.8,20.75,17.25,20.75,17.6,20.45,'L',22.7,16.15,'M',10.8,6.2,'L',10.8,9.5,'M',14.1,8.1,'L',21,8.1])
						.attr({
						'stroke': '#f6ff6e',
						'stroke-linecap': 'round',
						'stroke-linejoin': 'round',
						'stroke-width': 2,
						'zIndex': 0
					}).translate(90, 95).add(ptionGcbj.series[1].group); 
				})
				//保洁考勤End
				//公厕清抽start
				
				let ptiongcqc= getGCBJopition({'num':90,'color':'#52a0ff'});
				Highcharts.chart('gcqc', ptiongcqc,function callback(){ 
					// Stand icon
					this.renderer.path(['M',23.2,23.9,'L',20.65,21.45,'Q',19.65,22.4,18.15,22.4,'L',18.1,22.4,18.1,25.65,'M',23.2,13.8,'L',20.85,16.15,'Q',21.8,17.2,21.8,18.7,21.8,18.75,21.8,18.8,'L',24.85,18.8,'M',21.8,18.8,'Q',21.75,20.3,20.75,21.35,20.7,21.4,20.65,21.45,'M',18.1,11.7,'L',18.1,15,18.15,15,'Q',19.65,15,20.75,16.05,20.8,16.1,20.85,16.15,'M',14.75,5,'L',12.7,5,12.7,9.45,'Q',15.05,8.1,18.1,8.1,22.6,8.1,25.8,11.3,29,14.5,29,19.05,29,23.55,25.8,26.75,22.6,30,18.1,30,13.5,30,10.3,26.75,7.65,24.15,7.2,20.7,7.1,20.05,7.05,19.45,'L',7.05,5,5,5,'M',13,13.8,'L',15.4,16.15,'Q',15.45,16.1,15.45,16.05,16.55,15,18.1,15,'M',13.25,23.65,'L',15.55,21.4,'Q',15.5,21.4,15.45,21.35,14.45,20.3,14.4,18.8,'L',11.25,18.8,'M',14.4,18.8,'Q',14.4,18.75,14.4,18.7,14.4,17.2,15.4,16.15,'M',18.1,22.4,'Q',16.6,22.4,15.55,21.4])
						.attr({
						'stroke': '#52a0ff',
						'stroke-linecap': 'round',
						'stroke-linejoin': 'round',
						'stroke-width':2,
						'zIndex': 0
					}).translate(90, 95).add(ptionGcbj.series[1].group); 
				})
				//公厕清抽End
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
			,'retMap':{
				handler(newValue,oldValue){ 
					this.initRoad();
				},
				deep:true
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
		min-width: 1060px;
		height: 58px;
		margin-left: auto;
		margin-right: auto;
		top: 0px;
		border-top: 1px solid #000000;
		background: url('../assets/images/homefirst/appTopbanner_centerrepeat.png') repeat-x;
	}
	
	.f_top_banner_lContiner {
		width: 45%;
		height: 58px;
		margin-left: 0px;
		min-width: 584px;
	}
	
	.f_top_banner_rContiner {
		position: absolute;
		top: 0px;
		right: 0px;
		width: 420px;
		height: 58px;
		overflow: hidden;
	}
	
	.portMenuBar {
		width: 100%;
		height: 58px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.portMenuBar>.portMenuBar_a {
		float: right;
		position: relative;
		width: 106px;
		height: 100%;
		background: url('../assets/images/homefirst/appTopbanner_leftfillet.png') no-repeat;
		margin-right: -70px;
	}
	
	.portMenuBar>.portMenuBar_b {
		float: right;
		position: relative;
		width: 542px;
		height: 100%;
		background: url('../assets/images/homefirst/appTopbanner_logo.png') no-repeat;
	}
	
	.portMenuBar>.portMenuBar_c {
		float: right;
		position: relative;
		width: 1px;
		height: 100%;
		background: url('../assets/images/homefirst/appTopbanner_leftrepeat.png')
	}
	
	.portMenuBar>.portMenuBar_c>.portMenuBar_ca {
		margin-left: -499px;
		float: left;
		position: absolute;
		width: 500px;
		height: 100%;
		background: url('../assets/images/homefirst/appTopbanner_leftrepeat.png')
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
		width: 45%;
		height: 60%;
		height: calc((100% - 58px)*.67);
		height: -moz-calc((100% - 58px)*.67);
		height: -webkit-calc((100% - 58px)*.67);
		left: 0px;
		top: 58px;
		min-width: 580px;
		background: rgba(1, 64, 98, 0.9);
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
		width: calc(100% - 350px);
		height: 33%;
		height: calc((100% - 58px)*.33);
		height: -moz-calc((100% - 58px)*.33);
		height: -webkit-calc((100% - 58px)*.33);
		bottom: 33%;
		bottom: calc((100% - 58px)*.33);
		bottom: -moz-calc((100% - 58px)*.33);
		bottom: -webkit-calc((100% - 58px)*.33);
		left: 0px; 
		background:rgba(1, 64, 98, 0.1) url(../assets/images/homefirst/boxfirstpage/hengxiangrepeat.png) left top repeat-x;
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
		height: calc(100% - 44px);
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
	
	.rightBottomTb{position: relative;top: 0px;left: 0px;background: url(../assets/images/homefirst/boxfirstpage/mRboxtop.png) left top no-repeat;width:100%;height:33%;}
 	.rightMiddleTb{position: relative;top: 0px;left: 0px;background: url(../assets/images/homefirst/boxfirstpage/mRboxtop.png) left top no-repeat;width:100%;height:32%;}
 	.rightTopTb{position: relative;top: 0px;left: 0px;background: url(../assets/images/homefirst/boxfirstpage/tRboxtop.png) left top no-repeat;width:100%;height:35%;overflow:hidden;}
		 	
	
	
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
	
	.topbanner_rContiner {
		position: absolute;
		top: 0px;
		right: 0px;
		width: 420px;
		height: 58px;
		overflow: hidden;
	}
	
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
	.pieboxContent{width:210px;height:200px;position:absolute;bottom:0px;left:-10px;cursor:pointer;} 
	
	@media (max-width: 1080px) {
		.topbanner_rContiner {
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
		.sectitleN { 
			top: 0px; 
		}
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
			left: -33px;
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
		.sectitleN { 
			top: 0px; 
		}
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
		.sectitleN { 
			top: 0px; 
		}
		.models_bottom {
			 
			background:rgba(0, 44, 68, 0.9) url(../assets/images/homefirst/boxfirstpage/hengxiangrepeat.png) left 22px repeat-x;
		}
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
		.pieboxContent{width:210px;height:200px;position:absolute;bottom:20px;left:10px;cursor:pointer;} 
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