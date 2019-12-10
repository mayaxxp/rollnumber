import Highcharts from 'highcharts' 
const getGCBJopition=(option_)=>{
	let num_=option_.num;
	let color_=option_.color; 
	return { 
				chart: {
					type: 'solidgauge',
					backgroundColor:'rgba(0,0,0,0)',
					marginTop: 50
				},
				title: {
					text: '',
					style: {
						fontSize: '20px'
					}
				}, 
				colors: ['#CCCCCC','#ef0808','#9DFF02'],
				tooltip: {
					borderWidth: 2,
					backgroundColor: 'black',
					shadow: true, 
					style: {
						borderRadius:'15px',
						fontSize: '16px'
					},
					pointFormat: '{series.name}<br><span style="font-size:2em; border-radius: 5px;display:inline-block;color: {point.color}; font-weight: bold">{point.y}%</span>',
					positioner: function (labelWidth) {
						return {
							x: 40 - labelWidth / 2 +5,
							y: 85  
						};
					}
				},
				pane: {
					startAngle: 0,
					endAngle: 180,
					background: []
				},
				yAxis: {
					min: 0,
					max: 100,
					lineWidth: 0,
					tickPositions: [],
					stops: [
						[0.1, '#ff2020'], // green
						[0.55, '#ffc800'], // yellow
						[0.9, '#10ff00'] // red
					]
				},
				plotOptions: {
					solidgauge: {
						borderWidth: '12px',
						dataLabels: {
							enabled: false
						},
						linecap: 'round',
						stickyTracking: false
					}
				},
				series: [{
					name: '完成量',
					borderColor:color_,
					data: [{
						color: Highcharts.getOptions().colors[0], 
						radius: '100%',
						innerRadius: '100%',
						y: num_
					}]
				}, {
					name: '目标量',
					borderColor:'#91968b',
					data: [{
						color: Highcharts.getOptions().colors[1],
						radius: '75%',
						innerRadius: '75%',
						y: 100
					}]
				}]
			} 
}
const getLajiCZoption=()=>{     //垃圾终端设施受纳量同期比
	return {
				    chart: {
				        type: 'bar',
				        backgroundColor:'rgba(0,0,0,0)',
				        margin: [10, 0, 20, 110]
				    },
				    title: {
				        text: '',
				        style:{
								fontSize: 12,
								//fontWeight: 'bolder',
								color: '#FFFFFF' // 主标题文字颜色
							},
						align:'center',
						x:12,
						y:0
				    }, 
				    credits: {
				        enabled: false
				    },
				    exporting:{
								 enabled:false
					},
				    xAxis: { 
					        gridLineColor:'#FF3300',
//					        categories: eval(obj.categories),
					        categories: ['四季青垃圾', '大公村生活垃圾', '六里屯填埋场', '巴沟粪便处理场', '保山建筑垃圾处理场'], 
					        title: {
					            text: null
					        },
					         
					        labels:{
					        		x:-3,
					        		y:5, 
						            style:{
						            	width:'100px',
						                 color:'#FFFFFF',
						                 fontSize:'12px',
						                 fontFamily: "微软雅黑",
						                 padding:"5px"
						              }
						           }
			    	},
				    yAxis: {
				        min: 0,
				        title: {
				            text: null 
				        },
				        labels: {
				            overflow: 'justify'
				        }
				        
				    },
				    tooltip: {
				        valueSuffix: '吨',
				        borderRadius: 10,             // 边框圆角
				         style: {                      // 文字内容相关样式
							        color: "#FFFFFF",
							        fontSize: "12px",
							        //fontWeight: "blod",
							        fontFamily: "Courir new"
							    }
				    }, 
				    legend: {
			            verticalAlign: 'top',
			            align: 'right',
			            x:10,
			            y:-16,
			            symbolRadius:2,
			            floating: true,
			            backgroundColor: 'rgba(0,0,0,0)',
			            borderColor: 'rgba(0,0,0,0)',
			            borderWidth: 0, 
			            shadow: false,
			            itemStyle:{
								        fontSize: 12,
								        //fontWeight: 'bolder',
								        color: '#FFFFFF'          // 主标题文字颜色
							    }
			        },
				    plotOptions: {
				        bar: {
				          	shadow: false,            //不显示阴影
				          	borderWidth: 0, 
				          	enabled: true,
				            dataLabels: {
				                enabled: true,
				                allowOverlap: true, // 允许数据标签重叠
				                 style: {
										color: '#FFFFFF',
										fontSize:'10px',
										fontFamily:'微软雅黑'
									}
				            } 
				        }
				    },
				    
				     series: [{
						        name: '本周进站吨位(t)',
						        data: [133, 156, 100, 408, 62]
						    }, {
						        name: '上周进站吨位(t)',
						        data: [107, 31, 635, 203, 22]
						    }]  
//				    series:eval(obj.dateSource)
	    }
}

const getRoadTotaloption=(option_)=>{ //道路清洁实时统计
	console.log(option_)
	let max_="1";
	let total_=""*1;
	let weiWanCheng_=""*1;
	let yiWanCheng_=""*1;
	for(let itam in option_){ 
		switch (itam){
					case "total":
						total_=option_.total
						let maxL=0
						maxL=(total_+"").length
						for(let m=0;m<maxL;m++){
							max_+="0"
						}  
						break;
					case "weiWanCheng":
						weiWanCheng_=option_.weiWanCheng
						break;
					case "yiWanCheng": 
						yiWanCheng_=option_.yiWanCheng
						break;
					default :
						break;
				}
	}
	
	return {
			exporting: {
	            enabled:false
			},
			global: {
				useUTC: false
			},
			credits:{
		    	enabled: false // 禁用版权信息
			},
			chart: {
				backgroundColor: 'rgba(0,0,0,0)',
				type: 'column'
			},
			title: {
				text: ''
			},
			xAxis: {
				categories: ['1:00', '2:00', '3:00', '4:00', '5:00','6:00', '7:00', '8:00', '9:00', '10:00','11:00', '12:00', '13:00', '14:00', '15:00','16:00', '17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00', '24:00']
			},
			yAxis: {
				min: 0,
				max: max_,
				title: {
					text: '道路清洁车总里程（KM）'
				},
				stackLabels: {  // 堆叠数据标签
					enabled: false,
					style: {
						fontWeight: 'bold',
						color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
					}
				}
			},
			legend: {
				align: 'right',
				x: -10,
				verticalAlign: 'top',
				y: 0,
				floating: true,
				//backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'rgba(0,0,0,0)',
				backgroundColor: 'rgba(0,0,0,0)',
				borderColor: 'rgba(0,0,0,0)',
				borderWidth: 0,
				color:'#fff',
				shadow: false
			},
			tooltip: {
				formatter: function () {
					return '<b>' + this.x + '</b><br/>' +
						this.series.name + ': ' + this.y + '，千米<br/>' +
//						'总量: ' + this.point.stackTotal+"，千米";
						'总量: ' + total_+"，千米";
						 
				}
			},
			plotOptions: {
				column: {
					stacking: 'normal',
					dataLabels: {
						enabled: false,
						color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
						style: {
							// 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
							textOutline: '1px 1px black'
						}
					}
				} 
			},
			series: [{
				name: '未完成',
				color:'#7693b7',
				borderWidth: 0,
//				data: [1, 2, 3, 4, 5,6, 7, 8, 9, 10,11, 12, 13, 14, 15,16, 17, 18, 19, 20,21, 22, 23, 24]
				data:weiWanCheng_
			}, {
				name: '已完成',
				color:'#ffe400',
				borderWidth: 0,
//				data: [23, 22, 21, 20, 19,18, 17, 16, 15, 14,13, 12, 11, 10, 9,8, 7, 6, 5, 4,3, 2, 1, 0]
				data:yiWanCheng_
			}]
		}
}
const getRoadtypeOption=()=>{   //道路作业分类统计
	let colors = ['#ffff00','#00bff3','#00ff00','#fc2626','#ece7cf'],
		categories = [
			"已作业",
			"作业中",
			"未作业" 
		],
		data = [
			{
				"y": 40,
				"color": colors[1],
				"drilldown": {
					"name": "已作业",
					"categories": [
						"正常",
						"超速"
					],
					"data": [
						18,
						22
					],
					"colors":[
						colors[2]
						,colors[3]
					]
				}
			},
			{
				"y": 35,
				"color": colors[0],
				"drilldown": {
					"name": "作业中",
					"categories": [
						"作业中……"
					],
					"data": [
						35
					],
					"colors":[
						colors[0],
					]
				}
			},
			{
				"y": 25,
				"color": colors[4],
				"drilldown": {
					"name": "未作业",
					"categories": [
						"未作业……"
					],
					"data": [
						25
					],
					"colors":[
						colors[4],
					]
				}
			} 
		],
		browserData = [],
		versionsData = [],
		i,
		j,
		dataLen = data.length,
		drillDataLen,
		brightness;
		// Build the data arrays
		for (i = 0; i < dataLen; i += 1) {
			// add browser data
			browserData.push({
				name: categories[i],
				y: data[i].y,
				bl: data[i].drilldown.data[j]/data[i].y,
				color: data[i].color
			});
			// add version data
			drillDataLen = data[i].drilldown.data.length;
			for (j = 0; j < drillDataLen; j += 1) {
				brightness = 0.2 - (j / drillDataLen) / 3;
				versionsData.push({
					name: data[i].drilldown.categories[j],
					y: data[i].drilldown.data[j],
					bl: data[i].drilldown.data[j]/data[i].y,
					color: data[i].drilldown.colors[j] //Highcharts.Color(data[i].color).brighten(brightness).get()
				});
			}
		}
	
	
	
	
	return {
		exporting: {
            enabled:false
		},
		global: {
			useUTC: false
		},
		credits:{
	    	enabled: false // 禁用版权信息
		},
		pane: {
			size: '50%'
		},
	    chart: {
			polar: true,
			backgroundColor: 'rgba(0,0,0,0)',
			type: 'pie'
		},
	    title: {
	        text: null
	    },
	    plotOptions: {
	        pie: {
	            shadow: true,
	            borderWidth: 0, 
	            borderColor: 'rgba(0,0,0,0)',
	            center: ['50%', '35%']
	        }
	    },
	    tooltip: {
	        valueSuffix: '%'
	    },
	    series: [{
	        name: '作业状态', // 作业类型
	        data: browserData,
	        size: '62%',
	        dataLabels: {
	            formatter: function () {
	            	return this.y > 5 ? this.point.name : null;
	            },
	            color: '#ffffff',
	            distance:-15 
	        }
	    }, {
	        name: '占比率', // 类别
	        data:  versionsData,
	        size: '86%',
	        innerSize: '86%',
	        dataLabels: {
	            formatter: function () {
	                // display only if larger than 1
	                 return this.y >1? '<b>' + this.point.name + ':</b> ' +this.y + '%' : null;  
	            },
	            distance:12 
	        },
	        id: 'versions'
	    }],
	    responsive: {
	        rules: [{
	            condition: {
	                maxWidth: 100
	            },
	            chartOptions: {
	                series: [{
	                    id: 'versions',
	                    dataLabels: {
	                        enabled: true
	                    }
	                }]
	            }
	        }]
	    }
	}
}

const getRubbComple=(option_)=>{
	
	return {
		 chart: {
		          type: 'bar',
		          backgroundColor:'rgba(0,0,0,0)'
	    },
		title: {
		       text: ''
		},
		colors:[ 
	               '#C0C0C0',//第一个颜色
	               '#99FF66'//第二个颜色 
			   ], 
		xAxis: {
//		      categories:eval(obj.categories),
		      categories:['垃圾楼', '小区'],
		       labels:{
		              style:{
		                 color:'#FFFFFF',
		                 fontSize:'12px',
		                 fontFamily: "微软雅黑"
		              }
		           }
		},
		yAxis: {
		       min: 0,
		       title: {
		           text: '收运情况'
		       }
		},
		credits: {
	           enabled: false
	       },
	    exporting:{
		        enabled:false
				},
		tooltip: {
	        borderRadius: 10,             // 边框圆角
	        style: {                      // 文字内容相关样式
				        color: "#FFFFFF",
				        fontSize: "12px",
				        fontFamily: "Courir new"
					},
	         
	        formatter: function () {
                 return '<span style="color: ' + this.point.color + '"> '+ this.x + '<br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                '总数: ' + this.point.stackTotal+'<br/>'+
                 '占比: '+this.point.percentage.toFixed(1)+'%</span>';
                
            }
	    },
		legend: {
		       /* 图例显示顺序反转
		        * 这是因为堆叠的顺序默认是反转的，可以设置 
		        * yAxis.reversedStacks = false 来达到类似的效果 
		        */
		        verticalAlign: 'top',
	            align: 'right',
	            x:8,
	            y:-18,
	            symbolRadius:2,
	            floating: true,
	            reversed: true 
		        
		},
		plotOptions: {
		       	series:{
		           stacking: 'normal',
		           borderColor: 'rgba(0,0,0,0)'
		        }
		},
//		    series:eval(obj.dateSource)
		series: [{
		       name: '未收运',
		       data: [67, 147]
		   },{
		       name: '已收运',
		      data: [205, 501]
		   }]  
		}
}

export {getGCBJopition,getLajiCZoption,getRoadTotaloption,getRoadtypeOption,getRubbComple}