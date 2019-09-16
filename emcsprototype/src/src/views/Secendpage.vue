<template>
  <div id="secendpage">
    <MainPageTop :data-menus="childlist"></MainPageTop>
    <LeftMenu></LeftMenu>
  </div>
</template>

<script>
	import MainPageTop from '../components/MainPageTop'
	import LeftMenu from '../components/LeftMenu'
//	import '../assets/css/mainTopbanner/index_sec.css'
// ../ is an alias to /src 
export default {
  name: 'Firstpage',
  components: {MainPageTop,LeftMenu},
//poprs:Array,
  data:()=>{
  	return {
  		childlist:[{
											id:"GLBJCDD",
											cnName:"道路清洁车调度",
											imgUrl:require("../assets/images/mainTopbanner/e5.png"),
											beselected:true
										},
										{
											id:"CCDD",
											cnName:"垃圾车调度",
											imgUrl:require("../assets/images/mainTopbanner/ljcdd.png"),
											beselected:false
										},
										{
											id:"FBCDD",
											cnName:"粪便车调度",
											imgUrl:require("../assets/images/mainTopbanner/fbcdd.png"),
											beselected:false
										},
										{
											id:"JCCDD",
											cnName:"检查车调度",
											imgUrl:require("../assets/images/mainTopbanner/jccdd.png"),
											beselected:false
										},
										{
											id:"GCBJ",
											cnName:"公厕保洁",
											imgUrl:require("../assets/images/mainTopbanner/e3.png"),
											beselected:false
										},
										{
											id:"ZYML",
											cnName:"资源目录",
											imgUrl:require("../assets/images/mainTopbanner/menu/18resource/resource.png"),
											beselected:false
										},
										{
											id:"JZLJ",
											cnName:"建筑垃圾",
											imgUrl:require("../assets/images/mainTopbanner/e4.png"),
											beselected:false
										},
										{
											id:"RCGZ",
											cnName:"日常工作",
											imgUrl:require("../assets/images/mainTopbanner/e2.png"),
											beselected:false
										},
										{
											id:"CLBJ",
											cnName:"车辆报警",
											imgUrl:require("../assets/images/mainTopbanner/ebj.png"),
											beselected:false
										},
										{
											id:"SPJG",
											cnName:"视频监管",
											imgUrl:require("../assets/images/mainTopbanner/e6.png"),
											beselected:false
										},
										{
											id:"YJZH",
											cnName:"应急指挥",
											imgUrl:require("../assets/images/mainTopbanner/e9.png"),
											beselected:false
										},
										{
											id:"ZDCZ",
											cnName:"终端处置",
											imgUrl:require("../assets/images/mainTopbanner/e7.png"),
											beselected:false
										},
										{
											id:"ZYKH",
											cnName:"作业考核",
											imgUrl:require("../assets/images/mainTopbanner/e8.png"),
											beselected:false
										},
										{
											id:"ZHTJ",
											cnName:"综合统计",
											imgUrl:require("../assets/images/mainTopbanner/e10.png"),
											beselected:false
										},
										{
											id:"MHGL",
											cnName:"门户管理",
											imgUrl:require("../assets/images/mainTopbanner/e1.png"),
											beselected:false
										},
										{
											id:"TCGL",
											cnName:"图层管理",
											imgUrl:require("../assets/images/mainTopbanner/tc_mgr.png"),
											beselected:false
										},
										{
											id:"SYS",
											cnName:"系统管理",
											imgUrl:require("../assets/images/mainTopbanner/sys.png"),
											beselected:false
										}]
  	}
  }
}
</script>
<style  >
#secendpage{
  background :rgb(71, 214, 15);
  width:100%;
  height:95%;
  position :absolute;
  color: black;
  text-align: center;
} 
</style>