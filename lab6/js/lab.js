/*
*author. Israel Renteria
*Date Created. 10/20/21
*/

//Declaring array and Objects
myTransports = ["walk", "bike", "bus", "Ford Taurus"];

myMainRide = {
  make : "Ford",
  model : "Taurus",
  year : 1994,
  age : function() {
    return 2021 - age;
  }
};

//Output
document.writeln("Getting around on: " + myTransports + "<br>");
document.writeln("My Main Ride : <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");
