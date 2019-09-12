if($("div.visual_slide").length > 1){
	$("div.visual_pagenation span.total").html('<span class="now">1</span> / '+$("div.visual_slide").length);
	
	$("section.visual_wrap").slick({
		slide: "div.visual_slide"
		, autoplay: true
		, autoplaySpeed: 4000
		, pauseOnHover: false
		, variableWidth: false
		, prevArrow:"div.visual_pagenation a.btn_visual_prev"
		, nextArrow:"div.visual_pagenation a.btn_visual_next"
	});
	
	$("section.visual_wrap").on("beforeChange", function(event, slick, currentSlide, nextSlide){
		$("div.visual_pagenation span.total span.now").text(nextSlide + 1);
	});
	
}else{
	$("div.visual_pagenation").remove();
}