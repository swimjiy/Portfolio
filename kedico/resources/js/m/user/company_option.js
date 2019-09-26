/* 
 *  기업 부가 서비스 스크립트 - 모바일
 */
 
$(document).ready(function(){
	// 상품 변경
	$("div.toggle_tit input[name=radio01]").on("change", function(){
		var dist_detail = $(this).val();
		
		$("ul.toggle_list li.toggle_item").removeClass("active");
		$(this).parent().parent().parent().addClass("active");
		
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
	
	$("div.btn_box button.btn_payment").on("click", function(){
		$("div.contents form[name=order_info]").submit();
	});
});