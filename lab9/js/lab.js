/*
*Authors: Andrew Dresel-Kurtz and
*Sophia Syed <sosyed@ucsc.edu>
*Created: 01 November
*License: Public Domain
*/
//task 2: step 2
//Use getElementById() to find your output <div> and
//assign it to a variable outputEl
var outputE1 = document.getElementById("output");
console.log("outputE1: :, outputE1");

// task 2: step 3
//Create a new element with document.createElement("p")
//and assign it to a variable new1El
var new1E1 = document.createElement("p");

// task 2: step 4
// Change the html attribute of new1El to say "something new."
new1E1.innerHTML = "<p>Something New</p>";
new1E1.id = "newOne";

// task 2: step 5
// Create another new element and assign it to a variable new2El
var new2E1 = document.createElementt("p");
new1E1.id = "newTwo";
// task 2: step 6
// Change the html attribute of new2El to say something else.
new2E1.innerHTML = "<p>Something else</p>";

//task 2: step 7
//Append both new elements one at a time using appendChild()
// to your output <div>
ouputE1.appendChild(new1E1);
outputE1.appendChild(new2E1);

// task 2: step 8
// change the css attributtes of at least 2 elements
new1El.style.color = "grey";
outputEl.style.border = "double 3px black";

outputEl.className = "changed";
}
