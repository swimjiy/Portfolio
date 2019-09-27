/*
 *  ICO 리스트 스크립트 - 모바일
 */ 

$("nav.gnb ul.gnb_list li.gnb_icos").addClass("active"); 

var page = 1;

$(document).ready(function(){
	/*
	파라미터
	*/
	
	// 파라미터 호출
	var url_string = location.href;
	
	// var url = new URL(url_string);
	
	// 검색어
	var search_query = getQuerystring('search_query');
	if(search_query) $("div.search_bar input.inp_search").val(decodeURI(search_query));
	
	// 카테고리
	var category = decodeURIComponent(getQuerystring('category'));
	if(category){
		var cate_arr = category.split(",");
		var cate_cnt = cate_arr.length;
		
		for(i = 0; i < cate_cnt; i++){
			var class_name = cate_arr[i];
			$("div.category_box").find("a."+class_name).addClass("active");
		}
	}
	
	// github
	var github = getQuerystring('github');
	if(github) $("div.ico_option_box").find("a.github").addClass("active");
	
	// 바운티
	var bounty = getQuerystring('bounty');
	if(bounty) $("div.ico_option_box").find("a.bounty").addClass("active");
	
	// KYC
	var is_kyc = getQuerystring('is_kyc');
	if(is_kyc) $("div.ico_option_box").find("a.is_kyc").addClass("active");
	
	// 백서
	var white_paper = getQuerystring('white_paper');
	if(white_paper) $("div.ico_option_box").find("a.white_paper").addClass("active");
	
	// 국가
	var country = getQuerystring('country');
	if(country) $("#sel02_1").val(country);
	
	// 시작 / 종료일
	var start_date = getQuerystring('start_date');
	if(start_date) $("#start_date").val(start_date);
	
	var end_date = getQuerystring('end_date');
	if(end_date) $("#end_date").val(end_date);
	
	// 상태
	var ico_status = getQuerystring('status');
	if(ico_status){
		$("div.ico_status_box").find("a").each(function(){
			if($(this).data('status') == ico_status){
				$(this).addClass("active");
			}
		});
	}
	
	// 평점
	var point = getQuerystring('point');
	var point_min = 0;
	var point_max = 5;
	
	if(point){
		point_arr = point.split("%2C");
		
		point_min = point_arr[0];
		point_max = point_arr[1];
		
		$("div.range_value span.ico_min_point").text(point_min);
		$("div.range_value span.ico_max_point").text(point_max);
	}
	
	// ICO 리스트 오더
	var ord_name = getQuerystring('ord_name');
	var sort = getQuerystring('sort');
	
	if(ord_name && sort){
		var ord = ord_name + ',' + sort;
	
		$("#sel01").val(ord);
	}
	
	/*
	// 파라미터
	*/
	
	// 검색창에서 엔터버튼 클릭 시 ICO 검색 호출
	$("div.search_bar input.inp_search").on("keydown", function(e){
		$("div.search_bar input.inp_search").val($(this).val());
		if(e.keyCode == 13){
			setSearchData();
			searchICO();
		}
	});
	
	// 상세 검색 클릭
	$("div.search_box a.btn_round").on("click", function(){
		$("section.search_details_wrap").addClass("active");
	});
	
	// 상세 검색 종료
	$("section.search_details_wrap button.btn_close").on("click", function(){
		$("section.search_details_wrap").removeClass("active");
	});
	
	// 카테고리 클릭 
	$("div.option_box a.ico_category").on("click", function(){
		$(this).toggleClass("active");
		setSearchData();
	});
	
	// 옵션 클릭
	$("div.option_box a.ico_option").on("click", function(){
		$(this).toggleClass("active");
		setSearchData();
	});
	
	// 국가 변경
	$("#sel02_1").on("change", function(){
		setSearchData();
	});
	
	// 상태 클릭
	$("div.option_box a.status").on("click", function(){
		$("div.option_box a.status").removeClass("active");
		$(this).addClass("active");
		
		setSearchData();
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
	$("#range_point").slider({
		range: true
		, min: 0
		, max: 5
		, values:[point_min, point_max]
		, slide: function(event, ui){
			var min_val = ui.values[0];
			var max_val = ui.values[1];
			
			$("div.range_value span.ico_min_point").text(min_val);
			$("div.range_value span.ico_max_point").text(max_val);
			
			setSearchData();
		}
	});
	
	// ICO 리스트 오더
	$("#sel01").on("change", function(){
		var data = getSearchData();
		
		var ord = $(this).val().split(",");
		
		data['ord_name'] 	= ord[0];
		data['sort'] 		= ord[1];
		
		location.href = '/icos?'+$.param(data);
	});
	
	setSearchData();
	
	// 더 보기 클릭
	$("div.more_btn_row a.btn_more").on("click", function(){
		page++;
		
		console.log(page);
		
		var data = getSearchData();
		
		var ord = $("#sel01").val().split(",");
		
		data['ord_name'] 	= ord[0];
		data['sort'] 		= ord[1];
		
		data['page'] = page;
		
		$.ajax({
			url: 'json_data/ico'
			, data: data
			, success: function(result){
				// console.log(result);
				$("div.cont_box ul.card_list").append(result);
			}
			, error: function(xhr, status, responseTxt){
				console.log(xhr);
			}
			, complete: function(){
				if(page >= last){
					$("div.more_btn_row").remove();
				}
			}
		});
	});
	
	if(page >= last){
		$("div.more_btn_row").remove();
	}
});

// 검색 조건 삭제
$(document).on("click", "div.record_box a.btn_record", function(){
	var class_name = $(this).attr("class").split(' ')[1];
	
	console.log(class_name);
	
	if(class_name == 'btn_search'){ // 검색어 삭제
		$("div.search_bar input.inp_search").val('');
	}
	
	if(class_name == 'btn_category'){ // 카테고리 삭제
		var category = $(this).data("category");
		
		$("div.category_box").find("a."+category).removeClass("active");
	}
	
	if(class_name == 'github' || class_name == 'bounty' || class_name == 'is_kyc' || class_name == 'white_paper'){ // 깃허브, 바운티, KYC, 백서 삭제
		$("div.ico_option_box").find("a."+class_name).removeClass("active");
	}
	
	if(class_name == 'btn_country'){ // 국가 삭제
		$("#sel02_1").val('');
	}
	
	if(class_name == 'btn_ico_date'){ // 시작일, 종료일 삭제
		class_name = $(this).attr("class").split(' ')[2];
		$("#"+class_name).val('');
	}
	
	if(class_name == 'btn_ico_status'){ // 상태 삭제
		$("div.ico_status_box").find("a").removeClass("active");
	}
	
	if(class_name == 'btn_ico_point'){ // 평점 삭제
		$("div.range_value span.ico_min_point").text(0);
		$("div.range_value span.ico_max_point").text(5);
		
		$("#range_point").slider('values', 0, 0);
		$("#range_point").slider('values', 1, 5);
	}
	
	$(this).remove();
	
	setSearchData();
});

// 조건 추출
function getSearchData(){
	// 파라미터 데이터 
	var data = {};
	
	// 검색어
	if($("div.record_box a.btn_search").length > 0){
		// data["search_query"] = encodeURI($("div.record_box a.btn_search").data("search_query"));
		data["search_query"] = $("div.record_box a.btn_search").data("search_query");
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
	
	return data;
}

// 검색 조건 추출
function setSearchData(){
	// 초기화
	$("div.cont_box div.record_box").html('');
	
	// 검색어 
	var search_query = $("div.search_bar input.inp_search").val();
	
	if(search_query != ""){
		var search_html = '<a href="javascript:void(0);" class="btn_record btn_search" data-search_query="'+search_query+'">검색어: '+search_query+'<span class="blind">삭제</span></a>';
		$("div.cont_box div.record_box").append(search_html);
	}
	
	// 카테고리
	$("div.category_box").find("a.ico_category.active").each(function(){
		var class_name = $(this).attr('class').split(" ");
		
		var category_name = $(this).text();
			
		var category_html = '<a href="javascript:void(0);" class="btn_record btn_category" data-category='+class_name[2]+'>'+category_name+'<span class="blind">삭제</span></a>';
		
		$("div.cont_box div.record_box").append(category_html);
	});
	
	// 깃허브
	if($("div.ico_option_box").find("a.github").hasClass("active")){
		var git_html = '<a href="javascript:void(0);" class="btn_record github">깃허브<span class="blind">삭제</span></a>';
		
		$("div.cont_box div.record_box").append(git_html);
	}
	
	// 바운티
	if($("div.ico_option_box").find("a.bounty").hasClass("active")){
		var bounty_html = '<a href="javascript:void(0);" class="btn_record bounty">바운티<span class="blind">삭제</span></a>';
		
		$("div.cont_box div.record_box").append(bounty_html);
	}
	
	// KYC
	if($("div.ico_option_box").find("a.is_kyc").hasClass("active")){
		var kyc_html = '<a href="javascript:void(0);" class="btn_record is_kyc">KYC<span class="blind">삭제</span></a>';
		
		$("div.cont_box div.record_box").append(kyc_html);
	}
	
	// 백서
	if($("div.ico_option_box").find("a.white_paper").hasClass("active")){
		var white_html = '<a href="javascript:void(0);" class="btn_record white_paper">백서<span class="blind">삭제</span></a>';
		
		$("div.cont_box div.record_box").append(white_html);
	}
	
	// 국가
	var country = $("div.sel_nation select.inp_sel").val();
	
	if(country != ''){
		var country_name = $("div.sel_nation select.inp_sel option:selected").text();
		
		var country_html = '<a href="javascript:void(0);" class="btn_record btn_country" data-country="'+country+'">국가: '+country_name+'<span class="blind">삭제</span></a>';
		
		$("div.cont_box div.record_box").append(country_html);
	}
	
	// 시작/종료일
	var start_date = $("#start_date").val();
	var end_date = $("#end_date").val();
	
	var start = new Date(start_date);
	var end = new Date(end_date);
	
	if(start_date != ''){
		var start_html = '<a href="javascript:void(0);" class="btn_record btn_ico_date start_date" data-ico_date="'+start_date+'">시작일: '+start_date+'<span class="blind">삭제</span></a>';
		
		$("div.cont_box div.record_box").append(start_html);
	}
	
	if(end_date != ''){
		var end_html = '<a href="javascript:void(0);" class="btn_record btn_ico_date end_date" data-ico_date="'+end_date+'">종료일: '+end_date+'<span class="blind">삭제</span></a>';
		
		$("div.cont_box div.record_box").append(end_html);
	}
	
	
	// 상태
	$("div.ico_status_box").find("a").each(function(){
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
			
			$("div.cont_box div.record_box").append(ico_status_html);
		}
	});
	
	// 평점
	var point_min = $("div.range_value span.ico_min_point").text();
	var point_max = $("div.range_value span.ico_max_point").text();
	
	var point = point_min+","+point_max;
	
	if(point_min != 0 || point_max != 5){
		var point_html = '<a href="javascript:void(0);" class="btn_record btn_ico_point" data-point="'+point+'">평점: '+point_min+' ~ '+point_max+'<span class="blind">삭제</span></a>';
	
		$("div.cont_box div.record_box").append(point_html);
	}
}

// 조건 검색
function searchICO(){
	var data = getSearchData();
	
	if(data){
		location.href = '/icos?'+$.param(data);
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
		return null;
	}
}