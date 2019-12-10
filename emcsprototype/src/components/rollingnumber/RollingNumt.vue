<template> 
	<div  class="rollingNum" >
				<div class="partNum">
					<div class="numbarCont floatL" @click="showPopWin('fgtpop','总出车量','http://127.0.0.1:8080/about', .6, .6)">
						<div class="backg"  ><i class="roundA"></i></div>
						<div id="fgt" class="numBlueBackdiv"  data-val="000000000">
							 
						</div>
						<div class="numBarfixlayer"  > 
							<span class="titleN">总出车辆</span>
							<div class="iicon">
								<div class="iicoA"  ></div>
							</div>
						</div>
					</div>
					<div class="numbarCont floatL" @click="showPopWin('fgt2pop','总行驶里程','http://127.0.0.1:8080/about', .6, .6)">
						<div class="backg"><i class="roundB"></i></div>
						<div id="fgt2"  class="numBlueBackdiv" data-val="000000000">
							 
						</div>
						<div class="numBarfixlayer" > 
							<span class="titleN">总行驶里程</span>
							<div class="iicon">
								<div class="iicoB"></div>
							</div>
						</div>
					</div>
					<div class="numbarCont floatL" @click="showPopWin('fgt3pop','总清运称重','http://127.0.0.1:8080/about', .6, .6)">
						<div class="backg"><i class="roundC"></i></div>
						<div id="fgt3"  class="numBlueBackdiv" data-val="000000000">
							 
						</div> 
						<div class="numBarfixlayer" > 
							<span class="titleN">总清运称重</span>
							<div class="iicon">
								<div class="iicoC" ></div>
							</div>
						</div>
					</div>
					<div class="numbarCont floatL" @click="showPopWin('fgt4pop','总计工时','http://127.0.0.1:8080/about', .6, .6)">
						<div class="backg"><i class="roundD"></i></div>
						<div id="fgt4"  class="numBlueBackdiv" data-val="000000000">
							 
						</div> 
						<div class="numBarfixlayer" > 
							<span class="titleN">总计工时</span>
							<div class="iicon">
								<div class="iicoD"  ></div>
							</div>
						</div>
					</div>
				</div>
		</div>
</template>

<script>
	import moduleNum from '@/components/rollingnumber/js/moduleNum'
	import {hmn_panel} from '@/components/rollingnumber/js/tHmn_uijs'
	import '@/components/rollingnumber/moduleNumRound.css'
	export default {
		name:"rollingNum"
		,porp:{}
		,components:{
			 
		}
		,data(){
			return {
				
			}
		}
		,created(){ 
  		}
	  	,mounted(){ // 页面初始化方法   加载完成后执行。执行顺序:子组件-父组件
	  		this.init();
	  	}
 		,methods:{
 			init(){
 				console.log("init")
 				if(moduleNum){console.log(moduleNum.initNumSty("#fgt"))}
// 				moduleNum.initNumSty("#fgt"); 
//				moduleNum.initNumSty("#fgt2"); 
//				moduleNum.initNumSty("#fgt3"); 
//				moduleNum.initNumSty("#fgt4"); 
 			}
 			,showPopWin(id,title,url, width, height){
 
			}
		}
 	}
</script>

<style>
	.rollingNum{
		position:relative;
		background: #002335;
		width: 1px;height: 1px;
		top: 50%;
		margin-left: auto;
		margin-right: auto;
	}
	.Hmn_panel_content{
		position: fixed;
	    top: 100px;
	    left: 200px;
	    background:rgba(2, 17, 31, 0.67)
	}
	.topcontentBox{width: 1px;height: 1px;position: absolute;left:50%;top: 50%;}
</style>