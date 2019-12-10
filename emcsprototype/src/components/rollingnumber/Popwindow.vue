<template>
	<div :class="{'dataview_popwindow':true,'show_popwindow':dataShow}">
		<div class="dataview_backpart"></div>
		<div  class="popwindow_content">
			<div :id="dataInfo.id" ref="popWin_ccl" class="Hmn_panel_content" :style="positionInfo">
				<div class="Hmn_panelAC_top">
					<div class="Hmn_panelAC_top_left"></div>
					<div class="Hmn_panelAC_top_center" :style="{width : parseInt(dataInfo.width)-120+75 +'px'}">
						<div class="Hmn_panelAC_moveArea"
							 @mouseenter="movethisEnter" @mousedown="mousedownThis" @mousemove="onmousemove" @mouseleave="onmouseleave" @mouseup="onmouseup" @mouseout="onmouseup"
							 style="width:100%;height:31px;position:absolute;left:0px;top:4px;">{{dataInfo.title}}</div>
					</div>
					<div class="Hmn_panelAC_top_right">
						<a>
							<div class="Hmn_panelAC_closeBtn" @click="closePopwindow"></div>
						</a>
					</div>
				</div>
				<div class="Hmn_panelAC_mid" style="height:256px;">
					<div class="Hmn_panelAC_Mid_left"></div>
					<div class="Hmn_panelAC_Mid_center" :style="{width : parseInt(dataInfo.width)-120+75 +'px'}"></div>
					<div class="Hmn_panelAC_Mid_right"></div>
				</div>
				<div class="Hmn_panelAC_Bottom">
					<div class="Hmn_panelAC_Bottom_left"></div>
					<div class="Hmn_panelAC_Bottom_center" :style="{width : parseInt(dataInfo.width)-120+75 +'px'}"></div>
					<div class="Hmn_panelAC_Bottom_right"></div>
				</div>
				<div class="Hmn_panelAC_Content"  style="width:819px;height:333px">
					<!--<iframe src="/about" scrolling="yes" width="100%" height="100%" frameborder="0" allowtransparency="true">
					</iframe>-->
					<!--<router-view path="/about" name="About" width="100%" height="100%"></router-view>-->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//	import deepClone from 'plugins/Duplicate'
export default {
  name: 'popwindow',
  props: {
    dataShow:false,
    dataInfo:{id:"",title:"",url:"", width:0, height:0}
  },
  data () {
    return {
      menulist: [],
      translateNumX:{},
      menulistlength: Number,
      beslcFirstmenu:""
      ,moveing:false
      ,thisPopwin:{}
    }
  },
  created () { // 加载完成之前，执行。执行顺序:父组件-子组件 
  },
  mounted () { 
	 
  },
  methods: { // 监听方法click事件等   事件方法执行。
	  	closePopwindow(){
	  		console.log("closeThis")
	  		this.$emit('closeThis',{})
	  	}
	  	,movethisEnter(e){
//	  		console.log("enter")
//	  		console.log(e)
	  	}
	  	,mousedownThis(ev){
//	  		console.log(ev)
	  		console.log("Downthis")
			let Ev= ev || window.event; 
	    	this.moveing=true;  
	    	this.thisPopwin.domleft=this.$refs.popWin_ccl.style.left;
	    	this.thisPopwin.dombottom=this.$refs.popWin_ccl.style.bottom;
			this.thisPopwin.mousePos = this.mouseCoords(ev);  	 
	  	}
	  	,onmousemove(e){   //开始移动
//	  		console.log("move")
			if(this.moveing){
				this.thisPopwin.mouseNewPos=this.mouseCoords(e);
				let pleft=parseInt(this.thisPopwin.domleft)+(this.thisPopwin.mouseNewPos.x-this.thisPopwin.mousePos.x); 
				let pbottom=parseInt(this.thisPopwin.dombottom)+(this.thisPopwin.mousePos.y-this.thisPopwin.mouseNewPos.y); 
				this.$refs.popWin_ccl.style.left=pleft+"px"
				this.$refs.popWin_ccl.style.bottom=pbottom+"px"
			}
		}
	  	,onmouseleave(e){
	  		
	  	}
		,onmouseup(e){   //开始移动
			this.moveing=false;  
		}
		,mouseCoords(ev){   //获取鼠标坐标
			if(ev.pageX || ev.pageY){ 
				return {x:ev.pageX, y:ev.pageY}; 
			} 
			return {  x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,  y:ev.clientY + document.body.scrollTop - document.body.clientTop  }; 
		}
	}, 
	updated(){ 
	},
  	computed: { 
	    diyConTitleStyle(){
	      var num_ = this.$store.state.jjcount
	      var dt = {
	        '-webkit-transform': 'translateX(' + num_ + 'px)',
	        '-moz-transform': 'translateX(' + num_ + 'px)',
	        'transform': 'translateX(' + num_ + 'px)',
	        '-webkit-transition': 'transform 0.8s',
	        '-moz-transition': 'transform 0.8s',
	        'transition': 'transform 0.8s'
	      }
	      return dt
	    }
	    ,positionInfo(){ 
	    	let obj
	    	if(this.dataInfo){
	    	obj={
	    		'width':(parseInt(this.dataInfo.width)+75)+'px'
	    		,'height':(parseInt(this.dataInfo.height)+63)+'px'
	    		,'left':(parseInt(this.dataInfo.width)+75)/-2+'px'
	    		,'bottom':(parseInt(this.dataInfo.height)+63)/-2+'px'
	    	}}else{
	    		obj={
		    		'width':200+'px'
		    		,'height':160+'px'
		    		,'left':-100+'px'
		    		,'bottom':-80+'px'
	    		}
	    	} 
	    	return obj;
	    }
  	},
  	watch: { 
  		// 去监听一个值的变化，然后执行相对应的函数
//	    '$store.state.*':{
//	    	handler (newValue, oldValue) { 
//	        }
//	        ,deep:true
//	    } 
		'this.dataShow':{
			handler (newValue, oldValue){
//				let pleft=parseInt(this.thisPopwin.domleft)+(this.thisPopwin.mouseNewPos.x-this.thisPopwin.mousePos.x); 
//				let pbottom=parseInt(this.thisPopwin.dombottom)+(this.thisPopwin.mousePos.y-this.thisPopwin.mouseNewPos.y); 
//				this.$refs.popWin_ccl.style.left=pleft+"px"
//				this.$refs.popWin_ccl.style.bottom=pbottom+"px"
				
			}
			,deep:true
		}
	}
}
</script>

<style>
	.dataview_popwindow {
	    position: absolute;
	    width: 100%;
	    height: inherit;
	    visibility: hidden;
	    overflow: hidden;
	    background: rgba(0, 9, 43, 0.6);
	    top: 0px;
	    left: 0px;
	    z-index: 9999;
	}
.show_popwindow {
    visibility: visible;
    z-index: 9999;
}
.dataview_backpart {
    position: absolute;
    width: 100%;
    visibility: inherit;
    height: 100%;
    background: rgba(0, 8, 15,0.1);
    top: 0px;
    left: 0px;
}
.popwindow_content {
    position: relative;
    width: 1px;
    height: 50%;
    visibility: inherit;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    z-index: 999;
}
.Hmn_panel_content{opacity:1;position: absolute;}
.Hmn_panelAC_top {
    width: 100%;
    height: 80px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.Hmn_panelAC_top .Hmn_panelAC_top_left {
    position: relative;
    pointer-events: none;
    float: left;
    width: 50px;
    height: inherit;
    background: url(../../assets/images/homefirst/panelAC/PanelNarmolAC_Radio_50_80.png)top left;
}
.Hmn_panelAC_top .Hmn_panelAC_top_center {
    position: relative;
    float: left; 
    height: inherit;
    background: url(../../assets/images/homefirst/panelAC/PanelNarmolAC_HRepeat80.png)repeat-x top;
    line-height: 37px;
    letter-spacing: .2em;
    font-weight: 900;
    vertical-align: middle;
    text-align: left;
    color: #ffe42b;
}
.Hmn_panelAC_top .Hmn_panelAC_moveArea{cursor: move;
    line-height: 30px;
    vertical-align: middle;
    width: 100%;
    height: 31px;
    position: absolute;
    left: 0px;
    top: 4px;
    }
    .Hmn_panelAC_top .Hmn_panelAC_top_right {
	    position: relative;
	    float: right;
	    width: 70px;
	    height: inherit;
	    background: url(../../assets/images/homefirst/panelAC/PanelNarmolAC_Radio_50_80.png)right top;
	}
	.Hmn_panelAC_closeBtn {
	    background: url(../../assets/images/homefirst/panelAC/panelAC_close.png) no-repeat top left;
	    width: 57px;
	    height: 43px;
	    position: absolute;
	    top: 0px;
	    right: 0px;
	    font-size: 12px;
	    line-height: 23px;
	    text-align: center;
	    cursor: default;
	    color: #5bdad5;
	}
	.Hmn_panelAC_closeBtn:hover{
		background: url(../../assets/images/homefirst/panelAC/panelAC_close.png) no-repeat center left 
	}
	.Hmn_panelAC_closeBtn:active{
		background: url(../../assets/images/homefirst/panelAC/panelAC_close.png) no-repeat bottom left 
	}
	.Hmn_panelAC_Mid_left {
    position: relative;
    float: left;
    width: 50px;
    height: 100%;
    background: url(../../assets/images/homefirst/panelAC/PanelNarmolAC_VRepeat50.png)top left;
}
.Hmn_panelAC_Mid_center {
    position: relative;
    float: left;
    width: 280px;
    height: 100%;
    background: url(../../assets/images/homefirst/panelAC/PanelNarmolAC_CM.png)repeat;
    color: #26f5fe;
}
.Hmn_panelAC_Mid_right {
    position: relative;
    float: right;
    width: 70px;
    height: 100%;
    background: url(../../assets/images/homefirst/panelAC/PanelNarmolAC_VRepeat50.png)right top;
}
.Hmn_panelAC_Bottom {
    width: 100%;
    height: 60px;
}
.Hmn_panelAC_Bottom .Hmn_panelAC_Bottom_left {
    position: relative;
    float: left;
    width: 50px;
    height: inherit;
    background: url(../../assets/images/homefirst/panelAC/PanelNarmolAC_Radio_50_80.png)bottom left;
}
.Hmn_panelAC_Bottom .Hmn_panelAC_Bottom_center {
    position: relative;
    float: left;
    width: 470px;
    height: inherit;
    background: url(../../assets/images/homefirst/panelAC/PanelNarmolAC_HRepeat80.png)repeat-x bottom;
}
.Hmn_panelAC_Bottom .Hmn_panelAC_Bottom_right {
    position: relative;
    float: right;
    width: 70px;
    height: inherit;
    background: url(../../assets/images/homefirst/panelAC/PanelNarmolAC_Radio_50_80.png)right bottom;
}
.Hmn_panelAC_Content {
    position: absolute;
    top: 40px;
    left: 30px;
    min-width: 200px;
    min-height: 200px;
    color: #84c7cf;
    letter-spacing: .2em;
    padding-left: 5px;
    overflow: hidden;
}
</style>