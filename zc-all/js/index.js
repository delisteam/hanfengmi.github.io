$(function(){
	$(".know-more").mouseenter(function(){
		$(this).animate({
			"width":180+"px"
		},300);
	}).mouseleave(function(){
		$(this).animate({
			"width":134+"px"
		},300);	
	});
	$(".pro-list").on("mouseenter","a.list-left",function(){
		var w = $(this).find(".pro-detail-wrap");
		if(w.is("animated")){
			return;
		}
		w.stop().animate({
			"right" : "0px"
		},500);
	}).on("mouseleave","a.list-left",function(){
		var w = $(this).find(".pro-detail-wrap");
		w.stop().animate({
			"right" : -w.width() + "px"
		},500);
	});
	
	
	
});
