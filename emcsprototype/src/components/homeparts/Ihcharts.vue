<template>
   
    <div class="ihcharts" :id="id" :option="option"></div>
   
</template>
	
<script>
	import Highcharts from 'highcharts'
	import HighchartsMore from 'highcharts/highcharts-more'
	import Solidgauge from 'highcharts/modules/solid-gauge' 
	Solidgauge(Highcharts)
	HighchartsMore(Highcharts);
	export default {
		name:'Ihcharts'
		,data(){
			return {
				
			}
		}
		,props:{ 
		  id:{ type: String },
	      option: { type: Object } 
		}
		,created(){
			
		}
		,mounted () {
			let that = this
			Highcharts.chart(that.id, that.option)
  		}
  		,methods:{
			 
  		}
  		,computed: { 
		},
		watch:{
 			 
		}
	}
</script>

<style>
	.ihcharts{height: 200px; width: 210px; overflow: hidden;    position: absolute;    top: 20px;    left: 10px;    z-index: 9;}
</style>