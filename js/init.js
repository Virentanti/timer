//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "2 dec 2023 01:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	