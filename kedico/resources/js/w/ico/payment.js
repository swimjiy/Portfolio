/*
 * KEDICO 평가 신청 스크립트 - PC
 */
 
$(document).ready(function(){
	$("nav.con_left ul.lnb li").eq(0).addClass("active");
	
	init_orderid();
	
	// 라디오 체크 변경 시 이벤트 발생
	$("input.inp_radio").on("change", function(){
		var val = $(this).val();
		
		$("table.table_info").hide();
		$("table.table_box tr.tr_eth").hide();
		
		if(val == "card"){ // 신용카드일 경우
			$("table.table_card").show();
			$("table.table_box tr.tr_card").show();
			$("table.table_box tr.tr_eth").hide();
		}else if (val == "eth"){
			$("table.table_eth").show();
			$("table.table_box tr.tr_eth").show();
			$("table.table_box tr.tr_card").hide();
		}
	});
	
	
	// 결제하기 버튼 클릭 시 이벤트 발생
	$("a.btn_payment").on("click", function(){
		var method = $("input.inp_radio:checked").val();
		
		if($("#chk01").is(":checked") == false){
			alert('상품 구매에 동의해주세요.');
			return false;
		}
		
		if(method == "eth" && $("#input01_1").val() == ""){
			alert('보내는 계좌를 입력해주세요.');
			$("#input01_1").focus();
			return false;
		}
		
		// document.order_info.buyr_tel2.value = $("#input02_1").val();
		
		var cfm = confirm("결제를 진행하시겠습니까?");
		
		if(cfm == false) return false;
		
		// 신용카드 결제일 경우
		if(method == "card"){
			jsf__pay();
		}
		// 이더리움 결제일 경우
		else if(method == "eth"){
			document.order_etc.bitcoin_wallet_address.value = $("#input01_1").val();
			
			document.order_etc.submit();
		}
	});
});

/* 표준웹 실행 */
function jsf__pay()
{
	try
	{
		var form = document.order_info;
	
		KCP_Pay_Execute( form ); 
	}
	catch (e)
	{
		/* IE 에서 결제 정상종료시 throw로 스크립트 종료 */ 
	}
}        

/* 주문번호 생성 예제 */
function init_orderid()
{
	var today = new Date();
	var year  = today.getFullYear();
	var month = today.getMonth() + 1;
	var date  = today.getDate();
	var time  = today.getTime();

	if(parseInt(month) < 10) {
		month = "0" + month;
	}

	if(parseInt(date) < 10) {
		date = "0" + date;
	}

	var order_idxx = "kedico_" + year + "" + month + "" + date + "" + time;

	document.order_info.ordr_idxx.value = order_idxx;
}