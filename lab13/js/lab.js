/*
* Author: Sophia Syed <sosyed@ucsc.edu>
* Created: 11.15.21
* License : Public Domain
* Lab 13: Loops
*/
var result = "";
function fizzBuzz(){
  var output = $("#output").val();

  var displayHTML = "";
  for (var i = 1; i <= 200; i++){
    num = i;
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
      result = "FizzBuzzBoom!";
    } else if (i % 3 && i % 5 == 0) {
      result = "FizzBuzz!";
    } else if (i % 3 == 0 && i % 7 == 0) {
      result = "FizzBoom!"
    } else if (i % 5 == 0 && i % 7 == 0) {
      result = "BuzzBoom";
    } else if (i % 3 == 0){
      result = "Fizz!";
    } else if (i % 5 == 0){
      result = "Buzz!";
    } else if (i % 7 == 0){
      result = "Boom!";
    } else {
      result = "";
    }
    displayHTML += "<p>" + i + " - " + result + "</p>";
    }

    $("#output").html(displayHTML);

}
