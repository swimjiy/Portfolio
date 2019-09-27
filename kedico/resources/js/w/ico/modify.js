/*
 *  ICO 수정 페이지 스크립트 - PC
 */
 
$(document).ready(function(){
	// ICO 진행 기간 2차, 3차, 4차 있을 경우 화면에 출력
	$("#ico_date02_1, #ico_date03_1, #ico_date04_1").each(function(){
		if($(this).val() != ""){
			$(this).parent().parent().show();
		}
	});
	
	// 간단소개 글자 수 
	var summary = $("#textarea01_1").val();
	$("div.ico_summary span.txt_count span.emp").text(getStringByte(summary));
	
	// 상세소개 글자 수 
	var detail = $("#textarea01_2").val();
	$("div.ico_detail span.txt_count span.emp").text(getStringByte(detail));
	
	// 전문위원 재평가 신청
	$("div.btn_right a.btn_re_eval").on("click", function(){
		$("#ico_form input[name=re_eval]").val(1);
		
		var cfm = confirm("ICO를 수정하시겠습니까?");
		
		if(cfm === false) return false;
		
		submitForm();
	});
	
	// 수정하기 버튼 클릭
	$("div.btn_right a.btn_after_eval").on("click", function(){
		$("#ico_form input[name=re_eval]").val("");
		
		var cfm = confirm("ICO를 수정하시겠습니까?");
		
		if(cfm === false) return false;
		
		submitForm();
	});
	
	
});
