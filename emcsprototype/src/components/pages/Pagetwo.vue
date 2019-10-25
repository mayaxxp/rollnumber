<template>
	<div class="centermainpage">
		<el-container>
		  <el-header><h1>{{msg}}我是pagetwo--</h1>Header</el-header>
		  <el-main><el-button>Main</el-button>  </el-main>
		  <el-footer>Footer</el-footer>
		</el-container>
	</div>
</template>
<script> 
	export default {
	  name: 'Pagetwo',
	  props: {
	    msg: String
	  }
	}
</script>
<style>
	.centermainpage{position: absolute;
	    width: calc(100% - 180px);width: -moz-calc(100% - 180px);width:-webkit-calc(100% - 180px);
	    left: 180px;
	    height: calc(100% - 94px);height: -moz-calc(100% - 94px);height:-webkit-calc(100% - 94px);
	    top: 94px;
	    background: rgb(33, 68, 169);
	    overflow: hidden;} 
	.el-header, .el-footer {
	    background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	    height: 40px;
	    width: 100%;
	    position: relative;
	    display: block;
	  }
	.el-main {
	  	position: relative;
		    display: block; 
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	    height: calc(100% - 80px);height: -moz-calc(100% - 80px);height:-webkit-calc(100% - 80px);
		width: 100%;
	    line-height: 160px;
	}
	.el-container {
	  	position: relative;
		    display: block; 
	    height: 100%;
		    width: 100%;
	} 
</style>
