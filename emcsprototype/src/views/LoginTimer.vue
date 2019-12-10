<template>
  <div class="logintimer ">
    <h1>{{tipText}}{{secendNum}}秒后返回登录{{msn}}</h1> 
    <el-button  @click="loginHander">立即返回登录页</el-button> 
  </div>
</template>
<script >

export default {
  name: 'loginTimer',
  props:{msn:String}
  ,data () {
  	return {
  		tipText: '您还未登录  请返回登录',
  		secendNum: 5
  	}
  },
  created () {
  	this.tipText=(this.$route.query.msn)?this.$route.query.msn:this.tipText
  	let that=this;
    setInterval(() => {
     		this.secendNum -= 1
     		if (this.secendNum == 0) { 
     				let obj={}
     				that.axios.post("/logout",obj ).then(()=>{ 
							window.sessionStorage.clear();
							that.$router.push({path:'/'}); 
						}) 
     		}
    }, 1000)
  },
  methods: {
  	loginHander () {
  		let that=this;
  		this.$nextTick(() => {
  					let obj={}
  					that.axios.post("/logout",obj ).then(()=>{ 
							that.$router.push({path:'/login'}); 
							window.sessionStorage.clear();
						})
  		})
  	}
  }
}
</script>
<style>
  .logintimer {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #666666;
    background: white;
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
    .logintimer>img{
  	display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: 20%;
  }
  .logintimer>h1{
  	width: auto;
  	text-align: center;
    display:block;
    margin-left: auto;
    position: relative;
    margin-top: 50px;
  }
</style>
