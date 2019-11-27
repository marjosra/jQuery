// Mark Ramirez
// SI 539
// jQuery Challenges
// 26 November 2019
// Challenge 3 jQuery

// Worked with Geoffrey Smith-Woollams and  Ben Sutton

$("form").submit(function(){
  if ($('input[name="fruit"]').is(':checked')){
  }
  else{
    alert("You must pick a fruit!")
    return false;
  }
  if ($('input[name="standing"]').is(':checked')){
  }
  else{
    alert("You must pick a standing!")
    return false;
  }
})
