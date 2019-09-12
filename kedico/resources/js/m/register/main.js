/*
 *  회원가입 스크립트 - 모바일
 */ 
 
$("nav.gnb ul.gnb_list li.gnb_login").addClass("active"); 
 
$(document).ready(function(){
	// 탭 클릭
	$("nav.join_tab a").on("click", function(){
		$("nav.join_tab li").removeClass("active");
		$(this).parent().addClass("active");
		
		var idx = $(this).data("idx");
		
		if(idx == 0){
			// 개인회원 가입
			$("div.join_explain ul.explain_private").show();
			$("div.join_explain ul.explain_company").hide();
			$("div.register_private").show();
			$("div.register_company").hide();
		}else if(idx == 1){
			// 기업회원 가입
			$("div.join_explain ul.explain_private").hide();
			$("div.join_explain ul.explain_company").show();
			$("div.register_private").hide();
			$("div.register_company").show();
		}
	});
	
	// 이용약관 펼치기
	$("ul.join_policy_box button.btn_policy").on("click", function(){
		$(this).parent().parent().parent().toggleClass("active");
	});
	
	// 개인회원 모두 동의 체크
	$("#chkbox01_1").on("change", function(){
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
		
		enableRegisterButton(1);
	});
	
	// 개인회원 필수항목 체크 여부 확인
	$("input.chkbox_private").on("change", function(){
		enableRegisterButton(1);
	});
	
	// 기업회원 모두 동의 체크
	$("#chkbox02_1").on("change", function(){
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
		
		enableRegisterButton(2);
	});
	
	// 기업회원 필수항목 체크 여부 확인
	$("input.chkbox_company").on("change", function(){
		enableRegisterButton(2);
	});
	
	// 기업소개 byte 수 체크
	$("#join01_6").on("keyup", function(){
		var info = $(this).val();
		
		var len = getStringByte(info);
		
		if(len > 1500){
			alert('기업 소개는 최대 1500 byte 까지 입력 가능합니다.');
			info = cutByLen(info, 1500);
			
			$(this).val(info);
			// $(this).parent().parent().find("span.txt_count span.emp").text(1000);
			// return false;
		}
		
		var len_info = getStringByte(info)+"/1500";
		
		$(this).parent().find("div.r_side_box span.txt_count").text(len_info);
	});
	
});

// 활성화된 가입하기 버튼 클릭 
$(document).on("click", "div.btn_box button.btn_register", function(){
	var dist = $(this).data("dist");
	
	if(dist == 1){
		// 개인 회원 가입
		registerPrivateUser();
	}else if(dist == 2){
		// 기업 회원 가입
		registerCompanyUser();
	}
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

// 가입하기 버튼 활성화
function enableRegisterButton(dist){
	var btn_active = [];
	var chk_class = "";
	var div_class = "";
	
	if(dist == 1){
		// 개인 회원
		chk_class = "chkbox_private";
		div_class = "register_private";
	}else if(dist == 2){
		// 기업 회원
		chk_class = "chkbox_company";
		div_class = "register_company";
	}else{
		return false;
	}
	
	$("input."+chk_class).each(function(){
		var chk = $(this).is(":checked");
		
		if(chk == true){
			btn_active.push(1);
		}
	});
	
	if(btn_active.length == 2){
		$("div."+div_class+" div.btn_box button.btn_square01").removeClass("disabled");
		$("div."+div_class+" div.btn_box button.btn_square01").addClass("active");
		$("div."+div_class+" div.btn_box button.btn_square01").addClass("btn_register");
		$("div."+div_class+" div.btn_box button.btn_square01").data("dist", dist);
	}else{
		$("div."+div_class+" div.btn_box button.btn_square01").addClass("disabled");
		$("div."+div_class+" div.btn_box button.btn_square01").removeClass("active");
		$("div."+div_class+" div.btn_box button.btn_square01").removeClass("btn_register");
		$("div."+div_class+" div.btn_box button.btn_square01").data("dist", "");
	}	
}

// 개인회원 가입
function registerPrivateUser(){
	// 닉네임
	if($("#user_name").val() == ""){
		alert('닉네임을 입력해주세요.');
		$("#user_name").focus();
		
		return false;
	}
	
	// 뉴스레터 수신 동의
	var is_newsletter = 2;
	if($("#chkbox01_4").is(":checked") == true){
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
					// location.href = '/register/private';
					alert('KEDICO 회원이 되신것을 환영합니다.');
					location.href = '/';
				}
			}
			, error: function(xhr, status, responseTxt){
				console.log(xhr);
			}
		});
	}
}

// 기업회원 가입
function registerCompanyUser(){// 회사명
	if($("#company_name").val() == ""){
		alert('회사명을 입력해주세요.');
		$("#company_name").focus();
		
		return false;
	}
	
	// 기업 소개
	if($("#join01_6").val() == ""){
		alert('기업소개를 작성해주세요.');
		$("#join01_6").focus();
		
		return false;
	}
	
	// 뉴스레터 수신 동의
	var is_newsletter = 2;
	if($("#chkbox02_4").is(":checked") == true){
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
		, information: $("#join01_6").val()
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
					// location.href = '/register/company';
					alert('KEDICO 회원이 되신것을 환영합니다.');
					location.href = '/';
				}
			}
			, error: function(xhr, status, responseTxt){
				console.log(xhr);
			}
		});
	}
}