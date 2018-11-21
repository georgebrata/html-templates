$(document).ready(function () {

	$('#js-main-slider').pogoSlider({
		autoplay: true,
		autoplayTimeout: 5000,
		displayProgess: true,
		preserveTargetSize: true,
		targetWidth: 1000,
		targetHeight: 300,
		responsive: true
	}).data('plugin_pogoSlider');

	var transitionDemoOpts = {
		displayProgess: false,
		generateNav: false,
		generateButtons: false
	}

});