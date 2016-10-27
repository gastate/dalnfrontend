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
        ////console.log("Configuration variables set!");
        //console.log("All posts endpoint: " + GLOBAL_API_POSTS + "\nType: " + typeof GLOBAL_API_POSTS);
        //console.log("Single post endpoint: " + GLOBAL_API_POST + "\nType: " + typeof GLOBAL_API_POST);
    });

    // If assigning the config variables fail, we pass the error here to debug.
    configConfirm.fail( function configError(){
        //console.log("Failed to assign configuration values. Current endpoints and types:");
        // TODO: write fail variables in log.

        // Use to find out if  GLOBAL_API_POSTS is undefined.
        // //console.log(GLOBAL_API_POSTS);
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

    function listPosts(data) {
        //console.log(data); // List the data
        var size = Object.keys(data).length; // amount of Objects in the data. MAY NOT WORK IN IE.
        var items = [];

        //console.log(size); // total posts in the database.
          // get all the titles and descriptions of the posts.
          for(var i=0; i <= 20; i++) {

              var listTitle = data[i].title;
              var listDesc = data[i].description;

              var listId = data[i].postId; // get the postId
            // jqeury for each function: iterate through, get video, hten audio, then text (place a picture for text)
            // for video, copy default iframe and put in id
            // same for audio

            // Audio asset embed:
            // - match json asset id with the curl id of soundcloud
            // - get the uri
            // -

             sounds = [
    {
        "kind": "track",
        "id": 290085421,
        "created_at": "2016/10/26 17:44:41 +0000",
        "user_id": 158644866,
        "duration": 221041,
        "commentable": true,
        "state": "finished",
        "original_content_size": 5304427,
        "last_modified": "2016/10/26 17:44:43 +0000",
        "sharing": "public",
        "tag_list": "Blues",
        "permalink": "marvin-se-joga-extend-daddo-dj",
        "streamable": true,
        "embeddable_by": "all",
        "downloadable": true,
        "purchase_url": null,
        "label_id": null,
        "purchase_title": null,
        "genre": "",
        "title": "MARVIN - SE JOGA - EXTEND DADDO DJ",
        "description": "",
        "label_name": null,
        "release": null,
        "track_type": null,
        "key_signature": null,
        "isrc": null,
        "video_url": null,
        "bpm": null,
        "release_year": null,
        "release_month": null,
        "release_day": null,
        "original_format": "mp3",
        "license": "all-rights-reserved",
        "uri": "https://api.soundcloud.com/tracks/290085421",
        "user": {
            "id": 158644866,
            "kind": "user",
            "permalink": "daddodj-01",
            "username": "DaddoDj",
            "last_modified": "2016/10/14 15:30:33 +0000",
            "uri": "https://api.soundcloud.com/users/158644866",
            "permalink_url": "http://soundcloud.com/daddodj-01",
            "avatar_url": "https://i1.sndcdn.com/avatars-000213201685-07v663-large.jpg"
        },
        "permalink_url": "http://soundcloud.com/daddodj-01/marvin-se-joga-extend-daddo-dj",
        "artwork_url": "https://i1.sndcdn.com/artworks-000190749184-edcc6t-large.jpg",
        "waveform_url": "https://w1.sndcdn.com/u6co0ZhhpsbY_m.png",
        "stream_url": "https://api.soundcloud.com/tracks/290085421/stream",
        "download_url": "https://api.soundcloud.com/tracks/290085421/download",
        "playback_count": 0,
        "download_count": 0,
        "favoritings_count": 0,
        "comment_count": 0,
        "attachments_uri": "https://api.soundcloud.com/tracks/290085421/attachments"
    },
    {
        "kind": "track",
        "id": 290085417,
        "created_at": "2016/10/26 17:44:40 +0000",
        "user_id": 207631678,
        "duration": 120382,
        "commentable": true,
        "state": "finished",
        "original_content_size": 2406470,
        "last_modified": "2016/10/26 17:44:41 +0000",
        "sharing": "public",
        "tag_list": "\"David Guetta\" Pop \"Big Room\"",
        "permalink": "verrigni-id-prewiev",
        "streamable": true,
        "embeddable_by": "all",
        "downloadable": false,
        "purchase_url": null,
        "label_id": null,
        "purchase_title": null,
        "genre": "Dance & EDM",
        "title": "Verrigni - ID (Prewiev)",
        "description": "",
        "label_name": null,
        "release": null,
        "track_type": null,
        "key_signature": null,
        "isrc": null,
        "video_url": null,
        "bpm": null,
        "release_year": null,
        "release_month": null,
        "release_day": null,
        "original_format": "mp3",
        "license": "all-rights-reserved",
        "uri": "https://api.soundcloud.com/tracks/290085417",
        "user": {
            "id": 207631678,
            "kind": "user",
            "permalink": "verrigniofficial",
            "username": "VerrigniOfficial",
            "last_modified": "2016/08/24 17:23:40 +0000",
            "uri": "https://api.soundcloud.com/users/207631678",
            "permalink_url": "http://soundcloud.com/verrigniofficial",
            "avatar_url": "https://i1.sndcdn.com/avatars-000244618637-rwt9l4-large.jpg"
        },
        "permalink_url": "http://soundcloud.com/verrigniofficial/verrigni-id-prewiev",
        "artwork_url": null,
        "waveform_url": "https://w1.sndcdn.com/qMwU9b98Mn5D_m.png",
        "stream_url": "https://api.soundcloud.com/tracks/290085417/stream",
        "playback_count": 0,
        "download_count": 0,
        "favoritings_count": 0,
        "comment_count": 0,
        "attachments_uri": "https://api.soundcloud.com/tracks/290085417/attachments"
    },
    {
        "kind": "track",
        "id": 290085415,
        "created_at": "2016/10/26 17:44:39 +0000",
        "user_id": 15034777,
        "duration": 45169,
        "commentable": true,
        "state": "finished",
        "original_content_size": 1444542,
        "last_modified": "2016/10/26 17:44:40 +0000",
        "sharing": "public",
        "tag_list": "",
        "permalink": "minirocrec-mix",
        "streamable": true,
        "embeddable_by": "all",
        "downloadable": false,
        "purchase_url": null,
        "label_id": null,
        "purchase_title": null,
        "genre": "Home Recording",
        "title": "MiniRocRec - Mix",
        "description": "",
        "label_name": null,
        "release": null,
        "track_type": null,
        "key_signature": null,
        "isrc": null,
        "video_url": null,
        "bpm": null,
        "release_year": null,
        "release_month": null,
        "release_day": null,
        "original_format": "mp3",
        "license": "all-rights-reserved",
        "uri": "https://api.soundcloud.com/tracks/290085415",
        "user": {
            "id": 15034777,
            "kind": "user",
            "permalink": "tony-lamarca",
            "username": "Tony LaMarca",
            "last_modified": "2015/09/22 02:35:24 +0000",
            "uri": "https://api.soundcloud.com/users/15034777",
            "permalink_url": "http://soundcloud.com/tony-lamarca",
            "avatar_url": "https://i1.sndcdn.com/avatars-000058472490-b0xr1a-large.jpg"
        },
        "permalink_url": "http://soundcloud.com/tony-lamarca/minirocrec-mix",
        "artwork_url": "https://i1.sndcdn.com/artworks-000190749179-5smxwe-large.jpg",
        "waveform_url": "https://w1.sndcdn.com/Nv37aaCFO2U1_m.png",
        "stream_url": "https://api.soundcloud.com/tracks/290085415/stream",
        "playback_count": 0,
        "download_count": 0,
        "favoritings_count": 0,
        "comment_count": 0,
        "attachments_uri": "https://api.soundcloud.com/tracks/290085415/attachments"
    },
    {
        "kind": "track",
        "id": 290085414,
        "created_at": "2016/10/26 17:44:39 +0000",
        "user_id": 209453712,
        "duration": 121401,
        "commentable": true,
        "state": "finished",
        "original_content_size": 1941145,
        "last_modified": "2016/10/26 17:44:40 +0000",
        "sharing": "public",
        "tag_list": "",
        "permalink": "carlos-chacon-juegos-comunales",
        "streamable": true,
        "embeddable_by": "all",
        "downloadable": false,
        "purchase_url": null,
        "label_id": null,
        "purchase_title": null,
        "genre": "",
        "title": "Carlos Chacon Juegos Comunales",
        "description": "En la unidad deportiva de Bojacá sector Bochica se viene desarrollando la segunda fase de los Juegos Comunales en fútbol de salón en los que este miércoles 26 de octubre se dará continuidad a la programación de esta integración deportiva.",
        "label_name": null,
        "release": null,
        "track_type": null,
        "key_signature": null,
        "isrc": null,
        "video_url": null,
        "bpm": null,
        "release_year": null,
        "release_month": null,
        "release_day": null,
        "original_format": "mp3",
        "license": "all-rights-reserved",
        "uri": "https://api.soundcloud.com/tracks/290085414",
        "user": {
            "id": 209453712,
            "kind": "user",
            "permalink": "user-521508419",
            "username": "►",
            "last_modified": "2016/08/02 17:24:22 +0000",
            "uri": "https://api.soundcloud.com/users/209453712",
            "permalink_url": "http://soundcloud.com/user-521508419",
            "avatar_url": "https://i1.sndcdn.com/avatars-000208578918-o54e68-large.jpg"
        },
        "permalink_url": "http://soundcloud.com/user-521508419/carlos-chacon-juegos-comunales",
        "artwork_url": "https://i1.sndcdn.com/artworks-000190749177-zr9vqv-large.jpg",
        "waveform_url": "https://w1.sndcdn.com/b7pTHrCFm6gu_m.png",
        "stream_url": "https://api.soundcloud.com/tracks/290085414/stream",
        "playback_count": 0,
        "download_count": 0,
        "favoritings_count": 0,
        "comment_count": 0,
        "attachments_uri": "https://api.soundcloud.com/tracks/290085414/attachments"
    },
    {
        "kind": "track",
        "id": 290085412,
        "created_at": "2016/10/26 17:44:38 +0000",
        "user_id": 716265,
        "duration": 86472,
        "commentable": true,
        "state": "finished",
        "original_content_size": 9851474,
        "last_modified": "2016/10/26 17:44:38 +0000",
        "sharing": "public",
        "tag_list": "",
        "permalink": "promo-glrs-tv-lotteri",
        "streamable": true,
        "embeddable_by": "all",
        "downloadable": false,
        "purchase_url": null,
        "label_id": null,
        "purchase_title": null,
        "genre": "Entertainment",
        "title": "Promo GLRs tv-lotteri",
        "description": "",
        "label_name": null,
        "release": null,
        "track_type": null,
        "key_signature": null,
        "isrc": null,
        "video_url": null,
        "bpm": null,
        "release_year": null,
        "release_month": null,
        "release_day": null,
        "original_format": "m4a",
        "license": "all-rights-reserved",
        "uri": "https://api.soundcloud.com/tracks/290085412",
        "user": {
            "id": 716265,
            "kind": "user",
            "permalink": "guovdageainnulagasradio",
            "username": "Guovdageainnu Lagasradio",
            "last_modified": "2016/10/06 15:44:01 +0000",
            "uri": "https://api.soundcloud.com/users/716265",
            "permalink_url": "http://soundcloud.com/guovdageainnulagasradio",
            "avatar_url": "https://i1.sndcdn.com/avatars-000267056980-rxdiih-large.jpg"
        },
        "permalink_url": "http://soundcloud.com/guovdageainnulagasradio/promo-glrs-tv-lotteri",
        "artwork_url": null,
        "waveform_url": "https://w1.sndcdn.com/Dct7BZ7RmSeE_m.png",
        "stream_url": "https://api.soundcloud.com/tracks/290085412/stream",
        "playback_count": 0,
        "download_count": 0,
        "favoritings_count": 0,
        "comment_count": 0,
        "attachments_uri": "https://api.soundcloud.com/tracks/290085412/attachments"
    }];
              var postLink = GLOBAL_API_POST.concat("/").concat(listId); // concatenate the two strings for url use; might be bad to use "/".
            // //console.log(listId); // To look at postIds.
            // Example url: http://ec2-54-211-221-216.compute-1.amazonaws.com:8080/dalnws/api/DALNService/posts/930da322-d6f6-4428-9969-fc8605428474



              // PROBLEMS WITH UNDEFINED NOT UNDEFINED. Possible cause: quotes.
              if( listTitle === undefined || listDesc === undefined) { // Should never happen since every post must at least have a title. But we put it here to make sure we don't break at an undefined.
              items.push("<li class='span3 item-block'> <video width='270' height='131' controls> <source src='https://s3-us-west-1.amazonaws.com/daln/Posts/1754/VID00008.MP4' type='video/mp4'></video> <div class='desc'><a href='"+ postLink + "'> Untitled </a> <p> <em> No description</em> </p> </div> </li>" );
            } else if (listTitle === undefined) {
            listDesc = listDesc.substring(0,41);
            items.push("<li class='span3 item-block'> <video width='270' height='131' controls> <source src='https://s3-us-west-1.amazonaws.com/daln/Posts/1754/VID00008.MP4' type='video/mp4'></video> <div class='desc'><a href='"+ postLink + "'>Untitled</a> <p> <em>"+ listDesc +"</em> </p> </div> </li>" );
        } else if (listDesc === undefined) {
            listTitle = listTitle.substring(0,19);
            items.push("<li class='span3 item-block'> <video width='270' height='131' controls> <source src='https://s3-us-west-1.amazonaws.com/daln/Posts/1754/VID00008.MP4' type='video/mp4'></video> <div class='desc'><a href='"+ postLink +"'>"+ listTitle +"</a> <p> <em> No description</em> </p> </div> </li>" );
        } else {
                listTitle = listTitle.substring(0,19);
                listDesc = listDesc.substring(0,41);
                items.push( "<li class='span3 item-block'><video width='270' height='131' controls> <source src='https://s3-us-west-1.amazonaws.com/daln/Posts/1754/VID00008.MP4' type='video/mp4'></video> <div class='desc'><a href='"+ postLink + "'>" + listTitle + "</a> <p> <em>"+ listDesc +"</em> </p> </div> </li>" );
            }

          }

            for(var j=0; j <= items.length; j++) {
                $(".thumbnails").append(items[j]);
            }

            //console.log("Posts loaded successfully.");

    }

    var listConfirm = getPosts().done(listPosts);

    listConfirm.done(function listPostsSucceed(){
        //console.log("Succeeded to retrieve JSON posts.");
    });

    listConfirm.fail(function listPostsFail() {
        //console.log("Failed to retrieve JSON posts.");
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
