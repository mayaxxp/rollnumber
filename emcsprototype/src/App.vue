<template>
  <div id="app">
		 <!--<Home></Home>-->
		 <router-view></router-view>
		 <p>技术支持：北科光大北京科技股份有限公司</p>
  </div>
</template>
<script type="text/javascript">
	  import Calendar from 'vue-mark-calendar';
	import 'vue-mark-calendar/lib/vue-mark-calendar.css'
	 import '@/assets/css/loginpage/loginpage.css'
export default {
  name: 'app',
  components: {
  },
  created(){
 			if(window.sessionStorage.getItem("token")){
 				//在页面刷新时将vuex里的信息保存到sessionStorage里 
	  		let that=this
  			window.addEventListener("beforeunload",()=>{
		  			window.sessionStorage.setItem("store",JSON.stringify(that.$store.state)) 
	  		}) 
	  		window.unload=()=>{ 
				    // 加载完成之前，执行。执行顺序:父组件-子组件
					  if(window.sessionStorage.getItem("store") ) { 
								that.$store.replaceState(Object.assign({}, that.$store.state,JSON.parse(sessionStorage.getItem("store")))) 
								window.sessionStorage.removeItem("store")
								that.$store.dispatch('loginingStateChange',new Date().getTime().toString())
								let logintime=(new Date()).getTime().toString()   //继续前端登录时长计时--获取上次时间
          			that.$store.dispatch('loginingStateChange',logintime)   //继续前端登录时长计时
					  } 
	  		}
 			}
  }
  ,methods: {
  },
  watch:{
  	'$store.state.loginstate': {
				handler(newValue, oldValue) {
					let that=this;
					if(newValue == false) {
						new Promise((resolve)=>{
							let tmo=setTimeout(function(){
								that.$showTostinfo('长时间未操作无响应即将退出',that)
								resolve(tmo)								
							},1000)
						}).then((res)=>{
								clearTimeout(res)
								that.$store.dispatch('logoutState')
						})
						
					}
				},
				deep: true
		}
  }
}
</script>
<style>
	
#app {
	/*filter: grayscale(100%);*/
	/*filter:hue-rotate(331deg); filter: brightness(150%);*/
	/*filter:progid:DXImageTransform.Microsoft.BasicImage(Grayscale='100%');*/
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:#25598e;
  color: #FFFFFF;
  width: 100%;
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#app>p{position:absolute;width: 100%;letter-spacing: .1em; bottom: 2px;color: #8fd0c4;font-size:.8em;text-align: center;}

/*带标记的 日历 */
	.wh_container >>> .mark1 .wh_item_date_text{
	  background-color: #0fc37c;
	  color: #fff;
	} 
	.wh_container >>> .mark2 .wh_item_date_text{
	  background-color: #ad4a95;
	  color: #fff;
	}
	
	
.el-loading-spinner{margin-top: -59px;}
.el-loading-spinner .el-loading-text{font-size: 1.5em;color: white;white-space:pre-line;}
.el-loading-spinner>i{font-size: 2em;color: #40edff;}
.el-message{
	border: 1px solid rgba(45, 73, 93, 0.7);
	box-shadow: 0 0 5px rgba(0,0,0,.8);
	background:rgba(45, 73, 93, 0.83);top:150px !important; height: 60px;text-align: center; 
		font-weight: 600;
		transition: opacity .3s,bottom .3s,-webkit-transform .3s;
}
.el-message>i{display: block; }
.el-message>i:before{color:#F0F2F5;}
.el-message>p{width: 80%;display: block;}
</style>
