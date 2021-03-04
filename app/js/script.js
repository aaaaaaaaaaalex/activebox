$(function() {
	@@include('check_webp_css.js')
	

	// Fixed Header
	let header = $("#header");
	let introH = $("#intro").innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize",function() {
		introH = $("#intro").innerHeight();
		scrollPos = $(window).scrollTop();
		checkScroll(scrollPos, introH);
	});

	function checkScroll() {
		if(scrollPos > introH) {
			header.addClass("fixed");
		}else{
			header.removeClass("fixed");
		};
	};
	

	// Smooth Scroll
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let blockID = $(this).data("scroll");
		let blockOffset = $(blockID).offset().top;
		
		$("html, body").animate({
			scrollTop: blockOffset - 60
		});

		$("#nav").removeClass("show");
	});


	// Nav Toggle
	$("#navToggle").on("click", function(event) {
		event.preventDefault();

		$("#nav").toggleClass("show");
	});
	

	// Reviews https://kenwheeler.github.io/slick/
	$("#reviewsSlider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	  });


});