<template>
<div id="mainContent" class="top_banner">
	<div class="logo"></div>
			<div class="navBar">
				<div class="wc1200 row rowE">
					<div class="bd mt20">
						<div id="sca1" class="warp-pic-list">
							<div id="wrapBox1" class="wrapBox">
							 
								<ul id="count1" class="count clearfix"  >
							
										<li>
											<a class="teg" id="GLBJCDD" href="javascript:void(0)" @click="backHome">
												<div class="kwg"><img src="../assets/images/mainTopbanner/e5.png"></div>
												<div class="wef">{{menulist}}道路清洁车调度</div>
											</a>
										</li>
							
										<li>
											<a class="" id="CCDD" href="javascript:void(0)" @click="getLeftMenu('CCDD','CCDD','垃圾车调度','/dispatch/toMain.do')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/ljcdd.png"></div>
												<div class="wef">垃圾车调度</div>
											</a>
										</li>
							
										<li>
											<a class="" id="FBCDD" href="javascript:void(0)" @click="getLeftMenu('FBCDD','FBCDD','粪便车调度','/fb/toMain.do')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/fbcdd.png"></div>
												<div class="wef">粪便车调度</div>
											</a>
										</li>
							
										<li>
											<a class="" id="JCCDD" href="javascript:void(0)" @click="getLeftMenu('JCCDD','JCCDD','检查车调度','/jc/toMain.do')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/jccdd.png"></div>
												<div class="wef">检查车调度</div>
											</a>
										</li>
							
										<li>
											<a class="" id="GCBJ" href="javascript:void(0)" @click="getLeftMenu('GCBJ','GCBJ','公厕保洁','')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/e3.png"></div>
												<div class="wef">公厕保洁</div>
											</a>
										</li>
							
										<li>
											<a class="" id="ZYML" href="javascript:void(0)" @click="getLeftMenu('ZYML','ZYML','资源目录','')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/menu/18resource/resource.png"></div>
												<div class="wef">资源目录</div>
											</a>
										</li>
							
										<li>
											<a class="" id="JZLJ" href="javascript:void(0)" @click="getLeftMenu('JZLJ','JZLJ','建筑垃圾','')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/e4.png"></div>
												<div class="wef">建筑垃圾</div>
											</a>
										</li>
							
										<li>
											<a class="" id="RCGZ" href="javascript:void(0)" @click="getLeftMenu('RCGZ','RCGZ','日常工作','')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/e2.png"></div>
												<div class="wef">日常工作</div>
											</a>
										</li>
							
										<li>
											<a class="" id="CLBJ" href="javascript:void(0)" @click="getLeftMenu('CLBJ','CLBJ','车辆报警','')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/ebj.png"></div>
												<div class="wef">车辆报警</div>
											</a>
										</li>
							
										<li>
											<a class="" id="SPJG" href="javascript:void(0)" @click="getLeftMenu('SPJG','SPJG','视频监管','')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/e6.png"></div>
												<div class="wef">视频监管</div>
											</a>
										</li>
							
										<li>
											<a class="" id="YJZH" href="javascript:void(0)" @click="getLeftMenu('YJZH','YJZH','应急指挥','')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/e9.png"></div>
												<div class="wef">应急指挥</div>
											</a>
										</li>
							
										<li>
											<a class="" id="ZDCL" href="javascript:void(0)" @click="getLeftMenu('ZDCL','ZDCL','终端处置','')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/e7.png"></div>
												<div class="wef">终端处置</div>
											</a>
										</li>
							
										<li>
											<a class="" id="ZYKH" href="javascript:void(0)" @click="getLeftMenu('ZYKH','ZYKH','作业考核','')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/e8.png"></div>
												<div class="wef">作业考核</div>
											</a>
										</li>
							
										<li>
											<a class="" id="ZHTJ" href="javascript:void(0)" @click="getLeftMenu('ZHTJ','ZHTJ','综合统计','')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/e10.png"></div>
												<div class="wef">综合统计</div>
											</a>
										</li>
							
										<li>
											<a class="" id="MHGL" href="javascript:void(0)" @click="getLeftMenu('MHGL','MHGL','门户管理','')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/e1.png"></div>
												<div class="wef">门户管理</div>
											</a>
										</li>
							
										<li>
											<a class="" id="TCGL" href="javascript:void(0)" @click="getLeftMenu('TCGL','TCGL','图层管理','')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/tc_mgr.png"></div>
												<div class="wef">图层管理</div>
											</a>
										</li>
							
										<li>
											<a class="" id="SYS" href="javascript:void(0)" @click="getLeftMenu('SYS','SYS','系统管理','/queryUserMain.do')">
												<div class="kwg"><img src="../assets/images/mainTopbanner/sys.png"></div>
												<div class="wef">系统管理</div>
											</a>
										</li>
							
									</ul>
							</div>
						 	  
							<a id="right1" class="prev icon btn"></a>
							<a id="left1" class="next icon btn"></a>
							 
						</div>
					</div>
				</div>
			</div>
			<div class="kuaij">
				<div class="toHome"> 
					<router-link to="/home/first" class="routelink"  ><i></i></router-link>
				</div>
			</div>
</div>
</template>

<script>
	export default {
		name: 'MainPageTop',
		data:()=>{
			return {
				menulist:this.dataMenus
			}
		},
		props: {
			dataMenus:Array
		},
		methods: {
			backHome:() => {
				console.log(this.menulist); 
			},
			getLeftMenu: () => {}
		}
	}
</script>

<style>
	/*.center_contentbox{height:719px;top: 80px;}
	.bottomline{height: 26px;line-height: 30px;background:#0e4980 !important;}
	.top_banner_mid{height: 80px;overflow-y: hidden;}
	.panel_Top{height:24px;}
	.panel_content{height:90%;height:calc( 100% - 24px);height: -webkit-calc(100% - 24px);height: -moz-calc(100% - 24px); } 
	.panel_Top .panel_TL{height:24px;}
	.panel_Top .panel_TC span{height:24px;background-position-y:2px;}
	.panel_Top .panel_TC{height:24px;line-height: 24px;}
	.panel_Top .panel_TR{height:24px;}
	.panel_Top .panel_TR .b_toggleMax{margin-top: 5px;}
	.panel_Top .panel_TR .b_toggleMin{margin-top: 5px;}
	.panel_Top .panel_TR .r_toggleMin{margin-top: 5px;}   */
	.top_banner{margin: 0;
			    display: block;
			    width: 100%;
			    height: 94px;
			    display: inline;
    			float: left;
			    background-image: url(../assets/images/mainTopbanner/bj1.jpg);
			    background-position: left top;
			    background-repeat: repeat-x;
			    font-family: "微软雅黑";}
    .kwg img {
	    padding: 0px;
	    float: left;
	    border-top-width: 0px;
	    border-right-width: 0px;
	    border-bottom-width: 0px;
	    border-left-width: 0px;
	    border-top-style: none;
	    border-right-style: none;
	    border-bottom-style: none;
	    border-left-style: none;
	    margin-top: 0px;
	    margin-right: 11px;
	    margin-bottom: 0px;
	    margin-left: 11px;
	}
    .wef {
	    margin: 0px !important;
	    padding: 0px !important;
	    line-height: 15px;
	    text-align: center;
	    width:100%;height:auto;color: #FFF;font-size: 13px;  
	}
	.toHome a{display: block;width:56px;height:56px;float:right;margin-right:20px;}
	.toHome a i{background: url(../assets/images/mainTopbanner/toHomeN.png) 0px 0px no-repeat;pointer-events:none;width:56px;height:56px;display:block;position:relative;}
	.toHome a:hover i{background: url(../assets/images/mainTopbanner/toHomeO.png) 0px 0px no-repeat;cursor:hand;}
	.toHome a:active i{background: url(../assets/images/mainTopbanner/toHomeD.png) 0px 0px no-repeat;cursor:hand;}
	.kuaij{width:100px;}
	
	.count{width: 528px; height: 80px;display: inline;width: 2000px;  
    		overflow: hidden; }
	.count li{display: inline;float: left; list-style: none;margin-right: 4px;}
	.logo {
	    background-image: url(../assets/images/mainTopbanner/logo.jpg);
	    position: absolute;
	    height: 94px;
	    width: 430px;
	    left: 0px;
	    top: 0px;
	    background-repeat: no-repeat;
	    background-position: 0px 0px;
	    z-index: 11;
	}
	.navBar {
	width: 810px;
	height: 80px;
	line-height: 37px;
	color: #333;
	z-index: 99999;
	position: absolute;
	top: 2px;
	right: 183px;
}
 
/**/
 
.wrapBox{height:90px !important;}

.rowE .warp-pic-list{
	position: relative;
	width: 740px;
	height: 80px;
	padding-right: 35px;
	padding-left: 35px;
}
 
 


.rowE .btn{
	display: block;
	height: 45px;
	position: absolute;
	top: 22px;
	width: 28px;
	z-index: 200;
	cursor: pointer;
}

.rowE .prev{
	background-position: -0px -70px;
	left: 5px;
}
.rowE .prev:hover{
	background-position: -0px  -115px;
}
.rowE .prev:ACTIVE{
	background:url("../assets/images/mainTopbanner/rowEbtnD.png") left top;
}
.rowE .next{
	background-position: -0px -160px;
	right: -39px;
}
.rowE .next:hover{
	background-position:-0px  -205px;
}
.rowE .next:ACTIVE{
	background:url("../assets/images/mainTopbanner/rowEbtnD.png") left bottom;
}

.rowE .count{width:auto;height: 100%;overflow:hidden;display: inline-block;}
.rowE .count  a {
	display: inline;
	width: 75px;
	text-align: center;
	font-weight: normal;
	float: left;
	height: 86px;
	line-height: 36px;
	font-size: 13px;
	letter-spacing: .1em;
	text-decoration: none;
	color: #FFF;
	padding-top: 10px;
}



.kuaij {
	height: 66px;
	width: 131px;
	position: absolute;
	top: 15px;
	right: 0px;
	line-height: 28px;
	padding-right: 6px;
	z-index: 922;
	/*background-image: url(../assets/images/mainTopbanner/xian8.jpg);*/
	background-repeat: no-repeat;
	background-position: left;
}
.kuaij .eedd {
	text-decoration: none;
	color: #FFF;
	font-size: 12px;
	display: inline;
	float: right;
	height: 28px;
	width: 90px;
	position: relative;
	font-family: Arial, "微软雅黑";
	margin-right: 4px;
}
.eedd .hjks { 
	background-repeat: no-repeat;
	height: 8px;
	width: 8px;
	position: absolute;
	left: 12px;
	top: 1px;
}

.kuaij .eedd img {
	display: inline;
	float: left;
	margin-top: 6px;
	margin-right: 2px;
}
.kuaij .eedd:hover {
	color: #DCF0FA;
}
.kuaij .toHome .routelink{display: block;
    width: 56px;
    height: 56px;
    float: right;
    margin-right: 20px;}
    .kuaij .toHome .routelink i{background: url(../assets/images/mainTopbanner/toHomeN.png) 0px 0px no-repeat;
    pointer-events: none;
    width: 56px;
    height: 56px;
    display: block;
    position: relative;}
    .kuaij .toHome .routelink:hover i{background: url(../assets/images/mainTopbanner/toHomeO.png) 0px 0px no-repeat;}
	.kuaij .toHome .routelink:active i{background: url(../assets/images/mainTopbanner/toHomeN.png) 0px 0px no-repeat;}
</style>