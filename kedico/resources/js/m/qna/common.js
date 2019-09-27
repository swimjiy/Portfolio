/*
 *  문의하기 스크립트 - 모바일
 */ 

$(document).ready(function(){
	// 내용 1000 바이트 이하로 제한
	$("#inp_tarea01_1").on("keyup", function(){
		var content = $(this).val();
		
		var cont_len = getStringByte(content);
		
		if(cont_len > 1000){
			alert('문의 내용은 1000바이트를 넘을 수 없습니다.');
			content = cutByLen(content, 1000);
			$(this).val(content);
		}
		
		var len_txt = getStringByte(content) + '/1000';
		
		$("div.type_textarea div.r_side_box span.txt_count").text(len_txt);
	});
	
	// 파일 첨부
	$("#inp_file01_1, #inp_file01_2").on("change", function(e){
		var file = e.target.files;
		var reader = new FileReader();
		
		var class_name = "profile_img_file"+$(this).data("idx");
		
		var inp_file = $(this);
		
		reader.onload = function(e1){
			var img_arr = file[0].name.split(".");
			var ext = img_arr[img_arr.length-1];
			
			if(file[0].size > 1024 * 1024 * 5){
				alert('이미지 크기는 5MB 이하여야 합니다.');
				$(this).val('');
			}else if(ext != "jpg" && ext != "jpeg" && ext != "png" && ext != "gif"){
				alert('jpg, png, gif 파일만 업로드 가능합니다.');
				$(this).val('');
			}else{
				inp_file.parent().parent().find("div."+class_name+" div.thumb img").attr("src", e1.target.result);
			}
		}
		
		reader.readAsDataURL(file[0]);
		$(this).parent().addClass("active");
	});
	
	// 첨부파일 삭제
	$("div.profile_img_box button.btn_close").on("click", function(){
		var type_class = "type_file"+$(this).data("idx");
		
		console.log(type_class);
		
		$(this).parent().find("div.thumb img").attr("src", "");
		$(this).parent().parent().find("div."+type_class).removeClass("active");
		$(this).parent().parent().find("div."+type_class+" input[type=file]").val('');
		
	});
	
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
	
	// 주제
	if($("#inp_sel01_2").val() == ''){
		alert('주제를 선택해 주세요.');
		$("#inp_sel01_2").focus();
		return false;
	}
	
	// 내용
	if($("#inp_tarea01_1").val() == ''){
		alert('문의 내용을 입력해 주세요.');
		$("#inp_tarea01_1").focus();
		return false;
	}
	
	var cfm = confirm('문의하시겠습니까?');
	
	if(cfm){
		$("div.contents form").submit();
	}
} 