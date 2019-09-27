/*
 *  문의하기 스크립트 - PC
 */ 
 
$(document).ready(function(){
	$("nav.con_left ul.lnb li").eq(1).addClass("active");
	
	// 파일 첨부 시 이벤트 발생
	$("#file_upload01_1, #file_upload01_2").on("change", function(e){
		var file = e.target.files;
		
		// 확장자 검사
		var img_arr = file[0].name.split(".");
		var ext = img_arr[img_arr.length-1];
		
		if(ext != "jpg" && ext != "jpeg" && ext != "png" && ext != "gif"){
			alert('jpg, png, gif 파일만 업로드 가능합니다.');
			$(this).val('');
			$(this).parent().find("input[type=text]").val('');
			return false;
		}
		
		// 파일 사이즈 검사
		if(file[0].size > 1024 * 1024 * 5){
			alert('파일 크기는 5MB 이하여야 합니다.');
			$(this).val('');
			$(this).parent().find("input[type=text]").val('');
			return false;
		}

		$(this).parent().find("input[type=text]").val(file[0].name);
	});
	
	// 파일 첨부 삭제 버튼 클릭 시 이벤트 발생
	$("div.type_file01 div.btn_box a.btn_form01").on("click", function(){
		$(this).parent().parent().find("div.input_box input[type=text]").val('');
		$(this).parent().parent().find("div.input_box input[type=file]").val('');
	}); 
});

// 문의하기 버튼 클릭
function sendAsk(){
	// 제목
	if($("#name01").val() == ''){
		alert('제목을 입력해 주세요.');
		$("#name01").focus();
		return false;
	}
	
	// 회신 이메일
	if($("#email01").val() == ''){
		alert('회신 이메일을 입력해 주세요.');
		$("#email01").focus();
		return false;
	}
	
	// 내용
	if($("#textarea01").val() == ''){
		alert('문의 내용을 입력해 주세요.');
		$("#textarea01").focus();
		return false;
	}
	
	var cfm = confirm('문의하시겠습니까?');
	
	if(cfm){
		$("div.con_right form").submit();
	}
} 