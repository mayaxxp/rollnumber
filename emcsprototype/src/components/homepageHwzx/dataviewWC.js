let lib_wc = {};
(function (lib,cjs) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("ApZDGIAAmLIS0AAIAAGLg");
	this.shape.setTransform(39.8,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC33").s().p("AjoAuQAdgHAFgJIgtAAIAAgOIAxAAIAAgJIAcAAIAAAJIAwAAIAAgJIAcAAIAAAJIArAAIAAAOIgrAAIAAAYIgcAAIAAgYIgzAAQgEARgkAKIgXgLgACIA4IAAgfIgrAAIAAAZIgbAAIAAglIBGAAIAAgGIgxAAIAAgbIB+AAIAAAbIgxAAIAAAGIBHAAIAAAXQAAAEgCADQgCADgFACIgKACIgeAAIgGgNIAUAAQAJAAAAgGIAAgGIgtAAIAAAfgABvgDIBNAAIAAgHIhNAAgAi+AFQglAAAAgTIAAglICZAAIAAAiIh8AAIAAABQAAAIAPAAIBbAAQAIAAAFgBQAEgCACgDIADgMIAYAFQgEAMgCAEQgDAEgEABQgEADgHABIgQABgAjGgdIBgAAIAAgJIhgAAgADcgOIAAgNIiMAAIAAANIgZAAIAAgZIAkAAIgOgJIARgIIAYANIgJAEIAbAAIAAgQIAbAAIAAAQIAXAAIgGgDIAZgOIATAIIgRAJIAlAAIAAAZg");
	this.shape_1.setTransform(40.7,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,0,120.5,39.5);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,-0.7,0.1,0.7).s().p("AgtAIIAAgPIBbAAIAAAPg");
	this.shape.setTransform(4.6,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,9.3,1.5), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.8,19.8,1,1,0,0,0,39.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,170,30,0.608)","rgba(189,0,0,0.357)"],[0,1],-0.5,7.3,0,-0.5,7.3,60).s().p("ApaDGIAAmLIS1AAIAAGLg");
	this.shape.setTransform(39.8,19.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,0,120.5,39.5);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(39.8,19.8,1,1,0,0,0,39.8,19.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72));

	// 图层 2   复制 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF2300","rgba(50,0,0,0.518)"],[0,1],0.1,8.3,0.1,-8.2).s().p("AgQBSIAAikIAiAAIAACkg");
	this.shape.setTransform(77.6,8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF2300","rgba(73,10,0,0.573)","rgba(66,0,0,0.573)"],[0,0.89,1],0.1,9.5,0.1,-9.4).s().p("AgQBfIAAi9IAiAAIAAC9g");
	this.shape_1.setTransform(77.6,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF2300","rgba(96,20,0,0.624)","rgba(82,0,0,0.624)"],[0,0.776,1],0.1,10.7,0.1,-10.6).s().p("AgQBrIAAjVIAiAAIAADVg");
	this.shape_2.setTransform(77.6,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF2300","rgba(118,29,0,0.678)","rgba(98,0,0,0.678)"],[0,0.667,1],0.1,11.9,0.1,-11.9).s().p("AgQB3IAAjtIAiAAIAADtg");
	this.shape_3.setTransform(77.6,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF2300","rgba(141,39,0,0.733)","rgba(114,0,0,0.733)"],[0,0.557,1],0.1,13.2,0.1,-13.1).s().p("AgQCEIAAkHIAiAAIAAEHg");
	this.shape_4.setTransform(77.6,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF2300","rgba(164,49,0,0.784)","rgba(130,0,0,0.784)"],[0,0.443,1],0.1,14.4,0.1,-14.3).s().p("AgQCQIAAkfIAiAAIAAEfg");
	this.shape_5.setTransform(77.6,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF2300","rgba(187,59,0,0.839)","rgba(146,0,0,0.839)"],[0,0.333,1],0.1,15.6,0.1,-15.5).s().p("AgQCcIAAk3IAiAAIAAE3g");
	this.shape_6.setTransform(77.6,16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF2300","rgba(209,68,0,0.894)","rgba(162,0,0,0.894)"],[0,0.224,1],0.1,16.8,0.1,-16.8).s().p("AgQCoIAAlPIAiAAIAAFPg");
	this.shape_7.setTransform(77.6,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF2300","rgba(232,78,0,0.945)","rgba(178,0,0,0.945)"],[0,0.11,1],0.1,18,0.1,-18).s().p("AgQC0IAAlnIAiAAIAAFng");
	this.shape_8.setTransform(77.6,18.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF2300","#FF5800","#C20000"],[0,0,1],0.1,19.3,0.1,-19.2).s().p("AgQDAIAAl/IAiAAIAAF/g");
	this.shape_9.setTransform(77.6,20.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF2900","#FF5800","#C70700"],[0,0,1],0.1,17.7,0.1,-17.7).s().p("AgQCxIAAlhIAiAAIAAFhg");
	this.shape_10.setTransform(77.6,21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FF2E00","#FF5800","#CB0E00"],[0,0,1],0.1,16.2,0.1,-16.1).s().p("AgQCiIAAlCIAiAAIAAFCg");
	this.shape_11.setTransform(77.6,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FF3400","#FF5800","#D01500"],[0,0,1],0.1,14.6,0.1,-14.6).s().p("AgQCSIAAkjIAiAAIAAEjg");
	this.shape_12.setTransform(77.6,24.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FF3900","#FF5800","#D41C00"],[0,0,1],0.1,13.1,0.1,-13).s().p("AgQCCIAAkEIAiAAIAAEEg");
	this.shape_13.setTransform(77.6,26.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FF3F00","#FF5800","#D92300"],[0,0,1],0.1,11.5,0.1,-11.5).s().p("AgQBzIAAjlIAiAAIAADlg");
	this.shape_14.setTransform(77.6,27.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FF4500","#FF5800","#DE2A00"],[0,0,1],0.1,9.9,0.1,-10).s().p("AgQBjIAAjGIAiAAIAADGg");
	this.shape_15.setTransform(77.6,29.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FF4A00","#FF5800","#E23100"],[0,0,1],0.1,8.4,0.1,-8.4).s().p("AgQBUIAAinIAiAAIAACng");
	this.shape_16.setTransform(77.6,30.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FF5000","#FF5800","#E73800"],[0,0,1],0.1,6.8,0.1,-6.9).s().p("AgQBFIAAiJIAiAAIAACJg");
	this.shape_17.setTransform(77.6,32.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FF5500","#FF5800","#EB3F00"],[0,0,1],0.1,5.3,0.1,-5.3).s().p("AgQA1IAAhpIAiAAIAABpg");
	this.shape_18.setTransform(77.6,34);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,3.7,0.1,-3.8).s().p("AgQAlIAAhJIAiAAIAABJg");
	this.shape_19.setTransform(77.6,35.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,3.1,0.1,-3.2).s().p("AgQAiIAAhDIAiAAIAABDg");
	this.shape_20.setTransform(77.6,35.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,2.5,0.1,-2.6).s().p("AgQAeIAAg8IAiAAIAAA8g");
	this.shape_21.setTransform(77.6,36.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,2,0.1,-1.9).s().p("AgQAbIAAg1IAiAAIAAA1g");
	this.shape_22.setTransform(77.6,36.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,1.4,0.1,-1.3).s().p("AgQAYIAAgvIAiAAIAAAvg");
	this.shape_23.setTransform(77.6,36.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,0.8,0.1,-0.8).s().p("AgQAUIAAgnIAiAAIAAAng");
	this.shape_24.setTransform(77.6,37.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,0.2,0.1,-0.2).s().p("AgQARIAAghIAiAAIAAAhg");
	this.shape_25.setTransform(77.6,37.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,-0.4,0.1,0.4).s().p("AgQANIAAgaIAiAAIAAAag");
	this.shape_26.setTransform(77.6,37.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,-1,0.1,1).s().p("AgQAKIAAgTIAiAAIAAATg");
	this.shape_27.setTransform(77.6,38.3);

	this.instance_1 = new lib.元件5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.2,38.7,1,1,0,0,0,4.6,0.8);
	this.instance_1.filters = [new cjs.BlurFilter(7, 2, 1)];
	this.instance_1.cache(-2,-2,13,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},25).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.instance_1,p:{x:74.2}}]},3).to({state:[{t:this.instance_1,p:{x:74.4}}]},2).to({state:[]},1).wait(14));

	// 图层 2  复制 2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FF2300","rgba(50,0,0,0.518)"],[0,1],0.1,8.3,0.1,-8.2).s().p("AgRBSIAAikIAiAAIAACkg");
	this.shape_28.setTransform(69.4,8.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FF2300","rgba(63,6,0,0.549)","rgba(59,0,0,0.549)"],[0,0.937,1],0.1,9,0.1,-8.9).s().p("AgRBZIAAixIAiAAIAACxg");
	this.shape_29.setTransform(69.4,8.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FF2300","rgba(76,11,0,0.576)","rgba(68,0,0,0.576)"],[0,0.875,1],0.1,9.7,0.1,-9.6).s().p("AgRBgIAAi/IAiAAIAAC/g");
	this.shape_30.setTransform(69.4,9.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FF2300","rgba(88,17,0,0.608)","rgba(77,0,0,0.608)"],[0,0.812,1],0.1,10.3,0.1,-10.3).s().p("AgRBnIAAjNIAiAAIAADNg");
	this.shape_31.setTransform(69.4,10.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#FF2300","rgba(101,22,0,0.639)","rgba(86,0,0,0.639)"],[0,0.749,1],0.1,11,0.1,-11).s().p("AgRBuIAAjbIAiAAIAADbg");
	this.shape_32.setTransform(69.4,11);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FF2300","rgba(114,28,0,0.667)","rgba(95,0,0,0.667)"],[0,0.686,1],0.1,11.7,0.1,-11.7).s().p("AgRB1IAAjpIAiAAIAADpg");
	this.shape_33.setTransform(69.4,11.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#FF2300","rgba(127,33,0,0.698)","rgba(104,0,0,0.698)"],[0,0.624,1],0.1,12.4,0.1,-12.3).s().p("AgRB8IAAj3IAiAAIAAD3g");
	this.shape_34.setTransform(69.4,12.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FF2300","rgba(140,39,0,0.729)","rgba(113,0,0,0.729)"],[0,0.561,1],0.1,13.1,0.1,-13).s().p("AgRCDIAAkFIAiAAIAAEFg");
	this.shape_35.setTransform(69.4,13.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#FF2300","rgba(153,44,0,0.761)","rgba(122,0,0,0.761)"],[0,0.502,1],0.1,13.8,0.1,-13.7).s().p("AgRCKIAAkTIAiAAIAAETg");
	this.shape_36.setTransform(69.4,13.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FF2300","rgba(165,50,0,0.788)","rgba(131,0,0,0.788)"],[0,0.439,1],0.1,14.4,0.1,-14.4).s().p("AgRCRIAAkhIAiAAIAAEhg");
	this.shape_37.setTransform(69.4,14.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#FF2300","rgba(178,55,0,0.82)","rgba(140,0,0,0.82)"],[0,0.376,1],0.1,15.1,0.1,-15.1).s().p("AgRCXIAAktIAiAAIAAEtg");
	this.shape_38.setTransform(69.4,15.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#FF2300","rgba(191,61,0,0.851)","rgba(149,0,0,0.851)"],[0,0.314,1],0.1,15.8,0.1,-15.8).s().p("AgRCeIAAk7IAiAAIAAE7g");
	this.shape_39.setTransform(69.4,15.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#FF2300","rgba(204,66,0,0.878)","rgba(158,0,0,0.878)"],[0,0.251,1],0.1,16.5,0.1,-16.4).s().p("AgRClIAAlJIAiAAIAAFJg");
	this.shape_40.setTransform(69.4,16.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#FF2300","rgba(217,72,0,0.91)","rgba(167,0,0,0.91)"],[0,0.188,1],0.1,17.2,0.1,-17.1).s().p("AgRCsIAAlXIAiAAIAAFXg");
	this.shape_41.setTransform(69.4,17.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#FF2300","rgba(229,77,0,0.941)","rgba(176,0,0,0.941)"],[0,0.125,1],0.1,17.9,0.1,-17.8).s().p("AgRCzIAAllIAiAAIAAFlg");
	this.shape_42.setTransform(69.4,17.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#FF2300","rgba(242,83,0,0.969)","rgba(185,0,0,0.969)"],[0,0.063,1],0.1,18.6,0.1,-18.5).s().p("AgRC6IAAlzIAiAAIAAFzg");
	this.shape_43.setTransform(69.4,18.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#FF2300","#FF5800","#C20000"],[0,0,1],0.1,19.3,0.1,-19.2).s().p("AgQDAIAAmAIAhAAIAAGAg");
	this.shape_44.setTransform(69.4,19.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#FF2900","#FF5800","#C70700"],[0,0,1],0.1,17.7,0.1,-17.7).s().p("AgRCxIAAlhIAiAAIAAFhg");
	this.shape_45.setTransform(69.4,20.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#FF2E00","#FF5800","#CB0E00"],[0,0,1],0.1,16.2,0.1,-16.1).s().p("AgRChIAAlCIAiAAIAAFCg");
	this.shape_46.setTransform(69.4,22.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#FF3400","#FF5800","#D01500"],[0,0,1],0.1,14.6,0.1,-14.6).s().p("AgRCSIAAkjIAiAAIAAEjg");
	this.shape_47.setTransform(69.4,23.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#FF3900","#FF5800","#D41C00"],[0,0,1],0.1,13.1,0.1,-13).s().p("AgRCCIAAkEIAiAAIAAEEg");
	this.shape_48.setTransform(69.4,25.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#FF3F00","#FF5800","#D92300"],[0,0,1],0.1,11.5,0.1,-11.5).s().p("AgRBzIAAjlIAiAAIAADlg");
	this.shape_49.setTransform(69.4,27);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#FF4500","#FF5800","#DE2A00"],[0,0,1],0.1,9.9,0.1,-10).s().p("AgRBkIAAjGIAiAAIAADGg");
	this.shape_50.setTransform(69.4,28.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#FF4A00","#FF5800","#E23100"],[0,0,1],0.1,8.4,0.1,-8.4).s().p("AgRBUIAAinIAiAAIAACng");
	this.shape_51.setTransform(69.4,30.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#FF5000","#FF5800","#E73800"],[0,0,1],0.1,6.8,0.1,-6.9).s().p("AgRBFIAAiIIAiAAIAACIg");
	this.shape_52.setTransform(69.4,31.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#FF5500","#FF5800","#EB3F00"],[0,0,1],0.1,5.3,0.1,-5.3).s().p("AgRA1IAAhpIAiAAIAABpg");
	this.shape_53.setTransform(69.4,33.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,3.7,0.1,-3.8).s().p("AgRAmIAAhLIAiAAIAABLg");
	this.shape_54.setTransform(69.4,34.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,3.1,0.1,-3.2).s().p("AgRAiIAAhDIAiAAIAABDg");
	this.shape_55.setTransform(69.4,35.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,2.6,0.1,-2.5).s().p("AgRAfIAAg9IAiAAIAAA9g");
	this.shape_56.setTransform(69.4,35.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,1.9,0.1,-2).s().p("AgRAbIAAg1IAiAAIAAA1g");
	this.shape_57.setTransform(69.4,36.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,1.4,0.1,-1.4).s().p("AgRAYIAAgvIAiAAIAAAvg");
	this.shape_58.setTransform(69.4,36.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,0.8,0.1,-0.7).s().p("AgRAUIAAgnIAiAAIAAAng");
	this.shape_59.setTransform(69.4,36.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,0.2,0.1,-0.1).s().p("AgRARIAAghIAiAAIAAAhg");
	this.shape_60.setTransform(69.4,37.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,-0.4,0.1,0.4).s().p("AgRANIAAgZIAiAAIAAAZg");
	this.shape_61.setTransform(69.4,37.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,-1,0.1,1).s().p("AgRAKIAAgTIAiAAIAAATg");
	this.shape_62.setTransform(69.4,38.3);

	this.instance_2 = new lib.元件5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.2,38.7,1,1,0,0,0,4.6,0.8);
	this.instance_2.filters = [new cjs.BlurFilter(7, 2, 1)];
	this.instance_2.cache(-2,-2,13,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28}]},14).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.instance_2,p:{x:71.2}}]},3).to({state:[{t:this.instance_2,p:{x:72.4}}]},2).to({state:[]},1).wait(18));

	// 图层 2 复制
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#FF2300","rgba(50,0,0,0.518)"],[0,1],0.1,8.3,0.1,-8.2).s().p("AgQBSIAAikIAhAAIAACkg");
	this.shape_63.setTransform(19.4,8.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#FF2300","rgba(66,7,0,0.553)","rgba(61,0,0,0.553)"],[0,0.922,1],0.1,9.1,0.1,-9.1).s().p("AgQBbIAAi1IAhAAIAAC1g");
	this.shape_64.setTransform(19.4,9.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#FF2300","rgba(82,14,0,0.592)","rgba(72,0,0,0.592)"],[0,0.847,1],0.1,10,0.1,-9.9).s().p("AgQBjIAAjGIAhAAIAADGg");
	this.shape_65.setTransform(19.4,10);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#FF2300","rgba(97,20,0,0.627)","rgba(83,0,0,0.627)"],[0,0.769,1],0.1,10.8,0.1,-10.7).s().p("AgQBsIAAjXIAhAAIAADXg");
	this.shape_66.setTransform(19.4,10.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#FF2300","rgba(113,27,0,0.667)","rgba(94,0,0,0.667)"],[0,0.694,1],0.1,11.6,0.1,-11.6).s().p("AgQB0IAAjnIAhAAIAADng");
	this.shape_67.setTransform(19.4,11.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#FF2300","rgba(129,34,0,0.702)","rgba(105,0,0,0.702)"],[0,0.616,1],0.1,12.5,0.1,-12.4).s().p("AgQB9IAAj5IAhAAIAAD5g");
	this.shape_68.setTransform(19.4,12.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#FF2300","rgba(145,41,0,0.741)","rgba(116,0,0,0.741)"],[0,0.537,1],0.1,13.4,0.1,-13.3).s().p("AgQCFIAAkJIAhAAIAAEJg");
	this.shape_69.setTransform(19.4,13.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#FF2300","rgba(160,47,0,0.776)","rgba(128,0,0,0.776)"],[0,0.463,1],0.1,14.2,0.1,-14.1).s().p("AgQCOIAAkbIAhAAIAAEbg");
	this.shape_70.setTransform(19.4,14.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#FF2300","rgba(176,54,0,0.816)","rgba(139,0,0,0.816)"],[0,0.384,1],0.1,15,0.1,-15).s().p("AgQCWIAAkrIAhAAIAAErg");
	this.shape_71.setTransform(19.4,15);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#FF2300","rgba(192,61,0,0.851)","rgba(150,0,0,0.851)"],[0,0.306,1],0.1,15.9,0.1,-15.8).s().p("AgQCfIAAk9IAhAAIAAE9g");
	this.shape_72.setTransform(19.4,15.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#FF2300","rgba(208,68,0,0.89)","rgba(161,0,0,0.89)"],[0,0.231,1],0.1,16.7,0.1,-16.7).s().p("AgQCnIAAlNIAhAAIAAFNg");
	this.shape_73.setTransform(19.4,16.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#FF2300","rgba(223,74,0,0.925)","rgba(172,0,0,0.925)"],[0,0.153,1],0.1,17.6,0.1,-17.5).s().p("AgQCvIAAleIAhAAIAAFeg");
	this.shape_74.setTransform(19.4,17.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#FF2300","rgba(239,81,0,0.965)","rgba(183,0,0,0.965)"],[0,0.078,1],0.1,18.4,0.1,-18.4).s().p("AgQC4IAAlvIAhAAIAAFvg");
	this.shape_75.setTransform(19.4,18.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#FF2300","#FF5800","#C20000"],[0,0,1],0.1,19.3,0.1,-19.2).s().p("AgQDAIAAmAIAhAAIAAGAg");
	this.shape_76.setTransform(19.4,19.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#FF2900","#FF5800","#C70700"],[0,0,1],0.1,17.7,0.1,-17.7).s().p("AgQCxIAAlhIAhAAIAAFhg");
	this.shape_77.setTransform(19.4,20.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#FF2E00","#FF5800","#CB0E00"],[0,0,1],0.1,16.2,0.1,-16.1).s().p("AgQChIAAlCIAhAAIAAFCg");
	this.shape_78.setTransform(19.4,22.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#FF3400","#FF5800","#D01500"],[0,0,1],0.1,14.6,0.1,-14.6).s().p("AgQCSIAAkjIAhAAIAAEjg");
	this.shape_79.setTransform(19.4,23.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#FF3900","#FF5800","#D41C00"],[0,0,1],0.1,13.1,0.1,-13).s().p("AgQCCIAAkEIAhAAIAAEEg");
	this.shape_80.setTransform(19.4,25.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#FF3F00","#FF5800","#D92300"],[0,0,1],0.1,11.5,0.1,-11.5).s().p("AgQBzIAAjlIAhAAIAADlg");
	this.shape_81.setTransform(19.4,27);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#FF4500","#FF5800","#DE2A00"],[0,0,1],0.1,9.9,0.1,-10).s().p("AgQBkIAAjGIAhAAIAADGg");
	this.shape_82.setTransform(19.4,28.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#FF4A00","#FF5800","#E23100"],[0,0,1],0.1,8.4,0.1,-8.4).s().p("AgQBUIAAinIAhAAIAACng");
	this.shape_83.setTransform(19.4,30.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#FF5000","#FF5800","#E73800"],[0,0,1],0.1,6.8,0.1,-6.9).s().p("AgQBFIAAiIIAhAAIAACIg");
	this.shape_84.setTransform(19.4,31.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#FF5500","#FF5800","#EB3F00"],[0,0,1],0.1,5.3,0.1,-5.3).s().p("AgQA1IAAhpIAhAAIAABpg");
	this.shape_85.setTransform(19.4,33.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,3.7,0.1,-3.8).s().p("AgQAmIAAhLIAhAAIAABLg");
	this.shape_86.setTransform(19.4,34.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,3.1,0.1,-3.2).s().p("AgQAiIAAhDIAhAAIAABDg");
	this.shape_87.setTransform(19.4,35.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,2.6,0.1,-2.5).s().p("AgQAfIAAg9IAhAAIAAA9g");
	this.shape_88.setTransform(19.4,35.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,1.9,0.1,-2).s().p("AgQAbIAAg1IAhAAIAAA1g");
	this.shape_89.setTransform(19.4,36.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,1.4,0.1,-1.4).s().p("AgQAYIAAgvIAhAAIAAAvg");
	this.shape_90.setTransform(19.4,36.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,0.8,0.1,-0.7).s().p("AgQAUIAAgnIAhAAIAAAng");
	this.shape_91.setTransform(19.4,36.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,0.2,0.1,-0.1).s().p("AgQARIAAghIAhAAIAAAhg");
	this.shape_92.setTransform(19.4,37.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,-0.4,0.1,0.4).s().p("AgQANIAAgZIAhAAIAAAZg");
	this.shape_93.setTransform(19.4,37.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,-1,0.1,1).s().p("AgQAKIAAgTIAhAAIAAATg");
	this.shape_94.setTransform(19.4,38.3);

	this.instance_3 = new lib.元件5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21.2,38.7,1,1,0,0,0,4.6,0.8);
	this.instance_3.filters = [new cjs.BlurFilter(7, 2, 1)];
	this.instance_3.cache(-2,-2,13,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_63}]},24).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.instance_3,p:{x:21.2}}]},3).to({state:[{t:this.instance_3,p:{x:22.4}}]},2).to({state:[]},1).wait(11));

	// 图层 2
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#FF2300","rgba(50,0,0,0.518)"],[0,1],0.1,8.3,0.1,-8.2).s().p("AgQBSIAAikIAiAAIAACkg");
	this.shape_95.setTransform(4.4,8.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#FF2300","rgba(63,6,0,0.549)","rgba(59,0,0,0.549)"],[0,0.937,1],0.1,9,0.1,-8.9).s().p("AgQBZIAAixIAiAAIAACxg");
	this.shape_96.setTransform(4.4,8.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#FF2300","rgba(76,11,0,0.576)","rgba(68,0,0,0.576)"],[0,0.875,1],0.1,9.7,0.1,-9.6).s().p("AgQBgIAAi/IAiAAIAAC/g");
	this.shape_97.setTransform(4.4,9.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#FF2300","rgba(88,17,0,0.608)","rgba(77,0,0,0.608)"],[0,0.812,1],0.1,10.3,0.1,-10.3).s().p("AgQBnIAAjNIAiAAIAADNg");
	this.shape_98.setTransform(4.4,10.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#FF2300","rgba(101,22,0,0.639)","rgba(86,0,0,0.639)"],[0,0.749,1],0.1,11,0.1,-11).s().p("AgQBuIAAjbIAiAAIAADbg");
	this.shape_99.setTransform(4.4,11);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#FF2300","rgba(114,28,0,0.667)","rgba(95,0,0,0.667)"],[0,0.686,1],0.1,11.7,0.1,-11.7).s().p("AgQB1IAAjpIAiAAIAADpg");
	this.shape_100.setTransform(4.4,11.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#FF2300","rgba(127,33,0,0.698)","rgba(104,0,0,0.698)"],[0,0.624,1],0.1,12.4,0.1,-12.3).s().p("AgQB8IAAj3IAiAAIAAD3g");
	this.shape_101.setTransform(4.4,12.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#FF2300","rgba(140,39,0,0.729)","rgba(113,0,0,0.729)"],[0,0.561,1],0.1,13.1,0.1,-13).s().p("AgQCDIAAkFIAiAAIAAEFg");
	this.shape_102.setTransform(4.4,13.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#FF2300","rgba(153,44,0,0.761)","rgba(122,0,0,0.761)"],[0,0.502,1],0.1,13.8,0.1,-13.7).s().p("AgQCKIAAkTIAiAAIAAETg");
	this.shape_103.setTransform(4.4,13.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#FF2300","rgba(165,50,0,0.788)","rgba(131,0,0,0.788)"],[0,0.439,1],0.1,14.4,0.1,-14.4).s().p("AgQCRIAAkhIAiAAIAAEhg");
	this.shape_104.setTransform(4.4,14.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#FF2300","rgba(178,55,0,0.82)","rgba(140,0,0,0.82)"],[0,0.376,1],0.1,15.1,0.1,-15.1).s().p("AgQCXIAAktIAiAAIAAEtg");
	this.shape_105.setTransform(4.4,15.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#FF2300","rgba(191,61,0,0.851)","rgba(149,0,0,0.851)"],[0,0.314,1],0.1,15.8,0.1,-15.8).s().p("AgQCeIAAk7IAiAAIAAE7g");
	this.shape_106.setTransform(4.4,15.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#FF2300","rgba(204,66,0,0.878)","rgba(158,0,0,0.878)"],[0,0.251,1],0.1,16.5,0.1,-16.4).s().p("AgQClIAAlJIAiAAIAAFJg");
	this.shape_107.setTransform(4.4,16.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#FF2300","rgba(217,72,0,0.91)","rgba(167,0,0,0.91)"],[0,0.188,1],0.1,17.2,0.1,-17.1).s().p("AgQCsIAAlXIAiAAIAAFXg");
	this.shape_108.setTransform(4.4,17.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#FF2300","rgba(229,77,0,0.941)","rgba(176,0,0,0.941)"],[0,0.125,1],0.1,17.9,0.1,-17.8).s().p("AgQCzIAAllIAiAAIAAFlg");
	this.shape_109.setTransform(4.4,17.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#FF2300","rgba(242,83,0,0.969)","rgba(185,0,0,0.969)"],[0,0.063,1],0.1,18.6,0.1,-18.5).s().p("AgQC6IAAlzIAiAAIAAFzg");
	this.shape_110.setTransform(4.4,18.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#FF2300","#FF5800","#C20000"],[0,0,1],0.1,19.3,0.1,-19.2).s().p("AgQDAIAAmAIAiAAIAAGAg");
	this.shape_111.setTransform(4.4,19.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#FF2900","#FF5800","#C70700"],[0,0,1],0.1,17.7,0.1,-17.7).s().p("AgQCxIAAlhIAiAAIAAFhg");
	this.shape_112.setTransform(4.4,20.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#FF2E00","#FF5800","#CB0E00"],[0,0,1],0.1,16.2,0.1,-16.1).s().p("AgQChIAAlCIAiAAIAAFCg");
	this.shape_113.setTransform(4.4,22.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#FF3400","#FF5800","#D01500"],[0,0,1],0.1,14.6,0.1,-14.6).s().p("AgQCSIAAkjIAiAAIAAEjg");
	this.shape_114.setTransform(4.4,23.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#FF3900","#FF5800","#D41C00"],[0,0,1],0.1,13.1,0.1,-13).s().p("AgQCCIAAkEIAiAAIAAEEg");
	this.shape_115.setTransform(4.4,25.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#FF3F00","#FF5800","#D92300"],[0,0,1],0.1,11.5,0.1,-11.5).s().p("AgQBzIAAjlIAiAAIAADlg");
	this.shape_116.setTransform(4.4,27);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#FF4500","#FF5800","#DE2A00"],[0,0,1],0.1,9.9,0.1,-10).s().p("AgQBkIAAjGIAiAAIAADGg");
	this.shape_117.setTransform(4.4,28.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#FF4A00","#FF5800","#E23100"],[0,0,1],0.1,8.4,0.1,-8.4).s().p("AgQBUIAAinIAiAAIAACng");
	this.shape_118.setTransform(4.4,30.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#FF5000","#FF5800","#E73800"],[0,0,1],0.1,6.8,0.1,-6.9).s().p("AgQBFIAAiIIAiAAIAACIg");
	this.shape_119.setTransform(4.4,31.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#FF5500","#FF5800","#EB3F00"],[0,0,1],0.1,5.3,0.1,-5.3).s().p("AgQA1IAAhpIAiAAIAABpg");
	this.shape_120.setTransform(4.4,33.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,3.7,0.1,-3.8).s().p("AgQAmIAAhLIAiAAIAABLg");
	this.shape_121.setTransform(4.4,34.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,3.1,0.1,-3.2).s().p("AgQAiIAAhDIAiAAIAABDg");
	this.shape_122.setTransform(4.4,35.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,2.6,0.1,-2.5).s().p("AgQAfIAAg9IAiAAIAAA9g");
	this.shape_123.setTransform(4.4,35.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,1.9,0.1,-2).s().p("AgQAbIAAg1IAiAAIAAA1g");
	this.shape_124.setTransform(4.4,36.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,1.4,0.1,-1.4).s().p("AgQAYIAAgvIAiAAIAAAvg");
	this.shape_125.setTransform(4.4,36.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,0.8,0.1,-0.7).s().p("AgQAUIAAgnIAiAAIAAAng");
	this.shape_126.setTransform(4.4,36.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,0.2,0.1,-0.1).s().p("AgQARIAAghIAiAAIAAAhg");
	this.shape_127.setTransform(4.4,37.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,-0.4,0.1,0.4).s().p("AgQANIAAgZIAiAAIAAAZg");
	this.shape_128.setTransform(4.4,37.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#FF5B00","#FF5800","#F04600"],[0,0,1],0.1,-1,0.1,1).s().p("AgQAKIAAgTIAiAAIAAATg");
	this.shape_129.setTransform(4.4,38.3);

	this.instance_4 = new lib.元件5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.2,38.7,1,1,0,0,0,4.6,0.8);
	this.instance_4.filters = [new cjs.BlurFilter(7, 2, 1)];
	this.instance_4.cache(-2,-2,13,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_95}]},9).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.instance_4,p:{x:6.2}}]},3).to({state:[{t:this.instance_4,p:{x:7.4}}]},2).to({state:[]},1).wait(23));

	// 图层 1
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.6,40,-2.6,2.6).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_130.setTransform(40.7,19.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.5,39.2,-2.5,1.8).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_131.setTransform(40.7,19.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.4,38.5,-2.4,1).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_132.setTransform(40.7,19.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.3,37.7,-2.3,0.2).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_133.setTransform(40.7,19.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.2,36.9,-2.2,-0.6).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_134.setTransform(40.7,19.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.1,36.1,-2.1,-1.3).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_135.setTransform(40.7,19.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2,35.3,-2,-2.1).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_136.setTransform(40.7,19.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.9,34.5,-1.9,-2.9).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_137.setTransform(40.7,19.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.8,33.8,-1.8,-3.7).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_138.setTransform(40.7,19.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.7,33,-1.7,-4.5).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_139.setTransform(40.7,19.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.6,32.2,-1.6,-5.3).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_140.setTransform(40.7,19.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.5,31.4,-1.5,-6).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_141.setTransform(40.7,19.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.5,30.6,-1.5,-6.8).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_142.setTransform(40.7,19.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.4,29.9,-1.4,-7.6).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_143.setTransform(40.7,19.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.3,29.1,-1.3,-8.4).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_144.setTransform(40.7,19.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.2,28.3,-1.2,-9.2).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_145.setTransform(40.7,19.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.1,27.5,-1.1,-9.9).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_146.setTransform(40.7,19.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1,26.7,-1,-10.7).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_147.setTransform(40.7,19.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.9,25.9,-0.9,-11.5).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_148.setTransform(40.7,19.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.8,25.2,-0.8,-12.3).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_149.setTransform(40.7,19.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.7,24.4,-0.7,-13.1).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_150.setTransform(40.7,19.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.6,23.6,-0.6,-13.9).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_151.setTransform(40.7,19.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.5,22.8,-0.5,-14.6).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_152.setTransform(40.7,19.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.4,22,-0.4,-15.4).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_153.setTransform(40.7,19.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.3,21.5,-0.3,-15.9).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_154.setTransform(40.7,19.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.3,21,-0.3,-16.4).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_155.setTransform(40.7,19.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.2,20.6,-0.2,-16.8).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_156.setTransform(40.7,19.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.2,20.2,-0.2,-17.2).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_157.setTransform(40.7,19.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.1,19.9,-0.1,-17.6).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_158.setTransform(40.7,19.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.1,19.6,-0.1,-17.9).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_159.setTransform(40.7,19.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.1,19.3,-0.1,-18.1).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_160.setTransform(40.7,19.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.1,19.1,-0.1,-18.3).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_161.setTransform(40.7,19.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],0,19,0,-18.5).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_162.setTransform(40.7,19.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],0,18.9,0,-18.6).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_163.setTransform(40.7,19.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],0,18.8,0,-18.7).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_164.setTransform(40.7,19.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.1,19.3,-0.1,-18.2).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_165.setTransform(40.7,19.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.1,19.8,-0.1,-17.7).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_166.setTransform(40.7,19.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.2,20.2,-0.2,-17.3).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_167.setTransform(40.7,19.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.2,20.6,-0.2,-16.9).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_168.setTransform(40.7,19.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.3,20.9,-0.3,-16.5).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_169.setTransform(40.7,19.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.3,21.2,-0.3,-16.2).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_170.setTransform(40.7,19.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.3,21.5,-0.3,-16).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_171.setTransform(40.7,19.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.3,21.7,-0.3,-15.8).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_172.setTransform(40.7,19.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.4,21.8,-0.4,-15.6).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_173.setTransform(40.7,19.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.4,21.9,-0.4,-15.5).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_174.setTransform(40.7,19.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.6,23.5,-0.6,-14).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_175.setTransform(40.7,19.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.7,24.9,-0.7,-12.6).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_176.setTransform(40.7,19.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-0.9,26.2,-0.9,-11.2).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_177.setTransform(40.7,19.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.2,28.7,-1.2,-8.7).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_178.setTransform(40.7,19.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.4,29.9,-1.4,-7.5).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_179.setTransform(40.7,19.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.5,31,-1.5,-6.5).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_180.setTransform(40.7,19.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.6,32,-1.6,-5.4).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_181.setTransform(40.7,19.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-1.9,33.9,-1.9,-3.5).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_182.setTransform(40.7,19.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2,34.7,-2,-2.7).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_183.setTransform(40.7,19.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.1,35.5,-2.1,-1.9).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_184.setTransform(40.7,19.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.2,36.2,-2.2,-1.2).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_185.setTransform(40.7,19.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.3,37.5,-2.3,0).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_186.setTransform(40.7,19.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.4,38,-2.4,0.6).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_187.setTransform(40.7,19.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.5,38.9,-2.5,1.5).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_188.setTransform(40.7,19.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.6,39.5,-2.6,2.1).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_189.setTransform(40.7,19.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.6,39.7,-2.6,2.3).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_190.setTransform(40.7,19.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.6,39.9,-2.6,2.5).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_191.setTransform(40.7,19.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#FF0033","rgba(50,0,0,0.518)"],[0,1],-2.6,40,-2.6,2.5).s().p("ApXDGIAAmLISvAAIAAGLg");
	this.shape_192.setTransform(40.7,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130}]}).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_130}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,0,121.2,40.6);


// stage content:
(lib.dataviewWC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 单击以转到 Web 页
		单击指定的元件实例会在新浏览器窗口中加载 URL。
		
		说明:
		1. 用所需 URL 地址替换 http://www.adobe.com。
		   保留引号 ("")。
		*/
		this.wcClickA.addEventListener("click", fl_ClickToGoToWC_2);
		
		function fl_ClickToGoToWC_2() {
			clickWCa();
		}
		/* 单击以转到 Web 页
		单击指定的元件实例会在新浏览器窗口中加载 URL。
		
		说明:
		1. 用所需 URL 地址替换 http://www.adobe.com。
		   保留引号 ("")。
		*/
		
		this.wcClickB.addEventListener("click", fl_ClickToGoToWC_3);
		
		function fl_ClickToGoToWC_3() {
			clickWCb();
		}
		
		/* 单击以转到 Web 页
		单击指定的元件实例会在新浏览器窗口中加载 URL。
		
		说明:
		1. 用所需 URL 地址替换 http://www.adobe.com。
		   保留引号 ("")。
		*/
		
		this.wcClickC.addEventListener("click", fl_ClickToGoToWC_4);
		
		function fl_ClickToGoToWC_4() {
			clickWCc();
		}
		this.wcClickD.addEventListener("click", fl_ClickToGoToWC_5);
		
		function fl_ClickToGoToWC_5() {
			clickWCd();
		}
	}
	this.frame_50 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
		
		
		/* 单击以转到帧并播放
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并继续从该帧回放。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
//		this.kaishiAnniu.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
//		
//		function fl_ClickToGoToAndPlayFromFrame_2()
//		{
//			this.gotoAndPlay(0);
//		}
		
		/* 文本输入控件的文本更改事件
		对 TextInput 控件文本的任何更改都会执行此函数，您可在函数中添加自己的自定义代码。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		*/
//		if(!this.renyuanmingcheng_change_cbk) {
//			function renyuanmingcheng_change(evt) {
//				// 开始您的自定义代码
//				console.log(evt.target.value);
//				// 结束您的自定义代码
//			}
//			dataChange_Hander(callback){
//				callback()
//			}
//			
//			$("#dom_overlay_container").on("change", "#renyuanmingcheng", renyuanmingcheng_change.bind(this));
//			this.renyuanmingcheng_change_cbk = true;
//		}
		
		/* 设置任一 UI 控件的值
		使用此代码片段可设置任一控件的值。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		*/
		
		
		
		/* 设置任一 UI 控件的值
		使用此代码片段可设置任一控件的值。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		*/
		
		// 开始您的自定义代码
//		$("#movieClip_2").val('value_to_be_set');
		// 结束您的自定义代码
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50).call(this.frame_50).wait(1));

	// 元件 9
	this.wcClickC = new lib.元件4();
	this.wcClickC.parent = this;
	this.wcClickC.setTransform(314.1,59.4,0.342,0.518,0,0,0,39.9,19.8);
	this.wcClickC.visible = false;

	this.wcClickD = new lib.元件4();
	this.wcClickD.parent = this;
	this.wcClickD.setTransform(327.7,105,0.342,0.518,0,0,0,39.9,19.8);
	this.wcClickD.visible = false;

	this.wcClickB = new lib.元件4();
	this.wcClickB.parent = this;
	this.wcClickB.setTransform(127.8,105,0.342,0.518,0,0,0,39.9,19.8);
	this.wcClickB.visible = false;

	this.wcClickA = new lib.元件4();
	this.wcClickA.parent = this;
	this.wcClickA.setTransform(127.8,41.3,0.342,0.518,0,0,0,39.9,19.8);
	this.wcClickA.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wcClickA,p:{x:127.8,visible:false}},{t:this.wcClickB,p:{x:127.8,visible:false}},{t:this.wcClickD,p:{x:327.7,visible:false}},{t:this.wcClickC,p:{x:314.1,visible:false}}]}).to({state:[{t:this.wcClickA,p:{x:103.8,visible:true}},{t:this.wcClickB,p:{x:103.8,visible:true}},{t:this.wcClickD,p:{x:311.7,visible:true}},{t:this.wcClickC,p:{x:306.1,visible:true}}]},41).to({state:[{t:this.wcClickA,p:{x:127.8,visible:false}},{t:this.wcClickB,p:{x:127.8,visible:false}},{t:this.wcClickD,p:{x:327.7,visible:false}},{t:this.wcClickC,p:{x:314.1,visible:false}}]},2).to({state:[{t:this.wcClickA,p:{x:127.8,visible:true}},{t:this.wcClickB,p:{x:127.8,visible:true}},{t:this.wcClickD,p:{x:322.9,visible:true}},{t:this.wcClickC,p:{x:322.9,visible:true}}]},1).wait(7));

	// 平均作业时长
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44FFFF").s().p("AAKAbQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgKABIgCgKIAHABQAAAAABAAQAAgBABAAQAAAAAAgBQAAgBAAAAIAAgSQgGAOgOAJIgFgIIAAAUIgJAAIAAg7IAJAAIAAAmQAMgGAIgLIgQAAIAAgIIAVAAIAAgIIAJAAIAAAIIAIAAIAAAIIgIAAIAAAYIgBAEIAHAAQAFAAAAgEIAAgrIgbAAIAAgIIAkAAIAAA0QAAAGgCADQgCADgEAAIgMABIgCgIgAgXgfIAJgDIAHAMIgKADIgGgMg");
	this.shape.setTransform(104.2,47.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#44FFFF").s().p("AgiAaQAWgHAGgNIgbAAIAAgIIAdAAIAAgJIgaAAIAAgJIAQAAIgHgJIAIgFIAKALIgFADIALAAIAKgOIAKAFIgIAJIAQAAIAAAJIgaAAIAAAJIAeAAIAAAIIgcAAQAHAOAVAEIgHAKQgUgFgIgPQgGANgUAIIgIgJg");
	this.shape_1.setTransform(97,47.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#44FFFF").s().p("AgJAbQAYgDAPgMIAFAGQgPANgZAEIgEgIgAgcAjIAAggIgEAIIgCgNQAHgNAEgTIAJABIgFASIAAAygAgPAYIAAgvIAHAAIAAAGQAIgJADgIIALAAIgEAGIAXAAIAAAHQgEAGgGAFIAMACIgDAIIgNgCIAFADQgJAFgQAFIgEgGQAPgEAJgEIgFgCQgIAEgKACIgEgGIAAAdgAgIgHIANgDIgFgFIgCADIgGgFgAAOgOIAJgGIgSAAQAEAEAFACgAgFAQQATgGALgHIAFAGQgLAIgUAGIgEgHg");
	this.shape_2.setTransform(89.7,47.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#44FFFF").s().p("AgGAjIAAgjIgEAFIgEgJQAKgNADgRIAJADIgEAKIALAAIgFgKIAGgDIAHAKIgFADIAQAAIAAAIIgMAAIAAAHIALAAIAAAHIgLAAIAAAHIALAAIAAAHIgLAAIAAAIIANAAIAAAHIghAAIAAAFgAACAXIAKAAIAAgIIgKAAgAACAIIAKAAIAAgHIgKAAgAACgGIAKAAIAAgHIgKAAgAgiAVIAZgEIgBAKIgWAEgAggAGIAIgKIgIAAIgCgIQADgEAIgSIAJADIgKATIADgBIAFgJIAIADIgNAYIAKgBIgBAIIgSACg");
	this.shape_3.setTransform(82.5,47.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#44FFFF").s().p("AgEAjIAAgWIgQAAIAAAEIgLAAIAAgnIAbAAIAAgMIAJAAIAAAMIAbAAIAAAnIgLAAIAAgEIgQAAIAAAWgAAFADIAQAAIAAgPIgQAAgAgUADIAQAAIAAgPIgQAAg");
	this.shape_4.setTransform(63.4,47.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#44FFFF").s().p("AgDAaQAHgEAGgGQgFgIgBgJIgDADIgDgGIgBATIgBALIgCAFQgCACgDAAIgJAAIgDgJIAHAAQAEAAAAgFIAAgRIgHAAQAAAMgEAKIgGALIgFgKQADgFACgHQABgGAAgHIABgNIgGAAIAAgJIANAAIgEgJIAJgDIAFAKIgDACIANAAIAAAJIgSAAIAAAIIAPAAQAHgMADgRIAKADIgCAIIAUAAIAAAKIgEAAQgCARgHAMQAFAGAIADIgGAJQgHgDgGgHQgGAHgJAEIgEgJgAAKgMQABAMAFAIQAEgIACgNIgLAAIgBABgAgXAYQAEgKAAgMIAHAAIAAARQAAAFgEAAIgHAAgAgXAYIAAAAg");
	this.shape_5.setTransform(56.2,47.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#44FFFF").s().p("AgiAaQAGgEAFgEQAEgFABgKIgQAAIAAgIIAQAAIAAgSIgMAAIAAgJIA+AAIAAAJIgLAAIAAASIAOAAIAAAIIgOAAIAAAdIgKAAIAAgdIgTAAQgBANgDAGQgEAHgJAEIgJgHgAgIgFIATAAIAAgSIgTAAg");
	this.shape_6.setTransform(49,47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},40).wait(11));

	// 动员人数
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#44FFFF").s().p("AgVAaQAPgHgBgOIAAgOIAHAAIAAAOIAAAIIANAOIgGAGIgKgMQgEAIgIAFIgGgIgAgiAbQAFgKAAgVIAAgdIBAAAIAAAIIg3AAIAAAWQAAAagHALIgHgHgAAOAZIAHAAQABAAABAAQAAAAABgBQAAAAABgBQAAgBAAAAIAAgsIAIAAIAAAuQAAAIgIABIgJABIgCgJgAANATIAAgkIAIAAIAAAkgAACAQIAAgcIgLAAIAAAcIgIAAIAAgkIAbAAIAAAkg");
	this.shape_7.setTransform(29.8,47.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#44FFFF").s().p("AATAdIgkABIgIABIgEgJQAFgDAIgMQAIgKAEgIIAKAFQgLARgIAJIAagBIgJgNIAIgFQALANAJAOIgJAGIgEgFgAgigGQANgMAGgPIALAEQgIASgPAMIgHgHgAAFgeIAKgDQAHAPANALIgIAIQgMgLgKgUg");
	this.shape_8.setTransform(22.7,47.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#44FFFF").s().p("AgCAcQAFgHAAgTIgFAAIAAAUQAAAEgCACQgBADgDAAIgJABIgCgKIAEABQAEAAAAgFIAAgQIgHAAQgBAVgHALIgJgGQAHgJABgRIgHAAIAAgJIAHAAIAAgaIAZAAIAAAaIAFAAIAAgaIAaAAIAAAaIAGAAIAAAJIgGAAIAAAVQAAAEgCACQgCADgCAAIgKAAIgDgJIAHAAQADAAAAgEIAAgRIgIAAQAAAWgHAKIgHgGgAAMgHIAIAAIAAgRIgIAAgAgSgHIAHAAIAAgRIgHAAg");
	this.shape_9.setTransform(15.4,47.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#44FFFF").s().p("AgYAjIAAgZIgGAFIgEgLQALgJAHgMIgQAAIAAgJIAUAAIADgIIAJABIgBAHIAkAAIAAAJIgoAAQgEAJgGAIIAAAjgAgMAgIAAgJIASAAIAAgQIgOAAIAAgJIAOAAIAAgMIAKAAIAAAMIAQAAIAAAJIgQAAIAAAQIATAAIAAAJg");
	this.shape_10.setTransform(8.1,47.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},42).wait(9));

	// 动员人数
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#44FFFF").s().p("AgDAjIAAgNIgfAAIAAgJIAfAAIAAgDIAIAAIAAADIAeAAIAAAJIgeAAIAAANgAAKAHIgXACIgDgHIAMgHIgIAAIgEgGQAEgCAFgGIgaAAIAAgJIAdAAIgCgGIALAAIABAGIAcAAIAAAJIgfAAIgGAHIAFAAIAHgHIAHAEIgSAQIAIAAIgDgCIAHgEIAJAMIgHAEgAghABIAQgIIAEAGIgQALgAAPgBIADgFIgDgEIALgJIAGAGIgKAHIAMAHIgFAIIgOgKgAgfgNIAFgGIAJAIIgFAGIgJgIg");
	this.shape_11.setTransform(294.4,110.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#44FFFF").s().p("AAZAjIAAgEIgYAAIAAAEIgIAAIAAg4IAPAAIAAgNIAKAAIAAANIAQAAIAAA4gAASAXIAHAAIAAgPIgHAAgAABAXIAHAAIAAgPIgHAAgAASAAIAHAAIAAgMIgHAAgAABAAIAHAAIAAgMIgHAAgAggAZIAFAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgOIgHABIgBgKIAIAAIAAgNIgHAAIAAgIIAHAAIAAgNIAKAAIAAANIAGAAIAAAIIgGAAIAAALIAGgBIAAAJIgGABIAAASQAAAGgDACQgDABgJAAIgCgJg");
	this.shape_12.setTransform(287,110.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#44FFFF").s().p("AghAgIAHgbIAJADIgGAbIgKgDgAAJAiIgCgHIALAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAgBIgYAAIAAALIgJAAIAAgjIArAAIAAAaQAAAEgCADQgCACgEAAIgOAAgAgDARIAYAAIAAgDIgYAAgAgDAIIAYAAIAAgDIgYAAgAgigIIAGgGIALAJIgHAGIgKgJgAgQgEIAAgGIATAAIAAgDIgQAAIAAgGIAQAAIAAgDIgRAAIAAgGIARAAIAAgGIALAAIAAAGIATAAIAAAGIgTAAIAAADIASAAIAAAGIgSAAIAAADIAVAAIAAAGgAgggbIAGgGIALAIIgGAIIgLgKg");
	this.shape_13.setTransform(279.9,110.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#44FFFF").s().p("AAZAjIAAgEIgYAAIAAAEIgIAAIAAg4IAPAAIAAgNIAKAAIAAANIAQAAIAAA4gAASAXIAHAAIAAgPIgHAAgAABAXIAHAAIAAgPIgHAAgAASAAIAHAAIAAgMIgHAAgAABAAIAHAAIAAgMIgHAAgAggAZIAFAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgOIgHABIgBgKIAIAAIAAgNIgHAAIAAgIIAHAAIAAgNIAKAAIAAANIAGAAIAAAIIgGAAIAAALIAGgBIAAAJIgGABIAAASQAAAGgDACQgDABgJAAIgCgJg");
	this.shape_14.setTransform(261.4,110.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#44FFFF").s().p("AghAgIAHgbIAJADIgGAbIgKgDgAAJAiIgCgHIALAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAgBIgYAAIAAALIgJAAIAAgjIArAAIAAAaQAAAEgCADQgCACgEAAIgOAAgAgDARIAYAAIAAgDIgYAAgAgDAIIAYAAIAAgDIgYAAgAgigIIAGgGIALAJIgHAGIgKgJgAgQgEIAAgGIATAAIAAgDIgQAAIAAgGIAQAAIAAgDIgRAAIAAgGIARAAIAAgGIALAAIAAAGIATAAIAAAGIgTAAIAAADIASAAIAAAGIgSAAIAAADIAVAAIAAAGgAgggbIAGgGIALAIIgGAIIgLgKg");
	this.shape_15.setTransform(254.3,110.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#44FFFF").s().p("AgPAgQgPAAAAgQIAAgeIAKAAIAAAHIAiAAIAAgPIguAAIAAgJIA4AAIAAAhIgsAAIAAANQAAAHAHAAIAaAAIAFgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIACgMIALAEIgDANQgBAEgEACQgEADgGAAg");
	this.shape_16.setTransform(247.3,110.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#44FFFF").s().p("AgVAbQAPgIgBgPIAAgMIAHAAIAAAMIAAAJIANAPIgGAFIgKgMQgEAHgIAGIgGgHgAgiAbQAFgJAAgXIAAgcIBAAAIAAAIIg3AAIAAAWQAAAZgHAMIgHgHgAAOAZIAHAAQABAAABAAQAAAAABgBQAAAAABgBQAAgBAAgBIAAgsIAIAAIAAAvQAAAJgIAAIgJABIgCgJgAANATIAAgjIAIAAIAAAjgAACAQIAAgdIgLAAIAAAdIgIAAIAAgkIAbAAIAAAkg");
	this.shape_17.setTransform(230.6,110.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#44FFFF").s().p("AATAdIgkABIgIACIgEgKQAFgDAIgMQAIgKAEgIIAKAFQgLARgIAJIAagBIgJgNIAIgFQALANAJAOIgJAGIgEgFgAgigGQANgMAHgPIAKAEQgJASgOAMIgHgHgAAFgeIAKgDQAHAPANALIgIAHQgMgKgKgUg");
	this.shape_18.setTransform(223.5,110.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#44FFFF").s().p("AAZAjIAAgEIgYAAIAAAEIgIAAIAAg4IAPAAIAAgNIAKAAIAAANIAQAAIAAA4gAASAXIAHAAIAAgPIgHAAgAABAXIAHAAIAAgPIgHAAgAASAAIAHAAIAAgMIgHAAgAABAAIAHAAIAAgMIgHAAgAggAZIAFAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgOIgHABIgBgKIAIAAIAAgNIgHAAIAAgIIAHAAIAAgNIAKAAIAAANIAGAAIAAAIIgGAAIAAALIAGgBIAAAJIgGABIAAASQAAAGgDACQgDABgJAAIgCgJg");
	this.shape_19.setTransform(216,110.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#44FFFF").s().p("AghAgIAHgbIAJADIgGAbIgKgDgAAJAiIgCgHIALAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAgBIgYAAIAAALIgJAAIAAgjIArAAIAAAaQAAAEgCADQgCACgEAAIgOAAgAgDARIAYAAIAAgDIgYAAgAgDAIIAYAAIAAgDIgYAAgAgigIIAGgGIALAJIgHAGIgKgJgAgQgEIAAgGIATAAIAAgDIgQAAIAAgGIAQAAIAAgDIgRAAIAAgGIARAAIAAgGIALAAIAAAGIATAAIAAAGIgTAAIAAADIASAAIAAAGIgSAAIAAADIAVAAIAAAGgAgggbIAGgGIALAIIgGAIIgLgKg");
	this.shape_20.setTransform(208.9,110.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#44FFFF").s().p("AAOAiIgBgJIAFABQAAAAABAAQAAgBABAAQAAAAAAgBQAAgBAAAAIAAgGIgHAAIAAAIIAAAHIgJAAIAAgPIgHAAIAAAPIgIAAIAAgPIgIAAIAAAQIgJAAIAAgWIAVAAIABgEIgbAAIAAgHIBDAAIAAAHIghAAIgBAEIAdAAIAAAPQAAAIgIAAgAANAZIAAgIIAHAAIAAAGQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAIgFgBgAANAZIAAAAgAgDgBIAAgPIgVAAIAAAIIgIAAIAAgPIAdAAIAAgDIgaAAIAAgHIA7AAIAAAHIgaAAIAAADIAdAAIAAAPIgIAAIAAgIIgVAAIAAAPgAAIgCIAAgEIASAAIAAAEgAgZgCIAAgEIATAAIAAAEgAAIgJIAAgFIAPAAIAAAFgAgWgJIAAgFIAQAAIAAAFg");
	this.shape_21.setTransform(201.7,110.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},39).wait(12));

	// 出动吸粪车辆
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#44FFFF").s().p("AgIAjIAAgxIALAAIAAgJIgLAAIAAgIIArAAIAAAIIgMAAIAAAJIAKAAIAAApQAAAHgGABIgIAAIgBgJIAFABQAAAAABgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAgGIgCABIgEgIQgCAJgEAGIgGgIQAGgKABgOIgFAAIgBAGIAEAEIgDAIIgCgDIgGANIgCgFIAAASgAgBAMQADgHABgLIgEAAgAAWACIAEAHIAAgPIgDAAIgBAIgAAKgOIAGAAIAAgJIgGAAgAgWAjIAAgNIgLACIgBgJIAMgBIAAgHIgLAAIAAgIIADgQIgEAAIAAgIIAGAAIABgJIAIAAIgBAJIAKAAIAAAIIgMAAIgEARIAEAAIAAgNIAIAAIAAANIAEAAIAAAHIgEAAIAAAGIAFAAIAAAIIgFABIAAANg");
	this.shape_22.setTransform(245.8,66.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#44FFFF").s().p("AgCAjIAAgNIgfAAIAAgJIAfAAIAAgHIgZAAIAAgHIAIgQIgMAAIAAgIIARAAIADgJIALABIgEAIIAjAAIAAAIIgnAAIgIAPIAOAAIAAgMIAJAAIAAAMIAVAAIAAAIIgVAAIAAAHIAbAAIAAAJIgbAAIAAANg");
	this.shape_23.setTransform(238.6,66.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#44FFFF").s().p("AghAbIAZgGIgaAAIAAgIIASAAIAAgEIgOAAIAAgIIAOAAIAAgEIAJAAIAAAEIAPAAIAAgEIAKAAIAAAEIANAAIAAAIIgNAAIAAAEIARAAIAAAIIgbAAIAZAFIgEAJIgZgHIAEgHIgQAAIAEAHIgZAHIgEgIgAgHANIAPAAIAAgEIgPAAgAAFgMIAAAKIgJAAIAAgKQgKAHgRAFIgDgIQANgCAKgFIgVAAIAAgIIAQAAIgJgFIAEgGIAMAHIgDAEIAIAAIAAgLIAJAAIAAALIAIAAIgDgDIAMgIIAFAFIgJAGIAPAAIAAAIIgWAAQAKAGAOABIgDAIQgRgDgKgJg");
	this.shape_24.setTransform(231.3,66.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#44FFFF").s().p("AgEAZQAIgEAGgGQgEgHgEgIQgCAVgKAMIgGgIIAEgGIgMAAIAAAFIgJAAIAAg3IAVAAIAAAyQAHgMAAgTIAAgLIgFAAIAAgJIAlAAIAAAIIgGALIAKAAIAAAJQgCALgHAJQAFAFAHADIgGAJQgHgEgFgGQgGAGgIAEIgGgIgAgYAKIAEAAIAAggIgEAAgAAEgTQAEASAIAJQAEgGABgGIgJAAIAAgJIAEgKIgMAAIAAAEg");
	this.shape_25.setTransform(224.2,66.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#44FFFF").s().p("AgGAdIAEgEIgUABIgGACIgFgJQAEgDAFgSIgIAAIAAgJIAgAAIAAAJIgNAAIgHATIALgBIgFgNIAIgCIAHARQAFgIAAgXIgHAAIAAgJIAHAAIAAgMIAJAAIAAAMIATAAIgBAnIgBAKIgCAEIgEACQgCABgKAAIgDgLIAIAAIADAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBIABgLIAAgWIgJAAIgBAWQgBAHgDAHQgDAHgFAFIgIgGgAgdgUIAAgJIAbAAIAAAJg");
	this.shape_26.setTransform(216.7,66.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#44FFFF").s().p("AAVAjIAAgEIgzAAIAAgaIAJAAIAAARIARAAIAAgWIgYAAIAAgcIAKAAIAAASIAOAAIAAgYIAJAAIAAAYIAOAAIAAgSIAKAAIAAAcIgYAAIAAAWIAQAAIAAgRIAKAAIAAAeg");
	this.shape_27.setTransform(209.6,66.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},37).wait(14));

	// 平均作业时长
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#44FFFF").s().p("AgbAaQADgCAAgGIAAgQIgKAAIAAgIIAKAAIAAgcIAKAAIAAAcIAvAAIAAAIIgaAAQAIAPAUAGIgHAKQgXgKgHgVIgMAAIAAAUIARgGIAAAJQgUAHgEADgAgJgQQASgJALgIIAHAIQgPAJgPAHg");
	this.shape_28.setTransform(94,111.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#44FFFF").s().p("AABAYIALABQAGgBgBgFIAAgfIgUAAIAAgJIAUAAIAAgNIALAAIAAANIAFAAIAAAJIgFAAIAAAiQAAAGgDADQgDADgFAAIgNABIgDgLgAggAfIAAg8IAcAAIAAA8IgKAAIAAgFIgJAAIAAAFgAgXAQIAJAAIAAgOIgJAAgAgXgGIAJAAIAAgNIgJAAgAgDgDIAGgGIAMARIgIAGIgKgRg");
	this.shape_29.setTransform(86.9,111.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#44FFFF").s().p("AgiAhIAAgKIAUAAIAAgOIgIADIgMgdIAJgEIALAZIAAgkIAKAAIAAA3IAJAAIAAg3IAKAAIAAAlQAFgKAFgPIAKAEIgNAcIgHgDIAAAOIAUAAIAAAKg");
	this.shape_30.setTransform(79.5,111.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#44FFFF").s().p("AACAjIAAgwIgCAAQgEAJgFAGIgGgIQAJgMAEgQIAIADIgDAIIAgAAIAAAKIgXAAIAAAIIATAAIAAAIIgTAAIAAAIIAVAAIAAAJIgVAAIAAAPgAgaAjIAAgiIgGAJIgCgMQAIgNAGgTIAJAEIgFANIAAA0g");
	this.shape_31.setTransform(72.2,111.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#44FFFF").s().p("AAFAYIAMABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgNIAAgWIgUAAIgHANIgGgFIAAACIgFAAIAAAUIAHgCIgBAKIgWAHIgCgKIAIgCIAAgXIgGAAIAAgKIAGAAIAAgSIAKAAIAAASIAFAAIAAAFQAIgMACgMIAKACIgEAIIAcAAIgBAdIgBARQABAGgDADQgDADgEAAIgPABIgDgLgAgFANIAagKIABAKIgZAKgAAAgFIAFgGIAMAKIgGAFIgLgJg");
	this.shape_32.setTransform(64.8,111.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#44FFFF").s().p("AgFAhIAAgWIgcAAIAAgJIAcAAIAAgZIgaAAIAAgJIA+AAIAAAJIgaAAIAAAZIAdAAIAAAJIgdAAIAAAWgAAJgEIAOgSIAIAGIgQARgAgegRIAIgFIAOASIgIAFIgOgSg");
	this.shape_33.setTransform(57.7,111.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},39).wait(12));

	// 动员人数
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#44FFFF").s().p("AAAAbIgCAFIgKgFQgIAFgKACIgFgJQAIAAAGgDIgKgEIADgHIgFAAIAAgHIAJAAIACgFIAEABIAAgHQgFAFgIAEIgEgIQAIgCAGgFIgMAAIAAgHIAGAAIgFgIIAGgEIAHAIIgHAEIAIAAIAAgOIAJAAIAAAOIAIAAIgHgEIAHgIIAFAEIgFAIIADAAIAAAHIgLAAIAAAFIACgDIAIAEQAGgKAEgRIAJABIgDAKIASAAIAAAJIgCAAQgCARgGANQAEAFAGAEIgGAJQgGgEgFgGQgFAHgIAEIgFgIgAgPAEIAQAAIAAAGQgBAGgEAFIAFACIgBADQAHgEAHgHQgEgHgCgIIgCADIgFgEIgBACIgJgFIAAAEIgDAAIgDAEgAgUAPIAHACQADgCACgEIgKAAgAAOgMQABAMADAGQAFgIABgMIgJAAIgBACg");
	this.shape_34.setTransform(31.7,111.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#44FFFF").s().p("AgiAYQAQgJAHgNQAHgLAAgZIAJAAIgBAPQAGAgAZALIgIAKQgTgKgIgXQgGAVgVANIgHgLg");
	this.shape_35.setTransform(24.4,111.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#44FFFF").s().p("AAVAjIAAgEIgVAAIAAAEIgKAAIAAgeIAoAAIAAAegAAAAWIAVAAIAAgJIgVAAgAghAgIAJgcIAJADIgIAcIgKgDgAgigIIAGgGQAHAEAFAGIgHAFIgLgJgAgLAAIAAgJIAQAAIAAgHIgTAAIAAgHIgFAHQgHgGgGgEIAGgHIAMAJIAAgBIATAAIAAgJIAKAAIAAAJIAUAAIAAAJIgUAAIAAAHIASAAIAAAJg");
	this.shape_36.setTransform(17.2,111.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#44FFFF").s().p("AAEAjIAAgTQgGAJgKAHIgFgIQAJgGAHgJIgOAAIAAgIIATAAIAAgFIgPAAIAAgbIApAAIAAAbIgQAAIAAAFIAUAAIAAAIIgQAAQAGAHALAGIgFAJQgLgGgFgKIAAAUgAgBgNIAVAAIAAgJIgVAAgAgbAjIAAgfIgFAHIgCgMQAHgNAFgUIAKADIgGARIAAAxg");
	this.shape_37.setTransform(9.9,111.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},41).wait(10));

	// 图层 8
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#44FFFF").s().p("AgGAAIAEgDIACgDIAHAGIgGAFIgBACg");
	this.shape_38.setTransform(161.2,112.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#44FFFF").s().p("AgQAKIANgMIANgOIAHAHIgQAOIgKAMg");
	this.shape_39.setTransform(160.3,113.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#44FFFF").s().p("AgSAMIAegeIAHAGIgfAfg");
	this.shape_40.setTransform(160,114);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#44FFFF").s().p("AgUAOIAjgjIAGAHIgkAkg");
	this.shape_41.setTransform(159.8,114.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#44FFFF").s().p("AgWAPIAngmIAGAGIgpAqg");
	this.shape_42.setTransform(159.6,114.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#44FFFF").s().p("AgZARIAegdIAOgOIAHAHIgQAPIgfAfg");
	this.shape_43.setTransform(159.4,114.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#44FFFF").s().p("AgaARIAugrIAHAHIgyAug");
	this.shape_44.setTransform(159.2,114.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#44FFFF").s().p("AgbARIAwgrIAHAHIg0Aug");
	this.shape_45.setTransform(159.1,114.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#44FFFF").s().p("AgcARIAZgRIAagaIAGAHIgdAcIgaASg");
	this.shape_46.setTransform(159,114.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#44FFFF").s().p("AgdARIAWgMIAfgfIAGAHIghAhIgYANg");
	this.shape_47.setTransform(158.9,114.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#44FFFF").s().p("AgeARIAUgIIAjgjIAGAHIglAlIgXAJg");
	this.shape_48.setTransform(158.8,114.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#44FFFF").s().p("AgfARIASgEIAngnIAGAHIgqAqIgVAEg");
	this.shape_49.setTransform(158.7,114.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#44FFFF").s().p("AghAbIAAgKIAQAAIAsgrIAHAHIgvAug");
	this.shape_50.setTransform(158.6,114.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#44FFFF").s().p("Ag0AbIAAgKIA2AAIAtgrIAGAHIgwAug");
	this.shape_51.setTransform(156.6,114.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#44FFFF").s().p("AhHAbIAAgKIBcAAIAtgrIAGAHIgvAug");
	this.shape_52.setTransform(154.7,114.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#44FFFF").s().p("AhbAbIAAgKICEAAIAsgrIAHAHIgwAug");
	this.shape_53.setTransform(152.7,114.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#44FFFF").s().p("AhuAbIAAgKICqAAIAtgrIAGAHIgvAug");
	this.shape_54.setTransform(150.8,114.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#44FFFF").s().p("AiCAbIAAgKIDSAAIAsgrIAHAHIgwAug");
	this.shape_55.setTransform(148.8,114.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#44FFFF").s().p("AiVAbIAAgKID4AAIAtgrIAGAHIgwAug");
	this.shape_56.setTransform(146.9,114.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#44FFFF").s().p("AipAbIAAgKIEfAAIAtgrIAHAHIgwAug");
	this.shape_57.setTransform(145,114.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#44FFFF").s().p("AjnAbIAAgKIGbAAIAtgrIAHAHIgwAug");
	this.shape_58.setTransform(138.8,114.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#44FFFF").s().p("AkkAbIAAgKIIWAAIAtgrIAHAHIgwAug");
	this.shape_59.setTransform(132.6,114.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#44FFFF").s().p("AliAbIAAgKIKSAAIAtgrIAHAHIgwAug");
	this.shape_60.setTransform(126.4,114.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#44FFFF").s().p("AmhAbIAAgKIMPAAIAtgrIAHAHIgwAug");
	this.shape_61.setTransform(120.2,114.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#44FFFF").s().p("AnfAbIAAgKIOLAAIAtgrIAHAHIgwAug");
	this.shape_62.setTransform(114,114.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#44FFFF").s().p("AodAbIAAgKIQIAAIAsgrIAHAHIgwAug");
	this.shape_63.setTransform(107.7,114.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#44FFFF").s().p("ApbAbIAAgKISEAAIAsgrIAHAHIgwAug");
	this.shape_64.setTransform(101.5,114.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#44FFFF").s().p("AqZAbIAAgKIUAAAIAsgrIAHAHIgwAug");
	this.shape_65.setTransform(95.3,114.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#44FFFF").s().p("ArXAbIAAgKIV8AAIAsgrIAHAHIgwAug");
	this.shape_66.setTransform(89.1,114.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#44FFFF").s().p("AsVAbIAAgKIX4AAIAsgrIAHAHIgwAug");
	this.shape_67.setTransform(82.9,114.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38}]},5).to({state:[]},2).to({state:[{t:this.shape_38}]},2).to({state:[{t:this.shape_39}]},2).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).wait(12));

	// 图层 9
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#44FFFF").s().p("AgCAGIgDgHIAFgGIAFAHIABABIgHAHg");
	this.shape_68.setTransform(161.7,77.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#44FFFF").s().p("AgKgHIAHgGIAOAVIgIAGg");
	this.shape_69.setTransform(161.2,77.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#44FFFF").s().p("AgOgNIAHgHIAWAiIgIAHg");
	this.shape_70.setTransform(160.8,76.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#44FFFF").s().p("AgTgUIAIgGIAfAuIgIAHg");
	this.shape_71.setTransform(160.3,76);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#44FFFF").s().p("AgEACIgTgdIAIgFIATAeIAUAdIgIAGg");
	this.shape_72.setTransform(159.9,75.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#44FFFF").s().p("AghgoIAJgGIA6BXIgIAGg");
	this.shape_73.setTransform(158.9,74);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#44FFFF").s().p("Agqg2IAIgGIBNByIgIAHg");
	this.shape_74.setTransform(158,72.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#44FFFF").s().p("AgzhDIAIgHIBfCOIgIAHg");
	this.shape_75.setTransform(157.1,71.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#44FFFF").s().p("Ag8hRIAIgGIBxCpIgIAGg");
	this.shape_76.setTransform(156.2,69.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#44FFFF").s().p("AhDhaIgCgEIAIgHIAEAGIB/C/IgIAGg");
	this.shape_77.setTransform(155.3,68.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#44FFFF").s().p("Ag4h8IhFAAIAAgJIBMAAICuEEIgIAHg");
	this.shape_78.setTransform(149.8,65.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#44FFFF").s().p("AAKh8IjJAAIAAgJIDQAAICvEEIgIAHg");
	this.shape_79.setTransform(143.1,65.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#44FFFF").s().p("ABNh8IlPAAIAAgJIFVAAICwEEIgIAHg");
	this.shape_80.setTransform(136.4,65.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#44FFFF").s().p("ACPh8InUAAIAAgJIHbAAICvEEIgIAHg");
	this.shape_81.setTransform(129.8,65.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#44FFFF").s().p("ADSh8IpZAAIAAgJIJfAAICwEEIgIAHg");
	this.shape_82.setTransform(123.1,65.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#44FFFF").s().p("AEUh8IreAAIAAgJILmAAICuEEIgIAHg");
	this.shape_83.setTransform(116.5,65.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#44FFFF").s().p("AFXh8ItjAAIAAgJINqAAICvEEIgIAHg");
	this.shape_84.setTransform(109.8,65.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#44FFFF").s().p("AGah8IvpAAIAAgJIPwAAICvEEIgIAHg");
	this.shape_85.setTransform(103.1,65.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#44FFFF").s().p("AHch8IxtAAIAAgJIR1AAICuEEIgIAHg");
	this.shape_86.setTransform(96.5,65.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#44FFFF").s().p("AIfh8IzzAAIAAgJIT6AAICvEEIgIAHg");
	this.shape_87.setTransform(89.8,65.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#44FFFF").s().p("AJih8I15AAIAAgJIWAAAICvEEIgIAHg");
	this.shape_88.setTransform(83.1,65.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_68}]},2).to({state:[]},2).to({state:[{t:this.shape_68}]},2).to({state:[]},2).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).wait(22));

	// 图层 10
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#44FFFF").s().p("AgGABIAGgHIAFAFIACABIgGAHg");
	this.shape_89.setTransform(191,112.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#44FFFF").s().p("AAAAGIgCgCIgLgHIAHgIIAGAEIADAEIAKAIIgGAIg");
	this.shape_90.setTransform(191.7,113.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#44FFFF").s().p("AgCAEIgLgHIAHgIIAJAIIAKAIIgGAIg");
	this.shape_91.setTransform(191.7,113.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#44FFFF").s().p("AgQgGIAHgIIAaAVIgHAIg");
	this.shape_92.setTransform(192,113.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#44FFFF").s().p("AgTgJIAHgIIAgAbIgHAIg");
	this.shape_93.setTransform(192.3,113.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#44FFFF").s().p("AgWgLIAHgIIAmAfIgHAIg");
	this.shape_94.setTransform(192.6,114);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#44FFFF").s().p("AgPgFIgKgJIAHgIIAKAIIAiAdIgHAIg");
	this.shape_95.setTransform(192.9,114.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#44FFFF").s().p("AgOgBIgQgNIAGgIIAPAMIAoAZIgGAIg");
	this.shape_96.setTransform(193.4,114.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#44FFFF").s().p("AgPACIgVgQIAHgIIAUARIAuAUIgFAIg");
	this.shape_97.setTransform(194,114.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#44FFFF").s().p("AgOAGIgbgUIAHgIIAZAVIAzAQIgEAIg");
	this.shape_98.setTransform(194.5,114.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#44FFFF").s().p("AgPAKIgggYIAHgIIAfAYIA5AMIgDAJg");
	this.shape_99.setTransform(195.1,114.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#44FFFF").s().p("AgOAOIgmgcIAHgIIAjAcIA/AIIgCAJg");
	this.shape_100.setTransform(195.6,114.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#44FFFF").s().p("AgPATIgqghIAGgIIApAgIBEAEIgBAJg");
	this.shape_101.setTransform(196.1,114.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#44FFFF").s().p("AgOAXIgxglIAHgIIAuAkIBKAAIAAAJg");
	this.shape_102.setTransform(196.7,114.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#44FFFF").s().p("AhzAXIgwglIAHgIIAuAkIESAAIAAAJg");
	this.shape_103.setTransform(206.7,114.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#44FFFF").s().p("AjYAXIgwglIAHgIIAuAkIHcAAIAAAJg");
	this.shape_104.setTransform(216.8,114.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#44FFFF").s().p("Ak8AXIgwglIAGgIIAuAkIKlAAIAAAJg");
	this.shape_105.setTransform(226.8,114.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#44FFFF").s().p("AmhAXIgwglIAHgIIAuAkINuAAIAAAJg");
	this.shape_106.setTransform(236.9,114.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#44FFFF").s().p("AoFAXIgxglIAHgIIAuAkIQ3AAIAAAJg");
	this.shape_107.setTransform(247,114.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#44FFFF").s().p("ApqAXIgwglIAGgIIAuAkIUBAAIAAAJg");
	this.shape_108.setTransform(257,114.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#44FFFF").s().p("ArPAXIgwglIAHgIIAuAkIXKAAIAAAJg");
	this.shape_109.setTransform(267.1,114.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_89}]},10).to({state:[]},2).to({state:[{t:this.shape_89}]},2).to({state:[]},2).to({state:[{t:this.shape_89}]},2).to({state:[{t:this.shape_90}]},2).to({state:[{t:this.shape_91}]},4).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).wait(9));

	// 图层 11
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#44FFFF").s().p("AgJABIALgJIAHAIIgKAJg");
	this.shape_110.setTransform(193.9,76.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#44FFFF").s().p("AgCAIIgHgGIAKgKIACABIAHAGIgKAKg");
	this.shape_111.setTransform(193.9,76.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#44FFFF").s().p("AgCAJIgHgHIALgKIACAAIAGAHIAAABIgKAJg");
	this.shape_112.setTransform(193.9,76.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#44FFFF").s().p("AgKADIAMgLIACgBIAHAHIAAABIgLAKIgDABg");
	this.shape_113.setTransform(194,76.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#44FFFF").s().p("AgLADIANgLIACgCIAIAIIgMALIgDACg");
	this.shape_114.setTransform(194.1,76.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#44FFFF").s().p("AgLADIAIgGIAHgHIAIAIIgIAGIgHAHg");
	this.shape_115.setTransform(194.1,76.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#44FFFF").s().p("AgSALIAegdIAHAKIgdAbg");
	this.shape_116.setTransform(194.8,75.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#44FFFF").s().p("AgZASIAtgrIAGAKIgrApg");
	this.shape_117.setTransform(195.5,75.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#44FFFF").s().p("AggAaIAvgtIAMgOIAGAMIgJAIIgwAvg");
	this.shape_118.setTransform(196.2,74.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#44FFFF").s().p("AglAaIAygyIAWgJIADALIgRAGIgyAyg");
	this.shape_119.setTransform(196.7,74.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#44FFFF").s().p("AgrAaIA4g2IAdgFIACAKIgYADIg3A2g");
	this.shape_120.setTransform(197.3,74.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#44FFFF").s().p("AgxAaIA8g7IAmAAIAAAJIgfAAIg7A6g");
	this.shape_121.setTransform(197.9,74.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#44FFFF").s().p("AhVAaIA9g7IBuAAIAAAJIhoAAIg7A6g");
	this.shape_122.setTransform(201.5,74.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#44FFFF").s().p("Ah6AaIA9g7IC4AAIAAAJIiyAAIg7A6g");
	this.shape_123.setTransform(205.2,74.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#44FFFF").s().p("AifAaIA9g7IECAAIAAAJIj7AAIg8A6g");
	this.shape_124.setTransform(208.9,74.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#44FFFF").s().p("AjhAaIA9g7IGFAAIAAAJIl+AAIg8A6g");
	this.shape_125.setTransform(215.5,74.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#44FFFF").s().p("AkjAaIA9g7IIKAAIAAAJIoEAAIg7A6g");
	this.shape_126.setTransform(222.1,74.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#44FFFF").s().p("AllAaIA9g7IKOAAIAAAJIqIAAIg7A6g");
	this.shape_127.setTransform(228.7,74.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#44FFFF").s().p("AmnAaIA9g7IMSAAIAAAJIsMAAIg7A6g");
	this.shape_128.setTransform(235.3,74.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#44FFFF").s().p("AnpAaIA9g7IOWAAIAAAJIuQAAIg7A6g");
	this.shape_129.setTransform(241.9,74.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#44FFFF").s().p("AorAaIA9g7IQaAAIAAAJIwUAAIg7A6g");
	this.shape_130.setTransform(248.5,74.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#44FFFF").s().p("AptAaIA9g7ISeAAIAAAJIyYAAIg7A6g");
	this.shape_131.setTransform(255.1,74.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#44FFFF").s().p("AqwAaIA9g7IUjAAIAAAJI0cAAIg8A6g");
	this.shape_132.setTransform(261.8,74.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#44FFFF").s().p("AryAaIA9g7IWnAAIAAAJI2gAAIg8A6g");
	this.shape_133.setTransform(268.4,74.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_110}]},4).to({state:[]},2).to({state:[{t:this.shape_110}]},2).to({state:[{t:this.shape_110}]},2).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).wait(18));

	// 图层 12
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#44FFFF").s().p("AheBIQgEgBgDgDQgEgDAAgFIAAgLIAGAAIAAALQAAAGAFAAIBBAAQAFAAAAgGIAAgLIAHAAIAAALQgBAFgDADQgDADgFABgAg0AZQACgUASgCQANAAAEAMIgFABQgEgIgIgBQgMACgBAQQABAPALAAQAKAAADgKIAFABQgDAPgPAAQgRgBgCgUgAhaArIgJAAIgLgpIAHAAIAIAjIAJgjIAHAAIAIAfIABAFIABgEIAHggIAHAAIgLApIgHAAIgJgfQAAADgIAegABMAUIgPgSQgRgUAAgUQAAgNAKgJQAJgKAOAAQANAAAKAKQALAJAAANQAAARgRAXIgPASIgCAAIgBAAgAA/gzQgGAGAAAHQAAAJAGAGQAGAFAIABQAJgBAFgFQAGgGAAgJQAAgIgGgFQgFgHgJAAQgIAAgGAHgAgYgBIAAgMQAAgEgFAAIhBAAQgFAAAAAEIAAAMIgGAAIAAgMQAAgEAEgDQADgDAEAAIBBAAQAFAAADADQADADABAEIAAAMg");
	this.shape_134.setTransform(178.7,85.8,1.312,1.312);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#44FFFF").s().p("AASAzIAAghIgBgBQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAABIgMAgQgCAFgIgDQgFgCAAgGIAAgFIANglIAAgSIgLAFIgTACQgGABAAgHQAAgFACgCIACgCIATgCIANgIIAAgLIACgHQAEgHALAAIAKABQAKACAAAIIAABgQgBAGgIAAIgCAAQgHAAgBgGg");
	this.shape_135.setTransform(181,99.8,1.312,1.312);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#44FFFF").s().p("AgmAqQAAgGAGAAQAHAAAAAHQAAAFgHAAQgGABAAgHgAAEAiIAAgBIAlhPIABgBIAEABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgCAIggBJgAggAcQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBgAgtAbQAAgDADAAQAEAAAAADQAAAFgEAAQgDAAAAgFg");
	this.shape_136.setTransform(173.1,99.3,1.312,1.312);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#44FFFF").s().p("AgeBbQgFAAgKgEQgNgEgKgMQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAHAAAGgDQAEgBAGgGIACgDIAEADIgCADQgDAEgFACQgIADgGACIACACIAEADIABAAIAHgDIgEAGIAEACQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIAIgFIADgBQAAAEgFAFQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAEABIABAAQADgEAEgKIACgGIAAgBIAFACIgBACQgCAHgIAMIgBABIgCABIgBAAgAglAzIADgEQAFgCACACIAKAEQAHADgDAIIgYgLgAAGgVQgGgBACgIQACgFADgBIADAAIAWAIIABAAIAAASgAAhgzQgHgHAAgJQAAgJAHgGQAGgHAJgBQAJAAAGAHQAHAHAAAJQAAAKgHAHQgGAGgJAAQgJAAgGgHg");
	this.shape_137.setTransform(177,97.8,1.312,1.312);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#44FFFF").s().p("AhZB/QgHAAgGgGQgFgFAAgHIAAjYQAAgIAFgFQAGgGAHABIB5AAIgRANIheAAQgGAAgFAFQgFAFAAAGIAADCQAAAGAFAFQAFAFAGgBICgAAQAHABAEgFQAFgFAAgGIAAh7IALgDIAACJQAAAHgFAFQgGAGgHAAg");
	this.shape_138.setTransform(176.1,95.5,1.312,1.312);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]}).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},38).to({state:[]},2).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},2).to({state:[]},2).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.2,93.6,241.3,84.1);
// library properties:
lib.properties = {
	width: 350,
	height: 125,
	fps: 24,
	color: "#444444",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib_wc, createjs = createjs||{});
export default lib_wc;