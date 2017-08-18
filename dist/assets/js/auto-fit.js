// This script automatically fit the img tags in the empty_posts into its container keeping the img aspect ratio.

/*var SLIDER_ASPECT_RATIO = 1170 / 350;
var SLIDER_FONT_TO_WIDTH_RATIO = 20 / 1170;*/

function autoSizeImg(imgElement, container) {
	var imgElementWidth = imgElement.offsetWidth;
	var imgElementHeight = imgElement.offsetHeight;
	
	// To reset the container size.
	imgElement.style.width = imgElement.style.height = 0;

	var containerWidth = container.offsetWidth;
	var containerHeight = container.offsetHeight;
	
	var imgElementRatio = imgElementWidth / imgElementHeight;
	var containerRatio = containerWidth / containerHeight;
	
	if (imgElementRatio > containerRatio) {
		imgElement.style.width = containerWidth + 'px';
//			imgElement.style.height = parseInt(containerWidth / imgElementRatio) + 'px';
		imgElement.style.height = 'auto'
		imgElement.style.marginLeft = 0;
		imgElement.style.marginTop = (containerHeight - imgElementHeight) / 2 + 'px';
	} else {
		imgElement.style.height = containerHeight + 'px';
//			imgElement.style.width = parseInt(containerHeight * imgElementRatio) + 'px';
		imgElement.style.width = 'auto'
		imgElement.style.marginTop = 0;
		imgElement.style.marginLeft = (containerWidth - imgElementWidth) / 2 + 'px';
	}
}

// Fit the empty posts once a second. Also resize the slider to fit its aspect ratio.
setInterval(function () {
		var emptyPosts = document.getElementsByClassName('empty_post');
		for (var i = 0; i < emptyPosts.length; i++) {
			autoSizeImg(emptyPosts[i], emptyPosts[i].parentNode);
		}
		/*
		var slider = document.getElementsByClassName('carousel-inner')[0];
		slider.style.height = parseInt(slider.offsetWidth / SLIDER_ASPECT_RATIO) + 'px';
		slider.style.fontSize = parseInt(slider.offsetWidth * SLIDER_FONT_TO_WIDTH_RATIO) + 'px';*/
	}, 1000);