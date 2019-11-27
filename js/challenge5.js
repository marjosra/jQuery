// Mark Ramirez
// SI 539
// jQuery Challenges
// 26 November 2019
// Challenge 5 jQuery

// Worked with Geoffrey Smith-Woollams and Ben Sutton

var msg = "Hover over an image below."

$("img").mouseover(function(){
	// console.log("Mouse over");
	$("#image").css("backgroundImage", "url('"+$(this).attr("src")+"')");
	$("#image").html($(this).attr("alt"));
})

$("img").focus(function(){
	// console.log("Focused");
	$("#image").css("backgroundImage", "url('"+$(this).attr("src")+"')");
	$("#image").html($(this).attr("alt"));
})

$("img").mouseleave(function(){
	// console.log("Mouse left");
	$("#image").css("backgroundImage", "");
	$("#image").html(msg);
})

$("img").blur(function(){
	// console.log("Blur");
	$("#image").css("backgroundImage", "");
	$("#image").html(msg);
})
