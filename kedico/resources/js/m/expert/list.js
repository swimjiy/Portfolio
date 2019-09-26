/*
 *  전문위원 리스트 스크립트 - 모바일
 */
 
$("nav.gnb ul.gnb_list li.gnb_experts").addClass("active"); 
 
$(document).ready(function(){
	// 이름/ 평가일 순 정렬
	$("#sel01").on("change", function(){
		var val = $(this).val();
		
		var experts = $("ul.card_list").children("li").get();
		
		if(val == 1){
			// 이름 순 정렬(오름차순)
			experts.sort(sortByName);
		}else if(val == 2){
			// 평가일 순 정렬(내림차순)
			experts.sort(sortByDate);
		}
		
		$.each(experts, function(idx, row){
			$("ul.card_list").append(row);
		});
	});
});

// 이름으로 정렬 함수
function sortByName(a,b){
	var name1 = $(a).find("div.card_right strong.tit").text();
	var name2 = $(b).find("div.card_right strong.tit").text();
	
	return (name1 > name2) ? 1 : -1;
}

// 평점으로 정렬 함수
function sortByDate(a,b){
	var date1 = $(a).find("div.word_box span.mod_date").text();
	var date2 = $(b).find("div.word_box span.mod_date").text();
	
	return (date1 > date2) ? -1 : 1;
}