let lib_Dl={};
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
(lib.dataview = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.dlClickA.addEventListener("click", fl_ClickToDLa);
		function fl_ClickToDLa() {
			clickDLa();
		}
		this.dlClickB.addEventListener("click", fl_ClickToDLb);
		
		function fl_ClickToDLb() {
			clickDLb();
		} 
		this.dlClickC.addEventListener("click", fl_ClickToDLc);
		
		function fl_ClickToDLc() {
			clickDLc();
		}
	}
	this.frame_50 = function() {
		this.stop();
		 /* 重复点击事件，-> 注释掉了
		this.dlClickA.addEventListener("click", fl_ClickToDLa);
		
		function fl_ClickToDLa() {
			clickDLa();
		}
		this.dlClickB.addEventListener("click", fl_ClickToDLb);
		
		function fl_ClickToDLb() {
			clickDLb();
		}
		this.dlClickC.addEventListener("click", fl_ClickToDLc);
		
		function fl_ClickToDLc() {
			clickDLc();
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50).call(this.frame_50).wait(1));

	// 图层 16
	this.dlClickC = new lib.元件4();
	this.dlClickC.parent = this;
	this.dlClickC.setTransform(183.7,103.2,0.342,0.518,0,0,0,39.9,19.8);
	this.dlClickC.visible = false;

	this.dlClickB = new lib.元件4();
	this.dlClickB.parent = this;
	this.dlClickB.setTransform(153,62.2,0.342,0.518,0,0,0,39.9,19.8);
	this.dlClickB.visible = false;

	this.dlClickA = new lib.元件4();
	this.dlClickA.parent = this;
	this.dlClickA.setTransform(150.5,22.8,0.342,0.518,0,0,0,39.9,19.8);
	this.dlClickA.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dlClickA,p:{regX:39.9,scaleX:0.342,x:150.5,visible:false}},{t:this.dlClickB,p:{regX:39.9,scaleX:0.342,x:153,visible:false}},{t:this.dlClickC,p:{regX:39.9,scaleX:0.342,x:183.7,y:103.2,visible:false}}]}).to({state:[{t:this.dlClickA,p:{regX:40,scaleX:0.339,x:182.4,visible:true}},{t:this.dlClickB,p:{regX:40,scaleX:0.339,x:182.4,visible:true}},{t:this.dlClickC,p:{regX:40,scaleX:0.339,x:182.4,y:104.2,visible:true}}]},31).wait(20));

	// 平均作业时长
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44FFFF").s().p("AAMAZQgFAGgGAEIgGgIQAGgFAHgHQgDgLgBgRIgXAAIAAAHIATAAIAAAMQAAAMgBACIgEAEQgCACgKgBIgCgKIAGABQADgBABgDIAAgKIgKAAQAAAXgHAKIgIgHQAGgJAAgSIAAgXIAgAAIAAgMIAKAAIAAAMIAJAAIgGgHIAIgFIAHAJIgGADIAIAAIAAAJIgUAAIABASQAFgHAEgIIAJAEQgHANgIAKQADAHACAAIACgBIABgFIAAgHIAJAEIgBAKQgCAGgCACQgDACgDAAQgHAAgFgKg");
	this.shape.setTransform(110.1,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#44FFFF").s().p("AgiAaQASgFABgJIgSAAIAAgJIBDAAIAAAJIgVAAIAAAKQAAAAAAABQAAABABAAQAAAAABABQAAAAABAAIAEAAQAEAAABgFIAAgFIAKADIgCAIQgCAIgKAAIgJAAQgKAAAAgKIAAgMIgHAAQgBAHgDAFQgEAGgOAFIgHgJgAgYgBIAAgJIAyAAIAAAJgAAWgMIAAgFIgsAAIAAAFIgKAAIAAgOIAbAAIgBgGIAJgCIAEAIIAZAAIAAAOg");
	this.shape_1.setTransform(102.9,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#44FFFF").s().p("AgPAgQgPAAAAgQIAAgeIAKAAIAAAIIAiAAIAAgQIguAAIAAgJIA4AAIAAAiIgsAAIAAAMQAAAHAHAAIAaAAIAFgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIACgMIALAEIgDANQgBAEgEADQgEACgGAAg");
	this.shape_2.setTransform(95.9,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},27).wait(24));

	// 动员人数
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#44FFFF").s().p("AgiAbQAQgEAFgIIgTAAIAAgJIAWAAIACgGIAJAAIgBAGIAeAAIgCAQQAAAEgCADQgCACgDACQgEABgKAAIgHAAIgCgJIANAAIAEgBIADgCIAAgHIgTAAQgGAOgVAGIgGgIgAgigFQANgBALgDIgJgHIgJAHIgGgIQAOgHAHgKIALAAIgFAGIAkAAIAAAIQgHAGgJAFQAKACAMAAIgEAJQgSgCgNgDQgNADgRADIgEgIgAABgMQAIgDAGgFIgbAAQAGAFAHADg");
	this.shape_3.setTransform(60.2,29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#44FFFF").s().p("AgZAiIAAghIgGAJIgDgMQAIgMAGgTIAKACIgFAPIAAAygAgKAgIAAgJIAQAAIAAgSIgRAAIAAgIIARAAIAAgQIgMABIgDgJQAXgBAQgCIADAJIgQACIAAAQIASAAIAAAIIgSAAIAAASIAPAAIAAAJg");
	this.shape_4.setTransform(52.9,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#44FFFF").s().p("AAVAjIAAgEIgVAAIAAAEIgKAAIAAgeIAoAAIAAAegAAAAWIAVAAIAAgJIgVAAgAghAgIAKgcIAIADIgIAbIgKgCgAgigIIAGgGIANAKIgIAFIgLgJgAgMgBIAAgIIAQAAIAAgHIgSAAIAAgHIgGAHQgFgGgHgEIAHgGIALAIIAAgBIASAAIAAgJIALAAIAAAJIAUAAIAAAJIgUAAIAAAHIARAAIAAAIg");
	this.shape_5.setTransform(45.7,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#44FFFF").s().p("AghAgIAHgbIAJADIgGAbIgKgDgAAJAiIgCgHIALAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgCIgYAAIAAALIgJAAIAAgjIArAAIAAAaQAAAEgCADQgCACgEAAIgOAAgAgDARIAYAAIAAgDIgYAAgAgDAIIAYAAIAAgDIgYAAgAgigIIAGgGIALAJIgHAGIgKgJgAgQgEIAAgGIATAAIAAgDIgQAAIAAgGIAQAAIAAgDIgRAAIAAgGIARAAIAAgGIALAAIAAAGIATAAIAAAGIgTAAIAAADIASAAIAAAGIgSAAIAAADIAVAAIAAAGgAgggbIAGgGIALAIIgGAIIgLgKg");
	this.shape_6.setTransform(38.4,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#44FFFF").s().p("AAWAjIAAgDIgQAAIAAADIgIAAIAAgdIAhAAIAAAdgAAGAXIAQAAIAAgIIgQAAgAgiAXIACAAIAAgYIAHAAIAAAXIAEAAIAAgbIgJAAIAAgZIAYAAIAAAMQAGgHAEgJIAKABIgDAGIAVAAIAAAIQgDAIgHAGQAGACAHABIgCAIQgLgCgIgEQgIAEgKACIgEgIIAOgDIgGgHIgCADIgEgFIAAAJIgGAAIAAAHIAGAAIAAAIIgGAAIAAALIAIgCIAAAKIgdAEgAAOgKQAFgEACgFIgPAAQADAFAFAEgAgWgNIAIAAIAAgHIgIAAg");
	this.shape_7.setTransform(31.2,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#44FFFF").s().p("AgiAZIAHgGIAAgTIgHAAIAAgJIAPAAIAAAcQAFAGALAAIAmAAIgDAJIgYAAIgPgBQgEAAgEgBQgEgCgDgEIgIAJgAgMAVIAAgkIAOAAIABgEIgSAAIAAgIIALAAIgEgFIAIgDIAEAIIAIAAIAEgIIAKADIgFAFIAMAAIAAAIIgVAAIgBAEIATAAIAAAkgAgDAOIAZAAIAAgEIgZAAgAgDAFIAZAAIAAgFIgZAAgAgDgEIAZAAIAAgEIgZAAgAghgdIAHgFIAKANIgIAFIgJgNg");
	this.shape_8.setTransform(23.9,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},26).wait(25));

	// 动员人数
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#44FFFF").s().p("AgBAhIAAgNIgeAAIAAgIIAeAAIAAgHIgYAAIAAgGIAIgPIgMAAIAAgIIAQAAIADgIIAKACIgDAGIAgAAIAAAIIgkAAIgIAOIAOAAIAAgKIAIAAIAAAKIATAAIAAAHIgTAAIAAAHIAZAAIAAAIIgZAAIAAANg");
	this.shape_9.setTransform(140.7,110.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#44FFFF").s().p("AACAgQgLgBAAgJIAAgYIgEAAIgBgCIgDAAIAAATIAGgBIAAAJIgTAHIgCgLIAHgCIAAgVIgFAAIAAgJIAFAAIAAgRIAIAAIAAARIAEAAIAAADIAEgBIAAgOIAJAAIAAAMIAFgCIAAgPIAJAAIAAANIAPgDIAAAMQAAAOgBACIgCADIgKACIgCgJIADABIADgBIAAgBIABgDIAAgKIgHABIAAAdIgJAAIAAgbIgFACIAAAZQAAAEADAAIANAAIAEgBIACgCIACgIIAJAEIgDAKIgEAEIgFABg");
	this.shape_10.setTransform(134,110.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#44FFFF").s().p("AgSAaQAGgDAEgFQADgEABgKIgKAAIAAgHIASAAIAAgKIgIAAIgEAIIgIgEQAFgKADgLIAIADIgBAGIAFAAIAAgKIAKAAIAAAKIAPAAIAAAIIgPAAIAAAKIASAAIAAAHIgOAAIAAAQQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAIABAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQABgCAAgIIAJADQgBAMgDACQgDACgEABIgFAAQgIAAAAgKIAAgSIgFAAQgBANgDAGQgEAFgHAFIgHgHgAgfAeQADgMADgOIAJACIgGAaIgJgCgAgggHIAGgGIALAIIgHAGIgKgIgAgfgZIAGgGIAKAJIgGAHIgKgKg");
	this.shape_11.setTransform(127.2,110.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#44FFFF").s().p("AgBAhIAAgNIgeAAIAAgIIAeAAIAAgHIgYAAIAAgGIAIgPIgMAAIAAgIIAQAAIADgIIAKACIgDAGIAgAAIAAAIIgkAAIgIAOIAOAAIAAgKIAIAAIAAAKIATAAIAAAHIgTAAIAAAHIAZAAIAAAIIgZAAIAAANg");
	this.shape_12.setTransform(102.8,110.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#44FFFF").s().p("AAWAgIAAgDIgdAAIAAgJIAdAAIAAgPIgZAAIAAgIIAZAAIAAgPIgaAAIAAgIIAjAAIAAA6gAgdAXIAFAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAgBIAAgMIgGADIgCgJIAIgCIAAgLIgHAAIAAgJIAHAAIAAgLIAJAAIAAALIAHAAIAAAJIgHAAIAAAJIAHgBIAAAHIgHACIAAARQAAAFgCACQgDACgJAAIgCgJg");
	this.shape_13.setTransform(95.9,110.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#44FFFF").s().p("AAGAZIAKABQABAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBIAAgBIgWAAIAAAKIgJAAIAAghIAnAAIAAAZQAAAEgBACQgCACgDAAIgOAAIgCgHgAgCAQIAWAAIAAgDIgWAAgAgCAIIAWAAIAAgEIgWAAgAgeAeIAGgaIAJAEIgHAYIgIgCgAgggHIAGgGIAKAIIgGAGIgKgIgAgPgDIAAgGIASAAIAAgDIgPAAIAAgFIAPAAIAAgDIgQAAIAAgGIAQAAIAAgFIAJAAIAAAFIATAAIAAAGIgTAAIAAADIARAAIAAAFIgRAAIAAADIAVAAIAAAGgAgegZIAFgGIALAJIgGAGIgKgJg");
	this.shape_14.setTransform(89.4,110.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#44FFFF").s().p("AgVAhIAAgMIgKABIAAgIIAKgBIAAgHIgKAAIAAgHIADgOIgDAAIAAgIIAFAAIABgIIAIAAIgCAIIAKAAIAAAIIgMAAIgDAOIADAAIAAgLIAIAAIAAALIAEAAIAAAHIgEAAIAAAGIAEAAIAAAIIgEAAIAAANgAASAgIgBgIIAEAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAgGIgBABIgFgGQgCAHgDAGIgFgHQAFgJABgNIgFAAIAAAFIADAEIgDAHIgCgDIgFANIgCgGIAAARIgHAAIAAgtIAKAAIAAgIIgLAAIAAgIIAoAAIAAAIIgLAAIAAAIIAKAAIAAAmQAAAGgGABIgHAAgAgBAMQADgIAAgJIgDAAgAAUACIAEAGIAAgNIgDAAIgBAHgAAJgNIAFAAIAAgIIgFAAg");
	this.shape_15.setTransform(67.5,110.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#44FFFF").s().p("AgBAhIAAgNIgeAAIAAgIIAeAAIAAgHIgYAAIAAgGIAIgPIgMAAIAAgIIAQAAIADgIIAKACIgDAGIAgAAIAAAIIgkAAIgIAOIAOAAIAAgKIAIAAIAAAKIATAAIAAAHIgTAAIAAAHIAZAAIAAAIIgZAAIAAANg");
	this.shape_16.setTransform(60.8,110.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#44FFFF").s().p("AgFAbIADgEIgSABIgGACIgEgIQADgDAFgRIgIAAIAAgIIAeAAIAAAIIgMAAIgHARIALAAIgFgMIAIgDIAGARQAEgIAAgUIgGAAIAAgKIAGAAIAAgKIAJAAIAAAKIARAAIAAAlIgBAJIgCAEIgEACQgCABgJAAIgDgKIAHAAIADgBIACgCIAAgLIAAgTIgIAAIgBATIgEANQgDAHgEAFIgHgGgAgbgTIAAgIIAZAAIAAAIg");
	this.shape_17.setTransform(53.9,110.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#44FFFF").s().p("AAUAgIAAgDIgwAAIAAgZIAJAAIAAAQIAPAAIAAgVIgWAAIAAgZIAJAAIAAARIANAAIAAgWIAJAAIAAAWIAMAAIAAgRIAKAAIAAAZIgWAAIAAAVIAPAAIAAgQIAJAAIAAAcg");
	this.shape_18.setTransform(47.3,110.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},24).wait(27));

	// 平均作业时长
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#44FFFF").s().p("AgbAaQADgCAAgGIAAgQIgKAAIAAgIIAKAAIAAgcIAKAAIAAAcIAvAAIAAAIIgaAAQAIAPAUAGIgHAKQgXgKgHgVIgMAAIAAAUIARgGIAAAJQgUAHgEADgAgJgQQASgJALgIIAHAIQgPAJgPAHg");
	this.shape_19.setTransform(130.2,69.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#44FFFF").s().p("AABAYIALAAQAGABAAgGIAAgfIgVAAIAAgKIAVAAIAAgLIAKAAIAAALIAFAAIAAAKIgFAAIAAAiQgBAGgCADQgDADgEAAIgPABIgCgLgAghAfIAAg8IAcAAIAAA7IgJAAIAAgEIgJAAIAAAFgAgXARIAJAAIAAgPIgJAAgAgXgFIAJAAIAAgPIgJAAgAgEgEIAGgEIANAQIgIAFIgLgRg");
	this.shape_20.setTransform(123.1,69.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#44FFFF").s().p("AgiAhIAAgKIAUAAIAAgOIgIADIgLgdIAIgEIALAZIAAgkIAKAAIAAA3IAIAAIAAg3IAKAAIAAAlQAHgKAEgPIAKAEIgNAcIgIgDIAAAOIAVAAIAAAKg");
	this.shape_21.setTransform(115.7,69);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#44FFFF").s().p("AACAjIAAgxIgCAAQgEAKgFAGIgGgIQAJgMAEgQIAIACIgDAJIAgAAIAAAJIgXAAIAAAJIATAAIAAAIIgTAAIAAAIIAVAAIAAAJIgVAAIAAAPgAgaAjIAAgiIgGAJIgCgMQAIgOAGgRIAJACIgFAOIAAA0g");
	this.shape_22.setTransform(108.4,69.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#44FFFF").s().p("AAFAZIANAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgLIAAgXIgUAAIgHANIgFgFIAAABIgGAAIAAAVIAHgCIAAAKIgXAIIgCgLIAIgCIAAgYIgHAAIAAgJIAHAAIAAgTIAKAAIAAATIAGAAIAAAFQAGgMADgMIAKABIgEAJIAcAAIgBAeIgBARQAAAFgCADQgDADgEAAIgPABIgDgKgAgGANIAbgLIAAALIgYALgAAAgFIAFgGIAMAKIgGAGIgLgKg");
	this.shape_23.setTransform(101,69);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#44FFFF").s().p("AgFAhIAAgWIgdAAIAAgJIAdAAIAAgZIgaAAIAAgJIA+AAIAAAJIgaAAIAAAZIAeAAIAAAJIgeAAIAAAWgAAJgEIAOgSIAIAGIgPARgAgegRIAIgFIAOASIgIAFIgOgSg");
	this.shape_24.setTransform(93.9,69.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},22).wait(29));

	// 动员人数
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#44FFFF").s().p("AAAAbIgDAFIgJgFQgIAFgLACIgDgJQAHAAAFgDIgKgEIAFgHIgGAAIAAgHIAJAAIACgFIAEABIAAgHQgFAFgIAEIgDgIQAGgCAGgFIgKAAIAAgHIAFAAIgFgIIAHgEIAFAIIgGAEIAIAAIAAgOIAJAAIAAAOIAHAAIgFgEIAFgIIAGAEIgEAIIACAAIAAAHIgLAAIAAAFIADgDIAHAEQAGgKAEgRIAKABIgDAKIASAAIAAAJIgEAAQgBARgHANQAFAFAHAEIgHAJQgGgEgEgGQgGAHgIAEIgFgIgAgPAEIAQAAIAAAGQgCAGgEAFIAHACIgCADQAIgEAFgHQgDgHgCgIIgDADIgDgEIgCACIgJgFIAAAEIgEAAIgCAEgAgVAPIAIACQAEgCACgEIgLAAgAAOgMQABAMAEAGQAEgIABgMIgKAAIAAACg");
	this.shape_25.setTransform(70.9,69.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#44FFFF").s().p("AgiAYQAQgJAHgNQAHgLAAgZIAJAAIgBAPQAGAgAZALIgIAKQgTgKgIgXQgGAVgVANIgHgLg");
	this.shape_26.setTransform(63.6,69.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#44FFFF").s().p("AghAYQAegDAAgQIAJAAIgCAIIAeALIgFAJQgMgFgRgHQgIAKgVADIgEgKgAgcASIAAgXIA6AAIAAAVIgKAAIAAgOIglAAIAAAQgAgZgKIAAgXIA0AAIAAAXgAgOgTIAeAAIAAgFIgeAAg");
	this.shape_27.setTransform(56.4,69.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#44FFFF").s().p("AgGAdIAEgEIgUABIgGACIgFgJQAEgDAFgSIgIAAIAAgJIAgAAIAAAJIgNAAIgHATIALgBIgFgNIAIgCIAHARQAFgIAAgXIgHAAIAAgJIAHAAIAAgMIAJAAIAAAMIATAAIgBAnIgBAKIgCAEIgEACQgCABgKAAIgDgLIAIAAIADAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBIABgLIAAgWIgJAAIgBAWQgBAHgDAHQgDAHgFAFIgIgGgAgdgUIAAgJIAbAAIAAAJg");
	this.shape_28.setTransform(49,69.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},21).wait(30));

	// 图层 2
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#44FFFF").s().p("AgFAEIgRgQIALgHIARARIARARIgLAFg");
	this.shape_29.setTransform(38.7,111.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#44FFFF").s().p("AgHASIgngkIALgIIAjAjIAvAJIgGAIg");
	this.shape_30.setTransform(41.1,112.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#44FFFF").s().p("AgKAhIg8g5IALgIIA2A1IBMAAIAAAMg");
	this.shape_31.setTransform(43.5,113);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#44FFFF").s().p("AiKAhIg8g5IALgIIA2A1IFMAAIAAAMg");
	this.shape_32.setTransform(56.3,113);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#44FFFF").s().p("AkJAhIg9g5IALgIIA2A1IJMAAIAAAMg");
	this.shape_33.setTransform(69,113);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#44FFFF").s().p("AmJAhIg9g5IALgIIA2A1INMAAIAAAMg");
	this.shape_34.setTransform(81.8,113);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#44FFFF").s().p("AoJAhIg8g5IAKgIIA2A1IRLAAIAAAMg");
	this.shape_35.setTransform(94.6,113);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#44FFFF").s().p("AqJAhIg8g5IALgIIA2A1IVKAAIAAAMg");
	this.shape_36.setTransform(107.4,113);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#44FFFF").s().p("AsJAhIg8g5IALgIIA2A1IZKAAIAAAMg");
	this.shape_37.setTransform(120.2,113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29}]},12).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[]},3).to({state:[{t:this.shape_37}]},1).to({state:[]},2).to({state:[{t:this.shape_37}]},2).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(14).to({_off:false},0).wait(4).to({_off:true},1).wait(32));

	// 图层 3
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#44FFFF").s().p("AgoAZIA8g5IAVAAIAAALIgRAAIg1A2g");
	this.shape_38.setTransform(42,76.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#44FFFF").s().p("Ag3AZIA8g5IAzAAIAAALIgvAAIg1A2g");
	this.shape_39.setTransform(43.5,76.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#44FFFF").s().p("AhGAZIA9g5IBQAAIAAALIhMAAIg2A2g");
	this.shape_40.setTransform(45,76.9);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#44FFFF").s().p("AjdAZIA8g5IF/AAIAAALIl6AAIg2A2g");
	this.shape_41.setTransform(60.1,76.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#44FFFF").s().p("Al0AZIA8g5IKtAAIAAALIqoAAIg2A2g");
	this.shape_42.setTransform(75.2,76.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#44FFFF").s().p("AoLAZIA8g5IPbAAIAAALIvWAAIg2A2g");
	this.shape_43.setTransform(90.3,76.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#44FFFF").s().p("AqiAZIA8g5IUJAAIAAALI0EAAIg2A2g");
	this.shape_44.setTransform(105.4,76.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#44FFFF").s().p("As6AZIA9g5IY4AAIAAALI40AAIg2A2g");
	this.shape_45.setTransform(120.6,76.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38}]},7).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[]},3).to({state:[{t:this.shape_45}]},2).to({state:[]},2).to({state:[{t:this.shape_45}]},2).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(9).to({_off:false},0).wait(3).to({_off:true},1).wait(38));

	// 图层 4
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#44FFFF").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_46.setTransform(4.9,77.5);
	this.shape_46._off = true;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#44FFFF").s().p("AgFAwIAAhfIALAAIAABfg");
	this.shape_47.setTransform(4.9,65.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#44FFFF").s().p("AgoC3IAAk0IA8g5IAVAAIAAAKIgPAAIg3A3IAAEsg");
	this.shape_48.setTransform(8.5,51.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#44FFFF").s().p("AigC3IAAk0IA9g5IEEAAIAAAKIj+AAIg4A3IAAEsg");
	this.shape_49.setTransform(20.4,51.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#44FFFF").s().p("AkYC3IAAk0IA9g5IH0AAIAAAKIntAAIg4A3IAAEsg");
	this.shape_50.setTransform(32.4,51.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#44FFFF").s().p("AmPC3IAAk0IA8g5ILjAAIAAAKIrcAAIg4A3IAAEsg");
	this.shape_51.setTransform(44.4,51.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#44FFFF").s().p("AoHC3IAAk0IA9g5IPSAAIAAAKIvMAAIg4A3IAAEsg");
	this.shape_52.setTransform(56.4,51.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#44FFFF").s().p("Ap/C3IAAk0IA9g5ITBAAIAAAKIy6AAIg4A3IAAEsg");
	this.shape_53.setTransform(68.3,51.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#44FFFF").s().p("Ar2C3IAAk0IA8g5IWxAAIAAAKI2qAAIg4A3IAAEsg");
	this.shape_54.setTransform(80.3,51.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#44FFFF").s().p("AtuC3IAAk0IA9g5IagAAIAAAKI6aAAIg4A3IAAEsg");
	this.shape_55.setTransform(92.3,51.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#44FFFF").s().p("AvmC3IAAk0IA9g5IeQAAIAAAKI+KAAIg4A3IAAEsg");
	this.shape_56.setTransform(104.2,51.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46}]},7).to({state:[]},2).to({state:[{t:this.shape_46}]},2).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},3).to({state:[{t:this.shape_47}]},2).to({state:[{t:this.shape_48}]},2).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[]},1).to({state:[{t:this.shape_56}]},2).to({state:[]},2).to({state:[{t:this.shape_56}]},2).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(7).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(1).to({y:73.5},0).wait(1).to({y:69.5},0).to({_off:true},3).wait(35));

	// 图层 5
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#44FFFF").s().p("AhMB1QgNAAgKgJQgJgJAAgNIAAiFQAAgLAJgLQAKgJANAAIBLAAQACgMAJgKQAQgQAXAAQAXAAAQAQQARAQAAAXIACAFIABAJIAACFQABANgKAJQgIAJgNAAgAhbg+QgFAFgBAGIAACOQABAGAFAFQAFAFAFAAICkAAQAGAAAGgFQAEgFAAgGIAAh7IgFAHQgMAMgKADIgRAUQgDADgEgCIgBgBIgRgTQgOgFgLgPQgJgQAAgQIADgGIhQAAQgFAAgFAFgAAShdQgNANAAATQAAANAIANQAGAKAPAHIACABIAOARIAOgRIADgCQANgEAIgNQAHgLAAgPQAAgRgNgOQgMgNgUAAQgSAAgOANgAg9BYQgDgDADgEIA7g6IgZgXIgmAmQgEAEgEgEQgDgEADgDIAngmIgXgYQgEgDAEgEQADgDADADIA3A2IAMgPQAEgDAEADQADAEgDADIgPAOIAdAdIAgggQAEgEAEAEQADAEgDADIghAgIALALQAEAEgEADQgDADgDgDIguguIg6A6QAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAgAAggqQgJgIABgLQgBgLAJgIQAHgIALAAQALAAAIAIQAIAIAAALQAAALgIAIQgIAIgLAAQgLAAgHgIgAAmhJQgFAFAAAHQAAAHAFAFQAFAFAHAAQAHAAAFgFQAFgGABgGQgBgGgFgGQgEgFgIAAQgGAAgGAFg");
	this.shape_57.setTransform(18.6,92.7,1.549,1.549);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104.3,75.1,202.6,100.9);
// library properties:
lib.properties = {
	width: 205,
	height: 125,
	fps: 24,
	color: "#444444",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};
})(lib_Dl, createjs = createjs||{})
export default lib_Dl