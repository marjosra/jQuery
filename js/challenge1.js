// Mark Ramirez
// SI 539
// jQuery Challenges
// 26 November 2019
// Challenge 1 jQuery

$("#subscribe").click(function(){
	if (this.checked){
		$("#emailField").css("display", "block");
	}
	else{
		$("#emailField").css("display", "none");
	}
});
