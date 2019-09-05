<template>
  <div id="first">
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
					<form action="http://123.56.210.163/login.do" id="login_form" method="post" class="animated fadeInRight ">
						<input type="hidden" id="accountPassWord" name="accountPassWord">
						<div class="loginico animated fadeInLeft bounce"></div>
						<div class="shur">
							<input type="text" id="account" name="account" value="" class="username ggg" placeholder="请输入用户名">
						</div>
						<div class="shurff">
							<input id="accountPassWordView" name="accountPassWordView" value="" type="password" class="password ggg pwd" placeholder="请输入密码">
						</div>
						<div class="shurfff" style="height:34px;">
							<input type="text" id="verificatCode" name="verificationCode" maxlength="4" class="ggg" style="width: 115px;position:relative;float:left;"   placeholder="请输入验证码">
							<div class="hjwq" style="width:80px;position:relative;float:left;padding-left: 5px;padding-top: 1px;">
								<img src="http://123.56.210.163//common/image.jsp" id="randImage" width="80" height="30" class="yjmtp" onclick="loadimage()">
							</div> 
						</div>
					 	<router-link to="first" tag="el-button">登录</router-link> |
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
  components: {
  	 
  },
  methods:{
  	loginHander:()=>{ 
  		window.location.href='/Firstpage'
  		}
  }
}
</script>
<style>
#first {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFFFFF;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
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


 
				 
</style>
