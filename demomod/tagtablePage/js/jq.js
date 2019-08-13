require.config({
    paths : {
    	jquery : ["../../js/jquery-1.11.3"]
    }
});
require(["jquery"],function(jquery){ 
	(function($){
		$('tbody td').each(function(){
			$(this).hover(
				function(){console.log("123")},
				function(){console.log("456")}
			)
		})
	})(jquery);
})
