/*
* Author: Sophia Syed <sosyed@ucsc.edu>
* Created: 11.15.21
* License : Public Domain
* Lab 12: conditionals
*/
function sortingHat(str){
  var len = str.length;
  var mod = len % 4;
  if (mod == 0){
    return "Gryffindor";
  }
  else if (mod == 1){
    return "Ravenclaw";
  }
  else if (mod == 2){
    return "Slytherin";
  }
  else if (mod == 3){
    return "Hufflepuff";
  }
}

var myButton = $("#button");
myButton.click(function(){
  var name = $("#input").val();
  var house = sortingHat(name);
  var newText = "<p>The House the Sorting Hat has sorted you into is " + house +"</p>";
  $("#output").html(newText);     
});
