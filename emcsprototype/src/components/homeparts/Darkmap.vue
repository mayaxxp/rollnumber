<template>
	<div class="darkmap">
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
		name: 'Darkmap',
		components: {},
		poprs: ['dataMsg'],
		data:function(){
		  	return {
		  		map:{}
		  		,currRoad:{}
		  		,infoWindow:{}
		  	}
	  	},
		created() {},
		mounted() {
			this.initMap()
		},
		methods: {
			initMap: function() {
				let that = this;
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
						center: [116.192874,39.868394],
						zoom: 11,
						mapStyle: 'amap://styles/714229208e0479396726049852396268'
					})
				}).catch(function(e) {
					// 请求失败
					console.log("地图请求失败")
				}).finally(function() {
					// 总是执行

				});
			}
			,inMapPoint(url, id, time, table) {
				console.log("uuuuuuuuuuuuuuuuu")
				let that = this;
//				this.axios.get(url,{"id":id,"vTime":time}).then((obj)=>{
				new Promise((resolve)=>{
					let objh={
						longitude:116.53345
						,latitude:39.953717
					}
					resolve(objh)
				}).then((obj)=>{
				    		let lng = obj.longitude;
				    		let lat = obj.latitude;
				    		let lnglat
				        	if(lng && lat){
				        		lnglat = [lng,lat]||[116.53345,39.953717];
				        		that.addMarker(lnglat);
					        	that.map.setZoom(12);
					        	that.map.setCenter([lng-0.04,lat]);//设置地图中心，0.04是显示窗口相对地图中心的偏移量
				        	}
				        	let type=obj.alarmType||"FB_CLCS";
//				        	let alarmTime = getDateTime(ConvertJSONDateToJSDate("/Date("+obj.alarmTime.time+")/"))||"2019-12-20 14:20:28"
				        	let alarmTime = "2019-12-20 14:20:28"
				        	let currentSpeed=obj.currentSpeed||100;
				        	let realTimeOilQuantity=obj.realTimeOilQuantity||20;
				        	let oilAddFront=obj.oilAddFront||40;
				        	let oilAddLater=obj.oilAddLater||300;
				        	let oilDeclineFront=obj.oilDeclineFront||200;
				        	let oilDeclineLater=obj.oilDeclineLater||70;
				        	let theirUnit=obj.theirUnit||"某某分队";
				        	let name;
				        	let address;
				        	let carNo = obj.carNo||"123456789ouuyuty";
				        	let plateNumber = obj.plateNumber||"京1232433";
				        	let info = []; 
				        	if (obj.address == undefined || obj.address == null) {
								address = '暂无';
							} else {
								address = obj.address;
							}
				        	
				        	if(type=="FB_CLCS" || type=="JS_CLCS" || type=="LJ_CLCS" || type=="JC_CLCS" ){
				        		if (type=="FB_CLCS") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>粪便车报警信息</b>");
				        		} else if (type=="JS_CLCS") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>机扫车报警信息</b>");
				        		} else if (type=="LJ_CLCS") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>垃圾车报警信息</b>");
				        		} else if (type=="JC_CLCS") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>检查车报警信息</b>");
				        		}
				        	 	name="行驶超速报警！";
				    	        info.push("报警类型："+name);
				    	        info.push("所属机构："+theirUnit);
				    	        info.push("报警时间："+alarmTime);
				    	        info.push("车牌号："+plateNumber);
				    	        info.push("行驶速度："+currentSpeed);
				    	        info.push("地址："+address);
				        	}else if(type=="FB_YLGD" || type=="JS_YLGD" || type=="LJ_YLGD" || type=="JC_YLGD"){
				        		if (type=="FB_YLGD") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>粪便车报警信息</b>");
				        		} else if (type=="JS_YLGD") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>机扫车报警信息</b>");
				        		} else if (type=="LJ_YLGD") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>垃圾车报警信息</b>");
				        		} else if (type=="JC_YLGD") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>检查车报警信息</b>");
				        		}
				        		name="油量不足报警！";
				        		info.push("报警类型："+name);
				        		info.push("所属机构："+theirUnit);
				    	        info.push("报警时间："+alarmTime);
				    	        info.push("车牌号："+plateNumber);
				    	        info.push("剩余油量："+realTimeOilQuantity);
								info.push("地址："+address);
				        	}else if(type=="FB_YLTZ" || type=="JS_YLTZ" || type=="LJ_YLTZ" || type=="JC_YLTZ"){
				        		if (type=="FB_YLTZ") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>粪便车报警信息</b>");
				        		} else if (type=="JS_YLTZ") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>机扫车报警信息</b>");
				        		} else if (type=="LJ_YLTZ") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>垃圾车报警信息</b>");
				        		} else if (type=="JC_YLTZ") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>检查车报警信息</b>");
				        		}
				        		name="油量突增报警！";
				        		info.push("报警类型："+name);
				        		info.push("所属机构："+theirUnit);
				    	        info.push("报警时间："+alarmTime);
				    	        info.push("车牌号："+plateNumber);
				    	        info.push("突增前油量："+oilAddFront);
				    	        info.push("突增后油量："+oilAddLater);
								info.push("地址："+address);
				        	}else if(type=="FB_YLTJ" || type=="JS_YLTJ" || type=="LJ_YLTJ" || type=="JC_YLTJ"){
				        		if (type=="FB_YLTJ") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>粪便车报警信息</b>");
				        		} else if (type=="JS_YLTJ") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>机扫车报警信息</b>");
				        		} else if (type=="LJ_YLTJ") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>垃圾车报警信息</b>");
				        		} else if (type=="JC_YLTJ") {
				        			info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>检查车报警信息</b>");
				        		}
				        		name="油量突降报警！";
				        		info.push("报警类型："+name);
				        		info.push("所属机构："+theirUnit);
				    	        info.push("报警时间："+alarmTime);
				    	        info.push("车牌号："+plateNumber);
				    	        info.push("突降前油量："+oilDeclineFront);
				    	        info.push("突降后油量："+oilDeclineLater);
								info.push("地址："+address);
				        	} else if (type=="JS_ZYCS") {
				        		info.push("<div><div style=\"padding:0px 0px 0px 4px;left:50px;\"><b>机扫车报警信息</b>");
				        		name="作业超速报警！";
				        		info.push("报警类型："+name);
				    	        info.push("所属机构："+theirUnit);
				    	        info.push("报警时间："+alarmTime);
				    	        info.push("车牌号："+plateNumber);
				    	        info.push("行驶速度："+currentSpeed);
								info.push("地址："+address);
				        	}
				        	info.push("经度:"+lng+"<br>  纬度:"+lat);
				        	info.push("</div></div>"); 
				        	that.infoWindow = new AMap.InfoWindow({
				                content: info.join("<br/>"),  //使用默认信息窗体框样式，显示信息内容
				                offset: new AMap.Pixel(0, -30),
				                autoMove: false,
				           	});
				           	//清除路线
//					    	if(TRACK.polylineArr.length){
//								that.map.remove(TRACK.polylineArr);
//								TRACK.polylineArr = [];
//							}
				            that.infoWindow.open(that.map,lnglat );
				            let currentDate = getNowFormatDate();
				            //重绘路线
				            //loadTrack(carNo, plateNumber, table, currentDate);
				})
				
				 
		}
		,// 实例化点标记
         addMarker(lnglat) {
         	let that=this
         	let marker;
            if (marker) {
                marker.setMap(null);
                marker = null;;
            }
            marker = new AMap.Marker({
//              icon: "../../../images/redMark.png",
                position: lnglat
            });
            marker.setMap(that.map);
        }
//		,loadTrack(carNo,carPlateNumbers,tableName,startDate) {
//			console.log("--> loadTrack --params-> carNo:"+carNo+"carPlateNumbers: "+carPlateNumbers+"tableName:"+tableName+" startDate：" + startDate);
//			var qUrl = "/queryTrack.do";
//			console.log("查询车辆轨迹请求：" +qUrl + "Time："+ new Date());
//		    var allRetPath = null; // 所有路径的内容
//		    var mainUrl = "../../../";
//			$.ajax({
//				type:"POST",
//				url: mainUrl + qUrl,
//				async:false,
//				contentType: "application/x-www-form-urlencoded;charset=utf-8",
//		        dataType:"json",
//		        data:{
//		        	tableName:tableName,
//					CarNo:carNo,
//					StartDate:startDate
//		        },
//		        success:function(result){
//		        	console.log(result);
//		        	console.log("--> queryTrack success.");
//		        	var message = result.message;
//		        	if(message=="false"){
//		        		console.log("没有数据");
//		        	}else{
//		        		allRetPath = result.list;
//		        	}
//		        },
//		        error:function(message){
//		        	console.log(message);
//		        	console.log("--> queryTrack error.");
//		        }
//		     });
//			 // Demo，需要纠偏的数据: allRetPath  =  [{x:116.318474,y:39.974051,sp:7.00,ag:330,tm:0},{x:116.317841,y:39.975582,sp:0.00,ag:0,tm:91},{x:116.317857,y:39.975630,sp:0.00,ag:0,tm:121},{x:116.317857,y:39.975667,sp:0.00,ag:0,tm:151},{x:116.317841,y:39.975731,sp:7.00,ag:340,tm:181},{x:116.317632,y:39.976314,sp:6.00,ag:340,tm:211},{x:116.317520,y:39.976702,sp:0.00,ag:0,tm:241},{x:116.317488,y:39.976750,sp:6.00,ag:330,tm:271},{x:116.317440,y:39.976866,sp:0.00,ag:0,tm:301},{x:116.317304,y:39.977398,sp:9.00,ag:350,tm:331},{x:116.317120,y:39.978029,sp:0.00,ag:300,tm:361},{x:116.317120,y:39.978597,sp:7.00,ag:0,tm:391},{x:116.317072,y:39.979249,sp:9.00,ag:350,tm:421},{x:116.317016,y:39.979981,sp:10.00,ag:350,tm:451},{x:116.316944,y:39.980781,sp:6.00,ag:330,tm:481},{x:116.316888,y:39.981245,sp:9.00,ag:350,tm:511},{x:116.316856,y:39.982013,sp:9.00,ag:10,tm:541},{x:116.316735,y:39.982681,sp:8.00,ag:340,tm:571},{x:116.316800,y:39.983481,sp:10.00,ag:350,tm:601},{x:116.316736,y:39.984297,sp:11.00,ag:350,tm:631},{x:116.316591,y:39.984965,sp:6.00,ag:330,tm:661},{x:116.316351,y:39.985112,sp:9.00,ag:260,tm:691},{x:116.316086,y:39.984564,sp:9.00,ag:170,tm:721},{x:116.316271,y:39.983864,sp:11.00,ag:170,tm:751},{x:116.316335,y:39.983044,sp:10.00,ag:170,tm:781},{x:116.316335,y:39.982696,sp:0.00,ag:0,tm:811},{x:116.316407,y:39.982132,sp:0.00,ag:170,tm:841},{x:116.316423,y:39.982116,sp:0.00,ag:0,tm:871},{x:116.316455,y:39.981696,sp:10.00,ag:170,tm:901},{x:116.316519,y:39.980964,sp:0.00,ag:170,tm:931},{x:116.316591,y:39.980565,sp:8.00,ag:170,tm:961},{x:116.316567,y:39.980496,sp:0.00,ag:0,tm:991},{x:116.316551,y:39.980480,sp:0.00,ag:0,tm:1021},{x:116.316551,y:39.980480,sp:0.00,ag:0,tm:1051},{x:116.316567,y:39.980412,sp:9.00,ag:170,tm:1081},{x:116.316623,y:39.979664,sp:9.00,ag:180,tm:1111},{x:116.316590,y:39.978896,sp:10.00,ag:180,tm:1141},{x:116.316622,y:39.978445,sp:0.00,ag:0,tm:1171},{x:116.316606,y:39.978428,sp:0.00,ag:0,tm:1201},{x:116.316719,y:39.978049,sp:0.00,ag:0,tm:1231},{x:116.316719,y:39.978028,sp:0.00,ag:0,tm:1261},{x:116.316887,y:39.977445,sp:9.00,ag:170,tm:1291},{x:116.316959,y:39.977129,sp:0.00,ag:0,tm:1321},{x:116.317071,y:39.976865,sp:9.00,ag:160,tm:1351},{x:116.317135,y:39.976729,sp:0.00,ag:0,tm:1381},{x:116.317135,y:39.976665,sp:0.00,ag:0,tm:1411},{x:116.317135,y:39.976681,sp:0.00,ag:0,tm:1441},{x:116.317152,y:39.976701,sp:0.00,ag:0,tm:1471},{x:116.317152,y:39.976701,sp:0.00,ag:0,tm:1501},{x:116.317135,y:39.976701,sp:0.00,ag:0,tm:1525},{x:116.317135,y:39.976701,sp:0.00,ag:0,tm:1527},{x:116.317135,y:39.976701,sp:0.00,ag:0,tm:1529},{x:116.317135,y:39.976701,sp:0.00,ag:0,tm:1531},{x:116.317135,y:39.976701,sp:0.00,ag:0,tm:1533},{x:116.317135,y:39.976701,sp:0.00,ag:0,tm:1535},{x:116.317135,y:39.976701,sp:0.00,ag:0,tm:1537},{x:116.317135,y:39.976701,sp:0.00,ag:0,tm:1539},{x:116.317135,y:39.976681,sp:0.00,ag:170,tm:1541},{x:116.317135,y:39.976681,sp:0.00,ag:170,tm:1543},{x:116.317135,y:39.976665,sp:0.00,ag:170,tm:1545},{x:116.317135,y:39.976629,sp:8.00,ag:170,tm:1547},{x:116.317135,y:39.976617,sp:8.00,ag:170,tm:1549},{x:116.317151,y:39.976565,sp:7.00,ag:170,tm:1551},{x:116.317151,y:39.976545,sp:8.00,ag:170,tm:1553},{x:116.317168,y:39.976413,sp:0.00,ag:0,tm:1583},{x:116.317184,y:39.976397,sp:0.00,ag:160,tm:1613},{x:116.317240,y:39.97625,sp:0.00,ag:0,tm:1643},{x:116.317256,y:39.976165,sp:10.00,ag:160,tm:1673},{x:116.317448,y:39.975582,sp:0.00,ag:0,tm:1703},{x:116.317488,y:39.975450,sp:0.00,ag:0,tm:1731},{x:116.317488,y:39.975450,sp:0.00,ag:0,tm:1733},{x:116.317488,y:39.975450,sp:0.00,ag:0,tm:1735},{x:116.317488,y:39.975434,sp:0.00,ag:0,tm:1737},{x:116.317488,y:39.975414,sp:0.00,ag:0,tm:1739},{x:116.317488,y:39.975414,sp:0.00,ag:0,tm:1741},{x:116.317488,y:39.975414,sp:0.00,ag:0,tm:1743},{x:116.317488,y:39.975398,sp:0.00,ag:160,tm:1745},{x:116.317488,y:39.975366,sp:8.00,ag:160,tm:1747},{x:116.317504,y:39.975314,sp:9.00,ag:160,tm:1749},{x:116.317520,y:39.975282,sp:10.00,ag:160,tm:1751},{x:116.317536,y:39.975266,sp:10.00,ag:160,tm:1753},{x:116.317576,y:39.975198,sp:8.00,ag:160,tm:1755},{x:116.317592,y:39.975146,sp:9.00,ag:150,tm:1757},{x:116.317616,y:39.975118,sp:9.00,ag:150,tm:1759},{x:116.317841,y:39.974718,sp:0.00,ag:0,tm:1789},{x:116.317953,y:39.974635,sp:0.00,ag:140,tm:1819},{x:116.317969,y:39.974599,sp:0.00,ag:0,tm:1849},{x:116.317985,y:39.974499,sp:0.00,ag:0,tm:1879},{x:116.318041,y:39.974315,sp:0.00,ag:0,tm:1909},{x:116.318137,y:39.974083,sp:0.00,ag:0,tm:1939},{x:116.318169,y:39.974099,sp:0.00,ag:0,tm:1969},{x:116.318370,y:39.973599,sp:0.00,ag:160,tm:1999},{x:116.318426,y:39.973416,sp:8.00,ag:160,tm:2029},{x:116.318578,y:39.972916,sp:0.00,ag:160,tm:2059},{x:116.318594,y:39.972900,sp:0.00,ag:0,tm:2089},{x:116.318594,y:39.972868,sp:0.00,ag:0,tm:2119},{x:116.318594,y:39.972848,sp:0.00,ag:0,tm:2149},{x:116.318594,y:39.972848,sp:0.00,ag:0,tm:2179},{x:116.318594,y:39.972848,sp:0.00,ag:0,tm:2209},{x:116.318602,y:39.972848,sp:0.00,ag:0,tm:2239},{x:116.318618,y:39.972868,sp:0.00,ag:0,tm:2269},{x:116.318618,y:39.972868,sp:0.00,ag:0,tm:2299},{x:116.318618,y:39.972884,sp:0.00,ag:0,tm:2329},{x:116.318706,y:39.972716,sp:0.00,ag:150,tm:2359},{x:116.318931,y:39.972848,sp:11.00,ag:330,tm:2389},{x:116.318338,y:39.974231,sp:22.00,ag:340,tm:2419},{x:116.317761,y:39.975630,sp:0.00,ag:340,tm:2449},{x:116.317737,y:39.975682,sp:0.00,ag:0,tm:2479},{x:116.317368,y:39.976682,sp:30.00,ag:340,tm:2509},{x:116.317000,y:39.979249,sp:36.00,ag:350,tm:2539},{x:116.316703,y:39.982033,sp:38.00,ag:350,tm:2569},{x:116.316383,y:39.984944,sp:25.00,ag:350,tm:2599},{x:116.316367,y:39.985100,sp:0.00,ag:0,tm:2629},{x:116.316383,y:39.985080,sp:0.00,ag:0,tm:2659},{x:116.316383,y:39.985080,sp:0.00,ag:0,tm:2689},{x:116.316335,y:39.985332,sp:0.00,ag:0,tm:2719},{x:116.316335,y:39.985380,sp:0.00,ag:0,tm:2749},{x:116.315934,y:39.985712,sp:14.00,ag:280,tm:2779},{x:116.312816,y:39.985590,sp:44.00,ag:260,tm:2809},{x:116.308319,y:39.985367,sp:48.00,ag:260,tm:2839},{x:116.303790,y:39.985243,sp:47.00,ag:270,tm:2869},{x:116.300112,y:39.986421,sp:44.00,ag:340,tm:2899},{x:116.299608,y:39.989769,sp:40.00,ag:350,tm:2929},{x:116.297436,y:39.992450,sp:46.00,ag:310,tm:2959},{x:116.295586,y:39.994763,sp:31.00,ag:350,tm:2989},{x:116.295450,y:39.996795,sp:18.00,ag:40,tm:3019},{x:116.295026,y:39.997147,sp:6.00,ag:330,tm:3049},{x:116.294897,y:39.997263,sp:0.00,ag:0,tm:3079},{x:116.294930,y:39.997347,sp:0.00,ag:0,tm:3109},{x:116.294897,y:39.997415,sp:0.00,ag:0,tm:3139},{x:116.294930,y:39.997415,sp:0.00,ag:0,tm:3169},{x:116.294953,y:39.997399,sp:0.00,ag:0,tm:3199},{x:116.294897,y:39.997415,sp:0.00,ag:0,tm:3229},{x:116.294865,y:39.997415,sp:0.00,ag:0,tm:3259},{x:116.294849,y:39.997415,sp:0.00,ag:0,tm:3289},{x:116.294913,y:39.997363,sp:0.00,ag:0,tm:3319},{x:116.294913,y:39.997299,sp:0.00,ag:0,tm:3349},{x:116.294969,y:39.997247,sp:0.00,ag:0,tm:3379},{x:116.295001,y:39.997215,sp:0.00,ag:0,tm:3409},{x:116.294929,y:39.997247,sp:0.00,ag:0,tm:3439},{x:116.294913,y:39.997279,sp:0.00,ag:0,tm:3469},{x:116.294913,y:39.997279,sp:0.00,ag:0,tm:3477},{x:116.294913,y:39.997247,sp:0.00,ag:0,tm:19810},{x:116.294561,y:39.997462,sp:0.00,ag:0,tm:19843},{x:116.294561,y:39.997414,sp:0.00,ag:0,tm:19873},{x:116.294617,y:39.997398,sp:0.00,ag:0,tm:19902},{x:116.294665,y:39.997379,sp:0.00,ag:0,tm:19932},{x:116.294529,y:39.997546,sp:0.00,ag:0,tm:19962},{x:116.294561,y:39.997594,sp:0.00,ag:0,tm:19992},{x:116.294729,y:39.997446,sp:0.00,ag:0,tm:20023},{x:116.294681,y:39.997562,sp:0.00,ag:0,tm:20051},{x:116.294929,y:39.997167,sp:0.00,ag:0,tm:32503},{x:116.294929,y:39.997167,sp:0.00,ag:0,tm:32533},{x:116.294833,y:39.997246,sp:0.00,ag:0,tm:32563},{x:116.294865,y:39.997179,sp:0.00,ag:0,tm:32593},{x:116.294865,y:39.997179,sp:0.00,ag:0,tm:32622},{x:116.294897,y:39.997195,sp:0.00,ag:0,tm:32652},{x:116.294953,y:39.997167,sp:0.00,ag:0,tm:32682},{x:116.294897,y:39.997215,sp:0.00,ag:0,tm:32712},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32742},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32749},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32751},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32753},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32755},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32757},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32759},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32761},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32763},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32765},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32767},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32769},{x:116.294849,y:39.997279,sp:0.00,ag:0,tm:32771},{x:116.294849,y:39.997299,sp:0.00,ag:0,tm:32775},{x:116.294833,y:39.997298,sp:0.00,ag:0,tm:32777},{x:116.294833,y:39.997314,sp:0.00,ag:0,tm:32779},{x:116.294833,y:39.997314,sp:0.00,ag:0,tm:32781},{x:116.294849,y:39.997263,sp:0.00,ag:0,tm:32811},{x:116.294849,y:39.997231,sp:0.00,ag:0,tm:32841},{x:116.294865,y:39.997231,sp:0.00,ag:0,tm:32871},{x:116.294865,y:39.997231,sp:0.00,ag:0,tm:32901},{x:116.294865,y:39.997263,sp:0.00,ag:0,tm:32929},{x:116.294865,y:39.997263,sp:0.00,ag:0,tm:32959},{x:116.294817,y:39.997246,sp:0.00,ag:0,tm:32989},{x:116.294801,y:39.997214,sp:0.00,ag:0,tm:33019},{x:116.294785,y:39.997194,sp:0.00,ag:0,tm:33049},{x:116.294761,y:39.997214,sp:0.00,ag:0,tm:33079},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33109},{x:116.294833,y:39.997230,sp:0.00,ag:0,tm:33139},{x:116.294833,y:39.997246,sp:0.00,ag:0,tm:33151},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33860},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33883},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33885},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33887},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33889},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33891},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33893},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33893},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33895},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33897},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33899},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33899},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33899},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33901},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33901},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33901},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33903},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33903},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33903},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33905},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33905},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33905},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33907},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33907},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33907},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33909},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33909},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:33909},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:34186},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:34216},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:34246},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:34276},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:34306},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:34320},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:40839},{x:116.294817,y:39.997230,sp:0.00,ag:0,tm:40842},{x:116.295530,y:39.997300,sp:0.00,ag:0,tm:40869},{x:116.294481,y:39.997510,sp:0.00,ag:0,tm:49472},{x:116.294761,y:39.997194,sp:0.00,ag:0,tm:49501},{x:116.294817,y:39.997214,sp:0.00,ag:0,tm:49531},{x:116.295017,y:39.997031,sp:0.00,ag:270,tm:49561},{x:116.294801,y:39.997331,sp:0.00,ag:0,tm:49591},{x:116.294817,y:39.997379,sp:0.00,ag:0,tm:49621},{x:116.294849,y:39.997315,sp:0.00,ag:0,tm:49651},{x:116.294833,y:39.997194,sp:0.00,ag:0,tm:49681},{x:116.294761,y:39.997331,sp:0.00,ag:0,tm:49711},{x:116.294785,y:39.997314,sp:0.00,ag:0,tm:49741},{x:116.294833,y:39.997314,sp:0.00,ag:0,tm:49771},{x:116.294881,y:39.997347,sp:0.00,ag:0,tm:49801},{x:116.294929,y:39.997315,sp:0.00,ag:0,tm:49831},{x:116.294913,y:39.997279,sp:0.00,ag:0,tm:49861},{x:116.294897,y:39.997279,sp:0.00,ag:0,tm:49891},{x:116.294833,y:39.997379,sp:0.00,ag:0,tm:49921},{x:116.294913,y:39.997331,sp:0.00,ag:0,tm:49951},{x:116.294929,y:39.997279,sp:0.00,ag:0,tm:49981},{x:116.294913,y:39.997279,sp:0.00,ag:0,tm:50011},{x:116.294817,y:39.997347,sp:0.00,ag:0,tm:50041},{x:116.294801,y:39.997363,sp:0.00,ag:0,tm:50071},{x:116.294801,y:39.997347,sp:0.00,ag:0,tm:50101},{x:116.294817,y:39.997314,sp:0.00,ag:0,tm:50131},{x:116.294833,y:39.997262,sp:0.00,ag:0,tm:50161},{x:116.294849,y:39.997263,sp:0.00,ag:0,tm:50189},{x:116.294849,y:39.997263,sp:0.00,ag:0,tm:50219},{x:116.294817,y:39.997331,sp:0.00,ag:0,tm:50249},{x:116.294801,y:39.997331,sp:0.00,ag:0,tm:50279},{x:116.294801,y:39.997314,sp:0.00,ag:0,tm:50292},{x:116.294665,y:39.997246,sp:0.00,ag:0,tm:52499},{x:116.294801,y:39.997363,sp:0.00,ag:0,tm:52529},{x:116.294745,y:39.997379,sp:0.00,ag:0,tm:52558},{x:116.294761,y:39.997363,sp:0.00,ag:0,tm:52588},{x:116.294601,y:39.997582,sp:0.00,ag:0,tm:52618},{x:116.294561,y:39.997562,sp:0.00,ag:0,tm:52643},{x:116.294561,y:39.997562,sp:0.00,ag:0,tm:52645},{x:116.294561,y:39.997562,sp:0.00,ag:0,tm:52647},{x:116.294561,y:39.997562,sp:0.00,ag:0,tm:52651},{x:116.294561,y:39.997546,sp:0.00,ag:0,tm:52653},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:52655},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:52657},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:52659},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:52661},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:52663},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:52665},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:52667},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:52669},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:52671},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:52673},{x:116.294561,y:39.997546,sp:0.00,ag:0,tm:52675},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:52704},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:55345},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:55375},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:55404},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:56073},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:56102},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74149},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74179},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74209},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74239},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74269},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74299},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74329},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74359},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74389},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74419},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74449},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74479},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74509},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74539},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74569},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:74573},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:83880},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:83910},{x:116.294577,y:39.997546,sp:0.00,ag:0,tm:83940},{x:116.294713,y:39.997398,sp:0.00,ag:0,tm:83970},{x:116.294505,y:39.997546,sp:0.00,ag:0,tm:84000},{x:116.294521,y:39.997582,sp:0.00,ag:0,tm:84030},{x:116.294505,y:39.997614,sp:0.00,ag:0,tm:84060},{x:116.294505,y:39.997614,sp:0.00,ag:0,tm:84090},{x:116.294545,y:39.997662,sp:0.00,ag:0,tm:84120},{x:116.294561,y:39.997662,sp:0.00,ag:0,tm:84150},{x:116.294697,y:39.997583,sp:0.00,ag:0,tm:84179},{x:116.294649,y:39.997530,sp:0.00,ag:0,tm:84209},{x:116.294577,y:39.997510,sp:0.00,ag:0,tm:84239},{x:116.294665,y:39.997482,sp:0.00,ag:0,tm:84269},{x:116.294729,y:39.997510,sp:0.00,ag:0,tm:84299},{x:116.294713,y:39.997583,sp:0.00,ag:0,tm:84329},{x:116.294681,y:39.997562,sp:0.00,ag:0,tm:84360},{x:116.294601,y:39.997530,sp:0.00,ag:0,tm:84390},{x:116.294561,y:39.997546,sp:0.00,ag:0,tm:84420},{x:116.294561,y:39.997546,sp:0.00,ag:0,tm:84450},{x:116.294953,y:39.997279,sp:0.00,ag:90,tm:84479},{x:116.295001,y:39.997011,sp:0.00,ag:0,tm:84509},{x:116.291612,y:39.998126,sp:46.00,ag:290,tm:84539},{x:116.289418,y:39.999804,sp:33.00,ag:350,tm:84569},{x:116.289090,y:40.001703,sp:0.00,ag:0,tm:84596},{x:116.289090,y:40.001703,sp:0.00,ag:0,tm:84598},{x:116.289090,y:40.001703,sp:0.00,ag:0,tm:84600},{x:116.289090,y:40.001703,sp:0.00,ag:0,tm:84602},{x:116.289090,y:40.001691,sp:0.00,ag:0,tm:84604},{x:116.289090,y:40.001691,sp:0.00,ag:0,tm:84606},{x:116.289090,y:40.001703,sp:0.00,ag:0,tm:84608},{x:116.289090,y:40.001703,sp:0.00,ag:0,tm:84610},{x:116.289090,y:40.001703,sp:0.00,ag:0,tm:84612},{x:116.289090,y:40.001703,sp:0.00,ag:0,tm:84614},{x:116.289090,y:40.001703,sp:0.00,ag:0,tm:84616},{x:116.289090,y:40.001703,sp:0.00,ag:0,tm:84618},{x:116.289090,y:40.001723,sp:0.00,ag:340,tm:84620},{x:116.289090,y:40.001755,sp:8.00,ag:330,tm:84622},{x:116.289058,y:40.001807,sp:13.00,ag:340,tm:84624},{x:116.288786,y:40.002807,sp:12.00,ag:350,tm:84654},{x:116.288626,y:40.003919,sp:13.00,ag:350,tm:84684},{x:116.288457,y:40.004987,sp:14.00,ag:350,tm:84714},{x:116.288289,y:40.006039,sp:16.00,ag:350,tm:84744},{x:116.288121,y:40.007106,sp:15.00,ag:350,tm:84774},{x:116.287969,y:40.008155,sp:14.00,ag:350,tm:84804},{x:116.287785,y:40.009222,sp:13.00,ag:350,tm:84834},{x:116.287625,y:40.010286,sp:14.00,ag:350,tm:84864},{x:116.287457,y:40.011370,sp:13.00,ag:350,tm:84894},{x:116.287209,y:40.012354,sp:14.00,ag:350,tm:84924},{x:116.287057,y:40.013290,sp:14.00,ag:350,tm:84954},{x:116.286889,y:40.014353,sp:14.00,ag:350,tm:84984},{x:116.287289,y:40.015222,sp:14.00,ag:350,tm:85014},{x:116.286785,y:40.016257,sp:13.00,ag:330,tm:85044},{x:116.286152,y:40.017205,sp:13.00,ag:320,tm:85074},{x:116.285407,y:40.018072,sp:15.00,ag:310,tm:85104},{x:116.284671,y:40.018951,sp:14.00,ag:320,tm:85134},{x:116.283926,y:40.019803,sp:8.00,ag:330,tm:85164},{x:116.283686,y:40.020134,sp:7.00,ag:310,tm:85194},{x:116.283037,y:40.020850,sp:8.00,ag:320,tm:85224},{x:116.282813,y:40.021118,sp:0.00,ag:0,tm:85254},{x:116.282805,y:40.021118,sp:0.00,ag:0,tm:85284},{x:116.282789,y:40.021134,sp:6.00,ag:320,tm:85314},{x:116.282517,y:40.021381,sp:0.00,ag:310,tm:85344},{x:116.282084,y:40.021853,sp:9.00,ag:300,tm:85374},{x:116.281532,y:40.022501,sp:11.00,ag:320,tm:85404},{x:116.280940,y:40.023252,sp:9.00,ag:320,tm:85434},{x:116.280283,y:40.023900,sp:12.00,ag:320,tm:85464},{x:116.279883,y:40.024383,sp:0.00,ag:320,tm:85494},{x:116.279587,y:40.024699,sp:0.00,ag:320,tm:85524},{x:116.279026,y:40.025298,sp:12.00,ag:320,tm:85554},{x:116.278322,y:40.026130,sp:12.00,ag:310,tm:85584},{x:116.277369,y:40.027197,sp:16.00,ag:320,tm:85614},{x:116.276601,y:40.028113,sp:12.00,ag:310,tm:85644},{x:116.276537,y:40.028228,sp:0.00,ag:0,tm:85674},{x:116.276080,y:40.028692,sp:13.00,ag:320,tm:85704},{x:116.275072,y:40.029711,sp:20.00,ag:320,tm:85734},{x:116.274015,y:40.030927,sp:18.00,ag:320,tm:85764},{x:116.273047,y:40.032074,sp:13.00,ag:320,tm:85794},{x:116.272903,y:40.031694,sp:14.00,ag:140,tm:85824},{x:116.273495,y:40.030958,sp:9.00,ag:150,tm:85854},{x:116.274231,y:40.030143,sp:9.00,ag:140,tm:85884},{x:116.274912,y:40.029375,sp:12.00,ag:140,tm:85914},{x:116.275632,y:40.028544,sp:12.00,ag:140,tm:85944},{x:116.276384,y:40.027744,sp:13.00,ag:140,tm:85974},{x:116.276969,y:40.026977,sp:10.00,ag:140,tm:86004},{x:116.277705,y:40.026197,sp:12.00,ag:140,tm:86034},{x:116.278322,y:40.025482,sp:11.00,ag:140,tm:86064},{x:116.278954,y:40.024778,sp:6.00,ag:130,tm:86094},{x:116.279450,y:40.024215,sp:11.00,ag:140,tm:86124},{x:116.280155,y:40.023399,sp:11.00,ag:140,tm:86154},{x:116.280603,y:40.022931,sp:12.00,ag:140,tm:86184},{x:116.281452,y:40.021932,sp:14.00,ag:140,tm:86214},{x:116.281972,y:40.021365,sp:0.00,ag:0,tm:86244},{x:116.282068,y:40.021285,sp:10.00,ag:150,tm:86274}];
//			 console.log(allRetPath); 
//			 allRetPath[0].tm = 1478031031; // 设定个开始时间
//			 console.log("----allRetPath----");
//		     var pathArr = []; // 拆开的数组
//			 var len = allRetPath.length;
//			 var count = Math.ceil(len/onePage);
//			 for(var i=1;i<=count;i++){
//				  var start,end;
//				  start = (i-1)*onePage;
//				  if(i*onePage<allRetPath.length){
//					  end = i*onePage;
//				  }else{
//					  end = allRetPath.length;
//				  }
//				  pathArr.push(allRetPath.slice(start,end));
//			  }
//			 
//			  /* 循环绘制多个线 */
//			  for(var i=0; i < pathArr.length; i++){
//		            var pLength = pathArr.length;
//				    graspRoad.driving(pathArr[i],(function(i){ // 应用了闭包 https://www.cnblogs.com/limingxi/p/4048705.html # https://blog.csdn.net/cxk_mz/article/details/79061403
//			            return function(error,ret){
//					          if(!error){
//						        	var path2 = [];
//						            var newPath = ret.data.points;
//						            for(var j=0; j<newPath.length; j+=1){
//						            	path2.push([newPath[j].x,newPath[j].y]);
//						            }
//						            //console.log(i + "<-<>->" + path2.length + "b:" + (TRACK.startPoint == null))
//			 
//						          	var newLine = new AMap.Polyline({
//						              path:path2,
//						              strokeWeight:6,
//						              strokeOpacity:0.6,
//						              strokeColor: "#66ff00",  
//						              showDir:true
//						            });
//							        map.add(newLine);
//							        TRACK.polylineArr.push(newLine);
//					          } 
//			            }
//			        })(i));	  
//			  }
//		}
			
			
			
			
		}
		  
		
	}
</script>

<style>
	.darkmap {
		position: relative;
		width: inherit;
		height: 100%;
		;
		background: rgba(0, 6, 29, 0.3);
		margin-bottom: 0px;
	}
	
	.map_content {
		position: static;
		width: 1px;
		height: inherit;
		margin-left: 50%;
		margin-right: 50%;
	}
	
	.amap-container {
		-webkit-tap-highlight-color: transparent;
		user-select: none;
		background-color: rgba(0, 0, 0, 0);
		cursor: default;
		margin-left: -960px;
		margin-top: 0px;
		width: 1920px;
		height: inherit;
	}
	.amap-info-content {
	    background: rgba(17, 61, 93, 0.9);
	    color: #ffc800;
	    border-radius: 8px;
	    border: 1px solid #35d8c6;
	    box-shadow: inset 0px 0px 5px rgba(100, 235, 255, 0.6);
	}
	
	.amap-info-contentContainer:hover .amap-info-outer {
	    box-shadow: inset 0px 0px 5px #64ebff;
	}
	.amap-info-sharp {
	    /*background-image: url(../../../images/welcome/sharp.png);*/ 
	}
	.bottom-center .amap-info-sharp{
		border-left: 11px solid transparent;
	    border-right: 11px solid transparent;
	    border-top: 14px solid #35d8c6;
	    bottom: -6px;
	    }
	    
    .amap-info-close {
	    position: absolute;
	    right: 8px !important;
	    top: 8px !important;
	    _right: 12px;
	    +right: 11px;
	    _top: 2px;
	    +top: 2px;
	    color: #38f6ff;
	    text-decoration: none;
	    font: bold 16px/14px Tahoma,Verdana,sans-serif;
	    width: 14px;
	    height: 14px;
	}
	.amap-info-close:hover{color: #ADFAFF;}
</style>