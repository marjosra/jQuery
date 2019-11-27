// Mark Ramirez
// SI 539
// jQuery Challenges
// 26 November 2019
// Challenge 4 jQuery

$("form").submit(function(){
  let validInput = true;
  if ($("#fullname").val().length == 0){
      $("#nameerrormsg").css("display", "block");
      validInput = false;
  }
  else {
      $("#nameerrormsg").css("display", "none")
  }

  if ($("#streetaddr").val().length == 0){
      $("#addrerrormsg").css("display", "block");
      validInput = false;
  }
  else {
      $("#addrerrormsg").css("display", "none")
  }

  return validInput;
})
