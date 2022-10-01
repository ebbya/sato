jQuery(document).ready(function($){
	$("#timerbutton").click(function(){
		$("#timeinput").hide();
		$("#timerbutton").hide();
		var time = document.getElementById('timeinput').value;
		document.getElementById("output").innerHTML = time; 
		
	});
});
