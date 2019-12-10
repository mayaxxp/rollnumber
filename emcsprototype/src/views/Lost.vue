<template>
  <div class="lostpage">
  	<img src="@/assets/images/404.png" width="500" height="300"/>
  	<h1>【404】未找到相应资源</h1>
  </div>
</template>
<script >

export default {
  name: 'Lost',
  components: {
  },
  methods: {
  	loginHander: () => {
  		window.location.href = '/first'
  	}
  }
}
</script>
<style>
  .lostpage {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #666666;
    background: white;
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .lostpage>img{
  	display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: 20%;
  }
  .lostpage>h1{
  	width: auto;
  	text-align: center;
    display:block;
    margin-left: auto;
    position: relative;
    margin-top: 50px;
  }
</style>
