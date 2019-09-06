<template>
  <div id="secendpage">
    <img alt="Vue logo" src="../assets/logo.png" width="30" height="40" style="left:0;top:0;width:30px;height:45px;">
     <h1>这是二级页面</h1>
    <router-link to="/aboutdsw"><el-button>--404--</el-button></router-link>
    <router-link to="/sec"><el-button>道路清洁车</el-button></router-link>
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
#secendpage{
  background :rgb(71, 214, 15);
  width:100%;
  height:15%;
  position :absolute;
  color: black;
  text-align: center;
} 
</style>