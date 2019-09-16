<template>
  <div class="logintimer ">
    <h1>{{tipText}}{{secendNum}}后返回登录</h1>
    
    <el-button  @click="loginHander">立即返回登录页</el-button>
    
  </div>
</template>
<script >
	 
export default {
  name: 'loginTimer',
  data(){
  	return {
  		tipText:"您还未登录  请返回登录",
  		secendNum:5
  	}
  },
  created() {
     setInterval(()=>{
     		this.secendNum-=1; 
     		if(this.secendNum ==0){
     			this.$nextTick(()=>{
	  			 this.$router.push("/")
	  			})
     		}
     },1000);
      
  },
  methods:{
  	loginHander(){ 
  		this.$nextTick(()=>{
  			 this.$router.push("/")
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
    color: #FFFFFF;
    background: red;
    width: 100%;
    height: 100%;
    text-align: center;
  }
</style>