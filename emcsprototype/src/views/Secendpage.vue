<template>
  <div id="secendpage">
    <MainPageTop data-menus=[1,11,23,13,14]></MainPageTop>
    
  </div>
</template>

<script>
	import MainPageTop from '../components/MainPageTop'
//	import '../assets/css/mainTopbanner/index_sec.css'
// @ is an alias to /src 
export default {
  name: 'Firstpage',
  components: {MainPageTop},
  poprs:String
}
</script>
<style  >
#secendpage{
  background :rgb(71, 214, 15);
  width:100%;
  height:95%;
  position :absolute;
  color: black;
  text-align: center;
} 
</style>