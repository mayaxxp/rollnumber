<template>
  <div id="login" :class="{'login':true,'loginMin':toMinstyle}">
  	<div class="topline"></div>
    <div class="pageBackground">
			<div class="titlelogo">
				<img src="../assets/images/loginpage/titlelogo.jpg" width="100%"/>
			</div>
			<div class="mainContent" style="">
				<!--maincontent-->
				<div  style="width:100%;height:inherit;overflow:hidden;position:relative;">
					<img src="../assets/images/loginpage/mainbackground.png" class="centermainbg animated fadeInRightBig" width="1445px" height="380px" />
				</div>
				<div class="animo_box animated fadeInLeft ">
					<div class="mainImage animated fadeInDown">
						<img src="../assets/images/loginpage/scene.png" width="100%"/>
						<div class="clound0 animated fadeInUp"></div>
						<div class="clound1 animated fadeInUp "></div>
						<div class="clound2 animated fadeInUp "></div>
						<div class="clound3 animated fadeInUp "></div>
						<div class="clound4 animated fadeInUp "></div>
						<div class="clound5 animated fadeInUp "></div>
					</div>
				</div>
				<div class="login_Box">
					<form   id="login_form" method="post" class="animated fadeInRight ">
						<input type="hidden" id="accountPassWord" name="accountPassWord">
						<div class="loginico animated fadeInLeft bounce"></div>
						<div class="shur">
							<el-input type="text" id="account" name="account" ref="nameInput" v-model="user" :class="{'username':true,'ggg':true,'errfocus':(errObj=='username')}"  @keyup.native.enter="loginHander"  placeholder="请输入用户名" clearable>
							</el-input>
						</div>
						<div class="shurff">
							<el-input id="accountPassWordView" name="accountPassWordView" ref="passInput" v-model="pasword" type="password" :class="{'password':true,'ggg':true,'pwd':true,'errfocus':(errObj=='password')}"  @keyup.native.enter="loginHander"  placeholder="请输入密码" clearable>
							</el-input>
						</div>
						<div class="shurfff" style="height:34px;">
							<el-input type="text" id="verificatCode" name="verificationCode" ref="codeInput" v-model="code" maxlength="4" :class="{'ggg':true,'errfocus':(errObj=='code')}" style="width: 115px;position:relative;float:left;"  @keyup.native.enter="loginHander"  placeholder="请输入验证码" clearable></el-input>
							<div class="hjwq" style="width:80px;position:relative;float:left;padding-left: 5px;padding-top: 1px;">
								<img   id="randImage" width="82" height="32" class="yjmtp" ref="loadimg" @click="loadimage">
								<!--<img src="http://192.168.20.58:9007/code/image" id="randImage" width="80" height="30" class="yjmtp" ref="loadimg" @click="loadimage">-->
							</div>
						</div>
					 	<div class="shurff"> 
							<el-button @click="loginHander">登录</el-button>
						</div>
						
					</form>

					<div class="appEwmAC"  >
						<div class="appEwmBC">
							<div class="appEwmCC">
									<div class="appEwmDC"></div>
							</div>
						</div>
						<span class="erweimaLable">安卓端App下载</span>
					</div>
				</div>
				 

			</div>
		</div>
    <div class="bottomline">版权所有：北京市海淀区城市管理委员会　 技术支持：北京北科光大信息技术股份有限公司 (010)-82652766</div>
  </div>
</template>
<script type="text/javascript"> 
	 import '../assets/css/loginpage/loginpage.less'
	 import '../assets/css/loginpage/animate.min.css' 

export default {
  name: 'Login',
  data () {
  	return {
      show: false
      ,errObj:""
      ,code:''
      ,user: ''
      ,pasword: ''
      ,toMinstyle: false
      ,baseURL:'' 
    }
  },
  components: {

  },
  created(){ 
 				window.sessionStorage.clear();
  },
  mounted () {
     	this.loadimage() 
     	this.$refs.nameInput.focus()
	}
  ,methods: {
  		loadimage:function(){  //获取更新验证码图片 
//				this.$refs.loadimg.src = this.axios.defaults.baseURL+ 
				let url_="/code/image?_="+ Math.random(); 
				this.axios.get(url_,{responseType: 'arraybuffer'}).then((rep)=>{  
					let imgurl = 'data:image/png;base64,' + btoa(new Uint8Array(rep.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))
					this.$refs.loadimg.src =imgurl
					try{ 
						let verifytoken_=rep.headers.verifytoken
						window.sessionStorage.setItem("verifyToken", verifytoken_); 
					}catch(err){
						let verifytoken_=''
						window.sessionStorage.setItem("verifyToken", verifytoken_); 
						console.log(err)
					}
 			}).catch((err)=>{
 					console.log(err)
 			})
 		}
		,
			getWheather(){
				let url_='http://i.tianqi.com/index.php?c=code&id=19&color=%23FFFFFF&icon=6&py=haidian&temp=1&num=3&site=13'; 
				this.axios.get(url_,{responseType: 'text/html'}).then((data) => {
					console.log(data)
					 this.wheatherHtml=data
				}).catch((error) => {
					 console.log(error)
				}); 
			}
  		,loginHander: function () {
		   				 let that=this
			   if(this.user==""){ 
							that.$showTostinfo("请输入用户名",this)
							this.errObj='username'
							this.$refs.nameInput.focus()
			   		 return; 
			   }else if(this.pasword==""){ 
						 that.$showTostinfo('请输入密码',this)
						this.errObj='password'	
						that.$refs.passInput.focus()
			   		 return ;
			   }else if(this.code==""){ 
							that.$showTostinfo('请输入验证码',this);
							this.errObj='code'
							this.$refs.codeInput.focus()
							this.loadimage()
			   		 return ;
			   }else if(this.user!=""&&this.pasword!=""&&this.code!==""){
			   		  this.errObj='' 
			   		  let verifyToken_=window.sessionStorage.getItem("verifyToken")
							let objlogin = {
									"code":this.code
									,"username": this.user
									,"password": this.pasword
									,"verifyToken":verifyToken_
							}; 
					 
			   		let self=this
			   		let that=this
			   			this.axios.post("/login", objlogin).then((data) => {     //服务器登录
 									if(typeof(data.data)!=='undefined'&& data.data!==null){
 										switch (data.code){
 											case 200: 
 												window.sessionStorage.setItem("token", data.data.token); 
 												
												if(data.data.type=="gw"){
														window.sessionStorage.setItem("usertype", "gw");
														self.$router.push({ path: "/welcomGW"})
												}else if(data.data.type=="hwzx"){
														window.sessionStorage.setItem("usertype", "hwzx");
														self.$router.push({path:"/welcomHwzx"})
												}else if(data.data.type=="cg"){
														window.sessionStorage.setItem("usertype", "cg");
														self.$router.push({path:"/welcomCG"})
												} 
 												break;
											case 4000:
												this.$showTostinfo('登录名或密码不对哦～',this)
 												break;
											case 4001:
												this.$showTostinfo('验证码不对哦～',this)
												this.loadimage()
 												break;
											case 500:
												this.$showTostinfo('验证码过期～',this)
												this.loadimage()
 												break;
											case 4002:
												this.$showTostinfo('该用户已经在别处登录～',this)
 												break;
 											default: 
 												break;
 										}
 									}
									
									
							  }) 
//			   			window.sessionStorage.setItem("token", "123");
//			   			self.$router.push({ path: "/first"})  
	    	}
	   }
	},
  computed: {
    reversedMessage: function () {
      return this.pasword.split('').reverse().join('')
    }
  },
  beforeRouteLeave (to, from, next) {
//			let that=this; 
//			let prmis = new Promise(
//				() => {
//					if(to.name==="first"){    
//			 				that.toMinstyle=true; 
//			 				console.log("1miao")
//					 }else{
//					 		that.toMinstyle=false;  
//					 		console.log("2miao")
//					};
//					setTimeout(function(){
//						next()
//					},450)
//				}
//			) 
	next()
},
	beforeRouteEnter(to, from, next) {
		next()
	},
	beforeRouteUpdate(to, from, next) {
    	next()
  }
}
</script>
<style>
.login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFFFFF;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
    transition: opacity .3s,top .3s ,left .3s ,width .3s ,height .3s ; 
    -moz-transition: opacity .3s,top .3s ,left .3s ,width .3s ,height .3s ; 
    -webkit-transition: opacity .3s,top .3s ,left .3s , width .3s ,height .3s; 
    transition-delay: .2s;
    -moz-transition-delay: .2s;
    -webkit-transition-delay: .2s;
    
  /*transition: opacity .3s,top .3s ,left .3s,width .3s,height .3s*/
 /* -webkit-transform .3s;*/
  
  /*transform:rotate(-45deg);
  -ms-transform:rotate(45deg); 
  -moz-transform:rotate(45deg);  
  -webkit-transform:rotate(45deg);  
  -o-transform:rotate(45deg); */
}
.loginMin{width:140%;
    height:120%;
    /*margin-left: -20%;
    margin-top: -10%;*/
    position: absolute;
    opacity:0;}
.pageBackground{transition: opacity .3s ,top .3s ,left .3s ; 
    -moz-transition: opacity .3s,top .3s ,left .3s  ; 
    -webkit-transition: opacity .3s,top .3s ,left .3s ; }
.loginMin>.pageBackground{ 
	    top: 15%;
	    opacity: 0;
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
.el-input>input{height: 32px;}
.el-input>.el-input__suffix{margin-top:-4px;}
.errfocus{ 
	border:1px solid orange;
	box-shadow: 0 0 7px inset orange;
	border-radius: 5px; 
	margin-bottom: 8px;
}
.errfocus>input{  
	margin: 0px !important;
}
.shurff .el-button{
	width: 200px;color: rgb(65, 86, 182);letter-spacing: 1.5em;text-align: center;
	background:#ffffff;padding-left: .3em;
	border: 1px solid #688b97;}
.shurff .el-button:hover{
	color: #FFFFFF;
	background:#00d1e9;
	border: 1px solid #218bb1;}
 .shurff .el-button span{padding-left: 2.5em;}
.findtop{color: red;}
.selfold{color: #64ef1f;
    position: absolute;
    top: 50%;
    left: 50%;}

</style>
