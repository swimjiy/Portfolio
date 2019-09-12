/*
 * 마이페이지 ICO 리스트 스크립트 - PC
 */

$(document).ready(function(){
	$("ul.lnb li").eq(2).addClass("active");
	
	// 파라미터 호출
	var url_string = location.href;
	
	// var url = new URL(url_string);
	
	// 검색어
	// var search_query = url.searchParams.get('search_query');
	var search_query = getQuerystring('search_query');
	if(search_query) $("div.search_wrap input.inp_search").val(decodeURI(search_query));
	
	// 카테고리
	// var category = url.searchParams.get('category');
	var category = decodeURIComponent(getQuerystring('category'));
	if(category){
		var cate_arr = category.split(",");
		var cate_cnt = cate_arr.length;
		
		for(i = 0; i < cate_cnt; i++){
			var class_name = cate_arr[i];
			
			$("div.search_wrap li.category_item").eq(0).find("a."+class_name).addClass("active");
		}
		
		$("div.record_wrap").show();
	}
	
	// github
	// var github = url.searchParams.get('github');
	var github = getQuerystring('github');
	if(github) $("div.search_wrap li.category_item").eq(1).find("a.github").addClass("active");
	
	// 바운티
	// var bounty = url.searchParams.get('bounty');
	var bounty = getQuerystring('bounty');
	if(bounty) $("div.search_wrap li.category_item").eq(1).find("a.bounty").addClass("active");
	
	// KYC
	// var is_kyc = url.searchParams.get('is_kyc');
	var is_kyc = getQuerystring('is_kyc');
	if(is_kyc) $("div.search_wrap li.category_item").eq(1).find("a.is_kyc").addClass("active");

	// 백서
	// var white_paper = url.searchParams.get('white_paper');
	var white_paper = getQuerystring('white_paper');
	if(white_paper) $("div.search_wrap li.category_item").eq(1).find("a.white_paper").addClass("active");
	
	// 국가
	// var country = url.searchParams.get('country');
	var country = getQuerystring('country');
	if(country) $("div.search_wrap select.ico_country").val(country);

	
	// 시작 / 종료일
	// var start_date = url.searchParams.get('start_date');
	var start_date = getQuerystring('start_date');
	if(start_date) $("#start_date").val(start_date);
	
	// var end_date = url.searchParams.get('end_date');
	var end_date = getQuerystring('end_date');
	if(end_date) $("#end_date").val(end_date);
	
	// 상태
	// var ico_status = url.searchParams.get('status');
	var ico_status = getQuerystring('status');
	if(ico_status){
		$("div.search_wrap li.category_item").eq(4).find("a").each(function(){
			if($(this).data('status') == ico_status){
				$(this).addClass("active");
			}
		});
	}
	
	// 평점
	// var point = url.searchParams.get('point');
	/*
	var point = decodeURIComponent(getQuerystring('point'));
	var point_min = 0;
	var point_max = 5;
	
	if(point){
		point_arr = point.split(",");
		
		point_min = point_arr[0];
		point_max = point_arr[1];
		
		$("div.range_value span.ico_min_point").text(point_min);
		$("div.range_value span.ico_max_point").text(point_max);
		
		var point_html = '<a href="javascript:void(0);" class="btn_record btn_ico_status" data-point="'+point+'">평점: '+point_min+' ~ '+point_max+'<span class="blind">삭제</span></a>';
		
		$("div.record_wrap div.record_box").append(point_html);
		$("div.record_wrap").show();
	}
	*/
	
	// 조건 - 내가 평가한 ICO 제외
	// var except_me = url.searchParams.get('except_me');
	var except_me = getQuerystring('except_me');
	if(except_me) $("div.search_wrap li.category_item").eq(6).find("a.except_me").addClass("active");
	
	// 조건 - 유료/무료 신청
	// var ico_condition = url.searchParams.get('ico_condition');
	var ico_condition = getQuerystring('ico_condition');
	if(ico_condition){
		$("div.search_wrap li.category_item").eq(6).find("a.ico_condition").each(function(){
			if($(this).data("ico_condition") == ico_condition){
				$(this).addClass("active");
			}
		});
	}
	
	// 정렬 기준
	// var ord_name = url.searchParams.get('ord_name');
	// var sort = url.searchParams.get('sort');
	var ord_name = getQuerystring('ord_name');
	var sort = getQuerystring('sort');
	
	if(ord_name && sort){
		$("div.list_filter a.filter_item").each(function(){
			var name = $(this).data('ord_name');
			
			if(ord_name == name){
				if(sort == 'asc'){
					$(this).children('.btn_down').remove();
				}else if(sort == 'desc'){
					$(this).children('.btn_up').remove();
				}
			}
			
		});
	}
	
	// 검색창 돋보기 버튼 클릭 시 ICO 검색
	$("div.search_wrap button.btn_search").on("click", function(){
		setSearchData();
		searchICO();
	});
	
	// 검색창에서 엔터버튼 클릭 시 ICO 검색
	$("div.search_wrap input.inp_search").on("keydown", function(e){
		if(e.keyCode == 13){
			setSearchData();
			searchICO();
		}
	});
	
	// 시작일 / 종료일 검색 datepicker
	$("#start_date").datepicker({
		dateFormat:'yy.mm.dd'
		, onSelect: function(){
			setSearchData();
		}
	});
	
	$("#end_date").datepicker({
		dateFormat:'yy.mm.dd'
		, onSelect: function(){
			setSearchData();
		}
	});
	
	// 평점 슬라이더
	/*
	$("#range_point").slider({
		range: true
		, min: 0
		, max: 5
		, values:[point_min, point_max]
		// , step: 0.1
		, slide: function(event, ui){
			var min_val = ui.values[0];
			var max_val = ui.values[1];
			$("div.range_value span.ico_min_point").text(min_val);
			$("div.range_value span.ico_max_point").text(max_val);
			
			setSearchData();
		}
	});
	*/
	
	// 아이템 클릭 시 이벤트 발생
	$("div.search_wrap a.btn_square").on("click", function(){
		// 상태 검색
		if($(this).parent().hasClass("ico_status") == true){
			if($(this).hasClass("active") == true){
				$(this).removeClass("active");
			}else{
				$(this).parent().find("a.btn_square").removeClass("active");
				$(this).addClass("active");
			}
		}
		// 유료/무료 평가 신청만 검색
		else if($(this).hasClass("ico_condition")){
			if($(this).hasClass("active") == true){
				$(this).removeClass("active");
			}else{
				$("a.ico_condition").removeClass("active");
				$(this).addClass("active");
			}
		}
		// 그외 검색
		else{
			$(this).toggleClass("active");
		}
		
		setSearchData();
	});
	
	// 국가 선택 시 이벤트 발생
	$("div.search_wrap select.ico_country").on("change", function(){
		setSearchData();
	});
	
	// ICO 리스트 오더
	$("div.list_filter a.filter_item").on("click", function(){
		var ord_name = $(this).data('ord_name');
		
		var data = getSearchData();
		data['ord_name'] = ord_name;
		
		if($(this).children('.btn_down').length != 0){
			// 오름 차순으로 정렬
			data['sort'] = 'asc';
		}else if($(this).children('.btn_up').length != 0){
			data['sort'] = 'desc';
		}
		
		location.href = '/user/ico_list?'+$.param(data);
	});
	
	setSearchData();
});

// 검색 조건 삭제
$(document).on("click", "div.record_box a.btn_record", function(){
	var class_name = $(this).attr("class").split(' ')[1];
	
	if(class_name == 'btn_search'){ // 검색어 삭제
		$("div.search_wrap input.inp_search").val('');
	}
	
	if(class_name == 'btn_category'){ // 카테고리 삭제
		var category = $(this).data("category");
		
		$("div.search_wrap li.category_item").eq(0).find("a."+category).removeClass("active");
	}
	
	if(class_name == 'github' || class_name == 'bounty' || class_name == 'is_kyc' || class_name == 'white_paper'){ // 깃허브, 바운티, KYC, 백서 삭제
		$("div.search_wrap li.category_item").eq(1).find("a."+class_name).removeClass("active");
	}
	
	if(class_name == 'btn_country'){ // 국가 삭제
		$("div.search_wrap select.ico_country").val('');
	}
	
	if(class_name == 'btn_ico_date'){ // 시작일, 종료일 삭제
		class_name = $(this).attr("class").split(' ')[2];
		$("#"+class_name).val('');
	}
	
	if(class_name == 'btn_ico_status'){ // 상태 삭제
		$("div.search_wrap li.category_item").eq(4).find("a").removeClass("active");
	}
	
	if(class_name == 'btn_ico_point'){ // 평점 삭제
		$("div.range_value span.ico_min_point").text(0);
		$("div.range_value span.ico_max_point").text(5);
		
		$("#range_point").slider('values', 0, 0);
		$("#range_point").slider('values', 1, 5);
	}
	
	if(class_name == 'btn_except_me'){ // 내가 평가한 ICO 제외
		$("div.search_wrap li.category_item").eq(6).find("a.except_me").removeClass("active");
	}
	
	if(class_name == 'btn_ico_condition'){ // 유료/무료 신청 삭제
		$("div.search_wrap li.category_item").eq(6).find("a.ico_condition").removeClass("active");
	}
	
	setSearchData();
});


// 검색 추출
function setSearchData(){
	// 초기화
	$("div.record_wrap div.record_box").html('');
	
	// 검색어 
	var search_query = $("div.search_wrap input.inp_search").val();
	
	if(search_query != ""){
		var search_html = '<a href="javascript:void(0);" class="btn_record btn_search" data-search_query="'+search_query+'">검색어: '+search_query+'<span class="blind">삭제</span></a>';
		$("div.record_wrap div.record_box").append(search_html);
	}
	
	// 카테고리
	$("div.search_wrap li.category_item").eq(0).find("a.btn_square.active").each(function(){
		var class_name = $(this).attr('class').split(" ");
		
		var category_name = $(this).text();
			
		var category_html = '<a href="javascript:void(0);" class="btn_record btn_category" data-category='+class_name[1]+'>'+category_name+'<span class="blind">삭제</span></a>';
		
		$("div.record_wrap div.record_box").append(category_html);
	});
	
	// 깃허브
	if($("div.search_wrap li.category_item").eq(1).find("a.github").hasClass("active")){
		var git_html = '<a href="javascript:void(0);" class="btn_record github">깃허브<span class="blind">삭제</span></a>';
		
		$("div.record_wrap div.record_box").append(git_html);
	}
	
	// 바운티
	if($("div.search_wrap li.category_item").eq(1).find("a.bounty").hasClass("active")){
		var bounty_html = '<a href="javascript:void(0);" class="btn_record bounty">바운티<span class="blind">삭제</span></a>';
		
		$("div.record_wrap div.record_box").append(bounty_html);
	}
	
	// KYC
	if($("div.search_wrap li.category_item").eq(1).find("a.is_kyc").hasClass("active")){
		var kyc_html = '<a href="javascript:void(0);" class="btn_record is_kyc">KYC<span class="blind">삭제</span></a>';
		
		$("div.record_wrap div.record_box").append(kyc_html);
	}
	
	// 백서
	if($("div.search_wrap li.category_item").eq(1).find("a.white_paper").hasClass("active")){
		var white_html = '<a href="javascript:void(0);" class="btn_record white_paper">백서<span class="blind">삭제</span></a>';
		
		$("div.record_wrap div.record_box").append(white_html);
	}

	// 국가
	var country = $("div.search_wrap select.ico_country").val();
	
	if(country != ''){
		var country_name = $("div.search_wrap select.ico_country option:selected").text();
		
		var country_html = '<a href="javascript:void(0);" class="btn_record btn_country" data-country="'+country+'">국가: '+country_name+'<span class="blind">삭제</span></a>';
		
		$("div.record_wrap div.record_box").append(country_html);
	}
	
	// 시작/종료일
	var start_date = $("#start_date").val();
	var end_date = $("#end_date").val();
	
	if(start_date != ''){
		var start_html = '<a href="javascript:void(0);" class="btn_record btn_ico_date start_date" data-ico_date="'+start_date+'">시작일: '+start_date+'<span class="blind">삭제</span></a>';
		
		$("div.record_wrap div.record_box").append(start_html);
	}
	
	if(end_date != ''){
		var end_html = '<a href="javascript:void(0);" class="btn_record btn_ico_date end_date" data-ico_date="'+end_date+'">종료일: '+end_date+'<span class="blind">삭제</span></a>';
		
		$("div.record_wrap div.record_box").append(end_html);
	}
	
	// 상태
	$("div.search_wrap li.category_item").eq(4).find("a").each(function(){
		if($(this).hasClass('active') == true){
			var ico_status = $(this).data('status');
			
			var status_str = '';
		
			if(ico_status == 1){
				status_str = 'ICO 예정';
			}else if(ico_status == 2){
				status_str = 'ICO 진행 중';
			}else if(ico_status == 3){
				status_str = 'ICO 종료';
			}
			
			var ico_status_html = '<a href="javascript:void(0);" class="btn_record btn_ico_status" data-ico_status="'+ico_status+'">'+status_str+'<span class="blind">삭제</span></a>';
			
			$("div.record_wrap div.record_box").append(ico_status_html);
		}
	});
	
	// 평점
	/*
	var point_min = $("div.range_value span.ico_min_point").text();
	var point_max = $("div.range_value span.ico_max_point").text();
	
	var point = point_min+","+point_max;
	
	if(point_min != 0 || point_max != 5){
		var point_html = '<a href="javascript:void(0);" class="btn_record btn_ico_point" data-point="'+point+'">평점: '+point_min+' ~ '+point_max+'<span class="blind">삭제</span></a>';
	
		$("div.record_wrap div.record_box").append(point_html);
	}
	*/
	
	// 조건 - 내가 평가한 ICO 제외
	if($("div.search_wrap li.category_item").eq(6).find("a.except_me").hasClass("active")){
		var except_html = '<a href="javascript:void(0);" class="btn_record btn_except_me">내가 평가한 ICO 제외<span class="blind">삭제</span></a>';
		
		$("div.record_wrap div.record_box").append(except_html);
	}
	
	// 조건 - 유료/무료 평가
	$("div.search_wrap li.category_item").eq(6).find("a.ico_condition").each(function(){
		if($(this).hasClass("active") == true){
			var ico_condition = $(this).data("ico_condition");
			
			var condition_name = '';
		
			if(ico_condition == 1){
				condition_name = '무료평가 신청만';
			}else if(ico_condition == 2){
				condition_name = '유료평가 신청만';
			}
			
			var condition_html = '<a href="javascript:void(0);" class="btn_record btn_ico_condition" data-ico_condition="'+ico_condition+'">'+condition_name+'<span class="blind">삭제</span></a>';
			
			$("div.record_wrap div.record_box").append(condition_html);
		}
	});

	/*
	if($("div.record_wrap div.record_box a.btn_record").length > 0){
		$("div.record_wrap").show();
	}else{
		$("div.record_wrap").hide();
	}
	*/
	
}

// 조건 추출
function getSearchData(){
	// 파라미터 데이터 
	var data = {};
	
	// 검색어
	if($("div.record_box a.btn_search").length > 0){
		data["search_query"] = encodeURI($("div.record_box a.btn_search").data("search_query"));
	}
	
	// 카테고리
	if($("div.record_box a.btn_category").length > 0){
		var category = "";
		$("div.record_box a.btn_category").each(function(idx, val){
			if(idx != 0) category += ",";
			
			category += $(this).data("category");
		});
		
		data["category"] = category;
	}
	
	// 옵션 - github, 바운티, KYC, 백서
	if($("div.record_box a.github, div.record_box a.bounty, div.record_box a.is_kyc, div.record_box a.white_paper").length > 0){
		$("div.record_box a.github, div.record_box a.bounty, div.record_box a.is_kyc, div.record_box a.white_paper").each(function(){
			var class_name = $(this).attr("class").split(" ");
			
			data[class_name[1]] = 1;
		});
	}
	
	// 국가
	if($("div.record_box a.btn_country").length > 0){
		data["country"] = $("div.record_box a.btn_country").data("country");
	}
	
	// 시작 / 종료일
	if($("div.record_box a.btn_ico_date").length > 0){
		$("div.record_box a.btn_ico_date").each(function(){
			var class_name = $(this).attr("class").split(" ");
			
			data[class_name[2]] = $(this).data("ico_date");
		});
	}
	
	// 상태
	if($("div.record_box a.btn_ico_status").length > 0){
		data["status"] = $("div.record_box a.btn_ico_status").data("ico_status");
	}
	
	// 평점
	if($("div.record_box a.btn_ico_point").length > 0){
		data["point"] = $("div.record_box a.btn_ico_point").data("point");
	}
	
	// 조건 - 내가 평가한 ICO 제외
	if($("div.record_box a.btn_except_me").length > 0){
		data["except_me"] = 1;
	}
	
	// 조건 - 유료평가 / 무료평가만
	if($("div.record_box a.btn_ico_condition").length > 0){
		data["ico_condition"] = $("div.record_box a.btn_ico_condition").data("ico_condition");
	}
	
	return data;
}

function searchICO(){
	var data = getSearchData();
	
	if(data){
		location.href = '/user/ico_list?'+$.param(data);
	}else{
		alert('검색 조건을 선택해주세요.');
	}
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
		return '';
	}
}