<template>
  <div id="homepage">
      <router-view></router-view>
      <p>技术支持：北科光大北京科技股份有限公司</p>
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
	position:absolute;
  background:#25598e;
  color: #FFFFFF;
  width: 100%;
  height: 100%;
}
#homepage>p{position:absolute;width: 100%;letter-spacing: .1em; bottom: 2px;color: #8fd0c4;font-size:.8em;text-align: center;}
</style>
