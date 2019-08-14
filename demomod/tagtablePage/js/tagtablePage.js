require.config({
    paths:{
    	jquery : ["../../js/jquery-1.11.3"],
    	less:["../../js/less.min"],
    	Mytabtag : ["js/Mytabtag"],
    	bootstrap:["../../bootstrap-3.3.7-dist/js/bootstrap.min"]
    }
});

require(["jquery","less","Mytabtag"],function(jquery,less,Mytabtag){ 
	require(["bootstrap"]);
	(function($){
		$("tbody td").each(function(){
			var this_=this;
			var oldtext='';
			var time_ ;
			$(this).hover(
				function(){
					oldtext=$(this_).text();  
					var newtext=oldtext; 
					if(oldtext.length<=12){
						return;
					}
					time_=setInterval(function(){ 
						newtext=newtext.slice(1)+newtext.slice(0,1)
						$(this_).text(newtext);
						//console.log(newtext)
					}, 200); 
				},
				function(){
					clearInterval(time_);
					if(oldtext!=""){
						$(this_).text(oldtext);
					}
 
				}
			)
		})
	})(jquery);
})
 