<template>
	<div id="top_mainpage_c"  class="centermainpage">
			<!--左侧部分-->
			<div id="pageleftpart" :class="{'pageleftpart':true,'hforOthertoMin':toggleH}" >
				
				<!--左侧上部部分-->
				<div :class="{'mapandTreePart':true,'vforOthertoMin':toggleV}" >
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
										<Lightmap @showBottomInfo="showBottomInfo" ></Lightmap>
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
				<div id="warning_c_t" :class="{'warning_c_t':true,'warning_c_toMax':toggleV}"  >
					<!--报警信息容器-->
					<div id="tabledata" class="bottom_container">
							<div class="panel_Top">
								<span class="panel_TL"></span>
								<span class="panel_TC"><span></span>道路详细信息</span>
								<span class="panel_TR"><span :class="{'b_toggleMin':true, 'b_toggleMax':toggleV}" @click="togglePanelbut('v')"></span></span>
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
			<div id="vehicleInfo_c_t"  :class="{'vehicleInfo_c_t':true,'vehicleInfo_c_toMax':toggleH}"  >
				<div class="right_container">
						<div class="panel_Top">
							<span class="panel_TL"></span>
							<span :class="{'panel_TC':true,'panel_TCToMax':toggleH}">
								<span   ></span>
								道路查询信息
							</span>
							<span class="panel_TR"><span :class="{'r_toggleMin':true,'r_toggleMax':toggleH}" @click="togglePanelbut('h')"></span></span>
						</div>
						<div class="panel_content" >
							<div id="vehicle_info" :class="{'main_container':true,'vehicle_info':true,'vehicle_infoToMax':toggleH}"   >
								 <!--道路详情-->
								 <div id="rightroadList" class="container-fluid">
									<el-row class="grid-content bg-purple-light roadsearchBar">
										  <el-col :span="24">
									  	  	<el-input size="medium" v-model="chosedate" placeholder="请输入日期"   suffix-icon="el-icon-date"   @focus="toggleCalendar"  ></el-input>
											<!--用法  https://www.npmjs.com/package/vue-mark-calendar-->
											<Calendar   ref="Calendar" :class="{'calendarDealf':true,'calendarShow':showCalendar}" :markDate="markDate" :markDateMore="markDateMore"  @choseDay="choseDayHander"> </Calendar>
										  </el-col>
										  <el-col :span="24">
										 	<el-select size="medium" v-model="roadLevel" placeholder="请选择">
											    <el-option
											      v-for="item in options"
											      :key="item.value"
											      :label="item.label"
											      :value="item.value">
											    </el-option>
											 </el-select>
										  </el-col>
										  <el-col :span="16">
											  <el-input  
											    size="medium"
											    placeholder="请输入道路名称"
											    suffix-icon="el-icon-search"
											    v-model="roadName">
											  </el-input>
										  </el-col>
										  <el-col :span=8>
											  	<el-button @click="init" type="primary" round size="medium"  >
											  		查询
											  	</el-button>
										  </el-col>
									</el-row>  
									<el-row class="grid-content bg-purple-light roadlist">
										<el-col v-if="getdefaultR.length" :span=24 id="defaR" :class="['roaddefault',{'selected':('defaR'== rselected)},{'showself':(getdefaultR.length&&getemeR.length==0)}]" >
											<el-button class="btn" size="small"  @click="change_handler('defaR')"><span class="title">常规路段</span></el-button>
											<div class="col-lg-12 btn-group-vertical">
												<el-button size="mini"  v-for="item in getdefaultR" :key="item.id" :id="item.id" :class="{'col-lg-12':true,'btn':true,'btn-default':true,'glyphicon':true,'el-icon-view':true,'glyphicon-eye-open':(beslecendRoad==item.id)}"  @click="togglethisroad(item.id)">{{item.cnName}}</el-button>
											 </div>
										</el-col>
										<el-col v-if="getemeR.length" :span=24  id="ememR" :class="['roadHoteme',{'selected':('ememR'== rselected)},{'showself':(getemeR.length&&getdefaultR.length==0)}]" >
											<el-button class="btn" size="small"  @click="change_handler('ememR')"><span class="title">应急路段</span></el-button>
											<div class="col-lg-12 btn-group-vertical">
												<el-button  size="mini" v-for="item in getemeR" :key="item.id" :id="item.id" :class="{'col-lg-12':true,'btn':true,'btn-default':true,'glyphicon':true,'el-icon-view':true,'glyphicon-eye-open':(beslecendRoad==item.id)}"  @click="togglethisroad(item.id)">{{item.cnName}}</el-button>
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
</template>
<script>
import '@/assets/css/roadlist/roadlist.css'
import Calendar from 'vue-mark-calendar';
import MapLoader from '@/plugins/AMap.js' 
import Lightmap from '@/components/homeparts/Lightmap'
export default {
  name: 'Pageone',
  props: {
    dataUrl: String
  },
  components: {Lightmap,Calendar},
  data () {
    return {
    	 options:[{
          value: '选项1',
          label: '一级路段'
        }, {
          value: '选项2',
          label: '二级路段'
        }, {
          value: '选项3',
          label: '应急路段'
        }]
    	,roadLevel: '' 
		,currentRoad:{
				id:"null",
				typely:"defaultRoad",
				cnName:"未选定道路",
				leaveT:"未选定道路",
				datetime:"未选定道路",
				total_CNun:NaN,
				curr_CNun:NaN,
				total_mileage:NaN,
				travel_mileage:NaN,
				nowork_mileage:NaN,
				warning_mileage:NaN
			},
			arrAllroad:[],
			defaultRoad:[{
						id:"null",
						typely:"defaultRoad",
						cnName:"无相关常规道路"
					}],
			emeR:[{
						id:"null",
						typely:"defaultRoad",
						cnName:"无相关应急道路"
					}],
			rselected:"defaR",
			arrRselected:[],
			toggleV:false,
			toggleH:false 
		,markDate: ['2019-11-13','2019-11-24']
		,markDateMore: [
				        {
				          date: "2019-10-01",
				          className: "mark1"
				        },
				        {
				          date: "2019-10-02",
				          className: "mark1"
				        },
				        {
				          date: "2019-10-03",
				          className: "mark2"
				        },
				        {
				          date: "2019-10-04",
				          className: "mark2"
				        },
				      ]
		,showCalendar:false
		,chosedate:""
		,roadName:"" 
		,beslecendRoad:""
      };
  	},
    mounted () {
     	this.init()
    },
	methods:{
			init: function (){ 
				let url=this.dataUrl 
				console.log(url)
			    let that_=this;
			    
//			  	if(sessionStorage.getItem("token")){ 
//					let obj={"token":sessionStorage.getItem("token")
//						,id: 12345
//						,"roadLevel":that_.roadLevel
//						,"datetime":that_.chosedate
//						,"roadName":that_.roadName
//					}
//					this.axios.post(url, obj)
//					.then((data) => {
//							let jsond=JSON.stringify(data)
//							if(data.pageOnedtat&&data.pageOnedtat!=[]){
//								console.log(data.pageOnedtat)
//								that_.arrAllroad=data.pageOnedtat;
//							} 
//					})
//					.catch(function (error) { 
//				      	// 请求失败处理
//				        console.log(error); 
//				      });
//				} 
				      
				      
				      
				      
			}
			,showBottomInfo:function(data){
				this.togglePanelbut('v') 
			}
		  	,togglePanelbut(vOrv){ 
		  		switch (vOrv){
		  			case "h":
		  				console.log("左右切换");
		  				this.toggleH=!this.toggleH;
		  				break;
		  			case "v":
		  				console.log("上下切换");
		  				this.toggleV=!this.toggleV;
		  				break;
		  			default:
		  				break;
		  		}
		  	}
		  	,toggleCalendar(){
		  		if(!this.showCalendar){
		  			this.showCalendar=true
		  		}
		  	}
		  	,choseDayHander(day){ 
		  		this.chosedate=day;
		  		if(this.showCalendar){
		  			this.showCalendar=false
		  		}
		  	}
	  		,initdemoHW(w_,h_){
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
				this.rselected=bl
			},
			togglethisroad(id){
				this.beslecendRoad=id
				if(type ==="defaultRoad"){
					 
				}else{
					
				}
			},
			returnClass(id){
				//  返回 列表中  道路 按钮 的 class  样式；
				let class_=['col-lg-12','btn','btn-default','glyphicon','el-icon-view',{'glyphicon-eye-open':((this.arrRselected.indexOf(id)!=-1)?1:0)}]
				
				return class_;
			}
		},
		computed:{
			getdefaultR(){
				let arr=[];
			 	let allroad=[]
			 	allroad=this.deepClone(this.arrAllroad);
				if(allroad.length){for(let i=0;i<allroad.length;i++){
					let its=allroad[i];
					if(its.typely==="defaultRoad"){
						arr.push(allroad[i]);
					}
				}};
//						this.defaultRoad=arr
				return arr;
			},
			getemeR(){
				let arr=[];
			 	let allroad=[]
			 	allroad=this.deepClone(this.arrAllroad);
				if(allroad.length){for(let i=0;i<allroad.length;i++){
					let its=allroad[i];
					if(its.typely==="emeRoad"){
						arr.push(allroad[i]);
					}
				};}
//						this.emeR=arr;
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
	    background:#4343ad !important;
	    overflow: hidden;}
	.pageleftpart{position: relative;float:left;width:95%; width: calc(100% - 31px);width:-webkit-calc(100% - 31px);width: -moz-calc(100% - 31px); height: 100%;margin-right: 1px;}
	.hforOthertoMin{width:90%;width:calc(100% - 281px);width:-webkit-calc(100% - 281px);width: -moz-calc(100% - 281px);}
	.mapandTreePart{position:relative;float:left;height:95%;height:calc(100% - 25px);height:-webkit-calc(100% - 25px);height:-moz-calc(100% - 25px); margin-bottom:1px;width:100%;}
	.vforOthertoMin{height:90%;height:calc(100 - 181px);height:calc(100% - 181px);height:-webkit-calc(100% - 181px);height:-moz-calc(100% - 181px);}
	.mapPart{position: relative;float:left; height:100%; margin-left:1px;width:99.8%;width:calc(100% - 1px);width:-webkit-calc(100% - 1px);width: -moz-calc(100% - 1px);	}
	.map_container,.right_container,.bottom_container,.leftTree_container{width:100%;height:100%;float:left;height: inherit; left:2px;background:#0f88ca; border-radius: 5px;overflow: hidden;}
			.main_container{ width:90%;width:calc(100% - 4px);width: -webkit-calc(100% - 4px);width: -moz-calc(100% - 4px);height:100%;height:calc(100% - 4px);width: -webkit-calc(100% - 4px);width: -moz-calc(100% - 4px);background: white;margin-left: auto;margin-right: auto;}
			.main_containerCon{width:100%;height:100%;float:left;padding:5px;border:0px dotted #ff0000;margin:0px;background:#ffffff;}
			.vehicleInfo_c_t{position: relative;float:right;width:30px; height: 100%;}
			.vehicleInfo_c_toMax{width:280px;}
			.warning_c_t{bottom: 0px;float:left;height:24px; width:100%;}
			.warning_c_toMax{height: 180px;;}
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
			 .vehicle_info{overflow-y:hidden;visibility: hidden;width:30px;}
			 .vehicle_infoToMax{visibility:visible;width:90%;width:calc(100% - 4px);width:-webkit-calc(100% - 4px);width:-moz-calc(100% - 4px);}
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
		 	.right_container .panel_Top .panel_TC span{margin:40px 0px 10px -5px}
		 	#vehicleInfo_c_t .panel_Top>.panel_TCToMax{width: calc(100% - 16px);width:-webkit-calc(100% - 16px);width:-moz-calc(100% - 16px);}
		 	#vehicleInfo_c_t .panel_Top>.panel_TCToMax>span{margin-top:-3px; margin-left:0px}
		 	.right_container .panel_Top .panel_TC span,.bottom_container .panel_Top .panel_TC span{background: url(../../assets/images/roadlist/img/t_roadInfo.png) no-repeat;top: 3px;}

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
			    overflow-y: auto;
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
			
	.el-row {
    	margin-bottom: 20px;  
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  } 
	  
	  .el-input--suffix>.el-input__suffix{margin-top:-3px; }
	  .el-input--suffix{pointer-events:all;}
	  .calendarDealf{visibility: hidden;display: none;}
	  .calendarShow{visibility: visible;display:flex;position: fixed;z-index: 999; width: 274px;}
	  .roadsearchBar{padding: 10px 5px; margin-bottom: 0px;}
	  .roadlist{padding: 0px 5px; margin-bottom: 0px;}
	  .el-select{width: 100%;}
</style>
