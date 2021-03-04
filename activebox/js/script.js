$(function() {
	function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2); };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});
	

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