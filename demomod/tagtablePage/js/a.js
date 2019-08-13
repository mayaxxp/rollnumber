require.config({
    paths : { 
    	jquery : ["../../js/jquery-1.11.3"],
    	less:["../../js/less.min"], 
    	bkPageBar : ["../../js/bkPageBar"] 
    }
})
require(["jquery","less","bkPageBar"],function(jQuery,less,BkPageBar){
	 var ths=new BkPageBar("firstDiv");  
}) 
