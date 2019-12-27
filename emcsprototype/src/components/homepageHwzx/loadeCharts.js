require.config({
	paths: {
		echarts: 'dist'
	}
});
require(['echarts', 'echarts/chart/bar', 'echarts/chart/map', 'echarts/chart/pie'],
	function charts(ec){ 
		pie3(ec);  
	} 
);

function refbar(){
	require.config({ paths: { echarts: 'dist' } });
	require(['echarts', 'echarts/chart/bar', 'echarts/chart/map', 'echarts/chart/pie'],
		function charts(ec) {  pie3(ec);   }
	);
}  
// 
function pie3(ec) {
	var myChart = ec.init(document.getElementById('port1pieLM'));

	var piecontent=document.getElementById('port1pieLM')
	var conboxWidth= piecontent.clientWidth;
	var conboxHeight= piecontent.clientHeight;

	var option = {
			barMinHeight:400,     // 最小高度改为0
			barWidth:350,   // 默认自适应 
			barGap:'10%', // 柱间距离，默认为柱形宽度的30%，可设固定值
    		barCategoryGap: '30%', // 类目间柱形距离，默认为类目间距的20%，可设固定值 
    		grid:{x:27, y:27, width:conboxWidth-40, height:conboxHeight-50,borderColor:'rgba(67, 144, 222, 0.4)'},
			title:{
				text:'',
				textStyle:{
					fontSize: 14,
					fontWeight: 'bolder',
					color: '#26f5fe' // 主标题文字颜色
				},
				subtextStyle:{
					fontSize: 14,
					fontWeight: 'bolder',
					color: '#26f5fe' // 主标题文字颜色
				}
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				x: 'right',
				data: ['当前', '历史同期'],
				textStyle: {fontSize: 13,fontWeight:'bolder',color: '#fffefe' }// 主标题文字颜色
				
			},
			toolbox: {
				show: false,
				feature: {
					dataView: {	show: true,	readOnly: false	},
					magicType: {show: true,	type: ['line', 'bar']},
					restore: {show: true},
					saveAsImage: {show: true} 
				}
			},
			calculable: true,
			xAxis: [{
				splitLine:{
					show: true,
					lineStyle: {
						color: '#1a5587',
						type: 'dashed',
						width: 1
					}},
				type: 'category',
				data: ['阜石小区', '科星社区', '双榆树社区', '清河', '御景阁小区'] ,
				axisLabel:{  
                                 interval:0,//横轴信息全部显示   
                                 textStyle: {fontSize: 13,fontWeight: 'bolder',color: '#ccc' }// 主标题文字颜色
				
                            },
				axisLine:{
                                lineStyle:{  
                                    color:'#ff0000',
                                    width:0//这里是为了突出显示加上的
                                }
                            }
			}],
			yAxis: [{
				splitLine:{
					show: true,
					lineStyle: {
						color: '#1a5587',
						type: 'dashed',
						width: 1
					}},
				type: 'value',
				axisLabel:{  
                             interval:0,//横轴信息全部显示   
                             textStyle: {fontSize: 13,fontWeight: 'bolder',color: '#ccc' }// 主标题文字颜色
				           }
			}],
			series: [{
						name: '当前',
						type: 'bar',
						data: [14.5, 19.9, 60.0, 80.2, 80],
					itemStyle: {
						//通常情况下：
						normal:{
							//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
							color:'#ff8400'
						}
					}
				},
				{
					name: '历史同期',
					type: 'bar',
					data: [2.6, 5.9, 9.0, 26.4, 28.7] ,
					itemStyle: {
						//通常情况下：
						normal:{
							//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
							color:'#c561ff'
						}
					}
				}
			]
		};
		myChart.setOption(option);
	}
 
