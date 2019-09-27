/*
 * 마이 페이지 ICO 정보보기 스크립트 - PC
 */

$(document).ready(function(){
	$("ul.lnb li").eq(2).addClass("active");
	
	// 상단 탭 클릭 시 이벤트 발생
	$("ul.tab_list a.btn_tab").on("click", function(){
		var idx = $(this).data("tab_idx");
		
		$("ul.tab_list li").removeClass("active");
		$(this).parent().addClass("active");
		
		$("div.contents div.tab_items").hide();
		$("div.contents div.tab_items").eq(idx).show();
	});
	
	// 유튜브 링크 조정
	var movie_str = $("div.video iframe").attr("src");
	
	var movie_key = movie_str.match('[?&]v=([^&]+)');
	
	console.log(movie_key);
	
	if(movie_key){
		var movie_attr = "https://www.youtube.com/embed/" + movie_key[1];
	
		$("div.video iframe").attr("src", movie_attr);
	}
});