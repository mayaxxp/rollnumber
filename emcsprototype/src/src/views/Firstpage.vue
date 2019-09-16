<template>
  <div id="top">
    <img alt="Vue logo" src="../assets/logo.png" width="30" height="40" style="left:0;top:0;width:30px;height:45px;">
    <br>
    
    <router-link to="/home/aboutdsw"><el-button>--404--</el-button></router-link>
    <router-link to="/home/sec"><el-button>道路清洁车</el-button></router-link>
  </div>
</template>

<script>
// @ is an alias to /src 
export default {
  name: 'Firstpage',
  components: {  },
  poprs:String
}
</script>
<style  >
#top{
  background :rgb(71, 214, 15);
  width:100%;
  height:100%;
  position :absolute;
  color: rgb(219, 255, 119);
  text-align: center;
} 
</style>