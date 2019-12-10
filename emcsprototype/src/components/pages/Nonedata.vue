<template>
	<div id="top_mainpage_c"  class="centermainpage"> 
			<img src="@/assets/images/nodata.png" width="500" height="300"/>
			<h1>无相关页面信息</h1>
	</div>
</template>
<script> 
export default {
  name: 'Pageone',
  props: {
    msg: String
  },
  components: {},
  data () {
    return {
		currentRoad:{
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
			arrRselected:[]
		}
  	},
    mounted () {
     	this.init()
    },
	methods:{
		init: function (){
 
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
						};
//						this.defaultRoad=arr
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
						};
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
	    background:#E9E9EB !important;
	    overflow: hidden;}
    .centermainpage>h1{color: #999999;margin-top:-20%} 
    .centermainpage>img{
	  	display: block;
	    position: relative;
	    margin-left: auto;
	    margin-right: auto;
	    opacity: .5;
	    top: 20%;
  	}
</style>
