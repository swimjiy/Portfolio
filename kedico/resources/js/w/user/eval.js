/*
 *  마이페이지 내 평가 리스트 상세 보기 스크립트 - PC
 */ 

$(document).ready(function(){
	$("ul.lnb li").eq(3).addClass("active");
	
	openTab(0);
	
	// 화면 상단 탭 클릭 시 이벤트 발생 - 카테고리별 점수 보기
	$("ul.tab_list li.col5 a.btn_tab").on("click", function(){
		openTab($(this).data("idx"));
	});
});

function openTab(idx){
	$("div.tab_menu ul.tab_list li.col5").removeClass("active");
	$("div.tab_menu ul.tab_list li.col5").eq(idx).addClass("active");
	
	$("article.checklist_wrap div.depth1").removeClass("active");
	$("article.checklist_wrap div.depth1").eq(idx).addClass("active");
}

// 삭제하기
function deleteMyICOEval(){
	var master_id = $("#master_id").val();
	
	var cfm = confirm("정말로 해당 평가를 삭제하시겠습니까?");
	
	if(cfm){
		$.ajax({
			url: '/user/eval_del?id='+master_id
			, success: function(result){
				console.log(result);
				
				if(result == 1){
					alert('해당 평가가 정상적으로 삭제되었습니다.');
					location.href = '/user/eval_list';
				}else{
					alert('평가 삭제에 실패했습니다.');
				}
			}
			, error: function(xhr, status, responseTxt){
				console.log(xhr);
			}
		});
	}
}