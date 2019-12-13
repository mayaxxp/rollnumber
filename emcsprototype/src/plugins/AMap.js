export default function MapLoader () {
	return new Promise((resolve, reject) => {
	    if (window.AMap) {
	      resolve(window.AMap)
	    } else {
	      var script = document.createElement('script')
	      script.type = 'text/javascript'
	//    script.async = true
				script.defer = true
	      script.src ='http://webapi.amap.com/maps?v=1.4.8&key=5223b5cb275676fa965a09bef4122d4a&plugin=AMap.Autocomplete,AMap.Geocoder,AMap.GraspRoad,AMap.Driving' 
	      script.onerror = reject
	      document.head.appendChild(script)
	      console.log("ppp:")
	      console.log(reject)
	    }
	    window.initAMap = () => {
	    	
	      resolve(window.AMap)
	    }
	}).then(
		function(res){
			console.log(res)
		}
	)
}
 
//    'http://webapi.amap.com/maps?v=1.4.8&key=5223b5cb275676fa965a09bef4122d4a&plugin=AMap.Autocomplete,AMap.Geocoder,AMap.GraspRoad,AMap.Driving'
//   'http://webapi.amap.com/maps?v=1.3&key=980aa3c043e6f347df9c36abfaa3ecb4&plugin=AMap.Autocomplete,AMap.Geocoder'