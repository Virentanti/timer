//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "2 dec 2023 00:00:01",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	