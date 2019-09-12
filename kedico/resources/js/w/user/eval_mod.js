/*
 *  마이페이지 내 평가 수정하기 - PC
 */ 

 
$(document).ready(function(){
	$("ul.lnb li").eq(3).addClass("active");
	
	openTab(0);
	
	// 평가위원 코멘트 초기 글자 수
	$("div.type_tarea01 span.txt_count span.emp").text(getStringByte($("div.tarea_box textarea").val()));
	
	// 평가위원 코멘트 200자 넘어갈 경우 경고 메시지 출력 후 문자열 자름
	$("div.tarea_box textarea").on("keyup", function(){
		var reply = $(this).val();
		
		var len = getStringByte(reply);
		
		if(len > 1000){
			alert('평가위원 코멘트는 1000바이트 이내로 작성되어야 합니다.');
			reply = cutByLen(reply,1000);
			$(this).val(reply);
			// return false;
		}
		
		$(this).parent().parent().find("span.txt_count span.emp").text(getStringByte(reply));
	});
	
	/*
	// 슬라이더 추가
	$(".range_box_5").slider({
		min: 0
		, max: 5
		, value: 5
		// , step: 0.5
		, slide: function(event, ui){
			var point = ui.value;
			$(this).parent().find("div.range_value span").text(point);
			calcTotalPoint();
		}
	});
	
	$(".range_box_10").slider({
		min: 0
		, max: 10
		, value: 10
		// , step: 0.5
		, slide: function(event, ui){
			var point = ui.value;
			$(this).parent().find("div.range_value span").text(point);
			calcTotalPoint();
		}
	});
	
	// 슬라이더 초기값 설정
	$("ul.checklist_depth").each(function(){
		var point = parseInt($(this).find("div.range_value span").text());
		
		$(this).find("div.range_box").slider("value", point);
	});
	*/
	
});

// 문자열 바이트 구하기
function getStringByte(str){
	var byteSize = 0;
	
	var str_len = str.length;
	
	for(i = 0; i < str_len; i++){
		var ch = str.charAt(i);
		
		var charCode = ch.charCodeAt(0);
		
		if (charCode <= 0x00007F) {
			byteSize++;
		} else if (charCode <= 0x0007FF) {
			byteSize += 2;
		} else if (charCode <= 0x00FFFF) {
			byteSize += 3;
		} else {
			byteSize += 4;
		}
	}
	
	return byteSize;
}

// 문자열 바이트로 자르기 
function cutByLen(str, maxByte){
	var byteSize = 0;
	
	var str_len = str.length;
	
	for(i = 0; i < str_len; i++){
		var ch = str.charAt(i);
		
		var charCode = ch.charCodeAt(0);
		
		if (charCode <= 0x00007F) {
			byteSize++;
		} else if (charCode <= 0x0007FF) {
			byteSize += 2;
		} else if (charCode <= 0x00FFFF) {
			byteSize += 3;
		} else {
			byteSize += 4;
		}
		
		if(byteSize > maxByte)
			break;
	}

	return str.substring(0,i);
}

/*
// 카테고리 별 총점 구하기
function calcTotalPoint(){
	$("article.checklist_wrap div.checklist_depth.depth1").each(function(){
		var total_point = 0;
		
		$(this).find("ul.depth2").each(function(){
			var point = parseFloat($(this).find("li.txt_box li.range_wrap div.range_value span").text());
			
			total_point += point;
		});
		
		$(this).find("div.txt_box span.value span.emp").text(total_point);
	});
}
*/

// 탭 보여주기
function openTab(idx){
	tab_idx = idx;
	
	$("ul.my_step li.item").removeClass("active");
	$("ul.my_step li.item").eq(idx).addClass("active");
	
	$("article.checklist_wrap div.checklist_depth.depth1").removeClass("active");
	$("article.checklist_wrap div.checklist_depth.depth1").eq(idx).addClass("active");
}

// 임시 저장/평가 완료 버튼 클릭
function EvaluationICO(status){
	var data = {};

	data["status"] = status;
	
	// ICO ID
	data["ico_id"] = $("#ico_id").val();
	data["master_id"] = $("#master_id").val();
	
	/*
	// 상세 점수 
	$("ul.checklist_depth.depth2").each(function(){
		var eval_id = $(this).find("li.txt_box").data("eval_id");
		var point = $(this).find("li.txt_box div.range_value span").text();
		
		data[eval_id] = point;
	});
	*/
	
	data['business_point'] = $("#sel01_1_business").val();
	data['tech_point'] = $("#sel01_1_tech").val();
	data['token_point'] = $("#sel01_1_token").val();
	data['marketing_point'] = $("#sel01_1_marketing").val();
	data['legal_point'] = $("#sel01_1_legal").val();
	
	// 평가위원 코멘트가 없을 경우 경고 메시지 호출 후 종료
	if($("div.tarea_box textarea").val() == ""){
		alert('평가위원 코멘트를 작성해주세요.');
		$("div.tarea_box textarea").focus();
		return false;
	}
		
	data["reply"] = $("div.tarea_box textarea").val();
	
	var cfm = confirm("정말로 평가를 수정하시겠습니까?");
	
	if(cfm){
		$.ajax({
			url: '/user/eval_cfm'
			, type: "POST"
			, data: data
			, success: function(result){
				console.log(result);
				
				if(result == 1){
					alert('평가 수정에 성공했습니다.');
					location.href = '/user/eval_list';
				}else{
					alert('평가 수정에 실패했습니다.');
				}
			}
			, error: function(xhr, status, responseTxt){
				console.log(xhr);
			}
		});
	}
}