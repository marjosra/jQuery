// Mark Ramirez
// SI 539
// jQuery Challenges
// 26 November 2019
// Challenge 2 jQuery

$("#useBilling").click(function(){
	if (this.checked){
		$("#home").val( $("#billing").val() );
		$("#home").attr("disabled", true);
	}
	else {
		$("#home").val("");
		$("#home").attr("disabled", false);
	}
})
