//var dl_canvas, dl_stage,  dl_anim_container, dl_overlay_container, dl_fnStartAnimation;
//function init_dL() {
//	dl_canvas = document.getElementById("dl_canvas");
//	dl_anim_container = document.getElementById("dl_animation_container");
//	dl_overlay_container = document.getElementById("dl_overlay_container");
//	dl_handleComplete(); 
//var cavAP=document.getElementById("dl_canvas_pC");
//}
import lib_Dl from '@/components/homepageHwzx/dataview_Dl'
export default function dl_handleComplete(dl_canvas_,dl_stage_,dl_anim_container_,dl_overlay_container_,cavAP) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	let dl_exportRoot = new lib_Dl.dataview()||{};
	dl_stage_ = new createjs.Stage(dl_canvas_);
	dl_stage_.addChild(dl_exportRoot);
	dl_stage_.enableMouseOver();	
	//Registers the "tick" event listener.
	function dl_fnStartAnimation(){
		createjs.Ticker.setFPS(lib_Dl.properties.fps);
		createjs.Ticker.addEventListener("tick", dl_stage_);
	}
	//Code to support hidpi screens and responsive scaling.
	function dl_makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', dl_resizeCanvas);		
		dl_resizeCanvas();
		function dl_resizeCanvas(){
			var w = lib_Dl.properties.width, h = lib_Dl.properties.height;			
//			var iw = window.innerWidth, ih=window.innerHeight;			
			var iw = cavAP.offsetWidth, ih=cavAP.offsetHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;
				}
				else if(!isScale){
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
			dl_canvas_.width = w*pRatio*sRatio;			
			dl_canvas_.height = h*pRatio*sRatio;
			dl_canvas_.style.width = dl_overlay_container_.style.width = dl_anim_container_.style.width =  w*sRatio+'px';				
			dl_canvas_.style.height = dl_anim_container_.style.height = dl_overlay_container_.style.height = h*sRatio+'px';
			dl_stage_.scaleX = pRatio*sRatio;			
			dl_stage_.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;	
		}
	}
	
	dl_makeResponsive(true,'both',true,1);	
	dl_fnStartAnimation();
	dl_stage_.update(); 
}