

$('.panda').click(function(){
		var myData1 = $(this).attr("data-type");
		var myData2 = $(this).attr("data-tendance");
		if (myData1 == undefined) {
			alert("Whattt ???");
		} else {
			alert("Ce panda est de type: " + myData1 + " et de tendance: " + myData2);
		}
		
	})


	 
