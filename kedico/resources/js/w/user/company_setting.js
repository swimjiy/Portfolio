/*
 *  기업회원 수정 스크립트 - PC
 */ 
 
$(document).ready(function(){
	$("nav.con_left ul.lnb li").eq(2).addClass("active");
	
	// 기업소개 글자 수 체크
	var information = $("#textarea01_1").val();
	$("div.label_box span.txt_count span.emp").text(getStringByte(information));
	
	// 기업소개 키 입력 시 이벤트 발생 - 글자 수 체크
	$("#textarea01_1").on("keyup", function(){
		var info = $(this).val();
		
		var len = getStringByte(info);
		
		if(len > 1500){
			alert('기업소개는 최대 1500 바이트까지 입력 가능합니다.');
			info = cutByLen(info, 1500);
			
			$(this).val(info);
			// return false;
		}
		
		$(this).parent().parent().find("div.label_box span.txt_count span.emp").text(getStringByte(info));
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


// 회원 정보 폼 전송 함수
function submitForm(){
	// 기업 소개
	if($("#textarea01_1").val() == ""){
		alert('기업소개를 작성해주세요.');
		$("#textarea01_1").focus();
		return false;
	}
	
	$("#setting_form").submit();
	
}