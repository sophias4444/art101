/*
* Authors: Sophia Syed <sosyed@ucsc.edu> &
* Vivian Zheng < @ucsc.edu>
* Created: 11.07.21
* License : Public Domain
*/

// add a click event to each button
$("#challenge").append("<button id='r-button1'>Click here!</button>");
$("#problems").append("<button id='r-button2'>Click here!</button>");
$("#results").append("<button id'r-button3'>Click here!</button>");

$("#r-button1").click(function(){
  // toggle a class special within the <div> of the section
  $(this).parent().toggleClass("special");
})

$("#r-button2").click(function(){
  // toggle a class special within the <div> of the section
  $(this).parent().toggleClass("special");
})

$("#r-button3").click(function(){
  // toggle a class special within the <div> of the section
  $(this).parent().toggleClass("special");
})
