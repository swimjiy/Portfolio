/*
 * KEDICO 평가 결과 스크립트 - PC
 */
 
$(document).ready(function(){
	$("nav.con_left ul.lnb li").eq(2).addClass("active");
	
	openTab(0);
});

function openTab(idx){
	$("div.tab_menu ul.tab_list li.col5").removeClass("active");
	$("div.tab_menu ul.tab_list li.col5").eq(idx).addClass("active");
	
	$("article.checklist_wrap div.checklist_depth").removeClass("active");
	$("article.checklist_wrap div.checklist_depth").eq(idx).addClass("active");
}