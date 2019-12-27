//function init_wc() {
//	var wc_canvas,  wc_anim_container, wc_dom_overlay_container,cavAP;
//	wc_canvas = document.getElementById("wc_canvas");
//	wc_anim_container = document.getElementById("wc_animation_container");
//	wc_dom_overlay_container = document.getElementById("wc_overlay_container");
//	cavAP=document.getElementById("wc_canvas_pC");
//	wc_handleComplete(wc_canvas,wc_anim_container,wc_dom_overlay_container,cavAP);
//	
//} 
import lib_wc from '@/components/homepageHwzx/dataviewWC' 
export default function wc_handleComplete(wc_canvas_,wc_anim_container_,wc_dom_overlay_container_,cavAP_){
 
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	 
	let wc_exportRoot = new lib_wc.dataviewWC();
//	wc_exportRoot.property.clickA=function(){alert("asd")}
	let wc_stage = new createjs.Stage(wc_canvas_);
	wc_stage.addChild(wc_exportRoot);
	wc_stage.enableMouseOver();	
	//Registers the "tick" event listener.
	function wc_fnStartAnimation() {
		
		createjs.Ticker.setFPS(lib_wc.properties.fps);
		createjs.Ticker.addEventListener("tick", wc_stage);
	}	    
	
	//Code to support hidpi screens and responsive scaling.
	function wc_makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', wc_resizeCanvas);		
		wc_resizeCanvas();		
		function wc_resizeCanvas() {		
			
			var w = lib_wc.properties.width, h = lib_wc.properties.height;			
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
			wc_canvas_.width = w*pRatio*sRatio;			
			wc_canvas_.height = h*pRatio*sRatio;
			
			wc_canvas_.style.width = wc_dom_overlay_container_.style.width = wc_anim_container_.style.width =  w*sRatio+'px';				
			wc_canvas_.style.height = wc_anim_container_.style.height = wc_dom_overlay_container_.style.height = h*sRatio+'px';
			wc_stage.scaleX = pRatio*sRatio;			
			wc_stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
			 
		}
	}
	wc_makeResponsive(true,'both',true,1);	
	wc_fnStartAnimation();
	 
}			 