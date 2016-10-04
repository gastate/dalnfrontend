

jQuery(document).ready(function($) {

    // All Pages
    $().UItoTop({ easingType: 'easeOutQuart'});


    /**************************************************
     * Index.html:                                    *
     *  - AJAX call to get data and populate on page. *
     **************************************************/


    // $.getJSON( "data.json", function( data ) {
    // //   console.log(data); // List the data
    //   var size = Object.keys(data).length; // amount of Objects in the data. MAY NOT WORK IN IE.
    //   var items = [];
    //
    //
    //   // get all the titles and descriptions of the posts.
    //   for(var i=0; i <= 29; i++) {
    //
    //       var listtitle = data[i].title;
    //       var listdesc = data[i].description;
    //
    //       if( typeof(listtitle) != 'undefined' || typeof(listdesc) != 'undefined') {
    //     //   console.log(listtitle + " | " + listdesc);
    //       items.push( "<li class= 'span3 item-block'> <div class='desc'><a href='#'>" + listtitle + "</a> <p> <em>" + listdesc +"</em> </p> </div> </li>" );
    //   } else if (typeof(listtitle) == 'undefined') {
    //     //   console.log("No title | " + listdesc);
    //     items.push( "<li class= 'span3 item-block'> <div class='desc'><a href='#'> No Title </a> <p> <em>" + listdesc +"</em> </p> </div> </li>" );
    // } else {
    //         // console.log(listtitle + "| No description.");
    //         items.push( "<li class= 'span3 item-block'> <div class='desc'><a href='#'>" + listtitle + "</a> <p> <em> No description </em> </p> </div> </li>" );
    //     }
    //     // console.log(items);
    //
    //   }
    //
    // for(var j=0; j <= items.length; j++) {
    //     $(".thumbnails").append(items[j]);
    // }
    //
    // });

    $.ajax({
        url: "data.json",
        data: { format: "json"},
        error: function () {
            console.log("Nah man.");
        },
        success: function( data ) {
            //   console.log(data); // List the data
            var size = Object.keys(data).length; // amount of Objects in the data. MAY NOT WORK IN IE.
            var items = [];


              // get all the titles and descriptions of the posts.
              for(var i=0; i <= 29; i++) {

                  var listtitle = data[i].title;
                  var listdesc = data[i].description;

                  if( typeof(listtitle) != 'undefined' || typeof(listdesc) != 'undefined') {
                //   console.log(listtitle + " | " + listdesc);
                  items.push( "<li class= 'span3 item-block'> <div class='desc'><a href='#'>" + listtitle + "</a> <p> <em>" + listdesc +"</em> </p> </div> </li>" );
                } else if (typeof(listtitle) == 'undefined') {
                //   console.log("No title | " + listdesc);
                items.push( "<li class= 'span3 item-block'> <div class='desc'><a href='#'> No Title </a> <p> <em>" + listdesc +"</em> </p> </div> </li>" );
                } else {
                    // console.log(listtitle + "| No description.");
                    items.push( "<li class= 'span3 item-block'> <div class='desc'><a href='#'>" + listtitle + "</a> <p> <em> No description </em> </p> </div> </li>" );
                }
                // console.log(items);

              }

                for(var j=0; j <= items.length; j++) {
                    $(".thumbnails").append(items[j]);
                }

                console.log("Posts loaded successfully.");
            },
            type:"GET"
        });



    // Detail Page

    // Added collapse function for dropdown
    $(".collapse").collapse();


    // Dynamic entry for post data.
    $.getJSON('data-detail.json', function (objData) {

      //  Preconditions:
      //   Assumes that api will only give one post = one JSON object.

      // Postconditions:
      //  Will add all relevant JSON information about the post.

        console.log(objData);

        var author = objData[0].contributorAuthor;
        $('#author').append("<p>" + author + "</p>"); // fix so its not small or nested
        $('#title-author').append("&nbsp;" + author);
        console.log(author);

        var title = objData[0].title;
        $('#title').append("<p>" + title + "</p>"); // fix so its not small or nested
        $('#post-breadcrumb-title').append("<p>" + title + "</p>");
        $('#h1').prepend("&nbsp;" + title );
        console.log(title);

        var dateCreated = objData[0].dateCreated;
        $('#date-submit').append("<p>" + dateCreated + "</p>"); // fix so its not small or nested
        console.log(dateCreated);

        var description = objData[0].description;
        $('#description').append("&nbsp;" + description);
        console.log(description);

        // Need to write an if loop for video-audio-docs.
        var assetVid = objData[0].assetList[0].AssetLocation;
        // $('#video').append("<iframe src=" + assetVid + " width ='768' height='432'></iframe>");
        $('#video').append("<iframe src="+ assetVid +" width ='768' height='432'></iframe>")

        console.log(assetVid);
    });




});
