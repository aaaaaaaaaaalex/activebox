$(function() {
	@@include('check_webp_css.js')
	@@include('modal.js')
	

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
		if(scrollPos > (introH - 60)) {
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

		checkHeader2();

        // Header Background 2
        function checkHeader2() {
            if(blockID == "#intro") {
                header.removeClass("header--black");
            } else {
                header.addClass("header--black");
            }
        };
	});


	// Nav Toggle
	$("#navToggle").on("click", function(event) {
		event.preventDefault();

		$("#nav").toggleClass("show");

		if($("#nav").css("display") == "flex") {
			header.addClass("header--black");
		}else{
			header.removeClass("header--black");
		}
		
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