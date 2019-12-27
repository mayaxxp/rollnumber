<template>
	<div class="welcomDefault">
		<img class="bodyBG" src="../assets/images/loginpage/child_progBG.jpg"/>
		<img class="bodyBGFixed" src="../assets/images/loginpage/child_progBG.png"/>
		<div class="top_banner_cg">
			<div class="top_banner_mid">
				<img class="top_banner_logotitle" src="../assets/images/loginpage/childPrg_toplogo.jpg" />
			</div>
			<div class="top_banner_right">
				<div class="controlBox" >
					<div id="apIco_set" class="apIco apIco_set" @mouseover="changesystitle('set')" > </div>
					<div id="apIco_user" @click="logOutSys" @mouseover="changesystitle('user')" class="apIco apIco_user"></div> 
					<div id="app_tip" class="app_tr_tip"><span class="tipleft">{{systitle}}</span><span class="tipright"></span></div>
				</div>
			</div>
		</div>
		<div class="center_contentbox" id="center_contentbox">
			<div  id="userBasicInfo" :class="{'basic_Info':true,'hidebasicInfo':showbasicInfo}">
				<div id="userBox">
					<div class="userimg">  
							<img title="该用户没有上传照片" src="../assets/images/loginpage/touxiang_normal.png" style="margin: 5px;" width="95" height="114"/> 
					</div>
					<div class="userI">
						<h2>当前用户</h2>
						<h3>{{user.user_name}}</h3><br/>
						<span>{{user.user_orgName}}</span>
						<span>{{user.user_phone}}</span>
						<a class="changePass" @click="changePassword();"><i></i><span>修改密码</span></a>
					</div>
					<div class="userI left">
						<h2>登录时间</h2>
						<h2 class="yellowcolor">{{loginLastTime}}</h2> <br />
						<h2>当月登录</h2>
						<h2 class="yellowcolor">{{loginTimes}}次</h2>
					</div>
				</div> 
				<div id="wheatherBox"  >
					<iframe width="100%" scrolling="no" height="98%" frameborder="0" allowtransparency="true"  src="http://i.tianqi.com/index.php?c=code&id=19&color=%23FFFFFF&icon=6&py=haidian&temp=1&num=3&site=13"></iframe>
				</div>
				<div class="newsCenterBox">
					 <div id="newsmenu">
						<ul>
							<li :class="{'select_limenu':(newsmenuIndex==0)}" @click="slecendItem(0)">工作动态</li>
							<li :class="{'select_limenu':(newsmenuIndex==1)}" @click="slecendItem(1)">通知公告</li>
							<li :class="{'select_limenu':(newsmenuIndex==2)}" @click="slecendItem(2)">下载中心</li>
						</ul>
					</div>
					<div id="worksBox" :class="{'newsDataItem':true,'beblocks':(newsmenuIndex==0)}">
						 
						<ul > 
							<li v-for="item in dynamicList" :key="item.id"><a href="javascript:void(0);" @click="particulars(item.id,'2')"><i></i><span>{{item.title}}</span><label>{{item.publish_time}}</label></a></li>
						</ul> 
					</div>
					<div id="noticeInfos" :class="{'newsDataItem':true,'beblocks':(newsmenuIndex==1)}"> 
						<ul>
							<li v-for="item in informList" :key="item.id"><a href="javascript:void(0);" @click="particulars(item.id,'1')"><i></i><span>{{item.title}}</span><label>{{item.publish_time}}</label></a></li>
						</ul> 
					</div>
					<div id="downloadCenter" :class="{'newsDataItem':true,'beblocks':(newsmenuIndex==2)}">
						<ul>
							<li v-for="item in downloadList" :key="item.id"><a href="javascript:void(0);" @click="particulars(item.id,'7')"><i></i><span>{{item.title}}</span><label>{{item.publish_time}}</label></a></li>
						</ul> 
					</div> 
				</div>
			</div>
			<div id="childPro_port" class="childPro_port">
				<div class="toleftBtn" @click="toleftHander" @mousedown="toleftHander"   @mouseup="toleftHander"><i></i></div>
				<div class="childPro_itemGroup">
					<div class="childPro_itemCox_S" ref="protBtnBox" :style="getTranformX(showIndexOfMenu)">
						<div class="childPro_itemCox">
							<div id="CCDD" class="childPro_itemB ljcddIco" @click="getMenuMain(this.className,'CCDD');">
								<i></i><h3>垃圾车调度系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="GLBJCDD" class="childPro_itemB glbjIco" @click="getMenuMain(this.className,'GLBJCDD');">
								<i></i><h3>道路清洁管理系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="FBCDD" class="childPro_itemB fbcddIco" @click="getMenuMain(this.className,'FBCDD');">
								<i></i><h3>粪便车调度系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="JCCDD" class="childPro_itemB jccddIco" @click="getMenuMain(this.className,'JCCDD');">
								<i></i><h3>检查车管理系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="GCBJ" class="childPro_itemB gcbjIco" @click="getMenuMain(this.className,'GCBJ');">
								<i></i><h3>公厕保洁管理系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="ZYML" class="childPro_itemB hwzyIco" @click="getMenuMain(this.className,'ZYML');">
								<i></i><h3>环卫资源管理系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="RCGZ" class="childPro_itemB rcgzIco" @click="getMenuMain(this.className,'RCGZ');">
								<i></i><h3>日常工作管理系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="CLBJ" class="childPro_itemB clbjIco" @click="getMenuMain(this.className,'CLBJ');">
								<i></i><h3>车辆报警管理系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="SPJG" class="childPro_itemB spjgIco" @click="getMenuMain(this.className,'SPJG');">
								<i></i><h3>视频监管系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="YJZH" class="childPro_itemB yjzhIco" @click="getMenuMain(this.className,'YJZH');">
								<i></i><h3>应急指挥系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="ZDCL" class="childPro_itemB zdjgIco" @click="getMenuMain(this.className,'ZDCL');">
								<i></i><h3>终端监管系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="ZYKH" class="childPro_itemB zykhIco" @click="getMenuMain(this.className,'ZYKH');">
								<i></i><h3>作业考核系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="ZHTJ" class="childPro_itemB zhtjIco" @click="getMenuMain(this.className,'ZHTJ');">
								<i></i><h3>综合统计系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="ljjg" class="childPro_itemB lajjyIco" @click="getMenuMain(this.className,'ljjg');">
								<i></i><h3>生活垃圾收集运输<br/>处理监管平台</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div id="ddt" class="childPro_itemB ddtIco" @click="getMenuMain(this.className,'ddt');">
								<i></i><h3>调度台管理子系统</h3>
							</div>
						</div> 
						 
						<!--<div class="childPro_itemCox">
							<div class="childPro_item hwzyIco" onclick="getMenuMain(this.className,'ZYML');">
								<i></i><h3>环卫资源管理系统</h3>
							</div>
							<div class="childPro_item gcbjIco" onclick="getMenuMain(this.className,'GCBJ');">
								<i></i><h3>公厕保洁管理系统</h3>
							</div>
						</div>
						<div class="childPro_itemCox">
							<div class="childPro_itemB lajjyIco" onclick="getMenuMain(this.className,'ljjg');">
								<i></i><h3>海淀区垃圾集运<br/>管理信息系统</h3>
							</div>
						</div>-->
						 
					</div>
				</div>
				<div class="toRightBtn" @click="torightHander" @mousedown="torightHander" @mouseup="torightHander"><i ></i></div>
			</div>
			<div id="center_box" class="tubiaoBox">
				  <div id="tableTubiao"  >
				  		<div id="line1" class="rowtubiao" style="display: none;">
							<div id="fenxichaxun" class="tubiaoContainer" >
								<div id="line1col1" style="position:absolute;height: 100%;width:100%;" ></div>
							</div>
							<div id="fenxichaxunB" class="tubiaoContainer">
								<div id="line1col2" style="position:absolute;height: 100%;width:100%;"></div>
							</div>
							<div id="fenxichaxunL" class="tubiaoContainer">
								<div id="line1col3" style="position:absolute;height: 100%;width:100%;"></div>
							</div>
						</div>
						<div id="line2" class="rowtubiao">
							<div id="fenxichaxunD" class="tubiaoContainer ">
								<div id="line2col1" style="position:absolute;height: 100%;width:100%;"></div>
							</div>
							<div id="fenxichaxunH" class="tubiaoContainer ">
								<div id="line2col2" style="position:absolute;height: 100%;width:100%;"></div>
							</div>
							<div id="fenxichaxunF" class="tubiaoContainer ">
								<div id="line2col3" style="position:absolute;height: 100%;width:100%;"></div>
							</div>
						</div>
						<div id="line3" class="rowtubiao" style="display: none;">
							<div id="fenxichaxunG" class="tubiaoContainer ">
								<div id="line3col1" style="position:absolute;height: 100%;width:100%;"></div>
							</div>
							<div id="fenxichaxunE" class="tubiaoContainer ">
								<div id="line3col2" style="position:absolute;height: 100%;width:100%;"></div>
							</div>
							<div id="fenxichaxunI" class="tubiaoContainer ">
								<div id="line3col3" style="position:absolute;height: 100%;width:100%;"></div>
							</div>
						</div>
						<div id="line4" class="rowtubiao" style="display: none;">
							<div id="fenxichaxunJ" class="tubiaoContainer ">
								<div id="line4col1" style="position:absolute;height: 100%;width:100%;"></div>
							</div>
							<div id="fenxichaxunK" class="tubiaoContainer ">
								<div id="line4col2" style="position:absolute;height: 100%;width:100%;"></div>
							</div>
							<div id="fenxichaxunC" class="tubiaoContainer ">
								<div id="line4col3" style="position:absolute;height: 100%;width:100%;"></div>
							</div>
						</div> 
				  </div>
			</div>
			<div :class="{'tobottomBtn':true,'totopBtn':showbasicInfo}" @click="showbasicInfo_handler"></div>
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
	import '@/assets/css/mainTopbanner/hdhwChild_prog.css'
	export default {
		name: 'welcomDefault',
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
				dataInfo: {}
				,user:{
					 user_name:'某某'
					,user_orgName:'一队管理员'
					,user_phone:13800138000
					,imgUrl:'../assets/images/loginpage/touxiang_normal.png'
				}
				,loginLastTime:'2019-12-31 12:30:01'
				,loginTimes:'4'
				,newsmenuIndex:0
				,dynamicList:[{id:'mic001',title:'测试001',publish_time:'1900-01-01 13:00:00'}
								,{id:'mic0011',title:'测试0011',publish_time:'1900-01-01 12:14:00'}
								,{id:'mic0012',title:'测试0011',publish_time:'1900-01-01 12:15:00'}
								,{id:'mic0013',title:'测试0011',publish_time:'1900-01-01 12:16:00'}
								,{id:'mic0014',title:'测试0011',publish_time:'1900-01-01 12:17:00'}
								,{id:'mic0015',title:'测试0011',publish_time:'1900-01-01 12:18:00'}
								,{id:'mic0016',title:'测试0011',publish_time:'1900-01-01 12:19:00'}]
				,informList:[{id:'mid002',title:'测试002',publish_time:'1900-01-01 13:00:00'},{id:'mid0022',title:'测试0022',publish_time:'1900-01-01 13:02:00'}]
				,downloadList:[{id:'mid003',title:'测试003',publish_time:'1900-01-01 14:00:00'},{id:'mid0033',title:'测试0033',publish_time:'1900-01-01 14:22:00'}]
				,showIndexOfMenu:0
				,wheatherUrl:'http://i.tianqi.com/index.php'//'http://i.tianqi.com/index.php?c=code&id=19&color=%23FFFFFF&icon=6&py=haidian&temp=1&num=3&site=13'
				,wheatherHtml:''
				,toRDsq:null
				,toLDsq:null
				,showbasicInfo:false
				,systitle:'系统设置a '
			}
		},
		created(){
  		
  		},
		mounted() {
			let that=this
			this.getMenu();  
			this.initGlobaldata();//页面大多数指数
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
			getWheather(){
				let url_=this.wheatherUrl; 
				this.axios.get(url_,{c:'code'
				,id:'19'
				,color:'%23FFFFFF'
				,icon:'6'
				,py:'haidian'
				,temp:1
				,num:3
				,site:13}).then((data) => {
					console.log(data)
					 this.wheatherHtml=data
				}).catch((error) => {
					 console.log(error)
				}); 
			}
			,
			changePassword() {
				this.$showTostinfo('修改密码接口调试中...',this);
			},
			logOutSys(){
				 this.$store.dispatch('logoutState') 
			},
			changesystitle(str){
				if(str==='user'){
					this.systitle='退出系统'
				}else if(str==='set'){
					this.systitle='系统设置'
				}
			}
			,getoWner() {
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
			initGlobaldata() {
				let obj = {}
				let that = this 
				this.axios.post("/welcome/welcomeNormal",obj ).then((data)=>{ 
					console.log(data)
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

			}
			,getMenuMain(classname,id){}
			,slecendItem(index){
				this.newsmenuIndex=index
			},
			particulars(id_,index){
				
			}
			,showbasicInfo_handler(){
				this.showbasicInfo=!this.showbasicInfo;
			}
			,torightHander(){
				
				let evt=event||null;  
				let length=this.$refs.protBtnBox.childElementCount; 
				let parentWidth=this.$refs.protBtnBox.parentNode.clientWidth;
				let allowNum =(parseInt(parentWidth/150) - length)*150;  
				let that=this; 
				if(evt.type==="click"){
					try{window.clearInterval(that.toRDsq)}catch(e){};
					if(this.showIndexOfMenu*152< allowNum){
	 					this.$showTostinfo('右侧已无菜单',this);
	 					return
						console.log("click--R")
					} 
					this.showIndexOfMenu+=-1;
				}else if(evt.type==="mousedown"){  
					that.toRDsq=setInterval(function(){
						if(that.showIndexOfMenu*152 < allowNum){ 
							try{window.clearInterval(that.toRDsq)}catch(e){
								that.$showTostinfo('没有dingshiqi',that); 
							};  
							return ;
						}else{
							that.showIndexOfMenu+=-1; 
						} 
					},800)
				}else if(evt.type==="mouseup"){
					try{window.clearInterval(that.toRDsq)}catch(e){
						that.$showTostinfo('没有dingshiqi',that); 
					};
				}
			}
			,toleftHander(){ 
				let evt=event||null;  
				let toLDsq;
				let that=this;
				
				if(evt.type==="click"){
					try{window.clearInterval(that.toLDsq)}catch(e){}; 
					if(this.showIndexOfMenu*152>-1){
						this.$showTostinfo('左侧已无菜单',this);
						return
					} 
					this.showIndexOfMenu+=1
				}else if(evt.type==="mousedown"){
					 
						that.toLDsq=setInterval(function(){
							if(that.showIndexOfMenu*152>-1){ 
								try{window.clearInterval(that.toLDsq)}catch(e){}; 
								return
							} 
							that.showIndexOfMenu+=1
						},800) 
				}else if(evt.type==="mouseup"){
					try{window.clearInterval(that.toLDsq)}catch(e){}; 
				}		
			}
			,getTranformX(num_){
//				let left=this.$refs.protBtnBox.Style("left") 
//				if(num_*150<)
				return {
	            '-webkit-transform': 'translateX(' + num_*152 + 'px)'
	            ,'-moz-transform': 'translateX(' + num_*152 + 'px)'
	            ,'transform': 'translateX(' + num_*152+ 'px)'
		        ,'-webkit-transition': 'transform 0.8s'
		        ,'-moz-transition': 'transform 0.8s'
		        ,'transition': 'transform 0.8s'
		        ,'transition-timing-function':'cubic-bezier(0.5, 0.5, 0.5, 0.5)'
		        ,'-webkit-transition-timing-function':'cubic-bezier(0.5, 0.5, 0.5, 0.5)'
		        ,'-moz-transition-timing-function':'cubic-bezier(0.5, 0.5, 0.5, 0.5)'
	          }
			}
		},
		computed: {},
		watch: {
			'$store.state.ownerAllMenu': {
				handler(newValue, oldValue) { 
					this.portMenu = newValue;　　　　
				},
				　　　　deep: true
			}
			,'showIndexOfMenu':{
				handler(newValue, oldValue){
					 
				},
				deep:true
			}
		}

	}
</script>
<style>
	.welcomDefault {
		background: rgb(35, 41, 56);
		width: 100%;
		/*min-width: 1060px;*/
		height: 100%;
		position: absolute;
		color: rgb(113, 187, 210);
		overflow: hidden;
	}
	.app_tr_tip{position: absolute;
    background: #212343;text-align: right;
    opacity: 0;
    filter: 'progid:DXImageTransform.Microsoft.Alpha(opacity=100)';
    top: 30px;
    right: 34px;
    display: block;
    color: white;
    width: 98px;
    padding: 2px 5px 4px;
    border-radius: 5px;
     transition: opacity .8s ease-in-out .0s,top .3s ease-in-out .1s; 
    } 
	.app_tr_tip>.tipleft{display: inline-block;width: auto;}
	.app_tr_tip>.tipright{display: inline-block;width: 1px;height: 1px;margin-right: -15px; margin-left: 10px;border-bottom: transparent 5px solid;
    border-right: transparent 5px solid;
    border-top: transparent 5px solid;
    border-left: #212343 5px solid;}
	.controlBox{margin-left:-28px; width:28px; background:#205a90; height:88px;padding-top: 13px;padding-bottom: 13px;}
	.apIco_set{background: url('../assets/images/loginpage/menu_app_set_n.png') 4px 3px no-repeat;width: 28px;  height: 28px;margin-bottom: 6px;}
	.apIco_set:hover{background: url('../assets/images/loginpage/menu_app_set.png') 4px 3px no-repeat;}
	.apIco_user{background: url('../assets/images/loginpage/menu_user-n.png') 4px 3px no-repeat;width: 28px;  height: 28px;}
	.apIco_user:hover{background: url('../assets/images/loginpage/menu_user-r.png') 4px 3px no-repeat;}
	.apIco_set:hover ~ .app_tr_tip{opacity:1;filter: 'progid:DXImageTransform.Microsoft.Alpha(opacity=100)';top:14px;}
	.apIco_user:hover ~ .app_tr_tip{opacity:1;filter: 'progid:DXImageTransform.Microsoft.Alpha(opacity=100)';top:48px;}
	.hidebasicInfo{
		/*display: none;*/
		 height:0px;opacity:0;pointer-events: none;
		 transition: opacity .2s ease-in-out .0s,height .3s ease .2s; 
	}
</style>