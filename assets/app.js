  // Adding click event listen listener to all buttons
  $("button").on("click", function() {
    // Grabbing and storing the data-animal property value from the button

   var emotions = ["Sad", "Happy", "Excited" ];

   function displayEmotionInfo() {

    var emotion = $(this).attr("data-name");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=0hoZHjGnslK7szPcLQrV16m5xDrD4OPu&limit=25&rating=G" +
      emotion + "&api_key=0hoZHjGnslK7szPcLQrV16m5xDrD4OPu";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var emotionDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          var emotionImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          emotionImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the animalDiv
          emotionDiv.append(p);
          emotionlDiv.append(emotionImage);

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(emotionDiv);
        }
      });
  });
