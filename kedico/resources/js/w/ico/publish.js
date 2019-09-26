/*
 *  ICO 등록 페이지 스크립트 - PC
 */

$(document).ready(function(){
	$("nav.con_left ul.lnb li").eq(0).addClass("active");
	
	// 상단 탭 클릭 시 이벤트 발생
	$("ul.my_step li.item a").on("click", function(){
		openICOTab($(this).data('tab_idx'));
	});
	
	// ICO 이름 특수문자 금지
	$("#ico_name").on("keyup", function(e){
		var ico_name = $(this).val();
		
		var spc_pattern = /[`~!@#$%^&*|\\\'\";:\/\+=\-_?]/gi;
		
		if(spc_pattern.test(ico_name) == true){
			alert('ICO 이름에 특수문자를 넣을수 없습니다.');
			$(this).val('');
		}
	});
	
	// ICO 이름, 토큰 이름, 플랫폼 이름, 제한국가, 투자받는 코인 종류 길이 30자 제한
	$("#ico_name, #token_name, #platform_name, #limit_country, #text01_1").on("keyup", function(){
		var text_val = $(this).val();
		
		var item_name = $(this).parent().parent().find("label.tit").text();
		
		if(item_name == "투자받는 코인종류"){
			item_name += "는";
		}else{
			item_name += "은";
		}
		
		if(text_val.length > 30){
			alert(item_name+' 최대 30자 까지 입력 가능합니다. ');
			text_val = text_val.substring(0,30);
			$(this).val(text_val);
			return false;
		}
	});
	
	// 가로 사이즈 / 정사각형 로고 기본값
	var logo_default = $("div.type_img01 div.type01 img").attr("src");
	var icon_default = $("div.type_img01 div.type02 img").attr("src");
	
	// 가로 사이즈 로고 변경 시 이벤트 발생
	$("#file_upload01_1").on("change", function(e){
		var file = e.target.files;
		var reader = new FileReader();
		
		$("#file_name01_1").val(file[0].name);
		
		reader.onload = function(e){
			var img_arr = file[0].name.split(".");
			var ext = img_arr[img_arr.length-1];
			
			if(file[0].size > 1024 * 1024 * 5){
				alert('이미지 크기는 5MB 이하여야 합니다.');
				$(this).val('');
			}else if(ext != "jpg" && ext != "jpeg" && ext != "png" && ext != "gif"){
				alert('jpg, png, gif 파일만 업로드 가능합니다.');
				$(this).val('');
			}else{
				$("div.type_img01 div.type01 img").attr("src", e.target.result);
			}
		}
		
		reader.readAsDataURL(file[0]);	
	});
	
	// 정사각형 고로 변경 시 이벤트 발생
	$("#file_upload01_2").on("change", function(e){
		var file = e.target.files;
		var reader = new FileReader();
		
		$("#file_name01_2").val(file[0].name);
		
		reader.onload = function(e){
			var img_arr = file[0].name.split(".");
			var ext = img_arr[img_arr.length-1];
			
			if(file[0].size > 1024 * 1024 * 5){
				alert('이미지 크기는 5MB 이하여야 합니다.');
				$(this).val('');
			}else if(ext != "jpg" && ext != "jpeg" && ext != "png" && ext != "gif"){
				alert('jpg, png, gif 파일만 업로드 가능합니다.');
				$(this).val('');
			}else{
				$("div.type_img01 div.type02 img").attr("src", e.target.result);
			}
		}
		reader.readAsDataURL(file[0]);	
	});
	
	// 사진 삭제 버튼 클릭 시 이벤트 발생
	$("div.type_file01 a.btn_form01").on("click", function(){
		var type_idx = $(this).data("type_idx");
		
		$(this).parent().parent().find("#file_name01_1").val('');
		$(this).parent().parent().find("#file_upload01_1").val('');
		
		if(type_idx == '01') img_src = logo_default;
		if(type_idx == '02') img_src = icon_default;
		
		$("div.type_img01 div.type"+type_idx+" img").attr("src", img_src);
	});
	
	// 간단 소개 키 입력 이벤트 발생 - 길이 파악 후 80자 이상일 경우 경고 메시지 출력 후 텍스트 자름
	$("#textarea01_1").on("keyup", function(e){
		var summary = $(this).val();
		
		var len = getStringByte(summary);
		
		if(len > 300){
			alert('ICO 간단소개는 최대 300자 까지 입력 가능합니다.');
			// summary = summary.substring(0,200);
			summary = cutByLen(summary, 300);
			
			$(this).val(summary);
			return false;
		}
		
		$(this).parent().parent().find("div.label_box span.txt_count span.emp").text(len);
	});
	
	// 상세 소개 키 입력 이벤트 발생
	$("#textarea01_2").on("keyup", function(){
		var detail = $(this).val();
		
		var len = getStringByte(detail);
		
		if(len > 1500){
			alert('ICO 상세 소개는 최대 1500자 까지 입력 가능합니다.');
			// detail = detail.substring(0,1000);
			detail = cutByLen(detail, 1500);
			
			$(this).val(detail);
			return false;
		}
		
		$(this).parent().parent().find("div.label_box span.txt_count span.emp").text(len);
	});
	
	// ICO 진행기간 DatePicker 설정
	$("#ico_date01_1, #ico_date01_2, #ico_date02_1, #ico_date02_2, #ico_date03_1, #ico_date03_2, #ico_date04_1, #ico_date04_2").datepicker({
		dateFormat:'yy.mm.dd'
	});
	
	// 진행기간 추가/삭제 버튼 클릭 시 이벤트 발생
	var date_ord = 0;
	
	if(location.href.includes('modify')){ 
		$("#ico_date02_1, #ico_date03_1, #ico_date04_1").each(function(){
			if($(this).val() != ""){
				date_ord++;
			}
		});
	}
	
	$("article.my_ico_info div.type_date01 button.btn_form02").on("click", function(){
		if($(this).hasClass("plus")){
			// 진행기간 추가
			if(date_ord >= 3){
				alert('ICO 진행기간 설정은 최대 4차까지 가능합니다.');
				return false;
			}
			
			date_ord++;
			
			$("article.my_ico_info div.type_date01 div.date_row").eq(date_ord).show();
			
		}else if($(this).hasClass("minus")){
			// 진행기간 삭제
			if(date_ord <= 0){
				alert('최소 한번의 ICO 진행기간을 설정해야 합니다.');
				return false;
			}
			
			$("article.my_ico_info div.type_date01 div.date_row").eq(date_ord).hide();
			
			date_ord--;
		}
		
		return false;
	});
});

// 문자열 바이트 구하기
function getStringByte(str){
	var byteSize = 0;
	
	var str_len = str.length;
	
	for(i = 0; i < str_len; i++){
		var ch = str.charAt(i);
		
		var charCode = ch.charCodeAt(0);
		
		if (charCode <= 0x00007F) {
			byteSize++;
		} else if (charCode <= 0x0007FF) {
			byteSize += 2;
		} else if (charCode <= 0x00FFFF) {
			byteSize += 3;
		} else {
			byteSize += 4;
		}
	}
	
	return byteSize;
}

// 문자열 바이트로 자르기 
function cutByLen(str, maxByte){
	var byteSize = 0;
	
	var str_len = str.length;
	
	for(i = 0; i < str_len; i++){
		var ch = str.charAt(i);
		
		var charCode = ch.charCodeAt(0);
		
		if (charCode <= 0x00007F) {
			byteSize++;
		} else if (charCode <= 0x0007FF) {
			byteSize += 2;
		} else if (charCode <= 0x00FFFF) {
			byteSize += 3;
		} else {
			byteSize += 4;
		}
		
		if(byteSize > maxByte)
			break;
	}

	return str.substring(0,i);
}

// 상단 탭 클릭 시 아래 탭 출력 변경
function openICOTab(num){
	$("ul.my_step li.item").removeClass("active");
	$("ul.my_step li.item").eq(num).addClass("active");
	
	$("article.form_wrap").hide();
	$("article.form_wrap").eq(num).show();
}

// 저장하기 버튼 클릭 시 ICO 등록
function submitForm(){
	// URI 확인
	var uri = location.href;
	var is_mod = false;
	
	if(uri.includes("modify")){
		is_mod = true;
	}
	
	// ICO 이름
	if($("#ico_name").val() == ""){
		alert('ICO 이름을 입력해주세요.');
		openICOTab(0);
		$("#ico_name").focus();
		return false;
	}
	
	// 토큰 이름
	if($("#token_name").val() == ""){
		alert('토큰 이름을 입력해주세요.');
		openICOTab(0);
		$("#token_name").focus();
		return false;
	}
	
	// 플랫폼 이름
	if($("#platform_name").val() == ""){
		alert('플랫폼 이름을 입력해주세요.');
		openICOTab(0);
		$("#platform_name").focus();
		return false;
	}
	
	// ICO 카테고리
	if($("#ico_category").val() == ""){
		alert('ICO 카테고리를 선택해주세요.');
		openICOTab(0);
		$("#ico_category").focus();
		return false;
	}
	
	
	// 가로 사이즈 로고
	if(($("#file_upload01_1").val() == "") && is_mod == false ){
		alert('가로 사이즈 로고 파일을 업로드 해주세요.');
		openICOTab(0);
		$("#file_upload01_1").focus();
		return false;
	}
	
	// 정사각형 로고
	if(($("#file_upload01_2").val() == "") && is_mod == false ){
		alert('정사각형 로고 파일을 업로드 해주세요.');
		openICOTab(0);
		$("#file_upload01_2").focus();
		return false;
	}
	
	// ICO 간단 소개
	if($("#textarea01_1").val() == ""){
		alert('ICO 간단 소개글을 작성해주세요.');
		openICOTab(0);
		$("#textarea01_1").focus();
		return false;
	}
	
	// ICO 상세 소개
	if($("#textarea01_2").val() == ""){
		alert('ICO 상세 소개글을 작성해주세요.');
		openICOTab(0);
		$("#textarea01_2").focus();
		return false;
	}
	
	// ICO 국가
	if($("#ico_country").val() == ""){
		alert('ICO 국가를 선택해주세요.');
		openICOTab(1);
		$("#ico_country").focus();
		return false;
	}
	
	// ICO 진행 기간
	if($("#ico_date01_1").val() == ""){
		alert('ICO 진행기간을 입력해주세요.');
		openICOTab(1);
		$("#ico_date01_1").focus();
		return false;
	}
	
	if($("#ico_date01_2").val() == ""){
		alert('ICO 진행기간을 입력해주세요.');
		openICOTab(1);
		$("#ico_date01_2").focus();
		return false;
	}
	
	if(is_mod === false){
		var cfm = confirm("ICO를 등록하시겠습니까?");
	}
	
	if(!cfm){
		return false;
	}
	
	$("#ico_form").submit();
}