$(function() {
	@@include('check_webp_css.js')
	

	// Fixed Header
	let header = $("#header");
	let introH = $("#intro").innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos);

	$(window).on("scroll resize",function() {
		introH = $("#intro").innerHeight();
		scrollPos = $(window).scrollTop();
		checkScroll(scrollPos, introH);
		console.log(introH);
	});

	function checkScroll() {
		if(scrollPos > introH) {
			header.addClass("fixed");
		}else{
			header.removeClass("fixed");
		};
	};
	

	// Smooth Scroll
		

	
});