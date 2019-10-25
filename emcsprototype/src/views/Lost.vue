<template>
  <div class="lostpage">
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
    color: #FFFFFF;
    background: red;
    width: 100%;
    height: 100%;
  }
  .lostpage>h1{
  	width: auto;
  	text-align: center;
    display:block;
    margin-left: auto;
    position: relative;
    margin-right: auto;
  }
</style>
