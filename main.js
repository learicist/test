$(document).ready(function () {


	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=638cb6041dad3debd1f8ebe1b5d452d4", 
		function(json) {
			//$("#quote").html(json.quoteText);
			//$("#author").html(json.quoteAuthor);
			console.log(json);
		}
	);
	

});