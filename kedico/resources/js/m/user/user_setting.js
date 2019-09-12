/*
 *  개인(일반/전문) 회원 수정 스크립트 - 모바일
 */ 
 
$("nav.gnb ul.gnb_list li.gnb_user_setting").addClass("active");  
 
$(document).ready(function(){
	// 닉네임 길이 30자 제한
	$("#user_name").on("keyup", function(){
		var text_val = $(this).val();
		
		if(text_val.length > 30){
			alert('닉네임은 30자 까지 입력 가능합니다. ');
			text_val = text_val.substring(0, 30);
			$(this).val(text_val);
			return false;
		}
	});
	
	// 직함 길이 10자 제한
	$("#inp_txt02_1, #inp_txt02_2, #inp_txt02_3").on("keyup", function(){
		var text_val = $(this).val();
		
		if(text_val.length > 10){
			alert('직함은 10자 까지 입력 가능합니다. ');
			text_val = text_val.substring(0, 10);
			$(this).val(text_val);
			return false;
		}
	});
	
	// 디폴트 이미지 처리
	var default_img_src = $("div.profile_img_box div.thumb img").attr("src");
	
	// 이미지 첨부
	$("#inp_file01_1").on("change", function(e){
		var file = e.target.files;
		var reader = new FileReader();
		
		reader.onload = function(e1){
			var img_arr = file[0].name.split(".");
			var ext = img_arr[img_arr.length-1];
			
			if(file[0].size > 1024 * 1024 * 5){
				alert('이미지 크기는 5MB 이하여야 합니다.');
				$(this).val('');
			}else if(ext != "jpg" && ext != "jpeg" && ext != "png" && ext != "gif"){
				alert('jpg, png, gif 파일만 업로드 가능합니다.');
				$(this).val('');
			}else{
				$("div.profile_img_box div.thumb img").attr("src", e1.target.result);
			}
		}
		
		reader.readAsDataURL(file[0]);
	
		if(file[0].name != "") $(this).parent().addClass("active");
	});
	
	// 이미지 삭제
	$("div.profile_img_box button.btn_close").on("click", function(){
		$("#inp_file01_1").val('');
		$(this).parent().find("div.thumb img").attr("src", default_img_src);
		$(this).parent().parent().find("div.form_row").removeClass("active");
	});
	
	// 전문위원 소개
	var user_information = $("#inp_tarea01_1").val();
	if($("#inp_tarea01_1").length > 0) $("div.type_textarea div.r_side_box span.txt_count").text(user_information.length+'/200');
	
	// 전문위원 소개 길이 200자 제한
	$("#inp_tarea01_1").on("keyup", function(){
		var info_text = $(this).val();
		
		if(info_text.length > 200){
			alert('전문위원 소개는 200자 까지 입력 가능합니다. ');
			info_text = info_text.substring(0, 200);
			$(this).val(info_text);
		}
		
		$("div.type_textarea div.r_side_box span.txt_count").text(info_text.length+'/200');
	});
	
	// 저장하기 버튼 클릭
	$("div.btn_box button.btn_modify").on("click", function(){
		var cfm = confirm("회원 정보를 수정하시겠습니까?");
		
		if(cfm) $("#setting_form").submit();
	});
	
	// 탈퇴하기 버튼 클릭
	$("div.btn_box button.btn_exit").on("click", function(){
		location.href = '/user/leave';
	});
});