/* 
 *  기업 부가 서비스 스크립트 - PC
 */
 
$(document).ready(function(){
	$("nav.con_left ul.lnb li").eq(1).addClass("active");
	
	// slug값 가져오기
	var ico_slug = $("#ico_slug").val();
	
	// 라디오버튼 변경 시 이벤트 발생
	$("article.radio_box input[name=radio01]").on("change", function(){
		var dist_detail = $(this).val();
		
		document.order_info.dist_detail.value = dist_detail;
		
		if(dist_detail == 3){
			document.order_info.good_mny.value = 10000;
			document.order_info.good_name.value = 'KEDICO 부가서비스 - 플래티넘 패키지';
		}else if(dist_detail == 2){
			document.order_info.good_mny.value = 5000;
			document.order_info.good_name.value = 'KEDICO 부가서비스 - 프라임 패키지';
		}else if(dist_detail == 1){
			document.order_info.good_mny.value = 3000;
			document.order_info.good_name.value = 'KEDICO 부가서비스 - 골드 패키지';
		}
	});

	// 미리보기 버튼 클릭 시 이벤트 발생
	$("article.btn_row a.btn_preview").on("click", function(){
		var pop_url = '/preview/'+ico_slug+'?mode='+document.order_info.dist_detail.value;
		
		window.open(pop_url, "ico_preview", 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbas=no,resizable=no,width=300,height=434,left=10,top=10');
	});
	
	// 결제하기 버튼 클릭 시 이벤트 발생 
	$("article.btn_row a.btn_payment").on("click", function(){
		$("div.con_right form[name=order_info]").submit();
	});
});
  