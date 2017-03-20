var counter = 0;
var ids = [];
var prints = true;
var play = true;

function tweet() {

	$.get("http://localhost:3000/feed", function(data){
		for (i = 0; i < 100; i++){
			// for(k = 0; k < 100; k++){
			// 	if(ids[k] == data[i].user.id){
			// 		prints = false;
			// 	}
			// }
			if (data[i] != data[i-1]){
				//ids.push(data[i].user.id);
				//$("#container").prepend("<div class =\"animated zoomInDown\"> <img src=\"" + data[i].user.profile_image_url + "\">" 
				//+ "<a href=\"https://twitter.com/" + data[i].user.screen_name + "\">" + "@" + data[i].user.screen_name + ": " 
				//+ "</a>" + data[i].text + "</div>");
				//$("#container").prepend("<hr>");
				//ids.push(data[i].user.id);
				$("#container").prepend("<div class=\"media animated zoomInDown\">"

			  		+ "<div class=\"media-left\">" 
			  			+ "<img src=\"" + data[i].user.profile_image_url + "\" class=\"media-object img-rounded\" style=\"width:60px\">"
				  	+ "</div>"
				  	+ "<div class=\"media-body\">"
				    	+ "<h4 class=\"media-heading\">"
				    		+ "<a href=\"https://twitter.com/" + data[i].user.screen_name + "\">" + "@" + data[i].user.screen_name + ": " + "</a>"
				    	+ "</h4>"
				    	+ "<p>" + data[i].text + "</p>"
				  	+ "</div>"
				+"</div>")
				$("#container").prepend("<hr>");
				
			}
			sleep(1);
		}
	});



}
var pause = setInterval(tweet, 2000);

$("#pause").click(function(){ 
	if (play == true){
		clearInterval(pause);
		play = false;
		$("#closeball").show()
		$("#openball").hide()
	}
	else{
		pause = setInterval(tweet, 2000);
		play = true;
		$("#openball").show()
		$("#closeball").hide()
	}
});

//$("#play").click(function(){ 
//	pause = setInterval(tweet, 2000);
//});

//https://twitter.com/ToriKelly