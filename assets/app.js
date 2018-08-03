
$( document ).ready(function() {
    
var categories = ["Michael Jackson", "Volleyball", "Coffee", "Queen"];


function alertGifName() {
  var gifName = $(this).attr("data-name");

  alert(gifName);

  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=qDH1m9TnFOR7xhDx6InDvpxIxKSJTSnS&limit=10";

  //AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);

    var myGif = $("<div>");
    var rating = response.data.rating;
    myGif.html("rating: " + rating);
    
    var imageGif = $("<div>");
    var image = response.data
    imageGif.html(image);



});
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
};

$("#add-category").on("click", function(event) {

  event.preventDefault();
  var input = $("#category-input").val().trim();
  categories.push(input);
  renderButtons();


});

$(document).on("click", ".gif", alertGifName);

renderButtons();


});

