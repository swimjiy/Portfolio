/*
 *  마이페이지-내 ICO 현황 스크립트 - 모바일
 */
 
$(document).ready(function(){
	// ICO slug 값
	var ico_slug = $("#ico_slug").val();
	
	// 전문위원 평가신청 버튼 클릭
	$("div.btn_box button.ico_apply").on("click", function(){
		var cfm = confirm("평가 신청을 하시겠습니까?");
		
		if(cfm){
			location.href = '/apply/'+ico_slug;
		}
	});
	
	// 부가서비스 신청 버튼 클릭
	$("div.btn_box button.option_apply").on("click", function(){
		location.href = '/user/option';
	});
});