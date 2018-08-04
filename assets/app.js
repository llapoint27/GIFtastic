//TODO//
//make them static and when clicked they animate


$( document ).ready(function() {
    
var categories = ["Michael Jackson", "Volleyball", "Coffee", "Queen"];


function alertGifName() {
  var gifName = $(this).attr("data-name");

//   alert(gifName);

  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=qDH1m9TnFOR7xhDx6InDvpxIxKSJTSnS&limit=10";
console.log(queryURL);

  //AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);

    var results = response.data;

    for (var i = 0; i < results.length; i++) {


    //Div for my GIFs (maybe add class?)
    var myGif = $("<div>");

    //shows the rating
    var rateGif = (results[i].rating);
    var oneGif = $("<p>").text("Rating: " + rateGif);
    

    //shows the GIFs
    var imageGif = (results[i].images.fixed_height.url);
    var display = $("<img>").attr("src", imageGif);
    
    myGif.append(oneGif);
    myGif.append(display);

    $("#image-view").prepend(myGif);
  }
});
}

//function that displays the buttons
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

