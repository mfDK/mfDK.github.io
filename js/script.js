$(document).ready(function(){
	$("#project-link").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#project-container",
			offset: -100
		});
		return false;
	});
	$("#about-link").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#about-container",
			offset: -100
		});
		return false;
	});
	$("#contact-link").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#footer-anchor"
		});
		return false;
	});

	var projectThumb = document.getElementsByClassName("project-thumb");
	for (var i = 0; i < projectThumb.length; i++) {
		projectThumb[i].addEventListener('mouseover', function(e) {
			overLay(e)
		})
	}
	function overLay(event) {
		console.log(event.target.id)
	}
});
