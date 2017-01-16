$(function(){
	$(".detail-more").click(function(){
		var word = $(this).prev();
		word.css({
			"height" : "auto",
			"max-height" : "1000px"
		});
		$(this).hide();
		sideH();
	});
	
	sideH();
	
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
	
	//弹窗
	var timer = null;
	var num = $("#pop-time>span").text();
	var cur = 0;
	$(".sub-btn").click(function(){
		$(".pop-wrap").show();
		cur = num;
		timer = setInterval(function(){
			cur--;
			$("#pop-time>span").text(cur);
			if(cur < 0){
				$("#pop-time>span").text(num);
				clearInterval(timer);
				$(".pop-wrap").hide();
			}
		},1000);
	});
	$(".pop-wrap").click(function(){
		pophide();
	});
	$(".close").on("click",function(){
		pophide();
	});
	$(".pop-con").on("click",function(e){
		e.stopPropagation();
	});
	
	function pophide(){
		$(".pop-wrap").hide();
		$("#pop-time>span").text(num);
		clearInterval(timer);
	}
	
});

function sideH(){
	var main = $(".pro-main");
	var side = main.children(".pro-sidebar");
	var disc = side.children(".disclaimer");
	var prob = side.children(".problem");
	var h = main.height() - prob.height() - parseInt(prob.css("margin-bottom"));
	disc.height(h);
}
