//function lj_init() {
//	var lj_canvas,  lj_anim_container,cavAP, lj_overlay_container;
//	lj_canvas = document.getElementById("lj_canvas");
//	lj_anim_container = document.getElementById("lj_anim_container");
//	lj_overlay_container = document.getElementById("lj_overlay_container");
//	lj_handleComplete();
//	cavAP=document.getElementById("lj_canvasaParent")
//}

import lib_Lj from '@/components/homepageHwzx/dataviewLj'
export default function lj_handleComplete(lj_canvas_,lj_anim_container_,lj_overlay_container_,cavAP_) {
 
	
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	let lj_exportRoot = new lib_Lj.dataviewLj();
	let lj_stage = new createjs.Stage(lj_canvas);
	lj_stage.addChild(lj_exportRoot);
	lj_stage.enableMouseOver();	
	//Registers the "tick" event listener.
	function lj_fnStartAnimation() {
		createjs.Ticker.setFPS(lib_Lj.properties.fps);
		createjs.Ticker.addEventListener("tick", lj_stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function lj_makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', lj_resizeCanvas);		
		lj_resizeCanvas();		
		function lj_resizeCanvas() { 
			var w = lib_Lj.properties.width, h = lib_Lj.properties.height;			
			var iw = cavAP_.offsetWidth, ih=cavAP_.offsetHeight;	
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {               
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			lj_canvas_.width = w*pRatio*sRatio;
			lj_canvas_.height = h*pRatio*sRatio;
			lj_canvas_.style.width = lj_overlay_container_.style.width = lj_anim_container_.style.width =  w*sRatio+'px';				
			lj_canvas_.style.height = lj_anim_container_.style.height = lj_overlay_container_.style.height = h*sRatio+'px'; 
			lj_stage.scaleX = pRatio*sRatio;
			lj_stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
		}
	}
	lj_makeResponsive(true,'both',true,1);	
	lj_fnStartAnimation();
//	lj_stage
}