
$( document ).ready(function() {
    
var categories = ["Michael Jackson", "Volleyball", "Coffee", "Queen"];



function alertGifName() {
  var gifName = $(this).attr("data-name");

  alert(gifName);

//add queryURL
//addAJAX call
//.then function

}

function renderButtons() {
  $("#buttons-view").empty();

  for (var i = 0; i < categories.length; i++) {


    var a = $("<button>");
    a.addClass("gif");
    a.attr("data-name", categories[i]);
    a.text(categories[i]);
    $("#buttons-view").append(a);
  }
}

$("#add-category").on("click", function(event) {

  event.preventDefault();
  var input = $("#category-input").val().trim();
  categories.push(input);
  renderButtons();

});

$(document).on("click", ".gif", alertGifName);

renderButtons();


});

