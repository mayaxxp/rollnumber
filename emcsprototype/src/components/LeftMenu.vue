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
				<div class="subNav" v-for="(item,index) in dataMenusNewdata" :key="item.id" :class="{'currentDt':item.beselected}">
					<div class="ertt">
						<img :src="item.icoUrl" >
					</div>
					<a :id="item.id"  href="javascript:void(0)" @click.stop="getRightContent(item.id,index,item.topageData)">
						{{item.cnName}}
					</a>
					<ul :id="(item.id + 'ul')"   :class="{'navContent':!item.beselected,'margin0':true}">
						<li v-for="(itemc,index) in item.childs" :key="itemc.id"  :class="{'selectedLi':itemc.beselected,'el-icon-iconName':itemc.beselected}" @click.stop="getRightContentChild(itemc.id,index,itemc.topageData)">{{itemc.cnName}}</li>
					</ul>
				</div>
			  
				<div class="gsf"></div>
			</div>
			<div class="botdg"></div>
			<router-view name="mainpartare"></router-view>
		</div>
</template>

<script>
	import '@/assets/css/leftMenu/leftmenu.css' 
	export default {
		name:"LeftMenu",
		data(){
			return {
				menulist:[],
				childlist:[]
			}
		},
		created (){  
			//加载完成之前，执行。执行顺序:父组件-子组件
		}, 
		mounted(){ //页面初始化方法   加载完成后执行。执行顺序:子组件-父组件 
			this.menulist=this.dataMenusNewdata;
				var parthW=1024//this.$refs.wrapbox.clientWidth;
				this.mlistlength=parseInt(parthW/75);  
		},
		methods:{
			getRightContent(eveid,index,toUrl){
				/*获得右侧内容*/ 
				for(var i=0; i<this.menulist.length; i++){
				 		   this.menulist[i].beselected=false; 
					}
				var selnum=this.menulist[index];
				selnum.beselected=true;
				if((selnum.childs).length>0){
					this.$store.dispatch('changerightMenuFun',selnum.childs); 
					var len=(selnum.childs).length;
					for(var i=0; i<len; i++){
					 		   (selnum.childs)[i].beselected=false; 
					}
					this.childList=selnum.childs;
				}else{
					this.childList=[];
				}
				return false;
			},
			getRightContentChild(eveid,index,toUrl){
				/*获得右侧内容*/ 
				var len=(this.childList).length;
				for(var i=0; i<len; i++){
				 		   (this.childList)[i].beselected=false; 
				}
				var selnum=(this.childList)[index];
				selnum.beselected=true;
				console.log(this.childList)
				return false;
			}
		},
		computed:{
			dataMenusNewdata(){ 
//				this.menulist=this.dataMenusNewdata; 
				return (this.$store.state.secendmenu);
			}
		},
		watch:{
			'$store.state.secendmenu':{
				handler(newValue, oldValue){
					// 监听是为了把更改后的样式及时保存到arr.styles里,最后arr是要提交的  
		　　　　},
		　　　　deep: true
			}
		}
	}
</script>

<style>
</style>