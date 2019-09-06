<template>
  <div id="app"> 
		 <router-view></router-view>
		 shouye
  </div>
</template>
<script type="text/javascript">
	 import Home from './views/Home.vue' 
	 import '@/assets/css/loginpage/loginpage.css'
export default {
  name: 'app',
  components: {
  	Home
  },
  methods:{ 
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: darkviolet;
  color: #FFFFFF;
  width: 100%;
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
