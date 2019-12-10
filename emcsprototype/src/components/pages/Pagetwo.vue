<template>
	<div class="centermainpage">
		<el-container>
		  <el-header><h1>我是pagetwo--</h1>Header</el-header>
		  <el-main>
		  	<el-button>Main</el-button>  
		  	<!--用法  https://www.npmjs.com/package/vue-mark-calendar-->
		  	<Calendar ref="Calendar" :markDate="markDate" :markDateMore="markDateMore" > </Calendar>
		  	<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
		  </el-main>
		  <el-footer>Footer</el-footer>
		</el-container>
	</div>
</template>
<script> 
	
	
import Calendar from 'vue-mark-calendar';
	export default {
	  name: 'Pagetwo',
	  components: { Calendar }
	  ,props: {
			dataurl: String
		},
	data: function() {
		return {
			data: [{
				label: '一级 1',
				children: [{
					label: '二级 1-1',
					children: [{
						label: '三级 1-1-1'
					}]
				}]
			},{
				label: '一级 2',
				children: [{
					label: '二级 2-1',
					children: [{
						label: '三级 2-1-1'
					}]
				},{
					label: '二级 2-2',
					children: [{
						label: '三级 2-2-1'
					}]
				}]
			}, {
				label: '一级 3',
				children: [{
					label: '二级 3-1',
					children: [{
						label: '三级 3-1-1'
					}]
				}, {
					label: '二级 3-2',
					children: [{
						label: '三级 3-2-1'
					}]
				}]
			}],
			defaultProps: {
				children: 'children',
				label: 'label'
			}
					,markDate: ['2019-11-13','2019-11-24'],
				     markDateMore: [
				        {
				          date: "2019-04-01",
				          className: "mark1"
				        },
				        {
				          date: "2019-04-02",
				          className: "mark1"
				        },
				        {
				          date: "2019-04-03",
				          className: "mark2"
				        },
				        {
				          date: "2019-04-04",
				          className: "mark2"
				        },
				      ]
		}
	}
	,methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
}</script>
<style>
	.centermainpage{position: absolute;
	    width: calc(100% - 180px);width: -moz-calc(100% - 180px);width:-webkit-calc(100% - 180px);
	    left: 180px;
	    height: calc(100% - 94px);height: -moz-calc(100% - 94px);height:-webkit-calc(100% - 94px);
	    top: 94px;
	    background: #4343ad !important ;
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
