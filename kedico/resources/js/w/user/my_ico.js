/*
 *  마이페이지-내 ICO 현황 스크립트 - PC
 */
 
$(document).ready(function(){
	$("nav.con_left ul.lnb li").eq(0).addClass("active");
	
	// slug값 가져오기
	var ico_slug = $("div.table_box table tbody tr").eq(0).data("ico_slug");
	
	// 전문위원 평가 신청 버튼 클릭 시 이벤트 발생 - 평가 신청 결제 페이지로 이동
	$("div.btn_row a.ico_apply").on("click", function(){
		var cfm = confirm("평가 신청을 하시겠습니까?");
		
		if(cfm){
			location.href = '/apply/'+ico_slug;
		}
	});
	
	// ICO 수정 버튼 클릭 시 이벤트 발생 - ICO 수정 페이지로 이동
	$("div.btn_row a.ico_mod").on("click", function(){
		location.href = '/modify/'+ico_slug;
	});
	
	// ICO 삭제 버튼 클릭 시 이벤트 발생 - 경고 메시지 출력 후 동의할 시 ICO 삭제
	$("div.btn_row a.ico_del").on("click", function(){
		var cfm = confirm("ICO를 삭제하시겠습니까?");
		
		if(!cfm) return false;
		
		$.ajax({
			url: '/delete/'+ico_slug
			, data:{
				status: 5
			}
			, success: function(result){
				console.log(result);
				
				if(result == 0){
					alert('ICO 삭제에 성공했습니다.');
					location.reload();
				}else if(result == 1){
					alert('ICO 삭제에 실패했습니다.');
				}else{
					alert('의도치 않은 접근입니다.');
				}
			}
			, error: function(xhr, status, responseTxt){
				console.log(xhr);
			}
		});
	});
	
	// ICO 숨기기 버튼 클릭 시 이벤트 발생 - 경고 메시지 출력 후 동의할 시 ICO 숨김
	$("div.btn_row a.ico_hide").on("click", function(){
		var cfm = confirm("ICO를 숨김 처리하시겠습니까?");
		
		if(!cfm) return false;
		
		$.ajax({
			url: '/delete/'+ico_slug
			, data:{
				status: 7
			}
			, success: function(result){
				console.log(result);
				
				if(result == 0){
					alert('ICO 숨김에 성공했습니다.');
					location.reload();
				}else if(result == 1){
					alert('ICO 숨김에 실패했습니다.');
				}else{
					alert('의도치 않은 접근입니다.');
				}
			}
			, error: function(xhr, status, responseTxt){
				console.log(xhr);
			}
		});
	});
	
	// ICO 숨기기 해제 버튼 클릭 시 이벤트 발생 - 경고 메시지 출력 후 동의할 시 ICO 숨김
	$("div.btn_row a.ico_show").on("click", function(){
		var cfm = confirm("ICO 숨기기 해제하시겠습니까?");
		
		if(!cfm) return false;
		
		$.ajax({
			url: '/delete/'+ico_slug
			, data:{
				status: 3
			}
			, success: function(result){
				console.log(result);
				
				if(result == 0){
					alert('ICO 숨김 해제에 성공했습니다.');
					location.reload();
				}else if(result == 1){
					alert('ICO 숨김 해제에 실패했습니다.');
				}else{
					alert('의도치 않은 접근입니다.');
				}
			}
			, error: function(xhr, status, responseTxt){
				console.log(xhr);
			}
		});
	});
});