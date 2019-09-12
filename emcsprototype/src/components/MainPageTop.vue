<template v-cloak>
<div id="mainContent" class="top_banner">
	<div class="logo"></div>
			<div class="navBar">
				<div class="wc1200 row rowE">
					<div class="bd mt20">
						<div id="sca1" class="warp-pic-list">
							<div id="wrapBox1" class="wrapBox" >
								<!---webkit-transform:translateX(translateNumX);-moz-transform:translateX(translateNumX);transform:translateX(translateNumX);-->
							 	<ul id="count1" class="count clearfix"  :style="">
										<li v-for="(item,index) in dataMenus" :key="item.id"  :title="index">
											<a  :class="{'teg':false,'tegBeselected':item.beselected}"       :id="item.id" href="javascript:void(0)" @click="getLeftMenu(item.id,index)">
												<div class="kwg"><img :src="item.imgUrl"></div>
												<div class="wef">{{item.cnName}}</div>
											</a>
										</li> 
								</ul>
							</div> 
							<a id="right1" class="prev icon btn"></a>
							<a id="left1" class="next icon btn" @click="movetoadde(5)"></a>
							 
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
		props: {
			dataMenus:{
		      type: Array,
		      default: [{
						id:"id",
						cnName:"无菜单",
						imgUrl:require("../assets/images/mainTopbanner/e5.png"),
						beselected:true
					}]
		    }
			
		},
		data(){
			return {
				menulist:[],
				translateNumX:0
			}
		}, 
		created () {  //加载完成之前，执行。执行顺序:父组件-子组件
		   this.menulist=this.dataMenus;
		   console.log("【menulist】："+this.menulist); // 空值
		   console.log("【dataMenus】："+this.dataMenus);
	    },
//		mounted:{ //页面初始化方法   加载完成后执行。执行顺序:子组件-父组件
//			this_:this
//		},
		methods:{  //监听方法click事件等   事件方法执行。
			backHome(){
				 if(this.dataMenus){
				 	console.log(this.dataMenus);
				 }
			},
			getLeftMenu(ID,index){ 
					for(var i=0; i<this.menulist.length; i++){
				 		   this.menulist[i].beselected=false; 
					}
					var selnum=this.menulist[index];
					selnum.beselected=true;
					console.log(selnum); 
				
			},
			movetoadde(num){ 
				if(this.menulist){
					var mjsld=this.menulist[num];
					console.log(mjsld);
				}
			}
		},
		watch:{  //去监听一个值的变化，然后执行相对应的函数
			// movetoadd:(num)=>{
			// 	return {"-webkit-transform":translateX(num+68),"-moz-transform":translateX(num+68),"transform":translateX(num+68)}
			// } 
		}
	}
</script>

<style>
	.top_banner{
		margin: 0;  width: 100%; height: 94px;  display:inline-block; 
		 /* float: left; */
			    background-image: url(../assets/images/mainTopbanner/bj1.jpg);
			    background-position: left top;
			    background-repeat: repeat-x;
			    font-family: "微软雅黑";}
    
	.kwg{height: 55%;}
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
		position: absolute;
	    margin: 0px !important;
	    padding: 0px !important;
	    line-height: 15px;
	    text-align: center; 
	    height:auto;
	    color: #FFF;
	    font-size: 13px;  
	    width: 68px;
		white-space: normal
}
	.toHome a{display: block;width:56px;height:56px;float:right;margin-right:20px;}
	.toHome a i{background: url(../assets/images/mainTopbanner/toHomeN.png) 0px 0px no-repeat;pointer-events:none;width:56px;height:56px;display:block;position:relative;}
	.toHome a:hover i{background: url(../assets/images/mainTopbanner/toHomeO.png) 0px 0px no-repeat;cursor:hand;}
	.toHome a:active i{background: url(../assets/images/mainTopbanner/toHomeD.png) 0px 0px no-repeat;cursor:hand;}
	.kuaij{width:100px;}
	
.rowE .count{width:auto;height: 100%;padding: 0px;overflow:hidden;white-space: nowrap;display: inline-block;padding-inline-start:17px;}
.rowE .count  a {
	position: relative;
	display: block;
	width: 75px;
	height: 86px;
	text-align: center;
	font-weight: normal; 
	line-height: 36px;
	font-size: 13px;
	letter-spacing: .1em;
	text-decoration: none;
	color: #FFF;
}

.rowE .count a:hover{
	background-image: url(../assets/images/mainTopbanner/w13O.png);
	background-repeat: no-repeat;
    background-position: 0px 0px;
	}

.rowE .count .teg {
	background-image: url(../assets/images/mainTopbanner/w13.png);
	background-repeat: no-repeat;
	background-position: 0px 0px;
}

.rowE .count .teg:hover {
	background-image: url(../assets/images/mainTopbanner/w13O.png);
}
.rowE .count .teg:ACTIVE {
	background-image: url(../assets/images/mainTopbanner/w13.png);
}
.rowE .count .tegBeselected {
	background-image: url(../assets/images/mainTopbanner/w13.png);
}

.count li{display: inline-block;  list-style: none;margin-right: 4px;}
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
 
.wrapBox{
		height:90px !important;
		overflow: hidden;
	}

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
	display:inline-block;
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
	display:inline-block;
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
	
	
	.icon {
	    background-image: url(../assets/images/mainTopbanner/icon.png);
	    background-repeat: no-repeat;
	    background-position: 0 0;
	}
	.rowE .btn {
	    display: block;
	    height: 45px;
	    position: absolute;
	    top: 22px;
	    width: 28px;
	    z-index: 200;
	    cursor: pointer;
	}
	.rowE .prev:hover {
	    background-position: -0px -115px;
	}
	.rowE .prev {
	    background-position: -0px -70px;
	    left: 5px;
	}
	.rowE .prev:ACTIVE{
		background-position: left top;
	}
	.rowE .next:hover {
	    background-position: -0px -205px;
	}
	.rowE .next {
	    background-position: -0px -160px;
	    right: -39px;
	}
	.rowE .next:ACTIVE{
		background-position:left bottom;
	}
</style>