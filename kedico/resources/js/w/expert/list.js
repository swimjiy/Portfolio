/*
 *  전문위원 리스트 스크립트 - PC
 */
 
$(document).ready(function(){
	$("ul.gnb_list li").eq(3).addClass("active");
	
	// 이름/평가일 순 정렬
	$("div.filter_left select.select_box").on("change", function(){
		var val = $(this).val();
		
		var experts = $("ul.experts_list").children("li").get();
		
		if(val == 1){
			// 이름 순 정렬(오름차순)
			experts.sort(sortByName);
		}else if(val == 2){
			// 평가일 순 정렬(내림차순)
			experts.sort(sortByDate);
		}
		
		$.each(experts, function(idx, row){
			$("ul.experts_list").append(row);
		});
	});
	
	// 이름 검색하기
	$("div.filter_right input.inp_search").on("keyup", function(){
		var search = $(this).val();
		
		$("ul.experts_list li").each(function(){
			var name = $(this).find("div.card_right strong.tit").text();
			
			if(name.includes(search)){
				$(this).show();
			}else{
				$(this).hide();
			}
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
