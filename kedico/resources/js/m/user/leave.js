/*
 *  회원 탈퇴 스크립트 - 모바일
 */
 
$(document).ready(function(){
	// 이메일 주소 입력
	$("#inp_txt01_1").on("keyup", function(){
		var email = $(this).val();
		
		if(email != ""){
			$("div.btn_box button.btn_exit").removeClass("disabled");
			$("div.btn_box button.btn_exit").addClass("active");
			$("div.btn_box button.btn_exit").addClass("btn_leave");
		}else{
			$("div.btn_box button.btn_exit").addClass("disabled");
			$("div.btn_box button.btn_exit").removeClass("active");
			$("div.btn_box button.btn_exit").removeClass("btn_leave");
		}
	});
});


// 활성화된 탈퇴하기 버튼 클릭
$(document).on("click", "div.btn_box button.btn_leave", function(){
	var cfm = confirm("정말로 탈퇴하시겠습니까?");
		
	if(cfm){
		$.ajax({
			url: '/user/leave_cfm'
			, data:{
				email: $("#inp_txt01_1").val()
			}
			, type: "GET"
			, success: function(result){
				console.log(result);
				
				if(result == 1){
					alert('회원 탈퇴가 완료되었습니다. 지금까지 이용해주셔서 감사합니다.');
					location.href = '/logout';
				}else if(result == 2){
					alert('회원정보가 일치하지 않습니다. 이메일을 확인해주세요.');
				}else{
					alert('회원 탈퇴에 실패했습니다.');
				}
			}
			, error: function(xhr, status, responseTxt){
				console.log(xhr);
			}
		});
	}
});