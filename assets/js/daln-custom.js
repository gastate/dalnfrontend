jQuery.support.cors = true;

// TODO: Write pre and post conditions as well as invariants.

/**
 * Global variables that come from dev_config.json to be used in the application.
 * Note that while these are global variables, Javascript WILL manipulate in the local function scope and mess up the global variable.
 * These variables are all set to be Deferred objects: https://api.jquery.com/category/deferred-object/. It seems Deferred Objects are being deprecated in favor of better design patterns, but Jquery is built on them and as long as the valid 1.5 version is there it is okay. I used it here since I didn't want to mess with Promises or go into Callback Hell: http://callbackhell.com/. Further explanation below.
 */

 // Need to check all cases for what's gonna be put into the config.
var GLOBAL_API_URL = $.Deferred();
var GLOBAL_API_POSTS = $.Deferred();
var GLOBAL_API_POST = $.Deferred();
var GLOBAL_API_CREATE_POST = $.Deferred();
var GLOBAL_UPLOAD_MEDIA = $.Deferred();


jQuery(document).ready(function($) {

    /**************************************************
     * All Pages:                                     *
     *  - Configuration variable setup.               *
     **************************************************/

    /**
     * getConfig() is an ajax GET call that will get dev_config.json and return the json to be used in assignConfig.
     * @return {Object} data [returns a JSON Object to be parsed.]
     */
    function getConfig() {
        return $.ajax({
            url: "dev_config.json",
            data: {format : "json"},
            type: 'GET'
        });
    }

    /**
     * assignConfig() sets the global variables by getting the name-value pairs in the JSON. It is the "decoupled" function, meaning that it could've been used in getConfig() above, but we want to have the actual handling of the data separate from retriving the data, so we "decouple" it.
     * @param  {Object} data [JSON Object data given by getConfig().]
     * @return {Object} var  [Technically, the global variables are objects so this will return a Deferred Object, however we can use it as Strings.]
     */
    function assignConfig(data) {

        /*******************************************************************************
         * TODO:                                                                       *
         *  - API_POST needs to be query executed                                      *
         *  - Need to check for valid JSON somewhere. either another function or here. *
         *                                                                             *
         *******************************************************************************/
        GLOBAL_API_URL = data[0].api_url;
        GLOBAL_API_POSTS = data[0].api_posts;
        GLOBAL_API_POST = data[0].api_post;
        GLOBAL_API_CREATE_POST = data[0].api_create_post;
        GLOBAL_UPLOAD_MEDIA = data[0].api_upload_media;
    }

    var configConfirm = getConfig().done(assignConfig); // This is a callback to the getConfig() function. Once getConfig() completes, assignConfig() will run. After this, var config will be able to use for multiple callbacks, other functions, events, or errors that we want to do.

    // TODO: CLient-side error message.

    // Here we just log that the config succeeds and the variables are what we want them to be.
    configConfirm.done(function configSuccess(){
        console.log("Configuration variables set!");
        console.log("All posts endpoint: " + GLOBAL_API_POSTS + "\nType: " + typeof GLOBAL_API_POSTS);
        console.log("Single post endpoint: " + GLOBAL_API_POST + "\nType: " + typeof GLOBAL_API_POST);
    });

    // If assigning the config variables fail, we pass the error here to debug.
    configConfirm.fail( function configError(){
        console.log("Failed to assign configuration values. Current endpoints and types:");
        // TODO: write fail variables in log.

        // Use to find out if  GLOBAL_API_POSTS is undefined.
        // console.log(GLOBAL_API_POSTS);
    });

    /**************************************************
     * Index.html:                                    *
     *  - Populates page with random posts or ones    *
     *  from a collection.                            *
     **************************************************/

    // Now that the config variables are set, we can use functions on different pages.
    configConfirm.done(function changePages(data) {


    function getPosts() {
        return $.ajax({
            url: GLOBAL_API_POSTS,
            data: { format: "json"},
            type: 'GET'
        });
    }

    function videoHandle (video) {
        return (video['assetType'] === 'Audio/Video' && video['assetEmbedLink'] !== undefined);

    }

    function audioHandle (audio) {
        return audio['assetType'] === 'Audio' && audio['assetEmbedLink'] !== undefined;
    }

    function docHandle (doc) {
        return doc['assetType'] === 'Text' && doc['assetEmbedLink'] !== undefined;
    }

    function assetHandler (htmlIn, i, assetList) {

        // Use Arrays.prototype.find() to get the first value to use as a display for each post.
        if (assetList.find(videoHandle)) {
            // console.log("Found Video");
            // console.log(assetList.find(videoHandle)["assetLocation"]);
            var videoAsset = assetList.find(videoHandle)["assetEmbedLink"];
            htmlIn = getVideoEmbed(videoAsset);
            return htmlIn;

        } else if (assetList.find(audioHandle)){
            // console.log("Found Audio");
            // console.log(assetList.find(audioHandle)["assetLocation"]);
            var audioAsset = assetList.find(audioHandle)["assetEmbedLink"];
            htmlIn = getAudioEmbed(audioAsset);
            return htmlIn;

        } else if (assetList.find(docHandle)) {
            // console.log("Found Text");
            return null;
        } else {
            // console.log("No File");
            return null;

        }
    }

    function getVideoEmbed (convertURI) {

        var videoURI = convertURI;

        return "<iframe class='sproutvideo-player' type='text/html' src='"+ videoURI +"' width='270' height='135' frameborder='0'></iframe>";
    }


    function getAudioEmbed (matchURI) {

    // matchURI is the assetLocation of the audio asset we wish to match with the soundcloud embed\
    // console.log(matchURI);


    var numberPattern = /\d+/g; // use this as our regex pattern
    var audioURI = matchURI.match(numberPattern); // use String.match to get the track id of the soundcloud post and return an array of the matched number of the track id
    // console.log(audioURI); // return an array of one element containing the id of the soundcloud track

    return "<iframe width='270' height='135' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+ audioURI +"&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>"

    }

    function listPosts(data) {
        //  console.log(data); // List the data
        var size = Object.keys(data).length - 1; // amount of Objects in the data. MAY NOT WORK IN IE.

        // var size;
        // var i;
        //
        // for (i in data) {
        //     if (data.hasOwnProperty(i)) {
        //         size++;
        //     }
        // }
        // console.log(size);

        var items = [];

        // console.log(data); // see the actual data received
        //console.log(size); // total posts in the database.

        var paginate;

        if(size > 30) {
            paginate = 30;
        } else {
            paginate = size - 1;
        }


          for(var i=0; i <= paginate; i++) { // TODO: replace 32 with size once API is paginated.

             // TODO: check for undefineds
             var htmlIn; // variable to get the asset to be displayed on the list.

             var listTitle;
             var listDesc;
             var listId;
             var assetList;

             // try to assign the variables, if anything returns undefined or unexpected, then we skip it.

             try {
                 listTitle = data[i].title;
                 listDesc = data[i].description;
                 listId = data[i].postId;
                 assetList = data[i].assetList;
            } catch (e) {
                // TODO: manage bigger expectations between DALN posts and our posts
                console.log(data[i].title); // log the title
                i++; // skip the post with problems.
            }

            //  console.log(assetList); // get assetList array
             var displayThumb = assetHandler(htmlIn, i, assetList); // displayThumb holds the html code to be put in.


            var postLink = "javascript: onClicks();"; // variable to contain the actual html containing the asset.



            if (displayThumb !== null) {
                displayThumb;
            } else {
                displayThumb = "<a href='assets/img/bootstrap-mdo-sfmoma-01.jpg' class='zoom' rel='prettyPhoto' title='Not Video File'></a><a href='"+ postLink + "' id='"+ listId +"' class='link'></a><a class='thumbnail' href='"+ postLink + "'><img src='assets/img/example-sites/example1.jpg' alt='example-item'></a>";
            }

              // PROBLEMS WITH UNDEFINED NOT UNDEFINED. Possible cause: quotes.
              if( listTitle === undefined || listDesc === undefined) { // Should never happen since every post must at least have a title. But we put it here to make sure we don't break at an undefined.
              items.push("<li class='span3 item-block'>"+ displayThumb +"<div class='desc'><a href='"+ postLink + "' id = '"+ listId +"'> Untitled </a> <p> <em> No description</em> </p> </div> </li>" );
            } else if (listTitle === undefined) {
            listDesc = listDesc.substring(0,41);
            items.push("<li class='span3 item-block'>"+ displayThumb +"<div class='desc'><a href='"+ postLink + "' id='"+ listId +"' '>Untitled</a> <p> <em>"+ listDesc +"</em> </p> </div> </li>" );
        } else if (listDesc === undefined) {
            listTitle = listTitle.substring(0,19);
            items.push("<li class='span3 item-block'>"+ displayThumb + "<div class='desc'><a href='"+ postLink +"' id='"+ listId +"' >"+ listTitle +"</a> <p> <em> No description</em> </p> </div> </li>" );
        } else {
                listTitle = listTitle.substring(0,19);
                listDesc = listDesc.substring(0,41);
                items.push( "<li class='span3 item-block'>"+ displayThumb +"<div class='desc'><a href='"+ postLink + "'     id='"+ listId +"'>" + listTitle + "</a> <p> <em>"+ listDesc +"</em> </p> </div> </li>" );
            }

          }

            for(var j=0; j <= items.length; j++) {
                $(".thumbnails").append(items[j]);
            }

            //console.log("Posts loaded successfully.");

        $(listId).click(function () {
            console.log("Hello");
        });

    }



    var listConfirm = getPosts().done(listPosts);

    listConfirm.done(function listPostsSucceed(){
        console.log("Succeeded to retrieve JSON posts.");
    });


    listConfirm.fail(function listPostsFail() {
        console.log("Failed to retrieve JSON posts.");
    });




    /***********************************
     * Detail Page.html                *
     *  - Contains an individual post. *
     ***********************************/

    // Added collapse function for dropdown
    $(".collapse").collapse();


    // Dynamic entry for post data.

    function getPost() {
        return $.ajax({
            url: GLOBAL_API_POST,
            data: { format: "json"},
            type: 'GET'
        });
    }

    function displayPost(data) {
        console.log(data);

        var author = data[0].contributorAuthor;
        var dateCreated = data[0].dateCreated;
        var title = data[0].title;
        var assetVid = data[0].assetList[0].assetLocation;
        var description = data[0].description;


        $('#author').append("<p>" + author + "</p>"); // fix so its not small or nested
        $('#title-author').append("&nbsp;" + author);
        console.log(author);

        $('#title').append("<p>" + title + "</p>"); // fix so its not small or nested
        $('#post-breadcrumb-title').append("<p>" + title + "</p>");
        $('#h1').prepend("&nbsp;" + title );
        console.log(title);

        $('#date-submit').append("<p>" + dateCreated + "</p>"); // fix so its not small or nested
        console.log(dateCreated);

        $('#description').append("&nbsp;" + description);
        console.log(description);

        // Need to write an if loop for video-audio-docs.
        // $('#video').append("<iframe src=" + assetVid + " width ='768' height='432'></iframe>");
        $('#video').append("<iframe src="+ assetVid +" width ='768' height='432'></iframe>")
    }

});



});
