<template>
  <div id="app"> 
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
