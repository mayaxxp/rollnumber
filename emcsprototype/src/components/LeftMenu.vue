<template>
	<div class="leftjia">
			<h3 class="hes">{{dataTitle}}</h3>
			<div class="subNavBox">
				<div class="subNav" v-for="(item,index) in menulist" :key="item.menuCode" :class="{'currentDt':item.beselected}">
					<div class="ertt">
						<img :src="item.imageUrl" >
					</div>
					<div :id="item.menuCode"   @click.prevent="getRightContent(item.menuCode,index,item.topageData,item.menuUrl)">
						{{item.menuName}}
					</div>
					<ul :id="(item.menuCode + 'ul')"   :class="{'navContent':!item.beselected,'margin0':true}">
						<li v-for="(itemc,index) in childList" :key="itemc.menuCode"  :class="{'el-icon-iconName':itemc.beselected,'selectedLi':itemc.beselected,'el-icon-s-unfold':itemc.beselected}" @click.stop="getRightContentChild(itemc.menuCode,index,itemc.topageData,itemc.menuUrl)">{{itemc.menuName}}</li>
					</ul>
				</div>

				<div class="gsf"></div>
				
			</div>
			<div class="botdg"></div>

		</div>
</template>

<script>
import '@/assets/css/leftMenu/leftmenu.css'
export default {
  name: 'LeftMenu',
  props: {
    dataMenus:{
		      type: Array,
		      default:()=>{
		      	return [{
			            id: 'id',
			            cnName: '名称',
			            icoUrl: './static/img/menu/1garbage_truck_scheduling/monitor.png',
			            topageData: '/roadclean/toMain.do?menusId=GLBJCDD_SSJK',
			            beselected: true,
			            childs: []
			      }]
		      }
    }
    ,dataTitle:'' 
  },
  data(){
    return {
      menulist: [],
      childList: []
    }
  },
  created () {
    // 加载完成之前，执行。执行顺序:父组件-子组件
  },
  mounted () { // 页面初始化方法   加载完成后执行。执行顺序:子组件-父组件
//  this.dataMenus=this.dataMenusNewdata;
    this.menulist =this.dataMenus?this.dataMenus:this.dataMenusNewdata;
    this.childList = this.getTremenuList;
    var parthW = 1024// this.$refs.wrapbox.clientWidth;
    this.mlistlength = parseInt(parthW / 75)
  },
  methods: {
    getRightContent (eveid, index, toPagedata, toPagedemo){
	      /* 获得右侧内容 */
	     let that=this
	     let len=this.menulist.length
	      for (let i = 0; i < len; i++) {
	       	if(this.menulist[i].hasOwnProperty("beselected")){ 
	       		this.menulist[i].beselected = false
	       	}
	      } 
	       
	      this.menulist[index].beselected = true
	      let selnum = this.menulist[index];
	      if((selnum.list).length > 0){ 
	      		let len = (selnum.list).length
			      for (let i = 0; i < len; i++) {
					(this.menulist[index].list)[i].beselected = false 
			      }
				this.childList = selnum.list  
		  		this.$store.dispatch('changeTreMenuFun', selnum.list); 
        			
    			for(let keyn in selnum){
    				if(keyn==="menuUrl" ){
    					if(selnum.menuUrl!==""){
    						console.log(selnum)
        					that.$store.dispatch('changerightPagesFun', selnum)
        				}else{
        					let child0=selnum.list[0]
	        				for(let keynC in child0){
	        					if(keynC==="menuUrl" && child0.keynC!==""){
		        					if(child0.hasOwnProperty("beselected")){child0.beselected=true}
			        				that.$store.dispatch('changerightPagesFun', child0)
			        			}
	        				}
	        			}
    					
        			}
    			}
        			 
		  		
	      }else{
	      	this.childList = []
	        this.$store.dispatch('changeTreMenuFun', [])
	      } 
	      this.$store.dispatch('changeSecendMenuFun',selnum) 
    },
    getRightContentChild(eveid, index, toPagedata, toPagedemo) {
      /* 获得右侧内容 */ 
  		console.log(eveid+"::"+index+"::"+toPagedata+"::"+toPagedemo)
		let len = (this.childList).length
		for(let i = 0; i < len; i++){
			if(this.childList[i].hasOwnProperty("beselected")){ 
	       		this.childList[i].beselected = false
	       } 
		}
       this.childList[index].beselected = true
      let selnum ={ }
      selnum=(this.childList)[index];
       
      this.$store.dispatch('changerightPagesFun', selnum) 
	  this.$store.dispatch('changeSecendMenuFun',selnum) 
		return false;
    }
  },
  updated(){
//		console.log("【LeftPageTop】updated") 
  },	
  computed: {
    dataMenusNewdata () { 
      return this.$store.state.secendmenu;
    },
    getTremenuList(){
    	return this.$store.state.tirtedmenu;
    }
  },
   watch: {
    '$store.state.secendmenu':{
      	handler (newValue, oldValue) {
	        // 根据检测状态管理器中的二级按钮状态，刷新二级按钮样式   
	        this.menulist = newValue;  
	        let trdArr=[];
	        newValue.forEach((item,index)=>{
        		if(typeof(item.beselected) !== undefined &&item.beselected==true){
        				if(typeof(item.menuUrl) !== "undefined" && typeof(item.topageData) !== "undefined" && item.menuUrl!== "" && item.topageData== "" ){
        					this.$store.dispatch('changerightPagesFun', { topageData: item.topageData, topageDemo: item.menuUrl })
 						}
        				if(typeof(item.list) !== "undefined" && item.list!== []){
        					trdArr=this.deepClone(item.list)
        				} 
	        	   }
        	}); 
	      },
	      deep: true
    },
    '$store.state.tirtedmenu':{
    	handler (newValue, oldValue) {
	        // 根据检测状态管理器中的三级按钮状态，刷新三级按钮样式   
	        this.childList = newValue  
        	let sec=this.$store.state.beslecendmenu;  
        	let deafultPageO={} 
			for(let kn in sec){
				if(kn==="menuUrl" && sec.menuUrl!==""){
					this.$store.dispatch('changerightPagesFun', sec) 
				} 
			} 
        	
      	},
	    deep: true
    }
    ,"this.dataMenus":{
    	handler(newValue, oldValue){
    		this.menulist = newValue 
    	},
	    deep: true
    }
  }
}
</script>

<style>
</style>
