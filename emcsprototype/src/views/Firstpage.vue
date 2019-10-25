<template>
  <div class="top">
  	<Darkmap  ></Darkmap>
    <div class="toplayer">
    	<img alt="Vue logo" src="@/assets/logo.png" width="30" height="40" style="left:0;top:0;width:30px;height:45px;">
	    <br>
	    <router-link to="/home/aboutdsw"><el-button>--404--</el-button></router-link>
	    <router-link to="/home/sec"><el-button>道路清洁车</el-button></router-link>
	    <el-button  @click="toSecpage"></el-button>
    </div>
  </div>
</template>
<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=980aa3c043e6f347df9c36abfaa3ecb4&plugin=AMap.Autocomplete,AMap.Geocoder"></script>
<script type="text/javascript" src="http://cache.amap.com/lbs/static/addToolbar.js"></script>
<script>
// @ is an alias to /src
import Darkmap from '@/components/homeparts/Darkmap' 
export default {
  name: 'Firstpage',
  components: {Darkmap},
  poprs: String,
  data(){
  	return{
  		mapstyle:"light"
  	}
  },
  methods:{
  	 toSecpage(){
	  	 	window.sessionStorage.setItem('jsnum',{"name":"张三"})
	  	 	this.$router.push({path:'/home/sec'}) 
  	 }
  }
		   
}
</script>
<style  >
.top{
  background: rgb(35, 41, 56);
	width: 100%;
	height: 100%;
	position: absolute;
	color: rgb(113, 187, 210);
	text-align: center;
}
.toplayer{width: 100%; height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		pointer-events: none;
	}
	.toplayer *{ 
		pointer-events:auto;
	}
</style>
