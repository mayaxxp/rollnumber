<template>
	<div class="leftjia">
			<h3 class="hes">道路清洁车调度</h3>
			<div class="subNavBox"> 
				
				<!--{
					id:'GLBJCDD_MONITOR,'
					cnName:'作业状态监控',
					icoUrl:require('../assets/images/leftMenu/dlqj/monitor.png'),
					topageData:'/toMonitorMain.do?menusId=GLBJCDD_MONITOR',
					beselected:true
				}-->
				
				<div class="subNav" v-for="(item,index) in dataMenus" :key="item.id" >
					<div class="ertt">
						<img :src="item.icoUrl" >
					</div>
					<a :id="item.id"  href="javascript:void(0)" onclick="getRightContent(item.id,item.topageData)">
						{{item.cnName}}
					</a>
					<ul :id="(item.id + ul)" class="navContent margin0">
					</ul>
				</div>
			<!--<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/monitor.png" width="24" height="20">
					</div>
					<a id="GLBJCDD_SSJK" href="javascript:void(0)" onclick="getRightContent('GLBJCDD_SSJK','/roadclean/toMain.do?menusId=GLBJCDD_SSJK')">
						道路清洁实时监控
					</a>
				</div>
				<ul id="GLBJCDD_SSJK" class="navContent margin0">
				</ul>
				
				
				
				<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/assignment.png" width="24" height="20">
					</div>
					<a id="GLBJCDD_ROAD" href="javascript:void(0)" onclick="getRightContent('GLBJCDD_ROAD','/toSectionList.do?menusId=GLBJCDD_ROAD')">
						作业任务管理
					</a>
				</div>
				
				<ul id="GLBJCDD_ROAD" class="navContent margin0">
				</ul>
				
				<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/plan.png" width="24" height="20">
					</div>
					<a id="GLBJCDD_PLAN" href="javascript:void(0)" onclick="getRightContent('GLBJCDD_PLAN','/toPlanListMain.do?menusId=GLBJCDD_PLAN')">
						调度计划管理
					</a>
				</div>
				
				<ul id="GLBJCDD_PLAN" class="navContent margin0">
				</ul>
				
				<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/05.png" width="24" height="20">
					</div>
					<a id="ROAD_WORK_REP" href="javascript:void(0)" onclick="getRightContent('ROAD_WORK_REP','/listRoadcleanPlanExecution.do?menusId=ROAD_WORK_REP')">
						调度计划完成情况
					</a>
				</div>
				
				<ul id="ROAD_WORK_REP" class="navContent margin0">
				</ul>
	
				<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/monitor.png" width="24" height="20">
					</div>
					<a id="GLBJCDD_MONITOR" href="javascript:void(0)" onclick="getRightContent('GLBJCDD_MONITOR','/toMonitorMain.do?menusId=GLBJCDD_MONITOR')">
						作业状态监控
					</a>
				</div>
				
				<ul id="GLBJCDD_MONITOR" class="navContent margin0">
				</ul>
				
				<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/track.png" width="24" height="20">
					</div>
					<a id="GLBJCDD_GJHF" href="javascript:void(0)" onclick="getRightContent('GLBJCDD_GJHF','/toTrackPlay.do?carWorkType=8&amp;menusId=GLBJCDD_GJHF')">
						车辆轨迹管理
					</a>
				</div>
				
				<ul id="GLBJCDD_GJHF" class="navContent margin0">
				</ul>
				
				<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/worklistG.png" width="24" height="20">
					</div>
					<a id="GLBJCD_CAR_WORK" href="javascript:void(0)" onclick="getRightContent('GLBJCD_CAR_WORK','/roadclean/toCarWorkList.do?menusId=GLBJCD_CAR_WORK')">
						作业历史管理
					</a>
				</div>
				
				<ul id="GLBJCD_CAR_WORK" class="navContent margin0">
				</ul>
				
				<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/work_state_hist.png" width="24" height="20">
					</div>
					<a id="GLBJCDD_STATUS" href="javascript:void(0)" onclick="getRightContent('GLBJCDD_STATUS','/toRoadCleanCarStatusList.do?menusId=GLBJCDD_STATUS')">
						作业状态历史
					</a>
				</div>
				
				<ul id="GLBJCDD_STATUS" class="navContent margin0">
				</ul>
	
				<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/garbage_truck_alarm.png" width="24" height="20">
					</div>
					<a id="GLBJCDD_CLBJ" href="javascript:void(0)" onclick="getRightContent('GLBJCDD_CLBJ','/toJSCarAlarm.do?flag=1&amp;menusId=GLBJCDD_CLBJ')">
						车辆报警管理
					</a>
				</div>
				
				<ul id="GLBJCDD_CLBJ" class="navContent margin0">
				</ul>
				
				<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/garbage_truck_alarm.png" width="24" height="20">
					</div>
					<a id="GLBJ_DLZYQK" href="javascript:void(0)" onclick="getRightContent('GLBJ_DLZYQK','/queryPageWorkMileList.do?menusId=GLBJ_DLZYQK')">
						道路作业情况
					</a>
				</div>
				
				<ul id="GLBJ_DLZYQK" class="navContent margin0">
				</ul>
				
				<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/water.png" width="24" height="20">
					</div>
					<a id="GLBJCDD_WATER" href="javascript:void(0)" onclick="getRightContent('GLBJCDD_WATER','/toWaterList.do?menusId=GLBJCDD_WATER')">
						加水点管理
					</a>
				</div>
				
				<ul id="GLBJCDD_WATER" class="navContent margin0">
				</ul>
	
				<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/voice.png" width="24" height="20">
					</div>
					语音播报管理
				</div>
				<ul id="GLBJCDD_YYBB" class="navContent">
					<li><a id="BJC_LSBB" href="javascript:void(0)" onclick="getRightContent('BJC_LSBB','/GLVoice/toVoice.do?flag=1&amp;menusId=BJC_LSBB');">语音播报</a></li><li><a id="BJC_YYMB" href="javascript:void(0)" onclick="getRightContent('BJC_YYMB','/queryRoadCleanVoiceTempletList.do?flag=1&amp;menusId=BJC_YYMB');">语音模板</a></li>

				 </ul>
				
				<div class="subNav">
					<div class="ertt">
						<img src="../assets/images/leftMenu/dlqj/video_display.png" width="24" height="20">
					</div>
					<a id="GLBJCDD_ZS" href="javascript:void(0)" onclick="getRightContent('GLBJCDD_ZS','/GlVideoDisplay/toVideoDisplay.do?flag=1&amp;menusId=GLBJCDD_ZS')">
						视频/图片管理
					</a>
				</div>
				
				<ul id="GLBJCDD_ZS" class="navContent margin0">
				</ul>-->
			
			
			
			
				
				<div class="gsf"></div>
			</div>
			<div class="botdg"></div>
			
		</div>
</template>

<script>
	import '@/assets/css/leftMenu/leftmenu.css' 
	export default {
		name:"LeftMenu",
		data(){
			return {
				
			}
		},
		props: {
			dataMenus:{
		      type: Array,
		      default: [
			    {
					id:'GLBJCDD_SSJK',
					cnName:'道路清洁实时监控',
					icoUrl:require('../assets/images/leftMenu/dlqj/monitor.png'),
					topageData:'/roadclean/toMain.do?menusId=GLBJCDD_SSJK',
					beselected:true
				},
				{
					id:'GLBJCDD_ROAD',
					cnName:'作业任务管理',
					icoUrl:require('../assets/images/leftMenu/dlqj/assignment.png'),
					topageData:'/toSectionList.do?menusId=GLBJCDD_ROAD',
					beselected:true
				},
				{
					id:'GLBJCDD_PLAN',
					cnName:'调度计划管理',
					icoUrl:require('../assets/images/leftMenu/dlqj/plan.png'),
					topageData:'/toPlanListMain.do?menusId=GLBJCDD_PLAN',
					beselected:true
				},
				{
					id:'ROAD_WORK_REP',
					cnName:'调度计划完成情况',
					icoUrl:require('../assets/images/leftMenu/dlqj/05.png'),
					topageData:'/listRoadcleanPlanExecution.do?menusId=ROAD_WORK_REP',
					beselected:true
				},
				{
					id:'GLBJCDD_MONITOR',
					cnName:'作业状态监控',
					icoUrl:require('../assets/images/leftMenu/dlqj/monitor.png'),
					topageData:'/toMonitorMain.do?menusId=GLBJCDD_MONITOR',
					beselected:true
				},
				{
					id:'GLBJCDD_GJHF',
					cnName:'车辆轨迹管理',
					icoUrl:require('../assets/images/leftMenu/dlqj/track.png'),
					topageData:'/toTrackPlay.do?carWorkType=8&amp;menusId=GLBJCDD_GJHF',
					beselected:true
				},
				{
					id:'GLBJCD_CAR_WORK',
					cnName:'作业历史管理',
					icoUrl:require('../assets/images/leftMenu/dlqj/worklistG.png'),
					topageData:'/roadclean/toCarWorkList.do?menusId=GLBJCD_CAR_WORK',
					beselected:true
				},
				{
					id:'GLBJCDD_STATUS',
					cnName:'作业状态历史',
					icoUrl:require('../assets/images/leftMenu/dlqj/work_state_hist.png'),
					topageData:'/toRoadCleanCarStatusList.do?menusId=GLBJCDD_STATUS',
					beselected:true
				},
				{
					id:'GLBJCDD_CLBJ',
					cnName:'车辆报警管理',
					icoUrl:require('../assets/images/leftMenu/dlqj/garbage_truck_alarm.png'),
					topageData:'/toJSCarAlarm.do?flag=1&amp;menusId=GLBJCDD_CLBJ',
					beselected:true
				},
				{
					id:'GLBJ_DLZYQK',
					cnName:'道路作业情况',
					icoUrl:require('../assets/images/leftMenu/dlqj/garbage_truck_alarm.png'),
					topageData:'/queryPageWorkMileList.do?menusId=GLBJ_DLZYQK',
					beselected:true
				},
				{
					id:'GLBJCDD_WATER',
					cnName:'加水点管理',
					icoUrl:require('../assets/images/leftMenu/dlqj/water.png'),
					topageData:'/toWaterList.do?menusId=GLBJCDD_WATER',
					beselected:true
				},
				{
					id:'GLBJCDD_YYBB',
					cnName:'语音播报管理',
					icoUrl:require('../assets/images/leftMenu/dlqj/voice.png'),
					topageData:'/GLVoice/toVoice.do?flag=1&amp;menusId=BJC_LSBB',
					beselected:true
				},
				{
					id:'GLBJCDD_ZS',
					cnName:'视频/图片管理',
					icoUrl:require('../assets/images/leftMenu/dlqj/video_display.png'),
					topageData:'/GlVideoDisplay/toVideoDisplay.do?flag=1&amp;menusId=GLBJCDD_ZS',
					beselected:true
				}
		      
		      ]
		    }
			
		},
		created () {  //加载完成之前，执行。执行顺序:父组件-子组件
		   this.menulist=this.dataMenus;
		   console.log("【menulist】："+this.menulist); // 空值
		   console.log("【dataMenus】："+this.dataMenus);
	    },
		
		mounted(){ //页面初始化方法   加载完成后执行。执行顺序:子组件-父组件
				var parthW=1024//this.$refs.wrapbox.clientWidth;
				this.mlistlength=parseInt(parthW/75);  
		},
		methods:{
			getRightContent(mCode,mUrl){
				/*获得右侧内容*/ 
//				$(".navContent li a").removeClass("xuanz");//删除其他选中状态样式
//				$("#"+ mCode).addClass("xuanz");//增加选中状态样式
//				if(mCode=='YJZH_DDT'){
//					//alert('调度台子系统!');
//					window.open('//www.airtalking.com');//暂时写死
//				}else if(mCode=='XNC_SS'){
//					window.open('/emcs' + mUrl);//暂时写死
//				}else{
//					$('#Right', window.parent.document).attr('src', path + mUrl);//右边内容页跳转
//				}
				return false;
			}
		},
		computed:{
			
		},
		watch:{
			
		}
	}
</script>

<style>
</style>