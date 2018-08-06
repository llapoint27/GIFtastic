//TODO
//make them static and when clicked they animate
//gifs places 5 in each column

$( document ).ready(function() {
    
var topics = ["Weezer", "Artic Monkeys", "Muse", "Foo Fights", "Red Hot Chili Peppers", "Nirvana", "Green Day", "Pearl Jam", "Radiohead", "Smashing Pumpkins", "The Killers", "Nine Inch Nails", "blink-182", "The Cure", "Gorillaz", "The White Stripes", "Pixies", "Langhorne Slim", "Cage The Elephant", "The Strokes", "Bush", "Jane's Addiction", "Rage Against The Machine", "Modest Mouse", "Rolling Stones", "Kings of Leon", "The Black Keys", "Alabama Shakes"];


function alertGifName() {
  var gifName = $(this).attr("data-name");
  $("#image-view").empty();

//   alert(gifName);

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=qDH1m9TnFOR7xhDx6InDvpxIxKSJTSnS&limit=10";
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
    var myGif = $("<div class='col-md-4'>");
    var clickGif = $("<img>");

    //shows the rating
    var rateGif = (results[i].rating);
    var oneGif = $("<p>").text("Rating: " + rateGif);
    

    //shows the GIFs
    var imageGif = (results[i].images.fixed_height.url);
    var display = clickGif.attr("src", imageGif);

    var staticSrc = (results[i].images.fixed_height_still.url);

    clickGif.attr("src", staticSrc);
    clickGif.attr("data-state", "still");
    clickGif.attr("data-still", staticSrc);
    clickGif.attr("data-animate", imageGif);
    

    myGif.append(clickGif);
    myGif.append(display);
    myGif.append(oneGif);

    $("#image-view").prepend(myGif);

  }
});
}

$(document).on("click", pausePlayGifs);

//Function accesses "data-state" attribute and depending on status, changes image source to "data-animate" or "data-still"
function pausePlayGifs() {
   var state = $(this).attr("data-state");
    if (state === "still") {
        
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");

    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
}
}

//function that displays the buttons
function renderButtons() {
  $("#buttons-view").empty();

  for (var i = 0; i < topics.length; i++) {


    var a = $("<button class='style'>");
    a.addClass("gif");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttons-view").append(a);
  }
};

$("#add-category").on("click", function(event) {

  event.preventDefault();
  var input = $("#category-input").val().trim();
  topics.push(input);
  renderButtons();

});

$(document).on("click", ".gif", alertGifName);

renderButtons();

});

