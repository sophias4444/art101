/*
*Authors : Monique Salinas <mnsalina@ucsc.edu> &
*Sophia Syed <sosyed@ucsc.edu>
*Created : 3 November
*License : Public Domain
*/
function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    userName.toLowerCase();
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    // Note that I could have done this in a single line
    // userName.toLower().split("").sort().join("")
    return nameSorted;
}

// Attach an event listener to your button
var buttonEl = document.getElementById("mybutton");
buttonEl.addEventListener("click", putNameInTitle(){
  // Gets the value of your input field
  var userName = inputEl.value;
  // Runs that value through your sort() or anagram() function and saves the results.
  var shuffledName = sortUserName(userName);
  // Replaces the html in <div id=output> with the results
  outputEl.innerHTML = "<div id=name-results>"+ shuffledName + "</div">
  document.writeln("Here is your new name: " , sortUserName() , "</br>");
});
