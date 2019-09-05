<template>
  <div id="top">
    <img alt="Vue logo" src="../assets/logo.png" width="30" height="40" style="left:0;top:0;width:30px;height:45px;">
    这是首页面<br>这是首页面<br>这是首页面<br>这是首页面<br>这是首页面<br>
    <router-link to="/home"><el-button>链接aaa</el-button></router-link>
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
  height:15%;
  position :absolute;
  color: black;
  text-align: center;
} 
</style>