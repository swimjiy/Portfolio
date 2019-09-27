/*
 *  개인(일반/전문) 회원 수정 스크립트 - PC
 */ 
 
$(document).ready(function(){
	$("ul.lnb li").eq(1).addClass("active");
	
	// 닉네임 길이 30자 제한
	$("#user_nickname").on("keyup", function(){
		var text_val = $(this).val();
		
		if(text_val.length > 30){
			alert('닉네임은 30자 까지 입력 가능합니다. ');
			text_val = text_val.substring(0, 30);
			$(this).val(text_val);
			return false;
		}
	});
	
	// 직함 길이 10자 제한
	$("#link01_1, #link01_2, #link01_3").on("keyup", function(){
		var text_val = $(this).val();
		
		if(text_val.length > 10){
			alert('직함은 10자 까지 입력 가능합니다. ');
			text_val = text_val.substring(0, 10);
			$(this).val(text_val);
			return false;
		}
	});
	
	// 디폴트 이미지 처리
	var default_img_src = $("div.type_file02 div.img_box img").attr("src");
	var default_img_name = $("#file_name").val();
	
	console.log(default_img_name);
	
	// 프로필 변경 시 이벤트 발생
	$("#file_upload").on("change", function(e){
		var file = e.target.files;
		var reader = new FileReader();
		
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
				$("div.type_file02 div.img_box img").attr("src", e.target.result);
				$("#file_name").val(file[0].name);
			}
		}
		
		reader.readAsDataURL(file[0]);	
	});
	
	// 프로필 사진 삭제 시 이벤트 발생
	$("div.btn_box a.btn_delete_img").on("click", function(){
		$("#file_upload").val('');
		$("div.type_file02 div.img_box img").attr("src", default_img_src);
		$("#file_name").val(default_img_name);
	});
	
	// 전문위원 소개 글자 수 세팅
	var user_information = $("#textarea01_1").val();
	if($("#textarea01_1").length > 0) $("div.type_tarea01 span.txt_count span.emp").text(user_information.length);
	
	// 전문위원 소개 길이 200자 제한
	$("#textarea01_1").on("keyup", function(){
		var info_text = $(this).val();
		
		if(info_text.length > 200){
			alert('전문위원 소개는 200자 까지 입력 가능합니다. ');
			info_text = info_text.substring(0, 200);
			$(this).val(info_text);
		}
		
		$("div.type_tarea01 span.txt_count span.emp").text(info_text.length);
	});
	
	// 탈퇴하기 버튼 클릭 시 이벤트 발생 - 동의 후 탈퇴 처리
	$("div.btn_row div.btn_left a.btn_exit").on("click", function(){
		var cfm = confirm("KEDICO 회원 탈퇴를 진행하시겠습니까?");
		
		if(cfm){
			$.ajax({
				url: '/user/leave'
				, success: function(result){
					console.log(result);
					
					if(result == 1){
						alert('회원님의 정보가 정상적으로 삭제되었습니다.');
						location.href = '/logout';
					}else{
						alert('회원 탈퇴에 실패했습니다.');
					}
				}
				, error: function(xhr, status, responseTxt){
					
				}
			});
		}
	});
});

// 개인 회원 정보 수정
function updateUserInfo(){
	// 닉네임
	if($("#user_nickname").val() == ""){
		alert('닉네임을 입력해주세요.');
		$("#user_nickname").focus();
		return false;
	}
	
	// 직함
	if($("#link01_1").val() == ""){
		alert('첫번째 직함을 입력해주세요.');
		$("#link01_1").focus();
		return false;
	}
	
	// 전문위원 소개
	if($("#textarea01_1").val() == ""){
		alert('전문위원 소개를 작성해주세요.');
		$("#textarea01_1").focus();
		return false;
	}
	
	var cfm = confirm("회원 정보를 수정하시겠습니까?");
	
	if(cfm) $("#setting_form").submit();
	
}