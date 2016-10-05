jQuery.support.cors = true;

var GLOBAL_API_POSTS;
var GLOBAL_API_POST;


jQuery(document).ready(function($) {



    // All Pages
    $().UItoTop({ easingType: 'easeOutQuart'});

    $.ajax({
        url: "dev_config.json",
        data: {format : "json"},
        error: function () {
            console.log("Failed to assign config variables.");
        },
        success: function (data) {


            GLOBAL_API_POSTS = data[0].api_posts;
            GLOBAL_API_POST = data[0].api_post;


            console.log("Configuration variables set!");
            console.log(GLOBAL_API_POSTS);
            console.log(GLOBAL_API_POSTS + " " + typeof GLOBAL_API_POSTS); // For finding the type the var is, should expect String.
            console.log(GLOBAL_API_POST);
            // console.log(GLOBAL_API_POST + " " + typeof GLOBAL_API_POST); // For finding the type the var is, should expect String.

        }
    });



    /**************************************************
     * Index.html:                                    *
     *  - AJAX call to get data and populate on page. *
     **************************************************/

    $.ajax({

        url: "http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService/json/posts/all",
        data: { format: "json"},
        error: function () {
            console.log("Failed to retrieve JSON.");
        },
        success: function(data) {
              console.log(data); // List the data
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



    /**
     * Detail Page
     *  - Contains
     */

    // Added collapse function for dropdown
    $(".collapse").collapse();


    // Dynamic entry for post data.

      //  Preconditions:
      //   Assumes that api will only give one post = one JSON object.

      // Postconditions:
      //  Will add all relevant JSON information about the post.
    // $.ajax({
    //     url: GLOBAL_API_POST,
    //     data: { format: "json"},
    //     error: function () {
    //         console.log("Failed to retrieve post.");
    //     },
    //     success: function(data) {
    //     console.log(data);
    //
    //     var author = data[0].contributorAuthor;
    //     $('#author').append("<p>" + author + "</p>"); // fix so its not small or nested
    //     $('#title-author').append("&nbsp;" + author);
    //     console.log(author);
    //
    //     var title = data[0].title;
    //     $('#title').append("<p>" + title + "</p>"); // fix so its not small or nested
    //     $('#post-breadcrumb-title').append("<p>" + title + "</p>");
    //     $('#h1').prepend("&nbsp;" + title );
    //     console.log(title);
    //
    //     var dateCreated = data[0].dateCreated;
    //     $('#date-submit').append("<p>" + dateCreated + "</p>"); // fix so its not small or nested
    //     console.log(dateCreated);
    //
    //     var description = data[0].description;
    //     $('#description').append("&nbsp;" + description);
    //     console.log(description);
    //
    //     // Need to write an if loop for video-audio-docs.
    //     var assetVid = data[0].assetList[0].AssetLocation;
    //     // $('#video').append("<iframe src=" + assetVid + " width ='768' height='432'></iframe>");
    //     $('#video').append("<iframe src="+ assetVid +" width ='768' height='432'></iframe>")
    //
    //     console.log(assetVid);
    // },
    //     type: "GET"
    //
    // });




});
