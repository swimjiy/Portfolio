/*
 *  ICO 상세 정보 스크립트 - PC
 */ 
 
$(document).ready(function(){
	
	// 탭 클릭 시 이벤트 발생
	$("div.tab_menu a.btn_tab").on("click", function(){
		$("div.tab_menu ul.tab_list li").removeClass("active");
		$(this).parent().addClass("active");
		
		var obj_name = "div."+$(this).data("class_name");
		
		$("div.tab_cont").hide();
		$(obj_name).show();
	});
	
	// 유튜브 링크 조정
	if($("div.video iframe") > 0){
		var movie_str = $("div.video iframe").attr("src");
	
		var movie_key = movie_str.match('[?&]v=([^&]+)');
		
		if(movie_key){
			var movie_attr = "https://www.youtube.com/embed/" + movie_key[1];
		
			$("div.video iframe").attr("src", movie_attr);
		}
	}
});

// 탭 오픈
function openTab(class_name){
	var obj_name = "div."+class_name;
	$("div.tab_cont").hide();
	$(obj_name).show();
}

// 파라미터 값 가져오는 함수
function getQuerystring(paramName){
    var _tempUrl = window.location.search.substring(1); //url에서 처음부터 '?'까지 삭제
	
	if( _tempUrl != '' ){
		var _tempArray = _tempUrl.split('&'); // '&'을 기준으로 분리하기
		
		for(i = 0; i < _tempArray.length; i++){
			var _keyValuePair = _tempArray[i].split('='); // '=' 을 기준으로 분리하기
			
			if(_keyValuePair[0] == paramName){
				return _keyValuePair[1]; 
			} 
		} 
	}
	else{
		return null;
	}
}