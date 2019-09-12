/*
 * KEDICO 평가 신청 스크립트 - 모바일
 */
 
$(document).ready(function(){
	var detail = $("input[name=dist_detail]");
	changeTxt(detail);
	
	// 라디오 버튼 변경 시 이벤트 발생 - 버튼 텍스트 변경
	$("input[name=dist_detail]").on("change", function(){
		var dist_detail = $(this).val();
		
		changeTxt(dist_detail);
	});
	
	// legal disclaimer 동의
	$("#chkbox01_1").on("change", function(){
		if($(this).is(":checked") == true){
			$("div.btn_box button.btn_decision").removeClass("disabled");
			$("div.btn_box button.btn_decision").addClass("active");
		}else{
			$("div.btn_box button.btn_decision").addClass("disabled");
			$("div.btn_box button.btn_decision").removeClass("active");
		}
	});
});

$(document).on("click", "div.btn_box button.btn_decision", function(){
	// 체크 활성화 되었을 경우에만 다음 단계로 진행
	if($(this).hasClass("disabled")) return false;
	
	if($(this).hasClass("btn_apply")){
		// 일반 심사 진행
		var cfm = confirm("신청하시겠습니까?");
			
		if(cfm){
			$("#apply_form").submit();
		}
	}else if($(this).hasClass("btn_payment")){
		// 빠른 심사 진행
		$("#pay_form").submit();
	}
});

// 결제/신청하기 텍스트 변경 함수
function changeTxt(detail){
	if(detail == 1){
		// 일반 심사
		$("div.btn_box button.btn_decision").text('신청하기');
		$("div.btn_box button.btn_decision").addClass("btn_apply");
		$("div.btn_box button.btn_decision").removeClass("btn_payment");
	}else if(detail == 2){
		// 빠른 심사
		$("div.btn_box button.btn_decision").text('결제하기');
		$("div.btn_box button.btn_decision").removeClass("btn_apply");
		$("div.btn_box button.btn_decision").addClass("btn_payment");
	}
}