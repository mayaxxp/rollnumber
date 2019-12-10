<template>
  <div id="secendpage">
    <MainPageTop :data-menus="childlist" ></MainPageTop>
    <LeftMenu :data-menus="secchildlist" :data-title="secchildtitle"></LeftMenu>
    <!--<HelloWorld msg="标题"></HelloWorld>-->
    <component :is="currentLink" :data-url="currentLinkData"></component>
  </div>
</template>

<script>
import MainPageTop from '@/components/MainPageTop'
import LeftMenu from '@/components/LeftMenu'
import HelloWorld from '@/components/HelloWorld'
//	import '@/assets/css/mainTopbanner/index_sec.css'
// @/ is an alias to /src
export default {
  name: 'Secendpage',
  components: {
  	MainPageTop: MainPageTop,
    LeftMenu:LeftMenu,
  	Pageone: () => import('@/components/pages/Pageone'),
  	Pagetwo: () => import('@/components/pages/Pagetwo'),
  	Nonedata: () => import('@/components/pages/Nonedata')
  },
  // poprs:Array,
  data:function () {
  	return {
  		currentLink: 'Nonedata',
  		currentLinkData: '无相关页面信息',
  		childlist: [ ],
  		secchildlist: [ ],
  		secchildtitle:""
  	}
  },
  created(){
  	//在页面刷新时将vuex里的信息保存到sessionStorage里 
  	let that=this
  	    window.addEventListener("beforeunload",()=>{
	  			window.sessionStorage.setItem("store",JSON.stringify(that.$store.state))
//	  			window.sessionStorage.clear();
	  	}) 
	    // 加载完成之前，执行。执行顺序:父组件-子组件
		  if(window.sessionStorage.getItem("store") ) { 
					that.$store.replaceState(Object.assign({}, that.$store.state,JSON.parse(sessionStorage.getItem("store")))) 
					window.sessionStorage.removeItem("store")
		  } 
  },
  mounted (){ 
//		if(window.sessionStorage.getItem("reSlecfirstMenuId")){
//		  	window.sessionStorage.removeItem("reSlecfirstMenuId") 
//		}
  	this.init();
  },
  methods:{
  	init(){ 
			this.childlist = this.getinitData;
  			// beSlecfirstMenuId  为  在首页面  点击的 入口按钮  ID ；该按钮 应排列在第一位 
			  let beSlecfirstMenuId = "";  
			   
			  if(window.sessionStorage.getItem("beSlecfirstMenuId")){ 
				  	beSlecfirstMenuId = window.sessionStorage.getItem("beSlecfirstMenuId");
				  	 
				  	this.toSecpage(beSlecfirstMenuId)   
				}  
  	}
  	,toSecpage(id){ 
				let arr_=[]
				arr_= this.childlist
				let that=this; 
  		  let leftSec=[];
  		  
  		  let index_=arr_.findIndex(item => item.menuCode === id)
				let finditem=(arr_.splice(index_,1))[0];
				let relistArr=arr_.unshift(finditem);
				console.log(finditem)
  		  for(let it in finditem){
  		  	if(it==="list"){
  		  		leftSec=this.deepClone(finditem.list);
  		  		this.$store.dispatch('changeLeftMenuFun', leftSec) ;
	 					for(let s of leftSec){
	 						  s.beselected=false
	 					}  
  		  	}
  		  	if(it=="menuName"){
  	 					this.secchildtitle= finditem.menuName
  	 					this.$store.dispatch('setLeftTitlenameFun', finditem.menuName) ;
 					}
  		  	if(it=="beselected"){
  	 					finditem.beselected= true	 
 					}
  		  }
//				this.$store.dispatch('changeUserallMenuFun', relistArr);
 
				 
				if(arr_.length){
					for(let list_ in arr_[0]){
						if(list_==="list"){ 
									leftSec=this.deepClone(arr_[0].list)
						}
					}
				} 
//				this.secchildlist=leftSec
	    	this.$store.dispatch('changeLeftMenuFun', leftSec); 
 				 
 				 let defaultPage={};
	    	let arrTrd=[] 
	    	let secMenuFirst={}
	    	secMenuFirst=leftSec[0]
      	for(let keyn in secMenuFirst){
      			if(keyn==="menuUrl"){
      					defaultPage=this.deepClone(secMenuFirst)
      			}else if(keyn==="list"){
      				  for(let trdK in secMenuFirst[keyn]){
      				  	if(trdK==="menuUrl"){
      				  				defaultPage=this.deepClone(secMenuFirst[keyn])
      				  	}
      				  }
      				  arrTrd=secMenuFirst.list 
      				  
      			}
      			
      			if(keyn==="beselected"){secMenuFirst.beselected=true ;}
      	}   
      	this.$store.dispatch('changeTreMenuFun', arrTrd) 
	      this.$store.dispatch('changeSecendMenuFun',secMenuFirst) //被选中的 二级菜单
      	this.$store.dispatch('changerightPagesFun', defaultPage)   
      	console.log(defaultPage)
  	 }
  	,changeSecpage(id){
  		  let item={};
  		  let leftSec=[]; 
  		  let reAllist=this.getinitData 
  		  for(let it of reAllist){
	  	 		for(let tht in it){
  		  	 	if(tht === "menuCode" && it.menuCode == id ){ 
  		  	 				item=it
  		  	 				for(let skey in item){ 
  		  	 					if(skey==="list"){ 
  		  	 						leftSec=this.deepClone(it.list);
  		  	 						for(let s of leftSec){
  		  	 							  s.beselected=false
  		  	 						}
		  	 						if(leftSec.length){
						 						 for(let kenm in leftSec[0]){
						 						 	if(kenm =="beselected"){
						 						 			leftSec[0].beselected=true ;
						 						 	}
						 						 }
						 					}
  		  	 					} 
  		  	 				}
  		  	 				 
  		  	 				
  		  	 		}else{
  		  	 			continue;
  		  	 		} 
    		  	 	break;
  		  	 }
  		  }  
  		  this.$store.dispatch('changeLeftMenuFun', leftSec) ; 
	    	let defaultPage={};
	    	let arrTrd=[] 
      	let secMenuFirst={}
	    	secMenuFirst=leftSec[0]
      	for(let keyn in secMenuFirst){
      			if(keyn==="menuUrl"){
      					defaultPage=this.deepClone(secMenuFirst)
      			}else if(keyn==="list"){
      				  for(let trdK in secMenuFirst[keyn]){
      				  	if(trdK==="menuUrl"){
      				  				defaultPage=this.deepClone(secMenuFirst[keyn])
      				  	}
      				  }
      				  arrTrd=secMenuFirst.list 
      			}
      	}
      	console.log(defaultPage)
      	this.$store.dispatch('changeTreMenuFun', arrTrd) 
	      this.$store.dispatch('changeSecendMenuFun',secMenuFirst) //被选中的 二级菜单
      	this.$store.dispatch('changerightPagesFun', defaultPage)   
  	}
  },
  computed: {
    getinitData() { 
      return this.$store.state.allMenuRealign
    },
    getLeftList (){ 
      return this.$store.state.secendmenu
    },
    getLeftTitle(){ 
      return this.$store.state.secendtitle
    },
    getcurrRightPage () {
      let currentpagedata = this.deepClone(this.$store.state.centermainpage);
      for(let it in currentpagedata){
      	if(it==="menuUrl"){
      		return (currentpagedata.menuUrl)
      	}
      } 
    },
    getcurrRightData () {
      let currentpagedata = this.deepClone(this.$store.state.centermainpage);
      for(let it in currentpagedata){
      	if(it==="topageData"){
      		return (currentpagedata.topageData)
      	}
      }  
    }
  },
  updated(){
//		console.log("【SecendPageTop】updated") 
  },
  watch: {
    '$store.state.centermainpage': {
	      handler (newValue, oldValue) {
	        // 监听  三级跳转   demo 
	        this.currentLink = newValue.menuUrl 
	        this.currentLinkData = newValue.topageData 
	      },
	      deep: true
    },
    '$store.state.allMenuRealign':{
	    	handler (newValue, oldValue){ 
	        this.childlist = newValue ; 
	      },
	      deep: true
    },
    '$store.state.secendmenu': {
	    	handler (newValue, oldValue){ 
	        	this.secchildlist = newValue ;  
	      },
	      deep: true
    },
    '$store.state.secendtitle': {
    	handler (newValue, oldValue){
        // 监听 
	    	this.secchildtitle = newValue ;
		    let reslectFirId=window.sessionStorage.getItem("reSlecfirstMenuId") ; 
	      this.changeSecpage(reslectFirId)
      },
      deep: true
    }
  }
}
</script>
<style  >
#secendpage{
	background :rgb(35, 41, 56);
	width:100%;
	height:97%;
	height:calc(100% - 20px);
	height:-webkit-calc(100% - 20px);
	height:-moz-calc(100% - 20px);
	position:absolute;
	color:black;
	text-align:center;
}
</style>
