<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script >
	 
export default {
  name: 'About',
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
  #about {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #FFFFFF;
    background: red;
    width: 100%;
    height: 100%;
  }
</style>