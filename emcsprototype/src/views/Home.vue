<template>
  <div id="homepage"> 
      <router-view></router-view>  
  </div> 
</template>

<script> 
import Firstpage from './Firstpage'
  export default {
    name: 'Home',
    components: { 
      Firstpage
    }
  }
    
</script>
<style>
#homepage{
 
  background:darkgreen;
  color: #FFFFFF;
  width: 100%;
  height: 100%;
}
</style>