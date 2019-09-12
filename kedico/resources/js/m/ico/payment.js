/*
 * KEDICO 결제 스크립트 - 모바일
 */
 
$(document).ready(function(){
	init_orderid();
	chk_pay();
	
	// 라디오 체크 변경 시 이벤트 발생
	$("input.inp_radio").on("change", function(){
		var val = $(this).val();
		
		$("ul.toggle_list li.toggle_item").removeClass("active");
		
		$(this).parent().parent().addClass("active");
	}); 
	
	// 구매 동의 체크
	$("#chkbox01_1").on("change", function(){
		if($(this).is(":checked") == true){
			$("div.btn_box button.btn_decision").removeClass("disabled");
			$("div.btn_box button.btn_decision").addClass("active");
			$("div.btn_box button.btn_decision").addClass("btn_payment");
		}else{
			$("div.btn_box button.btn_decision").addClass("disabled");
			$("div.btn_box button.btn_decision").removeClass("active");
			$("div.btn_box button.btn_decision").removeClass("btn_payment");
		}
	});
});

$(document).on("click", "div.btn_box button.btn_payment", function(){
	var method = $("input.inp_radio:checked").val();
	
	if(method == "eth" && $("#tarea01_1").val() == ""){
		alert('보내는 계좌를 입력해주세요.');
		$("#tarea01_1").focus();
		return false;
	}
	
	var cfm = confirm("결제를 진행하시겠습니까?");

	if(cfm){
		if(method == "card"){
			kcp_AJAX();
		}else if(method == "eth"){
			document.order_eth.bitcoin_wallet_address.value = $("#tarea01_1").val();
			
			document.order_eth.submit();
		}
	}
});

/* 주문번호 생성 예제 */
function init_orderid()
{
	var today = new Date();
	var year  = today.getFullYear();
	var month = today.getMonth() + 1;
	var date  = today.getDate();
	var time  = today.getTime();

	if (parseInt(month) < 10)
	  month = "0" + month;

	if (parseInt(date) < 10)
	  date  = "0" + date;

	var order_idxx = "kedico_" + year + "" + month + "" + date + "" + time;
	var ipgm_date  = year + "" + month + "" + date;

	document.order_info.ordr_idxx.value = order_idxx;
	document.order_info.ipgm_date.value = ipgm_date;
}

/* kcp web 결제창 호출 (변경불가) */
function call_pay_form()
{
	var v_frm = document.order_info;
	
	v_frm.action = PayUrl;
	
	if (v_frm.Ret_URL.value == "")
	{
		//alert("연동시 Ret_URL을 반드시 설정하셔야 됩니다.");
		return false;
	}
	else
	{
		
		// var param_opt_1 = "is_tax::" + v_frm.is_tax.value;
		// v_frm.param_opt_1.value = param_opt_1;
		
		v_frm.submit();
	}

}

/* kcp 통신을 통해 받은 암호화 정보 체크 후 결제 요청 (변경불가) */
function chk_pay()
{
	self.name = "tar_opener";
	var pay_form = document.pay_form;

	if (pay_form.res_cd.value == "3001" )
	{
	  alert("사용자가 취소하였습니다.");
	  pay_form.res_cd.value = "";
	}

	if (pay_form.enc_info.value)
	{
		pay_form.submit();
	}else{
		// alert(1234);
	}

}