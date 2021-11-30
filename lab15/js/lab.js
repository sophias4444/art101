/*
* Author: Sophia Syed <sosyed@ucsc.edu>
* Created: 11.29.21
* License : Public Domain
* Lab 15: AJAX
*/
var myUrl = "https://catfact.ninja/fact/";

$("#activate").click(callAjax);

function callAjax() {
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: myUrl,
      //GET request
      type: "GET",
      // data type we expect back
      dataType : "json",
  })
  .done(function(data) {
      console.log("Success:", data);
      $("#output").append("<p>" + data.fact + "<br>");
  })
  // if the request fails
  .fail(function(request,error) {
      console.log(request, error);
      $("#output").html("Error")
	})
}
