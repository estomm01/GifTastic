$(document).ready(function () {
  var emotion ='';
  var emotions = ["Sad", "Happy", "Excited"];

  function renderButtons() {
    $("#buttons-vew").empty()
    //loops through the entire arrive using element
    emotions.forEach(element => {
      //dymanically creating a button
      var button = $("<button>");
      button.text(element);
      button.attr("emotion", element);
      button.addClass("emotions");
      $("#buttons-view").append(button);

    });

  };

  renderButtons()




  $(document).on("click", ".emotions", function () {
    emotion = $(this).attr("emotion");
    console.log(emotion)

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&limit=25&offset=0&rating=G&lang=en";
    queryURL += "&api_key=0hoZHjGnslK7szPcLQrV16m5xDrD4OPu";

    //   // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"

    })
      //After data comes back from the request
    .then(function (response) {
      console.log(queryURL);

      var results = response.data;
      console.log(results);
      //Looping through each result item
      for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
        var emotionDiv = $("<div>");
          //   // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);

          //  Creating and storing an image tag
        var emotionImage = $("<img>");
        /add image tag and append

        ////////////////////////////////////////////////////////////////////////////
        emotionImage.attr("src", results[i].images.fixed_height.url);
        emotionDiv.append(p);
        emotionlDiv.append(animalImage);

      }
        //create an emotionImage.attr for still, animate, and state giphys
        $(".gif").on("click", function() {
        //   // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
          var state = $(this).attr("data-state");
        //   // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        //   // Then, set the image's data-state to animate
        //   // Else set src to the data-still value
          if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
          } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
          }

          emotionImage.attr("src", results[i].images.fixed_height.url);


              emotionDiv.append(p);
              emotionlDiv.append(emotionImage);




        });
    });
  });


});
