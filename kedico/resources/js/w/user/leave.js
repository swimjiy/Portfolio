/*
 *  회원 탈퇴 스크립트 - PC
 */
 
$(document).ready(function(){
	$("ul.lnb li").eq(1).addClass("active");
	
	// 탈퇴하기 버튼 클릭 시 이벤트 발생
	$("a.btn_leave").on("click", function(){
		if($("#ico_email").val() == ''){
			alert('이메일을 입력해주세요.');
			$("#ico_email").focus();
			return false;
		}
		
		var cfm = confirm("정말로 탈퇴하시겠습니까?");
		
		if(cfm){
			$.ajax({
				url: '/user/leave_cfm'
				, data:{
					email: $("#ico_email").val()
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
});