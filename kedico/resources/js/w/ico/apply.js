/*
 * KEDICO 평가 신청 스크립트 - PC
 */
 
$(document).ready(function(){
	$("nav.con_left ul.lnb li").eq(0).addClass("active");
	
	var detail = $("input[name=dist_detail]");
	changeTxt(detail);
	
	// 라디오 버튼 변경 시 이벤트 발생 - 버튼 텍스트 변경
	$("input[name=dist_detail]").on("change", function(){
		var dist_detail = $(this).val();
		
		changeTxt(dist_detail);
	});
	
	// 결제하기 / 신청하기 버튼 클릭 시 이벤트 발생
	$("a.apply_confirm").on("click", function(){
		if($("#chk01_1").is(":checked") == false){
			alert('legal disclaimer 동의에 체크해주세요.');
			return false;
		} 
		
		var btn_text = $(this).text();
		
		if(btn_text == "결제하기"){ // 빠른 심사일 경우 결제 모듈 실행
			// var ico_slug = $("input[name=ico_slug]").val();
			// location.href = '/payment/'+ico_slug;
			$("#pay_form").submit();
		}else if(btn_text == "신청하기"){ // 일반 심사일 경우 바로 신청 진행
			var cfm = confirm("신청하시겠습니까?");
			
			if(cfm){
				$("#apply_form").submit();
			}
		}
	});
});

// 결제/신청하기 텍스트 변경 함수
function changeTxt(detail){
	if(detail == 1){
		$("article.btn_row a.apply_confirm").text('신청하기');
	}else if(detail == 2){
		$("article.btn_row a.apply_confirm").text('결제하기');
	}
}