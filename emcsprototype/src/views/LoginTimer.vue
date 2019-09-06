<template>
  <div class="logintimer ">
    <h1>请登录</h1>
  </div>
</template>
<script >
	 
export default {
  name: 'loginTimer',
  components: { 
  },
  methods:{
  	loginHander:()=>{ 
  		window.location.href='/first'
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
  }
</style>