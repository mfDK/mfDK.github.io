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

	$(".overlay").hover(function(){
		$(this).css({
			'background-color': 'rgba(212,213,215, 0.9)',
			'transition': '0.7s'
		})
		$(this).children().first().css({
			'color': 'rgba(255,255,255, 1)',
			'transition': '0.7s'
		})
	},function(){
		$(this).css({
			'background-color': 'rgba(212,213,215, 0)'
		})
		$(this).children().first().css({
			'color': 'rgba(255,255,255, 0)',
			'transition': '0.7s'
		})
	})

	function overLay(event) {
		console.log(event.target.id)
	}
});
