/*
 *  회원가입 스크립트 - PC
 */ 

$(document).ready(function(){
	
	$("div.tab_menu a.btn_tab").on("click", function(){
		var idx = $(this).data("idx");
		
		$("div.tab_menu ul.tab_list li").removeClass("active");
		$(this).parent().addClass("active");
		
		$("div.contents div.join_tabs").hide();
		$("div.contents div.join_tabs").eq(idx).show();
	});
	
	// 약관 보기 클릭 시 이벤트 발생
	$("div.chk_box a.btn_scroll").on("click", function(){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
			$(this).text('약관보기');
		}else{
			$(this).parent().addClass("active");
			$(this).text('약관닫기');
		}
	});
	
	// 개인회원 모두 동의 체크박스 체크 시 이벤트 발생
	$("#chk01_1").on("change", function(){
		var chk = $(this).is(":checked");
		
		// 체크 활성화 시
		if(chk == true){ 
			$("input.chkbox_private").each(function(){
				this.checked = true;
			});
		}
		// 체크 비활성화 시
		else{ 
			$("input.chkbox_private").each(function(){
				this.checked = false;
			});
		}
	});
	
	// 기업회원 모두 동의 체크박스 체크 시 이벤트 발생
	$("#chk02_1").on("change", function(){
		var chk = $(this).is(":checked");
		
		// 체크 활성화 시
		if(chk == true){ 
			$("input.chkbox_company").each(function(){
				this.checked = true;
			});
		}
		// 체크 비활성화 시
		else{ 
			$("input.chkbox_company").each(function(){
				this.checked = false;
			});
		}
	});
	
	// 기업 소개 
	$("#textarea01_3").on("keyup", function(){
		var info = $(this).val();
		
		var len = getStringByte(info);
		
		if(len > 1500){
			alert('기업 소개는 최대 1500 byte 까지 입력 가능합니다.');
			info = cutByLen(info, 1500);
			
			$(this).val(info);
			// $(this).parent().parent().find("span.txt_count span.emp").text(1000);
			// return false;
		}
		
		$(this).parent().parent().find("span.txt_count span.emp").text(getStringByte(info));
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

// 개인회원 가입
function registerPrivateUser(){
	// 이용약관 동의
	if($("#chk01_2").is(":checked") == false){
		alert('이용약관에 동의해주세요.');
		$("#chk01_2").focus();
		
		return false;
	}
	
	// 개인정보 이용 및 마케팅 활용방침
	if($("#chk01_3").is(":checked") == false){
		alert('개인정보 이용 및 마케팅 활용방침에 동의해주세요.');
		$("#chk01_3").focus();
		
		return false;
	}
	
	// 닉네임
	if($("#user_name").val() == ""){
		alert('닉네임을 입력해주세요.');
		$("#user_name").focus();
		
		return false;
	}
	
	// 뉴스레터 수신 동의
	var is_newsletter = 2;
	if($("#chk01_4").is(":checked") == true){
		is_newsletter = 1;
	}
	
	var data = {
		dist: 1
		, access_token: $("#access_token").val()
		, email: $("#user_email").val()
		, type: $("#sns_type").val()
		, name: $("#user_name").val()
		, is_newsletter: is_newsletter
	}
	
	var cfm = confirm('개인회원 가입을 진행하시겠습니까?');
	
	if(cfm){
		$.ajax({
			url: '/register/cfm'
			, data: data
			, type:"POST"
			, success: function(result){
				console.log(result);
				
				if(result == 1){
					location.href = '/register/private';
				}
			}
			, error: function(xhr, status, responseTxt){
				console.log(xhr);
			}
		});
	}
}

// 기업회원 가입
function registerCompanyUser(){
	// 서비스 이용 약관
	if($("#chk02_2").is(":checked") == false){
		alert('서비스 이용약관에 동의해주세요.');
		$("#chk02_2").focus();
		
		return false;
	}
	
	// 개인정보 이용 및 마케팅 활용방침 
	if($("#chk02_3").is(":checked") == false){
		alert('개인정보 이용 및 마케팅 활용방침에 동의해주세요.');
		$("#chk02_3").focus();
		
		return false;
	}
	
	// 회사명
	if($("#company_name").val() == ""){
		alert('회사명을 입력해주세요.');
		$("#company_name").focus();
		
		return false;
	}
	
	// 기업 소개
	if($("#textarea01_3").val() == ""){
		alert('기업소개를 작성해주세요.');
		$("#textarea01_3").focus();
		
		return false;
	}
	
	// 뉴스레터 수신 동의
	var is_newsletter = 2;
	if($("#chk02_4").is(":checked") == true){
		is_newsletter = 1;
	}
	
	var data = {
		dist: 2
		, access_token: $("#access_token").val()
		, email: $("#user_email").val()
		, type: $("#sns_type").val()
		, company: $("#company_name").val()
		, tel1: $("#user_tel01_1").val()
		, tel2: $("#user_tel01_2").val()
		, addr: $("#user_address01_1").val()
		, addr_detail: $("#user_address01_2").val()
		, information: $("#textarea01_3").val()
		, is_newsletter: is_newsletter
	}
	
	// console.log(data); return false;
	
	var cfm = confirm('기업회원 가입을 진행하시겠습니까?');
	
	if(cfm){
		$.ajax({
			url: '/register/cfm'
			, data: data
			, type:"POST"
			, success: function(result){
				console.log(result);
				
				if(result == 1){
					location.href = '/register/company';
				}
			}
			, error: function(xhr, status, responseTxt){
				console.log(xhr);
			}
		});
	}
}