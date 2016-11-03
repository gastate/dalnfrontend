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

    // $().UItoTop({ easingType: 'easeOutQuart'}); // function from template that handles easing for uitotop button.


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
        return (video['Asset Type'] === 'Audio/Video' && video['Asset Location'] !== undefined) ;
    }

    function audioHandle (audio) {
        return audio['Asset Type'] === 'Audio' && audio['Asset Location'] !== undefined;
    }

    function docHandle (doc) {
        return doc['Asset Type'] === 'Text' && doc['Asset Location'] !== undefined;
    }

    function assetHandler (i , assetList) {

        // Use Arrays.prototype.find() to get the first value to use as a display for each post.
        if (assetList.find(videoHandle)) {
            // console.log("Found Video");
            // console.log(assetList.find(videoHandle)["Asset Location"]);
            return assetList.find(videoHandle)["Asset Location"];
        } else if (assetList.find(audioHandle)){
            // console.log("Found Audio");
            // console.log(assetList.find(audioHandle)["Asset Location"]);
            return assetList.find(audioHandle)["Asset Location"];
        } else if (assetList.find(docHandle)) {
            // console.log("Found Text");
            return null;
        } else {
            // console.log("No File");
            return null;

        }
    }

    function getVideoEmbed (convertURI) {

        // console.log(convertURI); // current API url to be found using Sprout
        // https://mwharker.vids.io/videos/e89bd0bf1d1de1cb60/25c44ded-91bd-40c0-9b85-600ccdbce9bb

        // var player = new SV.Player({videoId: 'e89bd0bf1d1de1cb60'});
        var videoURI = "http://videos.sproutvideo.com/embed/2898d2bb141ce2c990/2a3ed5a6d9baecd1?type=sd";



        return "<iframe class='sproutvideo-player' type='text/html' src='"+ videoURI +"' width='270' height='135' frameborder='0'></iframe>";
    }

    function getAudioEmbed (matchURI) {
//         https://api.soundcloud.com/tracks?client_id=2b9b6641f376ef230312ec09259e2146
//
//         http://api.soundcloud.com/tracks/288649343?client_id=2b9b6641f376ef230312ec09259e2146
//
//         http://soundcloud.com/user-15072191/9b5cd16a-03db-41db-bfe3
//
// <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/288649343&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
    }

    function listPosts(data) {
        //  console.log(data); // List the data
        var size = Object.keys(data).length; // amount of Objects in the data. MAY NOT WORK IN IE.
        var items = [];

        //console.log(size); // total posts in the database.
          // get all the titles and descriptions of the posts.
          for(var i=0; i <= 20; i++) {

             var listTitle = data[i].title;
             var listDesc = data[i].description;

             var listId = data[i].postId; // get the postId

             var assetList = data[i].assetList;
            //  console.log(assetList); // get assetList array
             var displayThumb = assetHandler(i, assetList); // get the asset to be displayed on the list.
            //  console.log(displayThumb); Check string value to return.


            // Audio asset embed:
            // - match json asset id with the curl id of soundcloud using arrays.filter
            // - get the uri
            // - post uri there
              var postLink = GLOBAL_API_POST.concat("/").concat(listId); // concatenate the two strings for url use; might be bad to use "/".
            // //console.log(listId); // To look at postIds.
            // Example url: http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService/posts/930da322-d6f6-4428-9969-fc8605428474

            // The actual HTML string to put into the list tag.
            var htmlIn;

            if (displayThumb !== null) {
                htmlIn = getVideoEmbed(displayThumb);
            } else {
                htmlIn = "<a href='assets/img/bootstrap-mdo-sfmoma-01.jpg' class='zoom' rel='prettyPhoto' title='Not Video File'></a><a href='"+ postLink + "'class='link'></a><a class='thumbnail' href='"+ postLink + "'><img src='assets/img/example-sites/example1.jpg' alt='example-item'></a>";
            }

              // PROBLEMS WITH UNDEFINED NOT UNDEFINED. Possible cause: quotes.
              if( listTitle === undefined || listDesc === undefined) { // Should never happen since every post must at least have a title. But we put it here to make sure we don't break at an undefined.
              items.push("<li class='span3 item-block'>"+ htmlIn +"<div class='desc'><a href='"+ postLink + "'> Untitled </a> <p> <em> No description</em> </p> </div> </li>" );
            } else if (listTitle === undefined) {
            listDesc = listDesc.substring(0,41);
            items.push("<li class='span3 item-block'>"+ htmlIn +"<div class='desc'><a href='"+ postLink + "'>Untitled</a> <p> <em>"+ listDesc +"</em> </p> </div> </li>" );
        } else if (listDesc === undefined) {
            listTitle = listTitle.substring(0,19);
            items.push("<li class='span3 item-block'>"+ htmlIn + "<div class='desc'><a href='"+ postLink +"'>"+ listTitle +"</a> <p> <em> No description</em> </p> </div> </li>" );
        } else {
                listTitle = listTitle.substring(0,19);
                listDesc = listDesc.substring(0,41);
                items.push( "<li class='span3 item-block'>"+ htmlIn +"<div class='desc'><a href='"+ postLink + "'>" + listTitle + "</a> <p> <em>"+ listDesc +"</em> </p> </div> </li>" );
            }

          }

            for(var j=0; j <= items.length; j++) {
                $(".thumbnails").append(items[j]);
            }

            //console.log("Posts loaded successfully.");

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


    // click post, get the id of that post and append it to the url.

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
        var assetVid = data[0].assetList[0].AssetLocation;
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
