<template> 
		<div class="lightmap"  >
			<div class="map_content">
           		<div id="container" class="amap-container">  
       		 	</div>
			</div> 
		</div> 
</template>

<script>
import MapLoader from '@/plugins/AMap.js' 
import AMapJS from "amap-js";
export default {
		  name: 'Lightmap',
		  components: {},
		  poprs:['dataMsg'],
		  data:function(){
		  	return {
		  		map:{}
		  		,currRoad:{}
		  		,infoWindow:{}
		  	}
		  }
		  ,created () { 
		  },
		  mounted (){ 
	     	this.initMap() 
		  },
		  methods:{
			 	initMap:function(){  
			  		let that = this;
			  		let route
			  		let aMapJSAPILoader = new AMapJS.AMapJSAPILoader({
							  key: "5223b5cb275676fa965a09bef4122d4a",
							  v: "1.4.14", // 版本号
							  params: {}, // 请求参数
							  protocol: "https:" // 请求协议
							}); 
							
							
						aMapJSAPILoader.load().then(function(AMap) { 
							    // 请求成功
							    that.map = new AMap.Map('container', {
						    	      	resizeEnable: true,
								        center: [116.397428, 39.90923],
								        zoom: 11
			//		        	,mapStyle:'amap://styles/714229208e0479396726049852396268'
						      })
							    let linePath = [
							     ['116.375719', '39.788057']
							     ,['116.303843', '39.983412']
							     ,['116.321354', '39.896436']
							     ,['116.407012', '39.992093']
							    ];
								    
  								that.infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -3),showShadow:true});
									let cRoad = {"roadId":"QIWWQIE123","roadName":"测试道路"};
	    							let cRoadId = cRoad.roadId;
	    							let cRoadName = cRoad.roadName;
								    let polyline = new AMap.Polyline({
	    			                        path: linePath,          //设置线覆盖物路径
	    			                        extData:{"type":1, "roadId":cRoadId, "workType":1},
	    			                        strokeColor: "#19d638", // 已经作业 线颜色（绿色）
	    			                        strokeOpacity: 1,       //线透明度
	    			                        strokeWeight: 6,       //线宽
	    			                        strokeStyle: "solid",    //线样式
	    			                        lineCap: 'round', // 两端为圆头
	    			                        cursor:'pointer'   //鼠标悬停点标记时的鼠标样式  
	    			                    });
	    			            		
	    			            		let road = {"roadId":cRoadId, "roadName":cRoadName};
	    			            		that.currRoad=road
	    	    	            		polyline.on('click', that.showWorkDetailByClick, road);
	    	    	            		polyline.on('mouseover', that.infoOpen, road);
	    	    	            		// 如果当前有选中的道路，只显示选中的道路
//										if(!isNull(roadId)){ 
//	    									if(cRoadId!=roadId){
//	    										polyline.hide();
//	    									}
//	    									// 同时把选中的道路展示在下面
//	    									renderRoadCompleteDetail(roadId);
//	    								}
	    			                	polyline.setMap(that.map);
								    
								     
					  }).catch(function(e) {
						    // 请求失败
						    console.log("地图请求失败")
					  }).finally(function(){
					    // 总是执行 
					  });
				}
			 	,showWorkDetailByClick:function(){ 
			 		this.$emit('showBottomInfo')
//		    		showWorkDetailById(this.roadId);
		    	}   
	    		,showWorkDetailById:function (roadId){//展示当前选中道路的工作情况详细信息
	    			
	    		}
	    		,infoOpen:function(e){ //鼠标放到道路上打开窗口显示道路名称
	    			this.infoWindow.setContent("<div style='z-index:100'>"+this.currRoad.roadName+"</div>");
	    		 	this.infoWindow.open(this.map, [e.lnglat.getLng(),e.lnglat.getLat()]);
	    		}
			 	,idisdis:function(){
			 		 
			 	}
		} 
	}
</script>

<style> 
	.lightmap{position:relative;width: inherit; height: 100%;;background: rgba(0, 6, 29, 0.3);margin-bottom: 0px; overflow: hidden;}
	        
	.map_content{position:static; width:1px; height: inherit; margin-left: 50%;margin-right: 50%;}
	.amap-container{-webkit-tap-highlight-color: transparent;user-select: none;    background-color: rgba(0, 0, 0, 0);    cursor: default;margin-left:-960px;margin-top:0px;width:1920px;height:inherit;}
</style>