// This script overwrites the window.onResize function of the page.

var imgElementFitFunctionList = [];
var functionIndex = 0;

function autoSizeImg(imgElement, container) {
	imgElementFitFunctionList[functionIndex] = function() {
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
	};
	imgElementFitFunctionList[functionIndex]();
	functionIndex++;
}

window.onresize = function() {
	for (var i = 0; i < imgElementFitFunctionList.length; i++) {
		imgElementFitFunctionList[i]();
	}
}