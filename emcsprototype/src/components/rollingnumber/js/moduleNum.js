/**
 * @data-val="00000000"
 * Created by xxps on 2019/3/8.
 */
const getByClass=function(oParent, sClass){
    var aResult=[];
    let parent=document.getElementById(oParent)
    var aEle=parent.getElementsByTagName('*');
    for(var i=0;i<aEle.length;i++){
        if(aEle[i].className==sClass)
        {
            aResult.push(aEle[i]);
        }
    } 
    return aResult;
}
let moduleNum= {
 		 	initNumSty:function(id){
 				let allCont=document.getElementById(id)
				let data=""; 
				if((document.getElementById(id))){
					data=(document.getElementById(id)).getAttribute("data-val")
				};
				let last,stringOld,currNum; 
				let allInum=allCont.querySelectorAll(".inum")
				if(allInum.length==0){
					for(let a=0;a<data.length;a++){
						 currNum=data.substr(data.length-a-1,1); 
						let newNum = document.createElement("div");
				  		newNum.classList.add('inum')
				  		if(currNum=="."){
				  			newNum.setAttribute('style', 'visibility:visible;background-position-y:'+-16*9+'px;background-position-x:-10px')			  			
				  		}else if(currNum=="%"){
				  			newNum.setAttribute('style', 'visibility:visible;background-position-y:0px;background-position-x:-10px')			  			
				  		}else{
				  			last =Number(data.substr(data.length-a-1,1))-1;
							 if(last==-1){last=9} 
			  				newNum.setAttribute('style', 'visibility:visible;background-position-y:'+-16*last+'px;background-position-x:'+0+'px;')			  			
				  		} 
						allCont.appendChild(newNum)
					}
				}
				for(let i=0;i<data.length;i++){
					 stringOld=data.substr(data.length-i-1,1); 
					 if(stringOld=="."){
						last="."
						let par=document.getElementById(id)
						let allnodes=par.getElementsByClassName("inum");
						allnodes[i].style.cssText="visibility:visible;background-position-y:"+-16*9+"px;background-position-x:"+-10+"px";
					 } else if(stringOld=="%"){
						 last="%"
						 let par=document.getElementById(id)
						let allnodes=par.getElementsByClassName("inum");
						allnodes[i].style.cssText="visibility:visible;background-position-y:"+0+"px;background-position-x:"+-10+"px";
					 }else{
						 last =Number(data.substr(data.length-i-1,1))-1;
						 if(last==-1){last=9} 
						 let par=document.getElementById(id)
						let allnodes=par.getElementsByClassName("inum");
						allnodes[i].style.cssText="visibility:visible;background-position:0px "+-16*last+"px";
					 }
				}
			},  
			setNumCg: function(id ,data){ //动态赋值传值  手动触发 隐藏的 input》change事件
				let allCont=document.getElementById(id);
				let oldDataLength=0; 
				let nlth=data.length
				if((allCont.getAttribute("data-val")).length){
					oldDataLength=(allCont.getAttribute("data-val")).length;  
				}  
				if(nlth<oldDataLength){ 
					for(let n=oldDataLength;n>nlth;n--){
						allCont.removeChild(allCont.lastChild) 
					} 
				}else if(nlth>oldDataLength){
					let cz=data.length-oldDataLength
					for (let n=0;n<cz;n++) { 
						let newNum = document.createElement("div");
						newNum.classList.add('inum')
							newNum.setAttribute('style', "visibility:visible;background-position-y:"+0+"px;background-position-x:"+0+"px")			  			
				  		if(allCont){allCont.appendChild(newNum)}
					}   
				}  
				if(allCont){allCont.setAttribute("data-val",data)}
				this.initNumSty(id); 
			} 
		}	  
export default moduleNum 