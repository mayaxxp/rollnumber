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
		  created () { 
		  },
		  mounted (){ 
	     	this.initMap() 
		  },
		  methods:{
			 	initMap:function(){  
		  		let that = this;
		  		var aMapJSAPILoader = new AMapJS.AMapJSAPILoader({
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
				  }).catch(function(e) {
				    // 请求失败
				    console.log("地图请求失败")
				  }).finally(function() {
				    // 总是执行
				    
				  });	  
				}
		} 
	}
</script>

<style> 
	.lightmap{position:relative;width: inherit; height: 100%;;background: rgba(0, 6, 29, 0.3);margin-bottom: 0px; overflow: hidden;}
	        
	.map_content{position:static; width:1px; height: inherit; margin-left: 50%;margin-right: 50%;}
	.amap-container{-webkit-tap-highlight-color: transparent;user-select: none;    background-color: rgba(0, 0, 0, 0);    cursor: default;margin-left:-960px;margin-top:0px;width:1920px;height:inherit;}
</style>