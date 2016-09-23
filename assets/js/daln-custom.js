

jQuery(document).ready(function($) {


    $().UItoTop({ easingType: 'easeOutQuart'});

    //Added collapse function
    $(".collapse").collapse();


    // Testing JSON call - REMOVE ONCE IN DEPLOYMENT

    // $.getJSON('data.json', function (data) {
    //     console.log(data);
    //
    //     var items = data.items.map(function (item) {
    //         return item.key + ': ' + item.value;
    //     });
    // });



    $.getJSON('data-detail.json', function (objData) {

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

        var assetVid = objData[0].assetList[0].AssetLocation;
        // $('#video').append("<iframe src=" + assetVid + " width ='768' height='432'></iframe>");
        $('#video').append("<iframe src="+ assetVid +" width ='768' height='432'></iframe>")


        console.log(assetVid);






    });

});
